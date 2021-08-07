<template><h1 id="webpack-优化构建速度" tabindex="-1"><a class="header-anchor" href="#webpack-优化构建速度" aria-hidden="true">#</a> webpack 优化构建速度</h1>
<h3 id="用于生产环境" tabindex="-1"><a class="header-anchor" href="#用于生产环境" aria-hidden="true">#</a> 用于生产环境</h3>
<blockquote>
<p><strong>注，打包配置一般是指 webpack.prod.js 文件</strong></p>
</blockquote>
<h4 id="_1、优化-babel-loader-开启缓存和排除范围" tabindex="-1"><a class="header-anchor" href="#_1、优化-babel-loader-开启缓存和排除范围" aria-hidden="true">#</a> 1、优化 babel-loader，开启缓存和排除范围</h4>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    module<span class="token operator">:</span> <span class="token punctuation">{</span>
        rules<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                loader<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'babel-loader?cacheDirectory'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 开启缓存</span>
                include<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'scr'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token comment">// 排除范围，include 和 exclude 二选一</span>
                <span class="token comment">//exclude: path.resolve(__dirname,'node_modules')</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_2、用-ingoreplugin-忽略无用文件-比如" tabindex="-1"><a class="header-anchor" href="#_2、用-ingoreplugin-忽略无用文件-比如" aria-hidden="true">#</a> 2、用 IngorePlugin 忽略无用文件，比如</h4>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">'moment'</span>
</code></pre></div><p>默认会引入所有语言 JS 代码，代码过大，如何只引入中文？</p>
<p>先忽略语言包文件夹</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// 忽略 moment 下的 /locale 目录</span>
        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>IgnorePlugin</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.\/locale</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">moment</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>然后手动引入</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">'moment'</span>
<span class="token keyword">import</span> <span class="token string">'moment/locale/zh-cn'</span> <span class="token comment">// 手动引入语言包</span>
moment<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">'zh-cn'</span><span class="token punctuation">)</span> <span class="token comment">// 设置中文</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'locale'</span><span class="token punctuation">,</span>moment<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'date'</span><span class="token punctuation">,</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'ll'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 2020年xx月xx日</span>
<span class="token comment">// locale zh-cn</span>
<span class="token comment">// date 2020年12月28日</span>
</code></pre></div><h4 id="_3、noparse-避免重复打包" tabindex="-1"><a class="header-anchor" href="#_3、noparse-避免重复打包" aria-hidden="true">#</a> 3、noParse 避免重复打包</h4>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    module<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 独立完整的 react.min.js 文件没有采用模块化</span>
        <span class="token comment">// 忽略对 react.min.js 文件的递归解析处理</span>
        noParse<span class="token operator">:</span><span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">react\.min\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>IngorePlugin 和 noParse 区别</p>
