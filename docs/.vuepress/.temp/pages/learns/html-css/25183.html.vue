<template><h1 id="盒模型宽度计算" tabindex="-1"><a class="header-anchor" href="#盒模型宽度计算" aria-hidden="true">#</a> 盒模型宽度计算</h1>
<p>盒模型宽度计算</p>
<ul>
<li>offsetWidth =（内容宽度+内边距+边距），无外边距</li>
<li>box-sizing:border-box; 可以改变盒模型宽度</li>
</ul>
<blockquote>
<p><code>box-sizing: content-box</code> 是 W3C 标准盒子模型</p>
<p><code>box-sizing: border-box</code> 是 IE 怪异盒子模型</p>
</blockquote>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> item 的 offsetWidth 是多大？ <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>style<span class="token operator">></span>
    #item<span class="token punctuation">{</span>
        width<span class="token operator">:</span> <span class="token number">100</span>px<span class="token punctuation">;</span>
        padding<span class="token operator">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>
        border<span class="token operator">:</span> <span class="token number">1</span>px solid #ccc<span class="token punctuation">;</span>
        margin<span class="token operator">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"item"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">let</span> itemOffSetWidth <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'item'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>offsetWidth
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"itemOffSetWidth"</span><span class="token punctuation">,</span>itemOffSetWidth<span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div><p>offsetWidth = 122px；</p>
<p>如果让 offsetWidth 等于100px，不修改width、padding 、border等，应该怎么做？</p>
<p>使用box-sizing: border-box;</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>style<span class="token operator">></span>
　　#item<span class="token punctuation">{</span>
   　　　width<span class="token operator">:</span> <span class="token number">100</span>px<span class="token punctuation">;</span>
   　　 padding<span class="token operator">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>
   　　 border<span class="token operator">:</span> <span class="token number">1</span>px solid #ccc<span class="token punctuation">;</span>
  　　  margin<span class="token operator">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>
  　　  box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
　　<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre></div></template>
