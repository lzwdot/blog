import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="js\u4E2Dcontains\u548Cindexof\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#js\u4E2Dcontains\u548Cindexof\u7684\u4F7F\u7528" aria-hidden="true">#</a> js\u4E2Dcontains\u548CindexOf\u7684\u4F7F\u7528</h1><p>contains\uFF1A \u7528\u6765\u67E5\u770Bdom\u5143\u7D20\u7684\u5305\u542B\u5173\u7CFB\uFF0C\u5982</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//...</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>indexOf\uFF1A \u96C6\u5408\u4E2D\u662F\u5426\u5305\u542B\u53E6\u4E00\u4E2A\u96C6\u5408\uFF0C\u5982</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> _Arrays_ <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;11&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;22&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;33&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> _Array_ <span class="token operator">=</span><span class="token string">&#39;11&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>_Arrays_<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>_Array_<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">_alert_</span><span class="token punctuation">(</span><span class="token string">&#39;Arrays\u4E2D\u5305\u542BArray&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> _strs_ <span class="token operator">=</span> <span class="token string">&#39;112233&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> _str_ <span class="token operator">=</span><span class="token string">&#39;11&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>_strs_<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>_str_<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">_alert_</span><span class="token punctuation">(</span><span class="token string">&#39;Arrays\u4E2D\u5305\u542BArray&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,5);function p(o,c){return t}var r=s(a,[["render",p]]);export{r as default};
