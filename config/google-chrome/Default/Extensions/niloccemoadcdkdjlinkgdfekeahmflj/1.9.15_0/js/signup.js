/*
PKT_SIGNUP_OVERLAY is the view itself and contains all of the methods to manipute the overlay and messaging.
It does not contain any logic for saving or communication with the extension or server.
*/
var PKT_SIGNUP_OVERLAY = function (options) 
{
    var self = this;
    this.baseHost = "getpocket.com";
    // this.baseHost = "admin:s3krit@nick1.dev.readitlater.com";

    this.inited = false;
    this.active = false;
    this.delayedStateSaved = false;
    this.wrapper = null;
    this.variant = window.___PKT__SIGNUP_VARIANT;
    this.tagline = window.___PKT__SIGNUP_TAGLINE || '';
    this.preventCloseTimerCancel = false;
    // TODO: populate this with actual translations
    this.translations = {};
    this.closeValid = true;
    this.mouseInside = false;
    this.autocloseTimer = null;
    this.dictJSON = {};
    // TODO: allow the timer to be editable?
    this.autocloseTiming = 4000;
    this.autocloseTimingFinalState = 2000;
    this.initCloseWindowInput = function() {
        self.wrapper.find('.pkt_ext_close').click(function(e) {
            e.preventDefault();
            self.closePopup();
        });
        self.wrapper.find('.btn,.alreadyhave > a').click(function(e)
        {
            self.wrapper.find('.pkt_ext_close').trigger('click');
        });
    };
    this.initAutoCloseEvents = function() {
        this.wrapper.on('mouseenter',function() {
            self.mouseInside = true;
            self.stopCloseTimer();
        });
        this.wrapper.on('mouseleave',function() {
            self.mouseInside = false;
            self.startCloseTimer();
        });
        this.wrapper.on('click',function(e) {
            self.closeValid = false;
        });
    };
    this.startCloseTimer = function(manualtime) 
    {
        var settime = manualtime ? manualtime : self.autocloseTiming;
        if (typeof self.autocloseTimer == 'number') 
        {
            clearTimeout(self.autocloseTimer);
        }
        self.autocloseTimer = setTimeout(function() 
        {
            if (self.closeValid || self.preventCloseTimerCancel) 
            {
                self.wrapper.addClass('pkt_ext_containersignup_inactive');
                self.preventCloseTimerCancel = false;
            }
        }, settime);
    };
    this.stopCloseTimer = function() 
    {
        if (self.preventCloseTimerCancel) 
        {
            return;
        }
        clearTimeout(self.autocloseTimer);
    };
    this.closePopup = function() {
        self.stopCloseTimer();
        self.wrapper.addClass('pkt_ext_containersignup_inactive');
    };
    this.sanitizeText = function(s) {
        var sanitizeMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': '&quot;',
            "'": '&#39;'
        };
        if (typeof s !== 'string')
        {
            return '';
        }
        else
        {
            return String(s).replace(/[&<>"']/g, function (str) {
                return sanitizeMap[str];
            });
        }
    };
    this.getTranslations = function()
    {
        var language = window.navigator.language.toLowerCase();
        this.dictJSON = {};

        var dictsuffix = 'en-US';

        if (language.indexOf('en') == 0)
        {
            dictsuffix = 'en';
        }
        else if (language.indexOf('it') == 0)
        {
            dictsuffix = 'it';
        }
        else if (language.indexOf('fr-ca') == 0)
        {
            dictsuffix = 'fr';
        }
        else if (language.indexOf('fr') == 0)
        {
            dictsuffix = 'fr';
        }
        else if (language.indexOf('de') == 0)
        {
            dictsuffix = 'de';
        }
        else if (language.indexOf('es-es') == 0)
        {
            dictsuffix = 'es';
        }
        else if (language.indexOf('es-419') == 0)
        {
            dictsuffix = 'es_419';
        }
        else if (language.indexOf('es') == 0)
        {
            dictsuffix = 'es';
        }
        else if (language.indexOf('ja') == 0)
        {
            dictsuffix = 'ja';
        }
        else if (language.indexOf('nl') == 0)
        {
            dictsuffix = 'nl';
        }
        else if (language.indexOf('pt-pt') == 0)
        {
            dictsuffix = 'pt_PT';
        }
        else if (language.indexOf('pt') == 0)
        {
            dictsuffix = 'pt_BR';
        }
        else if (language.indexOf('ru') == 0)
        {
            dictsuffix = 'ru';
        }
        else if (language.indexOf('zh-tw') == 0)
        {
            dictsuffix = 'zh_TW';
        }
        else if (language.indexOf('zh') == 0)
        {
            dictsuffix = 'zh_CN';
        }
        else if (language.indexOf('ko') == 0)
        {
            dictsuffix = 'ko';
        }
        else if (language.indexOf('pl') == 0)
        {
            dictsuffix = 'pl';
        }

        var request = new XMLHttpRequest();
        request.onload = function()
        {
            dictJSON = JSON.parse(this.responseText);
        };
        request.open('GET', '../_locales/' + dictsuffix + '/r.json', true);
        request.send();
    };
};

