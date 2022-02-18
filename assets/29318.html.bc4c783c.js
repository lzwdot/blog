import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="react-\u52A0\u8F7D\u5F02\u6B65\u7EC4\u4EF6-\u9AD8\u7EA7" tabindex="-1"><a class="header-anchor" href="#react-\u52A0\u8F7D\u5F02\u6B65\u7EC4\u4EF6-\u9AD8\u7EA7" aria-hidden="true">#</a> React \u52A0\u8F7D\u5F02\u6B65\u7EC4\u4EF6\uFF08\u9AD8\u7EA7\uFF09</h1><p>\u5F02\u6B65\u7EC4\u4EF6</p><ul><li>import</li><li>React.lazy</li><li>React.Suspense</li></ul><p>\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> ContextDemo <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./ContextDemo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">LazyDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5F15\u5165\u4E00\u4E2A\u52A8\u6001\u7EC4\u4EF6<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>hr<span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>ContextDemo<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>ContextDemo<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>Suspense<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

    <span class="token comment">// 1\u3001\u5F3A\u5236\u5237\u65B0\uFF0C\u53EF\u4EE5\u770B\u5230 loading \uFF08\u770B\u4E0D\u5230\u5C31\u9650\u5236\u4E00\u4E0B chrome \u7F51\u901F\uFF09</span>
    <span class="token comment">// 2\u3001\u770B network \u7684 js \u52A0\u8F7D</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> LazyDemo
</code></pre></div>`,5);function p(o,e){return t}var l=s(a,[["render",p]]);export{l as default};
