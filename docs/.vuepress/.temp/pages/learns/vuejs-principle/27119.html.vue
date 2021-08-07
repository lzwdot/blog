<template><h1 id="vue-组件是异步渲染的" tabindex="-1"><a class="header-anchor" href="#vue-组件是异步渲染的" aria-hidden="true">#</a> Vue 组件是异步渲染的</h1>
<p>异步渲染</p>
<ul>
<li>回顾 $nextTick</li>
<li>汇总 data 的修改，一次性更新视图</li>
<li>减少 DOM 操作次数，提高性能</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 1. 异步渲染，$nextTick 待 DOM 渲染完再回调</span>
<span class="token comment">// 2. 页面渲染时会将 data 的修改做整合，多次 data 修改只会渲染一次</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取 DOM 元素</span>
  <span class="token keyword">const</span> ulElem <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>ul1
  <span class="token comment">// eslint-disable-next-line</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> ulElem<span class="token punctuation">.</span>childNodes<span class="token punctuation">.</span>length <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></template>
