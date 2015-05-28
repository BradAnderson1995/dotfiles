/// <reference path="typings/chrome/chrome.d.ts" />
/// <reference path="typings/firefox/firefox.d.ts" />
/// <reference path="typings/safari/safari.d.ts" />
if (!Object.prototype.isRedditPreservedPost) {
    Object.prototype.isRedditPreservedPost = function () {
        if (!this) {
            return false;
        }
        var currentEpochTime = ((new Date()).getTime() / 1000);
        return ((currentEpochTime - this.created_utc) >= 15552000);
    };
}
if (!window.isYouTubeVideoPage) {
    window.isYouTubeVideoPage = function () {
        return (window.location.pathname === "watch");
    };
}
if (!window.getCurrentBrowser) {
    window.getCurrentBrowser = function () {
        if (typeof (chrome) !== 'undefined')
            return Browser.CHROME;
        else if (typeof (self.on) !== 'undefined')
            return Browser.FIREFOX;
        else if (typeof (safari) !== 'undefined')
            return Browser.SAFARI;
        else {
            throw "Invalid Browser";
        }
    };
}
if (!window.parseBoolean) {
    window.parseBoolean = function (arg) {
        switch (typeof (arg)) {
            case "string":
                return arg.trim().toLowerCase() === "true";
                break;
            case "number":
                return arg > 0;
            default:
                return arg;
        }
    };
}
var Browser;
(function (Browser) {
    Browser[Browser["CHROME"] = 0] = "CHROME";
    Browser[Browser["FIREFOX"] = 1] = "FIREFOX";
    Browser[Browser["SAFARI"] = 2] = "SAFARI";
})(Browser || (Browser = {}));
"use strict";
var AlienTube;
(function (AlienTube) {
    var HttpRequest = (function () {
        function HttpRequest(url, type, callback, postData, errorHandler) {
            var uuid, listener, xhr, query, key, postData;
            if (window.getCurrentBrowser() === Browser.SAFARI) {
                uuid = HttpRequest.generateUUID();
                listener = safari.self.addEventListener('message', function listenerFunction(event) {
                    if (event.message.uuid !== uuid)
                        return;
                    xhr = JSON.parse(event.message.data);
                    if (HttpRequest.acceptableResponseTypes.indexOf(xhr.status) !== -1) {
                        if (callback) {
                            callback(xhr.responseText);
                        }
                    }
                    else {
                        if (errorHandler)
                            errorHandler(xhr);
                    }
                    safari.self.removeEventListener('message', listenerFunction, false);
                }, false);
                query = [];
                if (type === RequestType.POST) {
                    query = [];
                    for (key in postData) {
                        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(postData[key]));
                    }
                }
                safari.self.tab.dispatchMessage(RequestType[type], {
                    'url': url,
                    'uuid': uuid,
                    'data': query.join('&')
                });
            }
            else {
                xhr = new XMLHttpRequest();
                xhr.open(RequestType[type], url, true);
                xhr.withCredentials = true;
                if (type === RequestType.POST) {
                    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                }
                xhr.onload = function () {
                    if (HttpRequest.acceptableResponseTypes.indexOf(xhr.status) !== -1) {
                        if (callback) {
                            callback(xhr.responseText);
                        }
                    }
                    else {
                        if (errorHandler)
                            errorHandler(xhr);
                    }
                };
                if (type === RequestType.POST) {
                    query = [];
                    for (key in postData) {
                        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(postData[key]));
                    }
                    xhr.send(query.join('&'));
                }
                else {
                    xhr.send();
                }
            }
        }
        HttpRequest.generateUUID = function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };
        HttpRequest.acceptableResponseTypes = [200, 201, 202, 301, 302, 303, 0];
        return HttpRequest;
    })();
    AlienTube.HttpRequest = HttpRequest;
    (function (RequestType) {
        RequestType[RequestType["GET"] = 0] = "GET";
        RequestType[RequestType["POST"] = 1] = "POST";
    })(AlienTube.RequestType || (AlienTube.RequestType = {}));
    var RequestType = AlienTube.RequestType;
})(AlienTube || (AlienTube = {}));
/// <reference path="Utilities.ts" />
/// <reference path="HttpRequest.ts" />
"use strict";
var AlienTube;
(function (AlienTube) {
    var LocalisationManager = (function () {
        function LocalisationManager(callback) {
            var _this = this;
            this.supportedLocalisations = [
                'en',
                'no',
                'es',
                'fr'
            ];
            var localisation;
            switch (window.getCurrentBrowser()) {
                case Browser.SAFARI:
                    localisation = navigator.language.split('-')[0];
                    if (this.supportedLocalisations.indexOf(localisation) === -1) {
                        localisation = "en";
                    }
                    new AlienTube.HttpRequest(safari.extension.baseURI + '_locales/' + localisation + "/messages.json", AlienTube.RequestType.GET, function (data) {
                        _this.localisationData = JSON.parse(data);
                        if (callback)
                            setTimeout(callback, 0);
                    }, null, null);
                    break;
                case Browser.FIREFOX:
                    this.localisationData = JSON.parse(self.options.localisation);
                    if (callback)
                        setTimeout(callback, 0);
                    break;
                default:
                    if (callback)
                        setTimeout(callback, 0);
                    break;
            }
        }
        LocalisationManager.prototype.get = function (key, placeholders) {
            var localisationItem, message, placeholder, placeHolderArgumentIndex;
            switch (window.getCurrentBrowser()) {
                case Browser.CHROME:
                    if (placeholders) {
                        return chrome.i18n.getMessage(key, placeholders);
                    }
                    else {
                        return chrome.i18n.getMessage(key);
                    }
                    break;
                case Browser.SAFARI:
                case Browser.FIREFOX:
                    if (placeholders) {
                        localisationItem = this.localisationData[key];
                        if (localisationItem) {
                            message = localisationItem.message;
                            for (placeholder in localisationItem.placeholders) {
                                if (localisationItem.placeholders.hasOwnProperty(placeholder)) {
                                    placeHolderArgumentIndex = parseInt(localisationItem.placeholders[placeholder].content.substring(1), 10);
                                    message = message.replace("$" + placeholder.toUpperCase() + "$", placeholders[placeHolderArgumentIndex - 1]);
                                }
                            }
                            return message;
                        }
                    }
                    else {
                        return this.localisationData[key] ? this.localisationData[key].message : "";
                    }
                    break;
            }
            return "";
        };
        return LocalisationManager;
    })();
    AlienTube.LocalisationManager = LocalisationManager;
})(AlienTube || (AlienTube = {}));
/// <reference path="Utilities.ts" />
"use strict";
var AlienTube;
(function (AlienTube) {
    var BrowserPreferenceManager = (function () {
        function BrowserPreferenceManager(callback) {
            var _this = this;
            this.defaults = {
                hiddenPostScoreThreshold: -4,
                hiddenCommentScoreThreshold: -4,
                showGooglePlusWhenNoPosts: true,
                showGooglePlusButton: true,
                threadSortType: "confidence",
                redditUserIdentifierHash: "",
                excludedSubredditsSelectedByUser: [],
                displayGooglePlusByDefault: false,
                defaultDisplayAction: "alientube",
                channelDisplayActions: {}
            };
            this.preferences = {};
            switch (window.getCurrentBrowser()) {
                case Browser.CHROME:
                    chrome.storage.sync.get(null, function (settings) {
                        _this.preferences = settings;
                        if (callback) {
                            callback(_this);
                        }
                    });
                    break;
                case Browser.FIREFOX:
                    this.preferences = self.options.preferences;
                    if (callback) {
                        callback(this);
                    }
                    break;
                case Browser.SAFARI:
                    var listener = safari.self.addEventListener('message', function listenerFunction(event) {
                        if (event.name === "preferences") {
                            this.preferences = event.message;
                            if (callback) {
                                callback(this);
                            }
                        }
                    }, false);
                    safari.self.tab.dispatchMessage("getPreferences", null);
                    if (callback) {
                        callback(this);
                    }
                    break;
            }
        }
        BrowserPreferenceManager.prototype.get = function (key) {
            if (this.preferences[key] !== null && typeof (this.preferences[key]) !== 'undefined') {
                return this.preferences[key];
            }
            return this.defaults[key];
        };
        BrowserPreferenceManager.prototype.getString = function (key) {
            return this.get(key);
        };
        BrowserPreferenceManager.prototype.getNumber = function (key) {
            return parseInt(this.get(key), 10);
        };
        BrowserPreferenceManager.prototype.getBoolean = function (key) {
            return window.parseBoolean(this.get(key));
        };
        BrowserPreferenceManager.prototype.getArray = function (key) {
            if (Array.isArray(this.get(key))) {
                return this.get(key);
            }
            return JSON.parse(this.get(key));
        };
        BrowserPreferenceManager.prototype.getObject = function (key) {
            if (typeof this.get(key) === 'object') {
                return this.get(key);
            }
            return JSON.parse(this.get(key));
        };
        BrowserPreferenceManager.prototype.set = function (key, value) {
            this.preferences[key] = value;
            switch (window.getCurrentBrowser()) {
                case Browser.CHROME:
                    chrome.storage.sync.set(this.preferences);
                    break;
                case Browser.FIREFOX:
                    self.port.emit("setSettingsValue", {
                        key: key,
                        value: value
                    });
                    break;
                case Browser.SAFARI:
                    safari.self.tab.dispatchMessage("setPreference", {
                        'key': key,
                        'value': value
                    });
                    break;
            }
        };
        Object.defineProperty(BrowserPreferenceManager.prototype, "enforcedExludedSubreddits", {
            get: function () {
                return [
                    "mensrights",
                    "beatingcripples",
                    "beatingwomen",
                    "rapingwomen",
                    "beatingchildren",
                    "watchpeopledie",
                    "pussypass",
                    "theredpill",
                    "redpillwomen",
                    "protectandserve",
                    "whiterights",
                    "blackcrime",
                    "whiterightsuk",
                    "white_pride",
                    "whitenationalism",
                    "northwestfront",
                    "stopwhitegenocide",
                    "race_realism",
                    "racism_immigration",
                    "hate_crimes",
                    "gdnews",
                    "hbd",
                    "rights4men",
                    "muhfeelings",
                    "polistan",
                    "collapse",
                    "retardedcripples",
                    "killingboys",
                    "arandabottest"
                ];
            },
            enumerable: true,
            configurable: true
        });
        return BrowserPreferenceManager;
    })();
    AlienTube.BrowserPreferenceManager = BrowserPreferenceManager;
})(AlienTube || (AlienTube = {}));
/// <reference path="../LocalisationManager.ts" />
/// <reference path="../BrowserPreferenceManager.ts" />
"use strict";
var AlienTube;
(function (AlienTube) {
    var Options = (function () {
        function Options() {
            var _this = this;
            this.localisationManager = new AlienTube.LocalisationManager(function () {
                var i, len, label;
                _this.hiddenPostScoreThresholdElement = document.getElementById("hiddenPostScoreThreshold");
                _this.hiddenCommentScoreThresholdElement = document.getElementById("hiddenCommentScoreThreshold");
                _this.showGooglePlusWhenNoPostsElement = document.getElementById("showGooglePlusWhenNoPosts");
                _this.showGooglePlusButtonElement = document.getElementById("showGooglePlusButton");
                _this.defaultDisplayActionElement = document.getElementById("defaultDisplayAction");
                _this.saveOptionsButton = document.getElementById("saveButton");
                _this.displayAboutDialogButton = document.getElementById("aboutButton");
                _this.closeAboutDialogButton = document.getElementById("closeButton");
                _this.saveOptionsButton.textContent = _this.localisationManager.get("options_button_save");
                _this.displayAboutDialogButton.textContent = _this.localisationManager.get("options_button_about");
                _this.closeAboutDialogButton.textContent = _this.localisationManager.get("options_button_close");
                document.title = _this.localisationManager.get("options_button_title");
                _this.preferences = new AlienTube.BrowserPreferenceManager(function (preferences) {
                    for (i = 0, len = Options.preferenceKeyList.length; i < len; i += 1) {
                        console.log("label[for='" + Options.preferenceKeyList[i] + "']");
                        label = document.querySelector("label[for='" + Options.preferenceKeyList[i] + "']");
                        label.textContent = _this.localisationManager.get("options_label_" + Options.preferenceKeyList[i]);
                    }
                    _this.defaultDisplayActionElement.options[0].textContent = _this.localisationManager.get("options_label_alientube");
                    _this.defaultDisplayActionElement.options[1].textContent = _this.localisationManager.get("options_label_gplus");
                    _this.hiddenPostScoreThresholdElement.value = preferences.getNumber("hiddenPostScoreThreshold");
                    _this.hiddenCommentScoreThresholdElement.value = preferences.getNumber("hiddenCommentScoreThreshold");
                    _this.showGooglePlusWhenNoPostsElement.checked = preferences.getBoolean("showGooglePlusWhenNoPosts");
                    _this.showGooglePlusButtonElement.checked = preferences.getBoolean("showGooglePlusButton");
                    _this.defaultDisplayActionElement.selectedIndex = preferences.getString("defaultDisplayAction") === "alientube" ? 0 : 1;
                    _this.saveOptionsButton.addEventListener("click", _this.save.bind(_this), false);
                    _this.displayAboutDialogButton.addEventListener("click", _this.displayAboutDialog.bind(_this), false);
                    _this.closeAboutDialogButton.addEventListener("click", _this.closeAboutDialog.bind(_this), false);
                    document.getElementById("cover").addEventListener("click", _this.closeAboutDialog.bind(_this), false);
                    document.getElementById("versiontext").textContent = _this.localisationManager.get("options_label_version");
                    document.getElementById('version').textContent = Options.getExtensionVersionNumber();
                });
            });
        }
        Options.prototype.save = function () {
            if (!this.hiddenPostScoreThresholdElement.value.match(/[0-9]+/)) {
                this.hiddenPostScoreThresholdElement.value = -4;
            }
            if (!this.hiddenCommentScoreThresholdElement.value.match(/[0-9]+/)) {
                this.hiddenCommentScoreThresholdElement.value = -4;
            }
            this.preferences.set('hiddenPostScoreThreshold', this.hiddenPostScoreThresholdElement.value);
            this.preferences.set('hiddenCommentScoreThreshold', this.hiddenCommentScoreThresholdElement.value);
            this.preferences.set('showGooglePlusWhenNoPosts', this.showGooglePlusWhenNoPostsElement.checked);
            this.preferences.set('showGooglePlusButton', this.showGooglePlusButtonElement.checked);
            this.preferences.set('defaultDisplayAction', this.defaultDisplayActionElement.value);
            this.displayOptionsSavedTicker.bind(this);
        };
        Options.prototype.displayAboutDialog = function () {
            document.getElementById('about').style.visibility = "visible";
            document.getElementById('cover').style.visibility = "visible";
        };
        Options.prototype.closeAboutDialog = function () {
            document.getElementById('about').style.visibility = "collapse";
            document.getElementById('cover').style.visibility = "collapse";
        };
        Options.prototype.displayOptionsSavedTicker = function () {
            var status = document.getElementById("status");
            status.textContent = this.localisationManager.get("options_label_saved");
            setTimeout(function () {
                status.textContent = "";
            }, 3000);
        };
        Options.getExtensionVersionNumber = function () {
            switch (window.getCurrentBrowser()) {
                case Browser.CHROME:
                    return chrome.app.getDetails().version;
                    break;
                case Browser.FIREFOX:
                    return self.options.version;
                    break;
            }
            return "";
        };
        Options.preferenceKeyList = [
            "hiddenPostScoreThreshold",
            "hiddenCommentScoreThreshold",
            "showGooglePlusWhenNoPosts",
            "showGooglePlusButton",
            "defaultDisplayAction"
        ];
        return Options;
    })();
    AlienTube.Options = Options;
})(AlienTube || (AlienTube = {}));
new AlienTube.Options();
