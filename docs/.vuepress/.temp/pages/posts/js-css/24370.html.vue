<template><h1 id="监听url的location-hash-即-值-变化" tabindex="-1"><a class="header-anchor" href="#监听url的location-hash-即-值-变化" aria-hidden="true">#</a> 监听url的location.hash（即#值）变化</h1>
<p>当有个需求，通过监听url的location.hash（即#值）变化，来实现页面刷新。如：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>onhashchange <span class="token operator">=</span> func<span class="token punctuation">;</span>
<span class="token operator">&lt;</span>body onhashchange<span class="token operator">=</span><span class="token string">"func();"</span><span class="token operator">></span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"hashchange"</span><span class="token punctuation">,</span> func<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p>刷新页面：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></template>
