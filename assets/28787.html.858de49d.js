import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="webpack-\u5DE5\u7A0B\u73AF\u5883\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#webpack-\u5DE5\u7A0B\u73AF\u5883\u642D\u5EFA" aria-hidden="true">#</a> webpack \u5DE5\u7A0B\u73AF\u5883\u642D\u5EFA</h1><p>\u73AF\u5883\u642D\u5EFA\u57FA\u672C\u6B65\u9AA4</p><h3 id="\u65B0\u5EFA\u9879\u76EE-\u6BD4\u5982-webpack-study" tabindex="-1"><a class="header-anchor" href="#\u65B0\u5EFA\u9879\u76EE-\u6BD4\u5982-webpack-study" aria-hidden="true">#</a> \u65B0\u5EFA\u9879\u76EE\uFF0C\u6BD4\u5982 <code>webpack-study</code></h3><h3 id="\u5224\u65AD\u5355\u4E2A\u524D\u7AEF-\u8FD8\u662F\u56E2\u961F" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u5355\u4E2A\u524D\u7AEF-\u8FD8\u662F\u56E2\u961F" aria-hidden="true">#</a> \u5224\u65AD\u5355\u4E2A\u524D\u7AEF\uFF0C\u8FD8\u662F\u56E2\u961F</h3><h3 id="\u5904\u7406\u5B89\u88C5\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> \u5904\u7406\u5B89\u88C5\u4F9D\u8D56</h3><p>\u9996\u5148\u4F18\u5316\u5B89\u88C5\u4F9D\u8D56\u955C\u50CF\u6E90\uFF0C\u6839\u76EE\u5F55\u65B0\u5EFA\u6587\u4EF6 <code>.npmrc</code> \uFF08\u53EF\u9009\uFF09</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token assign-left variable">registry</span><span class="token operator">=</span>https://registry.npm.taobao.org
</code></pre></div><p>\u5B89\u88C5 webpack \u57FA\u672C\u73AF\u5883</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> init -y
<span class="token function">npm</span> <span class="token function">install</span> webpack webpack-cli --save-dev
</code></pre></div><blockquote><p>\u53C2\u8003\uFF1Ahttps://webpack.docschina.org/guides/getting-started</p></blockquote><p>\u5728\u6839\u76EE\u5F55\u65B0\u5EFA <code>webpack.config.js</code> \u548C\u5165\u53E3\u6587\u4EF6 <code>src/index.js</code>\uFF0C\u76EE\u5F55\u7ED3\u6784</p><div class="language-bash ext-sh"><pre class="language-bash"><code>webpack-study
<span class="token operator">|</span>- /dist
  <span class="token operator">|</span>- main.js
  <span class="token operator">|</span>- index.html
<span class="token operator">|</span>- /node_modules  
<span class="token operator">|</span>- /src
  <span class="token operator">|</span>- index.js
