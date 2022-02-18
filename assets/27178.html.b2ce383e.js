import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="webpack-\u57FA\u672C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#webpack-\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a> webpack \u57FA\u672C\u914D\u7F6E</h1><p>\u57FA\u672C\u914D\u7F6E\uFF0C\u4E3B\u8981\u5305\u542B\uFF1A</p><ul><li>\u62C6\u5206\u914D\u7F6E\u548C merge</li><li>\u542F\u52A8\u672C\u5730\u670D\u52A1</li><li>\u5904\u7406 ES6</li><li>\u5904\u7406\u6837\u5F0F</li><li>\u5904\u7406\u56FE\u7247</li><li>\uFF08\u6A21\u5757\u5316\uFF09</li></ul><p>\u516C\u5171\u914D\u7F6E\u6587\u4EF6 webpack.common.js</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> srcPath<span class="token punctuation">,</span> distPath <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./paths&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// \u5904\u7406 ES6 \u7B49</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">include</span><span class="token operator">:</span> srcPath<span class="token punctuation">,</span>
                <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// {</span>
            <span class="token comment">//     test: /\\.vue$/,</span>
            <span class="token comment">//     loader: [&#39;vue-loader&#39;],</span>
            <span class="token comment">//     include: srcPath</span>
            <span class="token comment">// },</span>
            <span class="token comment">// {</span>
            <span class="token comment">//     test: /\\.css$/,</span>
            <span class="token comment">//     // loader \u7684\u6267\u884C\u987A\u5E8F\u662F\uFF1A\u4ECE\u540E\u5F80\u524D\uFF08\u77E5\u8BC6\u70B9\uFF09</span>
            <span class="token comment">//     loader: [&#39;style-loader&#39;, &#39;css-loader&#39;]</span>
            <span class="token comment">// },</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token comment">// loader \u7684\u6267\u884C\u987A\u5E8F\u662F\uFF1A\u4ECE\u540E\u5F80\u524D</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">]</span> <span class="token comment">// \u52A0\u4E86 postcss</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token comment">// \u589E\u52A0 &#39;less-loader&#39; \uFF0C\u6CE8\u610F\u987A\u5E8F</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;index.html&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5F00\u53D1\u73AF\u5883\u914D\u7F6E webpack.dev.js</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpackCommonConf <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./webpack.common.js&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> smart <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-merge&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> srcPath<span class="token punctuation">,</span> distPath <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./paths&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">smart</span><span class="token punctuation">(</span>webpackCommonConf<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// \u76F4\u63A5\u5F15\u5165\u56FE\u7247 url</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpg|jpeg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// window.ENV = &#39;development&#39;</span>
            <span class="token constant">ENV</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">&#39;development&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>
        <span class="token literal-property property">progress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// \u663E\u793A\u6253\u5305\u7684\u8FDB\u5EA6\u6761</span>
        <span class="token literal-property property">contentBase</span><span class="token operator">:</span> distPath<span class="token punctuation">,</span>  <span class="token comment">// \u6839\u76EE\u5F55</span>
        <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// \u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668</span>
        <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// \u542F\u52A8 gzip \u538B\u7F29</span>
        <span class="token comment">// \u8BBE\u7F6E\u4EE3\u7406</span>
        <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5C06\u672C\u5730 /api/xxx \u4EE3\u7406\u5230 localhost:3000/api/xxx</span>
            <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3000&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// \u5C06\u672C\u5730 /api2/xxx \u4EE3\u7406\u5230 localhost:3000/xxx</span>
            <span class="token string-property property">&#39;/api2&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3000&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&#39;/api2&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u751F\u6210\u73AF\u5883\u914D\u7F6E webpack.prod.js</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;clean-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpackCommonConf <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./webpack.common.js&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> smart <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-merge&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> srcPath<span class="token punctuation">,</span> distPath <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./paths&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">smart</span><span class="token punctuation">(</span>webpackCommonConf<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.[contentHash:8].js&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// \u6253\u5305\u4EE3\u7801\u65F6\uFF0C\u52A0\u4E0A hash \u6233</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> distPath<span class="token punctuation">,</span>
        <span class="token comment">// publicPath: &#39;http://cdn.abc.com&#39;  // \u4FEE\u6539\u6240\u6709\u9759\u6001\u6587\u4EF6 url \u7684\u524D\u7F00\uFF08\u5982 cdn \u57DF\u540D\uFF09\uFF0C\u8FD9\u91CC\u6682\u65F6\u7528\u4E0D\u5230</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// \u56FE\u7247 - \u8003\u8651 base64 \u7F16\u7801\u7684\u60C5\u51B5</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpg|jpeg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token comment">// \u5C0F\u4E8E 5kb \u7684\u56FE\u7247\u7528 base64 \u683C\u5F0F\u4EA7\u51FA</span>
                        <span class="token comment">// \u5426\u5219\uFF0C\u4F9D\u7136\u5EF6\u7528 file-loader \u7684\u5F62\u5F0F\uFF0C\u4EA7\u51FA url \u683C\u5F0F</span>
                        <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
                        <span class="token comment">// \u6253\u5305\u5230 img \u76EE\u5F55\u4E0B</span>
                        <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;/img1/&#39;</span><span class="token punctuation">,</span>
                        <span class="token comment">// \u8BBE\u7F6E\u56FE\u7247\u7684 cdn \u5730\u5740\uFF08\u4E5F\u53EF\u4EE5\u7EDF\u4E00\u5728\u5916\u9762\u7684 output \u4E2D\u8BBE\u7F6E\uFF0C\u90A3\u5C06\u4F5C\u7528\u4E8E\u6240\u6709\u9759\u6001\u8D44\u6E90\uFF09</span>
                        <span class="token comment">// publicPath: &#39;http://cdn.abc.com&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u4F1A\u9ED8\u8BA4\u6E05\u7A7A output.path \u6587\u4EF6\u5939</span>
        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// window.ENV = &#39;production&#39;</span>
            <span class="token constant">ENV</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u914D\u7F6E\u6587\u4EF6\u8FD8\u5F15\u5165\u4E86\u4E00\u4E2A paths.js \u7684\u6587\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> srcPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;..&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> distPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;..&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    srcPath<span class="token punctuation">,</span>
    distPath
