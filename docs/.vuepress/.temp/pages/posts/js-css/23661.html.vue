<template><h1 id="从零开始配置vue-js的webpack开发环境" tabindex="-1"><a class="header-anchor" href="#从零开始配置vue-js的webpack开发环境" aria-hidden="true">#</a> 从零开始配置vue.js的webpack开发环境</h1>
<blockquote>
<p>这里使用的webpack@2.3.2 版本</p>
</blockquote>
<h3 id="安装webpack" tabindex="-1"><a class="header-anchor" href="#安装webpack" aria-hidden="true">#</a> 安装webpack</h3>
<p>首先需要使用npm来初始配置：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>cnpm init
</code></pre></div><p>执行后，一系列的回车后， 生成package.json文件 ，接着安装 webpack@2.3.2 和webpack-dev-server：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>cnpm install webpack@<span class="token number">2.3</span><span class="token number">.2</span> <span class="token operator">--</span>save<span class="token operator">-</span>dev
cnpm install webpack<span class="token operator">-</span>dev<span class="token operator">-</span>server@<span class="token number">2.4</span><span class="token number">.2</span> <span class="token operator">--</span>save<span class="token operator">-</span>dev
</code></pre></div><p>--save-dev会作为开发依赖来安装webpack。执行以上操作的package.json文件：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"demo"</span><span class="token punctuation">,</span>
  <span class="token string">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
  <span class="token string">"description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token string">"main"</span><span class="token operator">:</span> <span class="token string">"index.js"</span><span class="token punctuation">,</span>
  <span class="token string">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"test"</span><span class="token operator">:</span> <span class="token string">"echo "</span>Error<span class="token operator">:</span> no test specified<span class="token string">" &amp;&amp; exit 1"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">"author"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token string">"license"</span><span class="token operator">:</span> <span class="token string">"ISC"</span><span class="token punctuation">,</span>
  <span class="token string">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"webpack"</span><span class="token operator">:</span> <span class="token string">"^2.3.2"</span><span class="token punctuation">,</span>
    <span class="token string">"webpack-dev-server"</span><span class="token operator">:</span> <span class="token string">"^2.4.2"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre></div><h3 id="配置webpack" tabindex="-1"><a class="header-anchor" href="#配置webpack" aria-hidden="true">#</a> 配置webpack</h3>