<ul>
<li>IngorePlugin 直接不引入，代码中没有</li>
<li>noParse 引入，但不打包</li>
</ul>
<h4 id="_4、happypack-多进程打包" tabindex="-1"><a class="header-anchor" href="#_4、happypack-多进程打包" aria-hidden="true">#</a> 4、happyPack 多进程打包</h4>
<ul>
<li>JS 单线程，开启多进程打包</li>
<li>提高构建速度（特别是多核 CPU）</li>
</ul>
<p>比如开启 babel 开启多进程，先引入</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> HappyPack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'happypack'</span><span class="token punctuation">)</span>
</code></pre></div><p>然后配置</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    module<span class="token operator">:</span> <span class="token punctuation">{</span>
        rules<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// js</span>
            <span class="token punctuation">{</span>
                test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token comment">// 把对 .js 文件的处理转交给 id 为 babel 的 HappyPack 实例</span>
                use<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'happypack/loader?id=babel'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                include<span class="token operator">:</span> srcPath<span class="token punctuation">,</span>
                <span class="token comment">// exclude: /node_modules/</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// happyPack 开启多进程打包</span>
        <span class="token keyword">new</span> <span class="token class-name">HappyPack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// 用唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件</span>
            id<span class="token operator">:</span> <span class="token string">'babel'</span><span class="token punctuation">,</span>
            <span class="token comment">// 如何处理 .js 文件，用法和 Loader 配置中一样</span>
            loaders<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'babel-loader?cacheDirectory'</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_5、使用-paralleluglifyplugin-多进程压缩-js" tabindex="-1"><a class="header-anchor" href="#_5、使用-paralleluglifyplugin-多进程压缩-js" aria-hidden="true">#</a> 5、使用 ParallelUglifyPlugin 多进程压缩 JS</h4>
<ul>
<li>webpack 内置 Uglify 工具压缩 JS （单进程）</li>
<li>JS 单线程，开启多进程压缩更快</li>
<li>和 happyPack 同原理</li>
</ul>
<p>先引入</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> ParallelUglifyPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-parallel-uglify-plugin'</span><span class="token punctuation">)</span>
</code></pre></div><p>然后配置</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// 使用 ParallelUglifyPlugin 并行压缩输出的 JS 代码</span>
        <span class="token keyword">new</span> <span class="token class-name">ParallelUglifyPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// 传递给 UglifyJS 的参数</span>
            <span class="token comment">// （还是使用 UglifyJS 压缩，只不过帮助开启了多进程）</span>
            uglifyJS<span class="token operator">:</span> <span class="token punctuation">{</span>
                output<span class="token operator">:</span> <span class="token punctuation">{</span>
                    beautify<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 最紧凑的输出</span>
                    comments<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 删除所有的注释</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                compress<span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 删除所有的 `console` 语句，可以兼容ie浏览器</span>
                    drop_console<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token comment">// 内嵌定义了但是只用到一次的变量</span>
                    collapse_vars<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token comment">// 提取出出现多次但是没有定义成变量去引用的静态值</span>
                    reduce_vars<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>关于开启多进程</p>
<ul>
<li>项目较大，打包较慢，开启多进程能提高速度</li>
<li>项目较小，打包很快，开启多进程会减低速度（进程开销）</li>
</ul>
<h3 id="用于开发环境" tabindex="-1"><a class="header-anchor" href="#用于开发环境" aria-hidden="true">#</a> 用于开发环境</h3>
<blockquote>
<p><strong>注，以下配置 webpack.dev.js 文件</strong></p>
</blockquote>
<h4 id="_6、开启浏览器自动刷新" tabindex="-1"><a class="header-anchor" href="#_6、开启浏览器自动刷新" aria-hidden="true">#</a> 6、开启浏览器自动刷新</h4>
<blockquote>
<p>一般用不上，本地开发 devServer 默认开启监听文件变化，自动刷新浏览器</p>
</blockquote>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    devServer<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    watch<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启监听，默认为 false</span>
    watchOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
        ignored<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// 忽略哪些</span>
        <span class="token comment">// 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高</span>
        <span class="token comment">// 默认为 300ms</span>
        aggregateTimeout<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
        <span class="token comment">// 判断文件是否发生变化是通过不停的去询问系统指定文件有没有变化实现的</span>
        <span class="token comment">// 默认每隔1000毫秒询问一次</span>
        poll<span class="token operator">:</span> <span class="token number">1000</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_7、开启热更新" tabindex="-1"><a class="header-anchor" href="#_7、开启热更新" aria-hidden="true">#</a> 7、开启热更新</h4>
<ul>
<li>自动刷新：整个页面全部刷新，速度较慢</li>
<li>自动刷新：整个页面全部刷新，状态会丢失</li>
</ul>
<p>先引入</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> HotModuleReplacementPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack/lib/HotModuleReplacementPlugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>然后配置</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    entry<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// index: path.join(srcPath, 'index.js'),</span>
        index<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">'webpack-dev-server/client?http://localhost:8080/'</span><span class="token punctuation">,</span>
            <span class="token string">'webpack/hot/dev-server'</span><span class="token punctuation">,</span>
            path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token string">'index.js'</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">HotModuleReplacementPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    devServer<span class="token operator">:</span> <span class="token punctuation">{</span>
        hot<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>这样修改 css 可以实现热更新了，但 JS 需要监听范围，如</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> sum <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./math'</span>
<span class="token comment">// 增加，开启热更新之后的代码逻辑</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>module<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    module<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'./math'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> sumRes <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'sumRes in hot'</span><span class="token punctuation">,</span> sumRes<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>以上修改 math.js 才会触发热更新回调函数</p>
<h4 id="_8、dllplugin-动态链接库插件" tabindex="-1"><a class="header-anchor" href="#_8、dllplugin-动态链接库插件" aria-hidden="true">#</a> 8、DllPlugin 动态链接库插件</h4>
<ul>
<li>前端框架如 vue React，体积大，构建慢</li>
<li>较稳定，不常升级版本</li>
<li>同一个版本只构建一次即可，不用每次都重新构建</li>
<li>webpback 已内置 DllPlugin 支持</li>
<li>DllPlugin - 打包出 dll 文件</li>
<li>DllReferencePlugin - 使用 dll 文件</li>
</ul>
<p>配置 webpack.dll.js 文件</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> DllPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack/lib/DllPlugin'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> srcPath<span class="token punctuation">,</span> distPath <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./paths'</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  mode<span class="token operator">:</span> <span class="token string">'development'</span><span class="token punctuation">,</span>
  <span class="token comment">// JS 执行入口文件</span>
  entry<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 把 React 相关模块的放到一个单独的动态链接库</span>
    react<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'react'</span><span class="token punctuation">,</span> <span class="token string">'react-dom'</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  output<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 输出的动态链接库的文件名称，[name] 代表当前动态链接库的名称，</span>
    <span class="token comment">// 也就是 entry 中配置的 react 和 polyfill</span>
    filename<span class="token operator">:</span> <span class="token string">'[name].dll.js'</span><span class="token punctuation">,</span>
    <span class="token comment">// 输出的文件都放到 dist 目录下</span>
    path<span class="token operator">:</span> distPath<span class="token punctuation">,</span>
    <span class="token comment">// 存放动态链接库的全局变量名称，例如对应 react 来说就是 _dll_react</span>
    <span class="token comment">// 之所以在前面加上 _dll_ 是为了防止全局变量冲突</span>
    library<span class="token operator">:</span> <span class="token string">'_dll_[name]'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 接入 DllPlugin</span>
    <span class="token keyword">new</span> <span class="token class-name">DllPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 动态链接库的全局变量名称，需要和 output.library 中保持一致</span>
      <span class="token comment">// 该字段的值也就是输出的 manifest.json 文件 中 name 字段的值</span>
      <span class="token comment">// 例如 react.manifest.json 中就有 "name": "_dll_react"</span>
      name<span class="token operator">:</span> <span class="token string">'_dll_[name]'</span><span class="token punctuation">,</span>
      <span class="token comment">// 描述动态链接库的 manifest.json 文件输出时的文件名称</span>
      path<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>distPath<span class="token punctuation">,</span> <span class="token string">'[name].manifest.json'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>在 package.json 配置执行的脚步，并执行 <code>npm run dll</code> 命令</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"dll"</span><span class="token operator">:</span> <span class="token string">"webpack --config build/webpack.dll.js"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>使用打包出来的 dll 文件，配置 webpack.dev.js 文件</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 第一，引入 DllReferencePlugin</span>
<span class="token keyword">const</span> DllReferencePlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack/lib/DllReferencePlugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">smart</span><span class="token punctuation">(</span>webpackCommonConf<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    mode<span class="token operator">:</span> <span class="token string">'development'</span><span class="token punctuation">,</span>
    module<span class="token operator">:</span> <span class="token punctuation">{</span>
        rules<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                loader<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'babel-loader'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                include<span class="token operator">:</span> srcPath<span class="token punctuation">,</span>
                exclude<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span> <span class="token comment">// 第二，不要再转换 node_modules 的代码</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// 第三，告诉 Webpack 使用了哪些动态链接库</span>
        <span class="token keyword">new</span> <span class="token class-name">DllReferencePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// 描述 react 动态链接库的文件内容</span>
            manifest<span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>distPath<span class="token punctuation">,</span> <span class="token string">'react.manifest.json'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>最后在 index.html 引用</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"./react.dll.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div></template>