<span class="token punctuation">}</span>
</code></pre></div><p>\u60F3\u8981\u4F7F\u7528 babel \u529F\u80FD\uFF0C\u8FD8\u9700\u8981\u5728\u6839\u76EE\u5F55\u589E\u52A0 .babelrc \u6587\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5F53\u5904\u7406 css \u65F6\uFF0C\u4E3A\u4E86\u4FDD\u6301\u517C\u5BB9\u6027\uFF0C\u81EA\u52A8\u524D\u7F00\uFF0C\u5F15\u5165 postcss-loader \u6A21\u5757\u542F\u7528 autoprefixer \u529F\u80FD\uFF0C\u5728\u6839\u76EE\u5F55\u65B0\u589E postcss.config.js \u6587\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;autoprefixer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6700\u540E\uFF0C\u770B\u4E0B\u5B8C\u6574\u7684 package.json \u914D\u7F6E</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack-demo&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;devBuild&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --config build-base-conf/webpack.dev.js&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack-dev-server --config build-base-conf/webpack.dev.js&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --config build-base-conf/webpack.prod.js&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;@babel/core&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.7.4&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;@babel/preset-env&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.7.4&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;autoprefixer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^9.7.3&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;babel-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.0.6&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;clean-webpack-plugin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;css-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.2.1&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;file-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.0.2&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;happypack&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;html-webpack-plugin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.2.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;less&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.10.3&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;less-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;mini-css-extract-plugin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.8.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;optimize-css-assets-webpack-plugin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.0.3&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;postcss-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;style-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;terser-webpack-plugin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.2.2&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;url-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;webpack&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.41.2&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;webpack-cli&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.3.10&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;webpack-dev-server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.9.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;webpack-merge&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.2.2&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;webpack-parallel-uglify-plugin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.1.2&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;lodash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.17.15&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;moment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.24.0&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,17);function t(o,e){return p}var l=s(a,[["render",t]]);export{l as default};
