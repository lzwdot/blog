import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u4E00\u6B21\u6027\u63D2\u5165\u591A\u4E2A-dom-\u8282\u70B9-\u8003\u8651\u6027\u80FD" tabindex="-1"><a class="header-anchor" href="#\u4E00\u6B21\u6027\u63D2\u5165\u591A\u4E2A-dom-\u8282\u70B9-\u8003\u8651\u6027\u80FD" aria-hidden="true">#</a> \u4E00\u6B21\u6027\u63D2\u5165\u591A\u4E2A DOM \u8282\u70B9\uFF0C\u8003\u8651\u6027\u80FD</h1><p>DOM \u6027\u80FD</p><ul><li>DOM \u64CD\u4F5C\u975E\u5E38\u201C\u6602\u8D35\u201D\uFF0C\u907F\u514D\u9891\u7E41\u7684 DOM \u64CD\u4F5C</li><li>\u5BF9 DOM \u67E5\u8BE2\u505A\u7F13\u5B58</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u4E0D\u7F13\u5B58 DOM \u67E5\u8BE2\u7ED3\u679C</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// \u7F13\u5B58 DOM \u67E5\u8BE2\u7ED3\u679C</span>
<span class="token keyword">const</span> length <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><ul><li>\u5C06\u9891\u7E41\u64CD\u4F5C\u6539\u4E3A\u4E00\u6B21\u6027\u64CD\u4F5C</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> list <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u6587\u6863\u7247\u6BB5\uFF0C\u6B64\u65F6\u8FD8\u6CA1\u6709\u63D2\u5165\u5230 DOM \u7ED3\u6784\u4E2D</span>
<span class="token keyword">const</span> frag <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createDocumentFragment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> li <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span>
    li<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">List item </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token comment">// \u5148\u63D2\u5165\u5230\u6587\u6863\u7247\u6BB5\u4E2D</span>
    frag<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>li<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u90FD\u5B8C\u6210\u540E\uFF0C\u518D\u7EDF\u4E00\u63D2\u5165\u5230 DOM \u7ED3\u6784\u4E2D</span>
list<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>frag<span class="token punctuation">)</span>
</code></pre></div>`,6);function p(o,e){return t}var u=s(a,[["render",p]]);export{u as default};
