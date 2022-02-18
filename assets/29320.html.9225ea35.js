import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="react-\u6027\u80FD\u4F18\u5316-\u9AD8\u7EA7" tabindex="-1"><a class="header-anchor" href="#react-\u6027\u80FD\u4F18\u5316-\u9AD8\u7EA7" aria-hidden="true">#</a> React \u6027\u80FD\u4F18\u5316\uFF08\u9AD8\u7EA7\uFF09</h1><p>\u6027\u80FD\u4F18\u5316\u5BF9\u4E8E React \u66F4\u52A0\u91CD\u8981</p><ul><li>shouldComponentUpdate\uFF08\u7B80\u79F0 SCU\uFF09</li><li>PureComponent \u548C React.memo</li><li>\u4E0D\u53EF\u53D8\u503C immutable.js</li></ul><h2 id="shouldcomponentupdate" tabindex="-1"><a class="header-anchor" href="#shouldcomponentupdate" aria-hidden="true">#</a> shouldComponentUpdate</h2><p><strong>SCU \u57FA\u672C\u7528\u6CD5</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token parameter">nextProps<span class="token punctuation">,</span> nextState<span class="token punctuation">,</span> nextContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>nextState<span class="token punctuation">.</span>count <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token comment">// \u53EF\u4EE5\u6E32\u67D3</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token comment">// \u4E0D\u91CD\u590D\u6E32\u67D3</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>SCU \u9ED8\u8BA4\u8FD4\u56DE true</strong></p><blockquote><p>\u7236\u7EC4\u4EF6\u6709\u66F4\u65B0\uFF0C\u5B50\u7EC4\u4EF6\u5219\u65E0\u6761\u4EF6\u4E5F\u66F4\u65B0</p></blockquote><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5B50\u7EC4\u4EF6</span>
<span class="token keyword">class</span> <span class="token class-name">Footer</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>text<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>

  <span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5F53\u66F4\u65B0\u7236\u7EC4\u4EF6\u65F6\uFF0C\u4F1A\u4E00\u76F4\u6267\u884C\u6B64</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;footer add update&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// shouldComponentUpdate \u9ED8\u8BA4\u8FD4\u56DE true</span>
  <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token parameter">nextProps<span class="token punctuation">,</span> nextState<span class="token punctuation">,</span> nextContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nextProps<span class="token punctuation">.</span>text <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token comment">// \u53EF\u4EE5\u6E32\u67D3</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token comment">// \u4E0D\u91CD\u590D\u6E32\u67D3</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// React \u9ED8\u8BA4\uFF1A\u7236\u7EC4\u4EF6\u6709\u66F4\u65B0\uFF0C\u5B50\u7EC4\u4EF6\u5219\u65E0\u6761\u4EF6\u4E5F\u66F4\u65B0</span>
  <span class="token comment">// \u6027\u80FD\u4F18\u5316\u5BF9\u4E8E React \u66F4\u52A0\u91CD\u8981</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7236\u7EC4\u4EF6</span>
<span class="token keyword">class</span> <span class="token class-name">TodoListDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>      
      <span class="token literal-property property">footerInfo</span><span class="token operator">:</span> <span class="token string">&#39;\u5E95\u90E8\u6587\u5B57&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>      
      <span class="token operator">&lt;</span>Footer text<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>footerInfo<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>SCU \u6BCF\u6B21\u90FD\u8981\u5417\uFF1F</strong></p><ul><li>\u9700\u8981\u65F6\u624D\u4F18\u5316\uFF0C\u6BD4\u5982\u4E0A\u9762\u7684\u4F8B\u5B50</li><li>\u4E00\u5B9A\u8981\u914D\u5408\u4E0D\u53EF\u53D8\u503C\uFF0C\u6BD4\u5982\u4E0B\u9762\u7684\u4F8B\u5B50</li></ul><p>\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5B50\u7EC4\u4EF6</span>
