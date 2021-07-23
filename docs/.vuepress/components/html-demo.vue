<template>
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
  </div>
</template>
<script>
export default {
  name: "html-demo",
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

    // 把 slot 内容写入 iframe 里面
    const content = this.$slots.default[0].elm.innerText;
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
};
</script>
<style scoped>
iframe {
  /* 网格效果 */
  background-image: linear-gradient(to right, #eee 1px, transparent 1px),
    linear-gradient(to bottom, #eee 1px, transparent 1px);

  /* 网格大小 */
  background-size: 10px 10px;

  /* 设置右边和底部边框 */
  border: 1px solid #eee;
  border-left: none;
  border-top: none;
  box-sizing: border-box;
}

summary {
  background: #eee;
  height: 30px;
  line-height: 30px;
  padding-left: 10px;
}

details .extra-class {
  border-radius: 0 0 6px 6px;
}

details pre {
  border-radius: 0 0 6px 6px;
  margin-top: 0 !important;
}
</style>