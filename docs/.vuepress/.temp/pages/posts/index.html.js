export const data = {
  "key": "v-e1e3da16",
  "path": "/posts/",
  "title": "文章",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "文章"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "posts/README.md"
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
