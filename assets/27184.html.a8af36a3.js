import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="webpack-\u914D\u7F6E\u591A\u5165\u53E3" tabindex="-1"><a class="header-anchor" href="#webpack-\u914D\u7F6E\u591A\u5165\u53E3" aria-hidden="true">#</a> webpack \u914D\u7F6E\u591A\u5165\u53E3</h1><p>\u9700\u5728 webpack \u7684\u57FA\u7840\u914D\u7F6E\u4E0A\uFF0C\u505A\u4E00\u5B9A\u7684\u4FEE\u6539\uFF1A</p><p>1\u3001\u9700\u8981\u5728 src \u4E2D\u52A0 index.html \u548C other.html \u6587\u4EF6\u5165\u53E3</p><p>2\u3001\u4FEE\u6539 webpack.common.js \u914D\u7F6E</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token string">&#39;index.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">other</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token string">&#39;other.js&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
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
            <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">]</span>  <span class="token comment">// \u53EA\u5F15\u7528 index.js</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// \u591A\u5165\u53E3 - \u751F\u6210 other.html</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token string">&#39;other.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;other.html&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;other&#39;</span><span class="token punctuation">]</span>  <span class="token comment">// \u53EA\u5F15\u7528 other.js</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>3\u3001\u4FEE\u6539 webpack.prod.js \u914D\u7F6E</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// filename: &#39;bundle.[contentHash:8].js&#39;,  // \u6253\u5305\u4EE3\u7801\u65F6\uFF0C\u52A0\u4E0A hash \u6233</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].[contentHash:8].js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// name \u5373\u591A\u5165\u53E3\u65F6 entry \u7684 key</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> distPath<span class="token punctuation">,</span>
        <span class="token comment">// publicPath: &#39;http://cdn.abc.com&#39;  // \u4FEE\u6539\u6240\u6709\u9759\u6001\u6587\u4EF6 url \u7684\u524D\u7F00\uFF08\u5982 cdn \u57DF\u540D\uFF09\uFF0C\u8FD9\u91CC\u6682\u65F6\u7528\u4E0D\u5230</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div>`,7);function t(e,o){return p}var r=s(a,[["render",t]]);export{r as default};
