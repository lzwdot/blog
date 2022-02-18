import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/blog/assets/webpack-20211231143117.db5179d4.png";const p={},t=n(`<h1 id="webpack-\u6027\u80FD\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#webpack-\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a> webpack \u6027\u80FD\u4F18\u5316</h1><h3 id="\u5F00\u542F-sourcemap" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F-sourcemap" aria-hidden="true">#</a> \u5F00\u542F <code>sourcemap</code></h3><p>\u914D\u7F6E <code>devtool</code> \u4E3A <code>sourcemap</code> \u5FEB\u719F\u5B9A\u4F4D\u9519\u8BEF\u4EE3\u7801\u6E90\u6587\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token comment">// \u751F\u4EA7\u73AF\u5883\u662F\u5426\u5F00\u542F\uFF0C\u6839\u636E\u5177\u4F53\u9700\u8981\uFF0C\u4E00\u628A\u5982\u679C\u6709\u76D1\u63A7\u7CFB\u7EDF\uFF0C\u5EFA\u8BAE\u5F00\u542F</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&#39;source-map&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u6837\u5165\u53E3 <code>index.js</code> \u5C31\u4F1A\u751F\u4EA7\u540C\u6837\u7684\u6620\u5C04\u5173\u7CFB\u6587\u4EF6 <code>index.js.map</code></p><blockquote><p>\u5177\u4F53\u914D\u7F6E\u53C2\u8003\uFF1Ahttps://webpack.docschina.org/configuration/devtool/#devtool</p></blockquote><h3 id="\u4F7F\u7528-webpack-dev-server-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-webpack-dev-server-\u670D\u52A1" aria-hidden="true">#</a> \u4F7F\u7528 <code>webpack-dev-server</code> \u670D\u52A1</h3><p>\u63D0\u9AD8\u672C\u5730\u5F00\u53D1\u6548\u7387\uFF1A\u70ED\u66F4\u65B0\uFF0C\u672C\u5730\u6570\u636E mock</p><p>\u914D\u7F6E <code>package.json</code> \u4F7F\u7528 <code>webpack-dev-server</code></p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>   
    <span class="token property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack-dev-server&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7136\u540E\u5728 <code>wepack.config.js</code> \u914D\u7F6E</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8081</span><span class="token punctuation">,</span> <span class="token comment">// \u7AEF\u53E3</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u672C\u5730\u6570\u636E mock \u6D4B\u8BD5\uFF0C\u5B89\u88C5 express \u548C axois</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> i -D express axios
