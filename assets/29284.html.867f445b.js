import{h as s}from"./app.4ca8afde.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=s(`<h1 id="jsx-\u57FA\u672C\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#jsx-\u57FA\u672C\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> JSX \u57FA\u672C\u77E5\u8BC6\u70B9</h1><p>\u57FA\u7840\u77E5\u8BC6</p><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h2><ul><li>\u53D8\u91CF\u3001\u8868\u8FBE\u5F0F</li><li>class style</li><li>\u5B50\u5143\u7D20\u548C\u7EC4\u4EF6</li></ul><p>\u5217\u5B50\uFF0C\u7EC4\u4EF6 <code>JSXBaseDemo.js</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> List <span class="token keyword">from</span> <span class="token string">&#39;./ListDemo&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">JSXBaseDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lzw&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">imgUrl</span><span class="token operator">:</span> <span class="token string">&#39;https://gravatar.loli.net/avatar/c0cd88e37cadb689c9c79caa0e9ac1f8?s=128&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">flag</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u83B7\u53D6\u53D8\u91CF \u63D2\u503C</span>
    <span class="token keyword">const</span> pElem <span class="token operator">=</span> <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token comment">// return pElem</span>

    <span class="token comment">// \u8868\u8FBE\u5F0F</span>
    <span class="token keyword">const</span> exprElem <span class="token operator">=</span> <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>flag <span class="token operator">?</span> <span class="token string">&#39;yes&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;no&#39;</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token comment">// return exprElem</span>

    <span class="token comment">// \u5B50\u5143\u7D20</span>
    <span class="token keyword">const</span> imgElem <span class="token operator">=</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u6211\u7684\u5934\u50CF<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>imgUrl<span class="token punctuation">}</span> alt<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token comment">// return imgElem</span>

    <span class="token comment">// class</span>
    <span class="token keyword">const</span> classElem <span class="token operator">=</span> <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">&quot;title&quot;</span><span class="token operator">&gt;</span>\u8BBE\u7F6E <span class="token keyword">class</span> <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token comment">// return classElem</span>

    <span class="token comment">// style</span>
    <span class="token keyword">const</span> styleData <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">&#39;30px&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">}</span>
    <span class="token keyword">let</span> styleElem <span class="token operator">=</span> <span class="token operator">&lt;</span>p style<span class="token operator">=</span><span class="token punctuation">{</span>styleData<span class="token punctuation">}</span><span class="token operator">&gt;</span>\u8BBE\u7F6E style <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token comment">// \u5185\u8054\u5199\u6CD5 \u6CE8\u610F\u662F\uFF1A {{}}</span>
    styleElem <span class="token operator">=</span> <span class="token operator">&lt;</span>p style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">&#39;50px&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>\u8BBE\u7F6E style<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token comment">// return styleElem</span>

    <span class="token comment">// \u539F\u59CB html</span>
    <span class="token keyword">const</span> rawHtml <span class="token operator">=</span> <span class="token string">&#39;&lt;sapn&gt;\u5BCC\u6587\u672C\u5185\u5BB9&lt;i&gt;\u659C\u4F53&lt;/i&gt;&lt;b&gt;\u7C97\u4F53&lt;/b&gt;&lt;/sapn&gt;&#39;</span>
    <span class="token keyword">const</span> rawHtmlData <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">__html</span><span class="token operator">:</span> rawHtml <span class="token comment">// \u6CE8\u610F\uFF0C\u5FC5\u987B\u662F\u8FD9\u79CD\u683C\u5F0F</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> rawHtmlElem <span class="token operator">=</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token comment">/*\u663E\u793A html*/</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>p dangerouslySetInnerHTML<span class="token operator">=</span><span class="token punctuation">{</span>rawHtmlData<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token comment">/*\u663E\u793A\u6E90\u4EE3\u7801*/</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>rawHtml<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token comment">// return rawHtmlElem</span>

    <span class="token comment">// \u52A0\u8F7D\u7EC4\u4EF6</span>
    <span class="token keyword">const</span> componentElem <span class="token operator">=</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token constant">JSX</span> \u4E2D\u52A0\u8F7D\u4E00\u4E2A\u7EC4\u4EF6<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>List<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token keyword">return</span> componentElem
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> JSXBaseDemo
</code></pre></div><p>\u7136\u540E\u5728 <code>App.js</code> \u4E2D\u6D4B\u8BD5</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> JSXBaseDemo <span class="token keyword">from</span> <span class="token string">&quot;./JSXBaseDemo&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;App&quot;</span><span class="token operator">&gt;</span>     
      <span class="token operator">&lt;</span>JSXBaseDemo<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre></div><h2 id="\u6761\u4EF6\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u5224\u65AD" aria-hidden="true">#</a> \u6761\u4EF6\u5224\u65AD</h2><ul><li>if else</li><li>\u4E09\u5143\u8868\u8FBE\u5F0F</li><li>\u903B\u8F91\u8FD0\u7B97\u7B26 &amp;&amp; ||</li></ul><p>\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ConditionDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">&#39;black&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> blackBtn <span class="token operator">=</span> <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token string">&quot;btn-black&quot;</span><span class="token operator">&gt;</span>black btn<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token keyword">const</span> whiteBtn <span class="token operator">=</span> <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token string">&quot;btn-white&quot;</span><span class="token operator">&gt;</span>white btn<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>

    <span class="token comment">// if else</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>theme <span class="token operator">===</span> <span class="token string">&#39;black&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// return blackBtn</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// return whiteBtn</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u4E09\u5143\u8868\u8FBE\u5F0F</span>
    <span class="token comment">// return &lt;div&gt;</span>
    <span class="token comment">//   {this.state.theme === &#39;black&#39; ? blackBtn : whiteBtn}</span>
    <span class="token comment">// &lt;/div&gt;</span>

    <span class="token comment">// &amp;&amp;</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>theme <span class="token operator">===</span> <span class="token string">&#39;black&#39;</span> <span class="token operator">&amp;&amp;</span> blackBtn<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ConditionDemo
</code></pre></div><h2 id="\u6E32\u67D3\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u6E32\u67D3\u5217\u8868" aria-hidden="true">#</a> \u6E32\u67D3\u5217\u8868</h2><ul><li>map</li><li>key</li></ul><p>\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ListDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">[</span>
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

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// \u7C7B\u4F3C Vue v-for</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
          <span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u8FD9\u91CC\u7684 key \u548C Vue \u7684 key \u7C7B\u4F3C\uFF0C\u5FC5\u586B\uFF0C\u4E0D\u80FD\u662F index \u6216 random</span>
            <span class="token keyword">return</span> <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">&gt;</span>
              index <span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token punctuation">;</span> title <span class="token punctuation">{</span>item<span class="token punctuation">.</span>title<span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ListDemo
</code></pre></div>`,16);function t(o,e){return p}var r=n(a,[["render",t]]);export{r as default};
