<template><h1 id="vue3-和-vue2-的生命周期有什么区别" tabindex="-1"><a class="header-anchor" href="#vue3-和-vue2-的生命周期有什么区别" aria-hidden="true">#</a> Vue3 和 Vue2 的生命周期有什么区别</h1>
<p>Options API 生命周期</p>
<ul>
<li>beforeDestroy 改为 beforeUnmount</li>
<li>destroyed 改为 unmouted</li>
<li>其他沿用 Vue2 的生命周期</li>
</ul>
<p>例如：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'beforeCreate'</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'created'</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token function">beforeMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'beforeMount'</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'mounted'</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token function">beforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'beforeUpdate'</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token function">updated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'updated'</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token comment">// beforeDestroy 改名</span>
 <span class="token function">beforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'beforeUnmount'</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token comment">// destroyed 改名</span>
 <span class="token function">unmounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'unmounted'</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
</code></pre></div><p>打印结果：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>beforeCreate
created
beforeMount
mounted
beforeUpdate
updated
beforeUnmount
unmounted
</code></pre></div><p>Composition API 生命周期</p>
<p>比如</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> onBeforeMount<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> onBeforeUpdate<span class="token punctuation">,</span> onUpdated<span class="token punctuation">,</span> onBeforeUnmount<span class="token punctuation">,</span> onUnmounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token comment">// 等于 beforeCreate 和 created</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'setup'</span><span class="token punctuation">)</span>

        <span class="token function">onBeforeMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onBeforeMount'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onMounted'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token function">onBeforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onBeforeUpdate'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token function">onUpdated</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onUpdated'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onBeforeUnmount'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onUnmounted'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>打印结果：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>setup
onBeforeMount
onMounted
onBeforeUpdate
onUpdated
onBeforeUnmount
onUnmounted
</code></pre></div></template>
