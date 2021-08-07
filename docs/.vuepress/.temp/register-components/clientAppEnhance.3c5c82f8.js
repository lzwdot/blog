import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("HtmlDemo", defineAsyncComponent(() => import("D:/www/blogs/docs/.vuepress/components/HtmlDemo.vue")))
}
