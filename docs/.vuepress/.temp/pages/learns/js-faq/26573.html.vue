<template><h1 id="数组-slice-和-splice-的区别" tabindex="-1"><a class="header-anchor" href="#数组-slice-和-splice-的区别" aria-hidden="true">#</a> 数组 slice 和 splice 的区别</h1>
<p>区别</p>
<ul>
<li>功能区别（slice - 切片，splice - 剪接）</li>
<li>参数和返回值</li>
<li>是否纯函数？</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">]</span>
<span class="token comment">// slice 纯函数</span>
<span class="token keyword">const</span> arr1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> arr1<span class="token punctuation">)</span> <span class="token comment">// [10, 20, 30, 40, 50] [20, 30, 40]</span>
<span class="token comment">// splice 非纯函数</span>
<span class="token keyword">const</span> arr2 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">'a'</span><span class="token punctuation">,</span><span class="token string">'b'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>arr2<span class="token punctuation">)</span> <span class="token comment">// [10, "a", "b", 40, 50]  [20, 30]</span>
</code></pre></div></template>
