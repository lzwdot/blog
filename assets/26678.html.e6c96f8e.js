import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u5982\u4F55\u6355\u83B7-js-\u7A0B\u5E8F\u4E2D\u7684\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u6355\u83B7-js-\u7A0B\u5E8F\u4E2D\u7684\u5F02\u5E38" aria-hidden="true">#</a> \u5982\u4F55\u6355\u83B7 JS \u7A0B\u5E8F\u4E2D\u7684\u5F02\u5E38\uFF1F</h1><p>\u7B2C\u4E00\u79CD try catch</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u9AD8\u98CE\u9669\u7684\u5730\u65B9</span>
<span class="token keyword">try</span><span class="token punctuation">{</span>
    <span class="token comment">// todo</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u624B\u52A8\u6355\u83B7 catch</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token comment">// ReferenceError: a is not defined at test.js:4</span>
<span class="token punctuation">}</span><span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token comment">// todo</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;finally&#39;</span><span class="token punctuation">)</span> <span class="token comment">// finally</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7B2C\u4E8C\u79CD\u7528 window.onerror</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u81EA\u52A8\u6355\u83B7</span>
window<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span>source<span class="token punctuation">,</span>lineNum<span class="token punctuation">,</span>colNum<span class="token punctuation">,</span>error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7B2C\u4E00\uFF0C\u5BF9\u8DE8\u57DF\u7684js\uFF0C\u5982 CDN \u7684\uFF0C\u4E0D\u4F1A\u6709\u8BE6\u7EC6\u7684\u62A5\u9519\u4FE1\u606F</span>
    <span class="token comment">// \u7B2C\u4E8C\uFF0C\u5BF9\u4E8E\u538B\u7F29\u7684 js\uFF0C\u8FD8\u9700\u8981\u914D\u5408 sourceMap \u53CD\u67E5\u5230\u672A\u538B\u7F29\u4EE3\u7801\u7684\u884C\uFF0C\u5217</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;msg&#39;</span><span class="token punctuation">,</span>message<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;source&#39;</span><span class="token punctuation">,</span>source<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;lineNum&#39;</span><span class="token punctuation">,</span>lineNum<span class="token punctuation">)</span>
    <span class="token comment">// msg Uncaught Error: this is the error happened</span>
    <span class="token comment">// source http://localhost/test/test.js</span>
    <span class="token comment">// lineNum 24</span>
<span class="token punctuation">}</span>
<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;this is the error happened&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,5);function p(o,c){return t}var u=s(a,[["render",p]]);export{u as default};
