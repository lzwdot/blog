import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u5982\u4F55\u7406\u89E3-ref\u3001toref-\u548C-torefs" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u7406\u89E3-ref\u3001toref-\u548C-torefs" aria-hidden="true">#</a> \u5982\u4F55\u7406\u89E3 ref\u3001toRef \u548C toRefs</h1><p>ref\u3001toRef \u548C toRefs \u662F\u4EC0\u4E48</p><h2 id="ref-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#ref-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> ref \u662F\u4EC0\u4E48</h2><ul><li>\u751F\u6210\u503C\u7C7B\u578B\u7684\u54CD\u5E94\u5F0F\u6570\u636E</li><li>\u53EF\u7528\u4E8E\u6A21\u677F\u548C reactive</li><li>\u901A\u8FC7 .value \u4FEE\u6539\u503C</li><li>\u901A\u8FC7 ref \u83B7\u53D6 dom</li></ul><p>\u4EE3\u7801\u6F14\u793A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>p ref<span class="token operator">=</span><span class="token string">&quot;elemRef&quot;</span><span class="token operator">&gt;</span>ref demo <span class="token punctuation">{</span><span class="token punctuation">{</span> nameRef <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> state<span class="token punctuation">.</span>age <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> onMounted<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Ref&quot;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u503C\u7C7B\u578B \u54CD\u5E94\u5F0F</span>
    <span class="token keyword">const</span> nameRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;lzw.&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> ageRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> nameRef<span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> ageRef
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// \u901A\u8FC7 .value \u83B7\u53D6\u503C\u4FEE\u6539\u503C</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ageRef&#39;</span><span class="token punctuation">,</span> ageRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
      ageRef<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">25</span> <span class="token comment">// .value \u4FEE\u6539\u503C</span>
      nameRef<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;lzw. A&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>

    <span class="token comment">// \u901A\u8FC7 ref \u83B7\u53D6 dom \u5143\u7D20</span>
    <span class="token keyword">const</span> elemRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;elemRef&#39;</span><span class="token punctuation">,</span> elemRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span> <span class="token comment">// elemRef ref demo lzw. 20</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      nameRef<span class="token punctuation">,</span>
      state<span class="token punctuation">,</span>
      elemRef
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><h2 id="toref-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#toref-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> toRef \u662F\u4EC0\u4E48</h2><ul><li>\u9488\u5BF9\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF08reactive \u5C01\u88C5\uFF09\u7684 prop\uFF08\u5C5E\u6027\uFF09</li><li>\u521B\u5EFA\u4E00\u4E2A ref\uFF0C\u5177\u6709\u54CD\u5E94\u5F0F</li><li>\u4E24\u8005\u4FDD\u6301\u5F15\u7528\u5173\u7CFB</li></ul><p>\u4EE3\u7801\u6F14\u793A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>p ref<span class="token operator">=</span><span class="token string">&quot;elemRef&quot;</span><span class="token operator">&gt;</span>toRef demo <span class="token punctuation">{</span><span class="token punctuation">{</span> state<span class="token punctuation">.</span>name <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">{</span> state<span class="token punctuation">.</span>age <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">-</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> ageRef <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>toRef<span class="token punctuation">,</span> reactive<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Ref&quot;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5BF9\u8C61\u5B9E\u73B0\u54CD\u5E94\u5F0F\uFF0C\u4F7F\u7528 reactive</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lzw.&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// toRef \u5982\u679C\u7528\u4E8E\u975E\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u4EA7\u51FA\u7684\u7ED3\u679C\u4E0D\u5177\u5907\u54CD\u5E94\u5F0F</span>
    <span class="token comment">// const state = {</span>
    <span class="token comment">//   name: &#39;lzw.&#39;,</span>
    <span class="token comment">//   age: 20</span>
    <span class="token comment">// }</span>

    <span class="token comment">// \u54CD\u5E94\u5F0F\u5BF9\u8C61\u7684\u4E00\u4E2A\u5C5E\u6027\u5B9E\u73B0\u54CD\u5E94\u5F0F\uFF0C\u4F7F\u7528 toRef</span>
    <span class="token keyword">const</span> ageRef <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">25</span> <span class="token comment">// state.age \u548C ageRef \u4FDD\u6301\u5F15\u7528\u5173\u7CFB</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      ageRef<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">30</span>  <span class="token comment">// state.age \u548C ageRef \u4FDD\u6301\u5F15\u7528\u5173\u7CFB</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">,</span>
      ageRef
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><h2 id="torefs-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#torefs-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> toRefs \u662F\u4EC0\u4E48</h2><ul><li>\u5C06\u54CD\u5E94\u662F\u5BF9\u8C61\uFF08reactive \u5C01\u88C5\uFF09\u8F6C\u4E3A\u666E\u901A\u5BF9\u8C61</li><li>\u5BF9\u8C61\u7684\u6BCF\u4E2A prop\uFF08\u5C5E\u6027\uFF09 \u90FD\u662F\u5BF9\u5E94\u7684 ref</li><li>\u4E24\u8005\u4FDD\u6301\u5F15\u7528\u5173\u7CFB</li></ul><p>\u4EE3\u7801\u6F14\u793A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>p ref<span class="token operator">=</span><span class="token string">&quot;elemRef&quot;</span><span class="token operator">&gt;</span>toRefs demo <span class="token punctuation">{</span><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> age <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>toRefs<span class="token punctuation">,</span> reactive<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;toRefs&quot;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5BF9\u8C61\u5B9E\u73B0\u54CD\u5E94\u5F0F\uFF0C\u4F7F\u7528 reactive</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lzw.&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// \u5C06\u54CD\u5E94\u5F0F\u5BF9\u8C61\u53D8\u4E3A\u666E\u901A\u5BF9\u8C61\uFF0C\u540C\u65F6\u4FDD\u7559\u54CD\u5E94\u5F0F</span>
    <span class="token keyword">const</span> stateAsRefs <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>

    <span class="token comment">// \u6BCF\u4E2A\u5C5E\u6027\uFF0C\u90FD\u662F ref \u5BF9\u8C61</span>
    <span class="token comment">// const {name: nameRef, age: ageRef} = stateAsRefs</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">25</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> stateAsRefs
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><h2 id="ref-toref-\u548Ctorefs-\u7684\u6700\u4F73\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#ref-toref-\u548Ctorefs-\u7684\u6700\u4F73\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> ref toRef \u548CtoRefs \u7684\u6700\u4F73\u4F7F\u7528\u65B9\u5F0F</h2><p>\u5408\u5E76\u51FD\u6570\u8FD4\u56DE\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u6BD4\u5982</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5B9A\u4E49\u51FD\u6570</span>
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
</code></pre></div><ul><li>\u7528 reactive \u505A\u5BF9\u8C61\u7684\u54CD\u5E94\u5F0F\uFF0C\u7528 ref \u505A\u503C\u7C7B\u578B\u54CD\u5E94\u5F0F</li><li>setup \u4E2D\u8FD4\u56DE toRefs(state)\uFF0C\u6216\u8005 toRef(state,&#39;xxx&#39;)</li><li>ref \u7684\u53D8\u91CF\u547D\u540D\u90FD\u7528 xxxRef</li><li>\u5408\u5E76\u51FD\u6570\u8FD4\u56DE\u54CD\u5E94\u5F0F\u5BF9\u8C61\u65F6\uFF0C\u4F7F\u7528 toRefs</li></ul>`,18);function p(o,e){return t}var u=s(a,[["render",p]]);export{u as default};
