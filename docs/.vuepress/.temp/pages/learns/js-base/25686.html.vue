<template><h1 id="instanceof-是基于原型链实现的" tabindex="-1"><a class="header-anchor" href="#instanceof-是基于原型链实现的" aria-hidden="true">#</a> instanceof 是基于原型链实现的</h1>
<p>如何准确判断一个变量是数组？</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>a <span class="token keyword">instanceof</span> <span class="token class-name">Array</span>
</code></pre></div><p>利用之前的一个例子</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
    <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> eat something</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//子类</span>
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
<span class="token comment">//实例化</span>
<span class="token keyword">const</span> xialuo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">'夏洛'</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xialuo<span class="token punctuation">.</span>name<span class="token punctuation">,</span>xialuo<span class="token punctuation">.</span>number<span class="token punctuation">)</span> <span class="token comment">//夏洛 100</span>
xialuo<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//姓名夏洛，学号100</span>
xialuo<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//夏洛 eat something</span>
</code></pre></div><p>原型链</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span> <span class="token comment">//隐式原型</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">People</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// 显示原型</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">People</span><span class="token punctuation">.</span>prototype<span class="token operator">===</span> <span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><p>通过原型链来理解 <code>instanceof</code> 即</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xialuo <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
</code></pre></div><p><img src="@source/learns/js-base/images/3470252225.png" alt=""></p>
</template>
