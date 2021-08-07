<template><h1 id="webpack-抽离公共代码和第三方代码" tabindex="-1"><a class="header-anchor" href="#webpack-抽离公共代码和第三方代码" aria-hidden="true">#</a> webpack 抽离公共代码和第三方代码</h1>
<p>需在 webpack 的基础配置上，做一定的修改：</p>
<p>1、修改 webpack.prod.js 文件</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    optimization<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 压缩 css</span>
        minimizer<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">TerserJSPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">OptimizeCSSAssetsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 分割代码块</span>
        splitChunks<span class="token operator">:</span> <span class="token punctuation">{</span>
            chunks<span class="token operator">:</span> <span class="token string">'all'</span><span class="token punctuation">,</span>
            <span class="token doc-comment comment">/**
             * initial 入口 chunk，对于异步导入的文件不处理
                async 异步 chunk，只对异步导入的文件处理
                all 全部 chunk
             */</span>
            <span class="token comment">// 缓存分组</span>
            cacheGroups<span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// 第三方模块</span>
                vendor<span class="token operator">:</span> <span class="token punctuation">{</span>
                    name<span class="token operator">:</span> <span class="token string">'vendor'</span><span class="token punctuation">,</span> <span class="token comment">// chunk 名称</span>
                    priority<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 权限更高，优先抽离，重要！！！</span>
                    test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                    minSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>  <span class="token comment">// 大小限制</span>
                    minChunks<span class="token operator">:</span> <span class="token number">1</span>  <span class="token comment">// 最少复用过几次</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">// 公共的模块</span>
                common<span class="token operator">:</span> <span class="token punctuation">{</span>
                    name<span class="token operator">:</span> <span class="token string">'common'</span><span class="token punctuation">,</span> <span class="token comment">// chunk 名称</span>
                    priority<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 优先级</span>
                    minSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>  <span class="token comment">// 公共模块的大小限制</span>
                    minChunks<span class="token operator">:</span> <span class="token number">2</span>  <span class="token comment">// 公共模块最少复用过几次</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>2、在 webpack.common.js 修改</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// new HtmlWebpackPlugin({</span>
        <span class="token comment">//     template: path.join(srcPath, 'index.html'),</span>
        <span class="token comment">//     filename: 'index.html'</span>
        <span class="token comment">// })</span>
        <span class="token comment">// 多入口 - 生成 index.html</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            template<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token string">'index.html'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            filename<span class="token operator">:</span> <span class="token string">'index.html'</span><span class="token punctuation">,</span>
            <span class="token comment">// chunks 表示该页面要引用哪些 chunk （即上面的 index 和 other），默认全部引用</span>
            chunks<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'index'</span><span class="token punctuation">,</span> <span class="token string">'vendor'</span><span class="token punctuation">,</span> <span class="token string">'common'</span><span class="token punctuation">]</span>  <span class="token comment">// 要考虑代码分割</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// 多入口 - 生成 other.html</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            template<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token string">'other.html'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            filename<span class="token operator">:</span> <span class="token string">'other.html'</span><span class="token punctuation">,</span>
            chunks<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'other'</span><span class="token punctuation">,</span> <span class="token string">'common'</span><span class="token punctuation">]</span>  <span class="token comment">// 考虑代码分割</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div></template>
