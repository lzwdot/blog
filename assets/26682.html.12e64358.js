import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u83B7\u53D6\u5F53\u524D\u9875\u9762-url-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5F53\u524D\u9875\u9762-url-\u53C2\u6570" aria-hidden="true">#</a> \u83B7\u53D6\u5F53\u524D\u9875\u9762 url \u53C2\u6570</h1><p>\u6BD4\u5982\uFF1Ahttp://localhost/test/test.html?a=100&amp;b=200#c=300</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u4F20\u7EDF\u65B9\u5F0F</span>
<span class="token keyword">function</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7C7B\u4F3Carray.slice(1)</span>
    <span class="token keyword">const</span> search <span class="token operator">=</span> location<span class="token punctuation">.</span>search<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token comment">// search: &#39;a=100&amp;b=200&#39;</span>
    <span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">(^|&amp;)</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">=([^&amp;]*)(&amp;|$)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span><span class="token string">&#39;i&#39;</span><span class="token punctuation">)</span> <span class="token comment">// i \u5927\u5C0F\u5199\u4E0D\u533A\u5206</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> search<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token comment">// [&quot;a=100&quot;, &quot;&quot;, &quot;100&quot;, index: 0, input: &quot;a=100&amp;b=200&quot;, groups: undefined]</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>res <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment">// \u6240\u4EE5\u8981\u53D6\u7D22\u5F15 2 \u7684\u503C</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 100</span>
</code></pre></div><p>\u9AD8\u7EA7 API \u65B9\u6CD5</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// URLSearchParams</span>
<span class="token keyword">function</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> search <span class="token operator">=</span> location<span class="token punctuation">.</span>search
    <span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span>search<span class="token punctuation">)</span>
    <span class="token keyword">return</span> p<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 200</span>
</code></pre></div>`,5);function p(o,c){return t}var l=s(a,[["render",p]]);export{l as default};
