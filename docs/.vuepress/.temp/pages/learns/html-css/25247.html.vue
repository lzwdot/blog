<template><h1 id="flex-布局" tabindex="-1"><a class="header-anchor" href="#flex-布局" aria-hidden="true">#</a> flex 布局</h1>
<p>常用容器语法</p>
<ul>
<li>flex-direction（显示方向）: row | row-reverse | column | column-reverse;</li>
<li>justify-content（水平对齐）: flex-start | flex-end | center | space-between | space-around;</li>
<li>flex-wrap（换行）: nowrap | wrap | wrap-reverse;</li>
<li>align-items（垂直对齐）: flex-start | flex-end | center | baseline | stretch;</li>
</ul>
<p>常用元素语法</p>
<ul>
<li>align-self（垂直对齐）: auto | flex-start | flex-end | center | baseline | stretch;</li>
</ul>
<p>色字实例</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>style<span class="token operator">></span>
    <span class="token punctuation">.</span>box <span class="token punctuation">{</span>
        width<span class="token operator">:</span> <span class="token number">200</span>px<span class="token punctuation">;</span>
        height<span class="token operator">:</span> <span class="token number">200</span>px<span class="token punctuation">;</span>
        border<span class="token operator">:</span> <span class="token number">2</span>px solid #ccc<span class="token punctuation">;</span>
        border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>
        padding<span class="token operator">:</span> <span class="token number">20</span>px<span class="token punctuation">;</span>
        display<span class="token operator">:</span> flex<span class="token punctuation">;</span>
        justify<span class="token operator">-</span>content<span class="token operator">:</span> space<span class="token operator">-</span>between<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>item <span class="token punctuation">{</span>
        display<span class="token operator">:</span> block<span class="token punctuation">;</span>
        width<span class="token operator">:</span> <span class="token number">40</span>px<span class="token punctuation">;</span>
        height<span class="token operator">:</span> <span class="token number">40</span>px<span class="token punctuation">;</span>
        border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
        background<span class="token operator">-</span>color<span class="token operator">:</span> #<span class="token number">666</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>item<span class="token operator">:</span>nth<span class="token operator">-</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token parameter"><span class="token number">2</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        align<span class="token operator">-</span>self<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>item<span class="token operator">:</span>nth<span class="token operator">-</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token parameter"><span class="token number">3</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        align<span class="token operator">-</span>self<span class="token operator">:</span> flex<span class="token operator">-</span>end<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"box"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"item"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
    <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"item"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
    <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"item"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre></div></template>
