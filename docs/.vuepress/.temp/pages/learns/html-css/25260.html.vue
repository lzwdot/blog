<template><h1 id="line-height-如何继承" tabindex="-1"><a class="header-anchor" href="#line-height-如何继承" aria-hidden="true">#</a> line-height 如何继承</h1>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>style<span class="token operator">></span>
    body <span class="token punctuation">{</span>
        font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">20</span>px<span class="token punctuation">;</span>
        <span class="token comment">// line-height : 30px;	(p元素line-height：直接继承30px)</span>
        <span class="token comment">// line-height : 1.5;	(p元素line-height：16乘1.5 = 24px)</span>
        <span class="token comment">// line-height：200%	(p元素linehgiht：20 乘 200% = 40px)</span>
    <span class="token punctuation">}</span>
    p <span class="token punctuation">{</span>
        background<span class="token operator">-</span>color<span class="token operator">:</span> #ccc<span class="token punctuation">;</span>
        font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">16</span>px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
<span class="token operator">&lt;</span>p<span class="token operator">></span>这是一行文字<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
</code></pre></div><ul>
<li>写具体数值，如 30px，则继承该值（30px，好理解）</li>
<li>写比例，如 2，1.5，则继承该比例（1.5*16px，好理解）</li>
<li>写百分比，如 200%，则继承计算出来的值（0.2*20px，难点）</li>
</ul>
</template>
