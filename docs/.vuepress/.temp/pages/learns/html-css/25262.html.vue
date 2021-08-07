<template><h1 id="rem-是什么" tabindex="-1"><a class="header-anchor" href="#rem-是什么" aria-hidden="true">#</a> rem 是什么</h1>
<p>rem 是一个长度单位</p>
<ul>
<li>px， 绝对长度单位，最常用</li>
<li>em， 相对长度单位，相对于父元素，不常用</li>
<li>rem，相对长度单位，相对于根元素，常用于响应式布局</li>
</ul>
<div class="language-html ext-html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">  
    <span class="token selector">html</span> <span class="token punctuation">{</span>  
        <span class="token property">font-size</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token selector">div</span> <span class="token punctuation">{</span>  
        <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>  
        <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>  
        <span class="token property">font-size</span><span class="token punctuation">:</span> 0.16rem<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 0.1rem</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>rem 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 0.2rem</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>rem 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 0.3rem</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>rem 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>  
  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>  
    this is div1  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>  
    this is div2  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 3rem<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>  
    this is div3  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre></div></template>
