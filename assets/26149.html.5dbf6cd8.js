import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u7F16\u5199\u4E00\u4E2A\u901A\u7528\u7684\u4E8B\u4EF6\u76D1\u542C\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u4E00\u4E2A\u901A\u7528\u7684\u4E8B\u4EF6\u76D1\u542C\u51FD\u6570" aria-hidden="true">#</a> \u7F16\u5199\u4E00\u4E2A\u901A\u7528\u7684\u4E8B\u4EF6\u76D1\u542C\u51FD\u6570</h1><p>\u9996\u5148\u4E00\u4E2A html \u7ED3\u6784\u4EE3\u7801</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">&quot;btn1&quot;</span><span class="token operator">&gt;</span>\u6309\u94AE<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
</code></pre></div><p>\u5B9E\u73B0\u4E8B\u4EF6\u7ED1\u5B9A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u4E8B\u4EF6\u7ED1\u5B9A\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">bindEvent</span><span class="token punctuation">(</span><span class="token parameter">elem<span class="token punctuation">,</span> type<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    elem<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> btn1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;btn1&#39;</span><span class="token punctuation">)</span>
<span class="token function">bindEvent</span><span class="token punctuation">(</span>btn1<span class="token punctuation">,</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token comment">// &lt;button id=&quot;btn1&quot;&gt;\u6309\u94AE&lt;/button&gt;</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;clicked&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u901A\u7528\u7684\u4E8B\u4EF6\u76D1\u542C\u51FD\u6570</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u901A\u7528\u7684\u4E8B\u4EF6\u7ED1\u5B9A\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">bindEvent</span><span class="token punctuation">(</span><span class="token parameter">elem<span class="token punctuation">,</span> type<span class="token punctuation">,</span> selector<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fn <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fn <span class="token operator">=</span> selector
        selector <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    elem<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> target <span class="token operator">=</span> event<span class="token punctuation">.</span>target
        <span class="token keyword">if</span> <span class="token punctuation">(</span>selector<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u4EE3\u7406\u7ED1\u5B9A</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> event<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u666E\u901A\u7ED1\u5B9A</span>
            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> event<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> btn1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;btn1&#39;</span><span class="token punctuation">)</span>
<span class="token function">bindEvent</span><span class="token punctuation">(</span>btn1<span class="token punctuation">,</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span> <span class="token comment">// \u6309\u94AE</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><blockquote><p>\u9700\u8981\u6CE8\u610F\u7684\u662F this.innerHTML \u7684\u6307\u5411\uFF0C\u6B64\u65F6\u4E0D\u80FD\u662F event=&gt;{} , \u800C\u9700\u8981\u4F7F\u7528 function(event){}</p></blockquote>`,8);function p(o,c){return t}var l=s(a,[["render",p]]);export{l as default};
