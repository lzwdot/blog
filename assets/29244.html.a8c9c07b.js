import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="setup-\u4E2D\u5982\u4F55\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#setup-\u4E2D\u5982\u4F55\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B" aria-hidden="true">#</a> setup \u4E2D\u5982\u4F55\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B</h1><p>\u6CA1\u6709 this \u7684\u5751\u4E86</p><ul><li>\u5728 setup \u548C\u5176\u4ED6 Composition API \u4E2D\u6CA1\u6709 this</li><li>\u53EF\u901A\u8FC7 getCurrentInstance \u83B7\u53D6\u5F53\u524D\u5B9E\u4F8B</li><li>\u82E5\u4F7F\u7528 Options API \u53EF\u7167\u5E38\u4F7F\u7528 this</li></ul><p>\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>getCurrentInstance<span class="token punctuation">,</span> onMounted<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;GetInstance&quot;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this1&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// this1 undefined</span>

    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this in onMounted&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// this in onMounted undefined</span>

      <span class="token comment">// \u8FD9\u6837\u5C31\u6709\u503C\u4E86</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">,</span> instance<span class="token punctuation">.</span>data<span class="token punctuation">.</span>x<span class="token punctuation">)</span> <span class="token comment">// x 1</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//instance {uid: 1, vnode: {\u2026}, type: {\u2026}, parent: {\u2026}, appContext: {\u2026},\u2026}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;instance&#39;</span><span class="token punctuation">,</span> instance<span class="token punctuation">)</span>
    <span class="token comment">// \u56E0\u4E3A setup \u5728\u751F\u547D\u5468\u671F created beforeCreate</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">,</span> instance<span class="token punctuation">.</span>data<span class="token punctuation">.</span>x<span class="token punctuation">)</span> <span class="token comment">// x undefined</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this2&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// this2 Proxy{\u2026}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;y&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>y<span class="token punctuation">)</span> <span class="token comment">// y 2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div>`,5);function p(o,e){return t}var l=s(a,[["render",p]]);export{l as default};
