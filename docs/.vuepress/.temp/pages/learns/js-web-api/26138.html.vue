<template><h1 id="分析拆解-url-各个部分" tabindex="-1"><a class="header-anchor" href="#分析拆解-url-各个部分" aria-hidden="true">#</a> 分析拆解 url 各个部分</h1>
<p>location 和 history</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// location</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>href<span class="token punctuation">)</span>
<span class="token comment">// http://localhost/test/test.html?a=100#100</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>protocol<span class="token punctuation">)</span> <span class="token comment">// http:</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>host<span class="token punctuation">)</span> <span class="token comment">// localhost</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>search<span class="token punctuation">)</span> <span class="token comment">// ?a=100</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">)</span> <span class="token comment">// #100</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">)</span> <span class="token comment">// /test/test.html</span>
<span class="token comment">// history</span>
history<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 后退</span>
history<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 前进</span>
</code></pre></div></template>
