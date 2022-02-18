import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="webpack-\u62BD\u79BB\u516C\u5171\u4EE3\u7801\u548C\u7B2C\u4E09\u65B9\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#webpack-\u62BD\u79BB\u516C\u5171\u4EE3\u7801\u548C\u7B2C\u4E09\u65B9\u4EE3\u7801" aria-hidden="true">#</a> webpack \u62BD\u79BB\u516C\u5171\u4EE3\u7801\u548C\u7B2C\u4E09\u65B9\u4EE3\u7801</h1><p>\u9700\u5728 webpack \u7684\u57FA\u7840\u914D\u7F6E\u4E0A\uFF0C\u505A\u4E00\u5B9A\u7684\u4FEE\u6539\uFF1A</p><p>1\u3001\u4FEE\u6539 webpack.prod.js \u6587\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u538B\u7F29 css</span>
        <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">TerserJSPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">OptimizeCSSAssetsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5206\u5272\u4EE3\u7801\u5757</span>
        <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span>
            <span class="token doc-comment comment">/**
             * initial \u5165\u53E3 chunk\uFF0C\u5BF9\u4E8E\u5F02\u6B65\u5BFC\u5165\u7684\u6587\u4EF6\u4E0D\u5904\u7406
                async \u5F02\u6B65 chunk\uFF0C\u53EA\u5BF9\u5F02\u6B65\u5BFC\u5165\u7684\u6587\u4EF6\u5904\u7406
                all \u5168\u90E8 chunk
             */</span>
            <span class="token comment">// \u7F13\u5B58\u5206\u7EC4</span>
            <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u7B2C\u4E09\u65B9\u6A21\u5757</span>
                <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;vendor&#39;</span><span class="token punctuation">,</span> <span class="token comment">// chunk \u540D\u79F0</span>
                    <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// \u6743\u9650\u66F4\u9AD8\uFF0C\u4F18\u5148\u62BD\u79BB\uFF0C\u91CD\u8981\uFF01\uFF01\uFF01</span>
                    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                    <span class="token literal-property property">minSize</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>  <span class="token comment">// \u5927\u5C0F\u9650\u5236</span>
                    <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">1</span>  <span class="token comment">// \u6700\u5C11\u590D\u7528\u8FC7\u51E0\u6B21</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">// \u516C\u5171\u7684\u6A21\u5757</span>
                <span class="token literal-property property">common</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;common&#39;</span><span class="token punctuation">,</span> <span class="token comment">// chunk \u540D\u79F0</span>
                    <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// \u4F18\u5148\u7EA7</span>
                    <span class="token literal-property property">minSize</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>  <span class="token comment">// \u516C\u5171\u6A21\u5757\u7684\u5927\u5C0F\u9650\u5236</span>
                    <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">2</span>  <span class="token comment">// \u516C\u5171\u6A21\u5757\u6700\u5C11\u590D\u7528\u8FC7\u51E0\u6B21</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>2\u3001\u5728 webpack.common.js \u4FEE\u6539</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// new HtmlWebpackPlugin({</span>
        <span class="token comment">//     template: path.join(srcPath, &#39;index.html&#39;),</span>
        <span class="token comment">//     filename: &#39;index.html&#39;</span>
        <span class="token comment">// })</span>
        <span class="token comment">// \u591A\u5165\u53E3 - \u751F\u6210 index.html</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// chunks \u8868\u793A\u8BE5\u9875\u9762\u8981\u5F15\u7528\u54EA\u4E9B chunk \uFF08\u5373\u4E0A\u9762\u7684 index \u548C other\uFF09\uFF0C\u9ED8\u8BA4\u5168\u90E8\u5F15\u7528</span>
            <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vendor&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;common&#39;</span><span class="token punctuation">]</span>  <span class="token comment">// \u8981\u8003\u8651\u4EE3\u7801\u5206\u5272</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// \u591A\u5165\u53E3 - \u751F\u6210 other.html</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token string">&#39;other.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;other.html&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;other&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;common&#39;</span><span class="token punctuation">]</span>  <span class="token comment">// \u8003\u8651\u4EE3\u7801\u5206\u5272</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6);function t(o,e){return p}var r=s(a,[["render",t]]);export{r as default};
