chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({color: '#3aa757'}, function () {
    console.log('The color is green.')
  })
  chrome.storage.sync.set({allColors: ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1']})
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'www.messenger.com'}
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }])
  })
})
