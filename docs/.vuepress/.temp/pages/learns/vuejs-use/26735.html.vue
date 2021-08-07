<template><h1 id="vue-的-computed-和-watch" tabindex="-1"><a class="header-anchor" href="#vue-的-computed-和-watch" aria-hidden="true">#</a> Vue 的 computed 和 watch</h1>
<p>区别</p>
<ul>
<li>computed 有缓存，data 不变则不会重新计算</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span>num <span class="token punctuation">{</span><span class="token punctuation">{</span>num<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span>double1 <span class="token punctuation">{</span><span class="token punctuation">{</span>double1<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span>input v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"double2"</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            num<span class="token operator">:</span> <span class="token number">20</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    computed<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">double1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">*</span> <span class="token number">2</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        double2<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">*</span> <span class="token number">2</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">=</span> val<span class="token operator">/</span><span class="token number">2</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div><ul>
<li>watch 如何深度监听？</li>
<li>watch 监听引用类型，拿不到 oldVal</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>input v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"name"</span><span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>input v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"info.city"</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">'双越'</span><span class="token punctuation">,</span>
            info<span class="token operator">:</span> <span class="token punctuation">{</span>
                city<span class="token operator">:</span> <span class="token string">'北京'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    watch<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">name</span><span class="token punctuation">(</span><span class="token parameter">oldVal<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// eslint-disable-next-line</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'watch name'</span><span class="token punctuation">,</span> oldVal<span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token comment">// 值类型，可正常拿到 oldVal 和 val</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        info<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">oldVal<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// eslint-disable-next-line</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'watch info'</span><span class="token punctuation">,</span> oldVal<span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token comment">// 引用类型，拿不到 oldVal 。因为指针相同，此时已经指向了新的 val</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            deep<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 深度监听</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div></template>
