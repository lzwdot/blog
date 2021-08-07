<template><h1 id="何为变量提升" tabindex="-1"><a class="header-anchor" href="#何为变量提升" aria-hidden="true">#</a> 何为变量提升？</h1>
<p>var 和 let const 的区别</p>
<ul>
<li>var 是 ES5 语法，let const 是 ES6 语法；var 有变量提升</li>
<li>var 和 let 是变量，可修改；const 是常量，不可修改（对象属性可以修改）</li>
<li>let const 有块级作用域，var 没有</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 变量提升 ES5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">100</span>
<span class="token comment">// 类似</span>
<span class="token keyword">var</span> c
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
c <span class="token operator">=</span> <span class="token number">30</span>
<span class="token comment">// 为了区别 var</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// Uncaught ReferenceError: Cannot access 'b' before initialization</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">20</span>
</code></pre></div><div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token comment">// 10 10</span>
<span class="token comment">// 块级作用域</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token comment">// Uncaught ReferenceError: i is not defined</span>
</code></pre></div><p>typeof 能判断哪些类型</p>
<ul>
<li>undefined string number boolean symbol</li>
<li>object（注意，typeof null === 'object'）</li>
<li>function</li>
</ul>
<p>列举强制类型转换和隐士类型转换</p>
<ul>
<li>强制：parseInt parseFloat toString 等</li>
<li>隐式：if、逻辑运算、==、+拼接字符串</li>
</ul>
</template>
