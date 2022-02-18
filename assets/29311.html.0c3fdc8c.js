import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="react-context-\u7684\u4F7F\u7528-\u9AD8\u7EA7" tabindex="-1"><a class="header-anchor" href="#react-context-\u7684\u4F7F\u7528-\u9AD8\u7EA7" aria-hidden="true">#</a> React Context \u7684\u4F7F\u7528\uFF08\u9AD8\u7EA7\uFF09</h1><p>context \u4E0A\u4E0B\u6587\u573A\u666F</p><ul><li>\u516C\u5171\u4FE1\u606F\uFF08\u8BED\u97F3\uFF0C\u4E3B\u9898\uFF09\u5982\u4F55\u4F20\u9012\u7ED9\u6BCF\u4E2A\u7EC4\u4EF6\uFF1F</li><li>\u7528 props \u592A\u7E41\u7410</li><li>\u7528 redux \u5C0F\u9898\u5927\u505A</li></ul><p>\u4E00\u4E2A\u66F4\u6539 theme \u914D\u8272\u7684\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u521B\u5EFA Context \u586B\u5145\u9ED8\u8BA4\u503C\uFF08\u4EFB\u610F\u4E00\u4E2A js \u53D8\u91CF\uFF09</span>
<span class="token keyword">const</span> ThemeContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token string">&#39;light&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u5E95\u5C42\u7EC4\u4EF6 - \u51FD\u6570\u5F0F\u7EC4\u4EF6</span>
<span class="token keyword">function</span> <span class="token function">ThemeLink</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// const theme = this.context // \u4F1A\u62A5\u9519\uFF0C\u51FD\u6570\u5F0F\u7EC4\u4EF6\u6CA1\u6709\u5B9E\u4F8B\uFF0C\u65E2\u6CA1\u6709 this</span>

  <span class="token comment">// \u51FD\u6570\u5F0F\u7EC4\u4EF6\u53EF\u4EE5\u4F7F\u7528 Consumer</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ThemeContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>link&#39;s theme is <span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5E95\u5C42\u7EC4\u4EF6 - class \u7EC4\u4EF6</span>
<span class="token keyword">class</span> <span class="token class-name">ThemeButton</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6307\u5B9A contextType \u8BFB\u53D6\u5F53\u524D\u7684 theme context</span>
  <span class="token comment">// static contextType = ThemeContext // \u4E5F\u53EF\u4EE5\u7528 ThemeButton.context</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context <span class="token comment">// React \u4F1A\u5F80\u4E0A\u627E\u5230\u6700\u8FD1\u7684 theme Provider\uFF0C\u7136\u540E\u4F7F\u7528</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>button&#39;s theme is <span class="token punctuation">{</span>theme<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ThemeButton<span class="token punctuation">.</span>contextType <span class="token operator">=</span> ThemeContext <span class="token comment">// \u6307\u5B9A contextType \u8BFB\u53D6\u5F53\u524D theme context</span>

<span class="token comment">// \u4E2D\u95F4\u7684\u7EC4\u4EF6\u518D\u4E5F\u4E0D\u5FC5\u6307\u660E\u5F80\u4E0B\u4F20\u9012 theme \u4E86</span>
<span class="token keyword">function</span> <span class="token function">ToolBar</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>ThemeButton<span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>ThemeLink<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6700\u5916\u5C42\u7EC4\u4EF6</span>
<span class="token keyword">class</span> <span class="token class-name">ContextDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">&#39;light&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6570\u636E\u63D0\u4F9B\u8005</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>ThemeContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>theme<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token comment">/*\u91CC\u9762\u7684\u7EC4\u4EF6\u90FD\u53EF\u4EE5\u6D88\u8D39\u6570\u636E*/</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>ToolBar<span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>hr<span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>changeTheme<span class="token punctuation">}</span><span class="token operator">&gt;</span>change theme<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeContext<span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">changeTheme</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>theme <span class="token operator">===</span> <span class="token string">&#39;light&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;dark&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;light&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ContextDemo
</code></pre></div>`,5);function p(o,e){return t}var r=s(a,[["render",p]]);export{r as default};
