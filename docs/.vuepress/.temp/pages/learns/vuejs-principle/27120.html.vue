<template><h1 id="如何用-js-实现-hash-路由" tabindex="-1"><a class="header-anchor" href="#如何用-js-实现-hash-路由" aria-hidden="true">#</a> 如何用 JS 实现 hash 路由</h1>
<p>前端路由原理</p>
<ul>
<li>vue-router 的路由模式</li>
<li>hash</li>
<li>H5 history</li>
</ul>
<p>网页 url 组成部分</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// http://localhost:8080/test/test.html?a=100#100</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>protocol<span class="token punctuation">)</span> <span class="token comment">// http:</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>host<span class="token punctuation">)</span> <span class="token comment">// localhost</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>port<span class="token punctuation">)</span> <span class="token comment">// 8080</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">)</span> <span class="token comment">// /test/test.html</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>search<span class="token punctuation">)</span> <span class="token comment">// ?a=100</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">)</span> <span class="token comment">// #100</span>
</code></pre></div><p>hash 的特点</p>
<ul>
<li>hash 变化会触发网页跳转，即浏览器的前进，后端</li>
<li>hash 变化不会刷新页面，SPA 必需的特点</li>
<li>hash 永远不会提交到 server 端（前端自生自灭）</li>
</ul>
<p>演示一下</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">"btn"</span><span class="token operator">></span>修改 hash<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token comment">// hash 变化，包含：</span>
    <span class="token comment">// a. JS 修改 url</span>
    <span class="token comment">// b. 手动修改 url 的 hash</span>
    <span class="token comment">// c. 浏览器前进、后退</span>
    window<span class="token punctuation">.</span><span class="token function-variable function">onhashchange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'old url'</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>oldURL<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'new url'</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>newURL<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hash'</span><span class="token punctuation">,</span> location<span class="token punctuation">.</span>hash<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 页面初次加载，获取 hash</span>
    document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'DOMContentLoaded'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hash:'</span><span class="token punctuation">,</span> location<span class="token punctuation">.</span>hash<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// JS 修改 url</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'btn'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">'#/user'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div><p>以上一开始为空，点击一下触发 onhashchange 输出：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 一开始为空，点击一下触发 onhashchange</span>
<span class="token comment">// hash:</span>
<span class="token comment">// old url http://localhost/test/test.html</span>
<span class="token comment">// new url http://localhost/test/test.html#/user</span>
<span class="token comment">// hash #/user</span>
</code></pre></div></template>
