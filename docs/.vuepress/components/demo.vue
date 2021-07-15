<template>
  <div>
    <iframe
      :src="url"
      frameborder="0"
      scrolling="no"
      allowfullscreen="true"
      width="100%"
      :height="height"
    ></iframe>

    <details open>
      <summary>查看源码</summary>
      <slot></slot>
    </details>
  </div>
</template>
<script>
export default {
  name: "demo",
  props: {
    url: "",
  },
  data() {
    return {
      height: "500px",
    };
  },
  mounted() {
    this.height =
      document.querySelectorAll(
        "iframe"
      )[0].contentWindow.document.body.scrollHeight;
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