<template><h1 id="vue-router-使用" tabindex="-1"><a class="header-anchor" href="#vue-router-使用" aria-hidden="true">#</a> Vue-router 使用</h1>
<p>Vue 路由模式</p>
<ul>
<li>hash 模式（默认），如：<a href="http://abc.com/#/user/10" target="_blank" rel="noopener noreferrer">http://abc.com/#/user/10<OutboundLink/></a></li>
<li>H5 history 模式，如 <a href="http://abc.com/user/20" target="_blank" rel="noopener noreferrer">http://abc.com/user/20<OutboundLink/></a></li>
<li>后者需要 server 端支持，因此无特殊需求可选择前者</li>
</ul>
<p>如 nginx 配置</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>location <span class="token operator">/</span> <span class="token punctuation">{</span>
  try_files $uri $uri<span class="token operator">/</span> <span class="token operator">/</span>index<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Vue-router 路由配置</p>
<ul>
<li>动态路由 <code>{path:'/user/:id',component:user}</code></li>
<li>懒加载 <code>component:()=&gt;import('./Router')</code></li>
</ul>
</template>
