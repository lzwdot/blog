import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="promise-\u548C-settimeout-\u7684\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#promise-\u548C-settimeout-\u7684\u987A\u5E8F" aria-hidden="true">#</a> promise \u548C setTimeout \u7684\u987A\u5E8F</h1><p>\u5FAE\u4EFB\u52A1\u6267\u884C\u65F6\u673A\u6BD4\u5B8F\u4EFB\u52A1\u8981\u65E9</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token comment">// \u5B8F\u4EFB\u52A1</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u5FAE\u4EFB\u52A1</span>
Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span>
<span class="token comment">// 100</span>
<span class="token comment">// 400</span>
<span class="token comment">// 300</span>
<span class="token comment">// 200</span>
</code></pre></div>`,3);function p(o,c){return t}var l=s(a,[["render",p]]);export{l as default};
