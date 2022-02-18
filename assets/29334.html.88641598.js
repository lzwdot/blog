import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="react-\u9AD8\u9636\u7EC4\u4EF6-\u9AD8\u7EA7" tabindex="-1"><a class="header-anchor" href="#react-\u9AD8\u9636\u7EC4\u4EF6-\u9AD8\u7EA7" aria-hidden="true">#</a> React \u9AD8\u9636\u7EC4\u4EF6\uFF08\u9AD8\u7EA7\uFF09</h1><p>\u5173\u4E8E\u7EC4\u4EF6\u516C\u5171\u903B\u8F91\u7684\u62BD\u79BB</p><ul><li>mixin\uFF0C\u5DF2\u88AB React \u5F03\u7528</li><li>\u9AD8\u7EA7\u7EC4\u4EF6 Higher Order Component\uFF08\u7B80\u79F0 HOC\uFF09</li><li>Render Props</li></ul><h2 id="\u9AD8\u9636\u7EC4\u4EF6\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u9636\u7EC4\u4EF6\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> \u9AD8\u9636\u7EC4\u4EF6\u57FA\u672C\u7528\u6CD5</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u9AD8\u9636\u7EC4\u4EF6\u4E0D\u662F\u4E00\u79CD\u529F\u80FD\uFF0C\u800C\u662F\u4E00\u79CD\u6A21\u5F0F</span>
<span class="token keyword">const</span> <span class="token function-variable function">HOCFactory</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">Component</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">class</span> <span class="token class-name">HOC</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5728\u6B64\u5B9A\u4E49\u591A\u4E2A\u7EC4\u4EF6\u548C\u516C\u5171\u903B\u8F91</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token comment">// \u8FD4\u56DE\u62FC\u88C5\u7684\u7ED3\u679C</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token constant">HOC</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> EnhancedComponent1 <span class="token operator">=</span> <span class="token function">HOCFactory</span><span class="token punctuation">(</span>WrappedComponent1<span class="token punctuation">)</span>
<span class="token keyword">const</span> EnhancedComponent2 <span class="token operator">=</span> <span class="token function">HOCFactory</span><span class="token punctuation">(</span>WrappedComponent2<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u9AD8\u9636\u7EC4\u4EF6\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u9636\u7EC4\u4EF6\u5B9E\u4F8B" aria-hidden="true">#</a> \u9AD8\u9636\u7EC4\u4EF6\u5B9E\u4F8B</h2><p>\u5B9A\u4E49\u4E00\u4E2A <code>HOCDemo.js</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u9AD8\u9636\u7EC4\u4EF6</span>
<span class="token keyword">const</span> <span class="token function-variable function">withMouse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">Component</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">class</span> <span class="token class-name">withMouseComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function-variable function">handleMouseMove</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> e<span class="token punctuation">.</span>clientX<span class="token punctuation">,</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> e<span class="token punctuation">.</span>clientY
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;500px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span> onMouseMove<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleMouseMove<span class="token punctuation">}</span><span class="token operator">&gt;</span>
          <span class="token punctuation">{</span><span class="token comment">/*1\u3001\u900F\u4F20\u6240\u6709 props 2\u3001\u589E\u52A0 mouse \u5C5E\u6027*/</span><span class="token punctuation">}</span>
          <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span> mouse<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> withMouseComponent
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> a <span class="token operator">=</span> props<span class="token punctuation">.</span>a
  <span class="token keyword">const</span> <span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">.</span>mouse <span class="token comment">// \u63A5\u6536 mouse \u5C5E\u6027</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;500px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>The Mouse position <span class="token function">is</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>x<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>y<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>a<span class="token operator">:</span><span class="token punctuation">{</span>a<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">withMouse</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
</code></pre></div><p>\u6D4B\u8BD5\u4E0B</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>HOCDemo a<span class="token operator">=</span><span class="token string">&quot;123&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre></div><h2 id="redux-connect-\u662F\u9AD8\u9636\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#redux-connect-\u662F\u9AD8\u9636\u7EC4\u4EF6" aria-hidden="true">#</a> redux connect \u662F\u9AD8\u9636\u7EC4\u4EF6</h2><p>\u6BD4\u5982</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>connect<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>
<span class="token keyword">const</span> VisibleTodoList <span class="token operator">=</span> <span class="token function">connect</span><span class="token punctuation">(</span>
  mapStateToProps<span class="token punctuation">,</span>
  mapDispatchToProps
<span class="token punctuation">)</span><span class="token punctuation">(</span>TodoList<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> VisibleTodoList
</code></pre></div>`,13);function t(o,e){return p}var r=s(a,[["render",t]]);export{r as default};
