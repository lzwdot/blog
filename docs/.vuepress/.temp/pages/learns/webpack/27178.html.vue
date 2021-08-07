<template><h1 id="webpack-基本配置" tabindex="-1"><a class="header-anchor" href="#webpack-基本配置" aria-hidden="true">#</a> webpack 基本配置</h1>
<p>基本配置，主要包含：</p>
<ul>
<li>拆分配置和 merge</li>
<li>启动本地服务</li>
<li>处理 ES6</li>
<li>处理样式</li>
<li>处理图片</li>
<li>（模块化）</li>
</ul>
<p>公共配置文件 webpack.common.js</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> srcPath<span class="token punctuation">,</span> distPath <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./paths'</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    entry<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token string">'index'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    module<span class="token operator">:</span> <span class="token punctuation">{</span>
        rules<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// 处理 ES6 等</span>
                test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                loader<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'babel-loader'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                include<span class="token operator">:</span> srcPath<span class="token punctuation">,</span>
                exclude<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// {</span>
            <span class="token comment">//     test: /\.vue$/,</span>
            <span class="token comment">//     loader: ['vue-loader'],</span>
            <span class="token comment">//     include: srcPath</span>
            <span class="token comment">// },</span>
            <span class="token comment">// {</span>
            <span class="token comment">//     test: /\.css$/,</span>
            <span class="token comment">//     // loader 的执行顺序是：从后往前（知识点）</span>
            <span class="token comment">//     loader: ['style-loader', 'css-loader']</span>
            <span class="token comment">// },</span>
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
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            template<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token string">'index.html'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            filename<span class="token operator">:</span> <span class="token string">'index.html'</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>开发环境配置 webpack.dev.js</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpackCommonConf <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./webpack.common.js'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> smart <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-merge'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> srcPath<span class="token punctuation">,</span> distPath <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./paths'</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">smart</span><span class="token punctuation">(</span>webpackCommonConf<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    mode<span class="token operator">:</span> <span class="token string">'development'</span><span class="token punctuation">,</span>
    module<span class="token operator">:</span> <span class="token punctuation">{</span>
        rules<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// 直接引入图片 url</span>
            <span class="token punctuation">{</span>
                test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|jpg|jpeg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                use<span class="token operator">:</span> <span class="token string">'file-loader'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// window.ENV = 'development'</span>
            <span class="token constant">ENV</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">'development'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    devServer<span class="token operator">:</span> <span class="token punctuation">{</span>
        port<span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>
        progress<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 显示打包的进度条</span>
        contentBase<span class="token operator">:</span> distPath<span class="token punctuation">,</span>  <span class="token comment">// 根目录</span>
        open<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 自动打开浏览器</span>
        compress<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 启动 gzip 压缩</span>
        <span class="token comment">// 设置代理</span>
        proxy<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 将本地 /api/xxx 代理到 localhost:3000/api/xxx</span>
            <span class="token string">'/api'</span><span class="token operator">:</span> <span class="token string">'http://localhost:3000'</span><span class="token punctuation">,</span>
            <span class="token comment">// 将本地 /api2/xxx 代理到 localhost:3000/xxx</span>
            <span class="token string">'/api2'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                target<span class="token operator">:</span> <span class="token string">'http://localhost:3000'</span><span class="token punctuation">,</span>
                pathRewrite<span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string">'/api2'</span><span class="token operator">:</span> <span class="token string">''</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>生成环境配置 webpack.prod.js</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'clean-webpack-plugin'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpackCommonConf <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./webpack.common.js'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> smart <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-merge'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> srcPath<span class="token punctuation">,</span> distPath <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./paths'</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">smart</span><span class="token punctuation">(</span>webpackCommonConf<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    mode<span class="token operator">:</span> <span class="token string">'production'</span><span class="token punctuation">,</span>
    output<span class="token operator">:</span> <span class="token punctuation">{</span>
        filename<span class="token operator">:</span> <span class="token string">'bundle.[contentHash:8].js'</span><span class="token punctuation">,</span>  <span class="token comment">// 打包代码时，加上 hash 戳</span>
        path<span class="token operator">:</span> distPath<span class="token punctuation">,</span>
        <span class="token comment">// publicPath: 'http://cdn.abc.com'  // 修改所有静态文件 url 的前缀（如 cdn 域名），这里暂时用不到</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    module<span class="token operator">:</span> <span class="token punctuation">{</span>
        rules<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// 图片 - 考虑 base64 编码的情况</span>
            <span class="token punctuation">{</span>
                test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|jpg|jpeg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                use<span class="token operator">:</span> <span class="token punctuation">{</span>
                    loader<span class="token operator">:</span> <span class="token string">'url-loader'</span><span class="token punctuation">,</span>
                    options<span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token comment">// 小于 5kb 的图片用 base64 格式产出</span>
                        <span class="token comment">// 否则，依然延用 file-loader 的形式，产出 url 格式</span>
                        limit<span class="token operator">:</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
                        <span class="token comment">// 打包到 img 目录下</span>
                        outputPath<span class="token operator">:</span> <span class="token string">'/img1/'</span><span class="token punctuation">,</span>
                        <span class="token comment">// 设置图片的 cdn 地址（也可以统一在外面的 output 中设置，那将作用于所有静态资源）</span>
                        <span class="token comment">// publicPath: 'http://cdn.abc.com'</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 会默认清空 output.path 文件夹</span>
        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// window.ENV = 'production'</span>
            <span class="token constant">ENV</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">'production'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>配置文件还引入了一个 paths.js 的文件</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> srcPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'..'</span><span class="token punctuation">,</span> <span class="token string">'src'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> distPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'..'</span><span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    srcPath<span class="token punctuation">,</span>
    distPath
<span class="token punctuation">}</span>
</code></pre></div><p>想要使用 babel 功能，还需要在根目录增加 .babelrc 文件</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@babel/preset-env"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>当处理 css 时，为了保持兼容性，自动前缀，引入 postcss-loader 模块启用 autoprefixer 功能，在根目录新增 postcss.config.js 文件</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'autoprefixer'</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>最后，看下完整的 package.json 配置</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"webpack-demo"</span><span class="token punctuation">,</span>
  <span class="token string">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
  <span class="token string">"description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token string">"main"</span><span class="token operator">:</span> <span class="token string">"index.js"</span><span class="token punctuation">,</span>
  <span class="token string">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"test"</span><span class="token operator">:</span> <span class="token string">"echo \"Error: no test specified\" &amp;&amp; exit 1"</span><span class="token punctuation">,</span>
    <span class="token string">"devBuild"</span><span class="token operator">:</span> <span class="token string">"webpack --config build-base-conf/webpack.dev.js"</span><span class="token punctuation">,</span>
    <span class="token string">"dev"</span><span class="token operator">:</span> <span class="token string">"webpack-dev-server --config build-base-conf/webpack.dev.js"</span><span class="token punctuation">,</span>
    <span class="token string">"build"</span><span class="token operator">:</span> <span class="token string">"webpack --config build-base-conf/webpack.prod.js"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">"author"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token string">"license"</span><span class="token operator">:</span> <span class="token string">"ISC"</span><span class="token punctuation">,</span>
  <span class="token string">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"@babel/core"</span><span class="token operator">:</span> <span class="token string">"^7.7.4"</span><span class="token punctuation">,</span>
    <span class="token string">"@babel/preset-env"</span><span class="token operator">:</span> <span class="token string">"^7.7.4"</span><span class="token punctuation">,</span>
    <span class="token string">"autoprefixer"</span><span class="token operator">:</span> <span class="token string">"^9.7.3"</span><span class="token punctuation">,</span>
    <span class="token string">"babel-loader"</span><span class="token operator">:</span> <span class="token string">"^8.0.6"</span><span class="token punctuation">,</span>
    <span class="token string">"clean-webpack-plugin"</span><span class="token operator">:</span> <span class="token string">"^3.0.0"</span><span class="token punctuation">,</span>
    <span class="token string">"css-loader"</span><span class="token operator">:</span> <span class="token string">"^3.2.1"</span><span class="token punctuation">,</span>
    <span class="token string">"file-loader"</span><span class="token operator">:</span> <span class="token string">"^5.0.2"</span><span class="token punctuation">,</span>
    <span class="token string">"happypack"</span><span class="token operator">:</span> <span class="token string">"^5.0.1"</span><span class="token punctuation">,</span>
    <span class="token string">"html-webpack-plugin"</span><span class="token operator">:</span> <span class="token string">"^3.2.0"</span><span class="token punctuation">,</span>
    <span class="token string">"less"</span><span class="token operator">:</span> <span class="token string">"^3.10.3"</span><span class="token punctuation">,</span>
    <span class="token string">"less-loader"</span><span class="token operator">:</span> <span class="token string">"^5.0.0"</span><span class="token punctuation">,</span>
    <span class="token string">"mini-css-extract-plugin"</span><span class="token operator">:</span> <span class="token string">"^0.8.0"</span><span class="token punctuation">,</span>
    <span class="token string">"optimize-css-assets-webpack-plugin"</span><span class="token operator">:</span> <span class="token string">"^5.0.3"</span><span class="token punctuation">,</span>
    <span class="token string">"postcss-loader"</span><span class="token operator">:</span> <span class="token string">"^3.0.0"</span><span class="token punctuation">,</span>
    <span class="token string">"style-loader"</span><span class="token operator">:</span> <span class="token string">"^1.0.1"</span><span class="token punctuation">,</span>
    <span class="token string">"terser-webpack-plugin"</span><span class="token operator">:</span> <span class="token string">"^2.2.2"</span><span class="token punctuation">,</span>
    <span class="token string">"url-loader"</span><span class="token operator">:</span> <span class="token string">"^3.0.0"</span><span class="token punctuation">,</span>
    <span class="token string">"webpack"</span><span class="token operator">:</span> <span class="token string">"^4.41.2"</span><span class="token punctuation">,</span>
    <span class="token string">"webpack-cli"</span><span class="token operator">:</span> <span class="token string">"^3.3.10"</span><span class="token punctuation">,</span>
    <span class="token string">"webpack-dev-server"</span><span class="token operator">:</span> <span class="token string">"^3.9.0"</span><span class="token punctuation">,</span>
    <span class="token string">"webpack-merge"</span><span class="token operator">:</span> <span class="token string">"^4.2.2"</span><span class="token punctuation">,</span>
    <span class="token string">"webpack-parallel-uglify-plugin"</span><span class="token operator">:</span> <span class="token string">"^1.1.2"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"lodash"</span><span class="token operator">:</span> <span class="token string">"^4.17.15"</span><span class="token punctuation">,</span>
    <span class="token string">"moment"</span><span class="token operator">:</span> <span class="token string">"^2.24.0"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></template>
