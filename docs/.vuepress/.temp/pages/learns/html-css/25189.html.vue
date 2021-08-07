<template><h1 id="bfc-理解与应用" tabindex="-1"><a class="header-anchor" href="#bfc-理解与应用" aria-hidden="true">#</a> BFC 理解与应用</h1>
<p>BFC：一块独立渲染的区域，内部元素的渲染不会影响边界以外的元素。</p>
<p>形成BFC的常见条件：</p>
<ul>
<li>float 不是none</li>
<li>position 是 absolute 或 fixed</li>
<li>overflow 不是 visible</li>
<li>display 是 flex inline-block 等</li>
</ul>
<p>使用BFC清除浮动</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 清除浮动 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>style type<span class="token operator">=</span><span class="token string">"text/css"</span><span class="token operator">></span>
    <span class="token punctuation">.</span>container <span class="token punctuation">{</span>
        background<span class="token operator">-</span>color<span class="token operator">:</span> #f1f1f1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>left <span class="token punctuation">{</span>
        float<span class="token operator">:</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>bfc <span class="token punctuation">{</span>
        overflow<span class="token operator">:</span> hidden<span class="token punctuation">;</span> <span class="token comment">/* 触发元素 BFC */</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container bfc"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"https://www.imooc.com/static/img/index/logo.png"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"left"</span> style<span class="token operator">=</span><span class="token string">"magin-right: 10px;"</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bfc"</span><span class="token operator">></span>某一段文字……<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre></div></template>
