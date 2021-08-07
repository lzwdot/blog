<template><h1 id="async-await-的顺序问题" tabindex="-1"><a class="header-anchor" href="#async-await-的顺序问题" aria-hidden="true">#</a> async/await 的顺序问题</h1>
<p>来一道经典的异步题目</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'async1 start'</span><span class="token punctuation">)</span> <span class="token comment">// step 2</span>
    <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// await 后面的都作为回调内容 -微任务</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'async1 end'</span><span class="token punctuation">)</span> <span class="token comment">// step 6</span>
<span class="token punctuation">}</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'async2'</span><span class="token punctuation">)</span>  <span class="token comment">// step 3</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'script start'</span><span class="token punctuation">)</span> <span class="token comment">// step 1</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 宏任务</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'setTimeout'</span><span class="token punctuation">)</span> <span class="token comment">// step 8</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//初始化 promise 时，传入的函数会立即执行</span>
<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'promise1'</span><span class="token punctuation">)</span>  <span class="token comment">// step 4</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 微任务</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'promise2'</span><span class="token punctuation">)</span> <span class="token comment">// step 7</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'script end'</span><span class="token punctuation">)</span> <span class="token comment">// step 5</span>
<span class="token comment">// 同步代码执行完毕（event loop - call stack 被清空）</span>
<span class="token comment">// 执行微任务</span>
<span class="token comment">// （尝试触发 DOM 渲染）</span>
<span class="token comment">// 触发 Event Loop， 执行宏任务</span>
</code></pre></div><p>上面执行结果：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// script start</span>
<span class="token comment">// async1 start</span>
<span class="token comment">// async2</span>
<span class="token comment">// promise1</span>
<span class="token comment">// script end</span>
<span class="token comment">// async1 end</span>
<span class="token comment">// promise2</span>
<span class="token comment">// setTimeout</span>
</code></pre></div></template>
