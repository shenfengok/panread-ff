

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

        console.log(request)
        localStorage['item'+ request.series] = JSON.stringify(request)
        localStorage['new_item_coming'] = '1'
        sendResponse({farewell: "goodbye"});
    }
);
//
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//         console.log(response.farewell);
//     });
// });


function handleMessage(request, sender, sendResponse) {
    console.log(request)
        localStorage['item'+ request.series] = JSON.stringify(request)
        localStorage['new_item_coming'] = '1'
  sendResponse({response: "Response from background script"});
}

browser.runtime.onMessage.addListener(handleMessage);