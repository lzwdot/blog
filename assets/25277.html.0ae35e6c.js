import{h as s}from"./app.4ca8afde.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const n={},p=s(`<h1 id="\u4F55\u65F6\u4F7F\u7528-\u4F55\u65F6\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528-\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a> \u4F55\u65F6\u4F7F\u7528 === \u4F55\u65F6\u4F7F\u7528 ==\uFF1F</h1><p>\u53D8\u91CF\u8BA1\u7B97 - \u6CE8\u610F\u67D0\u4E9B\u7C7B\u578B\u8F6C\u6362\u7684\u5751</p><ul><li>\u5B57\u7B26\u4E32\u62FC\u63A5</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token number">10</span> <span class="token comment">// 110</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token string">&#39;10&#39;</span> <span class="token comment">// &#39;10010&#39;</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">+</span> <span class="token string">&#39;10&#39;</span> <span class="token comment">// &#39;true10&#39;</span>
</code></pre></div><ul><li>==\u8FD0\u7B97\u7B26</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token number">100</span> <span class="token operator">==</span> <span class="token string">&#39;100&#39;</span>  <span class="token comment">// true</span>
<span class="token number">0</span> <span class="token operator">==</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// true</span>
<span class="token number">0</span> <span class="token operator">==</span> <span class="token boolean">false</span> <span class="token comment">// true</span>
<span class="token boolean">false</span> <span class="token operator">==</span> <span class="token string">&#39;&#39;</span> <span class="token comment">//true</span>
<span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span> <span class="token comment">// true</span>
</code></pre></div><p>\u9664\u4E86 == null \u4E4B\u5916\uFF0C\u5176\u4ED6\u90FD\u4E00\u5F8B\u7528 ===\uFF0C\u4F8B\u5982</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>a <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u76F8\u5F53\u4E8E\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>a <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> obj<span class="token punctuation">.</span>a <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><ul><li>\u903B\u8F91\u5224\u65AD</li></ul><p>js \u4E3B\u8981\u662F\u5224\u65AD truely \u53D8\u91CF\u8FD8\u662F falsely \u53D8\u91CF</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">&amp;&amp;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 0 \u56E0\u4E3A 10 \u662F truely \u53D8\u91CF\u6240\u4EE5\u8981\u5224\u65AD\u7B2C\u4E8C\u503C 0\uFF0C\u6240\u4EE5\u8FD4\u56DE 0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span> <span class="token operator">||</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;abc&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>abc<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><p>\u9700\u8981\u6CE8\u610F\u7684 falsely \u53D8\u91CF\uFF0C\u90FD\u4E3A false</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">!</span><span class="token operator">!</span><span class="token number">0</span> <span class="token operator">===</span> <span class="token boolean">false</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token number">NaN</span> <span class="token operator">===</span> <span class="token boolean">false</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token string">&#39;&#39;</span> <span class="token operator">===</span> <span class="token boolean">false</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token keyword">null</span> <span class="token operator">===</span> <span class="token boolean">false</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token keyword">undefined</span> <span class="token operator">===</span> <span class="token boolean">false</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token boolean">false</span> <span class="token operator">===</span> <span class="token boolean">false</span>
</code></pre></div>`,15);function o(e,t){return p}var r=a(n,[["render",o]]);export{r as default};
