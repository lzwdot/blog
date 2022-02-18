import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u4EC0\u4E48\u662Freact-render-props" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Freact-render-props" aria-hidden="true">#</a> \u4EC0\u4E48\u662FReact Render Props</h1><p>Render &amp; Props</p><h2 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u672C\u7528\u6CD5</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// Render Props \u7684\u6838\u5FC3\u601D\u60F3</span>
<span class="token comment">// \u901A\u8FC7\u4E00\u4E2A\u51FD\u6570\u5C06 class \u7EC4\u4EF6\u7684 state \u4F5C\u4E3A props \u4F20\u9012\u7ED9\u7EAF\u51FD\u6570\u7EC4\u4EF6</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Factory</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token comment">// state \u5373\u591A\u4E2A\u7EC4\u4EF6\u7684\u516C\u5171\u903B\u8F91\u7684\u6570\u636E</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u4FEE\u6539 state</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Factory render<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token comment">// render \u662F\u4E00\u4E2A\u51FD\u6570\u7EC4\u4EF6</span>
    <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>a<span class="token punctuation">}</span> <span class="token punctuation">{</span>props<span class="token punctuation">.</span>b<span class="token punctuation">}</span> <span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h2><p>\u5B9A\u4E49 <code>RenderPropDemo.js</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">&#39;prop-types&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">Mouse</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
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
        <span class="token punctuation">{</span><span class="token comment">/*\u5C06\u5F53\u524D state \u4F5C\u4E3A props\uFF0C\u4F20\u9012\u7ED9 render \uFF08render \u662F\u4E00\u4E2A\u51FD\u6570\u7EC4\u4EF6\uFF09*/</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Mouse<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">render</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>func<span class="token punctuation">.</span>isRequired <span class="token comment">// \u5FC5\u987B\u63A5\u6536\u4E00\u4E2A render \u5C5E\u6027\uFF0C\u800C\u4E14\u51FD\u6570</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;500px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>a<span class="token operator">:</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>a<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Mouse render<span class="token operator">=</span><span class="token punctuation">{</span>
      <span class="token comment">// render \u662F\u4E00\u4E2A\u51FD\u6570\u7EC4\u4EF6</span>
      <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>The Mouse position <span class="token function">is</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>x<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>y<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u5B9A\u4E49\u4E86 Mouse \u7EC4\u4EF6\uFF0C\u53EA\u6709\u83B7\u53D6 x y \u7684\u80FD\u529B</span>
<span class="token comment">// \u81F3\u4E8E Mouse \u7EC4\u4EF6\u5982\u4F55\u6E32\u67D3\uFF0CApp \u8BF4\u4E86\u7B97\uFF0C\u901A\u8FC7 render prop \u7684\u65B9\u5F0F\u544A\u8BC9 Mouse \u7EC4\u4EF6</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre></div><p>\u6D4B\u8BD5\u4F7F\u7528</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>RenderPropDemo a<span class="token operator">=</span><span class="token string">&quot;456&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre></div><h2 id="hoc-vs-render-props" tabindex="-1"><a class="header-anchor" href="#hoc-vs-render-props" aria-hidden="true">#</a> HOC vs Render Props</h2><ul><li>HOC\uFF1A\u6A21\u5F0F\u7B80\u5355\uFF0C\u4F46\u4F1A\u589E\u52A0\u7EC4\u4EF6\u5C42\u7EA7</li><li>Render Props\uFF1A\u4EE3\u7801\u7B80\u6D01\uFF0C\u5B66\u4E60\u6210\u672C\u8F83\u9AD8</li><li>\u6309\u9700\u4F7F\u7528</li></ul>`,11);function t(o,e){return p}var l=s(a,[["render",t]]);export{l as default};
