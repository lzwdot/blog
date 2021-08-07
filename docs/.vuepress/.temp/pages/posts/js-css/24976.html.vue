<template><h1 id="js-模拟-new-运算符实现的过程" tabindex="-1"><a class="header-anchor" href="#js-模拟-new-运算符实现的过程" aria-hidden="true">#</a> js 模拟 new 运算符实现的过程</h1>
<p>今天来聊一聊 js 的 <code>new</code> 运算符，首先我们来看一段代码：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Car</span><span class="token punctuation">(</span><span class="token parameter">make<span class="token punctuation">,</span> model<span class="token punctuation">,</span> year</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>make <span class="token operator">=</span> make<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>model <span class="token operator">=</span> model<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>year <span class="token operator">=</span> year<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> car1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">'Eagle'</span><span class="token punctuation">,</span> <span class="token string">'Talon TSi'</span><span class="token punctuation">,</span> <span class="token number">1993</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>car1<span class="token punctuation">.</span>make<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>以上使用到了 <code>new</code> 关键字，那么 <code>new</code> 到底做了些什么操作？</p>
<ol>
<li>首先，<code>new</code> 创建一个空的简单JavaScript对象（即<code>{}</code>）</li>
<li>接着，链接该对象（即设置该对象的构造函数）到另一个对象</li>
<li>然后，将步骤1新创建的对象作为<code>this</code>的上下文</li>
<li>最后，如果该函数没有返回对象，则返回<code>this</code></li>
</ol>
<p>既然我们知道了<code>new</code>都做了些什么，下面我们自己来模拟下操作过程：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">jsNew</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//1、创建空对象</span>
    <span class="token keyword">let</span> o <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">//2、空对象原型指向构造函数obj的prototype</span>
    o<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> obj<span class="token punctuation">.</span>prototype
    <span class="token comment">// let o = Object.create(obj.prototype)</span>
    <span class="token comment">//3、将obj的this指向空对象o</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token function">obj</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token comment">//4、该函数没有返回对象，则返回this</span>
    <span class="token keyword">return</span> <span class="token keyword">typeof</span> res <span class="token operator">===</span> <span class="token string">'object'</span> <span class="token operator">?</span> res <span class="token operator">:</span> o
<span class="token punctuation">}</span>
<span class="token keyword">const</span> car2 <span class="token operator">=</span> <span class="token function">jsNew</span><span class="token punctuation">(</span>Car<span class="token punctuation">,</span><span class="token string">'Eagle'</span><span class="token punctuation">,</span> <span class="token string">'Talon TSi'</span><span class="token punctuation">,</span> <span class="token number">1993</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>car2<span class="token punctuation">.</span>make<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>可以测试下，以上两个执行的结果都是：&quot;Eagle&quot;</p>
</template>
