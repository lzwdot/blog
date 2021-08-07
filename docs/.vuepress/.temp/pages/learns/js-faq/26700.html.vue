<template><h1 id="数组去重-考虑计算效率" tabindex="-1"><a class="header-anchor" href="#数组去重-考虑计算效率" aria-hidden="true">#</a> 数组去重，考虑计算效率</h1>
<p>数组去重的方法</p>
<ul>
<li>传统方式，遍历元素挨个比较，去重</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 传统方式</span>
<span class="token keyword">function</span> <span class="token function">unique</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">unique</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [1,2]</span>
</code></pre></div><ul>
<li>使用 ES6 中的 Set，性能更好推荐使用</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 使用 Set （无序，不能重复）</span>
<span class="token keyword">function</span> <span class="token function">uniqueSet</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>res<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">uniqueSet</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [1,2]</span>
</code></pre></div></template>
