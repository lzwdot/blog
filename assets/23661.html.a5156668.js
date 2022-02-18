import{h as s}from"./app.4ca8afde.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const n={},p=s(`<h1 id="\u4ECE\u96F6\u5F00\u59CB\u914D\u7F6Evue-js\u7684webpack\u5F00\u53D1\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u96F6\u5F00\u59CB\u914D\u7F6Evue-js\u7684webpack\u5F00\u53D1\u73AF\u5883" aria-hidden="true">#</a> \u4ECE\u96F6\u5F00\u59CB\u914D\u7F6Evue.js\u7684webpack\u5F00\u53D1\u73AF\u5883</h1><blockquote><p>\u8FD9\u91CC\u4F7F\u7528\u7684webpack@2.3.2 \u7248\u672C</p></blockquote><h3 id="\u5B89\u88C5webpack" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5webpack" aria-hidden="true">#</a> \u5B89\u88C5webpack</h3><p>\u9996\u5148\u9700\u8981\u4F7F\u7528npm\u6765\u521D\u59CB\u914D\u7F6E\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>cnpm init
</code></pre></div><p>\u6267\u884C\u540E\uFF0C\u4E00\u7CFB\u5217\u7684\u56DE\u8F66\u540E\uFF0C \u751F\u6210package.json\u6587\u4EF6 \uFF0C\u63A5\u7740\u5B89\u88C5 webpack@2.3.2 \u548Cwebpack-dev-server\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>cnpm install webpack@<span class="token number">2.3</span><span class="token number">.2</span> <span class="token operator">--</span>save<span class="token operator">-</span>dev
cnpm install webpack<span class="token operator">-</span>dev<span class="token operator">-</span>server@<span class="token number">2.4</span><span class="token number">.2</span> <span class="token operator">--</span>save<span class="token operator">-</span>dev
</code></pre></div><p>--save-dev\u4F1A\u4F5C\u4E3A\u5F00\u53D1\u4F9D\u8D56\u6765\u5B89\u88C5webpack\u3002\u6267\u884C\u4EE5\u4E0A\u64CD\u4F5C\u7684package.json\u6587\u4EF6\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo &quot;</span><span class="token literal-property property">Error</span><span class="token operator">:</span> no test specified<span class="token string">&quot; &amp;&amp; exit 1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;webpack&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.3.2&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;webpack-dev-server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.4.2&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre></div><h3 id="\u914D\u7F6Ewebpack" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Ewebpack" aria-hidden="true">#</a> \u914D\u7F6Ewebpack</h3><p>\u65B0\u5EFAwebpack.config.js\u6587\u4EF6\u7528\u6765\u4F5C\u4E3Awebpack\u914D\u7F6E\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span><span class="token punctuation">{</span>  <span class="token comment">//\u5165\u53E3main.js\u6587\u4EF6</span>
        <span class="token literal-property property">main</span><span class="token operator">:</span><span class="token string">&#39;./main&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//\u6253\u5305\u540E</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;./dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">publicPath</span><span class="token operator">:</span><span class="token string">&#39;/dist/&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">&#39;main.js&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports<span class="token operator">=</span>config  
