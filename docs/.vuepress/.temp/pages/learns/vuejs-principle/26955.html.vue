<template><h1 id="理解-vue-的组件和-mvvm-模型" tabindex="-1"><a class="header-anchor" href="#理解-vue-的组件和-mvvm-模型" aria-hidden="true">#</a> 理解 Vue 的组件和 MVVM 模型</h1>
<p>组件化基础</p>
<ul>
<li>“很久以前”就有组件化</li>
<li>组件化的创新：数据驱动视图（MVVM，setState）</li>
</ul>
<p>“很久以前”的组件化</p>
<ul>
<li>asp jsp php 已经有组件化了</li>
<li>nodejs 中也有类似的组件化</li>
</ul>
<p>举个例子，不同用户：组件一样的，信息不一样</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>个人信息<span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">%</span> <span class="token function">include</span><span class="token punctuation">(</span><span class="token string">'widgets/user-info'</span><span class="token punctuation">,</span><span class="token punctuation">{</span>userInfo<span class="token operator">:</span>userInfo<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">%</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>粉丝<span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">%</span> <span class="token function">include</span><span class="token punctuation">(</span><span class="token string">'widgets/fans'</span><span class="token punctuation">,</span><span class="token punctuation">{</span>count<span class="token operator">:</span>count<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">%</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>关注<span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">%</span> <span class="token function">include</span><span class="token punctuation">(</span><span class="token string">'widgets/followers'</span><span class="token punctuation">,</span><span class="token punctuation">{</span>count<span class="token operator">:</span>count<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">%</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre></div><p>数据驱动视图</p>
<ul>
<li>传统组件，只是静态渲染，更新还要依赖于操作 DOM</li>
<li>数据驱动视图 - Vue MVVM，React setState</li>
</ul>
<p>Vue 的 MVVM =&gt; Model，View 和 ViewModel</p>
<p><img src="@source/learns/vuejs-principle/images/866655114.jpg" alt=""></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span><span class="token constant">MVVM</span> 代码说明<span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>View<span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span><span class="token comment">// click 也是 ViewModel--></span>
        <span class="token operator">&lt;</span>p @click<span class="token operator">=</span><span class="token string">"changeName"</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span>ul<span class="token operator">></span>
            <span class="token operator">&lt;</span>li v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"(item, index) in list"</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"index"</span><span class="token operator">></span>
                <span class="token punctuation">{</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span><span class="token comment">// click 也是 ViewModel--></span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"addItem"</span><span class="token operator">></span>添加一项<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">'app'</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// model</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                name<span class="token operator">:</span> <span class="token string">'vue'</span><span class="token punctuation">,</span>
                list<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        methods<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// ViewModel</span>
            <span class="token function">changeName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'张三'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">addItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div></template>
