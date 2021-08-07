export const data = {
  "key": "v-5bdb0550",
  "path": "/posts/php-usage/",
  "title": "PHP应用",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "PHP应用"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "posts/php-usage/README.md"
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
