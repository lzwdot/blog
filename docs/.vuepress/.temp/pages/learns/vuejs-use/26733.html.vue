<template><h1 id="vue-中指令、插值" tabindex="-1"><a class="header-anchor" href="#vue-中指令、插值" aria-hidden="true">#</a> Vue 中指令、插值</h1>
<p>基础</p>
<ul>
<li>插值，表达式</li>
<li>指令，动态属性</li>
<li>v-html：会有 XSS 风险，会覆盖子组件</li>
</ul>
<p>代码演示</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span>文本插值 <span class="token punctuation">{</span><span class="token punctuation">{</span>message<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token constant">JS</span> 表达式 <span class="token punctuation">{</span><span class="token punctuation">{</span> flag <span class="token operator">?</span> <span class="token string">'yes'</span> <span class="token operator">:</span> <span class="token string">'no'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> （只能是表达式，不能是 js 语句）<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span>p <span class="token operator">:</span>id<span class="token operator">=</span><span class="token string">"dynamicId"</span><span class="token operator">></span>动态属性 id<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span>hr<span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>p v<span class="token operator">-</span>html<span class="token operator">=</span><span class="token string">"rawHtml"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>span<span class="token operator">></span>有 xss 风险<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
            <span class="token operator">&lt;</span>span<span class="token operator">></span>【注意】使用 v<span class="token operator">-</span>html 之后，将会覆盖子元素<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 其他常用指令后面讲 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            message<span class="token operator">:</span> <span class="token string">'hello vue'</span><span class="token punctuation">,</span>
            flag<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            rawHtml<span class="token operator">:</span> <span class="token string">'指令 - 原始 html &lt;b>加粗&lt;/b> &lt;i>斜体&lt;/i>'</span><span class="token punctuation">,</span>
            dynamicId<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">id-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div></template>
