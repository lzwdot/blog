<template><h1 id="闭包是什么-有什么特性-有什么负面影响" tabindex="-1"><a class="header-anchor" href="#闭包是什么-有什么特性-有什么负面影响" aria-hidden="true">#</a> 闭包是什么，有什么特性？有什么负面影响？</h1>
<p>回顾</p>
<ul>
<li>回顾：作用域和自由变量</li>
<li>闭包应用场景：函数作为参数被传入，函数作为返回值被返回</li>
<li>回顾：自由变量的查找，要在函数定义的地方（而非执行的地方）</li>
<li>影响：变量会常驻内存，得不到释放。闭包不要乱用</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 自由变量示例 - 内存会被释放</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> a1 <span class="token operator">=</span> <span class="token number">100</span>
    <span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> a2 <span class="token operator">=</span> <span class="token number">200</span>
        <span class="token keyword">function</span> <span class="token function">fn3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> a3 <span class="token operator">=</span> <span class="token number">300</span>
            <span class="token keyword">return</span> a <span class="token operator">+</span> a1 <span class="token operator">+</span> a3 <span class="token operator">+</span> a3
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 闭包 函数作为返回值 - 内存不会被释放</span>
<span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">100</span> <span class="token comment">// b 被返回，暂时不会释放</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> fn2 <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">200</span>
<span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 100</span>
<span class="token comment">// 闭包 函数作为参数 - 内存不会被释放</span>
<span class="token keyword">function</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token number">200</span>
    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> c <span class="token operator">=</span><span class="token number">100</span> <span class="token comment">// b 被传入，暂时不会释放</span>
<span class="token keyword">function</span> <span class="token function">fn3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">print</span><span class="token punctuation">(</span>fn3<span class="token punctuation">)</span> <span class="token comment">// 100</span>
</code></pre></div></template>
