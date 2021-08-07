<template><h1 id="vue-组件更新之后获取最新dom-高级" tabindex="-1"><a class="header-anchor" href="#vue-组件更新之后获取最新dom-高级" aria-hidden="true">#</a> Vue 组件更新之后获取最新DOM（高级）</h1>
<p>一般</p>
<ul>
<li>Vue 是异步渲染</li>
<li>data 改变之后，DOM 不会立刻渲染</li>
<li>$nextTick 会在 DOM 渲染之后被触发，以获取最新 DOM 节点</li>
</ul>
<p>举例说明</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>ul ref<span class="token operator">=</span><span class="token string">"ul1"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>li v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"(item, index) in list"</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"index"</span><span class="token operator">></span>
                <span class="token punctuation">{</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"addItem"</span><span class="token operator">></span>添加一项<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">'app'</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                list<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        methods<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">addItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
                <span class="token comment">// 1. 异步渲染，$nextTick 待 DOM 渲染完再回调</span>
                <span class="token comment">// 2. 页面渲染时会将 data 的修改做整合，多次 data 修改只会渲染一次</span>
                <span class="token comment">// 获取 DOM 元素</span>
                <span class="token keyword">const</span> ulElem <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>ul1
                <span class="token comment">// eslint-disable-next-line</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> ulElem<span class="token punctuation">.</span>childNodes<span class="token punctuation">.</span>length <span class="token punctuation">)</span> <span class="token comment">// 第一次点击 3</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                    <span class="token comment">// eslint-disable-next-line</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> ulElem<span class="token punctuation">.</span>childNodes<span class="token punctuation">.</span>length <span class="token punctuation">)</span> <span class="token comment">// 第一次点击 6</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div></template>
