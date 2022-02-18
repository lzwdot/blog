import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/blog/assets/2402844147.acdde7b5.png",t="/blog/assets/1071566183.cabe5693.png",p="/blog/assets/2287511774.7ebedd2d.png";const o={},c=n(`<h1 id="\u5B8F\u4EFB\u52A1-macrotask-\u548C\u5FAE\u4EFB\u52A1-microtask" tabindex="-1"><a class="header-anchor" href="#\u5B8F\u4EFB\u52A1-macrotask-\u548C\u5FAE\u4EFB\u52A1-microtask" aria-hidden="true">#</a> \u5B8F\u4EFB\u52A1 macroTask \u548C\u5FAE\u4EFB\u52A1 microTask</h1><p>\u4EC0\u4E48\u662F\u5B8F\u4EFB\u52A1\uFF0C\u4EC0\u4E48\u662F\u5FAE\u4EFB\u52A1</p><ul><li>\u5B8F\u4EFB\u52A1\uFF1AsetTimeout\uFF0CsetInterval\uFF0CAjax\uFF0CDOM\u4E8B\u4EF6</li><li>\u5FAE\u4EFB\u52A1\uFF1APromise async/await</li><li>\u5FAE\u4EFB\u52A1\u6267\u884C\u65F6\u673A\u6BD4\u5B8F\u4EFB\u52A1\u8981\u65E9\uFF08\u8BB0\u4F4F\uFF09</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token comment">// \u5B8F\u4EFB\u52A1</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u5FAE\u4EFB\u52A1</span>
Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span>
<span class="token comment">// 100</span>
<span class="token comment">// 400</span>
<span class="token comment">// 300</span>
<span class="token comment">// 200</span>
</code></pre></div><p>event loop \u548C DOM \u6E32\u67D3\uFF08\u518D\u6B21\u56DE\u5F52\u4E00\u904D event loop \u7684\u8FC7\u7A0B\uFF09</p><ul><li>JS \u662F\u5355\u7EBF\u7A0B\u7684\uFF0C\u800C\u4E14\u548C DOM \u6E32\u67D3\u5171\u7528\u4E00\u4E2A\u7EBF\u7A0B</li><li>JS \u6267\u884C\u7684\u65F6\u5019\uFF0C\u5F97\u7559\u4E00\u4E9B\u65F6\u673A\u4F9B DOM \u6E32\u67D3</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hi&#39;</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">cb1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;cb1&#39;</span><span class="token punctuation">)</span> <span class="token comment">// cb1 \u5373 callback</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">5000</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Bye&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p><img src="`+a+`" alt=""></p><blockquote><p>\u6BCF\u6B21 Call Stack \u6E05\u7A7A\uFF08\u5373\u6BCF\u6B21\u8F6E\u8BE2\u7ED3\u675F\uFF09\uFF0C\u5373\u540C\u6B65\u4EFB\u52A1\u6267\u884C\u5B8C\uFF1B\u90FD\u662F DOM \u91CD\u65B0\u6E32\u67D3\u7684\u673A\u4F1A\uFF0CDOM \u7ED3\u6784\u5982\u6709\u6539\u53D8\u5219\u91CD\u65B0\u6E32\u67D3\uFF1B\u7136\u540E\u518D\u53BB\u89E6\u53D1\u4E0B\u4E00\u6B21 Event Loop</p></blockquote><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> $p1 <span class="token operator">=</span> <span class="token string">&#39;&lt;p&gt;\u4E00\u6BB5\u6587\u5B57&lt;/p&gt;&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> $p2 <span class="token operator">=</span> <span class="token string">&#39;&lt;p&gt;\u4E00\u6BB5\u6587\u5B57&lt;/p&gt;&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> $p3 <span class="token operator">=</span> <span class="token string">&#39;&lt;p&gt;\u4E00\u6BB5\u6587\u5B57&lt;/p&gt;&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> $container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
$container<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>$p1<span class="token punctuation">)</span>
$container<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>$p2<span class="token punctuation">)</span>
$container<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>$p3<span class="token punctuation">)</span>
<span class="token comment">// length 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;length&#39;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
<span class="token comment">// \uFF08alert \u4F1A\u963B\u65AD js \u6267\u884C\uFF0C\u4E5F\u4F1A\u963B\u65AD DOM \u6E32\u67D3\uFF0C\u4FBF\u4E8E\u67E5\u770B\u6548\u679C\uFF09</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;\u672C\u6B21 call stack \u7ED3\u675F\uFF0CDOM \u7ED3\u6784\u5DF2\u66F4\u65B0\uFF0C\u4F46\u5C1A\u672A\u89E6\u53D1\u6E32\u67D3&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5FAE\u4EFB\u52A1\u548C\u5B8F\u4EFB\u52A1\u7684\u533A\u522B</p><ul><li>\u5B8F\u4EFB\u52A1\uFF1ADOM \u6E32\u67D3\u540E\u89E6\u53D1\uFF0C\u5982 setTimeout</li><li>\u5FAE\u4EFB\u52A1\uFF1ADOM \u6E32\u67D3\u524D\u89E6\u53D1\uFF0C\u5982 Promise\uFF0C\u4EE3\u7801\u6F14\u793A\uFF1A</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> $p1 <span class="token operator">=</span> <span class="token string">&#39;&lt;p&gt;\u4E00\u6BB5\u6587\u5B57&lt;/p&gt;&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> $p2 <span class="token operator">=</span> <span class="token string">&#39;&lt;p&gt;\u4E00\u6BB5\u6587\u5B57&lt;/p&gt;&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> $p3 <span class="token operator">=</span> <span class="token string">&#39;&lt;p&gt;\u4E00\u6BB5\u6587\u5B57&lt;/p&gt;&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> $container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
$container<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>$p1<span class="token punctuation">)</span>
$container<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>$p2<span class="token punctuation">)</span>
$container<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>$p3<span class="token punctuation">)</span>
<span class="token comment">// \u5FAE\u4EFB\u52A1\uFF1ADOM \u6E32\u67D3\u524D\u89E6\u53D1</span>
Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">// length1 3</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;length1&#39;</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Promise then&#39;</span><span class="token punctuation">)</span> <span class="token comment">// DOM \u6E32\u67D3\u4E86\u5417\uFF1F - No</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u5B8F\u4EFB\u52A1\uFF1ADOM \u6E32\u67D3\u540E\u89E6\u53D1</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">// length2 6</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;length2&#39;</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;setTimeout&#39;</span><span class="token punctuation">)</span> <span class="token comment">// DOM \u6E32\u67D3\u4E86\u5417\uFF1F - Yes</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4ECE event loop \u89E3\u91CA\uFF0C\u4E3A\u4F55\u5FAE\u4EFB\u52A1\u6267\u884C\u66F4\u65E9\uFF1F</p><ul><li>\u5FAE\u4EFB\u52A1\u662F ES6 \u8BED\u6CD5\u89C4\u5B9A\u7684</li><li>\u5B8F\u4EFB\u52A1\u662F\u7531\u6D4F\u89C8\u5668\u89C4\u5B9A\u7684</li></ul><p><img src="`+t+'" alt=""></p><p><img src="'+p+'" alt=""></p>',17);function e(l,u){return c}var r=s(o,[["render",e]]);export{r as default};
