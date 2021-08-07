<template><h1 id="介绍一下-raf-requestanimationframe" tabindex="-1"><a class="header-anchor" href="#介绍一下-raf-requestanimationframe" aria-hidden="true">#</a> 介绍一下 RAF（requestAnimationFrame）</h1>
<p>requestAnimationFrame</p>
<ul>
<li>想要动画流畅，更新频率要 60帧/s，即 16.67ms 更新一次视图</li>
<li>setTimeout 要手动控制频率，而 RAF 浏览器会自动控制</li>
<li>后台标签或隐藏 iframe 中，RAF 会暂停，而 setTimeout 依然执行</li>
</ul>
<p>有这样一个需求：</p>
<ul>
<li>3s 把宽度从 100px 变成 640px，即增加 540px</li>
<li>60帧/s，3s 180 帧，每帧变化 540/180=3px</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>style<span class="token operator">></span>
   #div<span class="token punctuation">{</span>
       width<span class="token operator">:</span> <span class="token number">100</span>px<span class="token punctuation">;</span>
       height<span class="token operator">:</span> <span class="token number">100</span>px<span class="token punctuation">;</span>
       background<span class="token operator">-</span>color<span class="token operator">:</span> red<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"div"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre></div><p>使用 setTimeout 和 RAF 的实现方式</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> curWidth <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">const</span> maxWidth <span class="token operator">=</span> <span class="token number">640</span>
<span class="token comment">// setTimeout</span>
<span class="token keyword">function</span> <span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    curWidth <span class="token operator">=</span> curWidth <span class="token operator">+</span> <span class="token number">3</span>
    div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> curWidth <span class="token operator">+</span> <span class="token string">'px'</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>curWidth <span class="token operator">&lt;</span> maxWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 手动控制时间，如果每次增加 1px，则需要时间 16.7/3</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span>animate<span class="token punctuation">,</span> <span class="token number">16.7</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// RAF</span>
<span class="token keyword">function</span> <span class="token function">animateRAF</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    curWidth <span class="token operator">=</span> curWidth <span class="token operator">+</span> <span class="token number">3</span>
    div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> curWidth <span class="token operator">+</span> <span class="token string">'px'</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>curWidth <span class="token operator">&lt;</span> maxWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 浏览器自动控制</span>
        window<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>animateRAF<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">animateRAF</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div></template>