<span class="token keyword">class</span> <span class="token class-name">List</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B50\u7EC4\u4EF6\u63A5\u6536\u53C2\u6570</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>list<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props

    <span class="token keyword">return</span> <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u589E\u52A0 shouldComponentUpdate</span>
  <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token parameter">nextProps<span class="token punctuation">,</span> nextState<span class="token punctuation">,</span> nextContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// lodash.isEqual \u505A\u5BF9\u8C61\u6216\u8005\u6570\u7EC4\u7684\u6DF1\u5EA6\u6BD4\u8F83</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>lodash<span class="token punctuation">.</span><span class="token function">isEqual</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">.</span>list<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>list<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u76F8\u7B49\uFF0C\u5219\u4E0D\u91CD\u590D\u6E32\u67D3</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token comment">// \u4E0D\u76F8\u7B49\uFF0C\u5219\u6E32\u67D3</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>SCU \u4F7F\u7528\u603B\u7ED3</p><ul><li>SCU \u9ED8\u8BA4\u8FD4\u56DE true\uFF0C\u5373 React \u9ED8\u8BA4\u91CD\u65B0\u6E32\u67D3\u6240\u6709\u5B50\u7EC4\u4EF6</li><li>\u5FC5\u987B\u914D\u5408\u201C\u4E0D\u53EF\u53D8\u503C\u201D\u4E00\u8D77\u4F7F\u7528</li><li>\u53EF\u5148\u4E0D\u7528 SCU\uFF0C\u6709\u6027\u80FD\u95EE\u9898\u65F6\u518D\u8003\u8651\u4F7F\u7528</li></ul><h2 id="purecomponent-\u548C-memo" tabindex="-1"><a class="header-anchor" href="#purecomponent-\u548C-memo" aria-hidden="true">#</a> PureComponent \u548C memo</h2><ul><li>PureComponent\uFF0CSCU \u4E2D\u5B9E\u73B0\u4E86\u6D45\u6BD4\u8F83</li><li>memo\uFF0C\u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684 PureComponent</li><li>\u6D45\u6BD4\u8F83\u5DF2\u9002\u7528\u5927\u90E8\u5206\u60C5\u51B5\uFF08\u5C3D\u91CF\u4E0D\u8981\u505A\u6DF1\u5EA6\u6BD4\u8F83\uFF09</li></ul><p>PureComponent \u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">PureComponentDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6D45\u6BD4\u8F83</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>memo \u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4F7F\u7528 props \u6E32\u67D3</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">areEqual</span><span class="token punctuation">(</span><span class="token parameter">prevProps<span class="token punctuation">,</span> nextProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5982\u679C\u628A nextProps \u4F20\u5165 render \u65B9\u6CD5\u7684\u8FD4\u56DE\u7ED3\u679C</span>
  <span class="token comment">// \u4E0E\u5C06 prevProps \u4F20\u5165 render \u65B9\u6CD5\u7684\u8FD4\u56DE\u7ED3\u679C\u4E00\u81F4\u7684\u8BDD\u5219\u8FD4\u56DE true\uFF0C</span>
  <span class="token comment">// \u5426\u5219\u8FD4\u56DE false</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span>MyComponent<span class="token punctuation">,</span> areEqual<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u4F7F\u7528-immutable-js" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-immutable-js" aria-hidden="true">#</a> \u4F7F\u7528 <code>immutable.js</code></h2><ul><li>\u5F7B\u5E95\u62E5\u62B1\u201C\u4E0D\u53EF\u53D8\u503C\u201D</li><li>\u57FA\u4E8E\u5171\u4EAB\u6570\u636E\uFF08\u4E0D\u662F\u6DF1\u62F7\u8D1D\uFF09\uFF0C\u901F\u5EA6\u597D</li><li>\u6709\u4E00\u5B9A\u5B66\u4E60\u548C\u8FC1\u79FB\u6210\u672C\uFF0C\u6309\u9700\u4F7F\u7528</li></ul><p>\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> map1 <span class="token operator">=</span> Immutable<span class="token punctuation">.</span><span class="token function">Map</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> map2 <span class="token operator">=</span> map1<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map2<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 50</span>
</code></pre></div>`,25);function t(o,e){return p}var u=s(a,[["render",t]]);export{u as default};
