import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="async-await-\u7684\u987A\u5E8F\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#async-await-\u7684\u987A\u5E8F\u95EE\u9898" aria-hidden="true">#</a> async/await \u7684\u987A\u5E8F\u95EE\u9898</h1><p>\u6765\u4E00\u9053\u7ECF\u5178\u7684\u5F02\u6B65\u9898\u76EE</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async1 start&#39;</span><span class="token punctuation">)</span> <span class="token comment">// step 2</span>
    <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// await \u540E\u9762\u7684\u90FD\u4F5C\u4E3A\u56DE\u8C03\u5185\u5BB9 -\u5FAE\u4EFB\u52A1</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async1 end&#39;</span><span class="token punctuation">)</span> <span class="token comment">// step 6</span>
<span class="token punctuation">}</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async2&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// step 3</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script start&#39;</span><span class="token punctuation">)</span> <span class="token comment">// step 1</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u5B8F\u4EFB\u52A1</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;setTimeout&#39;</span><span class="token punctuation">)</span> <span class="token comment">// step 8</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//\u521D\u59CB\u5316 promise \u65F6\uFF0C\u4F20\u5165\u7684\u51FD\u6570\u4F1A\u7ACB\u5373\u6267\u884C</span>
<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise1&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// step 4</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// \u5FAE\u4EFB\u52A1</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise2&#39;</span><span class="token punctuation">)</span> <span class="token comment">// step 7</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script end&#39;</span><span class="token punctuation">)</span> <span class="token comment">// step 5</span>
<span class="token comment">// \u540C\u6B65\u4EE3\u7801\u6267\u884C\u5B8C\u6BD5\uFF08event loop - call stack \u88AB\u6E05\u7A7A\uFF09</span>
<span class="token comment">// \u6267\u884C\u5FAE\u4EFB\u52A1</span>
<span class="token comment">// \uFF08\u5C1D\u8BD5\u89E6\u53D1 DOM \u6E32\u67D3\uFF09</span>
<span class="token comment">// \u89E6\u53D1 Event Loop\uFF0C \u6267\u884C\u5B8F\u4EFB\u52A1</span>
</code></pre></div><p>\u4E0A\u9762\u6267\u884C\u7ED3\u679C\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// script start</span>
<span class="token comment">// async1 start</span>
<span class="token comment">// async2</span>
<span class="token comment">// promise1</span>
<span class="token comment">// script end</span>
<span class="token comment">// async1 end</span>
<span class="token comment">// promise2</span>
<span class="token comment">// setTimeout</span>
</code></pre></div>`,5);function p(o,c){return t}var u=s(a,[["render",p]]);export{u as default};
