export const siteData = {
  "base": "/blogs/",
  "lang": "en-US",
  "title": "",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "link",
      {
        "rel": "manifest",
        "href": "/manifest.json"
      }
    ],
    [
      "script",
      {},
      "var _hmt = _hmt || [];\n            (function () {\n                var hm = document.createElement(\"script\");\n                hm.src = \"https://hm.baidu.com/hm.js?96d91412aff9543cd8e022f381d8bf1c\";\n                var s = document.getElementsByTagName(\"script\")[0];\n                s.parentNode.insertBefore(hm, s);\n            })();"
    ]
  ],
  "locales": {
    "/": {
      "lang": "zh-CN",
      "title": "订阅RSS",
      "description": "分享知识"
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
