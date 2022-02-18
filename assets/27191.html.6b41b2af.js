import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/blog/assets/3406872457.d6d394be.png",p="/blog/assets/what-is-webpack.2bbd4c39.png";const t={},o=n(`<h1 id="webpack-\u4E2D-module-chunk-bundle-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#webpack-\u4E2D-module-chunk-bundle-\u7684\u533A\u522B" aria-hidden="true">#</a> webpack \u4E2D module chunk bundle \u7684\u533A\u522B</h1><p>module - \u5404\u4E2A\u6E90\u7801\u6587\u4EF6\uFF0Cwebpack \u4E2D\u4E00\u5207\u7686\u6A21\u5757</p><p>\u5982 src \u76EE\u5F55\u4E0B\u90FD\u662F\u6A21\u5757</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>src
    <span class="token operator">--</span>index<span class="token punctuation">.</span>html
    <span class="token operator">--</span>index<span class="token punctuation">.</span>js
    <span class="token operator">--</span>img
        <span class="token operator">--</span>index<span class="token punctuation">.</span>png
    <span class="token operator">--</span>css
        <span class="token operator">--</span>style<span class="token punctuation">.</span>css
</code></pre></div><p>chunk - \u591A\u6A21\u5757\u5408\u5E76\u6210\u7684\uFF0C\u5982 entry import() splitChunk</p><p>entry \u5B9A\u4E49 chunk \u540D\u79F0</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token string">&#39;index.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">other</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token string">&#39;other.js&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>import() \u81EA\u52A8\u751F\u6210 chunk \u540D\u79F0</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./dynamic-data.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>default<span class="token punctuation">.</span>message<span class="token punctuation">)</span> <span class="token comment">// \u6CE8\u610F\u8FD9\u91CC\u7684 default</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>splitChunk \u5B9A\u4E49 chunk \u540D\u79F0</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
<span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5206\u5272\u4EE3\u7801\u5757</span>
        <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u7F13\u5B58\u5206\u7EC4</span>
            <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u7B2C\u4E09\u65B9\u6A21\u5757</span>
                <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;vendor&#39;</span><span class="token punctuation">,</span> <span class="token comment">// chunk \u540D\u79F0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>    
</code></pre></div><p>\u4F7F\u7528 chunk \u540D\u79F0</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// \u591A\u5165\u53E3 - \u751F\u6210 index.html</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// chunks \u8868\u793A\u8BE5\u9875\u9762\u8981\u5F15\u7528\u54EA\u4E9B chunk \uFF08\u5373\u4E0A\u9762\u7684 index \u548C other\uFF09\uFF0C\u9ED8\u8BA4\u5168\u90E8\u5F15\u7528</span>
            <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">]</span>  <span class="token comment">// \u53EA\u5F15\u7528 index.js</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="`+a+'" alt=""></p><p>bundle - \u6700\u7EC8\u7684\u8F93\u51FA\u6587\u4EF6\uFF0C\u4E5F\u5C31\u662F asset \u6587\u4EF6</p><p><img src="'+p+'" alt=""></p>',16);function e(c,l){return o}var i=s(t,[["render",e]]);export{i as default};
