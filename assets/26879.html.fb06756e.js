import{h as s}from"./app.4ca8afde.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const n={},p=s(`<h1 id="vue-\u81EA\u5B9A\u4E49-v-model-\u9AD8\u7EA7" tabindex="-1"><a class="header-anchor" href="#vue-\u81EA\u5B9A\u4E49-v-model-\u9AD8\u7EA7" aria-hidden="true">#</a> Vue \u81EA\u5B9A\u4E49 v-model\uFF08\u9AD8\u7EA7\uFF09</h1><p>\u6A21\u62DF v-model \u7C7B\u4F3C <code>&lt;input type=&quot;text&quot; v-model=&quot;name&quot;&gt;</code> \u7684\u5E94\u7528\uFF0C\u4F46\u5BF9\u4E8E vuejs \u4E2D\u7684 model \u4F9D\u7136\u6709\u70B9\u4E91\u91CC\u96FE\u91CC\uFF0C\u5148\u8BB0\u5F55\u4E0B\u6765\uFF0C\u9996\u5148\u521B\u5EFA CustomVModel.vue</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>\u5E38\u7528\u7684\u5982\uFF1Avue \u989C\u8272\u9009\u62E9<span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span>
           <span class="token operator">:</span>value<span class="token operator">=</span><span class="token string">&quot;str&quot;</span>
           @input<span class="token operator">=</span><span class="token string">&quot;$emit(&#39;edit&#39;,$event.target.value)&quot;</span>
    <span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>
        <span class="token number">1</span>\u3001\u4E0A\u9762\u7684 input \u4F7F\u7528\u4E86 <span class="token operator">:</span>value \u800C\u4E0D\u662F v<span class="token operator">-</span>model
        <span class="token number">2</span>\u3001\u4E0A\u9762\u7684 edit \u548C model<span class="token punctuation">.</span>event \u8981\u5BF9\u5E94\u8D77\u6765
        <span class="token number">3</span>\u3001str \u5C5E\u6027\u5BF9\u5E94\u8D77\u6765
    <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;CustomVModel&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">str</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
            <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;str&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5BF9\u5E94 props str</span>
            <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token string">&#39;edit&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span> 
</code></pre></div><p>\u6CE8\u610F\u4EE3\u7801\u4E2D\u7684\u89E3\u91CA\uFF0C\u5728 Index.vue \u4E2D\u5F15\u5165 CustomVModel.vue</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u9AD8\u7EA7<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>hr<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>\u81EA\u5B9A\u4E49 v<span class="token operator">-</span>model<span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>\u7C7B\u4F3C <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;name&quot;</span><span class="token operator">&gt;</span><span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>CustomVModel v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;name&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">import</span> CustomVModel <span class="token keyword">from</span> <span class="token string">&#39;./CustomVModel&#39;</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            CustomVModel<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u6155\u8BFE&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div>`,5);function t(o,e){return p}var c=a(n,[["render",t]]);export{c as default};
