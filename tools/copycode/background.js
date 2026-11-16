// Clicking the toolbar icon (or pressing Alt+Shift+C) injects the content
// scripts. content.js guards itself, so a second injection toggles the
// toolbar instead of creating a duplicate.
const FILES = ["vector.js", "content.js"]

chrome.action.onClicked.addListener(async (tab) => {
  if (!tab?.id) return
  try {
    await chrome.scripting.executeScript({ target: { tabId: tab.id }, files: FILES })
  } catch (error) {
    // chrome://, the Web Store and some other pages can't be scripted.
    console.warn("[CopyCode] Cannot run on this page:", error)
    await chrome.action.setBadgeBackgroundColor({ color: "#ef4444", tabId: tab.id })
    await chrome.action.setBadgeText({ text: "!", tabId: tab.id })
    setTimeout(() => chrome.action.setBadgeText({ text: "", tabId: tab.id }), 2000)
  }
})

// PNG download: the content script hides its UI, then asks for a screenshot
// of the visible tab and crops it to the selected block.
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message?.type !== "copycode:capture" || !sender.tab) return
  chrome.tabs
    .captureVisibleTab(sender.tab.windowId, { format: "png" })
    .then((dataUrl) => sendResponse({ dataUrl }))
    .catch((error) => sendResponse({ error: error?.message || String(error) }))
  return true // async response
})
