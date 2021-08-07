<template><h1 id="ajax-请求应该放在哪个生命周期" tabindex="-1"><a class="header-anchor" href="#ajax-请求应该放在哪个生命周期" aria-hidden="true">#</a> ajax 请求应该放在哪个生命周期</h1>
<p>一般</p>
<ul>
<li>mounted 周期</li>
<li>JS 是单线程的，ajax 异步获取数据</li>
<li>放在 mounted 之前没有用的，逻辑混乱</li>
</ul>
</template>
