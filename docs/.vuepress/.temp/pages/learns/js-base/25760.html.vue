<template><h1 id="同步和异步的区别是什么-三座大山之三" tabindex="-1"><a class="header-anchor" href="#同步和异步的区别是什么-三座大山之三" aria-hidden="true">#</a> 同步和异步的区别是什么？（三座大山之三）</h1>
<p>单线程和异步</p>
<ul>
<li>JS 是单线程语言，只能同时做一件事</li>
<li>浏览器和 nodejs 已支持 JS 启动进程，如 Web Worker</li>
<li>JS 和 DOM 渲染共用一个线程，因为 JS 可修改 DOM 结构</li>
<li>遇到等待（网络请求，定时任务）不能卡住，所以需要异步</li>
<li>异步通过 callback 函数形式</li>
</ul>
<p>异步和同步，基于 JS 是单线程语言</p>
<ul>
<li>异步不会阻塞代码执行</li>
<li>同步会阻塞代码执行</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//异步 100 300 200</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span> <span class="token comment">//异步（callback 回调函数）</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span>
<span class="token comment">//同步100 200 300</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span>
</code></pre></div><p>前端使用异步的场景有哪些？</p>
<ul>
<li>网络请求，如 ajax 图片加载</li>
<li>定时任务，如 setTimeout</li>
</ul>
<p>？？setTimeout 执行结果</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//执行结果 1 3 5 4 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
</code></pre></div></template>
