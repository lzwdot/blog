import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="vue3-\u548C-jsx-\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#vue3-\u548C-jsx-\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> Vue3 \u548C JSX -\u57FA\u672C\u4F7F\u7528</h1><p>JSX \u662F React \u63D0\u51FA\u7684\u6982\u5FF5</p><ul><li>\u4F7F\u7528 .jsx \u683C\u5F0F\u6587\u4EF6\u548C defineComponent</li><li>\u5F15\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u4F20\u9012\u5C5E\u6027</li></ul><p>\u4E24\u79CD\u4F7F\u7528\u65B9\u6CD5\uFF0C\u7B2C\u4E00\u79CD <code>JsxDemo.vue</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;JsxDemo&quot;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> countRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token function-variable function">render</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Jsx Demo <span class="token punctuation">{</span>countRef<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570</span>
    <span class="token keyword">return</span> render
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><p>\u7B2C\u4E8C\u79CD <code>JsxDemo.jsx</code>\uFF0C\u9700\u8981\u5F15\u5165 <code>defineComponent</code> \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u63A5\u6536\u4E24\u79CD\u683C\u5F0F</p><ul><li>setup \u51FD\u6570</li><li>\u7EC4\u4EF6\u7684\u914D\u7F6E</li></ul><p>\u5148\u52A0\u4E00\u4E2A\u5B50\u7EC4\u4EF6 <code>JsxChild.jsx</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>defineComponent<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;JsxChild&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">render</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Child <span class="token punctuation">{</span>props<span class="token punctuation">.</span>a<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> render
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5728 <code>.jsx</code> \u5F15\u5165\u5B50\u7EC4\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>defineComponent<span class="token punctuation">,</span> ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">&quot;./JsxChild.jsx&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// defineComponent \u53EF\u4EE5\u4F20\u5165\u4E24\u79CD</span>
<span class="token comment">// 1. setup \u51FD\u6570</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> countRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">101</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">render</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Jsx Demo <span class="token punctuation">{</span>countRef<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Child a<span class="token operator">=</span><span class="token punctuation">{</span>countRef<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Child<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570</span>
  <span class="token keyword">return</span> render
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 2. \u7EC4\u4EF6\u7684\u914D\u7F6E</span>
<span class="token comment">// export default defineComponent({</span>
<span class="token comment">//   name: &quot;JsxDemo&quot;,</span>
<span class="token comment">//   props: [&#39;a&#39;, &#39;b&#39;],</span>
<span class="token comment">//   setup() {</span>
<span class="token comment">//   }</span>
<span class="token comment">// })</span>
</code></pre></div><blockquote><p>\u4E24\u79CD\u65B9\u5F0F\u5F15\u5165\u65B9\u6CD5\u90FD\u4E00\u6837\uFF0C\u53EA\u662F\u9700\u8981\u52A0\u540E\u7F00\u540D\uFF0C\u6BD4\u5982 <code>import JsxDemo from &quot;@/components/JsxDemo.jsx&quot;</code> \u5982\u679C\u4F7F\u7528 typescript \u5C31\u662F <code>.tsx</code> \u6587\u4EF6\u540E\u7F00</p></blockquote>`,12);function t(o,e){return p}var r=s(a,[["render",t]]);export{r as default};
