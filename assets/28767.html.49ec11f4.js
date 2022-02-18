import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u4E86\u89E3\u865A\u62DF-dom-\u548C-diff-\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E86\u89E3\u865A\u62DF-dom-\u548C-diff-\u7B97\u6CD5" aria-hidden="true">#</a> \u4E86\u89E3\u865A\u62DF dom \u548C diff \u7B97\u6CD5</h1><p>\u6D4B\u8BD5\u4EE3\u7801</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Vue\u6E90\u7801\u5256\u6790<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../../dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>\u865A\u62DFDOM<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{foo}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// \u521B\u5EFA\u5B9E\u4F8B</span>
        <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#demo&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">&#39;fooooo&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u4ECE <code>src/platforms/web/runtime/patch.js</code> \u4E2D\u7684 <code>patch()</code> \u51FD\u6570\u5F00\u59CB</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">patch</span><span class="token operator">:</span> Function <span class="token operator">=</span> <span class="token function">createPatchFunction</span><span class="token punctuation">(</span><span class="token punctuation">{</span> nodeOps<span class="token punctuation">,</span> modules <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u53D1\u73B0 <code>createPatchFunction</code> \u6765\u81EA <code>src/core/vdom/patch.js</code></p><ul><li>\u66F4\u65B0\u65F6\u8C03\u7528\u7684 <code>__patch__</code> \u5C31\u662F\u8FD9\u91CC \u7684 <code>patch</code> \u65B9\u6CD5</li><li>\u6267\u884C\u5B8C\u540E\u8FD4\u56DE\u865A\u62DF <code>dom</code></li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u83B7\u53D6\u5E73\u53F0\u7279\u6709\u7684 patch \u5DE5\u5382\u51FD\u6570</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createPatchFunction</span> <span class="token punctuation">(</span><span class="token parameter">backend</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> i<span class="token punctuation">,</span> j
  <span class="token keyword">const</span> cbs <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// \u83B7\u53D6\u5E73\u53F0\u7279\u6709\u8282\u70B9\u548C\u5C5E\u6027\u64CD\u4F5C</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> modules<span class="token punctuation">,</span> nodeOps <span class="token punctuation">}</span> <span class="token operator">=</span> backend

  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> hooks<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cbs<span class="token punctuation">[</span>hooks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> modules<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>modules<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>hooks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cbs<span class="token punctuation">[</span>hooks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>modules<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>hooks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//...</span>

  <span class="token comment">// \u66F4\u65B0\u65F6\u8C03\u7528\u7684 __patch__ \u5C31\u662F\u8FD9\u4E2A</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">patch</span> <span class="token punctuation">(</span><span class="token parameter">oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> hydrating<span class="token punctuation">,</span> removeOnly</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u65B0\u7684\u4E0D\u5B58\u5728\uFF1A\u5220\u9664</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token function">invokeDestroyHook</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">)</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> isInitialPatch <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">const</span> insertedVnodeQueue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token comment">// \u8001\u7684\u4E0D\u5B58\u5728\uFF1A\u65B0\u589E</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// empty mount (likely as component), create new root element</span>
      isInitialPatch <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token function">createElm</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> isRealElement <span class="token operator">=</span> <span class="token function">isDef</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">.</span>nodeType<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isRealElement <span class="token operator">&amp;&amp;</span> <span class="token function">sameVnode</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// patch existing root node</span>
        <span class="token comment">// \u6267\u884C diff \u7B97\u6CD5\u7684\u5730\u65B9</span>
        <span class="token function">patchVnode</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> removeOnly<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u521D\u59CB\u5316\u8D70\u8FD9\u91CC</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isRealElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// mounting to a real element</span>
          <span class="token comment">// check if this is server-rendered content and if we can perform</span>
          <span class="token comment">// a successful hydration.</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>oldVnode<span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> oldVnode<span class="token punctuation">.</span><span class="token function">hasAttribute</span><span class="token punctuation">(</span><span class="token constant">SSR_ATTR</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            oldVnode<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token constant">SSR_ATTR</span><span class="token punctuation">)</span>
            hydrating <span class="token operator">=</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>hydrating<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hydrate</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token function">invokeInsertHook</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
              <span class="token keyword">return</span> oldVnode
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token function">warn</span><span class="token punctuation">(</span>
                <span class="token string">&#39;The client-side rendered virtual DOM tree is not matching &#39;</span> <span class="token operator">+</span>
                <span class="token string">&#39;server-rendered content. This is likely caused by incorrect &#39;</span> <span class="token operator">+</span>
                <span class="token string">&#39;HTML markup, for example nesting block-level elements inside &#39;</span> <span class="token operator">+</span>
                <span class="token string">&#39;&lt;p&gt;, or missing &lt;tbody&gt;. Bailing hydration and performing &#39;</span> <span class="token operator">+</span>
                <span class="token string">&#39;full client-side render.&#39;</span>
              <span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
          <span class="token comment">// either not server-rendered, or hydration failed.</span>
          <span class="token comment">// create an empty node and replace it</span>
          oldVnode <span class="token operator">=</span> <span class="token function">emptyNodeAt</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// replacing existing element</span>
        <span class="token keyword">const</span> oldElm <span class="token operator">=</span> oldVnode<span class="token punctuation">.</span>elm
        <span class="token keyword">const</span> parentElm <span class="token operator">=</span> nodeOps<span class="token punctuation">.</span><span class="token function">parentNode</span><span class="token punctuation">(</span>oldElm<span class="token punctuation">)</span>

        <span class="token comment">// create new node</span>
        <span class="token function">createElm</span><span class="token punctuation">(</span>
          vnode<span class="token punctuation">,</span>
          insertedVnodeQueue<span class="token punctuation">,</span>
          <span class="token comment">// extremely rare edge case: do not insert if old element is in a</span>
          <span class="token comment">// leaving transition. Only happens when combining transition +</span>
          <span class="token comment">// keep-alive + HOCs. (#4590)</span>
          oldElm<span class="token punctuation">.</span>_leaveCb <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> parentElm<span class="token punctuation">,</span>
          nodeOps<span class="token punctuation">.</span><span class="token function">nextSibling</span><span class="token punctuation">(</span>oldElm<span class="token punctuation">)</span>
        <span class="token punctuation">)</span>

        <span class="token comment">// update parent placeholder node element, recursively</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>parent<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">let</span> ancestor <span class="token operator">=</span> vnode<span class="token punctuation">.</span>parent
          <span class="token keyword">const</span> patchable <span class="token operator">=</span> <span class="token function">isPatchable</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span>
          <span class="token keyword">while</span> <span class="token punctuation">(</span>ancestor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cbs<span class="token punctuation">.</span>destroy<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              cbs<span class="token punctuation">.</span>destroy<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span>ancestor<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            ancestor<span class="token punctuation">.</span>elm <span class="token operator">=</span> vnode<span class="token punctuation">.</span>elm
            <span class="token keyword">if</span> <span class="token punctuation">(</span>patchable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cbs<span class="token punctuation">.</span>create<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                cbs<span class="token punctuation">.</span>create<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span>emptyNode<span class="token punctuation">,</span> ancestor<span class="token punctuation">)</span>
              <span class="token punctuation">}</span>
              <span class="token comment">// #6513</span>
              <span class="token comment">// invoke insert hooks that may have been merged by create hooks.</span>
              <span class="token comment">// e.g. for directives that uses the &quot;inserted&quot; hook.</span>
              <span class="token keyword">const</span> insert <span class="token operator">=</span> ancestor<span class="token punctuation">.</span>data<span class="token punctuation">.</span>hook<span class="token punctuation">.</span>insert
              <span class="token keyword">if</span> <span class="token punctuation">(</span>insert<span class="token punctuation">.</span>merged<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// start at index 1 to avoid re-invoking component mounted hook</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> insert<span class="token punctuation">.</span>fns<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  insert<span class="token punctuation">.</span>fns<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
              <span class="token function">registerRef</span><span class="token punctuation">(</span>ancestor<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            ancestor <span class="token operator">=</span> ancestor<span class="token punctuation">.</span>parent
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// destroy old node</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">removeVnodes</span><span class="token punctuation">(</span><span class="token punctuation">[</span>oldVnode<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">.</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">invokeDestroyHook</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">invokeInsertHook</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> isInitialPatch<span class="token punctuation">)</span>
    <span class="token keyword">return</span> vnode<span class="token punctuation">.</span>elm
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>  
</code></pre></div><p>\u6BD4\u8F83\u4E24\u4E2A\u865A\u62DF <code>dom</code> \u7684 <code>patchVnode</code> \u65B9\u6CD5</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u6BD4\u8F83\u4E24\u4E2A\u865A\u62DF dom</span>
<span class="token keyword">function</span> <span class="token function">patchVnode</span> <span class="token punctuation">(</span>
  <span class="token parameter">oldVnode<span class="token punctuation">,</span>
  vnode<span class="token punctuation">,</span>
  insertedVnodeQueue<span class="token punctuation">,</span>
  ownerArray<span class="token punctuation">,</span>
  index<span class="token punctuation">,</span>
  removeOnly</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>oldVnode <span class="token operator">===</span> vnode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>elm<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>ownerArray<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// clone reused vnode</span>
    vnode <span class="token operator">=</span> ownerArray<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">cloneVNode</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> elm <span class="token operator">=</span> vnode<span class="token punctuation">.</span>elm <span class="token operator">=</span> oldVnode<span class="token punctuation">.</span>elm

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">.</span>isAsyncPlaceholder<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>asyncFactory<span class="token punctuation">.</span>resolved<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">hydrate</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      vnode<span class="token punctuation">.</span>isAsyncPlaceholder <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// reuse element for static trees.</span>
  <span class="token comment">// note we only do this if the vnode is cloned -</span>
  <span class="token comment">// if the new node is not cloned it means the render functions have been</span>
  <span class="token comment">// reset by the hot-reload-api and we need to do a proper re-render.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>isStatic<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
    <span class="token function">isTrue</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">.</span>isStatic<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
    vnode<span class="token punctuation">.</span>key <span class="token operator">===</span> oldVnode<span class="token punctuation">.</span>key <span class="token operator">&amp;&amp;</span>
    <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>isCloned<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isTrue</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>isOnce<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vnode<span class="token punctuation">.</span>componentInstance <span class="token operator">=</span> oldVnode<span class="token punctuation">.</span>componentInstance
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u94A9\u5B50\u8C03\u7528</span>
  <span class="token keyword">let</span> i
  <span class="token keyword">const</span> data <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> data<span class="token punctuation">.</span>hook<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>prepatch<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">i</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 1\u3001\u83B7\u53D6\u4E24\u4E2A\u6BD4\u8F83\u8282\u70B9\u7684\u5B69\u5B50</span>
  <span class="token keyword">const</span> oldCh <span class="token operator">=</span> oldVnode<span class="token punctuation">.</span>children
  <span class="token keyword">const</span> ch <span class="token operator">=</span> vnode<span class="token punctuation">.</span>children
  <span class="token comment">// 2\u3001\u5C5E\u6027\u66F4\u65B0</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isPatchable</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cbs<span class="token punctuation">.</span>update<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> cbs<span class="token punctuation">.</span>update<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> data<span class="token punctuation">.</span>hook<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>update<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token function">i</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 3\u3001\u6CA1\u6709\u6587\u672C</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53CC\u65B9\u90FD\u6709\u5B69\u5B50\uFF1A\u6BD4\u8F83\u5B50\u8282\u70B9</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>oldCh<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>oldCh <span class="token operator">!==</span> ch<span class="token punctuation">)</span> <span class="token function">updateChildren</span><span class="token punctuation">(</span>elm<span class="token punctuation">,</span> oldCh<span class="token punctuation">,</span> ch<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> removeOnly<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">checkDuplicateKeys</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u65B0\u7684\u6709\uFF0C\u8001\u7684\u6CA1\u6709\uFF1A\u5148\u6E05\u7A7A\uFF0C\u518D\u65B0\u589E</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span> nodeOps<span class="token punctuation">.</span><span class="token function">setTextContent</span><span class="token punctuation">(</span>elm<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
      <span class="token function">addVnodes</span><span class="token punctuation">(</span>elm<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> ch<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> ch<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>oldCh<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u8001\u7684\u6709\uFF0C\u65B0\u7684\u6CA1\u6709\uFF1A\u5220\u9664</span>
      <span class="token function">removeVnodes</span><span class="token punctuation">(</span>oldCh<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> oldCh<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6587\u672C\u6E05\u7A7A</span>
      nodeOps<span class="token punctuation">.</span><span class="token function">setTextContent</span><span class="token punctuation">(</span>elm<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>oldVnode<span class="token punctuation">.</span>text <span class="token operator">!==</span> vnode<span class="token punctuation">.</span>text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u90FD\u662F\u6587\u672C\uFF1A\u66F4\u65B0</span>
    nodeOps<span class="token punctuation">.</span><span class="token function">setTextContent</span><span class="token punctuation">(</span>elm<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u94A9\u5B50</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> data<span class="token punctuation">.</span>hook<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>postpatch<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token function">i</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6700\u6700\u6700\u91CD\u8981\u7684 <code>updateChildren</code> \u65B9\u6CD5\uFF0C\u6BD4\u8F83\u4E24\u4E2A\u5B69\u5B50\u8282\u70B9\u7684 <code>diff</code> \u7B97\u6CD5</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u6BD4\u8F83\u4E24\u4E2A\u5B69\u5B50\u8282\u70B9</span>
<span class="token keyword">function</span> <span class="token function">updateChildren</span> <span class="token punctuation">(</span><span class="token parameter">parentElm<span class="token punctuation">,</span> oldCh<span class="token punctuation">,</span> newCh<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> removeOnly</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5148\u8BBE\u7F6E\u9996\u5C3E4\u4E2A\u6E38\u6807\u53CA\u76F8\u5BF9\u5E94\u7684\u8282\u70B9</span>
  <span class="token keyword">let</span> oldStartIdx <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> newStartIdx <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> oldEndIdx <span class="token operator">=</span> oldCh<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token keyword">let</span> oldStartVnode <span class="token operator">=</span> oldCh<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> oldEndVnode <span class="token operator">=</span> oldCh<span class="token punctuation">[</span>oldEndIdx<span class="token punctuation">]</span>
  <span class="token keyword">let</span> newEndIdx <span class="token operator">=</span> newCh<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token keyword">let</span> newStartVnode <span class="token operator">=</span> newCh<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> newEndVnode <span class="token operator">=</span> newCh<span class="token punctuation">[</span>newEndIdx<span class="token punctuation">]</span>
  <span class="token comment">// \u540E\u9762\u8FDB\u884C\u67E5\u627E\u65F6\u6240\u9700\u7684\u53D8\u91CF</span>
  <span class="token keyword">let</span> oldKeyToIdx<span class="token punctuation">,</span> idxInOld<span class="token punctuation">,</span> vnodeToMove<span class="token punctuation">,</span> refElm

  <span class="token comment">// removeOnly is a special flag used only by &lt;transition-group&gt;</span>
  <span class="token comment">// to ensure removed elements stay in correct relative positions</span>
  <span class="token comment">// during leaving transitions</span>
  <span class="token keyword">const</span> canMove <span class="token operator">=</span> <span class="token operator">!</span>removeOnly

  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">checkDuplicateKeys</span><span class="token punctuation">(</span>newCh<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5F00\u59CB\u5FAA\u73AF\uFF1B\u7ED3\u675F\u6761\u4EF6\uFF1A\u5F00\u59CB\u6E38\u6807\u4E0D\u8D85\u8FC7\u7ED3\u675F\u6E38\u6807</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>oldStartIdx <span class="token operator">&lt;=</span> oldEndIdx <span class="token operator">&amp;&amp;</span> newStartIdx <span class="token operator">&lt;=</span> newEndIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u524D\u4E24\u79CD\u60C5\u51B5\u662F\u6E38\u6807\u8C03\u6574</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>oldStartVnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      oldStartVnode <span class="token operator">=</span> oldCh<span class="token punctuation">[</span><span class="token operator">++</span>oldStartIdx<span class="token punctuation">]</span> <span class="token comment">// Vnode has been moved left</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>oldEndVnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      oldEndVnode <span class="token operator">=</span> oldCh<span class="token punctuation">[</span><span class="token operator">--</span>oldEndIdx<span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">sameVnode</span><span class="token punctuation">(</span>oldStartVnode<span class="token punctuation">,</span> newStartVnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u4E24\u4E2A\u5F00\u5934\u76F8\u540C\uFF0C\u9012\u5F52</span>
      <span class="token function">patchVnode</span><span class="token punctuation">(</span>oldStartVnode<span class="token punctuation">,</span> newStartVnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> newCh<span class="token punctuation">,</span> newStartIdx<span class="token punctuation">)</span>
      <span class="token comment">// \u6E38\u6807\u5411\u540E\u79FB\u52A8</span>
      oldStartVnode <span class="token operator">=</span> oldCh<span class="token punctuation">[</span><span class="token operator">++</span>oldStartIdx<span class="token punctuation">]</span>
      newStartVnode <span class="token operator">=</span> newCh<span class="token punctuation">[</span><span class="token operator">++</span>newStartIdx<span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">sameVnode</span><span class="token punctuation">(</span>oldEndVnode<span class="token punctuation">,</span> newEndVnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u4E24\u4E2A\u5C3E\u90E8\u76F8\u540C\uFF0C\u9012\u5F52</span>
      <span class="token function">patchVnode</span><span class="token punctuation">(</span>oldEndVnode<span class="token punctuation">,</span> newEndVnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> newCh<span class="token punctuation">,</span> newEndIdx<span class="token punctuation">)</span>
      <span class="token comment">// \u6E38\u6807\u5411\u524D\u79FB\u52A8</span>
      oldEndVnode <span class="token operator">=</span> oldCh<span class="token punctuation">[</span><span class="token operator">--</span>oldEndIdx<span class="token punctuation">]</span>
      newEndVnode <span class="token operator">=</span> newCh<span class="token punctuation">[</span><span class="token operator">--</span>newEndIdx<span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">sameVnode</span><span class="token punctuation">(</span>oldStartVnode<span class="token punctuation">,</span> newEndVnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Vnode moved right</span>
      <span class="token comment">// \u8001\u7684\u5F00\u59CB\u548C\u65B0\u7684\u7ED3\u675F\uFF0C\u9012\u5F52</span>
      <span class="token function">patchVnode</span><span class="token punctuation">(</span>oldStartVnode<span class="token punctuation">,</span> newEndVnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> newCh<span class="token punctuation">,</span> newEndIdx<span class="token punctuation">)</span>
      <span class="token comment">// \u79FB\u52A8\u8BE5\u8282\u70B9\u5230\u961F\u5C3E</span>
      canMove <span class="token operator">&amp;&amp;</span> nodeOps<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> oldStartVnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> nodeOps<span class="token punctuation">.</span><span class="token function">nextSibling</span><span class="token punctuation">(</span>oldEndVnode<span class="token punctuation">.</span>elm<span class="token punctuation">)</span><span class="token punctuation">)</span>
      oldStartVnode <span class="token operator">=</span> oldCh<span class="token punctuation">[</span><span class="token operator">++</span>oldStartIdx<span class="token punctuation">]</span>
      newEndVnode <span class="token operator">=</span> newCh<span class="token punctuation">[</span><span class="token operator">--</span>newEndIdx<span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">sameVnode</span><span class="token punctuation">(</span>oldEndVnode<span class="token punctuation">,</span> newStartVnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Vnode moved left</span>
      <span class="token comment">// \u8001\u7684\u7ED3\u675F\u548C\u65B0\u7684\u5F00\u59CB</span>
      <span class="token function">patchVnode</span><span class="token punctuation">(</span>oldEndVnode<span class="token punctuation">,</span> newStartVnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> newCh<span class="token punctuation">,</span> newStartIdx<span class="token punctuation">)</span>
      <span class="token comment">// \u79FB\u52A8\u8BE5\u8282\u70B9\u5230\u961F\u9996</span>
      canMove <span class="token operator">&amp;&amp;</span> nodeOps<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> oldEndVnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> oldStartVnode<span class="token punctuation">.</span>elm<span class="token punctuation">)</span>
      oldEndVnode <span class="token operator">=</span> oldCh<span class="token punctuation">[</span><span class="token operator">--</span>oldEndIdx<span class="token punctuation">]</span>
      newStartVnode <span class="token operator">=</span> newCh<span class="token punctuation">[</span><span class="token operator">++</span>newStartIdx<span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u9996\u5C3E\u6CA1\u6709\u627E\u5230\u76F8\u540C\u7684\uFF0C\u4ECE\u65B0\u7684\u5F00\u5934\u62FF\u51FA\u4E00\u4E2A\u8282\u70B9\uFF0C\u53BB\u8001\u7684\u6570\u7EC4\u67E5\u627E</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>oldKeyToIdx<span class="token punctuation">)</span><span class="token punctuation">)</span> oldKeyToIdx <span class="token operator">=</span> <span class="token function">createKeyToOldIdx</span><span class="token punctuation">(</span>oldCh<span class="token punctuation">,</span> oldStartIdx<span class="token punctuation">,</span> oldEndIdx<span class="token punctuation">)</span>
      idxInOld <span class="token operator">=</span> <span class="token function">isDef</span><span class="token punctuation">(</span>newStartVnode<span class="token punctuation">.</span>key<span class="token punctuation">)</span>
        <span class="token operator">?</span> oldKeyToIdx<span class="token punctuation">[</span>newStartVnode<span class="token punctuation">.</span>key<span class="token punctuation">]</span>
        <span class="token operator">:</span> <span class="token function">findIdxInOld</span><span class="token punctuation">(</span>newStartVnode<span class="token punctuation">,</span> oldCh<span class="token punctuation">,</span> oldStartIdx<span class="token punctuation">,</span> oldEndIdx<span class="token punctuation">)</span>
      <span class="token comment">// \u5982\u679C\u5728\u8001\u6570\u7EC4\u4E2D\u6CA1\u6709\u627E\u5230</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>idxInOld<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// New element</span>
        <span class="token comment">// \u65B0\u589E</span>
        <span class="token function">createElm</span><span class="token punctuation">(</span>newStartVnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> parentElm<span class="token punctuation">,</span> oldStartVnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> newCh<span class="token punctuation">,</span> newStartIdx<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5426\u5219\u66F4\u65B0</span>
        vnodeToMove <span class="token operator">=</span> oldCh<span class="token punctuation">[</span>idxInOld<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">sameVnode</span><span class="token punctuation">(</span>vnodeToMove<span class="token punctuation">,</span> newStartVnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">patchVnode</span><span class="token punctuation">(</span>vnodeToMove<span class="token punctuation">,</span> newStartVnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> newCh<span class="token punctuation">,</span> newStartIdx<span class="token punctuation">)</span>
          oldCh<span class="token punctuation">[</span>idxInOld<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
          <span class="token comment">// \u79FB\u52A8\u5230\u961F\u9996</span>
          canMove <span class="token operator">&amp;&amp;</span> nodeOps<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> vnodeToMove<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> oldStartVnode<span class="token punctuation">.</span>elm<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u5F88\u5C11\u7684\u60C5\u51B5</span>
          <span class="token comment">// same key but different element. treat as new element</span>
          <span class="token function">createElm</span><span class="token punctuation">(</span>newStartVnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> parentElm<span class="token punctuation">,</span> oldStartVnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> newCh<span class="token punctuation">,</span> newStartIdx<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      newStartVnode <span class="token operator">=</span> newCh<span class="token punctuation">[</span><span class="token operator">++</span>newStartIdx<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u6E05\u7406\u5DE5\u4F5C</span>
  <span class="token comment">// \u5982\u679C\u8001\u7684\u7ED3\u675F\u4E86\uFF0C\u65B0\u6570\u7EC4\u4E2D\u5269\u4E0B\u7684\u8981\u6279\u91CF\u65B0\u589E</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>oldStartIdx <span class="token operator">&gt;</span> oldEndIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    refElm <span class="token operator">=</span> <span class="token function">isUndef</span><span class="token punctuation">(</span>newCh<span class="token punctuation">[</span>newEndIdx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> newCh<span class="token punctuation">[</span>newEndIdx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>elm
    <span class="token function">addVnodes</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> refElm<span class="token punctuation">,</span> newCh<span class="token punctuation">,</span> newStartIdx<span class="token punctuation">,</span> newEndIdx<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>newStartIdx <span class="token operator">&gt;</span> newEndIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u65B0\u7684\u7ED3\u675F\u4E86\uFF0C\u8001\u6570\u7EC4\u4E2D\u5269\u4E0B\u7684\u8981\u6279\u91CF\u5220\u9664</span>
    <span class="token function">removeVnodes</span><span class="token punctuation">(</span>oldCh<span class="token punctuation">,</span> oldStartIdx<span class="token punctuation">,</span> oldEndIdx<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u81F3\u6B64\uFF0C\u865A\u62DF <code>dom</code> \u7684\u751F\u6210\u548C\u6BD4\u8F83\u548C\u771F\u5B9E <code>dom</code> \u7684\u66F4\u65B0\u5C31\u5B8C\u6210</p><hr><p>\u8FD8\u6709\u4E00\u4E2A\uFF0C\u5B98\u65B9\u5EFA\u8BAE\u5728\u5FAA\u73AF\u4E2D\u5199 <code>key</code>, \u6BD4\u5982\u6709\u8FD9\u6837\u7684\u4E00\u4E2A\u6570\u7EC4\uFF1A</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Vue\u6E90\u7801\u5256\u6790<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../../dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>\u865A\u62DFDOM<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a in arr<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{a}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token comment">// \u521B\u5EFA\u5B9E\u4F8B</span>
      <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#demo&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">arr</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;e&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;f&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u539F\u56E0\u662F\u6BD4\u8F83\u4E24\u4E2A\u76F8\u540C\u5143\u7D20\u7684\u6761\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sameVnode</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token comment">// key \u662F\u5224\u65AD\u4E24\u4E2A\u76F8\u540C\u8282\u70B9\u7684\u5FC5\u8981\u6761\u4EF6</span>
    a<span class="token punctuation">.</span>key <span class="token operator">===</span> b<span class="token punctuation">.</span>key <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
      <span class="token punctuation">(</span>
        a<span class="token punctuation">.</span>tag <span class="token operator">===</span> b<span class="token punctuation">.</span>tag <span class="token operator">&amp;&amp;</span>
        a<span class="token punctuation">.</span>isComment <span class="token operator">===</span> b<span class="token punctuation">.</span>isComment <span class="token operator">&amp;&amp;</span>
        <span class="token function">isDef</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token function">isDef</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
        <span class="token function">sameInputType</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
      <span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>
        <span class="token function">isTrue</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>isAsyncPlaceholder<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
        a<span class="token punctuation">.</span>asyncFactory <span class="token operator">===</span> b<span class="token punctuation">.</span>asyncFactory <span class="token operator">&amp;&amp;</span>
        <span class="token function">isUndef</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>asyncFactory<span class="token punctuation">.</span>error<span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,18);function p(o,e){return t}var l=s(a,[["render",p]]);export{l as default};
