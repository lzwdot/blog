<template><h1 id="webpack-之-babel-使用" tabindex="-1"><a class="header-anchor" href="#webpack-之-babel-使用" aria-hidden="true">#</a> webpack 之 babel 使用</h1>
<blockquote>
<p>babel 前端开发环境必备工具</p>
</blockquote>
<p>环境搭建 &amp; 基本配置</p>
<ul>
<li>环境搭建</li>
<li>.babelrc 配置 presets 和 pluins</li>
</ul>
<h4 id="_1、环境配置文件-package-json" tabindex="-1"><a class="header-anchor" href="#_1、环境配置文件-package-json" aria-hidden="true">#</a> 1、环境配置文件 package.json</h4>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"09-babel-demo"</span><span class="token punctuation">,</span>
  <span class="token string">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
  <span class="token string">"description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token string">"main"</span><span class="token operator">:</span> <span class="token string">"index.js"</span><span class="token punctuation">,</span>
  <span class="token string">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"test"</span><span class="token operator">:</span> <span class="token string">"echo \"Error: no test specified\" &amp;&amp; exit 1"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">"author"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token string">"license"</span><span class="token operator">:</span> <span class="token string">"ISC"</span><span class="token punctuation">,</span>
  <span class="token string">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"@babel/cli"</span><span class="token operator">:</span> <span class="token string">"^7.7.5"</span><span class="token punctuation">,</span>
    <span class="token string">"@babel/core"</span><span class="token operator">:</span> <span class="token string">"^7.7.5"</span><span class="token punctuation">,</span>
    <span class="token string">"@babel/plugin-transform-runtime"</span><span class="token operator">:</span> <span class="token string">"^7.7.5"</span><span class="token punctuation">,</span>
    <span class="token string">"@babel/preset-env"</span><span class="token operator">:</span> <span class="token string">"^7.7.5"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"@babel/polyfill"</span><span class="token operator">:</span> <span class="token string">"^7.7.0"</span><span class="token punctuation">,</span>
    <span class="token string">"@babel/runtime"</span><span class="token operator">:</span> <span class="token string">"^7.7.5"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>babel 配置文件 .babelrc</p>
<ul>
<li>presets - 可以作为 Babel 插件的组合</li>
<li>pluins</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string">"@babel/preset-env"</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string">"useBuiltIns"</span><span class="token operator">:</span> <span class="token string">"usage"</span><span class="token punctuation">,</span>
                <span class="token string">"corejs"</span><span class="token operator">:</span> <span class="token number">3</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string">"@babel/plugin-transform-runtime"</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string">"absoluteRuntime"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token string">"corejs"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                <span class="token string">"helpers"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token string">"regenerator"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token string">"useESModules"</span><span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>测试 index.js 中的 ES6 代码</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> b
