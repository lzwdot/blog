<template><h1 id="vue-自定义-v-model-高级" tabindex="-1"><a class="header-anchor" href="#vue-自定义-v-model-高级" aria-hidden="true">#</a> Vue 自定义 v-model（高级）</h1>
<p>模拟 v-model 类似 <code>&lt;input type=&quot;text&quot; v-model=&quot;name&quot;&gt;</code> 的应用，但对于 vuejs 中的 model 依然有点云里雾里，先记录下来，首先创建 CustomVModel.vue</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>常用的如：vue 颜色选择<span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span>
           <span class="token operator">:</span>value<span class="token operator">=</span><span class="token string">"str"</span>
           @input<span class="token operator">=</span><span class="token string">"$emit('edit',$event.target.value)"</span>
    <span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>
        <span class="token number">1</span>、上面的 input 使用了 <span class="token operator">:</span>value 而不是 v<span class="token operator">-</span>model
        <span class="token number">2</span>、上面的 edit 和 model<span class="token punctuation">.</span>event 要对应起来
        <span class="token number">3</span>、str 属性对应起来
    <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">"CustomVModel"</span><span class="token punctuation">,</span>
        props<span class="token operator">:</span> <span class="token punctuation">{</span>
            str<span class="token operator">:</span> String<span class="token punctuation">,</span>
            <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token string">''</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        model<span class="token operator">:</span> <span class="token punctuation">{</span>
            prop<span class="token operator">:</span> <span class="token string">'str'</span><span class="token punctuation">,</span> <span class="token comment">// 对应 props str</span>
            event<span class="token operator">:</span> <span class="token string">'edit'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span> 
</code></pre></div><p>注意代码中的解释，在 Index.vue 中引入 CustomVModel.vue</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span>高级<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span>hr<span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>自定义 v<span class="token operator">-</span>model<span class="token operator">--</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>类似 <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"name"</span><span class="token operator">></span><span class="token operator">--</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>CustomVModel v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"name"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">import</span> CustomVModel <span class="token keyword">from</span> <span class="token string">'./CustomVModel'</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">"index"</span><span class="token punctuation">,</span>
        components<span class="token operator">:</span> <span class="token punctuation">{</span>
            CustomVModel<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                name<span class="token operator">:</span> <span class="token string">'慕课'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div></template>
