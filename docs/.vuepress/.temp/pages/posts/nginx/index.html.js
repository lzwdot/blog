export const data = {
  "key": "v-1ea1370a",
  "path": "/posts/nginx/",
  "title": "Nginx",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "Nginx"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "posts/nginx/README.md"
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
