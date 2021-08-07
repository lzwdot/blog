<template><h1 id="webpack-实现异步加载-js" tabindex="-1"><a class="header-anchor" href="#webpack-实现异步加载-js" aria-hidden="true">#</a> webpack 实现异步加载 JS</h1>
<p>懒加载，其实 webpack 环境支持的</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 引入动态数据 - 懒加载</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token comment">// 回顾 vue React 异步组件，其实 webpack 环境支持的</span>
    <span class="token comment">// 定义 chunk</span>
    <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./dynamic-data.js'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>default<span class="token punctuation">.</span>message<span class="token punctuation">)</span> <span class="token comment">// 注意这里的 default</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1500</span><span class="token punctuation">)</span>
</code></pre></div><p>处理 React 的 JSX 使用</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev @babel<span class="token operator">/</span>preset<span class="token operator">-</span>react
</code></pre></div><p>然后配置 .babelrc 文件</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@babel/preset-react"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>处理 Vue 文件，则使用 vue-loader</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">-</span><span class="token constant">D</span> vue<span class="token operator">-</span>loader vue<span class="token operator">-</span>template<span class="token operator">-</span>compiler
</code></pre></div><p>然后配置 webpack.common.js 文件</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    module<span class="token operator">:</span> <span class="token punctuation">{</span>
        rules<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                loader<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'vue-loader'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                include<span class="token operator">:</span> srcPath
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div></template>
