<template><h1 id="为何-proxy-不能被-polyfill" tabindex="-1"><a class="header-anchor" href="#为何-proxy-不能被-polyfill" aria-hidden="true">#</a> 为何 Proxy 不能被 Polyfill ?</h1>
<p>可以被 Polyfill 的有</p>
<ul>
<li>Class 可以用 function 模拟</li>
<li>Promise 可以用 callback 模拟</li>
</ul>
<p>不可 Polyfill 的有</p>
<ul>
<li>Proxy 的功能用 Object.defineProperty 无法模拟</li>
</ul>
</template>
