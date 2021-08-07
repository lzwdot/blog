<template><h1 id="vue-动态组件-高级" tabindex="-1"><a class="header-anchor" href="#vue-动态组件-高级" aria-hidden="true">#</a> Vue 动态组件（高级）</h1>
<p>动态组件</p>
<ul>
<li><code>:is=&quot;component-name&quot;</code> 的用法</li>
<li>需要根据数据，动态渲染的场景。即组件类型不确定</li>
</ul>
<p>举例一个动态组件 Dynamic.vue</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        动态组件
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">"Dynamic"</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span> 
</code></pre></div><p>通过动态组件 <code>&lt;componet :is=&quot;DynamicName&quot;/&gt;</code> 来使用</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>动态组件<span class="token operator">--</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>componet <span class="token operator">:</span>is<span class="token operator">=</span><span class="token string">"DynamicName"</span><span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"(val,key) in newsData"</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"key"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>componet <span class="token operator">:</span>is<span class="token operator">=</span><span class="token string">"val.type"</span><span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">import</span> Dynamic <span class="token keyword">from</span> <span class="token string">'./Dynamic'</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">"index"</span><span class="token punctuation">,</span>
        components<span class="token operator">:</span> <span class="token punctuation">{</span>
            Dynamic
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                DynamicName<span class="token operator">:</span> <span class="token string">'Dynamic'</span><span class="token punctuation">,</span>
                newsData<span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token number">1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        type<span class="token operator">:</span> <span class="token string">'text'</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token number">2</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        type<span class="token operator">:</span> <span class="token string">'image'</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token number">3</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        type<span class="token operator">:</span> <span class="token string">'video'</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span> 
</code></pre></div></template>
