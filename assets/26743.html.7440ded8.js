import{h as s}from"./app.4ca8afde.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const n={},p=s(`<h1 id="vue-\u7684-class-\u548C-style" tabindex="-1"><a class="header-anchor" href="#vue-\u7684-class-\u548C-style" aria-hidden="true">#</a> Vue \u7684 class \u548C style</h1><p>class \u548C style</p><ul><li>\u4F7F\u7528\u52A8\u6001\u5C5E\u6027</li><li>\u4F7F\u7528\u9A7C\u5CF0\u5F0F\u5199\u6CD5</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>p <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;{ black: isBlack, yellow: isYellow }&quot;</span><span class="token operator">&gt;</span>\u4F7F\u7528 <span class="token keyword">class</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>p <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;[black, yellow]&quot;</span><span class="token operator">&gt;</span>\u4F7F\u7528 <span class="token keyword">class</span> \uFF08\u6570\u7EC4\uFF09<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>p <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;styleData&quot;</span><span class="token operator">&gt;</span>\u4F7F\u7528 style<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">isBlack</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">isYellow</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">black</span><span class="token operator">:</span> <span class="token string">&#39;black&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">yellow</span><span class="token operator">:</span> <span class="token string">&#39;yellow&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">styleData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">&#39;40px&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8F6C\u6362\u4E3A\u9A7C\u5CF0\u5F0F</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#ccc&#39;</span> <span class="token comment">// \u8F6C\u6362\u4E3A\u9A7C\u5CF0\u5F0F</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
    <span class="token punctuation">.</span>black <span class="token punctuation">{</span>
        background<span class="token operator">-</span>color<span class="token operator">:</span> #<span class="token number">999</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>yellow <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> yellow<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre></div>`,4);function t(o,e){return p}var c=a(n,[["render",t]]);export{c as default};
