<template><h1 id="absolute-和-relative-定位" tabindex="-1"><a class="header-anchor" href="#absolute-和-relative-定位" aria-hidden="true">#</a> absolute 和 relative 定位</h1>
<ul>
<li>relative 依据自身定位</li>
<li>absolute 依据最近一层的定位元素定位（relative absolute fixed body）</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>style<span class="token operator">></span>
    <span class="token punctuation">.</span>relative <span class="token punctuation">{</span>
        position<span class="token operator">:</span> relative<span class="token punctuation">;</span>
        width<span class="token operator">:</span> <span class="token number">400</span>px<span class="token punctuation">;</span>
        height<span class="token operator">:</span> <span class="token number">200</span>px<span class="token punctuation">;</span>
        border<span class="token operator">:</span> <span class="token number">1</span>px solid #ccc<span class="token punctuation">;</span>
        top<span class="token operator">:</span> <span class="token number">20</span>px<span class="token punctuation">;</span>
        left<span class="token operator">:</span> <span class="token number">50</span>px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>absolute <span class="token punctuation">{</span>
        position<span class="token operator">:</span> absolute<span class="token punctuation">;</span>
        width<span class="token operator">:</span> <span class="token number">200</span>px<span class="token punctuation">;</span>
        height<span class="token operator">:</span> <span class="token number">100</span>px<span class="token punctuation">;</span>
        border<span class="token operator">:</span> <span class="token number">1</span>px solid blue<span class="token punctuation">;</span>
        top<span class="token operator">:</span> <span class="token number">20</span>px<span class="token punctuation">;</span>
        left<span class="token operator">:</span> <span class="token number">50</span>px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
<span class="token operator">&lt;</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>absolute 和 relative 定位问题<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"relative"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"absolute"</span><span class="token operator">></span>
            <span class="token keyword">this</span> is absolute
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre></div></template>
