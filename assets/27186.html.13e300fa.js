import{h as s}from"./app.4ca8afde.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=s(`<h1 id="webpack-\u62BD\u79BB\u538B\u7F29-css-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#webpack-\u62BD\u79BB\u538B\u7F29-css-\u6587\u4EF6" aria-hidden="true">#</a> webpack \u62BD\u79BB\u538B\u7F29 css \u6587\u4EF6</h1><p>\u9700\u5728 webpack \u7684\u57FA\u7840\u914D\u7F6E\u4E0A\uFF0C\u505A\u4E00\u5B9A\u7684\u4FEE\u6539\uFF1A</p><p>1\u3001\u62C6\u5206 webpack.common.js \u7684 css \u5904\u7406\uFF0C\u5373\u5206\u522B\u5728 webpack.dev.js \u548C webpack.prod.js \u4E2D\u5904\u7406 css</p><p>2\u3001\u590D\u5236\u4E4B\u524D webpack.common.js \u7684 css \u5904\u7406\u5230 webpack.dev.js</p><div class="language-javascript ext-js"><pre class="language-javascript"><code> <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// ...</span>
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
</code></pre></div><p>3\u3001\u4FEE\u6539 webpack.pro.js \u914D\u7F6E</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> TerserJSPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;terser-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> OptimizeCSSAssetsPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;optimize-css-assets-webpack-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">smart</span><span class="token punctuation">(</span>webpackCommonConf<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// ...</span>
            <span class="token comment">// \u62BD\u79BB css</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>  <span class="token comment">// \u6CE8\u610F\uFF0C\u8FD9\u91CC\u4E0D\u518D\u7528 style-loader</span>
                    <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;postcss-loader&#39;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// \u62BD\u79BB less --&gt; css</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>  <span class="token comment">// \u6CE8\u610F\uFF0C\u8FD9\u91CC\u4E0D\u518D\u7528 style-loader</span>
                    <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;postcss-loader&#39;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">//...</span>
        <span class="token comment">// \u62BD\u79BB css \u6587\u4EF6</span>
        <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;css/main.[contentHash:8].css&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u538B\u7F29 css</span>
        <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">TerserJSPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">OptimizeCSSAssetsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,7);function t(e,o){return p}var r=n(a,[["render",t]]);export{r as default};
