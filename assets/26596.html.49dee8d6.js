import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u95ED\u5305\u662F\u4EC0\u4E48-\u6709\u4EC0\u4E48\u7279\u6027-\u6709\u4EC0\u4E48\u8D1F\u9762\u5F71\u54CD" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305\u662F\u4EC0\u4E48-\u6709\u4EC0\u4E48\u7279\u6027-\u6709\u4EC0\u4E48\u8D1F\u9762\u5F71\u54CD" aria-hidden="true">#</a> \u95ED\u5305\u662F\u4EC0\u4E48\uFF0C\u6709\u4EC0\u4E48\u7279\u6027\uFF1F\u6709\u4EC0\u4E48\u8D1F\u9762\u5F71\u54CD\uFF1F</h1><p>\u56DE\u987E</p><ul><li>\u56DE\u987E\uFF1A\u4F5C\u7528\u57DF\u548C\u81EA\u7531\u53D8\u91CF</li><li>\u95ED\u5305\u5E94\u7528\u573A\u666F\uFF1A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u88AB\u4F20\u5165\uFF0C\u51FD\u6570\u4F5C\u4E3A\u8FD4\u56DE\u503C\u88AB\u8FD4\u56DE</li><li>\u56DE\u987E\uFF1A\u81EA\u7531\u53D8\u91CF\u7684\u67E5\u627E\uFF0C\u8981\u5728\u51FD\u6570\u5B9A\u4E49\u7684\u5730\u65B9\uFF08\u800C\u975E\u6267\u884C\u7684\u5730\u65B9\uFF09</li><li>\u5F71\u54CD\uFF1A\u53D8\u91CF\u4F1A\u5E38\u9A7B\u5185\u5B58\uFF0C\u5F97\u4E0D\u5230\u91CA\u653E\u3002\u95ED\u5305\u4E0D\u8981\u4E71\u7528</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u81EA\u7531\u53D8\u91CF\u793A\u4F8B - \u5185\u5B58\u4F1A\u88AB\u91CA\u653E</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> a1 <span class="token operator">=</span> <span class="token number">100</span>
    <span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> a2 <span class="token operator">=</span> <span class="token number">200</span>
        <span class="token keyword">function</span> <span class="token function">fn3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> a3 <span class="token operator">=</span> <span class="token number">300</span>
            <span class="token keyword">return</span> a <span class="token operator">+</span> a1 <span class="token operator">+</span> a3 <span class="token operator">+</span> a3
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u95ED\u5305 \u51FD\u6570\u4F5C\u4E3A\u8FD4\u56DE\u503C - \u5185\u5B58\u4E0D\u4F1A\u88AB\u91CA\u653E</span>
<span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">100</span> <span class="token comment">// b \u88AB\u8FD4\u56DE\uFF0C\u6682\u65F6\u4E0D\u4F1A\u91CA\u653E</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> fn2 <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">200</span>
<span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 100</span>
<span class="token comment">// \u95ED\u5305 \u51FD\u6570\u4F5C\u4E3A\u53C2\u6570 - \u5185\u5B58\u4E0D\u4F1A\u88AB\u91CA\u653E</span>
<span class="token keyword">function</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token number">200</span>
    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> c <span class="token operator">=</span><span class="token number">100</span> <span class="token comment">// b \u88AB\u4F20\u5165\uFF0C\u6682\u65F6\u4E0D\u4F1A\u91CA\u653E</span>
<span class="token keyword">function</span> <span class="token function">fn3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">print</span><span class="token punctuation">(</span>fn3<span class="token punctuation">)</span> <span class="token comment">// 100</span>
</code></pre></div>`,4);function t(o,c){return p}var u=s(a,[["render",t]]);export{u as default};
