---
title: "v-show 和 v-if 的区别"
permalink: "/archives/27125"
date: "2020-12-04 17:20:00"
categories: 
  - "vuejs 常见问题"
  - "默认"
tags: 
  - "vuejs 常见问题"
  - "默认"
---

# v-show 和 v-if 的区别

区别

- v-show 通过 css display 控制显示和隐藏
- v-if 组件真正的渲染和销毁，而不是显示和隐藏
- 频繁切换显示状态用 v-show，否则用 v-if
