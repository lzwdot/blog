<template><h1 id="如何用-class-实现继承" tabindex="-1"><a class="header-anchor" href="#如何用-class-实现继承" aria-hidden="true">#</a> 如何用 class 实现继承?</h1>
<p>利用 es6 中的 class 实现继承，首先是父类</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//父类</span>
<span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
    <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> eat something</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>然后通过两个子类通过 <code>extends</code> 继承，注意使用 <code>super</code> 继承父类构造函数</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//子类</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">People</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>number <span class="token operator">=</span> number
    <span class="token punctuation">}</span>
    <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
            <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">姓名</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">，学号</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>number<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//子类</span>
<span class="token keyword">class</span> <span class="token class-name">Teacher</span> <span class="token keyword">extends</span> <span class="token class-name">People</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>major</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>major <span class="token operator">=</span> major
    <span class="token punctuation">}</span>
    <span class="token function">teach</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
            <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 教 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>major<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>实例化输出</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//实例化</span>
<span class="token keyword">const</span> xialuo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">'夏洛'</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xialuo<span class="token punctuation">.</span>name<span class="token punctuation">,</span>xialuo<span class="token punctuation">.</span>number<span class="token punctuation">)</span> <span class="token comment">//夏洛 100</span>
xialuo<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//姓名夏洛，学号100</span>
xialuo<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//夏洛 eat something</span>
<span class="token keyword">const</span> wang <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Teacher</span><span class="token punctuation">(</span><span class="token string">'王老师'</span><span class="token punctuation">,</span><span class="token string">'英语'</span><span class="token punctuation">)</span>
wang<span class="token punctuation">.</span><span class="token function">teach</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 王老师 教 英语</span>
xialuo<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 夏洛 eat something</span>
</code></pre></div></template>
