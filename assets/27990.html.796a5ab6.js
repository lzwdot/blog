import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h3 id="\u7B80\u6613\u7248-vuex-\u76F4\u63A5\u5F15\u5165\u4E5F\u53EF\u4EE5\u7528" tabindex="-1"><a class="header-anchor" href="#\u7B80\u6613\u7248-vuex-\u76F4\u63A5\u5F15\u5165\u4E5F\u53EF\u4EE5\u7528" aria-hidden="true">#</a> \u7B80\u6613\u7248 Vuex\uFF0C\u76F4\u63A5\u5F15\u5165\u4E5F\u53EF\u4EE5\u7528</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> Vue  <span class="token comment">// \u63D2\u4EF6\u5168\u5C40\u4F7F\u7528</span>

<span class="token keyword">class</span> <span class="token class-name">Store</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4FDD\u5B58\u7528\u6237\u5B9A\u4E49\u7684 mutations,actions,getters</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_mutations <span class="token operator">=</span> options<span class="token punctuation">.</span>mutations
    <span class="token keyword">this</span><span class="token punctuation">.</span>_actions <span class="token operator">=</span> options<span class="token punctuation">.</span>actions
    <span class="token keyword">this</span><span class="token punctuation">.</span>_getters <span class="token operator">=</span> options<span class="token punctuation">.</span>getters


    <span class="token comment">// \u66F4\u6B63 this \u6307\u5411</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>commit <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dispatch <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>

    <span class="token comment">// \u5B9E\u73B0 this.getters</span>
    <span class="token keyword">const</span> computed <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>getters <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_getters<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u7528\u6237\u5B9A\u4E49\u7684 getters \u65B9\u6CD5</span>
      <span class="token keyword">const</span> fn <span class="token operator">=</span> store<span class="token punctuation">.</span>_getters<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token comment">// \u65E0\u53C2\u6570\u5F62\u5F0F\u8BBF\u95EE this.getters.key</span>
      computed<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>state<span class="token punctuation">)</span>
      <span class="token comment">// \u54CD\u5E94\u5F0F\u53EA\u8BFB\u5C5E\u6027</span>
      Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>getters<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span>_vm<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Vue \u9ED8\u8BA4\u4F1A\u628A data \u904D\u5386\u5904\u7406\u6210\u54CD\u5E94\u5F0F</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">$$state</span><span class="token operator">:</span> options<span class="token punctuation">.</span>state<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      computed
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// es6 get set</span>
  <span class="token keyword">get</span> <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_vm<span class="token punctuation">.</span>_data<span class="token punctuation">.</span>$$state
  <span class="token punctuation">}</span>

  <span class="token keyword">set</span> <span class="token function">state</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;use replaceState to reset state&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">commit</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> entry <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_mutations<span class="token punctuation">[</span>type<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>entry<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;unknow mutations type&#39;</span><span class="token punctuation">)</span>

    <span class="token function">entry</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> entry <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_actions<span class="token punctuation">[</span>type<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>entry<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;unknow actions type&#39;</span><span class="token punctuation">)</span>

    <span class="token function">entry</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Vue.use \u65B9\u5F0F install.apply(this,[this,...])</span>
<span class="token keyword">function</span> <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">_Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Vue <span class="token operator">=</span> _Vue <span class="token comment">//\u4FDD\u5B58\u53C2\u5165\u7684 Vue\uFF0C\u4E0D\u7528\u5F15\u5165\u4E5F\u80FD\u4F7F\u7528</span>

  <span class="token comment">// \u5168\u5C40\u6DF7\u5165\uFF0C\u6302\u8F7D $store\uFF0C\u5EF6\u8FDF\u4E0B\u9762\u903B\u8F91\u5230 store \u88AB\u6DFB\u52A0\u5230 new vue \u9009\u9879\u65F6\u624D\u6267\u884C</span>
  Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>store<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$store <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>store
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>Store<span class="token punctuation">,</span> install<span class="token punctuation">}</span>
</code></pre></div>`,2);function p(o,e){return t}var k=s(a,[["render",p]]);export{k as default};
