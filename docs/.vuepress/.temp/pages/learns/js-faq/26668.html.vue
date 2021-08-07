<template><h1 id="如何获取多个数字中的最大值" tabindex="-1"><a class="header-anchor" href="#如何获取多个数字中的最大值" aria-hidden="true">#</a> 如何获取多个数字中的最大值</h1>
<p>手写函数</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 返回最大值</span>
<span class="token keyword">function</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Arguments(6) [1, 2, 3, 7, 6, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
    <span class="token comment">// 相当于 Array.prototype.slice.apply(arguments, [0, arguments.length])</span>
    <span class="token comment">// 或者 const nums = Array.prototype.slice.call(arguments)</span>
    <span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>arguments<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
    <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span>
    nums<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">n</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">></span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            max <span class="token operator">=</span> n
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> max
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 7</span>
</code></pre></div><p>也可以用</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>
</code></pre></div></template>
