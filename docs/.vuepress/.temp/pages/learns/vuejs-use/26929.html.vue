<template><h1 id="vue-组件抽离公共逻辑-高级" tabindex="-1"><a class="header-anchor" href="#vue-组件抽离公共逻辑-高级" aria-hidden="true">#</a> Vue 组件抽离公共逻辑（高级）</h1>
<p>mixin</p>
<ul>
<li>多个组件有相同的逻辑，抽离出来</li>
<li>mixin 并不是完美的解决方案，会有一些问题</li>
<li>Vue 3 的 Composition API 旨在解决这些问题</li>
</ul>
<p>首先有这样一段代码</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>major<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>city<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"showName"</span><span class="token operator">></span>显示姓名<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">import</span> myMixin <span class="token keyword">from</span> <span class="token string">'./mixin'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    mixins<span class="token operator">:</span> <span class="token punctuation">[</span>myMixin<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 可以添加多个，会自动合并起来</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span>
            major<span class="token operator">:</span> <span class="token string">'web 前端'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// eslint-disable-next-line</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'component mounted'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div><p>而 mixin 是一个 mixin.js 文件</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            city<span class="token operator">:</span> <span class="token string">'深圳'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    methods<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">showName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// eslint-disable-next-line</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// eslint-disable-next-line</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'mixin mounted'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>这就是 mixin 的用法，抽象出公共逻辑。但 mixin 也有问题：</p>
<ul>
<li>变量来源不明确，不利于阅读</li>
<li>多个 mixin 可能会造成命名冲突</li>
<li>mixin 和组件可能出现多对多的关系，复杂度较高</li>
</ul>
</template>
