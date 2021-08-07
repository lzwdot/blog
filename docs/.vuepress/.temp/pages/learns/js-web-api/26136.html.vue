<template><h1 id="如何识别浏览器的类型" tabindex="-1"><a class="header-anchor" href="#如何识别浏览器的类型" aria-hidden="true">#</a> 如何识别浏览器的类型</h1>
<p>navigator 和 screen</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// navigator</span>
<span class="token keyword">const</span> ua <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ua<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'Chrome'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 81</span>
<span class="token comment">// screen</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span>width<span class="token punctuation">,</span>screen<span class="token punctuation">.</span>height<span class="token punctuation">)</span> <span class="token comment">// 1920 1080</span>
</code></pre></div></template>
