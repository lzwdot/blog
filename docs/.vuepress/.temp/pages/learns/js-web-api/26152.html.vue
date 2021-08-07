<template><h1 id="描述事件冒泡的流程" tabindex="-1"><a class="header-anchor" href="#描述事件冒泡的流程" aria-hidden="true">#</a> 描述事件冒泡的流程</h1>
<p>事件冒泡</p>
<ul>
<li>基于 DOM 树形结构</li>
<li>事件会顺着触发元素往上冒泡</li>
<li>应用场景：代理</li>
</ul>
<p>先上一个 html 结构</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"div1"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>p id<span class="token operator">=</span><span class="token string">"p1"</span><span class="token operator">></span>激活<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>p id<span class="token operator">=</span><span class="token string">"p2"</span><span class="token operator">></span>取消<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>p id<span class="token operator">=</span><span class="token string">"p3"</span><span class="token operator">></span>取消<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>p id<span class="token operator">=</span><span class="token string">"p4"</span><span class="token operator">></span>取消<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"div2"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>p id<span class="token operator">=</span><span class="token string">"p5"</span><span class="token operator">></span>取消<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>p id<span class="token operator">=</span><span class="token string">"p6"</span><span class="token operator">></span>取消<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre></div><p>来一段冒泡的</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 事件绑定函数</span>
<span class="token keyword">function</span> <span class="token function">bindEvent</span><span class="token punctuation">(</span><span class="token parameter">elem<span class="token punctuation">,</span> type<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    elem<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> p1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'p1'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> body <span class="token operator">=</span> document<span class="token punctuation">.</span>body
<span class="token function">bindEvent</span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span> <span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// event.stopPropagation() // 阻止冒泡</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'激活'</span><span class="token punctuation">)</span>
    <span class="token comment">// 激活</span>
    <span class="token comment">// 取消</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">bindEvent</span><span class="token punctuation">(</span>body<span class="token punctuation">,</span> <span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
<span class="token comment">// 点击其他元素，会在 body 上冒泡</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'取消'</span><span class="token punctuation">)</span> <span class="token comment">// 取消</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></template>
