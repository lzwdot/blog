<template><h1 id="手写深度比较-isequal" tabindex="-1"><a class="header-anchor" href="#手写深度比较-isequal" aria-hidden="true">#</a> 手写深度比较 isEqual</h1>
<p>手写深度比较 isEqual，实现下面需求</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 实现需求</span>
<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    b<span class="token operator">:</span> <span class="token punctuation">{</span>
        x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        y<span class="token operator">:</span> <span class="token number">200</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    b<span class="token operator">:</span> <span class="token punctuation">{</span>
        x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        y<span class="token operator">:</span> <span class="token number">200</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> obj3 <span class="token operator">=</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    b<span class="token operator">:</span> <span class="token punctuation">{</span>
        x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        y<span class="token operator">:</span> <span class="token number">200</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    c<span class="token operator">:</span> <span class="token number">300</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1 <span class="token operator">===</span> obj2<span class="token punctuation">)</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isEqual</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span> obj2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isEqual</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span> obj3<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre></div><p>isEqual 函数</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 判断是否对象或数组</span>
<span class="token keyword">function</span> <span class="token function">isObject</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">'object'</span> <span class="token operator">&amp;&amp;</span> obj1 <span class="token operator">!==</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
<span class="token comment">// 全相等判断</span>
<span class="token keyword">function</span> <span class="token function">isEqual</span><span class="token punctuation">(</span><span class="token parameter">obj1<span class="token punctuation">,</span> obj2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isObject</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">isObject</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 值类型（注意，参与 equal 的一般不会是函数）</span>
        <span class="token keyword">return</span> obj1 <span class="token operator">===</span> obj2
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj1 <span class="token operator">===</span> obj2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 两个都是对象或数组，而且不相等</span>
    <span class="token comment">// 1、先取出 obj1 和 obj2 的 keys，比较个数</span>
    <span class="token keyword">const</span> obj1Keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>
    <span class="token keyword">const</span> obj2Keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj1Keys<span class="token punctuation">.</span>length <span class="token operator">!==</span> obj2Keys<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 2、以 obj1 为基准，和 obj2 依次递归比较</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 比较当前 key 的 val —— 递归！！</span>
        <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">isEqual</span><span class="token punctuation">(</span>obj1<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> obj2<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 3、全相等</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div></template>
