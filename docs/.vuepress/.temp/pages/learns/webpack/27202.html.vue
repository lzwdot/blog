<template><h1 id="webpack-优化产出代码" tabindex="-1"><a class="header-anchor" href="#webpack-优化产出代码" aria-hidden="true">#</a> webpack 优化产出代码</h1>
<p>优化产出代码</p>
<ul>
<li>体积更小</li>
<li>合理分包，不重复加载</li>
<li>速度更快，内存使用更少</li>
</ul>
<blockquote>
<p><strong>注，产出代码配置 webpack.prod.js 文件</strong></p>
</blockquote>
<h4 id="_1、小图片-base64-编码" tabindex="-1"><a class="header-anchor" href="#_1、小图片-base64-编码" aria-hidden="true">#</a> 1、小图片 base64 编码</h4>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
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
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_2、bundle-加-hash" tabindex="-1"><a class="header-anchor" href="#_2、bundle-加-hash" aria-hidden="true">#</a> 2、bundle 加 hash</h4>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    output<span class="token operator">:</span> <span class="token punctuation">{</span>
        filename<span class="token operator">:</span> <span class="token string">'[name].[contentHash:8].js'</span><span class="token punctuation">,</span> <span class="token comment">// name 即多入口时 entry 的 key</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>    
</code></pre></div><h4 id="_3、懒加载-如" tabindex="-1"><a class="header-anchor" href="#_3、懒加载-如" aria-hidden="true">#</a> 3、懒加载，如</h4>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./dynamic-data.js'</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="_4、提取公共代码" tabindex="-1"><a class="header-anchor" href="#_4、提取公共代码" aria-hidden="true">#</a> 4、提取公共代码</h4>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    optimization<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 压缩 css</span>
        minimizer<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">TerserJSPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">OptimizeCSSAssetsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 分割代码块</span>
        splitChunks<span class="token operator">:</span> <span class="token punctuation">{</span>
            chunks<span class="token operator">:</span> <span class="token string">'all'</span><span class="token punctuation">,</span>
            <span class="token doc-comment comment">/**
             * initial 入口chunk，对于异步导入的文件不处理
                async 异步chunk，只对异步导入的文件处理
                all 全部chunk
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
</code></pre></div><h4 id="_5、ingoreplugin-忽略无用文件" tabindex="-1"><a class="header-anchor" href="#_5、ingoreplugin-忽略无用文件" aria-hidden="true">#</a> 5、IngorePlugin 忽略无用文件</h4>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// 忽略 moment 下的 /locale 目录</span>
        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>IgnorePlugin</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.\/locale</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">moment</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_6、使用-cdn-加速-图片也需要-cdn-配置" tabindex="-1"><a class="header-anchor" href="#_6、使用-cdn-加速-图片也需要-cdn-配置" aria-hidden="true">#</a> 6、使用 CDN 加速，图片也需要 cdn 配置</h4>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    mode<span class="token operator">:</span> <span class="token string">'production'</span><span class="token punctuation">,</span>
    output<span class="token operator">:</span> <span class="token punctuation">{</span>
        publicPath<span class="token operator">:</span> <span class="token string">'http://cdn.abc.com'</span>  <span class="token comment">// 修改所有静态文件 url 的前缀（如 cdn 域名），这里暂时用不到</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_7、使用-production-模式" tabindex="-1"><a class="header-anchor" href="#_7、使用-production-模式" aria-hidden="true">#</a> 7、使用 production 模式</h4>
<ul>
<li>自动开启代码压缩</li>
<li>Vue React 等会自动删除调试代码（如开发环境的 warning）</li>
<li>自动启动 Tree-Shaking</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    mode<span class="token operator">:</span> <span class="token string">'production'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>1）什么是 Tree-Shaking ？比如 math.js 有这样一段代码</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">mult</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">*</span> b
<span class="token punctuation">}</span>
<span class="token comment">// ES6 Module 才能让 tree-shaking 生效</span>
<span class="token comment">// commonjs 就不行</span>
</code></pre></div><p>在 index.js 中只引用 sum 函数</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> sum <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./math'</span>
</code></pre></div><p>这样在打包是会自动删除 mult 函数，这就是 Tree-Shaking 功能</p>
<p>2）ES6 Module 和 Commonjs 的区别</p>
<ul>
<li>ES6 Module 静态引入，编译时引入</li>
<li>Commonjs 动态引入，执行时引入</li>
<li>只有 ES6 Module 才能静态分享，实现 Tree-Shaking</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> apiList <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'../config/api.js'</span><span class="token punctuation">)</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>isDev<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 可以动态引入，执行时引入</span>
    apiList <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'../config/api_dev.js'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">import</span> apiList <span class="token keyword">from</span> <span class="token string">'../config/api.js'</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>isDev<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 编辑时报错，只能静态引入</span>
    <span class="token keyword">import</span> apiList <span class="token keyword">from</span> <span class="token string">'../config/api_dev.js'</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_8、使用-scope-hosting" tabindex="-1"><a class="header-anchor" href="#_8、使用-scope-hosting" aria-hidden="true">#</a> 8、使用 Scope Hosting</h4>
<ul>
<li>代码体积更小</li>
<li>创建函数作用域更少</li>
<li>代码可读性更好</li>
</ul>
<p>比如</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> d <span class="token operator">=</span> a<span class="token operator">+</span>b<span class="token operator">+</span>c<span class="token punctuation">;</span>   <span class="token comment">//在webpack中会自动省略一些可以简化的代码</span>
<span class="token comment">//简化后的代码如下：console.log(6);</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>配置启用 Scope Hosting 功能</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> ModuleConcatenationPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack/lib/optimize/ModuleConcatenationPlugin'</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">smart</span><span class="token punctuation">(</span>webpackCommonConf<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    resolve<span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token comment">// 针对 NPM 中第三方模块优先采用 jsnext:main 中指向的 ES6 模块化语法的文件</span>
        mainFields<span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'jsnext:main'</span><span class="token punctuation">,</span><span class="token string">'browser'</span><span class="token punctuation">,</span><span class="token string">'main'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// 开启 Scope Hosting</span>
        <span class="token keyword">new</span> <span class="token class-name">ModuleConcatenationPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre></div></template>
