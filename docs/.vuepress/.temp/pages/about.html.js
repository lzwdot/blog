export const data = {
  "key": "v-22a39d25",
  "path": "/about.html",
  "title": "关于",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "关于"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "关于小刘",
      "slug": "关于小刘",
      "children": []
    }
  ],
  "filePathRelative": "about.md"
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