</code></pre></div><p>执行命令 <code>npx babel src/index.js</code>，输出 ES5 语法</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="_2、babel-polyfill" tabindex="-1"><a class="header-anchor" href="#_2、babel-polyfill" aria-hidden="true">#</a> 2、babel-polyfill</h4>
<p>1）polyfill 意为补丁，比如</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>indexOf<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>indexOf <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">Object<span class="token punctuation">,</span>max<span class="token punctuation">,</span>min</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>通过这种方式实现 polyfill</p>
<p>2）core-js 和 regenerator</p>
<p>core-js 是 ES6+ 转 ES5 标准版，github 地址：<a href="https://github.com/zloirock/core-js" target="_blank" rel="noopener noreferrer">https://github.com/zloirock/core-js<OutboundLink/></a>，但 core-js 无法满足 ES6 中 generator，如</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// ES6 generator 函数（处理异步），被 async/await 代替</span>
<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">tell</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'执行 a 处理'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">yield</span> <span class="token string">'a'</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'执行 b 处理'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">yield</span> <span class="token string">'b'</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'执行 c 处理'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">yield</span> <span class="token string">'c'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token function">tell</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>k<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>k<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>k<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>k<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>所以还需要 regenerator 的支持，github 地址：<a href="https://github.com/facebook/regenerator" target="_blank" rel="noopener noreferrer">https://github.com/facebook/regenerator<OutboundLink/></a></p>
<p>3） babel-polyfill 即是 core-js 和 regenerator 的集合</p>
<ul>
<li>Babel 7.4 之后弃用 babel-polyfill</li>
<li><strong>推荐直接使用 core-js 和 regenerator</strong>，但是 babel-polyfill 还是很多人用</li>
</ul>
<p>babel <strong>只将 ES6+ 语法转 ES5 语法</strong>，但不能处理新的 API （新的 API 语法符合 ES5 规范，但浏览器是否兼容，babel 不关心），所以在代码中引入 babel-polyfill</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'@babel/polyfill'</span>
<span class="token comment">// 新的 API</span>
Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 新的 API</span>
<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
</code></pre></div><p>以上被解析为</p>
<blockquote>
<p>require('@babel/polyfill')</p>
<p>// 新的 API</p>
<p>Promise.resolve(100).then(data =&gt; data);</p>
<p>// 新的 API</p>
<p>[10, 20, 30].includes(20)</p>
</blockquote>
<p>babel 把 import 引入的解析为 require 的模块化，但 babel 不处理模块化，所以还是需要 webpack 配合，然而 babel-polyfill 文件较大，所以应配置 .babelrc 按需引入</p>
<blockquote>
<p>注，import '@babel/polyfill' 就不需要手动引入了</p>
</blockquote>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string">"@babel/preset-env"</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string">"useBuiltIns"</span><span class="token operator">:</span> <span class="token string">"usage"</span><span class="token punctuation">,</span>
                <span class="token string">"corejs"</span><span class="token operator">:</span> <span class="token number">3</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_3、babel-runtime" tabindex="-1"><a class="header-anchor" href="#_3、babel-runtime" aria-hidden="true">#</a> 3、babel-runtime</h4>
<p>babel-polyfill 的问题</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 污染全局环境</span>
window<span class="token punctuation">.</span><span class="token function-variable function">Promise</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">includes</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 使用方</span>
window<span class="token punctuation">.</span>Promise <span class="token operator">=</span> <span class="token string">'abc'</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>includes <span class="token operator">=</span> <span class="token number">100</span>
</code></pre></div><ul>
<li>污染全局环境</li>
<li>做独立的 web 系统没关系；如果做第三方 lib 就会有问题</li>
</ul>
<p>那怎么解决勒，可以换一个名字，如</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">Promise2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">includes2</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><p>使用 babel-runtime 就是解决污染环境问题，安装 @babel/plugin-transform-runtime 和 @babel/runtime，参考最上的 package.json 文件，然后默认配置 .babelrc 即可</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string">"@babel/plugin-transform-runtime"</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string">"absoluteRuntime"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token string">"corejs"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                <span class="token string">"helpers"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token string">"regenerator"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token string">"useESModules"</span><span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>执行命令 <code>npx babel src/index.js</code> 查看</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token string">"use strict"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> _interopRequireDefault <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@babel/runtime-corejs3/helpers/interopRequireDefault"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"core-js/modules/es.object.to-string.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"core-js/modules/es.promise.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> _includes <span class="token operator">=</span> <span class="token function">_interopRequireDefault</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@babel/runtime-corejs3/core-js-stable/instance/includes"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> _promise <span class="token operator">=</span> <span class="token function">_interopRequireDefault</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@babel/runtime-corejs3/core-js-stable/promise"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> _context<span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 新的 API</span>
_promise<span class="token punctuation">[</span><span class="token string">"default"</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> data<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 新的 API</span>
<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> _includes<span class="token punctuation">[</span><span class="token string">"default"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">(</span>_context <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>_context<span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>以上解析后，不会污染全局环境</p>
</template>
