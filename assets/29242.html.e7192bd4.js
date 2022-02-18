import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="watch-\u548C-watcheffect-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#watch-\u548C-watcheffect-\u7684\u533A\u522B" aria-hidden="true">#</a> watch \u548C watchEffect \u7684\u533A\u522B</h1><p>watchEffect \u662F\u65B0\u7279\u6027</p><ul><li>\u4E24\u8005\u90FD\u53EF\u4EE5\u76D1\u542C data \u5C5E\u6027\u53D8\u5316</li><li>watch \u9700\u8981\u660E\u786E\u76D1\u542C\u54EA\u4E2A\u5C5E\u6027</li><li>watchEffect \u4F1A\u6839\u636E\u5176\u4E2D\u7684\u5C5E\u6027\uFF0C\u81EA\u52A8\u76D1\u542C\u5176\u53D8\u5316</li></ul><p>\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>watch vs watchEffect <span class="token punctuation">{</span><span class="token punctuation">{</span> numberRef <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> age <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> toRefs<span class="token punctuation">,</span> watch<span class="token punctuation">,</span> watchEffect<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Watch&quot;</span><span class="token punctuation">,</span>
 <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> numberRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
   <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lzw.&#39;</span><span class="token punctuation">,</span>
     <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>

   <span class="token comment">// ==== watch =====</span>
   <span class="token function">watch</span><span class="token punctuation">(</span>numberRef<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ref watch&#39;</span><span class="token punctuation">,</span> newVal<span class="token punctuation">,</span> oldVal<span class="token punctuation">)</span> <span class="token comment">// ref watch 100 undefined</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
     <span class="token comment">// immediate: true,// \u521D\u59CB\u5316\u4E4B\u524D\u5C31\u76D1\u542C\uFF0C\u53EF\u9009</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>

   <span class="token function">watch</span><span class="token punctuation">(</span>
       <span class="token comment">// \u53C2\u6570\u4E00\uFF0C\u8981\u76D1\u542C\u7684\u5C5E\u6027</span>
       <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>age<span class="token punctuation">,</span>

       <span class="token comment">// \u53C2\u6570\u4E8C\uFF0C\u56DE\u8C03\u51FD\u6570</span>
       <span class="token punctuation">(</span><span class="token parameter">newAge<span class="token punctuation">,</span> oldAge</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
         console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;state watch&#39;</span><span class="token punctuation">,</span> newAge<span class="token punctuation">,</span> oldAge<span class="token punctuation">)</span> <span class="token comment">// state watch 25 20</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>

       <span class="token comment">// \u53C2\u6570\u4E09\uFF0C\u914D\u7F6E\u9879</span>
       <span class="token punctuation">{</span>
         <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u521D\u59CB\u5316\u4E4B\u524D\u5C31\u76D1\u542C\uFF0C\u53EF\u9009</span>
         <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// \u6DF1\u5EA6\u76D1\u542C</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">)</span>

   <span class="token comment">// ==== watchEffect =====</span>
   <span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     <span class="token comment">// \u521D\u59CB\u5316\u65F6\uFF0C\u4E00\u5B9A\u4F1A\u6267\u884C\u4E00\u6B21\uFF08\u6536\u96C6\u8981\u76D1\u542C\u7684\u6570\u636E\uFF09</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello watchEffect&#39;</span><span class="token punctuation">)</span>
     <span class="token comment">// \u81EA\u52A8\u76D1\u542C state.name</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;state.name&#39;</span><span class="token punctuation">,</span> state<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// state.name lzw.A</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>


   <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     state<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">25</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
   <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     state<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;lzw.A&#39;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>

   <span class="token keyword">return</span> <span class="token punctuation">{</span>
     numberRef<span class="token punctuation">,</span>
     <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div>`,5);function p(o,c){return t}var l=s(a,[["render",p]]);export{l as default};
