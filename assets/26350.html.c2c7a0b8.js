import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u5982\u4F55\u914D\u7F6E-webpack-\u548C-babel" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u914D\u7F6E-webpack-\u548C-babel" aria-hidden="true">#</a> \u5982\u4F55\u914D\u7F6E webpack \u548C babel</h1><p>\u4F7F\u7528 webpack \u548C babel \u7684\u610F\u4E49</p><ul><li>ES6 \u6A21\u5757\u5316\uFF0C\u6D4F\u89C8\u5668\u6682\u4E0D\u652F\u6301</li><li>ES6 \u8BED\u6CD5\uFF0C\u6D4F\u89C8\u5668\u5E76\u4E0D\u5B8C\u5168\u652F\u6301</li><li>\u538B\u7F29\u4EE3\u7801\uFF0C\u6574\u5408\u4EE3\u7801\uFF0C\u4EE5\u8BA9\u7F51\u9875\u52A0\u8F7D\u66F4\u5FEB</li></ul><p>\u521D\u59CB\u5316\u4E00\u4E2A npm \u73AF\u5883\uFF0C\u751F\u6210 package.json \u6587\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u521D\u59CB\u5316 package.json \u6587\u4EF6</span>
npm init <span class="token operator">-</span>y
</code></pre></div><p>\u987A\u4FBF\u770B\u4E0B\u6700\u7EC8\u7684 package.json \u6587\u4EF6\u5185\u5BB9</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack-demo&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo &quot;</span><span class="token literal-property property">Error</span><span class="token operator">:</span> no test specified<span class="token string">&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --config webpack.prod.js&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack-dev-server --config webpack.config.js&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;@babel/core&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.6.2&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;@babel/preset-env&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.6.2&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;babel-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.0.6&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;html-webpack-plugin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.2.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;webpack&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.41.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;webpack-cli&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.3.9&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;webpack-dev-server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.8.2&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E00\u987F\u64CD\u4F5C\u731B\u5982\u864E\u5B89\u88C5 webpack \u548C babel \u5404\u79CD\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6DD8\u5B9D\u4EE3\u7406 <code>--registry=https://registry.npm.taobao.org</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5B89\u88C5 webpack</span>
npm install webpack webpack<span class="token operator">-</span>cli <span class="token operator">-</span><span class="token constant">D</span>
<span class="token comment">// \u5B89\u88C5 html-webpack-plugin\uFF0C\u7528\u4E8E\u89E3\u6790 html</span>
npm install html<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin <span class="token operator">-</span><span class="token constant">D</span>
<span class="token comment">// \u5B89\u88C5 webpack-dev-server\uFF0C\u7528\u4E8E\u542F\u52A8\u670D\u52A1</span>
npm install webpack<span class="token operator">-</span>dev<span class="token operator">-</span>server <span class="token operator">-</span><span class="token constant">D</span>
<span class="token comment">// \u5B89\u88C5 babel \u76F8\u5173\u63D2\u4EF6\uFF0C\u7528\u4E8E es6 \u8F6C es5</span>
npm install @babel<span class="token operator">/</span>core @babel<span class="token operator">/</span>preset<span class="token operator">-</span>env babel<span class="token operator">-</span>loader <span class="token operator">-</span><span class="token constant">D</span>
</code></pre></div><p>\u589E\u52A0\u4E00\u4E2A webpack.config.js \u7528\u4E8E\u5F00\u53D1\u65F6\u7684\u914D\u7F6E</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span> <span class="token comment">// node \u73AF\u5883\u7684 path</span>
<span class="token comment">// \u5F15\u5165 webpack \u89E3\u6790 html \u7684\u63D2\u4EF6</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span><span class="token comment">// \u6A21\u5F0F production</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;index.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//\u5165\u53E3\u6587\u4EF6</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u8F93\u51FA\u6587\u4EF6</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span> <span class="token comment">// build \u540E\u7684\u76EE\u5F55</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u6A21\u5757</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>  <span class="token comment">// es6 \u8F6C es5</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">include</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// \u63D2\u4EF6</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">//\u5F15\u5165\u7684\u6A21\u677F</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token comment">//\u4EA7\u751F\u7684\u6587\u4EF6</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;index.html&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// http\u670D\u52A1</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8088</span><span class="token punctuation">,</span> <span class="token comment">//\u7AEF\u53E3</span>
        <span class="token literal-property property">contentBase</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u8FD0\u884C\u7684\u6839\u76EE\u5F55</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">stats</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span> <span class="token comment">//\u89E3\u51B3 Entrypoint undefined = index.html \u7684\u9519\u8BEF</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6839\u636E webpack.config.js \u5185\u5BB9\u53EF\u77E5\uFF0C\u9700\u8981\u5728\u540C\u7EA7\u7684 src \u76EE\u5F55\u589E\u52A0 index.html\uFF0Cindex.js \u4E24\u4E2A\u6587\u4EF6\uFF0Cdist \u76EE\u5F55\u5728 build \u65F6\u4F1A\u81EA\u52A8\u751F\u6210\uFF0C\u6B64\u65F6\u6267\u884C\u547D\u4EE4</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u8FD0\u884C webpack \u5F00\u53D1\u73AF\u5883</span>
