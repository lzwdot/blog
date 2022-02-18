import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="weakmap-\u548C-weakset" tabindex="-1"><a class="header-anchor" href="#weakmap-\u548C-weakset" aria-hidden="true">#</a> WeakMap \u548C WeakSet</h1><p>\u4E24\u8005\u7684\u7279\u70B9</p><ul><li>\u5F31\u5F15\u7528\uFF0C\u9632\u6B62\u5185\u5B58\u6CC4\u9732</li><li>WeakMap \u53EA\u80FD\u7528\u5BF9\u8C61\u4F5C\u4E3A key\uFF0CWeakSet \u53EA\u80FD\u7528\u5BF9\u8C61\u505A value</li><li>\u6CA1\u6709 forEach \u548C size\uFF0C\u53EA\u80FD\u7528 set/add delete has</li></ul><p>WeakMap \u7528\u6CD5</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// WeakMap \u5F31\u5F15\u7528\uFF0C\u6CA1\u6709 forEach \u548C size\uFF0C\u53EA\u80FD\u7528 set delete has</span>
<span class="token keyword">const</span> wMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lzw&#39;</span><span class="token punctuation">}</span>
  a<span class="token punctuation">.</span>obj <span class="token operator">=</span> obj <span class="token comment">// \u5F3A\u5F15\u7528</span>
  wMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;name info&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u53EA\u80FD\u7528\u5BF9\u8C61\u4F5C\u4E3A key</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>  <span class="token comment">// obj: {name: &#39;lzw&#39;}</span>
<span class="token comment">// \u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u8F93\u5165\uFF1AwMap\uFF0C\u7ED3\u679C\uFF1AWeakMap{}</span>
<span class="token comment">// \u7ED3\u679C\u6709\u53EF\u80FD\u4E0D\u4E3A\u7A7A\uFF0C\u8FD9\u662F\u56E0\u4E3A gc \u5783\u573E\u6E05\u7406\u4E0D\u4E00\u5B9A\u662F\u53CA\u65F6\u7684</span>
<span class="token comment">// \u53EF\u4EE5\u5728\u5F00\u53D1\u8005\u5DE5\u5177-&gt;\u5185\u5B58-&gt; \u5783\u573E\u6876\u56FE\u6807\uFF0C\u70B9\u51FB\u6E05\u7406\u5185\u5B58\u5783\u573E</span>

<span class="token comment">// \u573A\u666F\u4F7F\u7528\uFF0C</span>
<span class="token keyword">const</span> userInfo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lzw.&#39;</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> cityInfo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">&#39;\u957F\u6C99&#39;</span><span class="token punctuation">}</span>
<span class="token comment">// userInfo.city = cityInfo</span>
wMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>userInfo<span class="token punctuation">,</span> cityInfo<span class="token punctuation">)</span> <span class="token comment">// \u5EFA\u7ACB\u5173\u7CFB\uFF0C\u4F46\u4E24\u8005\u786E\u72EC\u7ACB\u7684\uFF0C\u800C\u4E14\u4E0D\u5F71\u54CD\u5F7C\u6B64\u7684\u9500\u6BC1\u903B\u8F91</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>wMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>userInfo<span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre></div><p>WeakSet \u7528\u6CD5</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// WeakSet \u5F31\u5F15\u7528\uFF0C\u9632\u6B62\u5185\u5B58\u6CC4\u9732\uFF0C\u53EA\u80FD\u7528\u5BF9\u8C61\u4F5C\u4E3A value</span>
<span class="token comment">// \u6CA1\u6709 forEach \u548C size\uFF0C\u53EA\u80FD\u7528 add delete has</span>
<span class="token keyword">const</span> wSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lzw.&#39;</span><span class="token punctuation">}</span>
  <span class="token comment">// set.add(obj)</span>
  wSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u8F93\u5165\uFF1AwSet\uFF0C\u7ED3\u679C\uFF1AWeakSet{}</span>
<span class="token comment">// \u7ED3\u679C\u6709\u53EF\u80FD\u4E0D\u4E3A\u7A7A\uFF0C\u8FD9\u662F\u56E0\u4E3A gc \u5783\u573E\u6E05\u7406\u4E0D\u4E00\u5B9A\u662F\u53CA\u65F6\u7684</span>
<span class="token comment">// \u53EF\u4EE5\u5728\u5F00\u53D1\u8005\u5DE5\u5177-&gt;\u5185\u5B58-&gt; \u5783\u573E\u6876\u56FE\u6807\uFF0C\u70B9\u51FB\u6E05\u7406\u5185\u5B58\u5783\u573E</span>
</code></pre></div>`,7);function t(o,e){return p}var k=s(a,[["render",t]]);export{k as default};