<span class="token operator">|</span>- .npmrc
<span class="token operator">|</span>- package.json
<span class="token operator">|</span>- package-lock.json
<span class="token operator">|</span>- webpack.config.js
</code></pre></div><h3 id="\u9009\u62E9\u5408\u9002\u7684\u6837\u5F0F-\u9759\u6001\u8D44\u6E90-\u56FE\u7247\u7B2C\u4E09\u65B9\u5B57\u4F53-es6-vue-react-ts" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u5408\u9002\u7684\u6837\u5F0F-\u9759\u6001\u8D44\u6E90-\u56FE\u7247\u7B2C\u4E09\u65B9\u5B57\u4F53-es6-vue-react-ts" aria-hidden="true">#</a> \u9009\u62E9\u5408\u9002\u7684\u6837\u5F0F \u9759\u6001\u8D44\u6E90\uFF08\u56FE\u7247\u7B2C\u4E09\u65B9\u5B57\u4F53\uFF09 es6+(vue react ts)</h3><h4 id="\u6BD4\u5982\u6837\u5F0F-\u501F\u52A9-css-loader-\u5904\u7406-css-\u7684\u8BED\u6CD5-\u501F\u52A9-style-loader-\u4F7F\u7528css" tabindex="-1"><a class="header-anchor" href="#\u6BD4\u5982\u6837\u5F0F-\u501F\u52A9-css-loader-\u5904\u7406-css-\u7684\u8BED\u6CD5-\u501F\u52A9-style-loader-\u4F7F\u7528css" aria-hidden="true">#</a> \u6BD4\u5982\u6837\u5F0F\uFF1A\u501F\u52A9 <code>css-loader</code> \u5904\u7406 css \u7684\u8BED\u6CD5\uFF0C\u501F\u52A9 <code>style-loader</code> \u4F7F\u7528css</h4><p>\u5982\u679C\u4F7F\u7528 less, sass \u4E4B\u7C7B\u7684\uFF0C\u9700\u8981\u5B89\u88C5\u5BF9\u5E94\u7684 <code>less-loader</code>, <code>sass-loader</code>, \u5982</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token function">less</span> less-loader --save-dev
</code></pre></div><p>\u7136\u540E\u5728 webpack.config.js \u4E2D\u6DFB\u52A0</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\uFF0C\u56E0\u4E3A\u4E00\u4E2A loader \u53EA\u505A\u4E00\u4EF6\u4E8B\u60C5\uFF0C<code>less-loader</code> \u5904\u7406 <code>.less</code> \u9700\u8981\u4F9D\u8D56 <code>less</code> \u63D2\u4EF6\u6240\u4EE5\u9700\u8981\u540C\u65F6\u5B89\u88C5 <code>less</code> \u548C <code>less-loader</code>, \u53C2\u8003\uFF1Ahttps://webpack.docschina.org/loaders/less-loader</p></blockquote><h4 id="postcss-\u5904\u7406\u7F16\u8BD1-css" tabindex="-1"><a class="header-anchor" href="#postcss-\u5904\u7406\u7F16\u8BD1-css" aria-hidden="true">#</a> <code>postcss</code> \u5904\u7406\u7F16\u8BD1 css</h4><p>\u4E00\u822C\u5E38\u7528 <code>autoprefixer</code> \u81EA\u52A8\u6DFB\u52A0 css \u6D4F\u89C8\u5668\u524D\u7F00\u548C <code>cssnano</code> \u538B\u7F29 css \u4EE3\u7801, \u9700\u8981\u5B89\u88C5 <code>postcss-loader</code>,<code>postcss</code>,<code>autoprefixer</code>,<code>cssnano</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code>npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev postcss<span class="token operator">-</span>loader postcss autoprefixer cssnano
</code></pre></div><p>\u65B0\u5EFA <code>postcss.config.js</code> \u6587\u4EF6\u914D\u7F6E</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;autoprefixer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cssnano&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>\u53C2\u8003\uFF1Ahttps://github.com/postcss/autoprefixer#webpack</p></blockquote><p>\u7136\u540E\u5728 webpack.config.js \u4E2D\u6DFB\u52A0</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>\u6B64\u65F6\u57FA\u672C\u914D\u7F6E\u5DF2\u5B8C\u6210\uFF0C<strong>\u4F46\u662F</strong> \u4E3A\u4E86\u517C\u5BB9\u5230\u76EE\u6807\u6D4F\u89C8\u5668\uFF0C\u9700\u8981\u914D\u7F6E\u4E0B <code>browserslist</code></p></blockquote><p>\u7B2C\u4E00\u79CD\u5199\u6CD5\uFF0C\u5728 <code>package.json</code> \u4E2D\u6DFB\u52A0</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;browserslist&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;last 2 versions&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&gt; 1%&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53E6\u5916\u4E00\u79CD\uFF0C\u76F4\u63A5\u65B0\u5EFA <code>.browserslistrc</code> \u4F7F\u7528\u6362\u884C\u4F5C\u4E3A\u6761\u4EF6\u7EC4\u5408</p><div class="language-bash ext-sh"><pre class="language-bash"><code>last <span class="token number">2</span> versions
<span class="token operator">&gt;</span> <span class="token number">1</span>%
</code></pre></div><p>\u7B2C\u4E09\u79CD\u5199\u6CD5\uFF08\u4E0D\u63A8\u8350\uFF09\uFF0C\u76F4\u63A5\u5728 <code>postcss.config.js</code> \u4EE5\u53C2\u6570\u4F20\u5165</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;autoprefixer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">overrideBrowserslist</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;last 2 versions&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&gt; 1%&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p><code>last 2 versions</code> \u8868\u793A\u6D4F\u89C8\u5668\u6700\u8FD1\u4E24\u4E2A\u5927\u7248\u672C\uFF0C\u6BD4\u5982\u53EF\u4EE5\u5199\u6210 <code>last 2 chrome version</code>, \u6700\u65B0 chrome \u6D4F\u89C8\u5668\u7248\u672C 96.0.4664.93\uFF08\u6B63\u5F0F\u7248\u672C\uFF09\uFF0C\u90A3\u4E48\u4E45\u53EF\u4EE5\u517C\u5BB9\u5230 96\u7248\u548C95\u7248<br><code>&gt; 1%</code> \u8868\u793A\u6D4F\u89C8\u5668\u4EFD\u989D\u5927\u4E8E 1% \u7684\u6D4F\u89C8\u5668<br> \u5B8C\u6574\u53C2\u8003\uFF1Ahttps://github.com/browserslist/browserslist#full-list<br> browserslist\u7684\u6570\u636E\u6765\u6E90 http://browserl.ist/</p></blockquote><p>\u6267\u884C <code>npx browserslist</code> \u53EF\u4EE5\u67E5\u770B\u652F\u6301\u7684\u6D4F\u89C8\u5668\u7248\u672C</p><blockquote><p>\u53C2\u8003\uFF1Ahttps://github.com/browserslist/browserslist#debug</p></blockquote><h4 id="mini-css-extract-plugin-\u63D0\u53D6-css-\u5230\u5355\u72EC\u7684\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#mini-css-extract-plugin-\u63D0\u53D6-css-\u5230\u5355\u72EC\u7684\u6587\u4EF6" aria-hidden="true">#</a> <code>mini-css-extract-plugin</code> \u63D0\u53D6 css \u5230\u5355\u72EC\u7684\u6587\u4EF6</h4><p>\u5B89\u88C5</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev mini-css-extract-plugin
</code></pre></div><p>\u6CE8\u610F <code>module</code> \u548C <code>plugins</code> \u90FD\u8981\u914D\u7F6E</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> miniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>     
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>miniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>    
    <span class="token keyword">new</span> <span class="token class-name">miniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].css&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u5982\u4F55\u7F16\u5199\u4E00\u4E2A\u81EA\u5B9A\u4E49-loader" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u7F16\u5199\u4E00\u4E2A\u81EA\u5B9A\u4E49-loader" aria-hidden="true">#</a> \u5982\u4F55\u7F16\u5199\u4E00\u4E2A\u81EA\u5B9A\u4E49 loader</h4><p>\u65B0\u589E loader \u6587\u4EF6 <code>myLoaders/replace-loader.js</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// loader \u662F\u4E00\u4E2A\u51FD\u6570</span>
