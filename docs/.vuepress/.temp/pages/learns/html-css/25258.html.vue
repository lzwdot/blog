<template><h1 id="居中对齐的实现方式" tabindex="-1"><a class="header-anchor" href="#居中对齐的实现方式" aria-hidden="true">#</a> 居中对齐的实现方式</h1>
<p>水平居中</p>
<ul>
<li>inline 元素：text-align:center</li>
<li>block 元素：margin:auto</li>
<li>absolute 元素：left:50% + margin-left 宽度负值</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>style<span class="token operator">></span>
    <span class="token punctuation">.</span>container <span class="token punctuation">{</span>
        border<span class="token operator">:</span> <span class="token number">1</span>px solid #ccc<span class="token punctuation">;</span>
        margin<span class="token operator">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>
        padding<span class="token operator">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>item <span class="token punctuation">{</span>
        background<span class="token operator">-</span>color<span class="token operator">:</span> #ccc<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>container<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
        text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>container<span class="token operator">-</span><span class="token number">2</span> <span class="token punctuation">.</span>item <span class="token punctuation">{</span>
        width<span class="token operator">:</span> <span class="token number">500</span>px<span class="token punctuation">;</span>
        margin<span class="token operator">:</span> auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>container<span class="token operator">-</span><span class="token number">3</span> <span class="token punctuation">{</span>
        position<span class="token operator">:</span> relative<span class="token punctuation">;</span>
        height<span class="token operator">:</span> <span class="token number">100</span>px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>container<span class="token operator">-</span><span class="token number">3</span> <span class="token punctuation">.</span>item <span class="token punctuation">{</span>
        width<span class="token operator">:</span> <span class="token number">300</span>px<span class="token punctuation">;</span>
        height<span class="token operator">:</span> <span class="token number">100</span>px<span class="token punctuation">;</span>
        position<span class="token operator">:</span> absolute<span class="token punctuation">;</span>
        left<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
        margin<span class="token operator">-</span>left<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">150</span>px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container container-1"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>span<span class="token operator">></span>一段文字<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container container-2"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"item"</span><span class="token operator">></span>
        <span class="token keyword">this</span> is block item
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container container-3"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"item"</span><span class="token operator">></span>
        <span class="token keyword">this</span> is absolute item
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre></div><p>垂直居中</p>
<ul>
<li>inline 元素：line-height 的值等于 height 值</li>
<li>absolute 元素：top:50% + margin-top 高度负值</li>
<li>absolute 元素：top:50% + left:50% + transform(-50%,-50%)</li>
<li>absolute 元素：top,left,bottom,right=0 + margin:auto</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>style<span class="token operator">></span>
    <span class="token punctuation">.</span>container <span class="token punctuation">{</span>
        border<span class="token operator">:</span> <span class="token number">1</span>px solid #ccc<span class="token punctuation">;</span>
        margin<span class="token operator">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>
        padding<span class="token operator">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>
        height<span class="token operator">:</span> <span class="token number">200</span>px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>item <span class="token punctuation">{</span>
        background<span class="token operator">-</span>color<span class="token operator">:</span> #ccc<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>container<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">{</span>
        text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
        line<span class="token operator">-</span>height<span class="token operator">:</span> <span class="token number">200</span>px<span class="token punctuation">;</span>
        height<span class="token operator">:</span> <span class="token number">200</span>px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>container<span class="token operator">-</span><span class="token number">2</span> <span class="token punctuation">{</span>
        position<span class="token operator">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>container<span class="token operator">-</span><span class="token number">2</span> <span class="token punctuation">.</span>item <span class="token punctuation">{</span>
        width<span class="token operator">:</span> <span class="token number">300</span>px<span class="token punctuation">;</span>
        height<span class="token operator">:</span> <span class="token number">100</span>px<span class="token punctuation">;</span>
        position<span class="token operator">:</span> absolute<span class="token punctuation">;</span>
        left<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
        margin<span class="token operator">-</span>left<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">150</span>px<span class="token punctuation">;</span>
        top<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
        margin<span class="token operator">-</span>top<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">50</span>px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>container<span class="token operator">-</span><span class="token number">3</span> <span class="token punctuation">{</span>
        position<span class="token operator">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>container<span class="token operator">-</span><span class="token number">3</span> <span class="token punctuation">.</span>item <span class="token punctuation">{</span>
        width<span class="token operator">:</span> <span class="token number">200</span>px<span class="token punctuation">;</span>
        height<span class="token operator">:</span> <span class="token number">80</span>px<span class="token punctuation">;</span>
        position<span class="token operator">:</span> absolute<span class="token punctuation">;</span>
        left<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
        top<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
        transform<span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>container<span class="token operator">-</span><span class="token number">4</span> <span class="token punctuation">{</span>
        position<span class="token operator">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>container<span class="token operator">-</span><span class="token number">4</span> <span class="token punctuation">.</span>item <span class="token punctuation">{</span>
        width<span class="token operator">:</span> <span class="token number">100</span>px<span class="token punctuation">;</span>
        height<span class="token operator">:</span> <span class="token number">50</span>px<span class="token punctuation">;</span>
        position<span class="token operator">:</span> absolute<span class="token punctuation">;</span>
        top<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        left<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        bottom<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        right<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        margin<span class="token operator">:</span> auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container container-1"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>span<span class="token operator">></span>一段文字<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container container-2"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"item"</span><span class="token operator">></span>
        <span class="token keyword">this</span> is item
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container container-3"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"item"</span><span class="token operator">></span>
        <span class="token keyword">this</span> is item
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container container-4"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"item"</span><span class="token operator">></span>
        <span class="token keyword">this</span> is item
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre></div></template>
