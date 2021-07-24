---
title: "双向数据绑定 v-model 的实现原理"
permalink: "/archives/27132"
date: "2020-12-04 17:33:42"
categories: 
  - "vuejs 常见问题"
  - "默认"
tags: 
  - "vuejs 常见问题"
  - "默认"
---

# 双向数据绑定 v-model 的实现原理

大概

- input 元素的 value = this.name
- 绑定 input 事件 this.name = $event.target.value
- data 更新触发 re-render

archives/26879
