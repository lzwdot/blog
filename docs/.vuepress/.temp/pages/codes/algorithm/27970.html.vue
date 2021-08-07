<template><h1 id="javascript-实现-最小堆类" tabindex="-1"><a class="header-anchor" href="#javascript-实现-最小堆类" aria-hidden="true">#</a> JavaScript 实现：最小堆类</h1>
<p>实现功能</p>
<ul>
<li>插入</li>
<li>删除</li>
<li>返回堆头</li>
<li>返回堆长</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * JavaScript 实现：最小堆类
 * 插入
 * 删除
 * 返回堆头
 * 返回堆长
 */</span>

<span class="token keyword">class</span> <span class="token class-name">MinHeap</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>heap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token function">swap</span><span class="token punctuation">(</span><span class="token parameter">i1<span class="token punctuation">,</span> i2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 交换两个值</span>
        <span class="token keyword">const</span> temp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i1<span class="token punctuation">]</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i1<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i2<span class="token punctuation">]</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i2<span class="token punctuation">]</span> <span class="token operator">=</span> temp
    <span class="token punctuation">}</span>

    <span class="token function">getParentIndex</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取父元素的索引值 (index-1)/2</span>
        <span class="token comment">// 类似 Math.floor((index-1/2))</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">>></span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token function">getLeftIndex</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取左元素的索引值 i*2+1</span>
        <span class="token comment">// 类似 Math.floor((index-1/2))</span>
        <span class="token keyword">return</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token function">getRightIndex</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取右元素的索引值 i*2+2</span>
        <span class="token comment">// 类似 Math.floor((index-1/2))</span>
        <span class="token keyword">return</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>

    <span class="token function">shiftUp</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

        <span class="token keyword">const</span> parentIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getParentIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>

        <span class="token comment">// 较小的值 上移</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parentIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">swap</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> parentIndex<span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">shiftUp</span><span class="token punctuation">(</span>parentIndex<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">shiftDown</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> leftIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getLeftIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
        <span class="token keyword">const</span> rightIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRightIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>

        <span class="token comment">// 较大的值 下移</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">swap</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> leftIndex<span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">shiftDown</span><span class="token punctuation">(</span>leftIndex<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 较大的值 下移</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>rightIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">swap</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> rightIndex<span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">shiftDown</span><span class="token punctuation">(</span>rightIndex<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 插入新值</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">shiftUp</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 删除值，用堆尾替换堆顶</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment">// 然后把较大值下移</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">shiftDown</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 返回堆顶</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 返回堆容量</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> h <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MinHeap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
h<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
h<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
h<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
h<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
h<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
h<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div></template>
