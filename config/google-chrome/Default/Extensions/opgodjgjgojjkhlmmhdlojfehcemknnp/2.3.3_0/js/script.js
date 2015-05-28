/// <reference path="index.ts" />
var AlienTube;
(function (AlienTube) {
    "use strict";
    var Application = (function () {
        function Application() {
            var _this = this;
            var stylesheet, observer, config;
            Application.Preferences = new AlienTube.BrowserPreferenceManager();
            Application.localisationManager = new AlienTube.LocalisationManager(function () {
                if (window.getCurrentBrowser() === Browser.SAFARI) {
                    stylesheet = document.createElement("link");
                    stylesheet.setAttribute("href", Application.getExtensionRessourcePath("style.css"));
                    stylesheet.setAttribute("type", "text/css");
                    stylesheet.setAttribute("rel", "stylesheet");
                    document.head.appendChild(stylesheet);
                }
                observer = new MutationObserver(_this.mutationObserver);
                config = { attributes: true, childList: true, characterData: true };
                observer.observe(document.getElementById("content"), config);
                _this.currentVideoIdentifier = Application.getCurrentVideoId();
                if (window.isYouTubeVideoPage) {
                    Application.commentSection = new AlienTube.CommentSection(_this.currentVideoIdentifier);
                }
            });
        }
        Application.prototype.mutationObserver = function (mutations) {
            var _this = this;
            mutations.forEach(function (mutation) {
                var target, reportedVideoId;
                target = mutation.target;
                if (target.classList.contains("yt-card") || target.id === "content") {
                    reportedVideoId = Application.getCurrentVideoId();
                    if (reportedVideoId !== _this.currentVideoIdentifier) {
                        _this.currentVideoIdentifier = reportedVideoId;
                        if (window.isYouTubeVideoPage) {
                            Application.commentSection = new AlienTube.CommentSection(_this.currentVideoIdentifier);
                        }
                    }
                }
            });
        };
        Application.getCurrentVideoId = function () {
            var s, requestObjects, i, len, obj;
            if (window.location.search.length > 0) {
                s = window.location.search.substring(1);
                requestObjects = s.split('&');
                for (i = 0, len = requestObjects.length; i < len; i += 1) {
                    obj = requestObjects[i].split('=');
                    if (obj[0] === "v") {
                        return obj[1];
                    }
                }
            }
            return null;
        };
        Application.getHumanReadableTimestamp = function (epochTime) {
            var secs, timeUnits, timeUnit;
            secs = Math.floor(((new Date()).getTime() / 1000) - epochTime);
            secs = Math.abs(secs);
            timeUnits = {
                Year: Math.floor(secs / 60 / 60 / 24 / 365.27),
                Month: Math.floor(secs / 60 / 60 / 24 / 30),
                Day: Math.floor(secs / 60 / 60 / 24),
                Hour: Math.floor(secs / 60 / 60),
                Minute: Math.floor(secs / 60),
                Second: secs,
            };
            for (timeUnit in timeUnits) {
                if (timeUnits.hasOwnProperty(timeUnit) && timeUnits[timeUnit] >= 1) {
                    if (timeUnits[timeUnit] > 1) {
                        return Application.localisationManager.get("timestamp_format", [
                            timeUnits[timeUnit],
                            Application.localisationManager.get("timestamp_format_" + timeUnit.toLowerCase() + "_plural")
                        ]);
                    }
                    else {
                        return Application.localisationManager.get("timestamp_format", [
                            timeUnits[timeUnit],
                            Application.localisationManager.get("timestamp_format_" + timeUnit.toLowerCase())
                        ]);
                    }
                }
            }
            return Application.localisationManager.get("timestamp_format", [
                "0",
                Application.localisationManager.get("timestamp_format_second_plural")
            ]);
        };
        Application.getExtensionRessourcePath = function (path) {
            switch (window.getCurrentBrowser()) {
                case Browser.SAFARI:
                    return safari.extension.baseURI + 'res/' + path;
                case Browser.CHROME:
                    return chrome.extension.getURL('res/' + path);
                case Browser.FIREFOX:
                    return self.options.ressources[path];
                default:
                    return null;
            }
        };
        Application.getExtensionTemplates = function (callback) {
            var template, handlebarHTML, templateLink;
            switch (window.getCurrentBrowser()) {
                case Browser.FIREFOX:
                    template = document.createElement("div");
                    handlebarHTML = Handlebars.compile(self.options.template);
                    template.innerHTML = handlebarHTML();
                    if (callback) {
                        callback(template);
                    }
                    break;
                case Browser.SAFARI:
                    new AlienTube.HttpRequest(Application.getExtensionRessourcePath("templates.html"), AlienTube.RequestType.GET, function (data) {
                        template = document.createElement("div");
                        template.innerHTML = data;
                        document.head.appendChild(template);
                        if (callback) {
                            callback(template);
                        }
                    }, null, null);
                    break;
                case Browser.CHROME:
                    templateLink = document.createElement("link");
                    templateLink.id = "alientubeTemplate";
                    templateLink.onload = function () {
                        if (callback) {
                            callback(templateLink.import);
                        }
                    };
                    templateLink.setAttribute("rel", "import");
                    templateLink.setAttribute("href", Application.getExtensionRessourcePath("templates.html"));
                    document.head.appendChild(templateLink);
                    break;
            }
        };
        Application.getExtensionTemplateItem = function (templateCollection, id) {
            if (window.getCurrentBrowser() === Browser.CHROME) {
                return templateCollection.getElementById(id).content.cloneNode(true);
            }
            else {
                return templateCollection.querySelector("#" + id).content.cloneNode(true);
            }
        };
        return Application;
    })();
    AlienTube.Application = Application;
})(AlienTube || (AlienTube = {}));
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
/// <reference path="index.ts" />
"use strict";
var AlienTube;
(function (AlienTube) {
    var CommentSection = (function () {
        function CommentSection(currentVideoIdentifier) {
            var _this = this;
            var templateLink, loadingScreen, videoSearchString;
            this.threadCollection = new Array();
            this.storedTabCollection = new Array();
            if (currentVideoIdentifier) {
                templateLink = document.createElement("link");
                templateLink.id = "alientubeTemplate";
                AlienTube.Application.getExtensionTemplates(function (templateContainer) {
                    _this.template = templateContainer;
                    loadingScreen = new AlienTube.LoadingScreen(_this, AlienTube.LoadingState.LOADING, AlienTube.Application.localisationManager.get("loading_search_message"));
                    _this.set(loadingScreen.HTMLElement);
                    videoSearchString = encodeURI("(url:\"3D" + currentVideoIdentifier + "\" OR url:\"" + currentVideoIdentifier + "\") (site:youtube.com OR site:youtu.be)");
                    new AlienTube.Reddit.Request("https://api.reddit.com/search.json?q=" + videoSearchString, AlienTube.RequestType.GET, function (results) {
                        var searchResults, finalResultCollection, preferredPost, preferredSubreddit, commentLinks, getExcludedSubreddits, sortedResultCollection;
                        var tabContainer, tabContainerTemplate, ApplicationContainer, linkElement, url, match;
                        var mRegex = /(?:http|https):\/\/(.[^/]+)\/r\/([A-Za-z0-9][A-Za-z0-9_]{2,20})(?:\/comments\/)?([A-Za-z0-9]*)/g;
                        if (results === {} || results.kind !== 'Listing' || results.data.children.length === 0) {
                            _this.returnNoResults();
                        }
                        else {
                            searchResults = results.data.children;
                            finalResultCollection = [];
                            searchResults.forEach(function (result) {
                                if (CommentSection.validateItemFromResultSet(result.data, currentVideoIdentifier)) {
                                    finalResultCollection.push(result.data);
                                }
                            });
                            if (finalResultCollection.length > 0) {
                                commentLinks = document.querySelectorAll("#eow-description a");
                                for (var b = 0, coLen = commentLinks.length; b < coLen; b += 1) {
                                    linkElement = commentLinks[b];
                                    url = linkElement.getAttribute("href");
                                    if (typeof (url) !== 'undefined') {
                                        match = mRegex.exec(url);
                                        if (match) {
                                            preferredSubreddit = match[2];
                                            if (match[3].length > 0)
                                                preferredPost = match[3];
                                            break;
                                        }
                                    }
                                }
                                getExcludedSubreddits = AlienTube.Application.Preferences.enforcedExludedSubreddits.concat(AlienTube.Application.Preferences.getArray("excludedSubredditsSelectedByUser"));
                                sortedResultCollection = {};
                                finalResultCollection.forEach(function (thread) {
                                    if (getExcludedSubreddits.indexOf(thread.subreddit.toLowerCase()) !== -1)
                                        return;
                                    if (thread.score < AlienTube.Application.Preferences.getNumber("hiddenPostScoreThreshold"))
                                        return;
                                    if (!sortedResultCollection.hasOwnProperty(thread.subreddit))
                                        sortedResultCollection[thread.subreddit] = [];
                                    sortedResultCollection[thread.subreddit].push(thread);
                                });
                                _this.threadCollection = [];
                                for (var subreddit in sortedResultCollection) {
                                    if (sortedResultCollection.hasOwnProperty(subreddit)) {
                                        _this.threadCollection.push(sortedResultCollection[subreddit].reduce(function (a, b) {
                                            return ((a.score + (a.num_comments * 10)) > (b.score + (b.num_comments * 10)) || b.id === preferredPost) ? a : b;
                                        }));
                                    }
                                }
                                if (_this.threadCollection.length > 0) {
                                    _this.threadCollection.sort(function (a, b) {
                                        return ((b.score + (b.num_comments * 10)) - (a.score + (a.num_comments * 10)));
                                    });
                                    for (var i = 0, len = _this.threadCollection.length; i < len; i += 1) {
                                        if (_this.threadCollection[i].subreddit === preferredSubreddit) {
                                            var threadDataForFirstTab = _this.threadCollection[i];
                                            _this.threadCollection.splice(i, 1);
                                            _this.threadCollection.splice(0, 0, threadDataForFirstTab);
                                            break;
                                        }
                                    }
                                    tabContainerTemplate = AlienTube.Application.getExtensionTemplateItem(_this.template, "tabcontainer");
                                    tabContainer = tabContainerTemplate.querySelector("#at_tabcontainer");
                                    _this.insertTabsIntoDocument(tabContainer, 0);
                                    window.addEventListener("resize", _this.updateTabsToFitToBoundingContainer.bind(_this), false);
                                    ApplicationContainer = _this.set(tabContainer);
                                    ApplicationContainer.appendChild(tabContainerTemplate.querySelector("#at_comments"));
                                    if (_this.threadCollection[0].id === preferredPost || _this.threadCollection[0].subreddit === preferredSubreddit) {
                                        _this.threadCollection[0].official = true;
                                    }
                                    _this.downloadThread(_this.threadCollection[0]);
                                    return;
                                }
                            }
                            _this.returnNoResults();
                        }
                    }, null, loadingScreen);
                });
            }
        }
        CommentSection.prototype.showTab = function (threadData) {
            var getTabById = this.storedTabCollection.filter(function (x) {
                return x[0].data.children[0].data.name === threadData.name;
            });
            if (getTabById.length > 0) {
                new AlienTube.CommentThread(getTabById[0], this);
            }
            else {
                this.downloadThread(threadData);
            }
        };
        CommentSection.prototype.downloadThread = function (threadData) {
            var _this = this;
            var loadingScreen = new AlienTube.LoadingScreen(this, AlienTube.LoadingState.LOADING, AlienTube.Application.localisationManager.get("loading_post_message"));
            var alientubeCommentContainer = document.getElementById("at_comments");
            while (alientubeCommentContainer.firstChild) {
                alientubeCommentContainer.removeChild(alientubeCommentContainer.firstChild);
            }
            alientubeCommentContainer.appendChild(loadingScreen.HTMLElement);
            var requestUrl = "https://api.reddit.com/r/" + threadData.subreddit + "/comments/" + threadData.id + ".json?sort=" + AlienTube.Application.Preferences.getString("threadSortType");
            new AlienTube.Reddit.Request(requestUrl, AlienTube.RequestType.GET, function (responseObject) {
                responseObject[0].data.children[0].data.official = threadData.official;
                new AlienTube.CommentThread(responseObject, _this);
                _this.storedTabCollection.push(responseObject);
            }, null, loadingScreen);
        };
        CommentSection.prototype.set = function (contents) {
            var bodyBackgroundColor, bodyBackgroundColorArray, bodyBackgroundColorAverage, redditButton, redditText, redditButtonTemplate;
            var redditContainer = document.createElement("section");
            redditContainer.id = "alientube";
            var commentsContainer = document.getElementById("watch7-content");
            var previousRedditInstance = document.getElementById("alientube");
            var googlePlusContainer = document.getElementById("watch-discussion");
            if (previousRedditInstance) {
                commentsContainer.removeChild(previousRedditInstance);
            }
            bodyBackgroundColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
            bodyBackgroundColorArray = bodyBackgroundColor.substring(4, bodyBackgroundColor.length - 1).replace(/ /g, '').split(',');
            bodyBackgroundColorAverage = 0;
            for (var i = 0; i < 3; i += 1) {
                bodyBackgroundColorAverage = bodyBackgroundColorAverage + parseInt(bodyBackgroundColorArray[i], 10);
            }
            bodyBackgroundColorAverage = bodyBackgroundColorAverage / 3;
            if (bodyBackgroundColorAverage < 100) {
                document.body.classList.add("darkmode");
            }
            if (googlePlusContainer) {
                redditButton = document.getElementById("at_switchtoreddit");
                if (!redditButton) {
                    redditButtonTemplate = AlienTube.Application.getExtensionTemplateItem(this.template, "switchtoreddit");
                    redditButton = redditButtonTemplate.querySelector("#at_switchtoreddit");
                    redditText = redditButton.querySelector("#at_reddittext");
                    redditText.textContent = AlienTube.Application.localisationManager.get("post_button_comments");
                    redditButton.addEventListener("click", this.onRedditClick, true);
                    googlePlusContainer.parentNode.insertBefore(redditButton, googlePlusContainer);
                }
                if (this.getDisplayActionForCurrentChannel() === "gplus") {
                    redditContainer.style.display = "none";
                    redditButton.style.display = "block";
                }
                else {
                    googlePlusContainer.style.display = "none";
                }
            }
            var allowOnChannelContainer = document.getElementById("allowOnChannelContainer");
            if (!allowOnChannelContainer) {
                var youTubeActionsContainer = document.getElementById("watch7-user-header");
                var allowOnChannel = AlienTube.Application.getExtensionTemplateItem(this.template, "allowonchannel");
                allowOnChannel.children[0].appendChild(document.createTextNode("Show AlienTube on this channel"));
                var allowOnChannelCheckbox = allowOnChannel.querySelector("#allowonchannel");
                allowOnChannelCheckbox.checked = (this.getDisplayActionForCurrentChannel() === "alientube");
                allowOnChannelCheckbox.addEventListener("change", this.allowOnChannelChange, false);
                youTubeActionsContainer.appendChild(allowOnChannel);
            }
            redditContainer.appendChild(contents);
            commentsContainer.appendChild(redditContainer);
            return redditContainer;
        };
        CommentSection.validateItemFromResultSet = function (itemFromResultSet, currentVideoIdentifier) {
            var urlSearch, requestItems, requestPair, component, shareRequestPair, shareRequestItems, urlSearch, obj;
            if (itemFromResultSet.isRedditPreservedPost() && itemFromResultSet.num_comments < 1) {
                return false;
            }
            if (itemFromResultSet.domain === "youtube.com") {
                urlSearch = itemFromResultSet.url.substring(itemFromResultSet.url.indexOf("?") + 1);
                requestItems = urlSearch.split('&');
                for (var i = 0, len = requestItems.length; i < len; i += 1) {
                    var requestPair = requestItems[i].split("=");
                    if (requestPair[0] === "v" && requestPair[1] === currentVideoIdentifier) {
                        return true;
                    }
                    if (requestPair[0] === "amp;u") {
                        component = decodeURIComponent(requestPair[1]);
                        component = component.replace("/watch?", "");
                        var shareRequestItems = component.split('&');
                        for (var j = 0, slen = shareRequestItems.length; j < slen; j += 1) {
                            var shareRequestPair = shareRequestItems[j].split("=");
                            if (shareRequestPair[0] === "v" && shareRequestPair[1] === currentVideoIdentifier) {
                                return true;
                            }
                        }
                    }
                }
            }
            else if (itemFromResultSet.domain === "youtu.be") {
                urlSearch = itemFromResultSet.url.substring(itemFromResultSet.url.lastIndexOf("/") + 1);
                obj = urlSearch.split('?');
                if (obj[0] === currentVideoIdentifier) {
                    return true;
                }
            }
            return false;
        };
        CommentSection.prototype.insertTabsIntoDocument = function (tabContainer, selectTabAtIndex) {
            var overflowContainer = tabContainer.querySelector("#at_overflow");
            var len = this.threadCollection.length;
            var maxWidth = document.getElementById("watch7-content").offsetWidth - 80;
            var width = (21 + this.threadCollection[0].subreddit.length * 7);
            var i = 0;
            var tab, tabLink, overflowContainerMenu, menuItem, itemName, selectedTab;
            if (len > 0) {
                for (i = 0; i < len; i += 1) {
                    width = width + (21 + (this.threadCollection[i].subreddit.length * 7));
                    if (width >= maxWidth) {
                        break;
                    }
                    tab = document.createElement("button");
                    tab.className = "at_tab";
                    tab.setAttribute("data-value", this.threadCollection[i].subreddit);
                    tabLink = document.createElement("a");
                    tabLink.textContent = this.threadCollection[i].subreddit;
                    tabLink.setAttribute("href", "http://reddit.com/r/" + this.threadCollection[i].subreddit);
                    tabLink.setAttribute("target", "_blank");
                    tab.addEventListener("click", this.onSubredditTabClick.bind(this), false);
                    tab.appendChild(tabLink);
                    tabContainer.insertBefore(tab, overflowContainer);
                }
                if (i < len) {
                    overflowContainer.style.display = "block";
                    overflowContainer.addEventListener("click", function () {
                        overflowContainerMenu = overflowContainer.querySelector("ul");
                        overflowContainerMenu.style.display = "block";
                    }, false);
                    document.body.addEventListener("click", function () {
                        overflowContainerMenu = overflowContainer.querySelector("ul");
                        overflowContainerMenu.style.display = "none";
                    }, true);
                    for (i = i; i < len; i += 1) {
                        menuItem = document.createElement("li");
                        menuItem.setAttribute("data-value", this.threadCollection[i].subreddit);
                        menuItem.addEventListener("click", this.onSubredditOverflowItemClick.bind(this), false);
                        itemName = document.createTextNode(this.threadCollection[i].subreddit);
                        menuItem.appendChild(itemName);
                        overflowContainer.children[1].appendChild(menuItem);
                    }
                }
                else {
                    overflowContainer.style.display = "none";
                }
            }
            else {
                overflowContainer.style.display = "none";
            }
            if (selectTabAtIndex != null) {
                selectedTab = tabContainer.children[selectTabAtIndex];
                selectedTab.classList.add("active");
            }
        };
        CommentSection.prototype.returnNoResults = function () {
            var template, message, googlePlusText, googlePlusButton, googlePlusContainer, redditButton;
            template = AlienTube.Application.getExtensionTemplateItem(this.template, "noposts");
            message = template.querySelector(".single_line");
            message.textContent = AlienTube.Application.localisationManager.get("post_label_noresults");
            googlePlusButton = template.querySelector("#at_switchtogplus");
            googlePlusText = googlePlusButton.querySelector("#at_gplustext");
            googlePlusText.textContent = AlienTube.Application.localisationManager.get("post_button_comments");
            googlePlusButton.addEventListener("click", this.onGooglePlusClick, false);
            this.set(template);
            googlePlusContainer = document.getElementById("watch-discussion");
            if (AlienTube.Application.Preferences.getBoolean("showGooglePlusWhenNoPosts") && googlePlusContainer) {
                googlePlusContainer.style.display = "block";
                document.getElementById("alientube").style.display = "none";
                redditButton = document.getElementById("at_switchtoreddit");
                if (redditButton) {
                    redditButton.classList.add("noresults");
                    document.getElementById("at_reddittext").textContent = AlienTube.Application.localisationManager.get("post_label_noresults");
                }
            }
        };
        CommentSection.prototype.onRedditClick = function (eventObject) {
            var googlePlusContainer, alienTubeContainer, redditButton;
            googlePlusContainer = document.getElementById("watch-discussion");
            googlePlusContainer.style.display = "none";
            alienTubeContainer = document.getElementById("alientube");
            alienTubeContainer.style.display = "block";
            redditButton = document.getElementById("at_switchtoreddit");
            redditButton.style.display = "none";
        };
        CommentSection.prototype.onGooglePlusClick = function (eventObject) {
            var googlePlusContainer, alienTubeContainer, redditButton;
            alienTubeContainer = document.getElementById("alientube");
            alienTubeContainer.style.display = "none";
            googlePlusContainer = document.getElementById("watch-discussion");
            googlePlusContainer.style.display = "block";
            redditButton = document.getElementById("at_switchtoreddit");
            redditButton.style.display = "block";
        };
        CommentSection.prototype.updateTabsToFitToBoundingContainer = function () {
            var _this = this;
            window.requestAnimationFrame(function () {
                var tabContainer, overflowContainer, tabElement, currentActiveTabIndex, i, len;
                tabContainer = document.getElementById("at_tabcontainer");
                if (!tabContainer) {
                    return;
                }
                overflowContainer = tabContainer.querySelector("#at_overflow");
                for (i = 0, len = tabContainer.children.length; i < len; i += 1) {
                    tabElement = tabContainer.children[i];
                    if (tabElement.classList.contains("active")) {
                        currentActiveTabIndex = i;
                        _this.clearTabsFromTabContainer();
                        _this.insertTabsIntoDocument(tabContainer, currentActiveTabIndex);
                        break;
                    }
                }
            });
        };
        CommentSection.prototype.clearTabsFromTabContainer = function () {
            var tabContainer, overflowContainer, childElement, overflowListElement;
            tabContainer = document.getElementById("at_tabcontainer");
            overflowContainer = tabContainer.querySelector("#at_overflow");
            while (tabContainer.firstElementChild) {
                childElement = tabContainer.firstElementChild;
                if (childElement.classList.contains("at_tab")) {
                    tabContainer.removeChild(tabContainer.firstElementChild);
                }
                else {
                    break;
                }
            }
            overflowListElement = overflowContainer.querySelector("ul");
            while (overflowListElement.firstElementChild) {
                overflowListElement.removeChild(overflowListElement.firstElementChild);
            }
        };
        CommentSection.prototype.onSubredditTabClick = function (eventObject) {
            var tabElementClickedByUser, tabContainer, currentIndexOfNewTab, i, len, tabElement;
            tabElementClickedByUser = eventObject.target;
            if (!tabElementClickedByUser.classList.contains("active") && tabElementClickedByUser.tagName === "BUTTON") {
                tabContainer = document.getElementById("at_tabcontainer");
                currentIndexOfNewTab = 0;
                for (i = 0, len = tabContainer.children.length; i < len; i += 1) {
                    tabElement = tabContainer.children[i];
                    if (tabElement === tabElementClickedByUser)
                        currentIndexOfNewTab = i;
                    tabElement.classList.remove("active");
                }
                tabElementClickedByUser.classList.add("active");
                this.showTab(this.threadCollection[currentIndexOfNewTab]);
            }
        };
        CommentSection.prototype.onSubredditOverflowItemClick = function (eventObject) {
            var listOfExistingOverflowItems, i, overflowElement, threadDataForNewTab, len;
            var tabContainer = document.getElementById("at_tabcontainer");
            var overflowItemClickedByUser = eventObject.target;
            var currentIndexOfNewTab = 0;
            listOfExistingOverflowItems = overflowItemClickedByUser.parentNode;
            for (i = 0, len = listOfExistingOverflowItems.children.length; i < len; i += 1) {
                overflowElement = listOfExistingOverflowItems.children[i];
                if (overflowElement === overflowItemClickedByUser)
                    currentIndexOfNewTab = i;
            }
            currentIndexOfNewTab = (tabContainer.children.length) + currentIndexOfNewTab - 1;
            threadDataForNewTab = this.threadCollection[currentIndexOfNewTab];
            this.threadCollection.splice(currentIndexOfNewTab, 1);
            this.threadCollection.splice(0, 0, threadDataForNewTab);
            this.clearTabsFromTabContainer();
            this.insertTabsIntoDocument(tabContainer, 0);
            this.showTab(this.threadCollection[0]);
            eventObject.stopPropagation();
        };
        CommentSection.prototype.allowOnChannelChange = function (eventObject) {
            var allowedOnChannel = eventObject.target.checked;
            var channelName = document.querySelector(".yt-user-info .yt-uix-sessionlink").textContent;
            var channelDisplayActions = AlienTube.Application.Preferences.getObject("channelDisplayActions");
            channelDisplayActions[channelName] = allowedOnChannel ? "alientube" : "gplus";
            AlienTube.Application.Preferences.set("channelDisplayActions", channelDisplayActions);
        };
        CommentSection.prototype.getDisplayActionForCurrentChannel = function () {
            var channelName = document.querySelector(".yt-user-info .yt-uix-sessionlink").textContent;
            var displayActionByUser = AlienTube.Application.Preferences.getObject("channelDisplayActions")[channelName];
            if (displayActionByUser) {
                return displayActionByUser;
            }
            return AlienTube.Application.Preferences.getString("defaultDisplayAction");
        };
        return CommentSection;
    })();
    AlienTube.CommentSection = CommentSection;
})(AlienTube || (AlienTube = {}));
/// <reference path="index.ts" />
"use strict";
var AlienTube;
(function (AlienTube) {
    var CommentThread = (function () {
        function CommentThread(threadData, commentSection) {
            var _this = this;
            this.sortingTypes = [
                "confidence",
                "top",
                "new",
                "controversial",
                "old",
                "qa"
            ];
            var template, title, username, flair, optionsElement, nsfwElement, gildCountElement, timestamp, submittedByUsernameText, openNewCommentBox;
            var saveItemToRedditList, refreshCommentThread, giveGoldToUser, reportToAdministrators, sortController, voteController;
            var googlePlusText, googlePlusButton, googlePlusContainer, officialLabel;
            this.children = new Array();
            this.commentSection = commentSection;
            this.threadInformation = threadData[0].data.children[0].data;
            this.commentData = threadData[1].data.children;
            AlienTube.Application.Preferences.set("redditUserIdentifierHash", threadData[0].data.modhash);
            this.postIsInPreservedMode = this.threadInformation.isRedditPreservedPost();
            template = AlienTube.Application.getExtensionTemplateItem(this.commentSection.template, "threadcontainer");
            this.threadContainer = template.querySelector("#at_comments");
            if (threadData[0].data.modhash.length > 0) {
                this.commentSection.userIsSignedIn = true;
                if (!threadData[0].data.modhash || !AlienTube.Application.Preferences.getString("username")) {
                    new AlienTube.Reddit.RetreiveUsernameRequest();
                }
            }
            else {
                this.commentSection.userIsSignedIn = false;
                AlienTube.Application.Preferences.set("username", "");
                this.threadContainer.classList.add("signedout");
            }
            title = this.threadContainer.querySelector(".title");
            title.innerHTML = this.threadInformation.title;
            title.setAttribute("href", "http://reddit.com" + this.threadInformation.permalink);
            username = this.threadContainer.querySelector(".at_author");
            username.textContent = this.threadInformation.author;
            username.setAttribute("href", "http://www.reddit.com/u/" + this.threadInformation.author);
            username.setAttribute("data-username", this.threadInformation.author);
            if (this.threadInformation.distinguished === "moderator") {
                username.setAttribute("data-reddit-moderator", "true");
            }
            flair = this.threadContainer.querySelector(".at_flair");
            if (this.threadInformation.author_flair_text) {
                flair.textContent = this.threadInformation.author_flair_text;
            }
            else {
                flair.style.display = "none";
            }
            if (this.threadInformation.over_18) {
                optionsElement = this.threadContainer.querySelector(".options");
                nsfwElement = document.createElement("acronym");
                nsfwElement.classList.add("nsfw");
                nsfwElement.setAttribute("title", AlienTube.Application.localisationManager.get("post_badge_NSFW_message"));
                nsfwElement.textContent = AlienTube.Application.localisationManager.get("post_badge_NSFW");
                optionsElement.insertBefore(nsfwElement, optionsElement.firstChild);
            }
            if (this.threadInformation.gilded) {
                gildCountElement = this.threadContainer.querySelector(".at_gilded");
                gildCountElement.setAttribute("data-count", this.threadInformation.gilded);
            }
            timestamp = this.threadContainer.querySelector(".at_timestamp");
            timestamp.textContent = AlienTube.Application.getHumanReadableTimestamp(this.threadInformation.created_utc);
            timestamp.setAttribute("timestamp", new Date(this.threadInformation.created_utc).toISOString());
            submittedByUsernameText = this.threadContainer.querySelector(".templateSubmittedByUsernameText");
            submittedByUsernameText.textContent = AlienTube.Application.localisationManager.get("post_submitted_preposition");
            openNewCommentBox = this.threadContainer.querySelector(".commentTo");
            openNewCommentBox.textContent = this.threadInformation.num_comments + " " + AlienTube.Application.localisationManager.get("post_button_comments").toLowerCase();
            openNewCommentBox.addEventListener("click", this.onCommentButtonClick.bind(this), false);
            saveItemToRedditList = this.threadContainer.querySelector(".save");
            if (this.threadInformation.saved) {
                saveItemToRedditList.textContent = AlienTube.Application.localisationManager.get("post_button_unsave");
                saveItemToRedditList.setAttribute("saved", "true");
            }
            else {
                saveItemToRedditList.textContent = AlienTube.Application.localisationManager.get("post_button_save");
            }
            saveItemToRedditList.addEventListener("click", this.onSaveButtonClick.bind(this), false);
            refreshCommentThread = this.threadContainer.querySelector(".refresh");
            refreshCommentThread.addEventListener("click", function () {
                _this.commentSection.threadCollection.forEach(function (item) {
                    if (item.id === _this.threadInformation.id) {
                        _this.commentSection.downloadThread(item);
                    }
                });
            }, false);
            refreshCommentThread.textContent = AlienTube.Application.localisationManager.get("post_button_refresh");
            giveGoldToUser = this.threadContainer.querySelector(".giveGold");
            giveGoldToUser.setAttribute("href", "http://www.reddit.com/gold?goldtype=gift&months=1&thing=" + this.threadInformation.name);
            giveGoldToUser.textContent = AlienTube.Application.localisationManager.get("post_button_gold");
            reportToAdministrators = this.threadContainer.querySelector(".report");
            reportToAdministrators.textContent = AlienTube.Application.localisationManager.get("post_button_report");
            reportToAdministrators.addEventListener("click", this.onReportButtonClicked.bind(this), false);
            sortController = this.threadContainer.querySelector(".sort");
            for (var sortIndex = 0, sortLength = this.sortingTypes.length; sortIndex < sortLength; sortIndex += 1) {
                sortController.children[sortIndex].textContent = AlienTube.Application.localisationManager.get("post_sort_" + this.sortingTypes[sortIndex]);
            }
            sortController.selectedIndex = this.sortingTypes.indexOf(AlienTube.Application.Preferences.getString("threadSortType"));
            sortController.addEventListener("change", function () {
                AlienTube.Application.Preferences.set("threadSortType", sortController.children[sortController.selectedIndex].getAttribute("value"));
                _this.commentSection.threadCollection.forEach(function (item) {
                    if (item.id === _this.threadInformation.id) {
                        _this.commentSection.downloadThread(item);
                    }
                });
            }, false);
            voteController = this.threadContainer.querySelector(".vote");
            voteController.querySelector(".score").textContent = this.threadInformation.score;
            voteController.querySelector(".arrow.up").addEventListener("click", this.onUpvoteControllerClick.bind(this), false);
            voteController.querySelector(".arrow.down").addEventListener("click", this.onDownvoteControllerClick.bind(this), false);
            if (this.threadInformation.likes === true) {
                voteController.classList.add("liked");
            }
            else if (this.threadInformation.likes === false) {
                voteController.classList.add("disliked");
            }
            googlePlusButton = this.threadContainer.querySelector("#at_switchtogplus");
            googlePlusText = googlePlusButton.querySelector("#at_gplustext");
            googlePlusText.textContent = AlienTube.Application.localisationManager.get("post_button_comments");
            googlePlusButton.addEventListener("click", this.onGooglePlusClick, false);
            googlePlusContainer = document.getElementById("watch-discussion");
            if (AlienTube.Application.Preferences.getBoolean("showGooglePlusButton") === false || googlePlusContainer === null) {
                googlePlusButton.style.display = "none";
            }
            if (this.postIsInPreservedMode) {
                this.threadContainer.classList.add("preserved");
            }
            else {
                if (this.commentSection.userIsSignedIn) {
                    new AlienTube.CommentField(this);
                }
            }
            if (this.threadInformation.official) {
                officialLabel = this.threadContainer.querySelector(".at_official");
                officialLabel.textContent = AlienTube.Application.localisationManager.get("post_message_official");
                officialLabel.style.display = "inline-block";
            }
            this.commentData.forEach(function (commentObject) {
                var readmore, comment;
                if (commentObject.kind === "more") {
                    readmore = new AlienTube.LoadMore(commentObject.data, _this, _this);
                    _this.children.push(readmore);
                    _this.threadContainer.appendChild(readmore.representedHTMLElement);
                }
                else {
                    comment = new AlienTube.Comment(commentObject.data, _this);
                    _this.children.push(comment);
                    _this.threadContainer.appendChild(comment.representedHTMLElement);
                }
            });
            this.set(this.threadContainer);
        }
        CommentThread.prototype.set = function (contents) {
            var oldThread = document.getElementById("at_comments");
            var alientube = document.getElementById("alientube");
            if (alientube && oldThread) {
                alientube.removeChild(oldThread);
            }
            alientube.appendChild(contents);
        };
        CommentThread.prototype.onSaveButtonClick = function (eventObject) {
            var saveButton = eventObject.target;
            var savedType = saveButton.getAttribute("saved") ? AlienTube.Reddit.SaveType.UNSAVE : AlienTube.Reddit.SaveType.SAVE;
            new AlienTube.Reddit.SaveRequest(this.threadInformation.name, savedType, function () {
                if (savedType === AlienTube.Reddit.SaveType.SAVE) {
                    saveButton.setAttribute("saved", "true");
                    saveButton.textContent = AlienTube.Application.localisationManager.get("post_button_unsave");
                }
                else {
                    saveButton.removeAttribute("saved");
                    saveButton.textContent = AlienTube.Application.localisationManager.get("post_button_save");
                }
            });
        };
        CommentThread.prototype.onReportButtonClicked = function (eventObject) {
            new AlienTube.Reddit.Report(this.threadInformation.name, this, true);
        };
        CommentThread.prototype.onGooglePlusClick = function (eventObject) {
            var alienTubeContainer, googlePlusContainer, redditButton;
            alienTubeContainer = document.getElementById("alientube");
            alienTubeContainer.style.display = "none";
            googlePlusContainer = document.getElementById("watch-discussion");
            googlePlusContainer.style.display = "block";
            redditButton = document.getElementById("at_switchtoreddit");
            redditButton.style.display = "block";
            document.body.style.width = document.body.offsetWidth + "px";
            window.getComputedStyle(document.body, null);
            document.body.style.width = "auto";
            window.getComputedStyle(document.body, null);
        };
        CommentThread.prototype.onUpvoteControllerClick = function (eventObject) {
            var upvoteController = eventObject.target;
            var voteController = upvoteController.parentNode;
            var scoreValue = voteController.querySelector(".score");
            if (this.threadInformation.likes === true) {
                voteController.classList.remove("liked");
                this.threadInformation.likes = null;
                this.threadInformation.score = this.threadInformation.score - 1;
                scoreValue.textContent = this.threadInformation.score;
                new AlienTube.Reddit.VoteRequest(this.threadInformation.name, AlienTube.Reddit.VoteType.NONE);
            }
            else {
                if (this.threadInformation.likes === false) {
                    voteController.classList.remove("disliked");
                    this.threadInformation.score = this.threadInformation.score + 2;
                }
                else {
                    this.threadInformation.score = this.threadInformation.score + 1;
                }
                voteController.classList.add("liked");
                this.threadInformation.likes = true;
                scoreValue.textContent = this.threadInformation.score;
                new AlienTube.Reddit.VoteRequest(this.threadInformation.name, AlienTube.Reddit.VoteType.UPVOTE);
            }
        };
        CommentThread.prototype.onDownvoteControllerClick = function (eventObject) {
            var downvoteController = eventObject.target;
            var voteController = downvoteController.parentNode;
            var scoreValue = voteController.querySelector(".score");
            if (this.threadInformation.likes === false) {
                voteController.classList.remove("disliked");
                this.threadInformation.likes = null;
                this.threadInformation.score = this.threadInformation.score + 1;
                scoreValue.textContent = this.threadInformation.score;
                new AlienTube.Reddit.VoteRequest(this.threadInformation.name, AlienTube.Reddit.VoteType.NONE);
            }
            else {
                if (this.threadInformation.likes === true) {
                    voteController.classList.remove("liked");
                    this.threadInformation.score = this.threadInformation.score - 2;
                }
                else {
                    this.threadInformation.score = this.threadInformation.score - 1;
                }
                voteController.classList.add("disliked");
                this.threadInformation.likes = false;
                scoreValue.textContent = this.threadInformation.score;
                new AlienTube.Reddit.VoteRequest(this.threadInformation.name, AlienTube.Reddit.VoteType.DOWNVOTE);
            }
        };
        CommentThread.prototype.onCommentButtonClick = function () {
            var header = document.querySelector(".at_thread");
            var previousCommentBox = header.querySelector(".at_commentfield");
            if (previousCommentBox) {
                previousCommentBox.parentNode.removeChild(previousCommentBox);
            }
            new AlienTube.CommentField(this);
        };
        return CommentThread;
    })();
    AlienTube.CommentThread = CommentThread;
})(AlienTube || (AlienTube = {}));
/// <reference path="index.ts" />
"use strict";
var AlienTube;
(function (AlienTube) {
    var CommentField = (function () {
        function CommentField(parent, initialText, edit) {
            var template, authorName, submitButton, cancelButton, previewHeader, inputField;
            if (parent instanceof AlienTube.CommentThread) {
                this.parentClass = parent;
                this.commentThread = this.parentClass;
                this.parentHTMLElement = this.parentClass.threadContainer.querySelector(".options");
            }
            else if (parent instanceof AlienTube.Comment) {
                this.parentClass = parent;
                this.commentThread = this.parentClass.commentThread;
                this.parentHTMLElement = this.parentClass.representedHTMLElement.querySelector(".options");
            }
            else {
                new TypeError("parent needs to be type CommentThread or Type Comment");
            }
            this.edit = edit;
            var template = AlienTube.Application.getExtensionTemplateItem(this.commentThread.commentSection.template, "commentfield");
            this.representedHTMLElement = template.querySelector(".at_commentfield");
            authorName = this.representedHTMLElement.querySelector(".at_writingauthor");
            authorName.textContent = AlienTube.Application.localisationManager.get("commentfield_label_author", [AlienTube.Application.Preferences.getString("username")]);
            submitButton = this.representedHTMLElement.querySelector(".at_submit");
            submitButton.textContent = AlienTube.Application.localisationManager.get("commentfield_button_submit");
            submitButton.addEventListener("click", this.onSubmitButtonClick.bind(this), false);
            cancelButton = this.representedHTMLElement.querySelector(".at_cancel");
            cancelButton.textContent = AlienTube.Application.localisationManager.get("commentfield_button_cancel");
            cancelButton.addEventListener("click", this.onCancelButtonClick.bind(this), false);
            previewHeader = this.representedHTMLElement.querySelector(".at_preview_header");
            previewHeader.textContent = AlienTube.Application.localisationManager.get("commentfield_label_preview");
            inputField = this.representedHTMLElement.querySelector(".at_textarea");
            if (initialText) {
                inputField.value = initialText;
            }
            inputField.addEventListener("input", this.onInputFieldChange.bind(this), false);
            this.previewElement = this.representedHTMLElement.querySelector(".at_comment_preview");
            this.parentHTMLElement.appendChild(this.representedHTMLElement);
        }
        Object.defineProperty(CommentField.prototype, "HTMLElement", {
            get: function () {
                return this.representedHTMLElement;
            },
            enumerable: true,
            configurable: true
        });
        CommentField.prototype.onSubmitButtonClick = function (eventObject) {
            var _this = this;
            var submitButton, inputField, thing_id;
            submitButton = eventObject.target;
            submitButton.disabled = true;
            inputField = this.representedHTMLElement.querySelector(".at_textarea");
            thing_id = (this.parentClass instanceof AlienTube.CommentThread)
                ? this.parentClass.threadInformation.name : this.parentClass.commentObject.name;
            if (this.edit) {
                new AlienTube.Reddit.EditCommentRequest(thing_id, inputField.value, function (responseText) {
                    _this.parentClass.commentObject.body = inputField.value;
                    var editedCommentBody = _this.parentClass.representedHTMLElement.querySelector(".at_commentcontent");
                    editedCommentBody.innerHTML = SnuOwnd.getParser().render(inputField.value);
                    _this.parentClass.representedHTMLElement.classList.add("edited");
                    _this.representedHTMLElement.parentNode.removeChild(_this.representedHTMLElement);
                });
            }
            else {
                new AlienTube.Reddit.CommentRequest(thing_id, inputField.value, function (responseText) {
                    var responseObject = JSON.parse(responseText);
                    var comment = new AlienTube.Comment(responseObject.json.data.things[0].data, _this.commentThread);
                    _this.parentClass.children.push(comment);
                    if (_this.parentClass instanceof AlienTube.CommentThread) {
                        _this.parentClass.threadContainer.appendChild(comment.representedHTMLElement);
                        new CommentField(_this.parentClass);
                    }
                    else {
                        _this.parentClass.representedHTMLElement.querySelector(".at_replies").appendChild(comment.representedHTMLElement);
                    }
                    _this.parentClass.children.push(comment);
                    comment.representedHTMLElement.scrollIntoView(false);
                    _this.representedHTMLElement.parentNode.removeChild(_this.representedHTMLElement);
                });
            }
        };
        CommentField.prototype.onCancelButtonClick = function () {
            this.representedHTMLElement.parentNode.removeChild(this.representedHTMLElement);
        };
        CommentField.prototype.onInputFieldChange = function (eventObject) {
            var inputField = eventObject.target;
            if (inputField.value.length > 0) {
                this.previewElement.style.display = "block";
                var previewContents = this.previewElement.querySelector(".at_preview_contents");
                previewContents.innerHTML = SnuOwnd.getParser().render(inputField.value);
            }
            else {
                this.previewElement.style.display = "none";
            }
        };
        return CommentField;
    })();
    AlienTube.CommentField = CommentField;
})(AlienTube || (AlienTube = {}));
/// <reference path="index.ts" />
var AlienTube;
(function (AlienTube) {
    var Comment = (function () {
        function Comment(commentData, commentThread) {
            var _this = this;
            var toggleHide, author, flair, score, scorePointsText, timestamp, contentTextHolder, contentTextOfComment, textParsingElement;
            var replyToComment, permalinkElement, parentLinkElement, displaySourceForComment, saveItemToRedditList, giveGoldToUser;
            var reportToAdministrators, editPost, deletePost, voteController, replyContainer;
            this.children = new Array();
            this.commentObject = commentData;
            this.commentThread = commentThread;
            var template = AlienTube.Application.getExtensionTemplateItem(this.commentThread.commentSection.template, "comment");
            this.representedHTMLElement = template.querySelector(".at_comment");
            this.representedHTMLElement.setAttribute("data-reddit-id", commentData.id);
            toggleHide = this.representedHTMLElement.querySelector(".at_togglehide");
            toggleHide.addEventListener("click", function () {
                if (this.representedHTMLElement.classList.contains("hidden")) {
                    this.representedHTMLElement.classList.remove("hidden");
                }
                else {
                    this.representedHTMLElement.classList.add("hidden");
                }
            }.bind(this), false);
            if (this.commentObject.score < AlienTube.Application.Preferences.getNumber("hiddenCommentScoreThreshold")) {
                this.representedHTMLElement.classList.add("hidden");
            }
            author = this.representedHTMLElement.querySelector(".at_author");
            author.textContent = this.commentObject.author;
            author.setAttribute("href", "http://reddit.com/u/" + this.commentObject.author);
            author.setAttribute("data-username", this.commentObject.author);
            if (commentData.author === commentThread.threadInformation.author) {
                author.setAttribute("data-reddit-op", "true");
            }
            if (this.commentObject.gilded) {
                this.representedHTMLElement.querySelector(".at_gilded").setAttribute("data-count", this.commentObject.gilded);
            }
            flair = this.representedHTMLElement.querySelector(".at_flair");
            if (this.commentObject.author_flair_text) {
                flair.textContent = this.commentObject.author_flair_text;
            }
            else {
                flair.style.display = "none";
            }
            score = this.representedHTMLElement.querySelector(".at_score");
            scorePointsText = this.commentObject.score === 1 ? AlienTube.Application.localisationManager.get("post_current_score") : AlienTube.Application.localisationManager.get("post_current_score_plural");
            score.textContent = (this.commentObject.score + scorePointsText);
            timestamp = this.representedHTMLElement.querySelector(".at_timestamp");
            timestamp.textContent = AlienTube.Application.getHumanReadableTimestamp(this.commentObject.created_utc);
            timestamp.setAttribute("timestamp", new Date(this.commentObject.created_utc).toISOString());
            contentTextOfComment = this.representedHTMLElement.querySelector(".at_commentcontent");
            contentTextHolder = document.createElement("span");
            textParsingElement = document.createElement("span");
            textParsingElement.innerHTML = this.commentObject.body;
            contentTextHolder.innerHTML = SnuOwnd.getParser().render(textParsingElement.textContent);
            contentTextOfComment.appendChild(contentTextHolder);
            if (this.commentObject.body === "[deleted]") {
                this.representedHTMLElement.classList.add("deleted");
            }
            replyToComment = this.representedHTMLElement.querySelector(".at_reply");
            replyToComment.textContent = AlienTube.Application.localisationManager.get("post_button_reply");
            replyToComment.addEventListener("click", this.onCommentButtonClick.bind(this), false);
            permalinkElement = this.representedHTMLElement.querySelector(".at_permalink");
            permalinkElement.textContent = AlienTube.Application.localisationManager.get("post_button_permalink");
            permalinkElement.setAttribute("href", "http://www.reddit.com" + commentThread.threadInformation.permalink + this.commentObject.id);
            parentLinkElement = this.representedHTMLElement.querySelector(".at_parentlink");
            parentLinkElement.textContent = AlienTube.Application.localisationManager.get("post_button_parent");
            parentLinkElement.setAttribute("href", "http://www.reddit.com" + commentThread.threadInformation.permalink + "#" + this.commentObject.parent_id.substring(3));
            displaySourceForComment = this.representedHTMLElement.querySelector(".at_displaysource");
            displaySourceForComment.textContent = AlienTube.Application.localisationManager.get("post_button_source");
            displaySourceForComment.addEventListener("click", this.onSourceButtonClick.bind(this), false);
            saveItemToRedditList = this.representedHTMLElement.querySelector(".save");
            if (this.commentObject.saved) {
                saveItemToRedditList.textContent = AlienTube.Application.localisationManager.get("post_button_unsave");
                saveItemToRedditList.setAttribute("saved", "true");
            }
            else {
                saveItemToRedditList.textContent = AlienTube.Application.localisationManager.get("post_button_save");
            }
            saveItemToRedditList.addEventListener("click", this.onSaveButtonClick.bind(this), false);
            giveGoldToUser = this.representedHTMLElement.querySelector(".giveGold");
            giveGoldToUser.setAttribute("href", "http://www.reddit.com/gold?goldtype=gift&months=1&thing=" + this.commentObject.name);
            giveGoldToUser.textContent = AlienTube.Application.localisationManager.get("post_button_gold");
            if (this.commentObject.edited) {
                this.representedHTMLElement.classList.add("edited");
            }
            reportToAdministrators = this.representedHTMLElement.querySelector(".report");
            editPost = this.representedHTMLElement.querySelector(".at_edit");
            deletePost = this.representedHTMLElement.querySelector(".at_delete");
            if (this.commentObject.author === AlienTube.Application.Preferences.getString("username")) {
                reportToAdministrators.parentNode.removeChild(reportToAdministrators);
                editPost.textContent = AlienTube.Application.localisationManager.get("post_button_edit");
                editPost.addEventListener("click", this.onEditPostButtonClick.bind(this), false);
                deletePost.textContent = AlienTube.Application.localisationManager.get("post_button_delete");
                deletePost.addEventListener("click", this.onDeletePostButtonClick.bind(this), false);
            }
            else {
                editPost.parentNode.removeChild(editPost);
                deletePost.parentNode.removeChild(deletePost);
                reportToAdministrators.textContent = AlienTube.Application.localisationManager.get("post_button_report");
                reportToAdministrators.addEventListener("click", this.onReportButtonClicked.bind(this), false);
            }
            voteController = this.representedHTMLElement.querySelector(".vote");
            voteController.querySelector(".arrow.up").addEventListener("click", this.onUpvoteControllerClick.bind(this), false);
            voteController.querySelector(".arrow.down").addEventListener("click", this.onDownvoteControllerClick.bind(this), false);
            if (this.commentObject.likes === true) {
                voteController.classList.add("liked");
            }
            else if (this.commentObject.likes === false) {
                voteController.classList.add("disliked");
            }
            if (this.commentObject.replies) {
                replyContainer = this.representedHTMLElement.querySelector(".at_replies");
                this.commentObject.replies.data.children.forEach(function (commentObject) {
                    var readmore, comment;
                    if (commentObject.kind === "more") {
                        readmore = new AlienTube.LoadMore(commentObject.data, _this, commentThread);
                        _this.children.push(readmore);
                        replyContainer.appendChild(readmore.representedHTMLElement);
                    }
                    else {
                        comment = new Comment(commentObject.data, commentThread);
                        _this.children.push(comment);
                        replyContainer.appendChild(comment.representedHTMLElement);
                    }
                });
            }
        }
        Comment.prototype.onSaveButtonClick = function (eventObject) {
            var saveButton = eventObject.target;
            var savedType = saveButton.getAttribute("saved") ? AlienTube.Reddit.SaveType.UNSAVE : AlienTube.Reddit.SaveType.SAVE;
            new AlienTube.Reddit.SaveRequest(this.commentObject.name, savedType, function () {
                if (savedType === AlienTube.Reddit.SaveType.SAVE) {
                    saveButton.setAttribute("saved", "true");
                    saveButton.textContent = AlienTube.Application.localisationManager.get("post_button_unsave");
                }
                else {
                    saveButton.removeAttribute("saved");
                    saveButton.textContent = AlienTube.Application.localisationManager.get("post_button_save");
                }
            });
        };
        Comment.prototype.onReportButtonClicked = function (eventObject) {
            new AlienTube.Reddit.Report(this.commentObject.name, this.commentThread, false);
        };
        Comment.prototype.onUpvoteControllerClick = function (eventObject) {
            var scorePointsText;
            var upvoteController = eventObject.target;
            var voteController = upvoteController.parentNode;
            var parentNode = voteController.parentNode;
            var scoreValue = parentNode.querySelector(".at_score");
            if (this.commentObject.likes === true) {
                voteController.classList.remove("liked");
                this.commentObject.likes = null;
                this.commentObject.score = this.commentObject.score - 1;
                scorePointsText = this.commentObject.score === 1 ? AlienTube.Application.localisationManager.get("post_current_score") : AlienTube.Application.localisationManager.get("post_current_score_plural");
                scoreValue.textContent = this.commentObject.score + scorePointsText;
                new AlienTube.Reddit.VoteRequest(this.commentObject.name, AlienTube.Reddit.VoteType.NONE);
            }
            else {
                if (this.commentObject.likes === false) {
                    voteController.classList.remove("disliked");
                    this.commentObject.score = this.commentObject.score + 2;
                }
                else {
                    this.commentObject.score = this.commentObject.score + 1;
                }
                voteController.classList.add("liked");
                this.commentObject.likes = true;
                scorePointsText = this.commentObject.score === 1 ? AlienTube.Application.localisationManager.get("post_current_score") : AlienTube.Application.localisationManager.get("post_current_score_plural");
                scoreValue.textContent = this.commentObject.score + scorePointsText;
                new AlienTube.Reddit.VoteRequest(this.commentObject.name, AlienTube.Reddit.VoteType.UPVOTE);
            }
        };
        Comment.prototype.onDownvoteControllerClick = function (eventObject) {
            var downvoteController = eventObject.target;
            var voteController = downvoteController.parentNode;
            var parentNode = voteController.parentNode;
            var scoreValue = parentNode.querySelector(".at_score");
            if (this.commentObject.likes === false) {
                voteController.classList.remove("disliked");
                this.commentObject.likes = null;
                this.commentObject.score = this.commentObject.score + 1;
                var scorePointsText = this.commentObject.score === 1 ? AlienTube.Application.localisationManager.get("post_current_score") : AlienTube.Application.localisationManager.get("post_current_score_plural");
                scoreValue.textContent = this.commentObject.score + scorePointsText;
                new AlienTube.Reddit.VoteRequest(this.commentObject.name, AlienTube.Reddit.VoteType.NONE);
            }
            else {
                if (this.commentObject.likes === true) {
                    voteController.classList.remove("liked");
                    this.commentObject.score = this.commentObject.score - 2;
                }
                else {
                    this.commentObject.score = this.commentObject.score - 1;
                }
                voteController.classList.add("disliked");
                this.commentObject.likes = false;
                var scorePointsText = this.commentObject.score === 1 ? AlienTube.Application.localisationManager.get("post_current_score") : AlienTube.Application.localisationManager.get("post_current_score_plural");
                scoreValue.textContent = this.commentObject.score + scorePointsText;
                new AlienTube.Reddit.VoteRequest(this.commentObject.name, AlienTube.Reddit.VoteType.DOWNVOTE);
            }
        };
        Comment.prototype.onCommentButtonClick = function () {
            var previousCommentBox = this.representedHTMLElement.querySelector(".at_commentfield");
            if (previousCommentBox) {
                previousCommentBox.parentNode.removeChild(previousCommentBox);
            }
            new AlienTube.CommentField(this);
        };
        Comment.prototype.onSourceButtonClick = function () {
            var previousCommentBox = this.representedHTMLElement.querySelector(".at_commentfield");
            if (previousCommentBox) {
                previousCommentBox.parentNode.removeChild(previousCommentBox);
            }
            new AlienTube.CommentField(this, this.commentObject.body);
        };
        Comment.prototype.onEditPostButtonClick = function () {
            var previousCommentBox = this.representedHTMLElement.querySelector(".at_commentfield");
            if (previousCommentBox) {
                previousCommentBox.parentNode.removeChild(previousCommentBox);
            }
            new AlienTube.CommentField(this, this.commentObject.body, true);
        };
        Comment.prototype.onDeletePostButtonClick = function () {
            var _this = this;
            var confirmation = window.confirm(AlienTube.Application.localisationManager.get("post_delete_confirm"));
            if (confirmation) {
                var url = "https://api.reddit.com/api/del";
                new AlienTube.HttpRequest(url, AlienTube.RequestType.POST, function () {
                    _this.representedHTMLElement.parentNode.removeChild(_this.representedHTMLElement);
                    var getIndexInParentList = _this.commentThread.children.indexOf(_this);
                    if (getIndexInParentList !== -1) {
                        _this.commentThread.children.splice(getIndexInParentList, 1);
                    }
                }, {
                    "uh": AlienTube.Application.Preferences.getString("redditUserIdentifierHash"),
                    "id": this.commentObject.name,
                });
            }
        };
        return Comment;
    })();
    AlienTube.Comment = Comment;
})(AlienTube || (AlienTube = {}));
/// <reference path="index.ts" />
"use strict";
var AlienTube;
(function (AlienTube) {
    var LoadMore = (function () {
        function LoadMore(data, referenceParent, commentThread) {
            var replyCount, replyCountText, loadMoreText;
            this.data = data;
            this.commentThread = commentThread;
            this.referenceParent = referenceParent;
            this.representedHTMLElement = AlienTube.Application.getExtensionTemplateItem(commentThread.commentSection.template, "loadmore");
            replyCount = this.representedHTMLElement.querySelector(".at_replycount");
            replyCountText = data.count > 1 ? AlienTube.Application.localisationManager.get("post_label_reply_plural") : AlienTube.Application.localisationManager.get("post_label_reply");
            replyCount.textContent = "(" + data.count + " " + replyCountText + ")";
            loadMoreText = this.representedHTMLElement.querySelector(".at_load");
            loadMoreText.textContent = AlienTube.Application.localisationManager.get("post_button_load_more");
            loadMoreText.addEventListener("click", this.onLoadMoreClick.bind(this), false);
        }
        LoadMore.prototype.onLoadMoreClick = function (eventObject) {
            var _this = this;
            var loadingText, generateRequestUrl;
            loadingText = eventObject.target;
            loadingText.classList.add("loading");
            loadingText.textContent = AlienTube.Application.localisationManager.get("loading_generic_message");
            generateRequestUrl = "https://api.reddit.com/r/" + this.commentThread.threadInformation.subreddit +
                "/comments/" + this.commentThread.threadInformation.id + "/z/" + this.data.id + ".json";
            new AlienTube.HttpRequest(generateRequestUrl, AlienTube.RequestType.GET, function (responseData) {
                var getParentNode, commentItems;
                getParentNode = loadingText.parentNode.parentNode;
                getParentNode.removeChild(loadingText.parentNode);
                commentItems = JSON.parse(responseData)[1].data.children[0].data.replies.data.children;
                if (commentItems.length > 0) {
                    commentItems.forEach(function (commentObject) {
                        var readmore, comment;
                        if (commentObject.kind === "more") {
                            readmore = new LoadMore(commentObject.data, _this.referenceParent, _this.commentThread);
                            _this.referenceParent.children.push(readmore);
                            getParentNode.appendChild(readmore.representedHTMLElement);
                        }
                        else {
                            comment = new AlienTube.Comment(commentObject.data, _this.commentThread);
                            _this.referenceParent.children.push(comment);
                            getParentNode.appendChild(comment.representedHTMLElement);
                        }
                    });
                }
            });
        };
        return LoadMore;
    })();
    AlienTube.LoadMore = LoadMore;
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
/// <reference path="index.ts" />
"use strict";
var AlienTube;
(function (AlienTube) {
    var LoadingScreen = (function () {
        function LoadingScreen(commentSection, initialState, alternativeText) {
            var loadingState = initialState || LoadingState.LOADING;
            this.representedHTMLElement = AlienTube.Application.getExtensionTemplateItem(commentSection.template, "loading");
            this.updateProgress(loadingState, alternativeText);
        }
        Object.defineProperty(LoadingScreen.prototype, "HTMLElement", {
            get: function () {
                return this.representedHTMLElement;
            },
            enumerable: true,
            configurable: true
        });
        LoadingScreen.prototype.updateProgress = function (state, alternativeText) {
            var parentNode;
            this.currentProgressState = state;
            var loadingText = this.representedHTMLElement.querySelector("#at_loadingtext");
            var loadingHeader = this.representedHTMLElement.querySelector("#at_loadingheader");
            switch (this.currentProgressState) {
                case LoadingState.LOADING:
                    this.loadingAttempts = 1;
                    loadingHeader.textContent = alternativeText || AlienTube.Application.localisationManager.get("loading_generic_message");
                    loadingText.textContent = AlienTube.Application.localisationManager.get("loading_generic_text") || "";
                    break;
                case LoadingState.RETRY:
                    this.loadingAttempts += 1;
                    loadingText.textContent = AlienTube.Application.localisationManager.get("loading_retry_message", [
                        this.loadingAttempts.toString(),
                        "3"
                    ]);
                    break;
                case LoadingState.ERROR:
                case LoadingState.COMPLETE:
                    parentNode = this.representedHTMLElement.parentNode;
                    if (parentNode) {
                        this.representedHTMLElement.parentNode.removeChild(this.representedHTMLElement);
                    }
                    delete this;
                    break;
            }
        };
        return LoadingScreen;
    })();
    AlienTube.LoadingScreen = LoadingScreen;
    (function (LoadingState) {
        LoadingState[LoadingState["LOADING"] = 0] = "LOADING";
        LoadingState[LoadingState["RETRY"] = 1] = "RETRY";
        LoadingState[LoadingState["ERROR"] = 2] = "ERROR";
        LoadingState[LoadingState["COMPLETE"] = 3] = "COMPLETE";
    })(AlienTube.LoadingState || (AlienTube.LoadingState = {}));
    var LoadingState = AlienTube.LoadingState;
})(AlienTube || (AlienTube = {}));
/// <reference path="index.ts" />
"use strict";
var AlienTube;
(function (AlienTube) {
    var ErrorScreen = (function () {
        function ErrorScreen(commentSection, errorState, message) {
            var errorImage, errorHeader, errorText, googlePlusText, googlePlusButton, googlePlusContainer, getRandom404Id, retryButton;
            this.representedHTMLElement = AlienTube.Application.getExtensionTemplateItem(commentSection.template, "error");
            errorImage = this.representedHTMLElement.querySelector("img");
            errorHeader = this.representedHTMLElement.querySelector("#at_errorheader");
            errorText = this.representedHTMLElement.querySelector("#at_errortext");
            googlePlusButton = this.representedHTMLElement.querySelector("#at_switchtogplus");
            googlePlusText = googlePlusButton.querySelector("#at_gplustext");
            googlePlusText.textContent = AlienTube.Application.localisationManager.get("post_button_comments");
            googlePlusButton.addEventListener("click", this.onGooglePlusClick, false);
            googlePlusContainer = document.getElementById("watch-discussion");
            if (AlienTube.Application.Preferences.getBoolean("showGooglePlusButton") === false || googlePlusContainer === null) {
                googlePlusButton.style.display = "none";
            }
            switch (errorState) {
                case ErrorState.NOT_FOUND:
                    getRandom404Id = String.fromCharCode(97 + Math.floor(Math.random() * 5));
                    errorImage.setAttribute("src", "https://www.redditstatic.com/reddit404" + getRandom404Id + ".png");
                    errorHeader.textContent = AlienTube.Application.localisationManager.get("error_header_not_found");
                    errorText.textContent = AlienTube.Application.localisationManager.get("error_message_not_found");
                    break;
                case ErrorState.OVERLOAD:
                    errorImage.setAttribute("src", AlienTube.Application.getExtensionRessourcePath("redditoverload.svg"));
                    errorHeader.textContent = AlienTube.Application.localisationManager.get("error_header_overloaded");
                    errorText.textContent = AlienTube.Application.localisationManager.get("error_message_overloaded");
                    break;
                case ErrorState.ERROR:
                case ErrorState.REDDITERROR:
                    errorImage.setAttribute("src", AlienTube.Application.getExtensionRessourcePath("redditbroken.svg"));
                    errorHeader.textContent = AlienTube.Application.localisationManager.get("error_header_generic");
                    if (message) {
                        errorText.textContent = message;
                    }
                    break;
                case ErrorState.CONNECTERROR:
                    errorImage.setAttribute("src", AlienTube.Application.getExtensionRessourcePath("redditbroken.svg"));
                    errorHeader.textContent = AlienTube.Application.localisationManager.get("error_header_interrupted");
                    errorText.textContent = AlienTube.Application.localisationManager.get("error_message_interrupted");
                    break;
            }
            retryButton = this.representedHTMLElement.querySelector(".at_retry");
            retryButton.textContent = AlienTube.Application.localisationManager.get("error_button_retry");
            retryButton.addEventListener("click", this.reload, false);
            commentSection.set(this.representedHTMLElement);
        }
        ErrorScreen.prototype.reload = function () {
            AlienTube.Application.commentSection = new AlienTube.CommentSection(AlienTube.Application.getCurrentVideoId());
        };
        ErrorScreen.prototype.onGooglePlusClick = function (eventObject) {
            var alienTubeContainer = document.getElementById("alientube");
            alienTubeContainer.style.display = "none";
            var googlePlusContainer = document.getElementById("watch-discussion");
            googlePlusContainer.style.display = "block";
            var redditButton = document.getElementById("at_switchtoreddit");
            redditButton.style.display = "block";
        };
        return ErrorScreen;
    })();
    AlienTube.ErrorScreen = ErrorScreen;
    (function (ErrorState) {
        ErrorState[ErrorState["NOT_FOUND"] = 0] = "NOT_FOUND";
        ErrorState[ErrorState["OVERLOAD"] = 1] = "OVERLOAD";
        ErrorState[ErrorState["REDDITERROR"] = 2] = "REDDITERROR";
        ErrorState[ErrorState["CONNECTERROR"] = 3] = "CONNECTERROR";
        ErrorState[ErrorState["ERROR"] = 4] = "ERROR";
    })(AlienTube.ErrorState || (AlienTube.ErrorState = {}));
    var ErrorState = AlienTube.ErrorState;
})(AlienTube || (AlienTube = {}));
/// <reference path="../index.ts" />
"use strict";
var AlienTube;
(function (AlienTube) {
    var Reddit;
    (function (Reddit) {
        var Request = (function () {
            function Request(url, type, callback, postData, loadingScreen) {
                this.loadTimer = 0;
                this.timeoutTimer = 0;
                this.requestUrl = url;
                this.requestType = type;
                this.finalCallback = callback;
                this.postData = postData;
                this.loadingScreen = loadingScreen;
                this.performRequest();
            }
            Request.prototype.performRequest = function () {
                this.attempts += 1;
                this.loadTimer = setTimeout(function () {
                    var loadingText = document.getElementById("at_loadingtext");
                    loadingText.textContent = AlienTube.Application.localisationManager.get("loading_slow_message");
                }, 3000);
                this.timeoutTimer = setTimeout(function () {
                    new AlienTube.ErrorScreen(AlienTube.Application.commentSection, AlienTube.ErrorState.CONNECTERROR);
                }, 15000);
                new AlienTube.HttpRequest(this.requestUrl, this.requestType, this.onSuccess.bind(this), this.postData, this.onRequestError.bind(this));
            };
            Request.prototype.onSuccess = function (responseText) {
                var responseObject;
                clearTimeout(this.loadTimer);
                clearTimeout(this.timeoutTimer);
                this.loadingScreen.updateProgress(AlienTube.LoadingState.COMPLETE);
                try {
                    responseObject = JSON.parse(responseText);
                    this.finalCallback(responseObject);
                }
                catch (e) {
                    if (e.toString().indexOf("SyntaxError: Unexpected end of input") !== -1) {
                        new AlienTube.ErrorScreen(AlienTube.Application.commentSection, AlienTube.ErrorState.CONNECTERROR);
                    }
                    else {
                        new AlienTube.ErrorScreen(AlienTube.Application.commentSection, AlienTube.ErrorState.ERROR, e.toString());
                    }
                }
            };
            Request.prototype.onRequestError = function (xhr) {
                clearTimeout(this.loadTimer);
                clearTimeout(this.timeoutTimer);
                if (this.attempts <= 3 && xhr.status !== 404) {
                    this.loadingScreen.updateProgress(AlienTube.LoadingState.RETRY);
                    this.performRequest();
                }
                else {
                    this.loadingScreen.updateProgress(AlienTube.LoadingState.ERROR);
                    switch (xhr.status) {
                        case 404:
                            new AlienTube.ErrorScreen(AlienTube.Application.commentSection, AlienTube.ErrorState.NOT_FOUND);
                            break;
                        case 503:
                        case 504:
                        case 520:
                        case 521:
                            new AlienTube.ErrorScreen(AlienTube.Application.commentSection, AlienTube.ErrorState.OVERLOAD);
                            break;
                        default:
                            new AlienTube.ErrorScreen(AlienTube.Application.commentSection, AlienTube.ErrorState.REDDITERROR, xhr.responseText);
                    }
                }
            };
            return Request;
        })();
        Reddit.Request = Request;
    })(Reddit = AlienTube.Reddit || (AlienTube.Reddit = {}));
})(AlienTube || (AlienTube = {}));
/// <reference path="../index.ts" />
"use strict";
var AlienTube;
(function (AlienTube) {
    var Reddit;
    (function (Reddit) {
        var CommentRequest = (function () {
            function CommentRequest(thing, comment, callback) {
                var url = "https://api.reddit.com/api/comment";
                new AlienTube.HttpRequest(url, AlienTube.RequestType.POST, callback, {
                    "uh": AlienTube.Application.Preferences.getString("redditUserIdentifierHash"),
                    "thing_id": thing,
                    "text": comment,
                    "api_type": "json"
                });
            }
            return CommentRequest;
        })();
        Reddit.CommentRequest = CommentRequest;
    })(Reddit = AlienTube.Reddit || (AlienTube.Reddit = {}));
})(AlienTube || (AlienTube = {}));
/// <reference path="../index.ts" />
"use strict";
var AlienTube;
(function (AlienTube) {
    var Reddit;
    (function (Reddit) {
        var EditCommentRequest = (function () {
            function EditCommentRequest(thing, comment, callback) {
                var url = "https://api.reddit.com/api/editusertext";
                new AlienTube.HttpRequest(url, AlienTube.RequestType.POST, callback, {
                    "uh": AlienTube.Application.Preferences.getString("redditUserIdentifierHash"),
                    "thing_id": thing,
                    "text": comment,
                    "api_type": "json"
                });
            }
            return EditCommentRequest;
        })();
        Reddit.EditCommentRequest = EditCommentRequest;
    })(Reddit = AlienTube.Reddit || (AlienTube.Reddit = {}));
})(AlienTube || (AlienTube = {}));
/// <reference path="../index.ts" />
"use strict";
var AlienTube;
(function (AlienTube) {
    var Reddit;
    (function (Reddit) {
        var VoteRequest = (function () {
            function VoteRequest(thing, type, callback) {
                var url = "https://api.reddit.com/api/vote";
                new AlienTube.HttpRequest(url, AlienTube.RequestType.POST, callback, {
                    "uh": AlienTube.Application.Preferences.getString("redditUserIdentifierHash"),
                    "id": thing,
                    "dir": type
                });
            }
            return VoteRequest;
        })();
        Reddit.VoteRequest = VoteRequest;
        (function (VoteType) {
            VoteType[VoteType["UPVOTE"] = 1] = "UPVOTE";
            VoteType[VoteType["DOWNVOTE"] = -1] = "DOWNVOTE";
            VoteType[VoteType["NONE"] = 0] = "NONE";
        })(Reddit.VoteType || (Reddit.VoteType = {}));
        var VoteType = Reddit.VoteType;
    })(Reddit = AlienTube.Reddit || (AlienTube.Reddit = {}));
})(AlienTube || (AlienTube = {}));
/// <reference path="../index.ts" />
"use strict";
var AlienTube;
(function (AlienTube) {
    var Reddit;
    (function (Reddit) {
        var Report = (function () {
            function Report(thing, commentThread, isThread) {
                var _this = this;
                var reportTemplate, report_spam, report_vote_manipulation, report_personal_information, report_sexualising_minors, report_breaking_reddit, report_other;
                var submitButton, cancelButton, reportOtherButton, reportOtherField, radioButtonControllers, i, len, parentContainer, commentApplication;
                reportTemplate = AlienTube.Application.getExtensionTemplateItem(commentThread.commentSection.template, "report");
                this.reportContainer = reportTemplate.querySelector(".at_report");
                var report_options = [
                    "spam",
                    "vote_manipulation",
                    "personal_information",
                    "sexualising_minors",
                    "breaking_reddit",
                    "other"
                ];
                report_options.forEach(function (reportOption) {
                    document.querySelector("label[for='report_" + reportOption + "']").textContent = AlienTube.Application.localisationManager.get("report_dialog_" + reportOption);
                });
                submitButton = this.reportContainer.querySelector(".at_report_submit");
                submitButton.appendChild(document.createTextNode(AlienTube.Application.localisationManager.get("report_dialog_button_submit")));
                cancelButton = this.reportContainer.querySelector(".at_report_cancel");
                cancelButton.appendChild(document.createTextNode(AlienTube.Application.localisationManager.get("report_dialog_button_cancel")));
                reportOtherButton = this.reportContainer.querySelector("#report_other");
                reportOtherField = this.reportContainer.querySelector("#report_otherfield");
                var radioButtonControllers = this.reportContainer.querySelectorAll("input[type=radio]");
                for (i = 0, len = radioButtonControllers.length; i < len; i += 1) {
                    radioButtonControllers[i].addEventListener("change", function () {
                        if (reportOtherButton.checked) {
                            reportOtherField.disabled = false;
                        }
                        else {
                            reportOtherField.disabled = true;
                        }
                    }, false);
                }
                submitButton.addEventListener("click", function () {
                    var activeRadioButton, reportReason, otherReason;
                    activeRadioButton = _this.getCurrentSelectedRadioButton();
                    reportReason = "";
                    otherReason = "";
                    if (activeRadioButton) {
                        if (activeRadioButton === reportOtherButton) {
                            reportReason = "other";
                            otherReason = reportOtherField.value;
                        }
                        else {
                            reportReason = activeRadioButton.firstChild.innerHTML;
                        }
                    }
                    new AlienTube.HttpRequest("https://api.reddit.com/api/report", AlienTube.RequestType.POST, function () {
                        var threadCollection, i, len, tabContainer, comment;
                        if (isThread) {
                            threadCollection = commentThread.commentSection.threadCollection;
                            for (i = 0, len = threadCollection.length; i < len; i += 1) {
                                if (threadCollection[i].name === commentThread.threadInformation.name) {
                                    threadCollection.splice(i, 1);
                                    commentThread.commentSection.clearTabsFromTabContainer();
                                    tabContainer = document.getElementById("at_tabcontainer");
                                    commentThread.commentSection.insertTabsIntoDocument(tabContainer, 0);
                                    commentThread.commentSection.downloadThread(threadCollection[0]);
                                    break;
                                }
                            }
                        }
                        else {
                            comment = document.querySelector("article[data-reddit-id='" + thing.substring(3) + "']");
                            if (comment) {
                                comment.parentNode.removeChild(comment);
                            }
                        }
                    }, {
                        "api_type": "json",
                        "reason": reportReason,
                        "other_reason": otherReason,
                        "thing_id": thing,
                        "uh": AlienTube.Application.Preferences.getString("redditUserIdentifierHash")
                    });
                }, false);
                cancelButton.addEventListener("click", function () {
                    _this.reportContainer.parentNode.removeChild(_this.reportContainer);
                }, false);
                if (isThread) {
                    parentContainer = document.querySelector("header .info");
                    parentContainer.appendChild(this.reportContainer);
                }
                else {
                    commentApplication = document.querySelector("article[data-reddit-id='" + thing.substring(3) + "'] .at_commentApplication");
                    commentApplication.appendChild(this.reportContainer);
                }
            }
            Report.prototype.getCurrentSelectedRadioButton = function () {
                var radioButtonControllers = this.reportContainer.querySelectorAll("input[type=radio]");
                for (var i = 0, len = radioButtonControllers.length; i < len; i += 1) {
                    if (radioButtonControllers[i].checked) {
                        return radioButtonControllers[i];
                    }
                }
                return null;
            };
            return Report;
        })();
        Reddit.Report = Report;
    })(Reddit = AlienTube.Reddit || (AlienTube.Reddit = {}));
})(AlienTube || (AlienTube = {}));
/// <reference path="../index.ts" />
"use strict";
var AlienTube;
(function (AlienTube) {
    var Reddit;
    (function (Reddit) {
        var SaveRequest = (function () {
            function SaveRequest(thing, type, callback) {
                var url = "https://api.reddit.com/api/" + SaveType[type].toLowerCase();
                new AlienTube.HttpRequest(url, AlienTube.RequestType.POST, callback, {
                    "uh": AlienTube.Application.Preferences.getString("redditUserIdentifierHash"),
                    "id": thing
                });
            }
            return SaveRequest;
        })();
        Reddit.SaveRequest = SaveRequest;
        (function (SaveType) {
            SaveType[SaveType["SAVE"] = 0] = "SAVE";
            SaveType[SaveType["UNSAVE"] = 1] = "UNSAVE";
        })(Reddit.SaveType || (Reddit.SaveType = {}));
        var SaveType = Reddit.SaveType;
    })(Reddit = AlienTube.Reddit || (AlienTube.Reddit = {}));
})(AlienTube || (AlienTube = {}));
/// <reference path="../index.ts" />
"use strict";
var AlienTube;
(function (AlienTube) {
    var Reddit;
    (function (Reddit) {
        var RetreiveUsernameRequest = (function () {
            function RetreiveUsernameRequest() {
                var url = "https://api.reddit.com/api/me.json";
                new AlienTube.HttpRequest(url, AlienTube.RequestType.GET, function (responseText) {
                    var responseData = JSON.parse(responseText);
                    AlienTube.Application.Preferences.set("username", responseData.data.name);
                    var usernameField = document.querySelector(".at_writingauthor");
                    if (usernameField) {
                        usernameField.textContent = AlienTube.Application.localisationManager.get("commentfield_label_author", [AlienTube.Application.Preferences.getString("username")]);
                    }
                });
            }
            return RetreiveUsernameRequest;
        })();
        Reddit.RetreiveUsernameRequest = RetreiveUsernameRequest;
    })(Reddit = AlienTube.Reddit || (AlienTube.Reddit = {}));
})(AlienTube || (AlienTube = {}));
/// <reference path="Application.ts" />
/// <reference path="HttpRequest.ts" />
/// <reference path="BrowserPreferenceManager.ts" />
/// <reference path="CommentSection.ts" />
/// <reference path="CommentThread.ts" />
/// <reference path="CommentField.ts" />
/// <reference path="Comment.ts" />
/// <reference path="LoadMore.ts" />
/// <reference path="LocalisationManager.ts" />
/// <reference path="LoadingScreen.ts" />
/// <reference path="ErrorScreen.ts" />
/// <reference path="Utilities.ts" />
/// <reference path="RedditAPI/RedditRequest.ts" />
/// <reference path="RedditAPI/Comment.ts" />
/// <reference path="RedditAPI/EditComment.ts" />
/// <reference path="RedditAPI/Vote.ts" />
/// <reference path="RedditAPI/Report.ts" />
/// <reference path="RedditAPI/Save.ts" />
/// <reference path="RedditAPI/Username.ts" />
/// <reference path="typings/snuownd.d.ts" />
/// <reference path="typings/he.d.ts" />
/// <reference path="typings/handlebars.d.ts" />
/// <reference path="typings/chrome/chrome.d.ts" />
/// <reference path="typings/firefox/firefox.d.ts" />
/// <reference path="typings/safari/safari.d.ts" />
"use strict";
function at_initialise() {
    if (window.top === window) {
        if (window.location.host === "alientube.co") {
            document.body.classList.add("installed");
        }
        else {
            new AlienTube.Application();
        }
    }
}
if (document.readyState === "complete" || document.readyState === "interactive") {
    at_initialise();
}
else {
    document.addEventListener("DOMContentLoaded", at_initialise, false);
}
//# sourceMappingURL=script.js.map