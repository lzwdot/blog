import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const t={},a=n(`<h1 id="vue-\u6A21\u677F\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#vue-\u6A21\u677F\u7F16\u8BD1" aria-hidden="true">#</a> Vue \u6A21\u677F\u7F16\u8BD1</h1><p>with \u8BED\u6CD5</p><ul><li>\u524D\u7F6E\u77E5\u8BC6\uFF1AJS \u7684 with \u8BED\u6CD5</li><li>vue template complier \u5C06\u6A21\u677F\u7F16\u8BD1\u4E3A render \u51FD\u6570</li><li>\u6267\u884C render \u51FD\u6570\u751F\u6210 vnode</li></ul><p>with \u8BED\u6CD5\uFF0C\u4E0D\u63A8\u8350\u4F7F\u7528</p><ul><li>\u6539\u53D8 {} \u5185\u81EA\u7531\u53D8\u91CF\u7684\u67E5\u627E\u89C4\u5219\uFF0C\u5F53\u505A obj \u7684\u5C5E\u6027\u6765\u67E5\u627E</li><li>\u5982\u679C\u627E\u4E0D\u5230\u5339\u914D\u7684 obj \u5C5E\u6027\uFF0C\u5C31\u4F1A\u62A5\u9519</li><li>with \u8981\u614E\u7528\uFF0C\u5B83\u6253\u7834\u4E86\u4F5C\u7528\u57DF\u89C4\u5219\uFF0C\u6613\u8BFB\u6027\u53D8\u5DEE</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>a<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>b<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>c<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
<span class="token comment">// \u4F7F\u7528 with\uFF0C\u80FD\u6539\u53D8 {} \u5185\u81EA\u7531\u53D8\u91CF\u7684\u67E5\u627E\u65B9\u5F0F</span>
<span class="token comment">// \u5C06 {} \u5185\u81EA\u7531\u53D8\u91CF\uFF0C\u5F53\u505A obj \u7684\u5C5E\u6027\u6765\u67E5\u627E</span>
<span class="token keyword">with</span> <span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// \u62A5\u9519</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>\u6A21\u677F\u7F16\u8BD1</p><ul><li>\u6A21\u677F\u4E0D\u662F html\uFF0C\u6709\u6307\u4EE4\uFF0C\u63D2\u503C\uFF0CJS \u8868\u8FBE\u5F0F\uFF0C\u80FD\u5B9E\u73B0\u5224\u65AD\uFF0C\u5FAA\u73AF</li><li>html \u662F\u6807\u7B7E\u8BED\u8A00\uFF0C\u53EA\u6709 JS \u624D\u80FD\u5B9E\u73B0\u5224\u65AD\uFF0C\u5FAA\u73AF\uFF08\u56FE\u7075\u5B8C\u5907\u7684\uFF09</li><li>\u56E0\u6B64\uFF0C\u6A21\u677F\u4E00\u5B9A\u662F\u8F6C\u6362\u6210\u67D0\u79CD JS \u4EE3\u7801\uFF0C\u5373\u7F16\u8BD1\u6A21\u677F</li></ul><p>\u4EE3\u7801\u6F14\u793A\uFF0C\u9700\u8981\u5F15\u5165 vue-template-compiler</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> compiler <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-template-compiler&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u63D2\u503C</span>
<span class="token comment">// const template = \`&lt;p&gt;{{message}}&lt;/p&gt;\`</span>
<span class="token comment">// with(this){return createElement(&#39;p&#39;,[createTextVNode(toString(message))])}</span>
<span class="token comment">// h -&gt; vnode</span>
<span class="token comment">// createElement -&gt; vnode</span>
<span class="token comment">// \u8868\u8FBE\u5F0F</span>
<span class="token comment">// const template = \`&lt;p&gt;{{flag ? message : &#39;no message found&#39;}}&lt;/p&gt;\`</span>
<span class="token comment">// with(this){return _c(&#39;p&#39;,[_v(_s(flag ? message : &#39;no message found&#39;))])}</span>
<span class="token comment">// \u5C5E\u6027\u548C\u52A8\u6001\u5C5E\u6027</span>
<span class="token comment">// const template = \`</span>
<span class="token comment">//     &lt;div id=&quot;div1&quot; class=&quot;container&quot;&gt;</span>
<span class="token comment">//         &lt;img :src=&quot;imgUrl&quot;/&gt;</span>
<span class="token comment">//     &lt;/div&gt;</span>
<span class="token comment">// \`</span>
<span class="token comment">// with(this){return _c(&#39;div&#39;,</span>
<span class="token comment">//      {staticClass:&quot;container&quot;,attrs:{&quot;id&quot;:&quot;div1&quot;}},</span>
<span class="token comment">//      [</span>
<span class="token comment">//          _c(&#39;img&#39;,{attrs:{&quot;src&quot;:imgUrl}})])}</span>
<span class="token comment">// \u6761\u4EF6</span>
<span class="token comment">// const template = \`</span>
<span class="token comment">//     &lt;div&gt;</span>
<span class="token comment">//         &lt;p v-if=&quot;flag === &#39;a&#39;&quot;&gt;A&lt;/p&gt;</span>
<span class="token comment">//         &lt;p v-else&gt;B&lt;/p&gt;</span>
<span class="token comment">//     &lt;/div&gt;</span>
<span class="token comment">// \`</span>
<span class="token comment">// with(this){return _c(&#39;div&#39;,[(flag === &#39;a&#39;)?_c(&#39;p&#39;,[_v(&quot;A&quot;)]):_c(&#39;p&#39;,[_v(&quot;B&quot;)])])}</span>
<span class="token comment">// \u5FAA\u73AF</span>
<span class="token comment">// const template = \`</span>
<span class="token comment">//     &lt;ul&gt;</span>
<span class="token comment">//         &lt;li v-for=&quot;item in list&quot; :key=&quot;item.id&quot;&gt;{{item.title}}&lt;/li&gt;</span>
<span class="token comment">//     &lt;/ul&gt;</span>
<span class="token comment">// \`</span>
<span class="token comment">// with(this){return _c(&#39;ul&#39;,_l((list),function(item){return _c(&#39;li&#39;,{key:item.id},[_v(_s(item.title))])}),0)}</span>
<span class="token comment">// \u4E8B\u4EF6</span>
<span class="token comment">// const template = \`</span>
<span class="token comment">//     &lt;button @click=&quot;clickHandler&quot;&gt;submit&lt;/button&gt;</span>
<span class="token comment">// \`</span>
<span class="token comment">// with(this){return _c(&#39;button&#39;,{on:{&quot;click&quot;:clickHandler}},[_v(&quot;submit&quot;)])}</span>
<span class="token comment">// v-model</span>
<span class="token comment">// const template = \`&lt;input type=&quot;text&quot; v-model=&quot;name&quot;&gt;\`</span>
<span class="token comment">// \u4E3B\u8981\u770B input \u4E8B\u4EF6</span>
<span class="token comment">// with(this){return _c(&#39;input&#39;,{directives:[{name:&quot;model&quot;,rawName:&quot;v-model&quot;,value:(name),expression:&quot;name&quot;}],attrs:{&quot;type&quot;:&quot;text&quot;},domProps:{&quot;value&quot;:(name)},on:{&quot;input&quot;:function($event){if($event.target.composing)return;name=$event.target.value}}})}</span>
<span class="token comment">// render \u51FD\u6570</span>
<span class="token comment">// \u8FD4\u56DE vnode</span>
<span class="token comment">// patch</span>
<span class="token comment">// \u7F16\u8BD1</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> compiler<span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>template<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>render<span class="token punctuation">)</span>
<span class="token comment">// ---------------\u5206\u5272\u7EBF--------------</span>
<span class="token comment">// // \u4ECE vue \u6E90\u7801\u4E2D\u627E\u5230\u7F29\u5199\u51FD\u6570\u7684\u542B\u4E49</span>
<span class="token comment">// function installRenderHelpers (target) {</span>
<span class="token comment">//     target._o = markOnce;</span>
<span class="token comment">//     target._n = toNumber;</span>
<span class="token comment">//     target._s = toString;</span>
<span class="token comment">//     target._l = renderList;</span>
<span class="token comment">//     target._t = renderSlot;</span>
<span class="token comment">//     target._q = looseEqual;</span>
<span class="token comment">//     target._i = looseIndexOf;</span>
<span class="token comment">//     target._m = renderStatic;</span>
<span class="token comment">//     target._f = resolveFilter;</span>
<span class="token comment">//     target._k = checkKeyCodes;</span>
<span class="token comment">//     target._b = bindObjectProps;</span>
<span class="token comment">//     target._v = createTextVNode;</span>
<span class="token comment">//     target._e = createEmptyVNode;</span>
<span class="token comment">//     target._u = resolveScopedSlots;</span>
<span class="token comment">//     target._g = bindObjectListeners;</span>
<span class="token comment">//     target._d = bindDynamicKeys;</span>
<span class="token comment">//     target._p = prependModifier;</span>
<span class="token comment">// } </span>
</code></pre></div><ul><li>\u6A21\u677F\u7F16\u8BD1\u4E3A render \u51FD\u6570\uFF0C\u6267\u884C render \u51FD\u6570\u8FD4\u56DE vnode</li><li>\u57FA\u4E8E vnode \u518D\u6267\u884C patch \u548C diff</li><li>\u4F7F\u7528 webpack vue-loader\uFF0C\u4F1A\u5728\u5F00\u53D1\u73AF\u5883\u4E0B\u7F16\u8BD1\u6A21\u677F\uFF08\u91CD\u8981\uFF09</li></ul>`,11);function e(o,p){return a}var m=s(t,[["render",e]]);export{m as default};
