<template><h1 id="vue-异步加载组件-高级" tabindex="-1"><a class="header-anchor" href="#vue-异步加载组件-高级" aria-hidden="true">#</a> Vue 异步加载组件（高级）</h1>
<p>异步组件</p>
<ul>
<li>import() 函数</li>
<li>按需加载，异步加载大组件</li>
</ul>
<p>举个列子，比如有个 FormDemo.vue 大组件</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        表单编辑器大组件
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span> 
</code></pre></div><p>然后实现按需加载的效果</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>异步加载组件<span class="token operator">--</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>FormDemo v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"showFormDemo"</span><span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"showFormDemo=true"</span><span class="token operator">></span>加载 FormDemo<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">"index"</span><span class="token punctuation">,</span>
        components<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 按需加载，可以看下浏览器 network 的效果</span>
            <span class="token function-variable function">FormDemo</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./FormDemo'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                showFormDemo<span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span> 
</code></pre></div></template>