</code></pre></div><p>\u65B0\u5EFA\u6839\u76EE\u5F55\u6587\u4EF6 <code>server.js</code>, \u6267\u884C <code>node server.js</code> \u5F00\u542F\u670D\u52A1\u7AEF</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/info&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;webpack&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token string">&#39;8090&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5728\u5165\u53E3 <code>index.js</code> \u4E2D\u6D4B\u8BD5</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/info&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6B64\u65F6\u4F1A\u62A5\u9519\uFF0C\u8FD8\u9700\u8981\u914D\u7F6E\u4EE3\u7406\u8BBF\u95EE\uFF0C\u5728 <code>wepack.config.js</code> \u914D\u7F6E</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u4EE3\u7406\u8BBF\u95EE</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:8090/&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="babel-\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#babel-\u5DE5\u5177" aria-hidden="true">#</a> <code>babel</code> \u5DE5\u5177</h3><p>\u7528\u4E8E\u7F16\u8BD1 js \u7684\uFF0C\u9ED8\u8BA4\u652F\u6301 js, json \u6A21\u5757\uFF0C\u5BF9\u4E8E\u76EE\u6807\u6D4F\u89C8\u5668\uFF0C\u6211\u4EEC\u9700\u8981\u8F6C\u6362\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>flow -&gt; js
jsx -&gt; js
ts -&gt; js
es6+ -&gt; js
</code></pre></div><p>\u90A3\u4E48\u8D70\u8D77\uFF0C\u9996\u5148\u5B89\u88C5 <code>babel</code> \u5DE5\u5177</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> i -D babel-loader @babel/core @babel/preset-env @babel/polyfill core-js
</code></pre></div><blockquote><p>babel v7 \u4E4B\u540E\uFF0C\u90FD\u662F\u4EE5 <code>@babel</code> \u5F00\u5934\u7684\u4ED3\u5E93<br><code>@babel/preset-env</code> \u53EA\u505A\u8BED\u6CD5\u8F6C\u6362\uFF0Ces6+ -&gt; es5<br><code>@babel/polyfill</code> \u5305\u542B ecma \u65B0\u7279\u6027\u7684\u5E93\uFF0C\u53EF\u4EE5\u4F7F\u65E7\u6D4F\u89C8\u5668\u652F\u6301\u539F\u751F\u8F83\u65B0\u7684\u529F\u80FD</p></blockquote><p>\u5728 <code>wepack.config.js</code> \u914D\u7F6E\u4F7F\u7528</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">]</span> 
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u4F7F\u7528 <code>polyfill</code> \u57AB\u7247</strong></p><p>\u6BD4\u5982\u5728\u5165\u53E3\u6587\u4EF6 <code>index.js</code> \u6DFB\u52A0</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&quot;@babel/polyfill&quot;</span><span class="token punctuation">;</span> <span class="token comment">// require(&quot;@babel/polyfill&quot;);</span>
</code></pre></div><blockquote><p>\u4ECE Babel 7.4.0 \u5F00\u59CB\u76F4\u63A5\u5305\u542B <code>core-js/stable</code>\uFF08\u4EE5 polyfill ECMAScript \u529F\u80FD\uFF09\u548C<code>regenerator-runtime/runtime</code>\uFF08\u9700\u8981\u4F7F\u7528\u8F6C\u8BD1\u7684\u751F\u6210\u5668\u51FD\u6570\uFF09</p></blockquote><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&quot;core-js/stable&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;regenerator-runtime/runtime&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p>\u914D\u7F6E <code>polyfill</code> \u6309\u9700\u52A0\u8F7D</p><blockquote><p>\u76EE\u524D\u8FD8\u662F\u63A8\u8350\u4F7F\u7528 <code>@babel/polyfill</code> + <code>core-js 2.x</code>, <code>core-js 3.x</code> \u65B0\u529F\u80FD\u6682\u65F6\u7528\u4E0D\u4E0A\uFF0C\u5F15\u5165\u592A\u5927</p></blockquote><p>\u5728 <code>wepack.config.js</code> \u914D\u7F6E\u4F7F\u7528</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">[</span>
                 <span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u53EA\u505A\u8BED\u6CD5\u8F6C\u6362\uFF0Ces6+ -&gt; es5</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u7C7B\u4F3C browserslist \u53EF\u4EE5\u5199\u6210  &quot;targets&quot;: &quot;&gt; 0.25%, not dead&quot;</span>
                    <span class="token literal-property property">edge</span><span class="token operator">:</span> <span class="token string">&#39;17&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">firefox</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">&#39;67&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">safari</span><span class="token operator">:</span> <span class="token string">&#39;11&#39;</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">corejs</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// \u65B0\u7248\u672C\u9700\u8981\u6307\u5B9A\u6838\u5FC3\u5E93\u7248\u672C\uFF0C3.x \u7248\u672C\u592A\u5927\u4E86</span>
                  <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">&#39;usage&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6309\u9700\u52A0\u8F7D entry/usage/false</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">]</span>
            <span class="token punctuation">]</span> 
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>useBuiltIns</code> \u9009\u9879\u65F6 <code>babel 7</code> \u7684\u65B0\u529F\u80FD\uFF0C\u8FD9\u4E2A\u9009\u9879\u544A\u8BC9 babel \u5982\u4F55\u914D\u7F6E <code>@babel/polyfill</code></p><ul><li><code>entry</code> \u5728 webpack \u5165\u53E3\u6587\u4EF6 <code>import &quot;@babel/polyfill&quot;</code> \u4E00\u6B21\uFF0Cbabel \u4F1A\u6839\u636E\u4F60\u7684\u4F7F\u7528\u60C5\u51B5\u5BFC\u5165 <code>polyfill</code> \u57AB\u7247\uFF0C\u6CA1\u6709\u4F7F\u7528\u7684\u529F\u80FD\u4E0D\u4F1A\u5BFC\u5165</li><li><code>usage</code> \u4E0D\u9700\u8981\u5F15\u5165\uFF0C\u5168\u81EA\u52A8\u68C0\u6D4B\uFF0C\u8FD8\u662F\u9700\u8981\u5B89\u88C5 <code>@babel/polyfill</code></li><li><code>false</code> \u4F7F\u7528 <code>import &quot;@babel/polyfill&quot;</code> \u4F1A\u5168\u90E8\u52A0\u8F7D\uFF08\u4E0D\u63A8\u8350\uFF09</li></ul><p>\u4EE5\u4E0A\u914D\u5408\u5BFC\u81F4\u914D\u7F6E\u6587\u4EF6\u8D8A\u6765\u8D8A\u957F\uFF0C\u53EF\u4EE5\u6839\u76EE\u5F55\u65B0\u5EFA <code>.babelrc</code> \uFF08\u6216 <code>babel.config.js</code>\uFF09\u6587\u4EF6\uFF0C\u628A\u4E0A\u9762\u7684 <code>options</code> \u914D\u7F6E\u653E\u8FDB\u6765</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u53EA\u505A\u8BED\u6CD5\u8F6C\u6362\uFF0Ces6+ -&gt; es5</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;targets&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u7C7B\u4F3C browserslist \u53EF\u4EE5\u5199\u6210  &quot;targets&quot;: &quot;&gt; 0.25%, not dead&quot;</span>
          <span class="token string-property property">&quot;edge&quot;</span><span class="token operator">:</span> <span class="token string">&#39;17&#39;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;firefox&quot;</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;chrome&quot;</span><span class="token operator">:</span> <span class="token string">&#39;67&#39;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;safari&quot;</span><span class="token operator">:</span> <span class="token string">&#39;11&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;corejs&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token comment">// \u65B0\u7248\u672C\u9700\u8981\u6307\u5B9A\u6838\u5FC3\u5E93\u7248\u672C\uFF0C3.x \u7248\u672C\u592A\u5927\u4E86</span>
        <span class="token string-property property">&quot;useBuiltIns&quot;</span><span class="token operator">:</span> <span class="token string">&#39;usage&#39;</span>
        <span class="token comment">// \u6309\u9700\u52A0\u8F7D entry/usage/false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u914D\u7F6E\u6587\u4EF6 <code>wepack.config.js</code> \u5C31\u7B80\u5316\u4E86</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span>          
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u6837\u7684\u6548\u679C\u4E00\u6837\u7684</p><h3 id="\u96C6\u6210-react-\u6846\u67B6" tabindex="-1"><a class="header-anchor" href="#\u96C6\u6210-react-\u6846\u67B6" aria-hidden="true">#</a> \u96C6\u6210 <code>react</code> \u6846\u67B6</h3><p>\u9996\u5148\u5B89\u88C5 react \u6846\u67B6\u548C\u4F9D\u8D56</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> i -D react react-dom @babel/preset-react
</code></pre></div><p>\u5728 <code>.babelrc</code> \u4E2D\u914D\u7F6E</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;@babel/preset-react&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5165\u53E3\u6587\u4EF6 <code>index.js</code> \u6D4B\u8BD5\u4EE3\u7801</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>Component<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDom <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span><span class="token punctuation">{</span>
 <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span> helle world <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDom<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App<span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><p>\u8FD0\u884C <code>npm run dev</code>\uFF0C\u6253\u5F00 <code>/dist/index.html</code> \u663E\u793A <code>hello world</code></p><blockquote><p>\u5982\u679C\u50CF\u96C6\u6210 vuejs \u53EF\u4EE5\u53C2\u8003: https://vue-loader.vuejs.org/zh/guide/</p></blockquote><h3 id="\u5982\u4F55\u7F16\u5199\u4E00\u4E2A-plugin" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u7F16\u5199\u4E00\u4E2A-plugin" aria-hidden="true">#</a> \u5982\u4F55\u7F16\u5199\u4E00\u4E2A plugin</h3><p><code>webpack</code> \u751F\u547D\u5468\u671F\u6982\u5FF5</p><p>-&gt; \u542F\u52A8 webpack -&gt; \u8BFB\u53D6\u914D\u7F6E\uFF08A \u63D2\u4EF6\u544A\u77E5 webpack \u8FD0\u884C\u5230\u54EA\u4E2A\u9636\u6BB5\u89E6\u53D1 A)</p><p>\u5728\u5165\u53E3 <code>index.js</code> \u4E2D\u653E\u5165\u4E00\u6BB5\u4EE3\u7801</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../webpack.config&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> compiler <span class="token operator">=</span> <span class="token function">webpack</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token comment">// compiler.hooks</span>

Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">hookName</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">[</span>hookName<span class="token punctuation">]</span><span class="token punctuation">.</span>tap<span class="token punctuation">)</span><span class="token punctuation">{</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">[</span>hookName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&#39;anyString&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">run -&gt; </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>hookName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

compiler<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6267\u884C <code>node ./src/index.js</code> \u6253\u5370\u51FA webpack \u6240\u6709\u7684\u751F\u547D\u94A9\u5B50</p><div class="language-bash ext-sh"><pre class="language-bash"><code>D:<span class="token punctuation">\\</span>www<span class="token punctuation">\\</span>codepress<span class="token punctuation">\\</span>webpack<span class="token operator">&gt;</span>node ./src/index.js
run -<span class="token operator">&gt;</span> beforeRun
run -<span class="token operator">&gt;</span> run
run -<span class="token operator">&gt;</span> normalModuleFactory
run -<span class="token operator">&gt;</span> contextModuleFactory
run -<span class="token operator">&gt;</span> beforeCompile
run -<span class="token operator">&gt;</span> compile
run -<span class="token operator">&gt;</span> thisCompilation
run -<span class="token operator">&gt;</span> compilation
run -<span class="token operator">&gt;</span> <span class="token function">make</span>
run -<span class="token operator">&gt;</span> normalModuleFactory
run -<span class="token operator">&gt;</span> contextModuleFactory
run -<span class="token operator">&gt;</span> beforeCompile
run -<span class="token operator">&gt;</span> compilation
run -<span class="token operator">&gt;</span> finishMake
run -<span class="token operator">&gt;</span> afterCompile
<span class="token punctuation">[</span>BABEL<span class="token punctuation">]</span> Note: The code generator has deoptimised the styling of D:<span class="token punctuation">\\</span>www<span class="token punctuation">\\</span>codepress<span class="token punctuation">\\</span>webpack<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>lodash<span class="token punctuation">\\</span>lodash.js as it exceeds the max
 of 500KB.
<span class="token punctuation">[</span>BABEL<span class="token punctuation">]</span> Note: The code generator has deoptimised the styling of D:<span class="token punctuation">\\</span>www<span class="token punctuation">\\</span>codepress<span class="token punctuation">\\</span>webpack<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>terser<span class="token punctuation">\\</span>dist<span class="token punctuation">\\</span>bundle.min.js as it exceed
s the max of 500KB.
run -<span class="token operator">&gt;</span> finishMake
run -<span class="token operator">&gt;</span> afterCompile
run -<span class="token operator">&gt;</span> shouldEmit
run -<span class="token operator">&gt;</span> emit
run -<span class="token operator">&gt;</span> assetEmitted
run -<span class="token operator">&gt;</span> assetEmitted
run -<span class="token operator">&gt;</span> assetEmitted
run -<span class="token operator">&gt;</span> afterEmit
run -<span class="token operator">&gt;</span> <span class="token keyword">done</span>
run -<span class="token operator">&gt;</span> afterDone
</code></pre></div><p><img src="`+a+`" alt="webpack"></p><p>\u5B8C\u6574\u53C2\u8003\uFF1Ahttps://webpack.docschina.org/api/compiler-hooks/#hooks</p><p>\u6839\u76EE\u5F55\u65B0\u5EFA <code>myPlugins/txt-webpack-plugin.js</code> \u63D2\u4EF6\u6587\u4EF6\uFF0C\u7F16\u5199\u63D2\u4EF6\u5185\u5BB9</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u63D2\u4EF6\u7684\u7ED3\u6784</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">texWebpackPlugin</span> <span class="token punctuation">{</span>
  <span class="token comment">// apply</span>
  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u94A9\u5165 hooks</span>

    <span class="token comment">// \u5F02\u6B65\u94A9\u5B50\u4F7F\u7528 tapAsync</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span><span class="token string">&#39;texWebpackPlugin&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// console.log(compilation.assets)</span>

      compilation<span class="token punctuation">.</span>assets<span class="token punctuation">[</span><span class="token string">&#39;lzw.txt&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">source</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token string">&#39;hello lzw.&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">size</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token number">1024</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// \u540C\u6B65\u94A9\u5B50\u4F7F\u7528 tap, \u6CA1\u6709 cb \u4E86</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>compile<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&#39;texWebpackPlugin&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>compilation<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7136\u540E\u5C31\u53EF\u4EE5\u5728 <code>wepack.config.js</code> \u4E2D\u4F7F\u7528</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> texWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./myPlugins/txt-webpack-plugin&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">texWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD0\u884C <code>npm run dev</code>\uFF0C\u7ED3\u679C\u4F1A\u751F\u6210 <code>/dist/lzw.txt</code> \u6587\u4EF6</p>`,67);function o(e,c){return t}var u=s(p,[["render",o]]);export{u as default};
