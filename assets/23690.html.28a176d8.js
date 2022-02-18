import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u4F7F\u7528node-js\u7684request\u5E93\u505A\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528node-js\u7684request\u5E93\u505A\u4EE3\u7406" aria-hidden="true">#</a> \u4F7F\u7528Node.js\u7684request\u5E93\u505A\u4EE3\u7406</h1><p>\u9996\u5148\u5B89\u88C5 request \u548C axios\u4F9D\u8D56\uFF0C axios \u7528\u4F5Cajax\u8BF7\u6C42\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>cnpm install request <span class="token operator">--</span>save<span class="token operator">-</span>div
cnpm install axios <span class="token operator">--</span>save   
</code></pre></div><p>\u5B8C\u6210\u5B89\u88C5\u540E\uFF0C\u5728\u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFAproxy.js\u7684\u6587\u4EF6\uFF0C\u914D\u7F6E\u4EE3\u7406\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;request&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> hostname <span class="token operator">=</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">8010</span><span class="token punctuation">;</span>
<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A API \u4EE3\u7406\u670D\u52A1</span>
<span class="token keyword">const</span> apiServer <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">&#39;http://news-at.zhihu.com/api/4&#39;</span> <span class="token operator">+</span> req<span class="token punctuation">.</span>url<span class="token punctuation">;</span>
    <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> url
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">callback</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> response<span class="token punctuation">,</span> body</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>error <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>statusCode <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u8BBE\u7F6E\u7F16\u7801\u7C7B\u578B\uFF0C\u5426\u5219\u4E2D\u6587\u4F1A\u663E\u793A\u4E3A\u4E71\u7801</span>
            res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/plain;charset=UTF-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u8BBE\u7F6E\u6240\u6709\u57DF\u5141\u8BB8\u8DE8\u57DF</span>
            res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Origin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u8FD4\u56DE\u4EE3\u7406\u540E\u7684\u5185\u5BB9</span>
            res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u76D1\u542C 8010 \u7AEF\u53E3</span>
apiServer<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> hostname<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u63A5\u53E3\u4EE3\u7406\u8FD0\u884C\u5728 http://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>hostname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p>\u4F7F\u7528 axios \u7528\u4F5Cajax\u8BF7\u6C42 \uFF0C\u5C01\u88C5\u4E3Autil.js\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> Util <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">apiPath</span><span class="token operator">:</span> <span class="token string">&#39;http://127.0.0.1:8010/&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// Ajax \u901A\u7528\u914D\u7F6E</span>
Util<span class="token punctuation">.</span>ajax <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">baseURL</span><span class="token operator">:</span> Util<span class="token punctuation">.</span>apiPath
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6DFB\u52A0\u54CD\u5E94\u62E6\u622A\u5668</span>
Util<span class="token punctuation">.</span>ajax<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Util<span class="token punctuation">;</span> 
</code></pre></div><p>\u7136\u540E\u5728 vue.js \u7684\u7EC4\u4EF6\u4E2D\u7684\u6D4B\u8BD5\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\u6D4B\u8BD5\uFF1A<span class="token punctuation">{</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> $ <span class="token keyword">from</span> <span class="token string">&#39;./util&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         $<span class="token punctuation">.</span>ajax<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;themes&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> res<span class="token punctuation">.</span>limit<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span> 
</code></pre></div><p>\u5206\u522B\u5728\u7EC8\u7AEF\u547D\u4EE4\u4E2D\u542F\u52A8\u4EE3\u7406\uFF0C\u548C\u542F\u52A8\u670D\u52A1\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>node <span class="token punctuation">.</span>proxy<span class="token punctuation">.</span>js
#\u6210\u529F\u663E\u793A\u65E5\u5FD7\uFF1A\u63A5\u53E3\u4EE3\u7406\u8FD0\u884C\u5728 http<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">127.0.0.1:8010</span><span class="token regex-delimiter">/</span></span>
cnpm run dev
</code></pre></div>`,11);function p(o,e){return t}var l=s(a,[["render",p]]);export{l as default};
