<template><h1 id="vue-的-class-和-style" tabindex="-1"><a class="header-anchor" href="#vue-的-class-和-style" aria-hidden="true">#</a> Vue 的 class 和 style</h1>
<p>class 和 style</p>
<ul>
<li>使用动态属性</li>
<li>使用驼峰式写法</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>p <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"{ black: isBlack, yellow: isYellow }"</span><span class="token operator">></span>使用 <span class="token keyword">class</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span>p <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"[black, yellow]"</span><span class="token operator">></span>使用 <span class="token keyword">class</span> （数组）<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span>p <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">"styleData"</span><span class="token operator">></span>使用 style<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            isBlack<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            isYellow<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            black<span class="token operator">:</span> <span class="token string">'black'</span><span class="token punctuation">,</span>
            yellow<span class="token operator">:</span> <span class="token string">'yellow'</span><span class="token punctuation">,</span>
            styleData<span class="token operator">:</span> <span class="token punctuation">{</span>
                fontSize<span class="token operator">:</span> <span class="token string">'40px'</span><span class="token punctuation">,</span> <span class="token comment">// 转换为驼峰式</span>
                color<span class="token operator">:</span> <span class="token string">'red'</span><span class="token punctuation">,</span>
                backgroundColor<span class="token operator">:</span> <span class="token string">'#ccc'</span> <span class="token comment">// 转换为驼峰式</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>style scoped<span class="token operator">></span>
    <span class="token punctuation">.</span>black <span class="token punctuation">{</span>
        background<span class="token operator">-</span>color<span class="token operator">:</span> #<span class="token number">999</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>yellow <span class="token punctuation">{</span>
        color<span class="token operator">:</span> yellow<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre></div></template>
