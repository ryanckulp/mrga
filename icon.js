chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({"url": "https://www.reddit.com/r/The_Donald/"});
});
