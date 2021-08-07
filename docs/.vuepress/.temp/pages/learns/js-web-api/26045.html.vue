<template><h1 id="一次性插入多个-dom-节点-考虑性能" tabindex="-1"><a class="header-anchor" href="#一次性插入多个-dom-节点-考虑性能" aria-hidden="true">#</a> 一次性插入多个 DOM 节点，考虑性能</h1>
<p>DOM 性能</p>
<ul>
<li>DOM 操作非常“昂贵”，避免频繁的 DOM 操作</li>
<li>对 DOM 查询做缓存</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 不缓存 DOM 查询结果</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 缓存 DOM 查询结果</span>
<span class="token keyword">const</span> length <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><ul>
<li>将频繁操作改为一次性操作</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> list <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'list'</span><span class="token punctuation">)</span>
<span class="token comment">// 创建一个文档片段，此时还没有插入到 DOM 结构中</span>
<span class="token keyword">const</span> frag <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createDocumentFragment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> li <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span>
    li<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">List item </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
    <span class="token comment">// 先插入到文档片段中</span>
    frag<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>li<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 都完成后，再统一插入到 DOM 结构中</span>
list<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>frag<span class="token punctuation">)</span>
</code></pre></div></template>
