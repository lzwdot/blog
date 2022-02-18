import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u4E86\u89E3\u4E0B\u7EC4\u4EF6\u5316\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u4E86\u89E3\u4E0B\u7EC4\u4EF6\u5316\u673A\u5236" aria-hidden="true">#</a> \u4E86\u89E3\u4E0B\u7EC4\u4EF6\u5316\u673A\u5236</h1><p>\u6D4B\u8BD5\u4EE3\u7801</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Vue\u6E90\u7801\u5256\u6790<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../../dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Vue\u7EC4\u4EF6\u5316\u673A\u5236<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>comp</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>comp</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;comp&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;I am comp&lt;/div&gt;&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">// \u521B\u5EFA\u5B9E\u4F8B</span>
        <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#demo&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>render<span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u4EE5\u4E0A\u88AB\u7F16\u8BD1\u6210 render \u51FD\u6570\u683C\u5F0F:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">with</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token function">_c</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">attrs</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;demo&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token function">_c</span><span class="token punctuation">(</span><span class="token string">&#39;h1&#39;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token function">_v</span><span class="token punctuation">(</span><span class="token string">&quot;Vue\u7EC4\u4EF6\u5316\u673A\u5236&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">_v</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">_c</span><span class="token punctuation">(</span><span class="token string">&#39;comp&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre></div><p>\u5206\u6790\u5F00\u59CB\uFF0C\u9996\u5148\u4ECE\u521D\u59CB\u5316\u5168\u5C40 <code>initGlobalAPI</code> \u8FDB\u5165 <code>src/core/global-api/index.js</code>, \u6709\u8FD9\u6837\u4E00\u6BB5\u4EE3\u7801</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u904D\u5386 ASSET_TYPES\uFF1A components/filters/directives</span>
<span class="token constant">ASSET_TYPES</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">type</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  Vue<span class="token punctuation">.</span>options<span class="token punctuation">[</span>type <span class="token operator">+</span> <span class="token string">&#39;s&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4E0B\u9762\u67E5\u770B <code>ASSET_TYPES</code> \u7684 <code>components</code> \u521D\u59CB\u5316\u914D\u7F6E\uFF0C\u8FDB\u5165 <code>src/core/global-api/assets.js</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// ASSET_TYPES = [&#39;component&#39;,&#39;directive&#39;,&#39;filter&#39;]</span>
<span class="token constant">ASSET_TYPES</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">type</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u58F0\u660E\u9759\u6001\u65B9\u6CD5  Vue.component = function(){}</span>
  <span class="token comment">// \u5E73\u65F6\u4F7F\u7528 Vue.component(&#39;comp&#39;,{})</span>
  Vue<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">id</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token literal-property property">definition</span><span class="token operator">:</span> Function <span class="token operator">|</span> Object</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> Function <span class="token operator">|</span> Object <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>definition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">[</span>type <span class="token operator">+</span> <span class="token string">&#39;s&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span>id<span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">/* istanbul ignore if */</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> type <span class="token operator">===</span> <span class="token string">&#39;component&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">validateComponentName</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;component&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isPlainObject</span><span class="token punctuation">(</span>definition<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// name \u7684\u8BBE\u7F6E</span>
        definition<span class="token punctuation">.</span>name <span class="token operator">=</span> definition<span class="token punctuation">.</span>name <span class="token operator">||</span> id
        <span class="token comment">// Vue.extend({}) =&gt; \u8FD4\u56DE\u7EC4\u4EF6\u7684\u6784\u9020\u51FD\u6570 Ctor</span>
        <span class="token comment">// \u5C31\u53EF\u4EE5\u4F7F\u7528 new Ctor</span>
        <span class="token comment">// \u5C06\u4F20\u5165\u7684\u7EC4\u4EF6\u914D\u7F6E\u5BF9\u8C61\u8F6C\u4E3A\u7EC4\u4EF6\u7684\u6784\u9020\u51FD\u6570</span>
        definition <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>_base<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>definition<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;directive&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> definition <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        definition <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">bind</span><span class="token operator">:</span> definition<span class="token punctuation">,</span> <span class="token literal-property property">update</span><span class="token operator">:</span> definition <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u5411\u5168\u5C40\u7684\u9009\u9879\u52A0\u5165\u5168\u5C40\u7EC4\u4EF6\u914D\u7F6E\u5BF9\u8C61</span>
      <span class="token comment">// components[id] = Ctor</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">[</span>type <span class="token operator">+</span> <span class="token string">&#39;s&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> definition
      <span class="token keyword">return</span> definition
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4EE5\u4E0A <code>components</code> \u521D\u59CB\u5316\u540E\uFF0C\u63A5\u7740\u8FDB\u884C\u7EC4\u4EF6\u8F6C\u865A\u62DF <code>dom</code>, \u5206\u6790 <code>_createElement</code> \u51FD\u6570\u4E5F\u5C31\u662F <code>render</code> \u4E2D\u7684 <code>h</code> \u51FD\u6570\uFF0C\u8FDB\u5165 <code>src/core/vdom/create-element.js</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5C06\u4F20\u5165\u7684\u7EC4\u4EF6\u914D\u7F6E\u8F6C\u4E3A Vnode</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">_createElement</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">context</span><span class="token operator">:</span> Component<span class="token punctuation">,</span>
  tag<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> Class<span class="token operator">&lt;</span>Component<span class="token operator">&gt;</span> <span class="token operator">|</span> Function <span class="token operator">|</span> Object<span class="token punctuation">,</span>
  data<span class="token operator">?</span><span class="token operator">:</span> VNodeData<span class="token punctuation">,</span>
  children<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  normalizationType<span class="token operator">?</span><span class="token operator">:</span> number</span>
