<template><h1 id="关于作用域和自由变量的场景题" tabindex="-1"><a class="header-anchor" href="#关于作用域和自由变量的场景题" aria-hidden="true">#</a> 关于作用域和自由变量的场景题</h1>
<p>第一个，感觉不容易</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> i
<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// 4 4 4</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>第二个，简单点</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a<span class="token operator">=</span><span class="token number">100</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 100</span>
    a <span class="token operator">=</span><span class="token number">10</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 10</span>
<span class="token punctuation">}</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 10</span>
</code></pre></div></template>
