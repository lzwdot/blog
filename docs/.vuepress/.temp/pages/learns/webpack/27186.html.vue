<template><h1 id="webpack-抽离压缩-css-文件" tabindex="-1"><a class="header-anchor" href="#webpack-抽离压缩-css-文件" aria-hidden="true">#</a> webpack 抽离压缩 css 文件</h1>
<p>需在 webpack 的基础配置上，做一定的修改：</p>
<p>1、拆分 webpack.common.js 的 css 处理，即分别在 webpack.dev.js 和 webpack.prod.js 中处理 css</p>
<p>2、复制之前 webpack.common.js 的 css 处理到 webpack.dev.js</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code> module<span class="token operator">:</span> <span class="token punctuation">{</span>
        rules<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// ...</span>
            <span class="token punctuation">{</span>
                test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token comment">// loader 的执行顺序是：从后往前</span>
                loader<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span> <span class="token string">'css-loader'</span><span class="token punctuation">,</span> <span class="token string">'postcss-loader'</span><span class="token punctuation">]</span> <span class="token comment">// 加了 postcss</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token comment">// 增加 'less-loader' ，注意顺序</span>
                loader<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span> <span class="token string">'css-loader'</span><span class="token punctuation">,</span> <span class="token string">'less-loader'</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>3、修改 webpack.pro.js 配置</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mini-css-extract-plugin'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> TerserJSPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'terser-webpack-plugin'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> OptimizeCSSAssetsPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'optimize-css-assets-webpack-plugin'</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">smart</span><span class="token punctuation">(</span>webpackCommonConf<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    module<span class="token operator">:</span> <span class="token punctuation">{</span>
        rules<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// ...</span>
            <span class="token comment">// 抽离 css</span>
            <span class="token punctuation">{</span>
                test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                loader<span class="token operator">:</span> <span class="token punctuation">[</span>
                    MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>  <span class="token comment">// 注意，这里不再用 style-loader</span>
                    <span class="token string">'css-loader'</span><span class="token punctuation">,</span>
                    <span class="token string">'postcss-loader'</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 抽离 less --> css</span>
            <span class="token punctuation">{</span>
                test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                loader<span class="token operator">:</span> <span class="token punctuation">[</span>
                    MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>  <span class="token comment">// 注意，这里不再用 style-loader</span>
                    <span class="token string">'css-loader'</span><span class="token punctuation">,</span>
                    <span class="token string">'less-loader'</span><span class="token punctuation">,</span>
                    <span class="token string">'postcss-loader'</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">//...</span>
        <span class="token comment">// 抽离 css 文件</span>
        <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            filename<span class="token operator">:</span> <span class="token string">'css/main.[contentHash:8].css'</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    optimization<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 压缩 css</span>
        minimizer<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">TerserJSPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">OptimizeCSSAssetsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></template>
