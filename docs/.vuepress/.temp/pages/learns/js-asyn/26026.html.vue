<template><h1 id="async-await-语法问题" tabindex="-1"><a class="header-anchor" href="#async-await-语法问题" aria-hidden="true">#</a> async/await 语法问题</h1>
<p>语法</p>
<ul>
<li>执行 async 函数，返回的是 Promise 对象</li>
<li>await 相当于 Promise 的 then</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">100</span>
<span class="token punctuation">}</span>
<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 执行 async 函数，返回的是 Promise 对象</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span> <span class="token comment">// a Promise {&lt;resolved>: 100}</span>
    <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// await 相当于 Promise 的 then</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">,</span>b<span class="token punctuation">)</span> <span class="token comment">// b 100</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>报错无法执行，需要 try…catch 才可捕获异常</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'start'</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token number">100</span> <span class="token comment">// 直接返回 100</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span>
    <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">// await 相当于 Promise then</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">,</span>b<span class="token punctuation">)</span>
    <span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span> <span class="token comment">// 报错，下面无法执行，需要 try...catch</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'c'</span><span class="token punctuation">,</span>c<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'end'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//执行完毕，打印出哪些内容？</span>
<span class="token comment">//start</span>
<span class="token comment">//a 100</span>
<span class="token comment">//b 100</span>
<span class="token comment">//Uncaught (in promise) 300</span>
</code></pre></div></template>
