<template><h1 id="如何配置-vue-router-异步加载" tabindex="-1"><a class="header-anchor" href="#如何配置-vue-router-异步加载" aria-hidden="true">#</a> 如何配置 Vue-router 异步加载</h1>
<p>异步加载，也叫懒加载。示例：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    routes<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span>
                <span class="token comment">/* webpackChunkName:"navigator" */</span>
                <span class="token string">'./../components/Navigator'</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">'/feedback'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span>
                <span class="token comment">/* webpackChunkName:"feedback" */</span>
                <span class="token string">'./../components/Feedback'</span>
                <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></template>
