<template><h1 id="简单的js倒计时函数" tabindex="-1"><a class="header-anchor" href="#简单的js倒计时函数" aria-hidden="true">#</a> 简单的js倒计时函数</h1>
<blockquote>
<p>需要引入jQuery</p>
</blockquote>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>
<span class="token operator">*</span> 倒计时
<span class="token operator">*</span>@param el
<span class="token operator">*</span>@param time
<span class="token operator">*</span><span class="token operator">/</span>
<span class="token keyword">function</span> <span class="token function">smsTimeOut</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> time <span class="token operator">=</span> time <span class="token operator">||</span> <span class="token number">60</span><span class="token punctuation">;</span>
    window<span class="token punctuation">.</span>localTimer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">smsTimeOut</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>localTime <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> window<span class="token punctuation">.</span>localTime <span class="token operator">=</span> time<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>localTime <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">$</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">'disabled'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>localTime <span class="token operator">+</span> <span class="token string">'秒后获取'</span><span class="token punctuation">)</span>
        window<span class="token punctuation">.</span>localTime<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>localTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        window<span class="token punctuation">.</span>localTime <span class="token operator">=</span> time<span class="token punctuation">;</span>
        <span class="token function">$</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">'disabled'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">' 获取验证码'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></template>
