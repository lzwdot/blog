<template><h1 id="事件代理-委托-是什么" tabindex="-1"><a class="header-anchor" href="#事件代理-委托-是什么" aria-hidden="true">#</a> 事件代理（委托）是什么？</h1>
<p>事件代理</p>
<ul>
<li>用 e.target 获取触发元素</li>
<li>用 matches 来判断是否是触发元素</li>
</ul>
<p>代码演示：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> body <span class="token operator">=</span> document<span class="token punctuation">.</span>body
p<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 注释后，就会事件冒泡</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
body<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> target <span class="token operator">=</span> e<span class="token punctuation">.</span>target
    <span class="token keyword">if</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></template>
