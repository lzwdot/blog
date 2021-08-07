<template><h1 id="如何捕获-js-程序中的异常" tabindex="-1"><a class="header-anchor" href="#如何捕获-js-程序中的异常" aria-hidden="true">#</a> 如何捕获 JS 程序中的异常？</h1>
<p>第一种 try catch</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 高风险的地方</span>
<span class="token keyword">try</span><span class="token punctuation">{</span>
    <span class="token comment">// todo</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 手动捕获 catch</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token comment">// ReferenceError: a is not defined at test.js:4</span>
<span class="token punctuation">}</span><span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token comment">// todo</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'finally'</span><span class="token punctuation">)</span> <span class="token comment">// finally</span>
<span class="token punctuation">}</span>
</code></pre></div><p>第二种用 window.onerror</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 自动捕获</span>
window<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span>source<span class="token punctuation">,</span>lineNum<span class="token punctuation">,</span>colNum<span class="token punctuation">,</span>error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 第一，对跨域的js，如 CDN 的，不会有详细的报错信息</span>
    <span class="token comment">// 第二，对于压缩的 js，还需要配合 sourceMap 反查到未压缩代码的行，列</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'msg'</span><span class="token punctuation">,</span>message<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'source'</span><span class="token punctuation">,</span>source<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'lineNum'</span><span class="token punctuation">,</span>lineNum<span class="token punctuation">)</span>
    <span class="token comment">// msg Uncaught Error: this is the error happened</span>
    <span class="token comment">// source http://localhost/test/test.js</span>
    <span class="token comment">// lineNum 24</span>
<span class="token punctuation">}</span>
<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'this is the error happened'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></template>
