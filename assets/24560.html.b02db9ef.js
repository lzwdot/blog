import{h as n}from"./app.4ca8afde.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},p=n(`<h1 id="go-\u89E3\u6790\u591A\u5C42\u7EA7-json-\u540E\u5D4C\u5957-map-\u7684\u53D6\u503C\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#go-\u89E3\u6790\u591A\u5C42\u7EA7-json-\u540E\u5D4C\u5957-map-\u7684\u53D6\u503C\u95EE\u9898" aria-hidden="true">#</a> go \u89E3\u6790\u591A\u5C42\u7EA7 json \u540E\u5D4C\u5957 map \u7684\u53D6\u503C\u95EE\u9898</h1><p>\u6709\u8FD9\u4E48\u4E00\u6BB5\u591A\u7EA7 json \u5B57\u7B26</p><blockquote><p>[&quot;base&quot;:{&quot;captcha&quot;:1 &quot;lottery_open&quot;:1}}</p></blockquote><p>\u4F7F\u7528 go \u6765\u5904\u7406\u591A\u5C42\u7EA7\u7684 json \u6570\u636E</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token literal-property property">tempMap</span> <span class="token operator">:</span><span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span>map<span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token literal-property property">err</span> <span class="token operator">:</span><span class="token operator">=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token operator">&amp;</span>tempMap<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> nil <span class="token punctuation">{</span>
   <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>tempMap<span class="token punctuation">)</span>
</code></pre></div><p>\u5F97\u5230\u7684\u662F map \u683C\u5F0F\u5D4C\u5957\u7684\u6570\u636E</p><blockquote><p>map[base:map[captcha:1 lottery_open:1]]</p></blockquote><p>\u8FD9\u4E2A\u65F6\u5019\u53D6\u503C\u662F\u4E2A\u95EE\u9898\uFF0C\u76EE\u524D\u4E2A\u4EBA\u6240\u7528\u6BD4\u8F83\u7B28\u7684\u529E\u6CD5\u5C31\u662F\u5F3A\u884C\u7C7B\u578B\u8F6C\u6362</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token string">&quot;base&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">(</span>map<span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&quot;captcha&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div>`,9);function t(o,c){return p}var l=a(s,[["render",t]]);export{l as default};
