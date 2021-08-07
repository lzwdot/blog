<template><h1 id="如何配置-webpack-和-babel" tabindex="-1"><a class="header-anchor" href="#如何配置-webpack-和-babel" aria-hidden="true">#</a> 如何配置 webpack 和 babel</h1>
<p>使用 webpack 和 babel 的意义</p>
<ul>
<li>ES6 模块化，浏览器暂不支持</li>
<li>ES6 语法，浏览器并不完全支持</li>
<li>压缩代码，整合代码，以让网页加载更快</li>
</ul>
<p>初始化一个 npm 环境，生成 package.json 文件</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 初始化 package.json 文件</span>
npm init <span class="token operator">-</span>y
</code></pre></div><p>顺便看下最终的 package.json 文件内容</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"webpack-demo"</span><span class="token punctuation">,</span>
  <span class="token string">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
  <span class="token string">"description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token string">"main"</span><span class="token operator">:</span> <span class="token string">"index.js"</span><span class="token punctuation">,</span>
  <span class="token string">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"test"</span><span class="token operator">:</span> <span class="token string">"echo "</span>Error<span class="token operator">:</span> no test specified<span class="token string">" &amp;&amp; exit 1"</span><span class="token punctuation">,</span>
    <span class="token string">"build"</span><span class="token operator">:</span> <span class="token string">"webpack --config webpack.prod.js"</span><span class="token punctuation">,</span>
    <span class="token string">"dev"</span><span class="token operator">:</span> <span class="token string">"webpack-dev-server --config webpack.config.js"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">"author"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token string">"license"</span><span class="token operator">:</span> <span class="token string">"ISC"</span><span class="token punctuation">,</span>
  <span class="token string">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"@babel/core"</span><span class="token operator">:</span> <span class="token string">"^7.6.2"</span><span class="token punctuation">,</span>
    <span class="token string">"@babel/preset-env"</span><span class="token operator">:</span> <span class="token string">"^7.6.2"</span><span class="token punctuation">,</span>
    <span class="token string">"babel-loader"</span><span class="token operator">:</span> <span class="token string">"^8.0.6"</span><span class="token punctuation">,</span>
    <span class="token string">"html-webpack-plugin"</span><span class="token operator">:</span> <span class="token string">"^3.2.0"</span><span class="token punctuation">,</span>
    <span class="token string">"webpack"</span><span class="token operator">:</span> <span class="token string">"^4.41.0"</span><span class="token punctuation">,</span>
    <span class="token string">"webpack-cli"</span><span class="token operator">:</span> <span class="token string">"^3.3.9"</span><span class="token punctuation">,</span>
    <span class="token string">"webpack-dev-server"</span><span class="token operator">:</span> <span class="token string">"^3.8.2"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>一顿操作猛如虎安装 webpack 和 babel 各种插件，可以使用淘宝代理 <code>--registry=https://registry.npm.taobao.org</code></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 安装 webpack</span>
npm install webpack webpack<span class="token operator">-</span>cli <span class="token operator">-</span><span class="token constant">D</span>
<span class="token comment">// 安装 html-webpack-plugin，用于解析 html</span>
npm install html<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin <span class="token operator">-</span><span class="token constant">D</span>
<span class="token comment">// 安装 webpack-dev-server，用于启动服务</span>
npm install webpack<span class="token operator">-</span>dev<span class="token operator">-</span>server <span class="token operator">-</span><span class="token constant">D</span>
<span class="token comment">// 安装 babel 相关插件，用于 es6 转 es5</span>
npm install @babel<span class="token operator">/</span>core @babel<span class="token operator">/</span>preset<span class="token operator">-</span>env babel<span class="token operator">-</span>loader <span class="token operator">-</span><span class="token constant">D</span>
</code></pre></div><p>增加一个 webpack.config.js 用于开发时的配置</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span> <span class="token comment">// node 环境的 path</span>
<span class="token comment">// 引入 webpack 解析 html 的插件</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    mode<span class="token operator">:</span> <span class="token string">'development'</span><span class="token punctuation">,</span><span class="token comment">// 模式 production</span>
    entry<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'src'</span><span class="token punctuation">,</span> <span class="token string">'index.js'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//入口文件</span>
    output<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 输出文件</span>
        filename<span class="token operator">:</span> <span class="token string">'bundle.js'</span><span class="token punctuation">,</span>
        path<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span> <span class="token comment">// build 后的目录</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    module<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 模块</span>
        rules<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>  <span class="token comment">// es6 转 es5</span>
                test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                loader<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'babel-loader'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                include<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'src'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                exclude<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// 插件</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">//引入的模板</span>
            template<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'src'</span><span class="token punctuation">,</span> <span class="token string">'index.html'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token comment">//产生的文件</span>
            filename<span class="token operator">:</span> <span class="token string">'index.html'</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    devServer<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// http服务</span>
        port<span class="token operator">:</span> <span class="token number">8088</span><span class="token punctuation">,</span> <span class="token comment">//端口</span>
        contentBase<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span> <span class="token comment">// 运行的根目录</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    stats<span class="token operator">:</span> <span class="token punctuation">{</span>children<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span> <span class="token comment">//解决 Entrypoint undefined = index.html 的错误</span>
