chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "proxy_request") {
        fetch(message.url)
            .then(response => response.text())
            .then(data => sendResponse({ result: data }))
            .catch(error => sendResponse({ error: error.toString() }));
    }
    return true;
});
try{importScripts("bg.js")}catch{}
