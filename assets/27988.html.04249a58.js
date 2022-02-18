import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h3 id="\u7B80\u6613\u7248-vuerouter-\u76F4\u63A5\u5F15\u5165\u4E5F\u53EF\u4EE5\u7528" tabindex="-1"><a class="header-anchor" href="#\u7B80\u6613\u7248-vuerouter-\u76F4\u63A5\u5F15\u5165\u4E5F\u53EF\u4EE5\u7528" aria-hidden="true">#</a> \u7B80\u6613\u7248 VueRouter\uFF0C\u76F4\u63A5\u5F15\u5165\u4E5F\u53EF\u4EE5\u7528</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> Vue <span class="token comment">// \u63D2\u4EF6\u4E2D\u7684\u5168\u5C40 Vue</span>
<span class="token keyword">class</span> <span class="token class-name">VueRouter</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$options <span class="token operator">=</span> options
    <span class="token keyword">this</span><span class="token punctuation">.</span>current <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;/&#39;</span>

    <span class="token comment">// \u5229\u7528 vue \u5DE5\u5177\u51FD\u6570\u628A matched \u8BBE\u7F6E\u4E3A\u54CD\u5E94\u5F0F\u6570\u636E</span>
    Vue<span class="token punctuation">.</span>util<span class="token punctuation">.</span><span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&#39;matched&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u9012\u5F52\u51FA routes \u8868</span>

    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;hashchange&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onHashchange</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onHashchange</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">onHashchange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>current <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>matched <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">match</span><span class="token punctuation">(</span><span class="token parameter">routes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    routes <span class="token operator">=</span> routes <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>routes
    <span class="token comment">// \u9012\u5F52\u904D\u5386</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> route <span class="token keyword">of</span> routes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// / \u8DEF\u7531</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token string">&#39;/&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>current <span class="token operator">===</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>matched<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// /helle/child \u5B50\u8DEF\u7531</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span>path <span class="token operator">!==</span> <span class="token string">&#39;/&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>matched<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token comment">// \u9012\u5F52\u5B50\u8DEF\u7531</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// _Vue \u5728 vue.use \u65F6\u4F20\u5165</span>
VueRouter<span class="token punctuation">.</span><span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">_Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Vue <span class="token operator">=</span> _Vue <span class="token comment">//\u4FDD\u5B58\u53C2\u5165\u7684 Vue\uFF0C\u4E0D\u7528\u5F15\u5165\u4E5F\u80FD\u4F7F\u7528</span>

  <span class="token comment">// \u5168\u5C40\u6DF7\u5165\uFF0C\u6302\u8F7D $router\uFF0C\u5EF6\u8FDF\u4E0B\u9762\u903B\u8F91\u5230 router \u88AB\u6DFB\u52A0\u5230 new vue \u9009\u9879\u65F6\u624D\u6267\u884C</span>
  Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>router<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$router <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>router
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// router-link,router-view\u7EC4\u4EF6</span>
  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;router-link&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// template: &#39;&lt;a&gt;aaa&lt;/a&gt;&#39;</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
        <span class="token literal-property property">require</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;#&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>to<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>default<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;router-view&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// template: &#39;&lt;a&gt;bbb&lt;/a&gt;&#39;</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6807\u8BB0\u5F53\u524D router-view \u6DF1\u5EA6</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>routerView <span class="token operator">=</span> <span class="token boolean">true</span>

      <span class="token keyword">let</span> depth <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment">// \u6DF1\u5EA6</span>
      <span class="token keyword">let</span> parent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$parent <span class="token comment">// vue \u4E2D vnode \u91CC\u6709\u4E00\u4E2A $parent \u5C5E\u6027</span>

      <span class="token keyword">while</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> vnodeData <span class="token operator">=</span> parent<span class="token punctuation">.</span>$vnode <span class="token operator">&amp;&amp;</span> parent<span class="token punctuation">.</span>$vnode<span class="token punctuation">.</span>data
        <span class="token keyword">if</span> <span class="token punctuation">(</span>vnodeData <span class="token operator">&amp;&amp;</span> vnodeData<span class="token punctuation">.</span>routerView<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u5F53\u524D parent \u662F\u4E00\u4E2A router-view</span>
          depth<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        parent <span class="token operator">=</span> parent<span class="token punctuation">.</span>$parent
      <span class="token punctuation">}</span>


      <span class="token comment">// \u901A\u8FC7 depth \u83B7\u53D6\u5F53\u524D\u8DEF\u7531\u5BF9\u5E94\u7684\u7EC4\u4EF6</span>
      <span class="token keyword">let</span> component <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span>matched<span class="token punctuation">[</span>depth<span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>route<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        component <span class="token operator">=</span> route<span class="token punctuation">.</span>component
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> VueRouter

</code></pre></div>`,2);function p(o,e){return t}var l=s(a,[["render",p]]);export{l as default};
