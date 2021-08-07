<template><h1 id="js-值类型和引用类型" tabindex="-1"><a class="header-anchor" href="#js-值类型和引用类型" aria-hidden="true">#</a> JS 值类型和引用类型</h1>
<p>typeof 能判断哪些类型？</p>
<ul>
<li>识别所有值类型</li>
<li>识别函数</li>
<li>判断是否引用类型（不可再细分）</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//判断所有值类型</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span> <span class="token comment">//undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span>  <span class="token string">'abc'</span><span class="token punctuation">)</span> <span class="token comment">//string</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">// number</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// boolean</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token keyword">typeof</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'s'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//symbol</span>
<span class="token comment">//判断函数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//function</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//function</span>
<span class="token comment">//能识别引用类型（不能再继续识别）</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// object</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span><span class="token string">'b'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// object</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token punctuation">{</span>x<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// object</span>
</code></pre></div><p>值类型和引用类型的区别？</p>
<ul>
<li>值类型，key value 存在栈</li>
<li>引用类型，key 内存地址1 保存在栈，内存地址1 value 存在堆</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//值类型</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> a
a <span class="token operator">=</span> <span class="token number">200</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">//100</span>
<span class="token comment">//引用类型</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token punctuation">{</span>x<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> d <span class="token operator">=</span> c
d<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">200</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>x<span class="token punctuation">)</span> <span class="token comment">// 200</span>
<span class="token comment">// 区别？</span>
<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> obj1
<span class="token keyword">let</span> x1 <span class="token operator">=</span> obj1<span class="token punctuation">.</span>x
obj2<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">101</span>
x1 <span class="token operator">=</span> <span class="token number">102</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span> <span class="token comment">// {x: 101, y: 200}</span>
</code></pre></div><p><img src="@source/learns/js-base/images/2666084628.png" alt=""></p>
<p><img src="@source/learns/js-base/images/2868998451.png" alt=""></p>
<p>常见值类型：undefined string number boolen symbol</p>
<p>常见引用类型：object array</p>
<p>特殊引用类型：null：指针指向空地址， function：不用于存储数据，所以没有“拷贝，复制函数”一说</p>
<p>终极武器：<code>Object.prototype.toString.call()</code></p>
</template>