npm run dev
</code></pre></div><p>\u53EF\u4EE5\u542F\u52A8\u4E00\u4E2A webpack \u5F00\u53D1\u73AF\u5883\u670D\u52A1\uFF0C\u8BBF\u95EE\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token literal-property property">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">8088</span><span class="token operator">/</span>index<span class="token punctuation">.</span>html
</code></pre></div><p>\u7B49\u7B49\uFF0C\u5982\u679C\u9700\u8981 babel \u7684\u652F\u6301\uFF0C\u8FD8\u9700\u8981\u589E\u52A0\u4E00\u4E2A .babelrc \u6587\u4EF6\uFF0C\u914D\u7F6E babel \u73AF\u5883\u6765\u8C03\u7528 @babel/core \u63D2\u4EF6\u8F6C\u4E49 es6 \u8BED\u6CD5</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u987A\u5E26\u63D2\u5165\u4E00\u4E0B ES6 \u6A21\u5757\u5316\u89C4\u8303\u7684\u95EE\u9898\uFF0Ca.js \u6587\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fn&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zhangshan&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>b.js\u6587\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fn&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;b&#39;</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lishi&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>
    fn<span class="token punctuation">,</span>
    name<span class="token punctuation">,</span>
    obj
<span class="token punctuation">}</span>
</code></pre></div><p>c.js \u6587\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token string">&#39;b&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    a<span class="token punctuation">,</span>
    b
<span class="token punctuation">}</span>
</code></pre></div><p>\u7528 index.js \u6587\u4EF6\u6765\u8C03\u7528</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// es 6 \u8BED\u6CD5</span>
<span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
<span class="token comment">// \u89E3\u6784\u8D4B\u503C</span>
<span class="token comment">// import {fn, name, obj} from &quot;./a&quot;;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>fn<span class="token punctuation">,</span> name<span class="token punctuation">,</span> obj<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./b&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> c <span class="token keyword">from</span> <span class="token string">&#39;./c&#39;</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token comment">// b</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// lishi</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>a<span class="token punctuation">,</span> c<span class="token punctuation">.</span>b<span class="token punctuation">)</span> <span class="token comment">// {name: &quot;a&quot;} &quot;b&quot;</span>
</code></pre></div><p>\u6700\u540E\u914D\u7F6E\u4E0B webpack \u7684\u751F\u4EA7\u73AF\u5883\u7684 webpack.prod.js \u6587\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span><span class="token comment">//</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;index.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//\u5165\u53E3\u6587\u4EF6</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// contenthash \u7528\u4E8E\u751F\u6210\u7C7B\u4F3C bundle.373515fc1573230aee90.js \u7684\u6587\u4EF6</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.[contenthash].js&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span> <span class="token comment">// build \u540E\u7684\u76EE\u5F55</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>  <span class="token comment">// es6 \u8F6C es5</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">include</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">//\u5F15\u5165\u7684\u6A21\u677F</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token comment">//\u4EA7\u751F\u7684\u6587\u4EF6</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;index.html&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">stats</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span> <span class="token comment">//\u89E3\u51B3 Entrypoint undefined = index.html \u7684\u9519\u8BEF</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6700\u540E\u6267\u884C\u547D\u4EE4\uFF0C\u4F1A\u5728 dist \u76EE\u5F55\u4E2D\u751F\u6210\u6253\u5305\u540E\u7684\u6587\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u8FD0\u884C webpack \u6253\u5305</span>
npm run build
</code></pre></div>`,29);function t(o,e){return p}var r=s(a,[["render",t]]);export{r as default};
