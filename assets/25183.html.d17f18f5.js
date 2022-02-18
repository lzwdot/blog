import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u76D2\u6A21\u578B\u5BBD\u5EA6\u8BA1\u7B97" tabindex="-1"><a class="header-anchor" href="#\u76D2\u6A21\u578B\u5BBD\u5EA6\u8BA1\u7B97" aria-hidden="true">#</a> \u76D2\u6A21\u578B\u5BBD\u5EA6\u8BA1\u7B97</h1><p>\u76D2\u6A21\u578B\u5BBD\u5EA6\u8BA1\u7B97</p><ul><li>offsetWidth =\uFF08\u5185\u5BB9\u5BBD\u5EA6+\u5185\u8FB9\u8DDD+\u8FB9\u8DDD\uFF09\uFF0C\u65E0\u5916\u8FB9\u8DDD</li><li>box-sizing:border-box; \u53EF\u4EE5\u6539\u53D8\u76D2\u6A21\u578B\u5BBD\u5EA6</li></ul><blockquote><p><code>box-sizing: content-box</code> \u662F W3C \u6807\u51C6\u76D2\u5B50\u6A21\u578B</p><p><code>box-sizing: border-box</code> \u662F IE \u602A\u5F02\u76D2\u5B50\u6A21\u578B</p></blockquote><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- item \u7684 offsetWidth \u662F\u591A\u5927\uFF1F --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">#item</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">let</span> itemOffSetWidth <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;item&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>offsetWidth
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;itemOffSetWidth&quot;</span><span class="token punctuation">,</span>itemOffSetWidth<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>offsetWidth = 122px\uFF1B</p><p>\u5982\u679C\u8BA9 offsetWidth \u7B49\u4E8E100px\uFF0C\u4E0D\u4FEE\u6539width\u3001padding \u3001border\u7B49\uFF0C\u5E94\u8BE5\u600E\u4E48\u505A\uFF1F</p><p>\u4F7F\u7528box-sizing: border-box;</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
#item</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre></div>`,9);function p(o,e){return t}var u=s(a,[["render",p]]);export{u as default};
