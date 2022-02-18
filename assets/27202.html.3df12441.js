import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="webpack-\u4F18\u5316\u4EA7\u51FA\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#webpack-\u4F18\u5316\u4EA7\u51FA\u4EE3\u7801" aria-hidden="true">#</a> webpack \u4F18\u5316\u4EA7\u51FA\u4EE3\u7801</h1><p>\u4F18\u5316\u4EA7\u51FA\u4EE3\u7801</p><ul><li>\u4F53\u79EF\u66F4\u5C0F</li><li>\u5408\u7406\u5206\u5305\uFF0C\u4E0D\u91CD\u590D\u52A0\u8F7D</li><li>\u901F\u5EA6\u66F4\u5FEB\uFF0C\u5185\u5B58\u4F7F\u7528\u66F4\u5C11</li></ul><blockquote><p><strong>\u6CE8\uFF0C\u4EA7\u51FA\u4EE3\u7801\u914D\u7F6E webpack.prod.js \u6587\u4EF6</strong></p></blockquote><h4 id="_1\u3001\u5C0F\u56FE\u7247-base64-\u7F16\u7801" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u5C0F\u56FE\u7247-base64-\u7F16\u7801" aria-hidden="true">#</a> 1\u3001\u5C0F\u56FE\u7247 base64 \u7F16\u7801</h4><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
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
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_2\u3001bundle-\u52A0-hash" tabindex="-1"><a class="header-anchor" href="#_2\u3001bundle-\u52A0-hash" aria-hidden="true">#</a> 2\u3001bundle \u52A0 hash</h4><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].[contentHash:8].js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// name \u5373\u591A\u5165\u53E3\u65F6 entry \u7684 key</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>    
</code></pre></div><h4 id="_3\u3001\u61D2\u52A0\u8F7D-\u5982" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u61D2\u52A0\u8F7D-\u5982" aria-hidden="true">#</a> 3\u3001\u61D2\u52A0\u8F7D\uFF0C\u5982</h4><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./dynamic-data.js&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="_4\u3001\u63D0\u53D6\u516C\u5171\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u63D0\u53D6\u516C\u5171\u4EE3\u7801" aria-hidden="true">#</a> 4\u3001\u63D0\u53D6\u516C\u5171\u4EE3\u7801</h4><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u538B\u7F29 css</span>
        <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">TerserJSPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">OptimizeCSSAssetsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5206\u5272\u4EE3\u7801\u5757</span>
        <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span>
            <span class="token doc-comment comment">/**
             * initial \u5165\u53E3chunk\uFF0C\u5BF9\u4E8E\u5F02\u6B65\u5BFC\u5165\u7684\u6587\u4EF6\u4E0D\u5904\u7406
                async \u5F02\u6B65chunk\uFF0C\u53EA\u5BF9\u5F02\u6B65\u5BFC\u5165\u7684\u6587\u4EF6\u5904\u7406
                all \u5168\u90E8chunk
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
</code></pre></div><h4 id="_5\u3001ingoreplugin-\u5FFD\u7565\u65E0\u7528\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_5\u3001ingoreplugin-\u5FFD\u7565\u65E0\u7528\u6587\u4EF6" aria-hidden="true">#</a> 5\u3001IngorePlugin \u5FFD\u7565\u65E0\u7528\u6587\u4EF6</h4><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// \u5FFD\u7565 moment \u4E0B\u7684 /locale \u76EE\u5F55</span>
        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>IgnorePlugin</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.\\/locale</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">moment</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_6\u3001\u4F7F\u7528-cdn-\u52A0\u901F-\u56FE\u7247\u4E5F\u9700\u8981-cdn-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u4F7F\u7528-cdn-\u52A0\u901F-\u56FE\u7247\u4E5F\u9700\u8981-cdn-\u914D\u7F6E" aria-hidden="true">#</a> 6\u3001\u4F7F\u7528 CDN \u52A0\u901F\uFF0C\u56FE\u7247\u4E5F\u9700\u8981 cdn \u914D\u7F6E</h4><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;http://cdn.abc.com&#39;</span>  <span class="token comment">// \u4FEE\u6539\u6240\u6709\u9759\u6001\u6587\u4EF6 url \u7684\u524D\u7F00\uFF08\u5982 cdn \u57DF\u540D\uFF09\uFF0C\u8FD9\u91CC\u6682\u65F6\u7528\u4E0D\u5230</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_7\u3001\u4F7F\u7528-production-\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_7\u3001\u4F7F\u7528-production-\u6A21\u5F0F" aria-hidden="true">#</a> 7\u3001\u4F7F\u7528 production \u6A21\u5F0F</h4><ul><li>\u81EA\u52A8\u5F00\u542F\u4EE3\u7801\u538B\u7F29</li><li>Vue React \u7B49\u4F1A\u81EA\u52A8\u5220\u9664\u8C03\u8BD5\u4EE3\u7801\uFF08\u5982\u5F00\u53D1\u73AF\u5883\u7684 warning\uFF09</li><li>\u81EA\u52A8\u542F\u52A8 Tree-Shaking</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>1\uFF09\u4EC0\u4E48\u662F Tree-Shaking \uFF1F\u6BD4\u5982 math.js \u6709\u8FD9\u6837\u4E00\u6BB5\u4EE3\u7801</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">mult</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">*</span> b
<span class="token punctuation">}</span>
<span class="token comment">// ES6 Module \u624D\u80FD\u8BA9 tree-shaking \u751F\u6548</span>
<span class="token comment">// commonjs \u5C31\u4E0D\u884C</span>
</code></pre></div><p>\u5728 index.js \u4E2D\u53EA\u5F15\u7528 sum \u51FD\u6570</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> sum <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./math&#39;</span>
</code></pre></div><p>\u8FD9\u6837\u5728\u6253\u5305\u662F\u4F1A\u81EA\u52A8\u5220\u9664 mult \u51FD\u6570\uFF0C\u8FD9\u5C31\u662F Tree-Shaking \u529F\u80FD</p><p>2\uFF09ES6 Module \u548C Commonjs \u7684\u533A\u522B</p><ul><li>ES6 Module \u9759\u6001\u5F15\u5165\uFF0C\u7F16\u8BD1\u65F6\u5F15\u5165</li><li>Commonjs \u52A8\u6001\u5F15\u5165\uFF0C\u6267\u884C\u65F6\u5F15\u5165</li><li>\u53EA\u6709 ES6 Module \u624D\u80FD\u9759\u6001\u5206\u4EAB\uFF0C\u5B9E\u73B0 Tree-Shaking</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> apiList <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../config/api.js&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>isDev<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u53EF\u4EE5\u52A8\u6001\u5F15\u5165\uFF0C\u6267\u884C\u65F6\u5F15\u5165</span>
    apiList <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../config/api_dev.js&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">import</span> apiList <span class="token keyword">from</span> <span class="token string">&#39;../config/api.js&#39;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>isDev<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u7F16\u8F91\u65F6\u62A5\u9519\uFF0C\u53EA\u80FD\u9759\u6001\u5F15\u5165</span>
    <span class="token keyword">import</span> apiList <span class="token keyword">from</span> <span class="token string">&#39;../config/api_dev.js&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_8\u3001\u4F7F\u7528-scope-hosting" tabindex="-1"><a class="header-anchor" href="#_8\u3001\u4F7F\u7528-scope-hosting" aria-hidden="true">#</a> 8\u3001\u4F7F\u7528 Scope Hosting</h4><ul><li>\u4EE3\u7801\u4F53\u79EF\u66F4\u5C0F</li><li>\u521B\u5EFA\u51FD\u6570\u4F5C\u7528\u57DF\u66F4\u5C11</li><li>\u4EE3\u7801\u53EF\u8BFB\u6027\u66F4\u597D</li></ul><p>\u6BD4\u5982</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> d <span class="token operator">=</span> a<span class="token operator">+</span>b<span class="token operator">+</span>c<span class="token punctuation">;</span>   <span class="token comment">//\u5728webpack\u4E2D\u4F1A\u81EA\u52A8\u7701\u7565\u4E00\u4E9B\u53EF\u4EE5\u7B80\u5316\u7684\u4EE3\u7801</span>
<span class="token comment">//\u7B80\u5316\u540E\u7684\u4EE3\u7801\u5982\u4E0B\uFF1Aconsole.log(6);</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u914D\u7F6E\u542F\u7528 Scope Hosting \u529F\u80FD</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> ModuleConcatenationPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack/lib/optimize/ModuleConcatenationPlugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">smart</span><span class="token punctuation">(</span>webpackCommonConf<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token comment">// \u9488\u5BF9 NPM \u4E2D\u7B2C\u4E09\u65B9\u6A21\u5757\u4F18\u5148\u91C7\u7528 jsnext:main \u4E2D\u6307\u5411\u7684 ES6 \u6A21\u5757\u5316\u8BED\u6CD5\u7684\u6587\u4EF6</span>
        <span class="token literal-property property">mainFields</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;jsnext:main&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;browser&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;main&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// \u5F00\u542F Scope Hosting</span>
        <span class="token keyword">new</span> <span class="token class-name">ModuleConcatenationPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre></div>`,33);function t(e,o){return p}var r=s(a,[["render",t]]);export{r as default};
