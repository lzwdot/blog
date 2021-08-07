<template><h1 id="获取当前页面-url-参数" tabindex="-1"><a class="header-anchor" href="#获取当前页面-url-参数" aria-hidden="true">#</a> 获取当前页面 url 参数</h1>
<p>比如：http://localhost/test/test.html?a=100&amp;b=200#c=300</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 传统方式</span>
<span class="token keyword">function</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 类似array.slice(1)</span>
    <span class="token keyword">const</span> search <span class="token operator">=</span> location<span class="token punctuation">.</span>search<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token comment">// search: 'a=100&amp;b=200'</span>
    <span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">(^|&amp;)</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">=([^&amp;]*)(&amp;|$)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span><span class="token string">'i'</span><span class="token punctuation">)</span> <span class="token comment">// i 大小写不区分</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> search<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token comment">// ["a=100", "", "100", index: 0, input: "a=100&amp;b=200", groups: undefined]</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>res <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment">// 所以要取索引 2 的值</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 100</span>
</code></pre></div><p>高级 API 方法</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// URLSearchParams</span>
<span class="token keyword">function</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> search <span class="token operator">=</span> location<span class="token punctuation">.</span>search
    <span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span>search<span class="token punctuation">)</span>
    <span class="token keyword">return</span> p<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 200</span>
</code></pre></div></template>
