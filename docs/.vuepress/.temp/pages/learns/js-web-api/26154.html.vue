<template><h1 id="无限下拉列表中通过事件代理监听子元素的点击" tabindex="-1"><a class="header-anchor" href="#无限下拉列表中通过事件代理监听子元素的点击" aria-hidden="true">#</a> 无限下拉列表中通过事件代理监听子元素的点击</h1>
<p>事件代理</p>
<ul>
<li>用 e.target 获取触发元素</li>
<li>用 matches 来判断是否是触发元素</li>
</ul>
<p>代码演示：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"div3"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>a1<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>a2<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>a3<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>a4<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token operator">&lt;</span>button<span class="token operator">></span>加载更多<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre></div><p>a 的点击都通过 div3 来代理</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 事件绑定函数</span>
<span class="token keyword">function</span> <span class="token function">bindEvent</span><span class="token punctuation">(</span><span class="token parameter">elem<span class="token punctuation">,</span> type<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    elem<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> div3 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'div3'</span><span class="token punctuation">)</span>
<span class="token function">bindEvent</span><span class="token punctuation">(</span>div3<span class="token punctuation">,</span> <span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 阻止默认行为</span>
    <span class="token keyword">const</span> target <span class="token operator">=</span> event<span class="token punctuation">.</span>target
    <span class="token keyword">if</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>nodeName <span class="token operator">===</span> <span class="token string">'A'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ul>
<li>代码简洁</li>
<li>减少浏览器内存占用</li>
<li>但是，不要滥用</li>
</ul>
</template>
