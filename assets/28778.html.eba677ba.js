import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u7B80\u6613\u7248-vue-2-0-2-\u589E\u52A0\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u7B80\u6613\u7248-vue-2-0-2-\u589E\u52A0\u529F\u80FD" aria-hidden="true">#</a> \u7B80\u6613\u7248 Vue 2.0.2, \u589E\u52A0\u529F\u80FD</h1><p>\u589E\u52A0 <code>$mount(el)</code> \uFF0C\u4F5C\u7528\uFF1A</p><ul><li>\u83B7\u53D6\u5BBF\u4E3B</li><li><code>updateComponet</code></li><li>\u521B\u5EFA <code>Watcher</code></li></ul><p><code>Watcher</code> \u6539\u9020</p><ul><li>\u80FD\u591F\u4F20\u5165 <code>updateComponet</code></li><li>\u548C <code>dep</code> \u5BF9\u5E94\u5173\u7CFB <code>1:n</code></li></ul><p>\u6D4B\u8BD5\u4EE3\u7801</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Title<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;./kvue.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Kvue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// const d1 = document.createElement(&#39;div&#39;)</span>
      <span class="token comment">// d1.id = &#39;app&#39;</span>
      <span class="token comment">// const p1 = document.createElement(&#39;p&#39;)</span>
      <span class="token comment">// p1.textContent = this.counter</span>
      <span class="token comment">// d1.appendChild(p1)</span>
      <span class="token comment">// return d1</span>

      <span class="token comment">// \u4F7F\u7528 h \u51FD\u6570</span>
      <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;app&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>counter<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>counter <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span>counter<span class="token operator">++</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre></div><p>\u5347\u7EA7\u7248\u7684\u7B80\u6613\u7248 Vue 2.0</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 \u589E\u52A0 \`$mount(el)\` \uFF0C\u4F5C\u7528\uFF1A

 - \u83B7\u53D6\u5BBF\u4E3B
 - \`updateComponet\`
 - \u521B\u5EFA \`Watcher\`

 \`Watcher\` \u6539\u9020

 - \u80FD\u591F\u4F20\u5165 \`updateComponet\`
 - \u548C \`dep\` \u5BF9\u5E94\u5173\u7CFB \`1:n\`
 */</span>


<span class="token doc-comment comment">/**
 * 1\u3001\u5BF9 data \u9009\u9879\u8FDB\u884C\u54CD\u5E94\u5F0F\u5904\u7406
 * 2\u3001\u7F16\u8F91\u6A21\u677F
 * 3\u3001\u6307\u4EE4\u548C\u4E8B\u4EF6
 * 4\u3001\u4F9D\u8D56\u6536\u96C6
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Kvue</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$options <span class="token operator">=</span> options
    <span class="token keyword">this</span><span class="token punctuation">.</span>$data <span class="token operator">=</span> options<span class="token punctuation">.</span>data
    <span class="token comment">// \u54CD\u5E94\u5F0F</span>
    <span class="token function">observe</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">)</span>

    <span class="token comment">// \u4EE3\u7406\u4E0B</span>
    <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>

    <span class="token comment">// compile \u7F16\u8F91\u6A21\u677F</span>
    <span class="token comment">// new Compile(options.el, this)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>el<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">$mount</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u83B7\u53D6\u5BBF\u4E3B</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>

    <span class="token comment">// \u521B\u5EFA updateComponent</span>
    <span class="token keyword">const</span> <span class="token function-variable function">updateComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u83B7\u53D6\u6E32\u67D3\u51FD\u6570</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span>render<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options
      <span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$createElement<span class="token punctuation">)</span>
      <span class="token comment">// vnode \u53D8\u6210 dom</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_update</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span>

      <span class="token comment">// const parent = this.$el.parentElement</span>
      <span class="token comment">// parent.insertBefore(el, this.$el.nextSibling)</span>
      <span class="token comment">// parent.removeChild(this.$el)</span>
      <span class="token comment">// this.$el = el</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u521B\u5EFA\u6839\u7EC4\u4EF6\u5BF9\u5E94\u7684 Watcher</span>
    <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> updateComponent<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// h \u51FD\u6570</span>
  <span class="token function">$createElement</span><span class="token punctuation">(</span><span class="token parameter">tag<span class="token punctuation">,</span> props<span class="token punctuation">,</span> children</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>tag<span class="token punctuation">,</span> props<span class="token punctuation">,</span> children<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">_update</span><span class="token punctuation">(</span><span class="token parameter">vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> prevVnode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_vnode

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>prevVnode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// init</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">__patch__</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>

    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// update</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">__patch__</span><span class="token punctuation">(</span>prevVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">__patch__</span><span class="token punctuation">(</span><span class="token parameter">oldVnode<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// dom</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>oldVnode<span class="token punctuation">.</span>nodeType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> parent <span class="token operator">=</span> oldVnode<span class="token punctuation">.</span>parentElement
      <span class="token keyword">const</span> refElm <span class="token operator">=</span> oldVnode<span class="token punctuation">.</span>nextSibling
      <span class="token keyword">const</span> el <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createElm</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span>
      parent<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span>
      parent<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">)</span>

      <span class="token comment">// \u4FDD\u5B58\u5F53\u524D vnode</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_vnode <span class="token operator">=</span> vnode
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// update</span>
      <span class="token comment">// \u83B7\u53D6 el</span>
      <span class="token keyword">const</span> el <span class="token operator">=</span> vnode<span class="token punctuation">.</span>el <span class="token operator">=</span> oldVnode<span class="token punctuation">.</span>el
      <span class="token comment">//\u76F8\u540C\u8282\u70B9</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>oldVnode<span class="token punctuation">.</span>tag <span class="token operator">===</span> vnode<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// props \u65B0\u65E7\u5BF9\u6BD4</span>
        <span class="token keyword">const</span> oldProps <span class="token operator">=</span> oldVnode<span class="token punctuation">.</span>props <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token keyword">const</span> newProps <span class="token operator">=</span> vnode<span class="token punctuation">.</span>props <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

        <span class="token comment">// \u5C5E\u6027\u66F4\u65B0</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> oldProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> oldValue <span class="token operator">=</span> oldProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
          <span class="token keyword">const</span> newValue <span class="token operator">=</span> newProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>oldValue <span class="token operator">!==</span> newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// \u5C5E\u6027\u5220\u9664</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> oldProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>key <span class="token keyword">in</span> newProps<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            el<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// children</span>
        <span class="token keyword">const</span> oldCh <span class="token operator">=</span> oldVnode<span class="token punctuation">.</span>children
        <span class="token keyword">const</span> newCh <span class="token operator">=</span> vnode<span class="token punctuation">.</span>children
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> newCh <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> oldCh <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u65B0\u65E7\u6587\u672C\u90FD\u5B58\u5728\u4E14\u4E0D\u540C</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>oldCh <span class="token operator">!==</span> newCh<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              el<span class="token punctuation">.</span>textContent <span class="token operator">=</span> newCh
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u65E7\u7684\u6CA1\u6709\u6587\u672C</span>
            el<span class="token punctuation">.</span>textContent <span class="token operator">=</span> newCh
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
          <span class="token comment">// children</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> oldCh <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            el<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
            newCh<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">child</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createElm</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// updateChildren</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateChildren</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> oldCh<span class="token punctuation">,</span> newCh<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">createElm</span><span class="token punctuation">(</span><span class="token parameter">vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>tag<span class="token punctuation">)</span>
    <span class="token comment">// props</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> vnode<span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> value <span class="token operator">=</span> vnode<span class="token punctuation">.</span>props<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// children</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> vnode<span class="token punctuation">.</span>children <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// text</span>
        el<span class="token punctuation">.</span>textContent <span class="token operator">=</span> vnode<span class="token punctuation">.</span>children
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u9012\u5F52</span>
        vnode<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">n</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> child <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createElm</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
          el<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    vnode<span class="token punctuation">.</span>el <span class="token operator">=</span> el
    <span class="token keyword">return</span> el
  <span class="token punctuation">}</span>

  <span class="token function">updateChildren</span><span class="token punctuation">(</span><span class="token parameter">parentElm<span class="token punctuation">,</span> oldCh<span class="token punctuation">,</span> newCh</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>oldCh<span class="token punctuation">.</span>length<span class="token punctuation">,</span> newCh<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">__patch__</span><span class="token punctuation">(</span>oldCh<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> newCh<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>newCh<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> oldCh<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// add</span>
      newCh<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">child</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> el <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createElm</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span>
        parentElm<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>newCh<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> oldCh<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// remove</span>
      oldCh<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">child</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> el <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createElm</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span>
        parentElm<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// \u6570\u636E\u54CD\u5E94\u5F0F</span>
<span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u9012\u5F52\u4E0B\uFF0C\u517C\u5BB9 obj[key] = {a:10}</span>
  <span class="token function">observe</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token comment">// \u521B\u5EFA Key\u3001Dep\u3001Watcher \u7684\u4F9D\u8D56</span>
  <span class="token keyword">const</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
      <span class="token comment">// \u4F9D\u8D56\u6536\u96C6</span>
      Dep<span class="token punctuation">.</span>target <span class="token operator">&amp;&amp;</span> dep<span class="token punctuation">.</span><span class="token function">addDep</span><span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span>
      <span class="token keyword">return</span> val
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">!==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;set&#39;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
        <span class="token comment">// \u5982\u679C newVal \u662F\u5BF9\u8C61\uFF0C\u505A\u54CD\u5E94\u5F0F\u5904\u7406\uFF0C\u6BD4\u5982 obj.key = {a:10}</span>
        <span class="token function">observe</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span>
        val <span class="token operator">=</span> newVal

        <span class="token comment">// watcher \u66F4\u65B0</span>
        <span class="token comment">// watchers.forEach(w =&gt; w.update())</span>
        dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u904D\u5386 obj, \u5BF9\u6240\u6709\u5C5E\u6027\u505A\u54CD\u5E94\u5F0F</span>
<span class="token keyword">function</span> <span class="token function">observe</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> obj <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token comment">// \u4EE3\u7406\uFF0C\u5B9E\u73B0\u7684\u76EE\u7684 vm.$data.counter \u53EF\u4EE5\u901A\u8FC7 vm.counter \u62FF\u5230</span>
<span class="token keyword">function</span> <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token parameter">vm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> vm<span class="token punctuation">.</span>$data<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">set</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        vm<span class="token punctuation">.</span>$data<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> v
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token comment">// \u6839\u636E\u4E0D\u540C\u7C7B\u578B\u505A\u54CD\u5E94\u5F0F\u5904\u7406</span>
<span class="token keyword">class</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value

    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// todo</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">walk</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">walk</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">defineReactive</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u89E3\u6790\u6A21\u677F\uFF0C1\u3001\u5904\u7406\u63D2\u503C\uFF0C2\u3001\u5904\u7406\u6307\u4EE4\u548C\u4E8B\u4EF6\uFF0C3\u3001\u4EE5\u4E0A\u4E24\u8005\u7684\u521D\u59CB\u5316\u548C\u66F4\u65B0</span>

<span class="token keyword">class</span> <span class="token class-name">Compile</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> vm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$vm <span class="token operator">=</span> vm
    <span class="token keyword">this</span><span class="token punctuation">.</span>$el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">compile</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u904D\u5386 el \u5B50\u8282\u70B9\uFF0C\u5224\u65AD\u7C7B\u578B\u505A\u76F8\u5E94\u7684\u5904\u7406</span>
    <span class="token keyword">const</span> childNodes <span class="token operator">=</span> el<span class="token punctuation">.</span>childNodes

    childNodes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">node</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5143\u7D20</span>
        <span class="token comment">// console.log(&#39;\u5143\u7D20&#39;, node.nodeName)</span>
        <span class="token comment">// \u5904\u7406 \u6307\u4EE4\u548C\u4E8B\u4EF6</span>
        <span class="token keyword">const</span> attrs <span class="token operator">=</span> node<span class="token punctuation">.</span>attributes
        Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>attrs<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">attr</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">// k-xxx=&quot;abc&quot;</span>
          <span class="token keyword">const</span> attrName <span class="token operator">=</span> attr<span class="token punctuation">.</span>name
          <span class="token keyword">const</span> exp <span class="token operator">=</span> attr<span class="token punctuation">.</span>value
          <span class="token keyword">if</span> <span class="token punctuation">(</span>attrName<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;k-&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> dir <span class="token operator">=</span> attrName<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">[</span>dir<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">[</span>dir<span class="token punctuation">]</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> exp<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isInter</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6587\u672C \u63D2\u503C\u8868\u8FBE\u5F0F</span>
        <span class="token comment">// console.log(&#39;\u63D2\u503C&#39;, node.textContent)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compileText</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// \u9012\u5F52\u4E0B</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>childNodes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u9AD8\u7EA7\u51FD\u6570\u6267\u884C dir</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> exp<span class="token punctuation">,</span> dir</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1\u3001\u521D\u59CB\u5316</span>
    <span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">[</span>dir <span class="token operator">+</span> <span class="token string">&#39;Updater&#39;</span><span class="token punctuation">]</span>
    fn <span class="token operator">&amp;&amp;</span> <span class="token function">fn</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$vm<span class="token punctuation">[</span>exp<span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token comment">// 2\u3001\u66F4\u65B0\u64CD\u4F5C</span>
    <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$vm<span class="token punctuation">,</span> exp<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      fn <span class="token operator">&amp;&amp;</span> <span class="token function">fn</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5BF9\u5E94\u7684 k-text \u7684\u6307\u4EE4</span>
  <span class="token function">text</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> exp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// node.textContent = this.$vm[exp]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> exp<span class="token punctuation">,</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">textUpdater</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    node<span class="token punctuation">.</span>textContent <span class="token operator">=</span> value
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7F16\u8BD1 {{xxx}}\u6587\u672C</span>
  <span class="token function">compileText</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// node.textContent = this.$vm[RegExp.$1]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> RegExp<span class="token punctuation">.</span>$1<span class="token punctuation">,</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5BF9\u5E94\u7684 k-html \u7684\u6307\u4EE4</span>
  <span class="token function">html</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> exp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// node.innerHTML = this.$vm[exp]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> exp<span class="token punctuation">,</span> <span class="token string">&#39;html&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">htmlUpdater</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    node<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> value
  <span class="token punctuation">}</span>

  <span class="token comment">// \u662F\u5426\u63D2\u503C\u8868\u8FBE\u5F0F</span>
  <span class="token function">isInter</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> node<span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token number">3</span> <span class="token operator">&amp;&amp;</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\{\\{(.*)\\}\\}</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u76D1\u7763\u5668\uFF1A\u8D1F\u8D23\u4F9D\u8D56\u66F4\u65B0\uFF0C\u6709\u591A\u5C11\u4E2A\u53D8\u91CF\u5C31\u6709\u591A\u5C11\u4E2A watcher</span>
<span class="token comment">// const watchers = []</span>

<span class="token keyword">class</span> <span class="token class-name">Watcher</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>vm <span class="token operator">=</span> vm
    <span class="token comment">// this.key = key</span>
    <span class="token comment">// this.updateFn = updateFn</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>getter <span class="token operator">=</span> fn

    <span class="token comment">// watchers.push(this)</span>
    <span class="token comment">// Dep.target = this</span>
    <span class="token comment">// \u76F8\u5F53\u4E8E\u8C03\u7528\u4E86\u4E00\u6B21 key \u7684 get \u65B9\u6CD5\u8FDB\u884C\u4F9D\u8D56\u6536\u9F50</span>
    <span class="token comment">// this.vm[this.key]</span>
    <span class="token comment">// Dep.target = null</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">)</span>
    Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u88AB Dep \u8C03\u7528\u7684</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6267\u884C\u5B9E\u9645\u7684\u66F4\u65B0\u64CD\u4F5C</span>
    <span class="token comment">// this.updateFn.call(this.vm, this.vm[this.key])</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B9E\u73B0 Dep\uFF0C\u6709\u591A\u5C11\u4E2A key \u5C31\u6709\u591A\u5C11\u4E2A dep</span>
<span class="token keyword">class</span> <span class="token class-name">Dep</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// this.deps = []</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>deps <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">addDep</span><span class="token punctuation">(</span><span class="token parameter">dep</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u91CC\u7684 dep \u5176\u5B9E\u5C31\u662F watcher</span>
    <span class="token comment">// this.deps.push(dep)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>deps<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>dep<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u91CC\u7684 dep \u5176\u5B9E\u5C31\u662F watcher</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>deps<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">dep</span> <span class="token operator">=&gt;</span> dep<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,9);function t(o,e){return p}var l=s(a,[["render",t]]);export{l as default};
