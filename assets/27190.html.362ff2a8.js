import{h as a}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const n={},p=a(`<h1 id="webpack-\u5B9E\u73B0\u5F02\u6B65\u52A0\u8F7D-js" tabindex="-1"><a class="header-anchor" href="#webpack-\u5B9E\u73B0\u5F02\u6B65\u52A0\u8F7D-js" aria-hidden="true">#</a> webpack \u5B9E\u73B0\u5F02\u6B65\u52A0\u8F7D JS</h1><p>\u61D2\u52A0\u8F7D\uFF0C\u5176\u5B9E webpack \u73AF\u5883\u652F\u6301\u7684</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5F15\u5165\u52A8\u6001\u6570\u636E - \u61D2\u52A0\u8F7D</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">// \u56DE\u987E vue React \u5F02\u6B65\u7EC4\u4EF6\uFF0C\u5176\u5B9E webpack \u73AF\u5883\u652F\u6301\u7684</span>
    <span class="token comment">// \u5B9A\u4E49 chunk</span>
    <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./dynamic-data.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>default<span class="token punctuation">.</span>message<span class="token punctuation">)</span> <span class="token comment">// \u6CE8\u610F\u8FD9\u91CC\u7684 default</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1500</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5904\u7406 React \u7684 JSX \u4F7F\u7528</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev @babel<span class="token operator">/</span>preset<span class="token operator">-</span>react
</code></pre></div><p>\u7136\u540E\u914D\u7F6E .babelrc \u6587\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-react&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5904\u7406 Vue \u6587\u4EF6\uFF0C\u5219\u4F7F\u7528 vue-loader</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>npm install <span class="token operator">-</span><span class="token constant">D</span> vue<span class="token operator">-</span>loader vue<span class="token operator">-</span>template<span class="token operator">-</span>compiler
</code></pre></div><p>\u7136\u540E\u914D\u7F6E webpack.common.js \u6587\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue-loader&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">include</span><span class="token operator">:</span> srcPath
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div>`,11);function t(e,o){return p}var r=s(n,[["render",t]]);export{r as default};
