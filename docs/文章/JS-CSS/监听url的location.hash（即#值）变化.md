---
title: "监听url的location.hash（即#值）变化"
permalink: "/archives/24370"
date: "2020-01-15 11:41:45"
categories: 
  - "JS/CSS"
tags: 
  - "JS/CSS"
---

# 监听url的location.hash（即#值）变化

当有个需求，通过监听url的location.hash（即#值）变化，来实现页面刷新。如：

``` js 
window.onhashchange = func;
<body onhashchange="func();">
window.addEventListener("hashchange", func, false); 
```

刷新页面：

``` js 
function func(){
    location.reload();
}
```