<p>新建webpack.config.js文件用来作为webpack配置：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    entry<span class="token operator">:</span><span class="token punctuation">{</span>  <span class="token comment">//入口main.js文件</span>
        main<span class="token operator">:</span><span class="token string">'./main'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    output<span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//打包后</span>
        path<span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'./dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        publicPath<span class="token operator">:</span><span class="token string">'/dist/'</span><span class="token punctuation">,</span>
        filename<span class="token operator">:</span><span class="token string">'main.js'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports<span class="token operator">=</span>config  
</code></pre></div><p>以上webpack配置文件最重要的两项就是entry和output，在entry中的main.js是配置的入口文件，output中的main.js则是打包后的文件。所以，还需要一个空的main.js入口文件，现在，我们把webpack与npm环境联系起来，在package.json中添加webpack-dev-server启动脚本：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token string">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"test"</span><span class="token operator">:</span> <span class="token string">"echo "</span>Error<span class="token operator">:</span> no test specified<span class="token string">" &amp;&amp; exit 1"</span><span class="token punctuation">,</span>
    <span class="token string">"dev"</span><span class="token operator">:</span> <span class="token string">"webpack-dev-server --open --config webpack.config.js"</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span> 
</code></pre></div><p>至此，我们的配置就完成了，下面建一个index.html文件作为项目的入口：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">"X-UA-Compatible"</span> content<span class="token operator">=</span><span class="token string">"ie=edge"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>webpack<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
        hello world
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"text/javascript"</span> src<span class="token operator">=</span><span class="token string">"/dist/main.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span> 
</code></pre></div><p>执行启动命令后，会自动在浏览器中打开页面：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>cnpm run dev
</code></pre></div><p>如果你成功打开一个 hello world的页面，那么你已经完成了整个工作最重要的一步了。</p>
<h3 id="加入css处理配置" tabindex="-1"><a class="header-anchor" href="#加入css处理配置" aria-hidden="true">#</a> 加入css处理配置</h3>
<p>处理css等样式文件就需要用到style-loader和css-loader，所以需要安装和配置它们：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>cnpm install css<span class="token operator">-</span>loader <span class="token operator">--</span>save<span class="token operator">-</span>dev
cnpm install style<span class="token operator">-</span>loader <span class="token operator">--</span>save<span class="token operator">-</span>dev
cnpm install extract<span class="token operator">-</span>text<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin@<span class="token number">2.1</span><span class="token number">.2</span> <span class="token operator">--</span><span class="token operator">-</span>save<span class="token operator">-</span>dev<span class="token operator">--</span>save<span class="token operator">-</span>dev
</code></pre></div><p>利用extract-text-webpack-plugin来启用webpack的插件功能。在wepack.config.js中添加css处理配置：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> ExtractTextPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'extract-text-webpack-plugin'</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
    module<span class="token operator">:</span><span class="token punctuation">{</span>
        rules<span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span> <span class="token comment">//处理css文件</span>
                test<span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                use<span class="token operator">:</span>ExtractTextPlugin<span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                    use<span class="token operator">:</span><span class="token string">'css-loader'</span><span class="token punctuation">,</span>
                    fallback<span class="token operator">:</span><span class="token string">'style-loader'</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    plugins<span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token comment">//打包生成的css文件</span>
        <span class="token keyword">new</span> <span class="token class-name">ExtractTextPlugin</span><span class="token punctuation">(</span><span class="token string">'main.css'</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports<span class="token operator">=</span>config 
</code></pre></div><p>下面我们添加一个style.css文件：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>#app<span class="token punctuation">{</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">24</span>px<span class="token punctuation">;</span>
    color<span class="token operator">:</span> #f50<span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>并在main.js中通过 import 引入：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'./style.css'</span><span class="token punctuation">;</span> 
</code></pre></div><p>使用 cnpm run dev 命令重启服务，在浏览器中可以看到通过<link>引入的main.css文件生效，页面的 hello world也变大变红。</p>
<h3 id="安装vue相关依赖" tabindex="-1"><a class="header-anchor" href="#安装vue相关依赖" aria-hidden="true">#</a> 安装vue相关依赖</h3>
<p>处理.vue后缀文件和ES6语言转换等，需要安装相应的依赖：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev vue
cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev vue<span class="token operator">-</span>loader
cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev vue<span class="token operator">-</span>style<span class="token operator">-</span>loader
cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev vue<span class="token operator">-</span>template<span class="token operator">-</span>compiler
cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev vue<span class="token operator">-</span>hot<span class="token operator">-</span>reload<span class="token operator">-</span>api
cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev babel
cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev babel<span class="token operator">-</span>loader@<span class="token number">7.1</span><span class="token number">.5</span>
cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev babel<span class="token operator">-</span>core
cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev babel<span class="token operator">-</span>plugin<span class="token operator">-</span>transform<span class="token operator">-</span>runtime
cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev babel<span class="token operator">-</span>preset<span class="token operator">-</span>es2015
cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev babel<span class="token operator">-</span>runtime 
</code></pre></div><p>安装完成后，配置webpack.config.js来支持.vue文件和ES6的解析：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ExtractTextPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'extract-text-webpack-plugin'</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> VueLoaderPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'vue-loader/lib/plugin'</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    entry<span class="token operator">:</span><span class="token punctuation">{</span>
        main<span class="token operator">:</span><span class="token string">'./main'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    output<span class="token operator">:</span><span class="token punctuation">{</span>
        path<span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'./dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        publicPath<span class="token operator">:</span><span class="token string">'/dist/'</span><span class="token punctuation">,</span>
        filename<span class="token operator">:</span><span class="token string">'main.js'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    module<span class="token operator">:</span><span class="token punctuation">{</span>
        rules<span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                test<span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                loader<span class="token operator">:</span><span class="token string">'vue-loader'</span><span class="token punctuation">,</span>
                options<span class="token operator">:</span><span class="token punctuation">{</span>
                    loaders<span class="token operator">:</span><span class="token punctuation">{</span>
                        css<span class="token operator">:</span>ExtractTextPlugin<span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                            use<span class="token operator">:</span><span class="token string">'css-loader'</span><span class="token punctuation">,</span>
                            fallback<span class="token operator">:</span><span class="token string">'vue-style-loader'</span>
                        <span class="token punctuation">}</span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                test<span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                loader<span class="token operator">:</span><span class="token string">'babel-loader'</span><span class="token punctuation">,</span>
                exclude<span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                test<span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                use<span class="token operator">:</span>ExtractTextPlugin<span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                    use<span class="token operator">:</span><span class="token string">'css-loader'</span><span class="token punctuation">,</span>
                    fallback<span class="token operator">:</span><span class="token string">'style-loader'</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    plugins<span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">ExtractTextPlugin</span><span class="token punctuation">(</span><span class="token string">'main.css'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">VueLoaderPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports<span class="token operator">=</span>config 
</code></pre></div><p>新建一个.babelrc的配置文件，webpack会根据此配置来使用babel编译ES6的代码：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string">"presets"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">"es2015"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"transform-runtime"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">"comments"</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>配置好这些后，现在就可以使用.vue文件了。现在创建一个app.vue文件并写入内容：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        hello <span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span><span class="token string">'vue.js'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>style scoped<span class="token operator">></span>
    div<span class="token punctuation">{</span>
        color<span class="token operator">:</span> #f60<span class="token punctuation">;</span>
        font<span class="token operator">-</span>size<span class="token operator">:</span><span class="token number">24</span>px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span> 
</code></pre></div><p>写好了组件后，就可以在入口文件main.js中使用它，打开main.js文件，替换成以下内容：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App  <span class="token keyword">from</span> <span class="token string">'./app.vue'</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    el<span class="token operator">:</span><span class="token string">'#app'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span><span class="token parameter">h</span><span class="token operator">=></span><span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> 
</code></pre></div><p>重启服务，在浏览器中可以看到页面的 <code>&lt;div id=&quot;app&quot;&gt;</code> 已经被组件替换了：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div data<span class="token operator">-</span>v<span class="token operator">-</span><span class="token number">381730</span>fa<span class="token operator">></span>hello vue<span class="token punctuation">.</span>js<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span> 
</code></pre></div><p>对应的main.css为：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>div<span class="token punctuation">[</span>data<span class="token operator">-</span>v<span class="token operator">-</span><span class="token number">381730</span>fa<span class="token punctuation">]</span><span class="token punctuation">{</span>
     color<span class="token operator">:</span> #f60<span class="token punctuation">;</span>
     font<span class="token operator">-</span>size<span class="token operator">:</span><span class="token number">24</span>px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="用于生产环境" tabindex="-1"><a class="header-anchor" href="#用于生产环境" aria-hidden="true">#</a> 用于生产环境</h3>
<p>安装url-loader和file-loader来处理图片，字体等文件：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev url<span class="token operator">-</span>loader
cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev file<span class="token operator">-</span>loader
</code></pre></div><p>在webpack.config.js添加配置，?limit=1024是指文件小于1kb，就以base64的形式加载：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
    module<span class="token operator">:</span><span class="token punctuation">{</span>
        rules<span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token comment">//...</span>
            <span class="token punctuation">{</span>
                test<span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.(gif|jpg|png|woff|svg|eot|ttf)??.*$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                loader<span class="token operator">:</span><span class="token string">'url-loader?limit=1024'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
           <span class="token comment">//..</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> 
</code></pre></div><p>放置一张图片./images/image.png，并在app.vue中加载它：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code> <span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        hello <span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span>
            <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"/./images/image.gif"</span> alt<span class="token operator">=</span><span class="token string">""</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
</code></pre></div><p>重启服务后，浏览器页面上将显示图片，当然，这只是测试，更重要的是把所有的静态资源打包压缩。需要安装下面两个依赖：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev webpack<span class="token operator">-</span>merge
cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev html<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin
</code></pre></div><p>为了方便开发和生产环境切换，我们新建一个webpack.prod.config.js配置文件，并在package.json中加入一个build的脚本：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token string">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"test"</span><span class="token operator">:</span> <span class="token string">"echo "</span>Error<span class="token operator">:</span> no test specified<span class="token string">" &amp;&amp; exit 1"</span><span class="token punctuation">,</span>
    <span class="token string">"dev"</span><span class="token operator">:</span> <span class="token string">"webpack-dev-server --open --config webpack.config.js"</span><span class="token punctuation">,</span>
    <span class="token string">"build"</span><span class="token operator">:</span> <span class="token string">"webpack --progress --hide-modules --config webpack.prod.config.js"</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span> 
</code></pre></div><p>先来看下webpack.prod.config.js的配置：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> webpack<span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> HtmlwebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ExtractTextPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'extract-text-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> merge <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-merge'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> webpackBaseConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./webpack.config.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> VueLoaderPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'vue-loader/lib/plugin'</span><span class="token punctuation">)</span>
<span class="token comment">//清空基本配置的插件列表</span>
webpackBaseConfig<span class="token punctuation">.</span>plugins<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>webpackBaseConfig<span class="token punctuation">,</span><span class="token punctuation">{</span>
    output<span class="token operator">:</span><span class="token punctuation">{</span>
        publicPath<span class="token operator">:</span><span class="token string">'/dist/'</span><span class="token punctuation">,</span>
        <span class="token comment">//将入口文件main.js重命名为hash值的文件名</span>
        filename<span class="token operator">:</span><span class="token string">'[name].[hash].js'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    plugins<span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">ExtractTextPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            filename<span class="token operator">:</span><span class="token string">'[name].[hash].css'</span><span class="token punctuation">,</span>
            allChunks<span class="token operator">:</span><span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">//定义当前node环境为生产环境</span>
        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token string">'process.env'</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token constant">NODE_ENV</span><span class="token operator">:</span><span class="token string">'"production"'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">//压缩js</span>
        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>UglifyJsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            compress<span class="token operator">:</span><span class="token punctuation">{</span>
                warnings<span class="token operator">:</span><span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">//提取模板，并保存入口 html文件</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlwebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            filename<span class="token operator">:</span><span class="token string">'../index_prod.html'</span><span class="token punctuation">,</span>
            template<span class="token operator">:</span><span class="token string">'./index.ejs'</span><span class="token punctuation">,</span>
            inject<span class="token operator">:</span><span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">//加载vue相关插件</span>
        <span class="token keyword">new</span> <span class="token class-name">VueLoaderPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> 
</code></pre></div><p>从上面的配置文件中，可以看出，还需要一个index.ejs的模板文件：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>Webpack App<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
    <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"&lt;%= htmlWebpackPlugin.files.css[0] %>"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"text/javascript"</span> src<span class="token operator">=</span><span class="token string">"&lt;%= htmlWebpackPlugin.files.js[0] %>"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre></div><p>最后执行打包命令：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>cnpm run bulid
</code></pre></div><p>会生成一个dist的目录（包含静态资料）和index_prod.html文件，在浏览器通过访问一下链接即可：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">8080</span><span class="token operator">/</span>index_prod<span class="token punctuation">.</span>html 
</code></pre></div><p>好了，vue.js的webpack开发环境基本配置就是这样子了。</p>
</template>
