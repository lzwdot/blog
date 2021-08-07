<template><h1 id="webpack-中-module-chunk-bundle-的区别" tabindex="-1"><a class="header-anchor" href="#webpack-中-module-chunk-bundle-的区别" aria-hidden="true">#</a> webpack 中 module chunk bundle 的区别</h1>
<p>module - 各个源码文件，webpack 中一切皆模块</p>
<p>如 src 目录下都是模块</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>src
    <span class="token operator">--</span>index<span class="token punctuation">.</span>html
    <span class="token operator">--</span>index<span class="token punctuation">.</span>js
    <span class="token operator">--</span>img
        <span class="token operator">--</span>index<span class="token punctuation">.</span>png
    <span class="token operator">--</span>css
        <span class="token operator">--</span>style<span class="token punctuation">.</span>css
</code></pre></div><p>chunk - 多模块合并成的，如 entry import() splitChunk</p>
<p>entry 定义 chunk 名称</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>entry<span class="token operator">:</span> <span class="token punctuation">{</span>
    index<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token string">'index.js'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    other<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token string">'other.js'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>import() 自动生成 chunk 名称</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./dynamic-data.js'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>default<span class="token punctuation">.</span>message<span class="token punctuation">)</span> <span class="token comment">// 注意这里的 default</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>splitChunk 定义 chunk 名称</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
optimization<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 分割代码块</span>
        splitChunks<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 缓存分组</span>
            cacheGroups<span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// 第三方模块</span>
                vendor<span class="token operator">:</span> <span class="token punctuation">{</span>
                    name<span class="token operator">:</span> <span class="token string">'vendor'</span><span class="token punctuation">,</span> <span class="token comment">// chunk 名称</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>    
</code></pre></div><p>使用 chunk 名称</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// 多入口 - 生成 index.html</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// chunks 表示该页面要引用哪些 chunk （即上面的 index 和 other），默认全部引用</span>
            chunks<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'index'</span><span class="token punctuation">]</span>  <span class="token comment">// 只引用 index.js</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="@source/learns/webpack/images/3406872457.png" alt=""></p>
<p>bundle - 最终的输出文件，也就是 asset 文件</p>
<p><img src="@source/learns/webpack/images/what-is-webpack.png" alt=""></p>
</template>
