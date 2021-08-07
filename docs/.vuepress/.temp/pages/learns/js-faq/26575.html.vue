<template><h1 id="_10-20-30-map-parseint-返回的结果是什么" tabindex="-1"><a class="header-anchor" href="#_10-20-30-map-parseint-返回的结果是什么" aria-hidden="true">#</a> [10,20,30].map(parseInt)返回的结果是什么？</h1>
<p>参考</p>
<ul>
<li>
<p>map的参数和返回值；array.map(function(item,index,array),this)</p>
</li>
<li>
<p>parseInt 参数和返回值；parseInt(<em>string</em>, <em>radix</em>)</p>
</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>parseInt<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [10, NaN, NaN]</span>
<span class="token comment">// 解析</span>
<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 分布拆解，parseInt 第二个参数只能是 10, 2, 8, 或 16</span>
    <span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> index<span class="token punctuation">)</span>
    <span class="token comment">// 1、return parseInt(10, 0) // 10</span>
    <span class="token comment">// 2、return parseInt(20, 1) // NaN</span>
    <span class="token comment">// 3、return parseInt(30, 2) // NaN</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></template>
