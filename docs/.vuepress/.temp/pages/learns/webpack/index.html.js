export const data = {
  "key": "v-6fed21a9",
  "path": "/learns/webpack/",
  "title": "webpack",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "webpack"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "learns/webpack/README.md"
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
