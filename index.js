const app = Vue.createApp({})
app.component('html-demo', {
  template: `
      <div>
      <code>源码预览</code>
      <iframe
        ref="iframe"
        :src="url"
        :height="height"
        frameborder="0"
        scrolling="no"
        allowfullscreen="true"
        width="100%"
      ></iframe>
      <details>
        <summary>查看源码</summary>
        <slot></slot>
      </details>
      </div>`,
  props: {
    url: {
      default: "",
      type: String,
    },
  },
  data() {
    return {
      height: "",
    };
  },
  mounted() {
    const iframe = this.$refs.iframe.contentWindow.document;

    console.log(this.$slots.default())

    // 把 slot 内容写入 iframe 里面
    const content = this.$slots.default()[0].el.innerText;
    iframe.open();
    iframe.write(content);
    iframe.close();

    this.$nextTick(() => {
      // 高度等于内容高度
      this.height = iframe.body.scrollHeight;

      // 再修复一下
      setTimeout(() => {
        this.height = iframe.body.scrollHeight;
      }, 300);
    });
  },
})

app.mount('body')