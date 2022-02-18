import{h as s}from"./app.4ca8afde.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const n={},p=s(`<h1 id="vue-\u5F02\u6B65\u52A0\u8F7D\u7EC4\u4EF6-\u9AD8\u7EA7" tabindex="-1"><a class="header-anchor" href="#vue-\u5F02\u6B65\u52A0\u8F7D\u7EC4\u4EF6-\u9AD8\u7EA7" aria-hidden="true">#</a> Vue \u5F02\u6B65\u52A0\u8F7D\u7EC4\u4EF6\uFF08\u9AD8\u7EA7\uFF09</h1><p>\u5F02\u6B65\u7EC4\u4EF6</p><ul><li>import() \u51FD\u6570</li><li>\u6309\u9700\u52A0\u8F7D\uFF0C\u5F02\u6B65\u52A0\u8F7D\u5927\u7EC4\u4EF6</li></ul><p>\u4E3E\u4E2A\u5217\u5B50\uFF0C\u6BD4\u5982\u6709\u4E2A FormDemo.vue \u5927\u7EC4\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        \u8868\u5355\u7F16\u8F91\u5668\u5927\u7EC4\u4EF6
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span> 
</code></pre></div><p>\u7136\u540E\u5B9E\u73B0\u6309\u9700\u52A0\u8F7D\u7684\u6548\u679C</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>\u5F02\u6B65\u52A0\u8F7D\u7EC4\u4EF6<span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>FormDemo v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;showFormDemo&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;showFormDemo=true&quot;</span><span class="token operator">&gt;</span>\u52A0\u8F7D FormDemo<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u6309\u9700\u52A0\u8F7D\uFF0C\u53EF\u4EE5\u770B\u4E0B\u6D4F\u89C8\u5668 network \u7684\u6548\u679C</span>
            <span class="token function-variable function">FormDemo</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./FormDemo&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">showFormDemo</span><span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span> 
</code></pre></div>`,7);function t(o,e){return p}var l=a(n,[["render",t]]);export{l as default};
