import{h as s}from"./app.4ca8afde.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=s(`<h1 id="\u8DE8\u57DF\u7684\u5E38\u7528\u5B9E\u73B0\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8DE8\u57DF\u7684\u5E38\u7528\u5B9E\u73B0\u65B9\u5F0F" aria-hidden="true">#</a> \u8DE8\u57DF\u7684\u5E38\u7528\u5B9E\u73B0\u65B9\u5F0F</h1><p>\u540C\u6E90\u7B56\u7565</p><ul><li>ajax \u8BF7\u6C42\u65F6\uFF0C\u6D4F\u89C8\u5668\u8981\u6C42\u5F53\u524D\u7F51\u9875\u548C sever \u5FC5\u987B\u540C\u6E90\uFF08\u5B89\u5168\uFF09</li><li>\u540C\u6E90\uFF1A\u534F\u8BAE\uFF0C\u57DF\u540D\uFF0C\u7AEF\u53E3\uFF0C\u4E09\u8005\u5FC5\u987B\u4E00\u81F4</li><li>\u4E0D\u540C\u6E90\uFF0C\u524D\u7AEF\uFF1Ahttp://a.com:8080/\uFF1Bserver\uFF1Ahttps://b.com/api/xxx</li></ul><p>\u52A0\u8F7D\u56FE\u7247 css js \u53EF\u65E0\u89C6\u540C\u6E90\u7B56\u7565</p><ul><li>\u56FE\u7247\u53EF\u80FD\u9632\u76D7\u94FE</li><li>\u53EF\u7528\u4E8E\u7EDF\u8BA1\u6253\u70B9\uFF0C\u53EF\u4F7F\u7528\u7B2C\u4E09\u65B9\u7EDF\u8BA1\u670D\u52A1</li><li><code>&lt;link /&gt; &lt;script /&gt;</code> \u53EF\u4EE5\u4F7F\u7528 CDN\uFF0CCDN \u4E00\u822C\u90FD\u662F\u5916\u57DF</li><li><code>&lt;script /&gt;</code> \u53EF\u5B9E\u73B0 JSONP</li></ul><p>\u8DE8\u57DF</p><ul><li>\u6240\u6709\u7684\u8DE8\u57DF\uFF0C\u90FD\u5FC5\u987B\u7ECF\u8FC7 sever \u7AEF\u5141\u8BB8\u548C\u914D\u5408</li><li>\u672A\u7ECF server \u7AEF\u5141\u8BB8\u5C31\u5B9E\u73B0\u8DE8\u57DF\uFF0C\u8BF4\u660E\u6D4F\u89C8\u5668\u6709\u6F0F\u6D1E\uFF0C\u5371\u9669\u4FE1\u53F7</li></ul><p>JSONP \u8DE8\u57DF\u65B9\u5F0F</p><ul><li><code>&lt;script /&gt;</code> \u53EF\u7ED5\u8FC7\u8DE8\u57DF\u9650\u5236</li><li>\u670D\u52A1\u5668\u53EF\u4EE5\u4EFB\u610F\u52A8\u6001\u62FC\u63A5\u6570\u636E\u8FD4\u56DE</li><li>\u6240\u4EE5\uFF0C<code>&lt;script /&gt;</code> \u5C31\u53EF\u4EE5\u83B7\u5F97\u8DE8\u57DF\u7684\u6570\u636E\uFF0C\u53EA\u8981\u670D\u52A1\u5668\u613F\u610F\u8FD4\u56DE</li></ul><p>\u6F14\u793A\uFF0C\u51C6\u5907\u4E00\u4E2A http://test.com/test/jsonp.php\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>echo $_GET<span class="token punctuation">[</span><span class="token string">&#39;callback&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token string">&#39;({name: &quot;zhangsan&quot;})&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p>\u524D\u7AEF\u4F7F\u7528 jsonp \u8DE8\u57DF</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    window<span class="token punctuation">.</span><span class="token function-variable function">abc</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token comment">// {name: &quot;zhangsan&quot;}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;http://test.com/test/jsonp.php?callback=bac&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><p>CORS - \u670D\u52A1\u5668\u8BBE\u7F6E http header \u8DE8\u57DF</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5141\u8BB8\u6240\u6709\u7F51\u7AD9\u8DE8\u57DF\u8BBF\u95EE\uFF0C\u4E00\u822C\u4E0D\u5EFA\u8BAE\u76F4\u63A5\u5199\u201C*\u201D</span>
response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Origin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Expose-Headers&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;X-Requested-With&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Methods&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;POST, GET, OPTIONS, DELETE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u63A5\u6536\u8DE8\u57DF\u7684 cookie</span>
response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Credentials&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4EE3\u7406 - \u6BD4\u5982\u4F7F\u7528 Nginx\uFF0Cwebpack\u7B49\u4EE3\u7406</p>`,16);function p(o,e){return t}var i=n(a,[["render",p]]);export{i as default};
