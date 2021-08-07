<template><h1 id="如何用-js-实现-h5-history-路由" tabindex="-1"><a class="header-anchor" href="#如何用-js-实现-h5-history-路由" aria-hidden="true">#</a> 如何用 JS 实现 H5 history 路由</h1>
<p>H5 history</p>
<ul>
<li>用 url 规范的路由，但跳转时不刷新页面</li>
<li>history.pushState</li>
<li>window.onpopstate</li>
</ul>
<p>正常页面浏览</p>
<ul>
<li><a href="http://github.com/x" target="_blank" rel="noopener noreferrer">http://github.com/x<OutboundLink/></a> 刷新页面</li>
<li><a href="http://github.com/x/y" target="_blank" rel="noopener noreferrer">http://github.com/x/y<OutboundLink/></a> 刷新页面</li>
</ul>
<p>改造成 H5 history 模式</p>
<ul>
<li><a href="http://github.com/x" target="_blank" rel="noopener noreferrer">http://github.com/x<OutboundLink/></a> 刷新页面</li>
<li><a href="http://github.com/x/y" target="_blank" rel="noopener noreferrer">http://github.com/x/y<OutboundLink/></a> 前端跳转，不刷新页面</li>
</ul>
<p>演示下</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">"btn"</span><span class="token operator">></span>修改 url<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token comment">// 页面初次加载，获取 path</span>
    document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'DOMContentLoaded'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'load'</span><span class="token punctuation">,</span> location<span class="token punctuation">.</span>pathname<span class="token punctuation">)</span> <span class="token comment">// load /test/test.html</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 打开一个新的路由</span>
    <span class="token comment">// 【注意】用 pushState 方式，浏览器不会刷新页面</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'btn'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">'page1'</span><span class="token punctuation">}</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'切换路由到'</span><span class="token punctuation">,</span> <span class="token string">'page1'</span><span class="token punctuation">)</span>
        history<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token string">'page1'</span><span class="token punctuation">)</span> <span class="token comment">// 重要 ！！</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 监听浏览器前进，后退，观察浏览器 url 的变化</span>
    window<span class="token punctuation">.</span><span class="token function-variable function">onpopstate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span> <span class="token comment">// 重要 ！！</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onpopstate'</span><span class="token punctuation">,</span>e<span class="token punctuation">.</span>state<span class="token punctuation">,</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">)</span>
        <span class="token comment">// 后端：onpopstate null /test/test.html</span>
        <span class="token comment">// 前进：onpopstate {name: "page1"} /test/page1</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 需要 server 端配合</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div></template>
