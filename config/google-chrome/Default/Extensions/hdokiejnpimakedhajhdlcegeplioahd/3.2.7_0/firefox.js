function alert(a){g_chrome.Cc["@mozilla.org/embedcomp/prompt-service;1"].getService(g_chrome.Ci.nsIPromptService).alert(null,gs("LastPass"),a)}function confirm(a){return g_chrome.Cc["@mozilla.org/embedcomp/prompt-service;1"].getService(g_chrome.Ci.nsIPromptService).confirm(null,gs("LastPass"),a)}
try{g_chrome=require("chrome");g_addon_window=require("sdk/addon/window");g_deprecated_window_utils=require("sdk/deprecated/window-utils");g_loader_options=require("@loader/options");g_model_core=require("sdk/model/core");try{g_clipboard=require("sdk/clipboard")}catch(e$$12){}try{g_context_menu=require("sdk/context-menu")}catch(e$$13){}g_ff_hotkeys=require("sdk/hotkeys");g_ff_notifications=require("sdk/notifications");g_page_mod=require("sdk/page-mod");try{g_panel=require("sdk/panel")}catch(e$$14){}g_passwords=
require("sdk/passwords");g_private_browsing=require("sdk/private-browsing");g_self=require("sdk/self");g_simple_storage=require("sdk/simple-storage");g_tabs=require("sdk/tabs");g_timers=require("sdk/timers");g_windows=require("sdk/windows");g_system=require("sdk/system");g_net_xhr=require("sdk/net/xhr");try{g_ui_button_toggle=require("sdk/ui/button/toggle")}catch(e$$15){}g_system_unload=require("sdk/system/unload");g_window_utils=require("sdk/window/utils");g_system_events=require("sdk/system/events");
g_preferences_service=require("sdk/preferences/service");g_tabs_utils=require("sdk/tabs/utils");g_event_core=require("sdk/event/core");g_core_heritage=require("sdk/core/heritage");g_core_namespace=require("sdk/core/namespace");setTimeout=g_timers.setTimeout;clearTimeout=g_timers.clearTimeout;setInterval=g_timers.setInterval;clearInterval=g_timers.clearInterval;XMLHttpRequest=g_net_xhr.XMLHttpRequest;window=g_addon_window.window;document=window.document;navigator=window.navigator;atob=window.atob;
btoa=window.btoa;XPathEvaluator=window.XPathEvaluator;XPathResult=window.XPathResult;WebSocket=window.WebSocket;localStorage=g_simple_storage.storage;localStorage.setItem=function(a,b){localStorage[a]=b};localStorage.getItem=function(a){return localStorage[a]};localStorage.removeItem=function(a){delete localStorage[a]};self=g_self;if(!g_loader_options||!g_loader_options.metadata.title)g_preferences_service.reset("extensions."+g_self.id+".sdk.baseURI"),g_preferences_service.reset("extensions."+g_self.id+
".sdk.rootURI")}catch(e$$16){console.error(e$$16)}var detected_e10s=!1;function is_e10s(){if(!detected_e10s)try{"undefined"!=typeof g_window_utils.getMostRecentBrowserWindow().gMultiProcessBrowser&&g_window_utils.getMostRecentBrowserWindow().gMultiProcessBrowser&&(detected_e10s=!0)}catch(a){}return detected_e10s};
