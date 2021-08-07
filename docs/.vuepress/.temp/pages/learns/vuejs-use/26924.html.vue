<template><h1 id="vue-缓存组件-高级" tabindex="-1"><a class="header-anchor" href="#vue-缓存组件-高级" aria-hidden="true">#</a> Vue 缓存组件（高级）</h1>
<p>keep-alive</p>
<ul>
<li>缓存组件</li>
<li>频繁切换，不需要重复渲染</li>
<li>Vue 常见性能优化之一</li>
</ul>
<p>有三个子组件 KeepAliveStageA.vue，KeepAliveStageB.vue 和 KeepAliveStageC.vue，内容都差不多</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>state <span class="token constant">A</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// eslint-disable-next-line</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'A mounted'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">destroyed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// eslint-disable-next-line</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'A destroyed'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div><p>通过 keep-alive 来使用</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"changeState('A')"</span><span class="token operator">></span><span class="token constant">A</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"changeState('B')"</span><span class="token operator">></span><span class="token constant">B</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"changeState('C')"</span><span class="token operator">></span><span class="token constant">C</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span>keep<span class="token operator">-</span>alive<span class="token operator">></span> <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> tab 切换 <span class="token operator">--</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>KeepAliveStageA v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"state === 'A'"</span><span class="token operator">/</span><span class="token operator">></span> <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> v<span class="token operator">-</span>show <span class="token operator">--</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>KeepAliveStageB v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"state === 'B'"</span><span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>KeepAliveStageC v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"state === 'C'"</span><span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>keep<span class="token operator">-</span>alive<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">import</span> KeepAliveStageA <span class="token keyword">from</span> <span class="token string">'./KeepAliveStateA'</span>
<span class="token keyword">import</span> KeepAliveStageB <span class="token keyword">from</span> <span class="token string">'./KeepAliveStateB'</span>
<span class="token keyword">import</span> KeepAliveStageC <span class="token keyword">from</span> <span class="token string">'./KeepAliveStateC'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    components<span class="token operator">:</span> <span class="token punctuation">{</span>
        KeepAliveStageA<span class="token punctuation">,</span>
        KeepAliveStageB<span class="token punctuation">,</span>
        KeepAliveStageC
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            state<span class="token operator">:</span> <span class="token string">'A'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    methods<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">changeState</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div><p>点击切换，最终结果只会输出一次</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token constant">A</span> mounted
<span class="token constant">B</span> mounted
<span class="token constant">C</span> mounted
</code></pre></div></template>
