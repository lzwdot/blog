import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/blog/assets/20211214221640.7f975300.png";const t={},p=n('<h3 id="\u7B80\u6613\u7248-vue-2-0-1-\u5B9E\u73B0\u7B80\u5355\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u7B80\u6613\u7248-vue-2-0-1-\u5B9E\u73B0\u7B80\u5355\u529F\u80FD" aria-hidden="true">#</a> \u7B80\u6613\u7248 Vue 2.0.1\uFF0C\u5B9E\u73B0\u7B80\u5355\u529F\u80FD</h3><ul><li>\u54CD\u5E94\u5F0F\u5904\u7406</li><li>\u7F16\u8F91\u6A21\u677F</li><li>\u7B80\u5355\u6307\u4EE4</li><li>\u4F9D\u8D56\u6536\u96C6</li></ul><p><img src="'+a+`" alt="vue"></p><p>\u6D4B\u8BD5\u4EE3\u7801</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{counter}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{counter}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">k-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>counter<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">k-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>desc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./kvue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Kvue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&#39;&lt;span style=&quot;color: red&quot;&gt;lzw. \u771F\u68D2&lt;/span&gt;&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span>counter<span class="token operator">++</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u7B80\u6613\u7248 Vue 2.0</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
    <span class="token keyword">new</span> <span class="token class-name">Compile</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>el<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
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
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> updateFn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>vm <span class="token operator">=</span> vm
    <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> key
    <span class="token keyword">this</span><span class="token punctuation">.</span>updateFn <span class="token operator">=</span> updateFn

    <span class="token comment">// watchers.push(this)</span>
    Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token comment">// \u76F8\u5F53\u4E8E\u8C03\u7528\u4E86\u4E00\u6B21 key \u7684 get \u65B9\u6CD5\u8FDB\u884C\u4F9D\u8D56\u6536\u9F50</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>key<span class="token punctuation">]</span>
    Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u88AB Dep \u8C03\u7528\u7684</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6267\u884C\u5B9E\u9645\u7684\u66F4\u65B0\u64CD\u4F5C</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateFn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B9E\u73B0 Dep\uFF0C\u6709\u591A\u5C11\u4E2A key \u5C31\u6709\u591A\u5C11\u4E2A dep</span>
<span class="token keyword">class</span> <span class="token class-name">Dep</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>deps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token function">addDep</span><span class="token punctuation">(</span><span class="token parameter">dep</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u91CC\u7684 dep \u5176\u5B9E\u5C31\u662F watcher</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>deps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dep<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u91CC\u7684 dep \u5176\u5B9E\u5C31\u662F watcher</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>deps<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">dep</span> <span class="token operator">=&gt;</span> dep<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,7);function o(c,e){return p}var k=s(t,[["render",o]]);export{k as default};
