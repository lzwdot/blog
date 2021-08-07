<template><h1 id="什么是作用域-什么是自由变量" tabindex="-1"><a class="header-anchor" href="#什么是作用域-什么是自由变量" aria-hidden="true">#</a> 什么是作用域?什么是自由变量?</h1>
<p>作用域</p>
<ul>
<li>全局作用域</li>
<li>函数作用域</li>
<li>块级作用域（es6）</li>
</ul>
<p>自由变量</p>
<ul>
<li>一个变量在当前作用域没有定义，但被使用了</li>
<li>向上级作用域，一层一层依次寻找，直至找到为止</li>
<li>如果到全局作用域都没有找到，则报错 xx is not defined</li>
</ul>
<p>？？创建 10 个 <code>&lt;a&gt;</code>标签，点击的时候弹出对应的序号</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span>
    a<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token string">'&lt;br>'</span>
    a<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">alert</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div></template>
