<template><h1 id="函数声明和函数表达式的区别" tabindex="-1"><a class="header-anchor" href="#函数声明和函数表达式的区别" aria-hidden="true">#</a> 函数声明和函数表达式的区别</h1>
<p>区别</p>
<ul>
<li>函数声明 function fn(){...}</li>
<li>函数表达式 const fn = function(){...}</li>
<li>函数声明会在代码执行前预加载，而函数表达式不会</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token comment">// 30</span>
<span class="token comment">// 函数声明</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>y</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token operator">+</span>y
<span class="token punctuation">}</span>
<span class="token keyword">const</span> res1 <span class="token operator">=</span> <span class="token function">sum1</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res1<span class="token punctuation">)</span> <span class="token comment">// Uncaught ReferenceError: Cannot access 'sum1' before initialization</span>
<span class="token comment">// 函数表达式</span>
<span class="token keyword">const</span> <span class="token function-variable function">sum1</span> <span class="token operator">=</span>  <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>y</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token operator">+</span>y
<span class="token punctuation">}</span>
</code></pre></div></template>
