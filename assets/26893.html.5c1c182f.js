import{h as s}from"./app.4ca8afde.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const n={},p=s(`<h1 id="vue-\u7684-slot-\u662F\u4EC0\u4E48-\u9AD8\u7EA7" tabindex="-1"><a class="header-anchor" href="#vue-\u7684-slot-\u662F\u4EC0\u4E48-\u9AD8\u7EA7" aria-hidden="true">#</a> Vue \u7684 slot \u662F\u4EC0\u4E48\uFF08\u9AD8\u7EA7\uFF09</h1><p>\u9700\u8981\u77E5\u9053\uFF1A\u57FA\u672C\u4F7F\u7528\uFF0C\u4F5C\u7528\u57DF\u63D2\u69FD\u548C\u5177\u540D\u63D2\u69FD</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>slot \u57FA\u672C\u4F7F\u7528<span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>SlotDemo <span class="token operator">:</span>url<span class="token operator">=</span><span class="token string">&quot;website.url&quot;</span><span class="token operator">&gt;</span>
            <span class="token punctuation">{</span><span class="token punctuation">{</span>website<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>SlotDemo<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>hr<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>slot \u4F5C\u7528\u57DF\u63D2\u69FD<span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>ScopedSlotDemo <span class="token operator">:</span>url<span class="token operator">=</span><span class="token string">&quot;website.url&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>template v<span class="token operator">-</span>slot<span class="token operator">=</span><span class="token string">&quot;slotProps&quot;</span><span class="token operator">&gt;</span>
                <span class="token punctuation">{</span><span class="token punctuation">{</span>slotProps<span class="token punctuation">.</span>slotData<span class="token punctuation">.</span>subTitle<span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ScopedSlotDemo<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>hr<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>slot \u5177\u540D\u63D2\u69FD<span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>NamedSlot<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>template v<span class="token operator">-</span>slot<span class="token operator">:</span>header<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>\u63D2\u5165 header slot \u4E2D<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span> \u63D2\u5165\u5230 main slot\u4E2D\uFF0C\u5373\u672A\u547D\u540D\u7684 slot<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>template v<span class="token operator">-</span>slot<span class="token operator">:</span>footer<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span> \u63D2\u5165\u5230 footer slot \u4E2D<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>NamedSlot<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">import</span> SlotDemo <span class="token keyword">from</span> <span class="token string">&#39;./SlotDemo&#39;</span>
    <span class="token keyword">import</span> ScopedSlotDemo <span class="token keyword">from</span> <span class="token string">&#39;./ScopedSlotDemo&#39;</span>
    <span class="token keyword">import</span> NamedSlot <span class="token keyword">from</span> <span class="token string">&#39;./NamedSlot&#39;</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            SlotDemo<span class="token punctuation">,</span>
            ScopedSlotDemo<span class="token punctuation">,</span>
            NamedSlot
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">website</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://father.cn&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u7236\u7EC4\u4EF6&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">subTitle</span><span class="token operator">:</span> <span class="token string">&#39;\u7236\u7EC4\u4EF6\u526F\u6807\u9898&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span> 
</code></pre></div><p>slot \u57FA\u672C\u4F7F\u7528</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>a <span class="token operator">:</span>href<span class="token operator">=</span><span class="token string">&quot;url&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>slot<span class="token operator">&gt;</span>
            \u9ED8\u8BA4\u5185\u5BB9\uFF0C\u5373\u7236\u7EC4\u4EF6\u6CA1\u8BBE\u7F6E\u5185\u5BB9\u65F6\uFF0C\u663E\u793A\u8FD9\u91CC
        <span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;SlotDemo&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span> 
</code></pre></div><p>slot \u4F5C\u7528\u57DF\u63D2\u69FD</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>a <span class="token operator">:</span>href<span class="token operator">=</span><span class="token string">&quot;url&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>slot <span class="token operator">:</span>slotData<span class="token operator">=</span><span class="token string">&quot;website&quot;</span><span class="token operator">&gt;</span>
            <span class="token punctuation">{</span><span class="token punctuation">{</span>website<span class="token punctuation">.</span>subTitle<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>\u9ED8\u8BA4\u663E\u793A subTitle\uFF0C\u5373\u7236\u7EC4\u4EF6\u6CA1\u8BBE\u7F6E\u5185\u5BB9\u65F6\uFF0C\u663E\u793A\u8FD9\u91CC<span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;SlotDemo&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">website</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://child.cn&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5B50\u7EC4\u4EF6&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">subTitle</span><span class="token operator">:</span> <span class="token string">&#39;\u5B50\u7EC4\u4EF6\u526F\u6807\u9898&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span> 
</code></pre></div><p>slot \u5177\u540D\u63D2\u69FD</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>header<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">&quot;header&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>main<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>slot<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>footer<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">&quot;footer&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>footer<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;NamedSlot&quot;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span> 
</code></pre></div>`,9);function t(o,e){return p}var c=a(n,[["render",t]]);export{c as default};
