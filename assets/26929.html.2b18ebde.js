import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="vue-\u7EC4\u4EF6\u62BD\u79BB\u516C\u5171\u903B\u8F91-\u9AD8\u7EA7" tabindex="-1"><a class="header-anchor" href="#vue-\u7EC4\u4EF6\u62BD\u79BB\u516C\u5171\u903B\u8F91-\u9AD8\u7EA7" aria-hidden="true">#</a> Vue \u7EC4\u4EF6\u62BD\u79BB\u516C\u5171\u903B\u8F91\uFF08\u9AD8\u7EA7\uFF09</h1><p>mixin</p><ul><li>\u591A\u4E2A\u7EC4\u4EF6\u6709\u76F8\u540C\u7684\u903B\u8F91\uFF0C\u62BD\u79BB\u51FA\u6765</li><li>mixin \u5E76\u4E0D\u662F\u5B8C\u7F8E\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u4F1A\u6709\u4E00\u4E9B\u95EE\u9898</li><li>Vue 3 \u7684 Composition API \u65E8\u5728\u89E3\u51B3\u8FD9\u4E9B\u95EE\u9898</li></ul><p>\u9996\u5148\u6709\u8FD9\u6837\u4E00\u6BB5\u4EE3\u7801</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>major<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>city<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;showName&quot;</span><span class="token operator">&gt;</span>\u663E\u793A\u59D3\u540D<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> myMixin <span class="token keyword">from</span> <span class="token string">&#39;./mixin&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>myMixin<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u53EF\u4EE5\u6DFB\u52A0\u591A\u4E2A\uFF0C\u4F1A\u81EA\u52A8\u5408\u5E76\u8D77\u6765</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">major</span><span class="token operator">:</span> <span class="token string">&#39;web \u524D\u7AEF&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// eslint-disable-next-line</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;component mounted&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><p>\u800C mixin \u662F\u4E00\u4E2A mixin.js \u6587\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">&#39;\u6DF1\u5733&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">showName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// eslint-disable-next-line</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// eslint-disable-next-line</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mixin mounted&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>\u8FD9\u5C31\u662F mixin \u7684\u7528\u6CD5\uFF0C\u62BD\u8C61\u51FA\u516C\u5171\u903B\u8F91\u3002\u4F46 mixin \u4E5F\u6709\u95EE\u9898\uFF1A</p><ul><li>\u53D8\u91CF\u6765\u6E90\u4E0D\u660E\u786E\uFF0C\u4E0D\u5229\u4E8E\u9605\u8BFB</li><li>\u591A\u4E2A mixin \u53EF\u80FD\u4F1A\u9020\u6210\u547D\u540D\u51B2\u7A81</li><li>mixin \u548C\u7EC4\u4EF6\u53EF\u80FD\u51FA\u73B0\u591A\u5BF9\u591A\u7684\u5173\u7CFB\uFF0C\u590D\u6742\u5EA6\u8F83\u9AD8</li></ul>`,9);function t(o,e){return p}var u=s(a,[["render",t]]);export{u as default};
