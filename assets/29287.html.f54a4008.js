import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/blog/assets/react-945dd88ba1f47ecac1b9f27c15d8b312.b0edfaf4.png";const t={},p=n(`<h1 id="react-\u4E8B\u4EF6\u548C-bind-this" tabindex="-1"><a class="header-anchor" href="#react-\u4E8B\u4EF6\u548C-bind-this" aria-hidden="true">#</a> React \u4E8B\u4EF6\u548C bind this</h1><p>\u4E8B\u4EF6</p><ul><li>bind this</li><li>\u5173\u4E8E event \u53C2\u6570</li><li>\u4F20\u9012\u81EA\u5B9A\u4E49\u53C2\u6570</li></ul><p>\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ListDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lzw.&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;id-1&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u6807\u9898-1&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;id-2&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u6807\u9898-2&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;id-3&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u6807\u9898-3&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u4FEE\u6539\u65B9\u6CD5\u7684 this \u6307\u5411</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>clickHandler1 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">clickHandler1</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// this - \u4F7F\u7528 bind</span>
    <span class="token comment">// return &lt;p onClick={this.clickHandler1}&gt;</span>
    <span class="token comment">//   {this.state.name}</span>
    <span class="token comment">// &lt;/p&gt;</span>

    <span class="token comment">// this - \u4F7F\u7528\u9759\u6001\u65B9\u6CD5</span>
    <span class="token comment">// return &lt;p onClick={this.clickHandler2}&gt;</span>
    <span class="token comment">//   {this.state.name}</span>
    <span class="token comment">// &lt;/p&gt;</span>

    <span class="token comment">// event</span>
    <span class="token comment">// return &lt;a href=&quot;https://lzwdot.com&quot; onClick={this.clickHandler3}&gt;</span>
    <span class="token comment">//   click me</span>
    <span class="token comment">// &lt;/a&gt;</span>

    <span class="token comment">// \u4F20\u53C2 - \u7528 bind(this,a,b)</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">clickHandler4</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> item<span class="token punctuation">.</span>id<span class="token punctuation">,</span> item<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
            index <span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token punctuation">;</span> title <span class="token punctuation">{</span>item<span class="token punctuation">.</span>title<span class="token punctuation">}</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>

  <span class="token function">clickHandler1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// this \u9ED8\u8BA4\u662F undefined</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lzw.1&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u9759\u6001\u65B9\u6CD5\uFF0Cthis \u6307\u5411\u5F53\u524D\u5B9E\u4F8B</span>
  <span class="token function-variable function">clickHandler2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lzw.2&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u83B7\u53D6 event</span>
  <span class="token function-variable function">clickHandler3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A</span>
    e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u963B\u6B62\u5192\u6CE1</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;target&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token comment">// \u6307\u5411\u5F53\u524D\u5143\u7D20\uFF0C\u5373\u5F53\u524D\u5143\u7D20\u89E6\u53D1</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;current target&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">)</span> <span class="token comment">// \u6307\u5411\u5F53\u524D\u5143\u7D20\uFF0C\u5047\u8C61\uFF01</span>

    <span class="token comment">// \u6CE8\u610F\uFF0Cevent \u5176\u5B9E\u5C31\u662F React \u5C01\u88C5\u7684\uFF0C\u53EF\u4EE5\u770B __proto__.constructor \u662F SyntheticBaseEvent \u7EC4\u5408\u4E8B\u4EF6</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token comment">// \u4E0D\u662F\u539F\u751F\u7684 Event\uFF0C\u539F\u751F\u7684\u662F MouseEvent</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;event.__proto__.constructor&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token class-name">__proto__</span><span class="token punctuation">.</span>constructor<span class="token punctuation">)</span>

    <span class="token comment">// \u539F\u751F event \u5982\u4E0B\uFF0C\u5176 __proto__.constructor \u662F MouseEvent</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;nativeEvent&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>nativeEvent<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;nativeEvent&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>nativeEvent<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token comment">// \u6307\u5411\u5F53\u524D\u5143\u7D20\uFF0C\u5373\u5F53\u524D\u5143\u7D20\u89E6\u53D1</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;nativeEvent&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>nativeEvent<span class="token punctuation">.</span>currentTarget<span class="token punctuation">)</span> <span class="token comment">// \u6307\u5411 root \u5143\u7D20</span>

    <span class="token comment">// 1\u3001event \u662F SyntheticBaseEvent\uFF0C\u6A21\u62DF\u51FA\u6765 DOM \u4E8B\u4EF6\u6240\u6709\u80FD\u529B</span>
    <span class="token comment">// 2\u3001e.nativeEvent \u662F\u539F\u751F\u4E8B\u4EF6\u5BF9\u8C61</span>
    <span class="token comment">// 3\u3001\u6240\u6709\u7684\u4E8B\u4EF6\uFF0C\u6302\u8F7D\u5230 root \u5143\u7D20</span>
    <span class="token comment">// 4\u3001\u548C DOM \u4E8B\u4EF6\u4E0D\u4E00\u6837\uFF0C\u548C Vue \u4E8B\u4EF6\u4E5F\u4E0D\u4E00\u6837</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u63A5\u6536\u53C2\u6570</span>
  <span class="token function-variable function">clickHandler4</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">id<span class="token punctuation">,</span> title<span class="token punctuation">,</span> e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> title<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token comment">// \u6700\u540E\u8FFD\u52A0 event \u53C2\u6570\u5373\u53EF\u4F7F\u7528</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ListDemo
</code></pre></div><blockquote><p>\u6CE8\u610F</p></blockquote><ul><li>React 16 \u7ED1\u5B9A document</li><li>React 17 \u4E8B\u4EF6\u7ED1\u5B9A\u5230 root \u7EC4\u4EF6</li><li>\u8FD9\u6837\u6539\u8FDB\u6709\u5229\u4E8E\u591A\u4E2A React \u7248\u672C\u5E76\u5B58\uFF0C\u4F8B\u5982\u5FAE\u524D\u7AEF</li></ul><p>\u5927\u6982\u5C31\u662F\u8FD9\u6837\u7684</p><p><img src="`+a+'" alt="react"></p>',9);function o(e,c){return p}var i=s(t,[["render",o]]);export{i as default};
