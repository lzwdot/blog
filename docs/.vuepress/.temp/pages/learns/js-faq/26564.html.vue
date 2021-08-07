<template><h1 id="数组的-pop-push-unshift-shift-分别是什么" tabindex="-1"><a class="header-anchor" href="#数组的-pop-push-unshift-shift-分别是什么" aria-hidden="true">#</a> 数组的 pop push unshift shift 分别是什么</h1>
<p>数组的 pop push unshift shift</p>
<ul>
<li>功能是什么？</li>
<li>返回值是什么？</li>
<li>是否对原数组造成影响？</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span>
<span class="token comment">// pop</span>
<span class="token keyword">const</span> popRes <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>popRes<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token comment">// 40 [10, 20, 30]</span>
<span class="token comment">// shift</span>
<span class="token keyword">const</span> shiftRes <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>shiftRes<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token comment">// 10 [20, 30, 40]</span>
<span class="token comment">// push</span>
<span class="token keyword">const</span> pushRes <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token comment">// 返回 length</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pushRes<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token comment">// 5 [10, 20, 30, 40, 50]</span>
<span class="token comment">// unshift</span>
<span class="token keyword">const</span> unshiftRes <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">// 返回 length</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>unshiftRes<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token comment">// 5 [5, 10, 20, 30, 40]  </span>
</code></pre></div><p>数据的 API，有哪些是纯函数？（纯函数：1、不改变原数组；2、返回一个数组）</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 纯函数：1、不改变原数组（没有副作用）；2、返回一个数组</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span>
<span class="token comment">// concat</span>
<span class="token keyword">const</span> arr1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">70</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>arr1<span class="token punctuation">)</span> <span class="token comment">// [10, 20, 30, 40] [10, 20, 30, 40, 50, 60, 70]</span>
<span class="token comment">// map</span>
<span class="token keyword">const</span> arr2 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token operator">=></span>num<span class="token operator">*</span><span class="token number">10</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>arr2<span class="token punctuation">)</span> <span class="token comment">// [10, 20, 30, 40] [100, 200, 300, 400]</span>
<span class="token comment">// filter</span>
<span class="token keyword">const</span> arr3 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token operator">=></span>num<span class="token operator">></span><span class="token number">25</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>arr3<span class="token punctuation">)</span> <span class="token comment">// [10, 20, 30, 40] [30, 40]</span>
<span class="token comment">// slice</span>
<span class="token keyword">const</span> arr4 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>arr4<span class="token punctuation">)</span> <span class="token comment">// [10, 20, 30, 40]  [20, 30, 40]</span>
</code></pre></div><p>非纯函数：push pop shift unshift forEach some every reduce</p>
</template>
