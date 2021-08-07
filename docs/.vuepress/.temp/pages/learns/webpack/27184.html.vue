<template><h1 id="webpack-配置多入口" tabindex="-1"><a class="header-anchor" href="#webpack-配置多入口" aria-hidden="true">#</a> webpack 配置多入口</h1>
<p>需在 webpack 的基础配置上，做一定的修改：</p>
<p>1、需要在 src 中加 index.html 和 other.html 文件入口</p>
<p>2、修改 webpack.common.js 配置</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    entry<span class="token operator">:</span> <span class="token punctuation">{</span>
        index<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token string">'index.js'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        other<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token string">'other.js'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
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
            chunks<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'index'</span><span class="token punctuation">]</span>  <span class="token comment">// 只引用 index.js</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// 多入口 - 生成 other.html</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            template<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token string">'other.html'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            filename<span class="token operator">:</span> <span class="token string">'other.html'</span><span class="token punctuation">,</span>
            chunks<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'other'</span><span class="token punctuation">]</span>  <span class="token comment">// 只引用 other.js</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>3、修改 webpack.prod.js 配置</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    output<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// filename: 'bundle.[contentHash:8].js',  // 打包代码时，加上 hash 戳</span>
        filename<span class="token operator">:</span> <span class="token string">'[name].[contentHash:8].js'</span><span class="token punctuation">,</span> <span class="token comment">// name 即多入口时 entry 的 key</span>
        path<span class="token operator">:</span> distPath<span class="token punctuation">,</span>
        <span class="token comment">// publicPath: 'http://cdn.abc.com'  // 修改所有静态文件 url 的前缀（如 cdn 域名），这里暂时用不到</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div></template>
