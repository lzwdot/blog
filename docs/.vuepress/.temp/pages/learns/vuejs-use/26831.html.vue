<template><h1 id="vue-组件生命周期" tabindex="-1"><a class="header-anchor" href="#vue-组件生命周期" aria-hidden="true">#</a> Vue 组件生命周期</h1>
<p>生命周期</p>
<ul>
<li>挂载阶段</li>
<li>更新阶段</li>
<li>销毁阶段</li>
</ul>
<p>单个组件的生命周期</p>
<p><img src="@source/learns/vuejs-use/images/1719986943.png" alt=""></p>
<p>比如一个 TodoList 功能，父组件 Index.vue，子组件 List.vue ，代码参考：</p>
<p>/archives/26811</p>
<p>父子组件 created 和 mounted 周期</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>beforeCreate
created
beforeMount
 children beforeCreate
 children created
 children beforeMount
 children mounted
mounted
 children activated
activated
</code></pre></div><p>父子组件 update 周期</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>before update
 child before update
 child updated
updated
</code></pre></div><p>父子组件 destroyed 周期，通过路由切换可以触发 destroyed 事件</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>beforeDestroy
 child beforeDestroy
 child destroyed
destroyed
</code></pre></div><p>父子组件 keep-alive 周期</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>beforeCreate
created
beforeMount
 children beforeCreate
 children created
 children beforeMount
 children deactivated
Other deactivated
 children mounted
mounted
 children activated
activated
</code></pre></div></template>
