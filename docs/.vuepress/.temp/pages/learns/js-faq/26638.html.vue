<template><h1 id="new-object-和-object-create-的区别" tabindex="-1"><a class="header-anchor" href="#new-object-和-object-create-的区别" aria-hidden="true">#</a> new Object() 和 Object.create 的区别</h1>
<p>区别</p>
<ul>
<li>{} 等同于 new Object()，原型都是 Object.prototype</li>
<li>Object.create(null) 没有原型</li>
<li>Object.create({...}) 可指定原型</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    b<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>b
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    b<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>b
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> obj3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token operator">===</span>obj2<span class="token punctuation">)</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token operator">===</span>obj3<span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token keyword">const</span> obj4 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// {} 没有原型</span>
<span class="token keyword">const</span> obj5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// {} 有原型</span>
<span class="token comment">// obj6 的 __proto__ 原型就是</span>
<span class="token comment">// {</span>
<span class="token comment">//     a: 10,</span>
<span class="token comment">//     b: 20,</span>
<span class="token comment">//     sum() {</span>
<span class="token comment">//         return this.a + this.b</span>
<span class="token comment">//     }</span>
<span class="token comment">// }</span>
<span class="token keyword">const</span> obj6 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    b<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>b
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// obj7 的 __proto__ 原型就是 obj1</span>
<span class="token keyword">const</span> obj7 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj7<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> obj1<span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj7 <span class="token operator">===</span> obj1<span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre></div></template>
