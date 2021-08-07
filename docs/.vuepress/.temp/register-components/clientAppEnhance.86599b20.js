import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("HtmlDemo", defineAsyncComponent(() => import("D:/www/blog/docs/.vuepress/components/HtmlDemo.vue")))
}
