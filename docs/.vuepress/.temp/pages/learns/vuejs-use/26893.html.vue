<template><h1 id="vue-的-slot-是什么-高级" tabindex="-1"><a class="header-anchor" href="#vue-的-slot-是什么-高级" aria-hidden="true">#</a> Vue 的 slot 是什么（高级）</h1>
<p>需要知道：基本使用，作用域插槽和具名插槽</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>slot 基本使用<span class="token operator">--</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>SlotDemo <span class="token operator">:</span>url<span class="token operator">=</span><span class="token string">"website.url"</span><span class="token operator">></span>
            <span class="token punctuation">{</span><span class="token punctuation">{</span>website<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>SlotDemo<span class="token operator">></span>
        <span class="token operator">&lt;</span>hr<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>slot 作用域插槽<span class="token operator">--</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>ScopedSlotDemo <span class="token operator">:</span>url<span class="token operator">=</span><span class="token string">"website.url"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>template v<span class="token operator">-</span>slot<span class="token operator">=</span><span class="token string">"slotProps"</span><span class="token operator">></span>
                <span class="token punctuation">{</span><span class="token punctuation">{</span>slotProps<span class="token punctuation">.</span>slotData<span class="token punctuation">.</span>subTitle<span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ScopedSlotDemo<span class="token operator">></span>
        <span class="token operator">&lt;</span>hr<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>slot 具名插槽<span class="token operator">--</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>NamedSlot<span class="token operator">></span>
            <span class="token operator">&lt;</span>template v<span class="token operator">-</span>slot<span class="token operator">:</span>header<span class="token operator">></span>
                <span class="token operator">&lt;</span>h1<span class="token operator">></span>插入 header slot 中<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
            <span class="token operator">&lt;</span>p<span class="token operator">></span> 插入到 main slot中，即未命名的 slot<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
            <span class="token operator">&lt;</span>template v<span class="token operator">-</span>slot<span class="token operator">:</span>footer<span class="token operator">></span>
                <span class="token operator">&lt;</span>p<span class="token operator">></span> 插入到 footer slot 中<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>NamedSlot<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">import</span> SlotDemo <span class="token keyword">from</span> <span class="token string">'./SlotDemo'</span>
    <span class="token keyword">import</span> ScopedSlotDemo <span class="token keyword">from</span> <span class="token string">'./ScopedSlotDemo'</span>
    <span class="token keyword">import</span> NamedSlot <span class="token keyword">from</span> <span class="token string">'./NamedSlot'</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">"index"</span><span class="token punctuation">,</span>
        components<span class="token operator">:</span> <span class="token punctuation">{</span>
            SlotDemo<span class="token punctuation">,</span>
            ScopedSlotDemo<span class="token punctuation">,</span>
            NamedSlot
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                website<span class="token operator">:</span> <span class="token punctuation">{</span>
                    url<span class="token operator">:</span> <span class="token string">'http://father.cn'</span><span class="token punctuation">,</span>
                    title<span class="token operator">:</span> <span class="token string">'父组件'</span><span class="token punctuation">,</span>
                    subTitle<span class="token operator">:</span> <span class="token string">'父组件副标题'</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span> 
</code></pre></div><p>slot 基本使用</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>a <span class="token operator">:</span>href<span class="token operator">=</span><span class="token string">"url"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>slot<span class="token operator">></span>
            默认内容，即父组件没设置内容时，显示这里
        <span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">"SlotDemo"</span><span class="token punctuation">,</span>
        props<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'url'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span> 
</code></pre></div><p>slot 作用域插槽</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>a <span class="token operator">:</span>href<span class="token operator">=</span><span class="token string">"url"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>slot <span class="token operator">:</span>slotData<span class="token operator">=</span><span class="token string">"website"</span><span class="token operator">></span>
            <span class="token punctuation">{</span><span class="token punctuation">{</span>website<span class="token punctuation">.</span>subTitle<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>默认显示 subTitle，即父组件没设置内容时，显示这里<span class="token operator">--</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">"SlotDemo"</span><span class="token punctuation">,</span>
        props<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'url'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                website<span class="token operator">:</span> <span class="token punctuation">{</span>
                    url<span class="token operator">:</span> <span class="token string">'http://child.cn'</span><span class="token punctuation">,</span>
                    title<span class="token operator">:</span> <span class="token string">'子组件'</span><span class="token punctuation">,</span>
                    subTitle<span class="token operator">:</span> <span class="token string">'子组件副标题'</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span> 
</code></pre></div><p>slot 具名插槽</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>header<span class="token operator">></span>
            <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">"header"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">></span>
        <span class="token operator">&lt;</span>main<span class="token operator">></span>
            <span class="token operator">&lt;</span>slot<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
        <span class="token operator">&lt;</span>footer<span class="token operator">></span>
            <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">"footer"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>footer<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">"NamedSlot"</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span> 
</code></pre></div></template>