<span class="token comment">//! \u4E0D\u53EF\u4EE5\u662F\u7BAD\u5934\u51FD\u6570</span>
<span class="token comment">// \u5FC5\u987B\u6709\u8FD4\u56DE\u503C\uFF0C\u8FD4\u56DE\u4E00\u4E2A str buffer</span>
<span class="token comment">// \u652F\u6301\u914D\u7F6E this.query</span>
<span class="token comment">// \u5982\u4F55\u8FD4\u56DE\u591A\u4E2A\u4FE1\u606F this.callback</span>
<span class="token comment">// \u5982\u4F55\u5904\u7406\u5F02\u6B65 this.async</span>
<span class="token comment">// \u5982\u4F55\u5904\u7406\u591A\u4E2A loader</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>query<span class="token punctuation">)</span>
  <span class="token keyword">return</span> source<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">hello</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;hi&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u548C loader \u6587\u4EF6 <code>myLoaders/replace-async-loader.js</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// loader \u662F\u4E00\u4E2A\u51FD\u6570</span>
<span class="token comment">//! \u4E0D\u53EF\u4EE5\u662F\u7BAD\u5934\u51FD\u6570</span>
<span class="token comment">// \u5FC5\u987B\u6709\u8FD4\u56DE\u503C\uFF0C\u8FD4\u56DE\u4E00\u4E2A str buffer</span>
<span class="token comment">// \u652F\u6301\u914D\u7F6E this.query</span>
<span class="token comment">// \u5982\u4F55\u8FD4\u56DE\u591A\u4E2A\u4FE1\u606F this.callback</span>
<span class="token comment">// \u5982\u4F55\u5904\u7406\u5F02\u6B65 this.async</span>
<span class="token comment">// \u5982\u4F55\u5904\u7406\u591A\u4E2A loader</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>query<span class="token punctuation">)</span>
  <span class="token comment">// const msg = source.replace(/index/g, this.query.info)</span>
  <span class="token comment">// return this.callback(null, msg)</span>

  <span class="token keyword">const</span> callback <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> msg <span class="token operator">=</span> source<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">index</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>query<span class="token punctuation">.</span>info<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">2000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5373\u53EF\u5728 <code>webpack.config.js</code> \u4E2D\u4F7F\u7528\u4E86</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>  
  <span class="token literal-property property">resolveLoader</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./myLoaders&#39;</span><span class="token punctuation">]</span> <span class="token comment">// \u5728\u914D\u7F6E\u7684\u76EE\u5F55\u4E0B\u5BFB\u627E module</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>  
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>      
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;replace-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;replace-async-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token string">&#39;lzw&#39;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="loader-\u6700\u4F73\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#loader-\u6700\u4F73\u5B9E\u8DF5" aria-hidden="true">#</a> Loader \u6700\u4F73\u5B9E\u8DF5</h4><p>\u5B9E\u73B0 <code>style-loader</code>, <code>css-loader</code>, <code>less-loader</code> \u7684\u529F\u80FD\uFF0C\u5BF9\u5E94\u7684\u6587\u4EF6</p><p><code>myLoaders/k-less-loader</code> \u6587\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u628A less \u8BED\u6CD5 \u7F16\u8BD1\u6210 css</span>
<span class="token keyword">const</span> less <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;less&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  less<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> output</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">callback</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> output<span class="token punctuation">.</span>css<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>myLoaders/k-css-loader</code> \u6587\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u628A css \u8F6C \u5B57\u7B26\u4E32</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>myLoaders/k-style-loader</code> \u6587\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u52A8\u6001\u521B\u5EFA style </span>
<span class="token comment">// \u628A source \u585E\u8FDB style</span>
<span class="token comment">// \u628A style \u653E\u8FDB\u6587\u4EF6 head \u4E2D</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    const tag = document.createElement(&#39;style&#39;)
    tag.innerHTML = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>source<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
    document.head.appendChild(tag)
  </span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u6837\u5C31\u53EF\u4EE5\u5728 <code>webpack.config.js</code> \u4E2D\u4F7F\u7528\u4E86</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>  
  <span class="token literal-property property">resolveLoader</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./myLoaders&#39;</span><span class="token punctuation">]</span> <span class="token comment">// \u5728\u914D\u7F6E\u7684\u76EE\u5F55\u4E0B\u5BFB\u627E module</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>  
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>      
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;k-style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;k-css-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;k-less-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u56FE\u7247\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u5904\u7406" aria-hidden="true">#</a> \u56FE\u7247\u5904\u7406</h4><p><code>webpack 4.x</code> \u4F7F\u7528 <code>file-loader</code>, <code>url-loader</code> \u5904\u7406\u56FE\u7247\uFF0C\u5B89\u88C5</p><blockquote><p><code>url-loader</code> \u5305\u542B\u4E86<code>file-loader</code>\uFF0C\u6240\u4EE5\u53EF\u4EE5\u53EA\u4F7F\u7528 <code>url-loader</code></p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> i -D file-loader url-loader
</code></pre></div><p>\u7136\u540E\u5728 <code>webpack.config.js</code> \u4E2D\u914D\u7F6E</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>     
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>      
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpe?g|gif|webp)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;[name].[ext]&#39;</span><span class="token punctuation">,</span>
            <span class="token keyword">public</span><span class="token operator">:</span> <span class="token string">&#39;../images&#39;</span><span class="token punctuation">,</span> <span class="token comment">// css \u4E2D\u6DFB\u52A0\u8D44\u6E90\u7684\u76EE\u5F55</span>
            <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;images&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8F93\u51FA\u76EE\u5F55</span>
            <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">8192</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u8282\uFF0C\u5C0F\u4E8E 8K \u7684\u56FE\u7247\u8F6C base64</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">// \u8FD8\u662F\u4F7F\u7528 webpack 4.x \u7684\u65B9\u6CD5</span>
        <span class="token comment">// type: &#39;asset/inline&#39; // webpack 5.0 \u7684\u7528\u6CD5 \u76F8\u5F53\u4E8E url-loader</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>webpack 5.x</code> \u6539\u7528\u8D44\u6E90\u6A21\u5757(asset module)\uFF0C\u76F4\u63A5 <code>webpack.config.js</code> \u4E2D\u914D\u7F6E</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>  
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>    
    <span class="token literal-property property">assetModuleFilename</span><span class="token operator">:</span> <span class="token string">&#39;images/[hash][ext][query]&#39;</span> <span class="token comment">//  webpack 5.x \u56FE\u7247\u7B49\u8D44\u6E90\u8F93\u51FA\u76EE\u5F55</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>   
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>      
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpe?g|gif|webp)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;asset/inline&#39;</span> <span class="token comment">// webpack 5.0 \u7684\u7528\u6CD5 \u76F8\u5F53\u4E8E url-loader</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>\u53C2\u8003\uFF1A https://webpack.docschina.org/guides/asset-modules/</p></blockquote><h4 id="\u7B2C\u4E09\u65B9\u5B57\u4F53\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E09\u65B9\u5B57\u4F53\u5904\u7406" aria-hidden="true">#</a> \u7B2C\u4E09\u65B9\u5B57\u4F53\u5904\u7406</h4><p>\u5728 <code>webpack.config.js</code> \u4E2D\u914D\u7F6E</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> 
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>      
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(woff|woff2|svg|eot)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// \u4F7F\u7528 webpack 4.x \u7684\u65B9\u6CD5</span>
        <span class="token comment">// use: {</span>
        <span class="token comment">//   loader: &#39;file-loader&#39;,</span>
        <span class="token comment">//   options: {</span>
        <span class="token comment">//     name: &#39;[name].[ext]&#39;,</span>
        <span class="token comment">//     public: &#39;../fonts&#39;, // css \u4E2D\u6DFB\u52A0\u8D44\u6E90\u7684\u76EE\u5F55</span>
        <span class="token comment">//     outputPath: &#39;fonts&#39;, // \u8F93\u51FA\u76EE\u5F55</span>
        <span class="token comment">//   }</span>
        <span class="token comment">// },</span>
        <span class="token comment">// webpack 5.0 \u7684\u7528\u6CD5 \u76F8\u5F53\u4E8E file-loader</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;asset/resource&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;fonts/[hash][ext][query]&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u914D\u7F6E\u540E\uFF0C\u5373\u53EF\u5728 css \u4E2D\u4F7F\u7528</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;webfont&quot;</span><span class="token punctuation">;</span>
  <span class="token property">font-display</span><span class="token punctuation">:</span> swap<span class="token punctuation">;</span>
  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;../fonts/webfont.woff&quot;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;woff&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;webfont&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>webpack \u6587\u4EF6\u6307\u7EB9\u7B56\u7565</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
    <span class="token comment">// \u8F93\u51FA\u7684\u6587\u4EF6\u540D\u79F0, \u591A\u51FA\u53E3 name \u5BF9\u5E94 entry \u91CC\u7684: index/a</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name]-[hash:4]-[chunkhash:4]-[contenthash:4].js&#39;</span><span class="token punctuation">,</span> 
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p><code>[hash]</code> \u662F\u4EE5\u9879\u76EE\u4E3A\u5355\u4F4D\uFF0C\u9879\u76EE\u5185\u5BB9\u6539\u53D8\uFF0C\u5219\u751F\u6210 hans \u6539\u53D8 <code>[chunkhash]</code> \u4EE5 chunk \u4E3A\u5355\u4F4D\uFF0C\u4EFB\u610F\u4E00\u4E2A\u6587\u4EF6\u5185\u5BB9\u6539\u53D8\uFF0C\u5219\u6574\u4E2A chunk \u7EC4\u7684\u6A21\u5757 hash \u90FD\u6539\u53D8 <code>[contenthash]</code> \u4EE5\u81EA\u8EAB\u5185\u5BB9\u4E3A\u5355\u4F4D \u4E00\u822C\u6765\u8BF4\uFF0Ccss \u6587\u4EF6\u4F7F\u7528 <code>contenthash</code>, js \u6587\u4EF6\u4F7F\u7528 <code>chunkhash</code></p></blockquote><h4 id="\u4F7F\u7528-clean-webpack-plugin-\u6E05\u7A7A\u6784\u5EFA\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-clean-webpack-plugin-\u6E05\u7A7A\u6784\u5EFA\u76EE\u5F55" aria-hidden="true">#</a> \u4F7F\u7528 <code>clean-webpack-plugin</code> \u6E05\u7A7A\u6784\u5EFA\u76EE\u5F55</h4><p>\u5B89\u88C5</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> i -D clean-webpack-plugin
</code></pre></div><p>\u5728 <code>webpack.config.js</code> \u4E2D\u914D\u7F6E\u540E\uFF0C\u6267\u884C\u6784\u5EFA\u65F6\u4F1A\u81EA\u52A8\u6E05\u7A7A <code>dist</code> \u76EE\u5F55\u8001\u7684\u6587\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>CleanWebpackPlugin<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;clean-webpack-plugin&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u591A\u9875\u9762\u6253\u5305\u901A\u7528\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u591A\u9875\u9762\u6253\u5305\u901A\u7528\u65B9\u6848" aria-hidden="true">#</a> \u591A\u9875\u9762\u6253\u5305\u901A\u7528\u65B9\u6848</h3><p>\u9996\u5148\u9700\u8981\u89C4\u5212\u597D\u76EE\u5F55\uFF0C\u6BD4\u5982 list, index \u9875\u9762\u76EE\u5F55</p><div class="language-text ext-text"><pre class="language-text"><code>webpack-study 
|- /src
  |- /index
    |- index.html
    |- index.js
  |- /list
    |- index.html
    |- index.js
