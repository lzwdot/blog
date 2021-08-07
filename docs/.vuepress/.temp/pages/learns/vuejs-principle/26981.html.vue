<template><h1 id="vue-的虚拟-dom" tabindex="-1"><a class="header-anchor" href="#vue-的虚拟-dom" aria-hidden="true">#</a> Vue 的虚拟 DOM</h1>
<p>虚拟 DOM （vdom）和 diff</p>
<blockquote>
<p>diff 算法是 vdom 中最核心，最关键的部分</p>
</blockquote>
<ul>
<li>DOM 操作非常耗费性能</li>
<li>以前使用 jQuery 可以自行手动控制操作 DOM</li>
<li>而 Vue 是数据驱动视图，如何有效控制 DOM 操作？</li>
</ul>
<p>解决方案 - vdom</p>
<ul>
<li>有了一定复杂度，想减少计算次数比较难</li>
<li>那么可以把更多计算转移为 JS 计算，因为 JS 执行速度很快</li>
<li>vdom - 用 JS 模拟 DOM 结构，计算出最小的变更，操作 DOM</li>
</ul>
<p>用 JS 模拟 DOM 结构，举个例子有这样一段 html 结构</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"div1"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>vdom<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>ul style<span class="token operator">=</span><span class="token string">"font-size: 20px"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span>a<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre></div><p>html 可以看成 xml 结构，通过 json 对象来表示，比如</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    tag<span class="token operator">:</span> <span class="token string">'div'</span><span class="token punctuation">,</span>
    props<span class="token operator">:</span> <span class="token punctuation">{</span>
        className<span class="token operator">:</span> <span class="token string">'container'</span><span class="token punctuation">,</span>
        id<span class="token operator">:</span> <span class="token string">'div1'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            tag<span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token string">'vdom'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            tag<span class="token operator">:</span> <span class="token string">'ul'</span><span class="token punctuation">,</span>
            props<span class="token operator">:</span> <span class="token punctuation">{</span>style<span class="token operator">:</span> <span class="token string">'font-size: 20px'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    tag<span class="token operator">:</span> <span class="token string">'li'</span><span class="token punctuation">,</span>
                    children<span class="token operator">:</span> <span class="token string">'a'</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">//...</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>通过 snabbdom 学习 vdom</p>
<ul>
<li>简洁强大的 vdom 库，易学易用</li>
<li>Vue 参考它实现的 vdom 和 diff</li>
<li><a href="https://github.com/snabbdom/snabbdom" target="_blank" rel="noopener noreferrer">https://github.com/snabbdom/snabbdom<OutboundLink/></a></li>
<li>Vue 3.0 重新了 vdom 的代码，优化了性能，但 vdom 基本理念不变</li>
</ul>
<p>snabbdom 库演示</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">"btn-change"</span><span class="token operator">></span>change<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.bootcss.com/snabbdom/0.7.3/snabbdom.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.bootcss.com/snabbdom/0.7.3/snabbdom-class.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.bootcss.com/snabbdom/0.7.3/snabbdom-props.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.bootcss.com/snabbdom/0.7.3/snabbdom-style.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.bootcss.com/snabbdom/0.7.3/snabbdom-eventlisteners.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.bootcss.com/snabbdom/0.7.3/h.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">const</span> snabbdom <span class="token operator">=</span> window<span class="token punctuation">.</span>snabbdom
    <span class="token comment">// 定义 patch</span>
    <span class="token keyword">const</span> patch <span class="token operator">=</span> snabbdom<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        snabbdom_class<span class="token punctuation">,</span>
        snabbdom_props<span class="token punctuation">,</span>
        snabbdom_style<span class="token punctuation">,</span>
        snabbdom_eventlisteners
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment">// 定义 h</span>
    <span class="token keyword">const</span> h <span class="token operator">=</span> snabbdom<span class="token punctuation">.</span>h
    <span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'container'</span><span class="token punctuation">)</span>
    <span class="token comment">// 生成 vnode</span>
    <span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">'ul#list'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">'li.item'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'Item 1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">'li.item'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'Item 2'</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token function">patch</span><span class="token punctuation">(</span>container<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'btn-change'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 生成 newVnode</span>
        <span class="token keyword">const</span> newVnode <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">'ul#list'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
            <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">'li.item'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'Item 1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">'li.item'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'Item B'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">'li.item'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'Item 3'</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token function">patch</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> newVnode<span class="token punctuation">)</span>
        <span class="token comment">// vnode = newVnode // patch 之后，应该用新的覆盖现有的 vnode ，否则每次 change 都是新旧对比</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div></template>
