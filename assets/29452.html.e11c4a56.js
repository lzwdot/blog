import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="hooks-\u4F7F\u7528\u4E2D\u7684\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#hooks-\u4F7F\u7528\u4E2D\u7684\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> Hooks \u4F7F\u7528\u4E2D\u7684\u6CE8\u610F\u4E8B\u9879</h1><p>\u51E0\u70B9\u6CE8\u610F\u4E8B\u9879</p><h2 id="usestate-\u521D\u59CB\u5316\u503C-\u53EA\u6709\u7B2C\u4E00\u6B21\u6709\u6548" tabindex="-1"><a class="header-anchor" href="#usestate-\u521D\u59CB\u5316\u503C-\u53EA\u6709\u7B2C\u4E00\u6B21\u6709\u6548" aria-hidden="true">#</a> useState \u521D\u59CB\u5316\u503C\uFF0C\u53EA\u6709\u7B2C\u4E00\u6B21\u6709\u6548</h2><p>\u76F4\u63A5\u770B\u4EE3\u7801</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>useState<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B50\u7EC4\u4EF6</span>
<span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>userInfo<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// render: \u521D\u59CB\u5316 state</span>
  <span class="token comment">// re-render: \u53EA\u6062\u590D\u521D\u59CB\u5316\u7684 state \u503C\uFF0C\u4E0D\u4F1A\u518D\u91CD\u65B0\u8BBE\u7F6E\u65B0\u7684\u503C</span>
  <span class="token comment">// \u53EA\u80FD\u7528 setName \u4FEE\u6539</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>userInfo<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>child<span class="token punctuation">,</span> props name<span class="token operator">:</span><span class="token punctuation">{</span>userInfo<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>child<span class="token punctuation">,</span> state name<span class="token operator">:</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">UseStateTrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;lzw&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> userInfo <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      parent <span class="token operator">&amp;</span>nbsp<span class="token punctuation">;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>setName<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>ds
    <span class="token operator">&lt;</span>Child userInfo<span class="token operator">=</span><span class="token punctuation">{</span>userInfo<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> UseStateTrap
</code></pre></div><p>\u521D\u59CB\u503C</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>child<span class="token punctuation">,</span> props name<span class="token operator">:</span>lzw
child<span class="token punctuation">,</span> state name<span class="token operator">:</span>lzw
</code></pre></div><p>\u70B9\u51FB setName \u540E\u7ED3\u679C</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>child<span class="token punctuation">,</span> props name<span class="token operator">:</span>\u5F20\u4E09
child<span class="token punctuation">,</span> state name<span class="token operator">:</span>lzw
</code></pre></div><h2 id="useeffect-\u5185\u90E8\u4E0D\u80FD\u4FEE\u6539-state" tabindex="-1"><a class="header-anchor" href="#useeffect-\u5185\u90E8\u4E0D\u80FD\u4FEE\u6539-state" aria-hidden="true">#</a> useEffect \u5185\u90E8\u4E0D\u80FD\u4FEE\u6539 state</h2><p>\u76F4\u63A5\u770B\u4EE3\u7801</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>useEffect<span class="token punctuation">,</span> useState<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">UseEffectChangeState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token comment">// \u6A21\u62DF DidMount</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;useEffect...&#39;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>

    <span class="token comment">// \u5B9A\u65F6\u4EFB\u52A1</span>
    <span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;setInterval...&#39;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
      <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>

    <span class="token comment">// \u6E05\u9664\u5B9A\u65F6\u4EFB\u52A1</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u4F9D\u8D56\u662F []</span>

  <span class="token comment">// \u4F9D\u8D56\u662F [] \u65F6\uFF1A re-render \u4E0D\u4F1A\u91CD\u65B0\u6267\u884C effect \u51FD\u6570</span>
  <span class="token comment">// \u6CA1\u6709\u4F9D\u8D56\uFF1Are-render \u4F1A\u91CD\u65B0\u6267\u884C effect \u51FD\u6570</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>count<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> UseEffectChangeState
</code></pre></div><p>\u63A7\u5236\u53F0\u8F93\u51FA</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>useEffect<span class="token operator">...</span> <span class="token number">0</span>
setInterval<span class="token operator">...</span> <span class="token number">0</span>
</code></pre></div><p><strong>\u89E3\u51B3\u529E\u6CD5</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>useEffect<span class="token punctuation">,</span> useState<span class="token punctuation">,</span> useRef<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">UseEffectChangeState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token comment">// \u6A21\u62DF DidMount</span>
  <span class="token keyword">let</span> countRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token comment">//\u89E3\u51B3\u529E\u6CD5</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;useEffect...&#39;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>

    <span class="token comment">// \u5B9A\u65F6\u4EFB\u52A1</span>
    <span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// console.log(&#39;setInterval...&#39;, count)</span>
      <span class="token comment">// setCount(count + 1)</span>
      <span class="token comment">//\u89E3\u51B3\u529E\u6CD5-----</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;setInterval...&#39;</span><span class="token punctuation">,</span> countRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span>
      <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token operator">++</span>countRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span>
      <span class="token comment">//\u89E3\u51B3\u529E\u6CD5-----</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>

    <span class="token comment">// \u6E05\u9664\u5B9A\u65F6\u4EFB\u52A1</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u4F9D\u8D56\u662F []</span>

  <span class="token comment">// \u4F9D\u8D56\u662F [] \u65F6\uFF1A re-render \u4E0D\u4F1A\u91CD\u65B0\u6267\u884C effect \u51FD\u6570</span>
  <span class="token comment">// \u6CA1\u6709\u4F9D\u8D56\uFF1Are-render \u4F1A\u91CD\u65B0\u6267\u884C effect \u51FD\u6570</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>count<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> UseEffectChangeState
</code></pre></div><h2 id="useeffect-\u53EF\u80FD\u51FA\u73B0\u6B7B\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#useeffect-\u53EF\u80FD\u51FA\u73B0\u6B7B\u5FAA\u73AF" aria-hidden="true">#</a> useEffect \u53EF\u80FD\u51FA\u73B0\u6B7B\u5FAA\u73AF</h2><p>\u6B7B\u5FAA\u73AF\u4EE3\u7801</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>useState<span class="token punctuation">,</span> useEffect<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// axios \u8FD4\u9001\u7F51\u7EDC\u8BF7\u6C42</span>
<span class="token keyword">function</span> <span class="token function">useAxios</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> config <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>error<span class="token punctuation">,</span> setError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5229\u7528 axios \u53D1\u9001\u7F51\u7EDC\u8BF7\u6C42</span>
      <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
      axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token comment">// \u53D1\u9001\u4E00\u4E2A get \u8BF7\u6C42</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token function">setData</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token function">setError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>url<span class="token punctuation">]</span> <span class="token comment">// \u53EA\u80FD\u4F7F\u7528\u503C\u7C7B\u578B\uFF1Aa,b,c \u8FD9\u79CD\uFF0C\u7136\u540E\u62FC\u63A5\u6210 const config = {a,b,c}</span>
    <span class="token comment">//[url,config] // \u5982\u679C\u4F7F\u7528 config \u5BF9\u8C61\uFF0C\u5C31\u56DE\u51FA\u73B0\u6B7B\u5FAA\u73AF</span>
    <span class="token comment">// \u6839\u672C\u539F\u56E0\u662F React \u4F7F\u7528 Object.is \u5224\u65AD \u4F9D\u8D56 \u662F\u5426\u53D8\u5316</span>
    <span class="token comment">// Object.is(1,1)  // true</span>
    <span class="token comment">// Object.is(&#39;a&#39;,&#39;a&#39;) // true</span>
    <span class="token comment">// Object.is({},{}) // false</span>
    <span class="token comment">// Object.is([],[]) // false</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> data<span class="token punctuation">,</span> error<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> useAxios
</code></pre></div>`,19);function p(o,e){return t}var l=s(a,[["render",p]]);export{l as default};
