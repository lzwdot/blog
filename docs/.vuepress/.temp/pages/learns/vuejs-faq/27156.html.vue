<template><h1 id="vue-如何监听数组变化" tabindex="-1"><a class="header-anchor" href="#vue-如何监听数组变化" aria-hidden="true">#</a> Vue 如何监听数组变化</h1>
<p>监听数组</p>
<ul>
<li>Object.defineProperty 不能监听数组变化</li>
<li>需重新定义原型，重写 push pop 等方法，实现监听</li>
<li>Proxy 可以原生支持监听数组变化</li>
</ul>
</template>
