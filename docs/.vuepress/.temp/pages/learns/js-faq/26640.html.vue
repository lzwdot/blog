<template><h1 id="关于-this-的场景题" tabindex="-1"><a class="header-anchor" href="#关于-this-的场景题" aria-hidden="true">#</a> 关于 this 的场景题</h1>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
    count<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token function-variable function">getCount</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>User<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
<span class="token keyword">const</span> func <span class="token operator">=</span> User<span class="token punctuation">.</span>getCount
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// undefined</span>
</code></pre></div></template>
