<template><h1 id="window-onload-和-domcontentloaded-的区别" tabindex="-1"><a class="header-anchor" href="#window-onload-和-domcontentloaded-的区别" aria-hidden="true">#</a> window.onload 和 DOMContentLoaded 的区别</h1>
<p>区别</p>
<ul>
<li>window.onload 资源全部加载完成才能执行，包括图片</li>
<li>DOMContentLoaded DOM 渲染完成即可，图片可能尚未下载</li>
</ul>
<p>代码演示:</p>
<p>准备一段 html 代码</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>p<span class="token operator">></span>window<span class="token punctuation">.</span>onload 和 DOMContentLoaded 的区别<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span>img id<span class="token operator">=</span><span class="token string">"img"</span> src<span class="token operator">=</span><span class="token string">"https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"</span> alt<span class="token operator">=</span><span class="token string">""</span><span class="token operator">></span>
</code></pre></div><p>来，测试下</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'img loaded'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'load'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'window laoded'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'DOMContentLoaded'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'dom content laoded'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 一般正常结果</span>
<span class="token comment">//  dom content laoded</span>
<span class="token comment">// img loaded</span>
<span class="token comment">// window laoded</span>
</code></pre></div></template>