PKT_SIGNUP_OVERLAY.prototype = {
    create : function() 
    {
        if (this.active)
        {
            return;
        }
        this.active = true;
        var self = this;

        // set translations
        self.getTranslations();

        // for now, to keep it simple we are hard coding translations 
        self.dictJSON.tagline = "Read or watch anything you find online on any device, any time.";
        self.dictJSON.signupgoogle = "Sign Up with Google";
        self.dictJSON.or = "or";
        self.dictJSON.alreadyhaveacct = "Already have an account?";
        self.dictJSON.signupemail = "Sign Up with email";
        self.dictJSON.loginnow = "Log in now";
        self.dictJSON.variant = "notset";

        // set variant content manually
        var variant = document.location.href.split('variant=');
        if (variant.length > 1)
        {
             self.dictJSON.variant = variant[1];
            if (variant[1] == 'ext_simplesignup_simpletag2')
            {
                self.dictJSON.tagline = "Save articles and videos from Chrome to view in Pocket anytime, anywhere.";
            }
            else if (variant[1] == 'ext_simplesignup_simpletag3')
            {
                self.dictJSON.tagline = "Catch any article or video in Chrome and view it later on any device.";
            }
        }
        // Create actual content
        $('body').append(Handlebars.templates.signup_shell(this.dictJSON));

        // kill any running timers
        self.preventCloseTimerCancel = false;
        self.stopCloseTimer();
        self.closeValid = true;

    }
};


// Layer between Bookmarklet and Extensions
var PKT_SIGNUP = function () {};

PKT_SIGNUP.prototype = {
    init: function () {
        if (this.inited) {
            return;
        }
        this.overlay = new PKT_SIGNUP_OVERLAY();

        this.inited = true;
        this.requestListener = undefined;
    },

    isChrome: function() {
        return window.chrome != undefined && window.chrome.app;
    },

    isSafari: function() {
        return window.safari != undefined;
    },

    addMessageListener: function (listener) {
        // Remove event listener if one is currently registered
        if (this.requestListener !== undefined) {
            this.removeMessageListener();
        }

        // Add request listener
        if (this.isChrome()) {
            this.requestListener = listener;
            chrome.extension.onMessage.addListener(listener);
        } else if (this.isSafari()) {
            this.requestListener = function (thingy) {
                listener(thingy.message, thingy);
            };
            window.safari.self.addEventListener("message", this.requestListener);
        }
    },

    removeMessageListener: function () {
        if (this.isChrome()) {
            chrome.extension.onMessage.removeListener(this.requestListener);
        } else if (this.isSafari()) {
            window.safari.self.removeEventListener("message", this.requestListener);
        }
        this.requestListener = undefined;
    },

    sendMessage: function (message, cb) {
        if (this.isChrome()) {
            if (window.chrome.extension.sendMessage) {
                window.chrome.extension.sendMessage(message, cb);
            } else {
                window.chrome.extension.sendRequest(message, cb);
            }
        } else if (this.isSafari()) {
            if (cb) {
                message["__cbId"] = Callbacker.addCb(cb);
            }

            safari.self.tab.dispatchMessage("message", message);
        }
    },

    handleMessageResponse: function(response) {
        if (response.status == "success") {
            if (typeof response.item_id == 'string') {
                this.overlay.savedItemId = response.item_id;
            }
            this.overlay.showStateSaved();
        }
        else if (response.status == "unauthorized") {
            this.overlay.showStateUnauthorized();
        }
        else if (response.status == "error") {
            this.overlay.showStateError(response.message);
        }
    },

    create: function() {
        this.overlay.create();


        this.addMessageListener(function(request, sender, response) {
            this.handleMessageResponse(request);
        }.bind(this));
        thePKT_SIGNUP.sendMessage({action: "listenerReady"}, function (response) {
        });
        thePKT_SIGNUP.sendMessage({action: "saveCurrentTab"}, function (response) {
        });
    }
}

$(function()
{
    if(!window.thePKT_SIGNUP){
        var thePKT_SIGNUP = new PKT_SIGNUP();
        window.thePKT_SIGNUP = thePKT_SIGNUP;
        thePKT_SIGNUP.init();
    }

    window.thePKT_SIGNUP.create();
});

