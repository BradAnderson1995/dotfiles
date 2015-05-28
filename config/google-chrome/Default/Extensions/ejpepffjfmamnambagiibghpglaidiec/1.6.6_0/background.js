/* Destringifies an object. */
function deserialize(object) {
  return typeof object == 'string' ? JSON.parse(object) : object;
}

/* Fetches a JSON from a given URL. */
function fetchJSON(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send(); 
}

/* Ping a URL */
function pingURL(url) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', url);
  httpRequest.send();
}

/* Used to check to see if other Disconnect products are installed */
function checkOtherProducts() {
  if (!(localStorage.d2Installed)) {
    var productIDs = {d2: "jeoacafpbcihiomhlakheieifhpjdfeo"};

    chrome.runtime.sendMessage(productIDs.d2, {checkExtension: true, sourceExtension: "fbdc"},
      function(response) {
        if (response) {
          localStorage.d2Installed = true;
          console.log(response);
        }
      });
  }
}

/* Sets a value in Chrome's storage API. */
function setStorage(key, value) {
  var objectToSave = {};
  objectToSave[key] = value;
  chrome.storage.sync.set(objectToSave);
}

/* Gets a value from Chrome's storage API. */
function getStorage(key, callback) {
  chrome.storage.sync.get(key, callback)
}

/* Creates an HTML5 Growl notification. */
function dispatchBubble(title, text, link) {
  var link = link || false;
  var notification =
      new Notification(title, {
        dir: 'auto',
        lang: 'en',
        body: text,
        icon: '128.png'
      });

  notification.onclick = function() { link && chrome.tabs.create({url: link}); };
}

/* Check Disconnect for a new notification */
function checkForNotification() {
  fetchJSON('https://s3.amazonaws.com/disconnect-notifications/legacy/legacy.json', function(notificationJSON) {
    try {
      var notifications = deserialize(localStorage.notifications) || {};
      if (notificationJSON.running && !(notifications[notificationJSON.currentName])) {
        if (notificationJSON.type === 'growl') {
          notifications[notificationJSON.currentName] = moment();
          localStorage.notifications = JSON.stringify(notifications);
          dispatchBubble(
            notificationJSON.growlText.main,
            notificationJSON.growlText.secondary,
            notificationJSON.pageToOpen
          );
          pingURL(notificationJSON.pingBack)
        }
      }
    }
    catch(e) {
      console.log(e);
    }
  });
}

/*
  Determines whether any of a bucket of domains is part of a URL, regex free.
*/
function isMatching(url, domains) {
  if (url) {
    const DOMAIN_COUNT = domains.length;
    for (var i = 0; i < DOMAIN_COUNT; i++)
        if (url.toLowerCase().indexOf(domains[i], 2) >= 2) return true;
            // A valid URL has at least two characters ("//"), then the domain.
  }
  else {
    return false;
  }
}

checkOtherProducts();

setInterval(function() {
  if (!(localStorage.d2Installed)) {
    checkForNotification();
  }
}, 100000);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message) {
    localStorage.upgraded = true;
    localStorage.message = request.message;
    if (request.message == "dont") {
      chrome.tabs.remove(sender.tab.id)
    }
    setStorage('upgradeStatus', request.message);
    setStorage('upgraded', true);
  }
});

/* The domain names Facebook phones home with, lowercased. */
const DOMAINS = ['facebook.com', 'facebook.net', 'fbcdn.net'];

var tabs = [];


if (!(localStorage.blocking)) {
  fetchJSON('https://goldenticket.disconnect.me/goldenticket/ticket/fetch?product=legacyBlocking', function(data) {
    if (data.data === 'true') {
      localStorage.blocking = true;
    }
  });
}

if (localStorage.blocking) {
  /* Traps and selectively cancels or redirects a request. */
  chrome.webRequest.onBeforeRequest.addListener(function(details) {
    const TAB_ID = details.tabId;
    const TYPE = details.type;
    const MAIN = TYPE == 'main_frame';
    const REQUESTED_URL = details.url;
    var blockingResponse = {cancel: false};

    if (MAIN) {
      tabs[TAB_ID] = REQUESTED_URL;
    }
    else if (isMatching(tabs[TAB_ID], DOMAINS)) {
      return blockingResponse;
    }
    else {
      if (isMatching(REQUESTED_URL, DOMAINS)) {
        blockingResponse = {
          redirectUrl:
              TYPE == 'image' ?
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=='
                      : 'about:blank'
        };
      }
    }
    return blockingResponse;
  }, {urls: ['http://*/*', 'https://*/*']}, ['blocking']);
}
