function createContextMenu(details: chrome.runtime.InstalledDetails) {
  chrome.contextMenus.create({
    id: "copyImgMd",
    title: "Copy Image (Markdown)",
    contexts: ["image"],
  })
  chrome.contextMenus.create({
    id: "copyLinkMd",
    title: "Copy Link (Markdown)",
    contexts: ["link"],
  })
}

function copyToClipboard(text: string) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0].id) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        args: [{ text }],
        func: (params: { text: string }) => {
          navigator.clipboard.writeText(params.text)
        },
      })
    }
  })
}

function copyContextMenu(
  info: chrome.contextMenus.OnClickData,
  tab: chrome.tabs.Tab | undefined
) {
  const title = tab?.title || ""
  const media = info.mediaType
  const src = info.srcUrl
  const link = info.linkUrl
  const text = info.selectionText
  const code =
    media === "image"
      ? "![" + title + "](" + src + ")"
      : "[" + text + "](" + link + ")"
  copyToClipboard(code)
}

function copyBrowserAction(tab: chrome.tabs.Tab) {
  const title = tab.title
  const url = tab.url
  const code = "[" + title + "](" + url + ")"
  copyToClipboard(code)

  chrome.action.setBadgeBackgroundColor({ color: [120, 120, 120, 100] })
  chrome.action.setBadgeText({ text: "copy" })

  setTimeout(() => {
    chrome.action.setBadgeText({ text: "" })
  }, 1000)
}

chrome.runtime.onInstalled.addListener(createContextMenu)
chrome.contextMenus.onClicked.addListener(copyContextMenu)
chrome.action.onClicked.addListener(copyBrowserAction)
