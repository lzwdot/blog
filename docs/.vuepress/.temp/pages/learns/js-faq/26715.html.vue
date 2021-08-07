<template><h1 id="手写深拷贝-注意-object-assign-不是深拷贝" tabindex="-1"><a class="header-anchor" href="#手写深拷贝-注意-object-assign-不是深拷贝" aria-hidden="true">#</a> 手写深拷贝，注意 Object.assign 不是深拷贝</h1>
<p>深拷贝函数</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token parameter">obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 一般拷贝的是对象或者数组</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">'object'</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">'array'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> obj
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> res
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">'array'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">'object'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 判断是否属于自己的属性，不是原型的</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    b<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    c<span class="token operator">:</span> <span class="token punctuation">{</span>
        x<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        y<span class="token operator">:</span> <span class="token punctuation">{</span>
            z<span class="token operator">:</span> <span class="token number">20</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">deepClone</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// {a: 1, b: 2, c: {…}}</span>
<span class="token comment">// a: 1</span>
<span class="token comment">// b: 2</span>
<span class="token comment">// c:</span>
<span class="token comment">// x: 10</span>
<span class="token comment">// y:</span>
<span class="token comment">// z: 20</span>
<span class="token comment">// __proto__: Object</span>
<span class="token comment">// __proto__: Object</span>
<span class="token comment">// __proto__: Object</span>
</code></pre></div><p>测试 Object.assign 不是深拷贝</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    b<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    c<span class="token operator">:</span> <span class="token punctuation">{</span>
        x<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        y<span class="token operator">:</span> <span class="token punctuation">{</span>
            z<span class="token operator">:</span> <span class="token number">20</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> obj1<span class="token punctuation">)</span>
obj1<span class="token punctuation">.</span>c<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">30</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">.</span>c<span class="token punctuation">.</span>x<span class="token punctuation">)</span> <span class="token comment">// 30</span>
</code></pre></div></template>
