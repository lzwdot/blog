<template><h1 id="document-load-和-ready-的区别" tabindex="-1"><a class="header-anchor" href="#document-load-和-ready-的区别" aria-hidden="true">#</a> document load 和 ready 的区别</h1>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'load'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 页面的全部资源加载完成才会执行，包括图片，视频等</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'DOMContentLoaded'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// DOM 渲染完后即可执行，此时图片，视频可能还没加载完</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></template>