</code></pre></div><p>\u7136\u540E\u9700\u8981\u5B89\u88C5\u4E0B <code>glob</code> \u6587\u4EF6\u5339\u914D\u5DE5\u5177</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> i -D glob
</code></pre></div><p>\u65B0\u589E <code>webpack.mpa.config.js</code>, \u53EF\u4EE5\u6DFB\u52A0\u547D\u4EE4\u884C <code>&quot;mpa&quot;: &quot;webpack --config ./webpack.mpa.config.js&quot;</code> \u5230 <code>package.json</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> htmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> miniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>CleanWebpackPlugin<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;clean-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> glob <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;glob&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">setMPA</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> entry <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">const</span> htmlWebpackPlugins <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">const</span> entryFiles <span class="token operator">=</span> glob<span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./src/*/index.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


  entryFiles<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> entryFile <span class="token operator">=</span> entryFiles<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
    <span class="token keyword">const</span> match <span class="token operator">=</span> entryFile<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">src\\/(.*)\\/index\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> pageName <span class="token operator">=</span> match<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>

    entry<span class="token punctuation">[</span>pageName<span class="token punctuation">]</span> <span class="token operator">=</span> entryFile
    htmlWebpackPlugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">htmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./src/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>pageName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/index.html</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>pageName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/index.html</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>pageName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]</span><span class="token template-punctuation string">\`</span></span> <span class="token comment">// \u5BF9\u5E94 entry \u91CC\u7684: index/list</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    entry<span class="token punctuation">,</span> htmlWebpackPlugins
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>entry<span class="token punctuation">,</span> htmlWebpackPlugins<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">setMPA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  entry<span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./mpa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u8F93\u51FA\u7684\u6587\u4EF6\u76EE\u5F55\uFF0C\u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;js/[name]-[chunkhash:8].js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8F93\u51FA\u7684\u6587\u4EF6\u540D\u79F0, \u591A\u51FA\u53E3 name \u5BF9\u5E94 entry \u91CC\u7684: index/list</span>
    <span class="token literal-property property">assetModuleFilename</span><span class="token operator">:</span> <span class="token string">&#39;images/[hash][ext][query]&#39;</span> <span class="token comment">// webpack 5.x \u56FE\u7247\u7B49\u8D44\u6E90\u8F93\u51FA\u76EE\u5F55</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span> <span class="token comment">// none development production</span>
  <span class="token comment">// loader</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">//...</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// \u591A\u4E2A loader \u60C5\u51B5\u4E0B\uFF0C\u6267\u884C\u987A\u5E8F\u662F\u81EA\u540E\u5F80\u524D\u7684</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>miniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpe?g|gif|webp)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;asset/resource&#39;</span><span class="token punctuation">,</span> <span class="token comment">// webpack 5.0 \u7684\u7528\u6CD5 \u76F8\u5F53\u4E8E url-loader</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(woff|woff2|svg|eot)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// webpack 5.0 \u7684\u7528\u6CD5 \u76F8\u5F53\u4E8E file-loader</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;asset/resource&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;fonts/[hash][ext][query]&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// plugin</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>htmlWebpackPlugins<span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">miniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;css/[name]-[contenthash:4].css&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6574\u4F53\u4E0A\u5C31\u662F\u901A\u8FC7 <code>setMPA</code> \u51FD\u6570\u52A8\u6001\u751F\u6210 <code>entry</code> \u548C <code>htmlWebpackPlugins</code> \u4EE5\u8FBE\u5230\u591A\u9875\u9762\u65E0\u9700\u624B\u52A8\u914D\u7F6E</p>`,89);function t(e,o){return p}var r=s(a,[["render",t]]);export{r as default};
