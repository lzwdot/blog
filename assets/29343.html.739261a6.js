import{h as s}from"./app.4ca8afde.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=s(`<h1 id="react-router-\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#react-router-\u7684\u4F7F\u7528" aria-hidden="true">#</a> React-router \u7684\u4F7F\u7528</h1><p>\u77E5\u8BC6\u70B9</p><ul><li>\u8DEF\u7531\u6A21 \u5F0F\uFF08hash\uFF0CH5 history\uFF09\uFF0C\u540C vue-router</li><li>\u8DEF\u7531\u914D\u7F6E\uFF08\u52A8\u6001\u8DEF\u7531\uFF0C\u61D2\u52A0\u8F7D\uFF09\uFF0C\u540C vue-router</li></ul><h2 id="\u8DEF\u7531\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u6A21\u5F0F" aria-hidden="true">#</a> \u8DEF\u7531\u6A21\u5F0F</h2><ul><li>hash \u6A21\u5F0F\uFF08\u9ED8\u8BA4\uFF09\uFF0C\u5982\uFF1Ahttp://abc.com/#/user/10</li><li>H5 history \u6A21\u5F0F\uFF0C\u5982 http://abc.com/user/20</li><li>\u540E\u8005\u9700\u8981 server \u7AEF\u652F\u6301\uFF0C\u56E0\u6B64\u65E0\u7279\u6B8A\u9700\u6C42\u53EF\u9009\u62E9\u524D\u8005</li></ul><p>\u5982 nginx \u914D\u7F6E</p><div class="language-c ext-c"><pre class="language-c"><code>location <span class="token operator">/</span> <span class="token punctuation">{</span>
  try_files $uri $uri<span class="token operator">/</span> <span class="token operator">/</span>index<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// hash \u6A21\u5F0F</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>HashRouter <span class="token keyword">as</span> Router<span class="token punctuation">,</span>Switch<span class="token punctuation">,</span>Route<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// H5 history \u6A21\u5F0F</span>
<span class="token comment">// import {BrowserRouter as Router,Switch,Route} from &quot;react-router-dom&quot;;</span>

<span class="token keyword">function</span> <span class="token function">RouterComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Router<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Switch<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token comment">/*\u9996\u9875*/</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">&quot;/&quot;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Home <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token comment">/*\u52A8\u6001\u8DEF\u7531*/</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/project/:id&quot;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Project <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token comment">/*\u9ED8\u8BA4\u8DEF\u7531*/</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;*&quot;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>NotFound <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u8DEF\u7531\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u914D\u7F6E" aria-hidden="true">#</a> \u8DEF\u7531\u914D\u7F6E</h2><p>\u52A8\u6001\u8DEF\u7531</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>Link<span class="token punctuation">,</span> useParams<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Project</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u83B7\u53D6 url \u53C2\u6570 \u5982\uFF1A&#39;project/100&#39;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>id<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&quot;/&quot;</span><span class="token operator">&gt;</span>\u9996\u9875<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u61D2\u52A0\u8F7D</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>Suspense<span class="token punctuation">,</span> lazy<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>BrowserRouter <span class="token keyword">as</span> Router<span class="token punctuation">,</span> Switch<span class="token punctuation">,</span> Route<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Home <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./routes/Home&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> About <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./routes/About&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Router<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Switch<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">&quot;/&quot;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/about&quot;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>About<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">&gt;</span>
<span class="token punctuation">)</span>
</code></pre></div>`,14);function o(p,e){return t}var l=n(a,[["render",o]]);export{l as default};