</code></pre></div><p>\u4EE5\u4E0Awebpack\u914D\u7F6E\u6587\u4EF6\u6700\u91CD\u8981\u7684\u4E24\u9879\u5C31\u662Fentry\u548Coutput\uFF0C\u5728entry\u4E2D\u7684main.js\u662F\u914D\u7F6E\u7684\u5165\u53E3\u6587\u4EF6\uFF0Coutput\u4E2D\u7684main.js\u5219\u662F\u6253\u5305\u540E\u7684\u6587\u4EF6\u3002\u6240\u4EE5\uFF0C\u8FD8\u9700\u8981\u4E00\u4E2A\u7A7A\u7684main.js\u5165\u53E3\u6587\u4EF6\uFF0C\u73B0\u5728\uFF0C\u6211\u4EEC\u628Awebpack\u4E0Enpm\u73AF\u5883\u8054\u7CFB\u8D77\u6765\uFF0C\u5728package.json\u4E2D\u6DFB\u52A0webpack-dev-server\u542F\u52A8\u811A\u672C\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo &quot;</span><span class="token literal-property property">Error</span><span class="token operator">:</span> no test specified<span class="token string">&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack-dev-server --open --config webpack.config.js&quot;</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span> 
</code></pre></div><p>\u81F3\u6B64\uFF0C\u6211\u4EEC\u7684\u914D\u7F6E\u5C31\u5B8C\u6210\u4E86\uFF0C\u4E0B\u9762\u5EFA\u4E00\u4E2Aindex.html\u6587\u4EF6\u4F5C\u4E3A\u9879\u76EE\u7684\u5165\u53E3\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">&quot;X-UA-Compatible&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;ie=edge&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>webpack<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span>
        hello world
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;/dist/main.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span> 
</code></pre></div><p>\u6267\u884C\u542F\u52A8\u547D\u4EE4\u540E\uFF0C\u4F1A\u81EA\u52A8\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u9875\u9762\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>cnpm run dev
</code></pre></div><p>\u5982\u679C\u4F60\u6210\u529F\u6253\u5F00\u4E00\u4E2A hello world\u7684\u9875\u9762\uFF0C\u90A3\u4E48\u4F60\u5DF2\u7ECF\u5B8C\u6210\u4E86\u6574\u4E2A\u5DE5\u4F5C\u6700\u91CD\u8981\u7684\u4E00\u6B65\u4E86\u3002</p><h3 id="\u52A0\u5165css\u5904\u7406\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u52A0\u5165css\u5904\u7406\u914D\u7F6E" aria-hidden="true">#</a> \u52A0\u5165css\u5904\u7406\u914D\u7F6E</h3><p>\u5904\u7406css\u7B49\u6837\u5F0F\u6587\u4EF6\u5C31\u9700\u8981\u7528\u5230style-loader\u548Ccss-loader\uFF0C\u6240\u4EE5\u9700\u8981\u5B89\u88C5\u548C\u914D\u7F6E\u5B83\u4EEC\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>cnpm install css<span class="token operator">-</span>loader <span class="token operator">--</span>save<span class="token operator">-</span>dev
cnpm install style<span class="token operator">-</span>loader <span class="token operator">--</span>save<span class="token operator">-</span>dev
cnpm install extract<span class="token operator">-</span>text<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin@<span class="token number">2.1</span><span class="token number">.2</span> <span class="token operator">--</span><span class="token operator">-</span>save<span class="token operator">-</span>dev<span class="token operator">--</span>save<span class="token operator">-</span>dev
</code></pre></div><p>\u5229\u7528extract-text-webpack-plugin\u6765\u542F\u7528webpack\u7684\u63D2\u4EF6\u529F\u80FD\u3002\u5728wepack.config.js\u4E2D\u6DFB\u52A0css\u5904\u7406\u914D\u7F6E\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> ExtractTextPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;extract-text-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span> <span class="token comment">//\u5904\u7406css\u6587\u4EF6</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span>ExtractTextPlugin<span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                    <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">fallback</span><span class="token operator">:</span><span class="token string">&#39;style-loader&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token comment">//\u6253\u5305\u751F\u6210\u7684css\u6587\u4EF6</span>
        <span class="token keyword">new</span> <span class="token class-name">ExtractTextPlugin</span><span class="token punctuation">(</span><span class="token string">&#39;main.css&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports<span class="token operator">=</span>config 
</code></pre></div><p>\u4E0B\u9762\u6211\u4EEC\u6DFB\u52A0\u4E00\u4E2Astyle.css\u6587\u4EF6\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>#app<span class="token punctuation">{</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 24px<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #f50<span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>\u5E76\u5728main.js\u4E2D\u901A\u8FC7 import \u5F15\u5165\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;./style.css&#39;</span><span class="token punctuation">;</span> 
</code></pre></div><p>\u4F7F\u7528 cnpm run dev \u547D\u4EE4\u91CD\u542F\u670D\u52A1\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2D\u53EF\u4EE5\u770B\u5230\u901A\u8FC7<link>\u5F15\u5165\u7684main.css\u6587\u4EF6\u751F\u6548\uFF0C\u9875\u9762\u7684 hello world\u4E5F\u53D8\u5927\u53D8\u7EA2\u3002</p><h3 id="\u5B89\u88C5vue\u76F8\u5173\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5vue\u76F8\u5173\u4F9D\u8D56" aria-hidden="true">#</a> \u5B89\u88C5vue\u76F8\u5173\u4F9D\u8D56</h3><p>\u5904\u7406.vue\u540E\u7F00\u6587\u4EF6\u548CES6\u8BED\u8A00\u8F6C\u6362\u7B49\uFF0C\u9700\u8981\u5B89\u88C5\u76F8\u5E94\u7684\u4F9D\u8D56\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev vue
cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev vue<span class="token operator">-</span>loader
cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev vue<span class="token operator">-</span>style<span class="token operator">-</span>loader
cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev vue<span class="token operator">-</span>template<span class="token operator">-</span>compiler
cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev vue<span class="token operator">-</span>hot<span class="token operator">-</span>reload<span class="token operator">-</span>api
cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev babel
cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev babel<span class="token operator">-</span>loader@<span class="token number">7.1</span><span class="token number">.5</span>
cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev babel<span class="token operator">-</span>core
cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev babel<span class="token operator">-</span>plugin<span class="token operator">-</span>transform<span class="token operator">-</span>runtime
cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev babel<span class="token operator">-</span>preset<span class="token operator">-</span>es2015
cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev babel<span class="token operator">-</span>runtime 
</code></pre></div><p>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u914D\u7F6Ewebpack.config.js\u6765\u652F\u6301.vue\u6587\u4EF6\u548CES6\u7684\u89E3\u6790\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ExtractTextPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;extract-text-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> VueLoaderPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-loader/lib/plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">main</span><span class="token operator">:</span><span class="token string">&#39;./main&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;./dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">publicPath</span><span class="token operator">:</span><span class="token string">&#39;/dist/&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">&#39;main.js&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">&#39;vue-loader&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token literal-property property">loaders</span><span class="token operator">:</span><span class="token punctuation">{</span>
                        <span class="token literal-property property">css</span><span class="token operator">:</span>ExtractTextPlugin<span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                            <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">fallback</span><span class="token operator">:</span><span class="token string">&#39;vue-style-loader&#39;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">exclude</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span>ExtractTextPlugin<span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                    <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">fallback</span><span class="token operator">:</span><span class="token string">&#39;style-loader&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">ExtractTextPlugin</span><span class="token punctuation">(</span><span class="token string">&#39;main.css&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">VueLoaderPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports<span class="token operator">=</span>config 
</code></pre></div><p>\u65B0\u5EFA\u4E00\u4E2A.babelrc\u7684\u914D\u7F6E\u6587\u4EF6\uFF0Cwebpack\u4F1A\u6839\u636E\u6B64\u914D\u7F6E\u6765\u4F7F\u7528babel\u7F16\u8BD1ES6\u7684\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;presets&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;es2015&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;transform-runtime&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;comments&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>\u914D\u7F6E\u597D\u8FD9\u4E9B\u540E\uFF0C\u73B0\u5728\u5C31\u53EF\u4EE5\u4F7F\u7528.vue\u6587\u4EF6\u4E86\u3002\u73B0\u5728\u521B\u5EFA\u4E00\u4E2Aapp.vue\u6587\u4EF6\u5E76\u5199\u5165\u5185\u5BB9\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        hello <span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;vue.js&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
    div<span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> #f60<span class="token punctuation">;</span>
        font<span class="token operator">-</span>size<span class="token operator">:</span>24px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span> 
</code></pre></div><p>\u5199\u597D\u4E86\u7EC4\u4EF6\u540E\uFF0C\u5C31\u53EF\u4EE5\u5728\u5165\u53E3\u6587\u4EF6main.js\u4E2D\u4F7F\u7528\u5B83\uFF0C\u6253\u5F00main.js\u6587\u4EF6\uFF0C\u66FF\u6362\u6210\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App  <span class="token keyword">from</span> <span class="token string">&#39;./app.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span><span class="token parameter">h</span><span class="token operator">=&gt;</span><span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> 
</code></pre></div><p>\u91CD\u542F\u670D\u52A1\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2D\u53EF\u4EE5\u770B\u5230\u9875\u9762\u7684 <code>&lt;div id=&quot;app&quot;&gt;</code> \u5DF2\u7ECF\u88AB\u7EC4\u4EF6\u66FF\u6362\u4E86\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div data<span class="token operator">-</span>v<span class="token operator">-</span>381730fa<span class="token operator">&gt;</span>hello vue<span class="token punctuation">.</span>js<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span> 
</code></pre></div><p>\u5BF9\u5E94\u7684main.css\u4E3A\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>div<span class="token punctuation">[</span>data<span class="token operator">-</span>v<span class="token operator">-</span>381730fa<span class="token punctuation">]</span><span class="token punctuation">{</span>
     <span class="token literal-property property">color</span><span class="token operator">:</span> #f60<span class="token punctuation">;</span>
     font<span class="token operator">-</span>size<span class="token operator">:</span>24px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u7528\u4E8E\u751F\u4EA7\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u7528\u4E8E\u751F\u4EA7\u73AF\u5883" aria-hidden="true">#</a> \u7528\u4E8E\u751F\u4EA7\u73AF\u5883</h3><p>\u5B89\u88C5url-loader\u548Cfile-loader\u6765\u5904\u7406\u56FE\u7247\uFF0C\u5B57\u4F53\u7B49\u6587\u4EF6\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev url<span class="token operator">-</span>loader
cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev file<span class="token operator">-</span>loader
</code></pre></div><p>\u5728webpack.config.js\u6DFB\u52A0\u914D\u7F6E\uFF0C?limit=1024\u662F\u6307\u6587\u4EF6\u5C0F\u4E8E1kb\uFF0C\u5C31\u4EE5base64\u7684\u5F62\u5F0F\u52A0\u8F7D\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token comment">//...</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.(gif|jpg|png|woff|svg|eot|ttf)??.*$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">&#39;url-loader?limit=1024&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
           <span class="token comment">//..</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> 
</code></pre></div><p>\u653E\u7F6E\u4E00\u5F20\u56FE\u7247./images/image.png\uFF0C\u5E76\u5728app.vue\u4E2D\u52A0\u8F7D\u5B83\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code> <span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        hello <span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;/./images/image.gif&quot;</span> alt<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre></div><p>\u91CD\u542F\u670D\u52A1\u540E\uFF0C\u6D4F\u89C8\u5668\u9875\u9762\u4E0A\u5C06\u663E\u793A\u56FE\u7247\uFF0C\u5F53\u7136\uFF0C\u8FD9\u53EA\u662F\u6D4B\u8BD5\uFF0C\u66F4\u91CD\u8981\u7684\u662F\u628A\u6240\u6709\u7684\u9759\u6001\u8D44\u6E90\u6253\u5305\u538B\u7F29\u3002\u9700\u8981\u5B89\u88C5\u4E0B\u9762\u4E24\u4E2A\u4F9D\u8D56\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev webpack<span class="token operator">-</span>merge
cnpm install <span class="token operator">--</span>save<span class="token operator">-</span>dev html<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin
</code></pre></div><p>\u4E3A\u4E86\u65B9\u4FBF\u5F00\u53D1\u548C\u751F\u4EA7\u73AF\u5883\u5207\u6362\uFF0C\u6211\u4EEC\u65B0\u5EFA\u4E00\u4E2Awebpack.prod.config.js\u914D\u7F6E\u6587\u4EF6\uFF0C\u5E76\u5728package.json\u4E2D\u52A0\u5165\u4E00\u4E2Abuild\u7684\u811A\u672C\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo &quot;</span><span class="token literal-property property">Error</span><span class="token operator">:</span> no test specified<span class="token string">&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack-dev-server --open --config webpack.config.js&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --progress --hide-modules --config webpack.prod.config.js&quot;</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span> 
</code></pre></div><p>\u5148\u6765\u770B\u4E0Bwebpack.prod.config.js\u7684\u914D\u7F6E\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> webpack<span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> HtmlwebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ExtractTextPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;extract-text-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> merge <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-merge&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> webpackBaseConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./webpack.config.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> VueLoaderPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-loader/lib/plugin&#39;</span><span class="token punctuation">)</span>
<span class="token comment">//\u6E05\u7A7A\u57FA\u672C\u914D\u7F6E\u7684\u63D2\u4EF6\u5217\u8868</span>
webpackBaseConfig<span class="token punctuation">.</span>plugins<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>webpackBaseConfig<span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">publicPath</span><span class="token operator">:</span><span class="token string">&#39;/dist/&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">//\u5C06\u5165\u53E3\u6587\u4EF6main.js\u91CD\u547D\u540D\u4E3Ahash\u503C\u7684\u6587\u4EF6\u540D</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">&#39;[name].[hash].js&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">ExtractTextPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">&#39;[name].[hash].css&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">allChunks</span><span class="token operator">:</span><span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">//\u5B9A\u4E49\u5F53\u524Dnode\u73AF\u5883\u4E3A\u751F\u4EA7\u73AF\u5883</span>
        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token string-property property">&#39;p<wbr>rocess.env&#39;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token constant">NODE_ENV</span><span class="token operator">:</span><span class="token string">&#39;&quot;production&quot;&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">//\u538B\u7F29js</span>
        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>UglifyJsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">compress</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">warnings</span><span class="token operator">:</span><span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">//\u63D0\u53D6\u6A21\u677F\uFF0C\u5E76\u4FDD\u5B58\u5165\u53E3 html\u6587\u4EF6</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlwebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">&#39;../index_prod.html&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">&#39;./index.ejs&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">inject</span><span class="token operator">:</span><span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">//\u52A0\u8F7Dvue\u76F8\u5173\u63D2\u4EF6</span>
        <span class="token keyword">new</span> <span class="token class-name">VueLoaderPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> 
</code></pre></div><p>\u4ECE\u4E0A\u9762\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u53EF\u4EE5\u770B\u51FA\uFF0C\u8FD8\u9700\u8981\u4E00\u4E2Aindex.ejs\u7684\u6A21\u677F\u6587\u4EF6\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Webpack App<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">&quot;stylesheet&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;&lt;%= htmlWebpackPlugin.files.css[0] %&gt;&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;&lt;%= htmlWebpackPlugin.files.js[0] %&gt;&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre></div><p>\u6700\u540E\u6267\u884C\u6253\u5305\u547D\u4EE4\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>cnpm run bulid
</code></pre></div><p>\u4F1A\u751F\u6210\u4E00\u4E2Adist\u7684\u76EE\u5F55\uFF08\u5305\u542B\u9759\u6001\u8D44\u6599\uFF09\u548Cindex_prod.html\u6587\u4EF6\uFF0C\u5728\u6D4F\u89C8\u5668\u901A\u8FC7\u8BBF\u95EE\u4E00\u4E0B\u94FE\u63A5\u5373\u53EF\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token literal-property property">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">8080</span><span class="token operator">/</span>index_prod<span class="token punctuation">.</span>html 
</code></pre></div><p>\u597D\u4E86\uFF0Cvue.js\u7684webpack\u5F00\u53D1\u73AF\u5883\u57FA\u672C\u914D\u7F6E\u5C31\u662F\u8FD9\u6837\u5B50\u4E86\u3002</p>`,64);function t(o,e){return p}var l=a(n,[["render",t]]);export{l as default};
