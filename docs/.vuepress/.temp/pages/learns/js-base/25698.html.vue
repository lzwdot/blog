<template><h1 id="什么是闭包-闭包会用在哪里-三座大山之二" tabindex="-1"><a class="header-anchor" href="#什么是闭包-闭包会用在哪里-三座大山之二" aria-hidden="true">#</a> 什么是闭包?闭包会用在哪里?（三座大山之二）</h1>
<p>闭包，作用域应用的特殊情况，有两种表现：</p>
<ul>
<li>函数作为参数被传递</li>
<li>函数作为返回值被返回</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 函数作为返回值</span>
<span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">100</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">200</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//100</span>
</code></pre></div><div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//函数作为参数被传递</span>
<span class="token keyword">function</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token parameter">func</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">200</span>
    <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">print</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span> <span class="token comment">// 100</span>
</code></pre></div><blockquote>
<p>闭包：自由变量的查找，是在函数定义的地方，向上级作用域查找，不是在执行的地方查找！！！</p>
</blockquote>
<p>实际开发中闭包的应用</p>
<ul>
<li>隐藏数据，只提供 API</li>
<li>如做一个简单的 cache 工具</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 闭包隐藏数据，只提供API，类似一个简单的cache工具</span>
<span class="token keyword">function</span> <span class="token function">createCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//闭包中的数据被隐藏，不被外界访问</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            data<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val <span class="token comment">//缓存数据</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token function">createCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
c<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 100</span>
</code></pre></div></template>
