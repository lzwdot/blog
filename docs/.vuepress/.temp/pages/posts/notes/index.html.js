export const data = {
  "key": "v-1f16d0c3",
  "path": "/posts/notes/",
  "title": "随笔",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "随笔"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "posts/notes/README.md"
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
