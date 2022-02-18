import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u4E8B\u4EF6\u4EE3\u7406-\u59D4\u6258-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u4EE3\u7406-\u59D4\u6258-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E8B\u4EF6\u4EE3\u7406\uFF08\u59D4\u6258\uFF09\u662F\u4EC0\u4E48\uFF1F</h1><p>\u4E8B\u4EF6\u4EE3\u7406</p><ul><li>\u7528 e.target \u83B7\u53D6\u89E6\u53D1\u5143\u7D20</li><li>\u7528 matches \u6765\u5224\u65AD\u662F\u5426\u662F\u89E6\u53D1\u5143\u7D20</li></ul><p>\u4EE3\u7801\u6F14\u793A\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> body <span class="token operator">=</span> document<span class="token punctuation">.</span>body
p<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u6CE8\u91CA\u540E\uFF0C\u5C31\u4F1A\u4E8B\u4EF6\u5192\u6CE1</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
body<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> target <span class="token operator">=</span> e<span class="token punctuation">.</span>target
    <span class="token keyword">if</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,5);function p(o,c){return t}var l=s(a,[["render",p]]);export{l as default};
