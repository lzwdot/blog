import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="react-portals-\u4F7F\u7528\u573A\u666F-\u9AD8\u7EA7" tabindex="-1"><a class="header-anchor" href="#react-portals-\u4F7F\u7528\u573A\u666F-\u9AD8\u7EA7" aria-hidden="true">#</a> React Portals \u4F7F\u7528\u573A\u666F\uFF08\u9AD8\u7EA7\uFF09</h1><p>Portals \u4F20\u9001\u95E8</p><ul><li>\u7EC4\u4EF6\u9ED8\u8BA4\u4F1A\u6309\u7167\u65E2\u5B9A\u5C42\u6B21\u5D4C\u5957\u6E32\u67D3</li><li>\u5982\u4F55\u8BA9\u7EC4\u4EF6\u6E32\u67D3\u5230\u7236\u7EC4\u4EF6\u4EE5\u5916\uFF1F Portals</li></ul><p>Portals \u4F7F\u7528\u573A\u666F</p><ul><li>overflow:hidden</li><li>\u7236\u7EC4\u4EF6 z-index \u503C\u592A\u5C0F</li><li>fixed \u9700\u8981\u653E\u5728 body \u7B2C\u4E00\u5C42\u7EA7</li></ul><p>\u4F8B\u5B50\uFF0Ccss \u6587\u4EF6</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.modal</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> -150px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token comment">/*opacity: 0.2;*/</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7EC4\u4EF6 PortalsDemo.js</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDom <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./style.css&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">PortalsDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6B63\u5E38\u6E32\u67D3</span>
    <span class="token comment">// return &lt;div className=&quot;modal&quot;&gt;</span>
    <span class="token comment">//   {/*\u7C7B\u4F3C Vue slot*/}</span>
    <span class="token comment">//   {this.props.children}</span>
    <span class="token comment">// &lt;/div&gt;</span>

    <span class="token comment">// \u4F7F\u7528 Portals \u6E32\u67D3\u5230 body \u4E0A</span>
    <span class="token keyword">return</span> ReactDom<span class="token punctuation">.</span><span class="token function">createPortal</span><span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;modal&quot;</span><span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token comment">/*\u7C7B\u4F3C Vue slot*/</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">,</span>
      document<span class="token punctuation">.</span>body <span class="token comment">// DOM \u8282\u70B9</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> PortalsDemo
</code></pre></div><p>\u5728 App.js \u4E2D\u4F7F\u7528</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>PortalsDemo<span class="token operator">&gt;</span> modal \u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>PortalsDemo<span class="token operator">&gt;</span>
</code></pre></div>`,11);function t(o,e){return p}var r=s(a,[["render",t]]);export{r as default};
