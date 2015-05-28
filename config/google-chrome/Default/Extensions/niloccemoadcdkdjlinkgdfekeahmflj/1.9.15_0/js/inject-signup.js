/* VERSION 3.2*/
// Use http://jscompress.com/ and copy output to inject-signup.js when ready to go to production
//try{
if (window.thePKT_SIGNUP) {
    window.thePKT_SIGNUP.show();
}
else {

    /*
    PKT_SIGNUP_OVERLAY is the view itself and contains all of the methods to manipute the overlay and messaging.
    It does not contain any logic for saving or communication with the extension or server.
    */
    var PKT_SIGNUP_OVERLAY = function (options) {
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
        this.translations.addTags = pkt.r_i18n.add_tags || 'Add Tags';
        this.closeValid = true;
        this.mouseInside = false;
        this.autocloseTimer = null;
        // TODO: allow the timer to be editable?
        this.autocloseTiming = 4000;
        this.autocloseTimingFinalState = 2000;
        this.showStateActive = function() 
        {
            self.wrapper.attr('class','pkt_ext_containersignup pkt_ext_containersignup_active');
        };
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
    };

    PKT_SIGNUP_OVERLAY.prototype = {
        create : function() {
            if (this.active)
            {
                return;
            }
            this.active = true;
            var self = this;

            // kill any running timers
            self.preventCloseTimerCancel = false;
            self.stopCloseTimer();
            self.closeValid = true;

            var bodys = document.getElementsByTagName('body');
            var body = bodys ? bodys[0] : false;

            if (!body) {
                body = document.documentElement;
            }
            if (!this.inited) {
                this.inited = true;
                // add page saved element
                var container;
                var existingcontainer = document.getElementsByClassName('pkt_ext_containersignup');

                if (!existingcontainer.length) {
                    var containerbaseclass = 'pkt_ext_containersignup';
                    container = document.createElement('div');

                    container.className = containerbaseclass;
                    container.setAttribute('aria-live','polite');
                    var extcontainerdetail = '\
                        <a class="pkt_ext_close" href="#">Close</a>\
                        <h2 class="pkt_ext_logo">Pocket</h2>\
                        <p>' + self.tagline + '</p>\
                        <a href="http://getpocket.com/signup?force=google&src=extension&route=/extension_login_success&forcevariant=' + self.variant + '" target="_blank" class="btn signup-btn-google"><span class="logo"></span><span class="text">Sign Up with Google</span></a>\
                        <div class="signup-ordivider">or</div>\
                        <a href="http://getpocket.com/signup?force=email&src=extension&route=/extension_login_success&forcevariant=' + self.variant + '" target="_blank" class="btn btn-secondary signup-btn-email signup-btn-initstate">Sign Up with email</a>\
                        <p class="alreadyhave">Already have an account? <a href="http://getpocket.com/login?ep=3&src=extension&route=/extension_login_success&forcevariant=' + self.variant + '" target="_blank">Log in now</a> <span class="rarrow">›</span></p>';
                    container.innerHTML = extcontainerdetail;
                    body.appendChild(container);
                    self.wrapper = $('.pkt_ext_containersignup');
                    self.initCloseWindowInput();
                }
                else
                {
                    container = container[0];
                }

                // set page saved to active
                setTimeout(function()
                {
                    self.showStateActive();
                    self.active = false;
                },10);
            }
            else 
            {
                self.showStateActive();
                self.active = false;
            }
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

        show: function() {
            this.overlay.create();

            this.addMessageListener(function(request, sender, response) {
                this.handleMessageResponse(request);
            }.bind(this));
            thePKT_SIGNUP.sendMessage({action: "listenerReady"}, function (response) {
            });
        }


    }

    // make sure the page has fully loaded before trying anything
    $(document).ready(function() {
        if(!window.thePKT_SIGNUP){
            var thePKT_SIGNUP = new PKT_SIGNUP();
            window.thePKT_SIGNUP = thePKT_SIGNUP;
            thePKT_SIGNUP.init();
        }

        window.thePKT_SIGNUP.show();
    });
}
void(0);
//}catch(e){alert(e);}
