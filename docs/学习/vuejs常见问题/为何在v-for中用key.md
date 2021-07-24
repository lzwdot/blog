---
title: "为何在 v-for 中用 key"
permalink: "/archives/27127"
date: "2020-12-04 17:23:40"
categories: 
  - "vuejs 常见问题"
  - "默认"
tags: 
  - "vuejs 常见问题"
  - "默认"
---

# 为何在 v-for 中用 key

原因

- 必须用 key，且不能是 index 和 random
- diff 算法中通过 tag 和 key 来判断，是否是 sameNode
- 减少渲染次数，提升渲染性能
