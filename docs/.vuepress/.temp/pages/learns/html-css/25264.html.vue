<template><h1 id="响应式布局的常用方案" tabindex="-1"><a class="header-anchor" href="#响应式布局的常用方案" aria-hidden="true">#</a> 响应式布局的常用方案</h1>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>style type<span class="token operator">=</span><span class="token string">"text/css"</span><span class="token operator">></span>
    @media only screen <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">max<span class="token operator">-</span>width<span class="token operator">:</span> <span class="token number">374</span>px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/* iphone5 或者更小的尺寸，以 iphone5 的宽度（320px）比例设置 font-size */</span>
        html <span class="token punctuation">{</span>
            font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">86</span>px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    @media only screen <span class="token function">and</span> <span class="token punctuation">(</span>min<span class="token operator">-</span>width<span class="token operator">:</span> <span class="token number">375</span>px<span class="token punctuation">)</span> <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">max<span class="token operator">-</span>width<span class="token operator">:</span> <span class="token number">413</span>px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/* iphone6/7/8 和 iphone x */</span>
        html <span class="token punctuation">{</span>
            font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">100</span>px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    @media only screen <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">min<span class="token operator">-</span>width<span class="token operator">:</span> <span class="token number">414</span>px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/* iphone6p 或者更大的尺寸，以 iphone6p 的宽度（414px）比例设置 font-size */</span>
        html <span class="token punctuation">{</span>
            font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">110</span>px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    body <span class="token punctuation">{</span>
        font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">0.16</span>rem<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    #div1 <span class="token punctuation">{</span>
        width<span class="token operator">:</span> <span class="token number">1</span>rem<span class="token punctuation">;</span>
        background<span class="token operator">-</span>color<span class="token operator">:</span> #ccc<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"div1"</span><span class="token operator">></span>
    <span class="token keyword">this</span> is div
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre></div><ul>
<li>media-query，根据不同的屏幕宽度设置根元素 font-size</li>
<li>rem，基于根据元素的相对单位</li>
<li>vh 网页视口高度的 1/100，vw 网页视口宽度的 1/100，其他vmax，vmin取高度，宽度中的最大或最小</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>innerHeight <span class="token operator">===</span> <span class="token number">100</span>vh
window<span class="token punctuation">.</span>innerWidth <span class="token operator">===</span> <span class="token number">100</span>vw
</code></pre></div></template>
