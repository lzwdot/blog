<template><h1 id="js中contains和indexof的使用" tabindex="-1"><a class="header-anchor" href="#js中contains和indexof的使用" aria-hidden="true">#</a> js中contains和indexOf的使用</h1>
<p>contains： 用来查看dom元素的包含关系，如</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//...</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>indexOf： 集合中是否包含另一个集合，如</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> _Arrays_ <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'11'</span><span class="token punctuation">,</span><span class="token string">'22'</span><span class="token punctuation">,</span><span class="token string">'33'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> _Array_ <span class="token operator">=</span><span class="token string">'11'</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>_Arrays_<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>_Array_<span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">_alert_</span><span class="token punctuation">(</span><span class="token string">'Arrays中包含Array'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> _strs_ <span class="token operator">=</span> <span class="token string">'112233'</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> _str_ <span class="token operator">=</span><span class="token string">'11'</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>_strs_<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>_str_<span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">_alert_</span><span class="token punctuation">(</span><span class="token string">'Arrays中包含Array'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></template>
