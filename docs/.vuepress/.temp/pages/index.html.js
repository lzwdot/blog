export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "编程像数 1, 2, 3 一样容易",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroText": null,
    "actions": [
      {
        "text": "开始阅读 →",
        "link": "/posts/",
        "type": "primary"
      }
    ],
    "features": [
      {
        "title": null,
        "details": null
      },
      {
        "title": null,
        "details": null
      },
      {
        "title": null,
        "details": null
      }
    ],
    "footerHtml": true,
    "footer": "©2021<a href=\"/\">订阅RSS.</a><a href=\"http://www.beian.miit.gov.cn\" target=\"_blank\" rel=\"nofollow\">粤ICP备14048036号.</a>"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
