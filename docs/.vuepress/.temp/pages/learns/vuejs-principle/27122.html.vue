<template><h1 id="路由-hash-和-h5-history-的区别和选择" tabindex="-1"><a class="header-anchor" href="#路由-hash-和-h5-history-的区别和选择" aria-hidden="true">#</a> 路由 hash 和 H5 history 的区别和选择</h1>
<p>两者区别</p>
<ul>
<li>hash - 通过 window.onhashchange 来监听</li>
<li>H5 history - 通过 history.pushState 和 window.onpopstate</li>
<li>H5 history 需要后端支持</li>
</ul>
<p>两者选择</p>
<ul>
<li>to B 的系统推荐用 hash，简单易用，对 url 规范不明感</li>
<li>to C 的系统，可以考虑选择 H5 history，但需要服务端支持</li>
<li>能选择简单的，就别用复杂的，要考虑成本和收益</li>
</ul>
</template>
