<template><h1 id="将-url-参数解析为-js-对象" tabindex="-1"><a class="header-anchor" href="#将-url-参数解析为-js-对象" aria-hidden="true">#</a> 将 url 参数解析为 JS 对象</h1>
<p>还是比如：<a href="http://localhost/test/test.html?a=100&amp;b=200#c=300" target="_blank" rel="noopener noreferrer">http://localhost/test/test.html?a=100&amp;b=200#c=300<OutboundLink/></a></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 传统方式，分析 search</span>
<span class="token keyword">function</span> <span class="token function">queryToObj</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// 去掉前面的 '?'</span>
    <span class="token keyword">const</span> search <span class="token operator">=</span> location<span class="token punctuation">.</span>search<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    search<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'&amp;'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> arr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'='</span><span class="token punctuation">)</span>
        res<span class="token punctuation">[</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">queryToObj</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {a: "100", b: "200"}</span>
</code></pre></div><p>高级 API 方法</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 使用 URLSearchParams</span>
<span class="token keyword">function</span> <span class="token function">searchToObj</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">const</span> pList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>search<span class="token punctuation">)</span>
    pList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span>key</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">searchToObj</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {a: "100", b: "200"}</span>
</code></pre></div></template>