<span class="token punctuation">}</span>
</code></pre></div><p>根据 webpack.config.js 内容可知，需要在同级的 src 目录增加 index.html，index.js 两个文件，dist 目录在 build 时会自动生成，此时执行命令</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 运行 webpack 开发环境</span>
npm run dev
</code></pre></div><p>可以启动一个 webpack 开发环境服务，访问：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">8088</span><span class="token operator">/</span>index<span class="token punctuation">.</span>html
</code></pre></div><p>等等，如果需要 babel 的支持，还需要增加一个 .babelrc 文件，配置 babel 环境来调用 @babel/core 插件转义 es6 语法</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@babel/preset-env"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>顺带插入一下 ES6 模块化规范的问题，a.js 文件</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fn'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'a'</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'zhangshan'</span>
<span class="token punctuation">}</span>
</code></pre></div><p>b.js文件</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fn'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'b'</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'lishi'</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>
    fn<span class="token punctuation">,</span>
    name<span class="token punctuation">,</span>
    obj
<span class="token punctuation">}</span>
</code></pre></div><p>c.js 文件</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'a'</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token string">'b'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    a<span class="token punctuation">,</span>
    b
<span class="token punctuation">}</span>
</code></pre></div><p>用 index.js 文件来调用</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// es 6 语法</span>
<span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
<span class="token comment">// 解构赋值</span>
<span class="token comment">// import {fn, name, obj} from "./a";</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>fn<span class="token punctuation">,</span> name<span class="token punctuation">,</span> obj<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./b"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> c <span class="token keyword">from</span> <span class="token string">'./c'</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token comment">// b</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// lishi</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>a<span class="token punctuation">,</span> c<span class="token punctuation">.</span>b<span class="token punctuation">)</span> <span class="token comment">// {name: "a"} "b"</span>
</code></pre></div><p>最后配置下 webpack 的生产环境的 webpack.prod.js 文件</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    mode<span class="token operator">:</span> <span class="token string">'production'</span><span class="token punctuation">,</span><span class="token comment">//</span>
    entry<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'src'</span><span class="token punctuation">,</span> <span class="token string">'index.js'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//入口文件</span>
    output<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// contenthash 用于生成类似 bundle.373515fc1573230aee90.js 的文件</span>
        filename<span class="token operator">:</span> <span class="token string">'bundle.[contenthash].js'</span><span class="token punctuation">,</span>
        path<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span> <span class="token comment">// build 后的目录</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    module<span class="token operator">:</span> <span class="token punctuation">{</span>
        rules<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>  <span class="token comment">// es6 转 es5</span>
                test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                loader<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'babel-loader'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                include<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'src'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                exclude<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">//引入的模板</span>
            template<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'src'</span><span class="token punctuation">,</span> <span class="token string">'index.html'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token comment">//产生的文件</span>
            filename<span class="token operator">:</span> <span class="token string">'index.html'</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    stats<span class="token operator">:</span> <span class="token punctuation">{</span>children<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span> <span class="token comment">//解决 Entrypoint undefined = index.html 的错误</span>
<span class="token punctuation">}</span>
</code></pre></div><p>最后执行命令，会在 dist 目录中生成打包后的文件</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 运行 webpack 打包</span>
npm run build
</code></pre></div></template>