<span class="token punctuation">)</span><span class="token operator">:</span> VNode <span class="token operator">|</span> Array<span class="token operator">&lt;</span>VNode<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span>__ob__<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">warn</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Avoid using observed data object as vnode data: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
      <span class="token string">&#39;Always create fresh vnode data objects in each render!&#39;</span><span class="token punctuation">,</span>
      context
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token function">createEmptyVNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// object syntax in v-bind</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>is<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    tag <span class="token operator">=</span> data<span class="token punctuation">.</span>is
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// in case of component :is set to falsy value</span>
    <span class="token keyword">return</span> <span class="token function">createEmptyVNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// warn against non-primitive key</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span>
    <span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isPrimitive</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>key<span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>__WEEX__ <span class="token operator">||</span> <span class="token operator">!</span><span class="token punctuation">(</span><span class="token string">&#39;@binding&#39;</span> <span class="token keyword">in</span> data<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">warn</span><span class="token punctuation">(</span>
        <span class="token string">&#39;Avoid using non-primitive value as key, &#39;</span> <span class="token operator">+</span>
        <span class="token string">&#39;use string/number value instead.&#39;</span><span class="token punctuation">,</span>
        context
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// support single function children as default scoped slot</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
    <span class="token keyword">typeof</span> children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">=</span> data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    data<span class="token punctuation">.</span>scopedSlots <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
    children<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>normalizationType <span class="token operator">===</span> <span class="token constant">ALWAYS_NORMALIZE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    children <span class="token operator">=</span> <span class="token function">normalizeChildren</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>normalizationType <span class="token operator">===</span> <span class="token constant">SIMPLE_NORMALIZE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    children <span class="token operator">=</span> <span class="token function">simpleNormalizeChildren</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u6838\u5FC3\u903B\u8F91\uFF0C\u5224\u65AD h(App)\uFF0C\u6216\u8005 h(&#39;div&#39;)</span>
  <span class="token keyword">let</span> vnode<span class="token punctuation">,</span> ns
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> tag <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> Ctor
    ns <span class="token operator">=</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>$vnode <span class="token operator">&amp;&amp;</span> context<span class="token punctuation">.</span>$vnode<span class="token punctuation">.</span>ns<span class="token punctuation">)</span> <span class="token operator">||</span> config<span class="token punctuation">.</span><span class="token function">getTagNamespace</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span>
    <span class="token comment">// \u5224\u65AD\u662F\u5426\u662F\u4FDD\u7559\u6807\u7B7E\uFF1Adiv p span ...</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">isReservedTag</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// platform built-in elements</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>nativeOn<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">warn</span><span class="token punctuation">(</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">The .native modifier for v-on is only valid on components but it was used on &lt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>tag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&gt;.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
          context
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      vnode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VNode</span><span class="token punctuation">(</span>
        config<span class="token punctuation">.</span><span class="token function">parsePlatformTagName</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> children<span class="token punctuation">,</span>
        <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> context
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">!</span>data <span class="token operator">||</span> <span class="token operator">!</span>data<span class="token punctuation">.</span>pre<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>Ctor <span class="token operator">=</span> <span class="token function">resolveAsset</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>$options<span class="token punctuation">,</span> <span class="token string">&#39;components&#39;</span><span class="token punctuation">,</span> tag<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// component</span>
      <span class="token comment">// Ctor \u5C31\u662F\u4ECE components \u4E2D\u62FF\u51FA\u6765\u7684\u7EC4\u4EF6\u6784\u9020\u51FD\u6570</span>
      vnode <span class="token operator">=</span> <span class="token function">createComponent</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">,</span> data<span class="token punctuation">,</span> context<span class="token punctuation">,</span> children<span class="token punctuation">,</span> tag<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// unknown or unlisted namespaced elements</span>
      <span class="token comment">// check at runtime because it may get assigned a namespace when its</span>
      <span class="token comment">// parent normalizes children</span>
      vnode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VNode</span><span class="token punctuation">(</span>
        tag<span class="token punctuation">,</span> data<span class="token punctuation">,</span> children<span class="token punctuation">,</span>
        <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> context
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// direct component options / constructor</span>
    vnode <span class="token operator">=</span> <span class="token function">createComponent</span><span class="token punctuation">(</span>tag<span class="token punctuation">,</span> data<span class="token punctuation">,</span> context<span class="token punctuation">,</span> children<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> vnode
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>ns<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token function">applyNS</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> ns<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token function">registerDeepBindings</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token keyword">return</span> vnode
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">createEmptyVNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6CBF\u7740 <code>createComponent</code> \u8FDB\u5165\u5230 <code>src/core/vdom/create-component.js</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createComponent</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">Ctor</span><span class="token operator">:</span> Class<span class="token operator">&lt;</span>Component<span class="token operator">&gt;</span> <span class="token operator">|</span> Function <span class="token operator">|</span> Object <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token operator">?</span>VNodeData<span class="token punctuation">,</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> Component<span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token operator">?</span>Array<span class="token operator">&lt;</span>VNode<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  tag<span class="token operator">?</span><span class="token operator">:</span> string</span>
<span class="token punctuation">)</span><span class="token operator">:</span> VNode <span class="token operator">|</span> Array<span class="token operator">&lt;</span>VNode<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> baseCtor <span class="token operator">=</span> context<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>_base

  <span class="token comment">// plain options object: turn it into a constructor</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Ctor <span class="token operator">=</span> baseCtor<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// if at this stage it&#39;s not a constructor or an async component factory,</span>
  <span class="token comment">// reject.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> Ctor <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Invalid Component definition: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">String</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> context<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// async component</span>
  <span class="token keyword">let</span> asyncFactory
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">.</span>cid<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    asyncFactory <span class="token operator">=</span> Ctor
    Ctor <span class="token operator">=</span> <span class="token function">resolveAsyncComponent</span><span class="token punctuation">(</span>asyncFactory<span class="token punctuation">,</span> baseCtor<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Ctor <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// return a placeholder node for async component, which is rendered</span>
      <span class="token comment">// as a comment node but preserves all the raw information for the node.</span>
      <span class="token comment">// the information will be used for async server-rendering and hydration.</span>
      <span class="token keyword">return</span> <span class="token function">createAsyncPlaceholder</span><span class="token punctuation">(</span>
        asyncFactory<span class="token punctuation">,</span>
        data<span class="token punctuation">,</span>
        context<span class="token punctuation">,</span>
        children<span class="token punctuation">,</span>
        tag
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5904\u7406\u7EC4\u4EF6\u7684\u5C5E\u6027</span>
  data <span class="token operator">=</span> data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// resolve constructor options in case global mixins are applied after</span>
  <span class="token comment">// component constructor creation</span>
  <span class="token function">resolveConstructorOptions</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span>

  <span class="token comment">// transform component v-model data into props &amp; events</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>model<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">transformModel</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">.</span>options<span class="token punctuation">,</span> data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// extract props</span>
  <span class="token keyword">const</span> propsData <span class="token operator">=</span> <span class="token function">extractPropsFromVNodeData</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> Ctor<span class="token punctuation">,</span> tag<span class="token punctuation">)</span>

  <span class="token comment">// functional component</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">.</span>options<span class="token punctuation">.</span>functional<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">createFunctionalComponent</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">,</span> propsData<span class="token punctuation">,</span> data<span class="token punctuation">,</span> context<span class="token punctuation">,</span> children<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// extract listeners, since these needs to be treated as</span>
  <span class="token comment">// child component listeners instead of DOM listeners</span>
  <span class="token keyword">const</span> listeners <span class="token operator">=</span> data<span class="token punctuation">.</span>on
  <span class="token comment">// replace with listeners with .native modifier</span>
  <span class="token comment">// so it gets processed during parent component patch.</span>
  data<span class="token punctuation">.</span>on <span class="token operator">=</span> data<span class="token punctuation">.</span>nativeOn

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">.</span>options<span class="token punctuation">.</span>abstract<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// abstract components do not keep anything</span>
    <span class="token comment">// other than props &amp; listeners &amp; slot</span>

    <span class="token comment">// work around flow</span>
    <span class="token keyword">const</span> slot <span class="token operator">=</span> data<span class="token punctuation">.</span>slot
    data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>slot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      data<span class="token punctuation">.</span>slot <span class="token operator">=</span> slot
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// install component management hooks onto the placeholder node</span>
  <span class="token comment">// \u5B89\u88C5\u7EC4\u4EF6\u7BA1\u7406\u94A9\u5B50</span>
  <span class="token function">installComponentHooks</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

  <span class="token comment">// return a placeholder vnode</span>
  <span class="token keyword">const</span> name <span class="token operator">=</span> Ctor<span class="token punctuation">.</span>options<span class="token punctuation">.</span>name <span class="token operator">||</span> tag
  <span class="token comment">// \u6211\u7684\u7EC4\u4EF6\u540D\u5B57\uFF1Avue-component-1-comp</span>
  <span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VNode</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">vue-component-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Ctor<span class="token punctuation">.</span>cid<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    data<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> context<span class="token punctuation">,</span>
    <span class="token punctuation">{</span> Ctor<span class="token punctuation">,</span> propsData<span class="token punctuation">,</span> listeners<span class="token punctuation">,</span> tag<span class="token punctuation">,</span> children <span class="token punctuation">}</span><span class="token punctuation">,</span>
    asyncFactory
  <span class="token punctuation">)</span>

  <span class="token comment">// Weex specific: invoke recycle-list optimized @render function for</span>
  <span class="token comment">// extracting cell-slot template.</span>
  <span class="token comment">// https://github.com/Hanks10100/weex-native-directive/tree/master/component</span>
  <span class="token comment">/* istanbul ignore if */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>__WEEX__ <span class="token operator">&amp;&amp;</span> <span class="token function">isRecyclableComponent</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">renderRecyclableComponentTemplate</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> vnode
<span class="token punctuation">}</span>
</code></pre></div><p>\u8DDF\u7EC4\u4EF6\u5173\u7CFB\u91CD\u8981\u7684\u5B89\u88C5\u94A9\u5B50\u51FD\u6570\uFF0C\u6CE8\u610F\u6DFB\u52A0\u7684 <code>hook</code> \u94A9\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u7BA1\u7406\u94A9\u5B50\uFF1A\u5408\u5E76\u7528\u6237\u7F16\u5199\u7684\u94A9\u5B50\u548C\u7CFB\u7EDF\u9ED8\u8BA4\u7684\u94A9\u5B50</span>
<span class="token keyword">function</span> <span class="token function">installComponentHooks</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">data</span><span class="token operator">:</span> VNodeData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> hooks <span class="token operator">=</span> data<span class="token punctuation">.</span>hook <span class="token operator">||</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>hook <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// hooksToMerge \u94A9\u5B50\uFF1A [&#39;init&#39;,&#39;prepatch&#39;,&#39;insert&#39;,&#39;destory&#39;]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> hooksToMerge<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> hooksToMerge<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">const</span> existing <span class="token operator">=</span> hooks<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token keyword">const</span> toMerge <span class="token operator">=</span> componentVNodeHooks<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>existing <span class="token operator">!==</span> toMerge <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token punctuation">(</span>existing <span class="token operator">&amp;&amp;</span> existing<span class="token punctuation">.</span>_merged<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      hooks<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> existing <span class="token operator">?</span> <span class="token function">mergeHook</span><span class="token punctuation">(</span>toMerge<span class="token punctuation">,</span> existing<span class="token punctuation">)</span> <span class="token operator">:</span> toMerge
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0B\u9762\u7740\u91CD\u5206\u6790\u4E0B <code>init</code> \u94A9\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u7EC4\u4EF6\u7BA1\u7406\u7684\u94A9\u5B50\u5B9A\u4E49</span>
<span class="token keyword">const</span> componentVNodeHooks <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">init</span> <span class="token punctuation">(</span>vnode<span class="token operator">:</span> VNodeWithData<span class="token punctuation">,</span> <span class="token literal-property property">hydrating</span><span class="token operator">:</span> boolean<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token operator">?</span>boolean <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      vnode<span class="token punctuation">.</span>componentInstance <span class="token operator">&amp;&amp;</span>
      <span class="token operator">!</span>vnode<span class="token punctuation">.</span>componentInstance<span class="token punctuation">.</span>_isDestroyed <span class="token operator">&amp;&amp;</span>
      vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>keepAlive
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// kept-alive components, treat as a patch</span>
      <span class="token keyword">const</span> <span class="token literal-property property">mountedNode</span><span class="token operator">:</span> any <span class="token operator">=</span> vnode <span class="token comment">// work around flow</span>
      componentVNodeHooks<span class="token punctuation">.</span><span class="token function">prepatch</span><span class="token punctuation">(</span>mountedNode<span class="token punctuation">,</span> mountedNode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5F97\u5230\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5B9E\u4F8B</span>
      <span class="token keyword">const</span> child <span class="token operator">=</span> vnode<span class="token punctuation">.</span>componentInstance <span class="token operator">=</span> <span class="token function">createComponentInstanceForVnode</span><span class="token punctuation">(</span>
        vnode<span class="token punctuation">,</span>
        activeInstance
      <span class="token punctuation">)</span>
      <span class="token comment">// \u6302\u8F7D</span>
      child<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span>hydrating <span class="token operator">?</span> vnode<span class="token punctuation">.</span>elm <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u95EE\u9898\u6765\u4E86\uFF1F<code>init</code> \u94A9\u5B50\u4EC0\u4E48\u65F6\u5019\u6267\u884C\uFF0C\u4E5F\u5C31\u662F\u7236\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u7684\u5173\u7CFB<br> \u8FDB\u5165\u5230 <code>src/core/vdom/patch.js</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u9012\u5F52\u521B\u5EFA\u5143\u7D20\u548C\u7EC4\u4EF6</span>
<span class="token keyword">function</span> <span class="token function">createElm</span> <span class="token punctuation">(</span>
  <span class="token parameter">vnode<span class="token punctuation">,</span>
  insertedVnodeQueue<span class="token punctuation">,</span>
  parentElm<span class="token punctuation">,</span>
  refElm<span class="token punctuation">,</span>
  nested<span class="token punctuation">,</span>
  ownerArray<span class="token punctuation">,</span>
  index</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>elm<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>ownerArray<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// This vnode was used in a previous render!</span>
    <span class="token comment">// now it&#39;s used as a new node, overwriting its elm would cause</span>
    <span class="token comment">// potential patch errors down the road when it&#39;s used as an insertion</span>
    <span class="token comment">// reference node. Instead, we clone the node on-demand before creating</span>
    <span class="token comment">// associated DOM element for it.</span>
    vnode <span class="token operator">=</span> ownerArray<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">cloneVNode</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  vnode<span class="token punctuation">.</span>isRootInsert <span class="token operator">=</span> <span class="token operator">!</span>nested <span class="token comment">// for transition enter check</span>
  <span class="token comment">// \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u521B\u5EFA</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">createComponent</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> parentElm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u539F\u751F\u6807\u7B7E\u7684\u521B\u5EFA</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data
  <span class="token keyword">const</span> children <span class="token operator">=</span> vnode<span class="token punctuation">.</span>children
  <span class="token keyword">const</span> tag <span class="token operator">=</span> vnode<span class="token punctuation">.</span>tag
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>pre<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        creatingElmInVPre<span class="token operator">++</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUnknownElement</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> creatingElmInVPre<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">warn</span><span class="token punctuation">(</span>
          <span class="token string">&#39;Unknown custom element: &lt;&#39;</span> <span class="token operator">+</span> tag <span class="token operator">+</span> <span class="token string">&#39;&gt; - did you &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;register the component correctly? For recursive components, &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;make sure to provide the &quot;name&quot; option.&#39;</span><span class="token punctuation">,</span>
          vnode<span class="token punctuation">.</span>context
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    vnode<span class="token punctuation">.</span>elm <span class="token operator">=</span> vnode<span class="token punctuation">.</span>ns
      <span class="token operator">?</span> nodeOps<span class="token punctuation">.</span><span class="token function">createElementNS</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>ns<span class="token punctuation">,</span> tag<span class="token punctuation">)</span>
      <span class="token operator">:</span> nodeOps<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>
    <span class="token function">setScope</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span>

    <span class="token comment">/* istanbul ignore if */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__WEEX__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// in Weex, the default insertion order is parent-first.</span>
      <span class="token comment">// List items can be optimized to use children-first insertion</span>
      <span class="token comment">// with append=&quot;tree&quot;.</span>
      <span class="token keyword">const</span> appendAsTree <span class="token operator">=</span> <span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isTrue</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>appendAsTree<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>appendAsTree<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">invokeCreateHooks</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">insert</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token function">createChildren</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> children<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>appendAsTree<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">invokeCreateHooks</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">insert</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">createChildren</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> children<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">invokeCreateHooks</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token function">insert</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> data <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>pre<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      creatingElmInVPre<span class="token operator">--</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>isComment<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vnode<span class="token punctuation">.</span>elm <span class="token operator">=</span> nodeOps<span class="token punctuation">.</span><span class="token function">createComment</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
    <span class="token function">insert</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    vnode<span class="token punctuation">.</span>elm <span class="token operator">=</span> nodeOps<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
    <span class="token function">insert</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u521B\u5EFA</span>
<span class="token keyword">function</span> <span class="token function">createComponent</span> <span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> parentElm<span class="token punctuation">,</span> refElm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u67E5\u770B\u5B9E\u4F8B\u662F\u5426\u5DF2\u7ECF\u5B58\u5728</span>
    <span class="token keyword">const</span> isReactivated <span class="token operator">=</span> <span class="token function">isDef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>componentInstance<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> i<span class="token punctuation">.</span>keepAlive
    <span class="token comment">// \u83B7\u53D6 init \u94A9\u5B50</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>hook<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>init<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6267\u884C init()\uFF0C\u7EC4\u4EF6\u5B9E\u4F8B\u5316\u548C\u6302\u8F7D</span>
      <span class="token function">i</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> <span class="token boolean">false</span> <span class="token comment">/* hydrating */</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// after calling the init hook, if the vnode is a child component</span>
    <span class="token comment">// it should&#39;ve created a child instance and mounted it. the child</span>
    <span class="token comment">// component also has set the placeholder vnode&#39;s elm.</span>
    <span class="token comment">// in that case we can just return the element and be done.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>componentInstance<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5B9E\u4F8B\u521B\u5EFA\u5B8C\u6BD5\uFF0C\u521D\u59CB\u5316\u5B83\u7684\u5C5E\u6027</span>
      <span class="token function">initComponent</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span>
      <span class="token comment">// \u63D2\u5165\u5230 dom \u4E2D</span>
      <span class="token function">insert</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>isReactivated<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">reactivateComponent</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> parentElm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,19);function p(o,e){return t}var l=s(a,[["render",p]]);export{l as default};
