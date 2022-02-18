import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u4E3A\u4EC0\u4E48\u9700\u8981\u7528-ref\u3001toref-\u548C-torefs" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u9700\u8981\u7528-ref\u3001toref-\u548C-torefs" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u9700\u8981\u7528 ref\u3001toRef \u548C toRefs</h1><p>\u6DF1\u5165\u7406\u89E3 ref\u3001toRef \u548C toRefs</p><h2 id="\u4E3A\u4F55\u9700\u8981-ref" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4F55\u9700\u8981-ref" aria-hidden="true">#</a> \u4E3A\u4F55\u9700\u8981 ref ?</h2><ul><li>\u8FD4\u56DE\u503C\u7C7B\u578B\uFF0C\u4F1A\u4E22\u5931\u54CD\u5E94\u5F0F</li><li>\u5982\u5728 setup\u3001computed\u3001\u5408\u6210\u51FD\u6570\uFF0C\u90FD\u6709\u53EF\u80FD\u8FD4\u56DE\u503C\u7C7B\u578B</li><li>Vue \u5982\u4E0D\u5B9A\u4E49 ref\uFF0C\u7528\u6237\u5C06\u81EA\u9020 ref\uFF0C\u53CD\u800C\u6DF7\u4E71</li></ul><p>\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span> why ref demo <span class="token punctuation">{</span><span class="token punctuation">{</span> age <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> toRefs<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">useFeatureX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;WhyRef&quot;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// vue3 \u662F\u901A\u8FC7 proxy \u5B9E\u73B0\u54CD\u5E94\u5F0F\uFF0C\u6240\u4EE5\u503C\u7C7B\u578B\u4E0D\u5177\u5907\u54CD\u5E94\u5F0F</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFeatureX</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>
    <span class="token comment">// RefImpl {_shallow: false, dep: undefined, __v_isRef: true, _rawValue: 20, _value: 20}</span>
    <span class="token comment">// dep: Set(1) {ReactiveEffect}</span>
    <span class="token comment">// __v_isRef: true</span>
    <span class="token comment">// _rawValue: 20</span>
    <span class="token comment">// _shallow: false</span>
    <span class="token comment">// _value: 20</span>
    <span class="token comment">// value: 30</span>
    
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      age<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">30</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      age
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><h2 id="\u4E3A\u4F55\u9700\u8981-value" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4F55\u9700\u8981-value" aria-hidden="true">#</a> \u4E3A\u4F55\u9700\u8981 .value ?</h2><ul><li>ref \u662F\u4E00\u4E2A\u5BF9\u8C61\uFF08\u4E0D\u4E22\u5931\u54CD\u5E94\u5F0F\uFF09\uFF0Cvalue \u5B58\u50A8\u503C</li><li>\u901A\u8FC7 .value \u5C5E\u6027\u7684 get \u548C set \u5B9E\u73B0\u54CD\u5E94\u5F0F</li><li>\u7528\u4E8E\u6A21\u677F\u3001reactive \u65F6\uFF0C\u4E0D\u9700\u8981 .value\uFF0C\u5176\u4ED6\u60C5\u51B5\u90FD\u9700\u8981</li></ul><p>\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span> why <span class="token punctuation">.</span>value demo <span class="token punctuation">{</span><span class="token punctuation">{</span> state<span class="token punctuation">.</span>age <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">-</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> age1 <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>computed<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> toRefs<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">useFeatureX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;WhyValue&quot;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// vue3 \u662F\u901A\u8FC7 proxy \u5B9E\u73B0\u54CD\u5E94\u5F0F\uFF0C\u6240\u4EE5\u503C\u7C7B\u578B\u4E0D\u5177\u5907\u54CD\u5E94\u5F0F</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFeatureX</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lzw.&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// computed \u8FD4\u56DE\u7C7B\u4F3C ref \u7684\u5BF9\u8C61\uFF0C\u4E5F\u6709 .value</span>
    <span class="token keyword">const</span> age1 <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>age <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age1<span class="token punctuation">)</span>
    <span class="token comment">// ComputedRefImpl {dep: undefined, _dirty: true, __v_isRef: true, effect: ReactiveEffect, _setter: \u0192, \u2026}</span>
    <span class="token comment">// dep: Set(1) {ReactiveEffect}</span>
    <span class="token comment">// effect: ReactiveEffect {active: true, deps: Array(1), fn: \u0192, scheduler: \u0192}</span>
    <span class="token comment">// __v_isReadonly: true</span>
    <span class="token comment">// __v_isRef: true</span>
    <span class="token comment">// _dirty: false</span>
    <span class="token comment">// _setter: () =&gt; {\u2026}</span>
    <span class="token comment">// _value: 36</span>
    <span class="token comment">// value: 36</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">35</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">,</span>
      age1
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><p>\u901A\u8FC7\u6A21\u62DF computed\uFF0C\u4E3A\u5565\u9700\u8981 .value</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u6A21\u62DF computed\uFF0C\u4E3A\u5565\u9700\u8981 .value</span>
<span class="token keyword">function</span> <span class="token function">computed1</span><span class="token punctuation">(</span><span class="token parameter">getter</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> value
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    value <span class="token operator">=</span> <span class="token function">getter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> value
<span class="token punctuation">}</span>

<span class="token keyword">const</span> a1 <span class="token operator">=</span> <span class="token function">computed1</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a1<span class="token punctuation">)</span> <span class="token comment">// undefined</span>

<span class="token keyword">function</span> <span class="token function">computed2</span><span class="token punctuation">(</span><span class="token parameter">getter</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ref <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    ref<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">getter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> ref
<span class="token punctuation">}</span>

<span class="token keyword">const</span> a2 <span class="token operator">=</span> <span class="token function">computed2</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a2<span class="token punctuation">)</span> <span class="token comment">// {value: null}value: 100[[Prototype]]: Object</span>
</code></pre></div><h2 id="\u4E3A\u4F55\u9700\u8981-toref-\u548C-torefs" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4F55\u9700\u8981-toref-\u548C-torefs" aria-hidden="true">#</a> \u4E3A\u4F55\u9700\u8981 toRef \u548C toRefs</h2><ul><li>\u521D\u8877\uFF1A\u4E0D\u4E22\u5931\u54CD\u5E94\u5F0F\u7684\u60C5\u51B5\u4E0B\uFF0C\u628A\u5BF9\u8C61\u6570\u636E <strong>\u5206\u89E3/\u6269\u6563/\u89E3\u6784</strong></li><li>\u524D\u63D0\uFF1A\u9488\u5BF9\u7684\u662F\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF08reactive\u5C01\u88C5\u7684\uFF09\u975E\u666E\u901A\u5BF9\u8C61</li><li>\u6CE8\u610F\uFF1A<strong>\u4E0D\u521B\u9020</strong>\u54CD\u5E94\u5F0F\uFF0C\u800C\u662F<strong>\u5EF6\u7EED</strong>\u54CD\u5E94\u5F0F</li></ul><p>\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5B9A\u4E49\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">useFeatureX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// \u8FD4\u56DE\u65F6\u8F6C\u4E3A ref</span>
  <span class="token keyword">return</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53EF\u4EE5\u5728\u4E0D\u5931\u53BB\u54CD\u5E94\u6027\u7684\u60C5\u51B5\u4E0B\u7834\u574F\u7ED3\u6784</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFeatureX</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,16);function p(o,e){return t}var l=s(a,[["render",p]]);export{l as default};
