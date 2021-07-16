<template>
  <div>
    <iframe :src="url" :height="height" frameborder="0" scrolling="no" allowfullscreen="true" width="100%"></iframe>

    <details open>
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
      default: '/html-demo.html',
      type: String
    },
  },
  data() {
    return {
      height: "500px",
    };
  },
  mounted() {
    const iframe = document.querySelectorAll("iframe")[0].contentWindow
    this.height = iframe.document.body.scrollHeight; // 高度等于内容高度

    // 把 slot 内容写入 iframe 里面
    this.$nextTick(() => {
      const html = this.$slots.default[0].elm.innerText
      iframe.document.write(html);
    })
  },
};
</script>
<style scoped>
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