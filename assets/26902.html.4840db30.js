import{h as s}from"./app.4ca8afde.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const n={},p=s(`<h1 id="vue-\u52A8\u6001\u7EC4\u4EF6-\u9AD8\u7EA7" tabindex="-1"><a class="header-anchor" href="#vue-\u52A8\u6001\u7EC4\u4EF6-\u9AD8\u7EA7" aria-hidden="true">#</a> Vue \u52A8\u6001\u7EC4\u4EF6\uFF08\u9AD8\u7EA7\uFF09</h1><p>\u52A8\u6001\u7EC4\u4EF6</p><ul><li><code>:is=&quot;component-name&quot;</code> \u7684\u7528\u6CD5</li><li>\u9700\u8981\u6839\u636E\u6570\u636E\uFF0C\u52A8\u6001\u6E32\u67D3\u7684\u573A\u666F\u3002\u5373\u7EC4\u4EF6\u7C7B\u578B\u4E0D\u786E\u5B9A</li></ul><p>\u4E3E\u4F8B\u4E00\u4E2A\u52A8\u6001\u7EC4\u4EF6 Dynamic.vue</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        \u52A8\u6001\u7EC4\u4EF6
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Dynamic&quot;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span> 
</code></pre></div><p>\u901A\u8FC7\u52A8\u6001\u7EC4\u4EF6 <code>&lt;componet :is=&quot;DynamicName&quot;/&gt;</code> \u6765\u4F7F\u7528</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>\u52A8\u6001\u7EC4\u4EF6<span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>componet <span class="token operator">:</span>is<span class="token operator">=</span><span class="token string">&quot;DynamicName&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;(val,key) in newsData&quot;</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;key&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>componet <span class="token operator">:</span>is<span class="token operator">=</span><span class="token string">&quot;val.type&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">import</span> Dynamic <span class="token keyword">from</span> <span class="token string">&#39;./Dynamic&#39;</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            Dynamic
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">DynamicName</span><span class="token operator">:</span> <span class="token string">&#39;Dynamic&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">newsData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token number">1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token number">2</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;image&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token number">3</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;video&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span> 
</code></pre></div>`,7);function t(o,e){return p}var l=a(n,[["render",t]]);export{l as default};
