<template><h1 id="如何理解-js-原型-隐式原型和显示原型-三座大山之一" tabindex="-1"><a class="header-anchor" href="#如何理解-js-原型-隐式原型和显示原型-三座大山之一" aria-hidden="true">#</a> 如何理解 JS 原型(隐式原型和显示原型)三座大山之一</h1>
<p>通过一些例子来说明，首先定义</p>
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
</code></pre></div><p>类型判断 - instanceof</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xialuo <span class="token keyword">instanceof</span> <span class="token class-name">Student</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xialuo <span class="token keyword">instanceof</span> <span class="token class-name">People</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xialuo <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
</code></pre></div><div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
</code></pre></div><p>class 的原型本质是什么？实际上是函数，可见是语法糖</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> People<span class="token punctuation">)</span> <span class="token comment">//function</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> Student<span class="token punctuation">)</span> <span class="token comment">//function</span>
</code></pre></div><p>原型</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xialuo<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span> <span class="token comment">//隐式原型</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// 显示原型</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xialuo<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><p><img src="@source/learns/js-base/images/3626654752.png" alt=""></p>
<p>原型关系</p>
<ul>
<li>每个 class 都有显示原型 prototype</li>
<li>每个实例都有隐式原型 <code>__proto__</code></li>
<li>实例的 <code>__proto__</code> 指向对应 class 的 prototype</li>
</ul>
<p>基于原型的指向规则，获取属性或执行方法时</p>
<ul>
<li>先在自身属性和方法寻找</li>
<li>如果找不到则自动去 <code>__proto__</code> 中查找</li>
</ul>
</template>
