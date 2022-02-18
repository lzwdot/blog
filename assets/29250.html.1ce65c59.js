import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="ssr-\u548C-tree-shaking-\u7684\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#ssr-\u548C-tree-shaking-\u7684\u4F18\u5316" aria-hidden="true">#</a> SSR \u548C Tree-shaking \u7684\u4F18\u5316</h1><p>\u4E5F\u662F\u4F18\u5316\u624B\u6BB5</p><h2 id="ssr-\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#ssr-\u4F18\u5316" aria-hidden="true">#</a> SSR \u4F18\u5316</h2><ul><li>\u9759\u6001\u8282\u70B9\u76F4\u63A5\u8F93\u51FA\uFF0C\u7ED5\u8FC7\u4E86 vdom</li><li>\u52A8\u6001\u8282\u70B9\uFF0C\u8FD8\u662F\u9700\u8981\u52A8\u6001\u6E32\u67D3</li></ul><p>\u8FD8\u662F\u770B https://vue-next-template-explorer.netlify.app/ \u8FD9\u4E2A</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>hello vue3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>hello vue3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>hello vue3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ mgs }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u751F\u6210 AST \u6811</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createElementVNode <span class="token keyword">as</span> _createElementVNode<span class="token punctuation">,</span> toDisplayString <span class="token keyword">as</span> _toDisplayString<span class="token punctuation">,</span> openBlock <span class="token keyword">as</span> _openBlock<span class="token punctuation">,</span> createElementBlock <span class="token keyword">as</span> _createElementBlock <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">_ctx<span class="token punctuation">,</span> _cache<span class="token punctuation">,</span> $props<span class="token punctuation">,</span> $setup<span class="token punctuation">,</span> $data<span class="token punctuation">,</span> $options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">_openBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">_createElementBlock</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token function">_createElementVNode</span><span class="token punctuation">(</span><span class="token string">&quot;span&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;hello vue3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">_createElementVNode</span><span class="token punctuation">(</span><span class="token string">&quot;span&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;hello vue3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">_createElementVNode</span><span class="token punctuation">(</span><span class="token string">&quot;span&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;hello vue3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">_createElementVNode</span><span class="token punctuation">(</span><span class="token string">&quot;span&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token function">_toDisplayString</span><span class="token punctuation">(</span>_ctx<span class="token punctuation">.</span>mgs<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token comment">/* TEXT */</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Check the console for the AST</span>
</code></pre></div><p>\u7136\u540E\u5728 <code>Options</code> \u91CC\u52FE\u9009 <code>SSR</code>\uFF0C AST \u6811\u53D8\u5316</p><blockquote><p>\u9759\u6001\u8282\u70B9\u76F4\u63A5\u8F93\u51FA\uFF0C\u7ED5\u8FC7\u4E86 vdom</p></blockquote><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mergeProps <span class="token keyword">as</span> _mergeProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ssrRenderAttrs <span class="token keyword">as</span> _ssrRenderAttrs<span class="token punctuation">,</span> ssrInterpolate <span class="token keyword">as</span> _ssrInterpolate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue/server-renderer&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">ssrRender</span><span class="token punctuation">(</span><span class="token parameter">_ctx<span class="token punctuation">,</span> _push<span class="token punctuation">,</span> _parent<span class="token punctuation">,</span> _attrs<span class="token punctuation">,</span> $props<span class="token punctuation">,</span> $setup<span class="token punctuation">,</span> $data<span class="token punctuation">,</span> $options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> _cssVars <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> _ctx<span class="token punctuation">.</span>color <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token function">_push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>
    <span class="token function">_ssrRenderAttrs</span><span class="token punctuation">(</span><span class="token function">_mergeProps</span><span class="token punctuation">(</span>_attrs<span class="token punctuation">,</span> _cssVars<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&gt;&lt;span&gt;hello vue3&lt;/span&gt;&lt;span&gt;hello vue3&lt;/span&gt;&lt;span&gt;hello vue3&lt;/span&gt;&lt;span&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>
    <span class="token function">_ssrInterpolate</span><span class="token punctuation">(</span>_ctx<span class="token punctuation">.</span>mgs<span class="token punctuation">)</span>
  <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span&gt;&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Check the console for the AST</span>
</code></pre></div><h2 id="tree-shaking-\u7684\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#tree-shaking-\u7684\u4F18\u5316" aria-hidden="true">#</a> Tree-shaking \u7684\u4F18\u5316</h2><ul><li>\u7F16\u8BD1\u65F6\uFF0C\u6839\u636E\u4E0D\u540C\u7684\u60C5\u51B5\uFF0C\u5F15\u5165\u4E0D\u540C\u7684 API</li></ul><blockquote><p>\u53EA\u7528\u5230 reactive\uFF0C\u7F16\u8BD1\u65F6\u53EA\u4F1A\u5F15\u5165 <code>reactive</code></p></blockquote><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>toRefs<span class="token punctuation">,</span> reactive<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> 
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5BF9\u8C61\u5B9E\u73B0\u54CD\u5E94\u5F0F\uFF0C\u4F7F\u7528 reactive</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lzw.&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> state
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,15);function p(o,e){return t}var u=s(a,[["render",p]]);export{u as default};
