import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="useref-\u548C-usecontext-\u7B49\u5176\u4ED6-hooks" tabindex="-1"><a class="header-anchor" href="#useref-\u548C-usecontext-\u7B49\u5176\u4ED6-hooks" aria-hidden="true">#</a> useRef \u548C useContext \u7B49\u5176\u4ED6 Hooks</h1><p>\u5176\u4ED6 Hooks</p><ul><li>useRef</li><li>useContext</li><li>useReducer</li><li>useMemo</li><li>useCallback</li></ul><h2 id="useref-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#useref-\u4F7F\u7528" aria-hidden="true">#</a> useRef \u4F7F\u7528</h2><p>\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>useEffect<span class="token punctuation">,</span> useRef<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">UseRefDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> btnRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// \u521D\u59CB\u503C</span>
  <span class="token keyword">const</span> numRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token comment">// 100</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>btnRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token comment">// DOM \u8282\u70B9 &lt;button&gt;click&lt;/button&gt;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button ref<span class="token operator">=</span><span class="token punctuation">{</span>btnRef<span class="token punctuation">}</span><span class="token operator">&gt;</span>click<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> UseRefDemo
</code></pre></div><h2 id="usecontext-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#usecontext-\u4F7F\u7528" aria-hidden="true">#</a> useContext \u4F7F\u7528</h2><p>\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>useContext<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> themes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">light</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">foreground</span><span class="token operator">:</span> <span class="token string">&#39;#000&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">&#39;#eee&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dark</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">foreground</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">&#39;#222&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u521B\u5EFA Context</span>
<span class="token keyword">const</span> ThemeContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span>themes<span class="token punctuation">.</span>light<span class="token punctuation">)</span>

<span class="token comment">// \u5B59\u5B50\u7EC4\u4EF6</span>
<span class="token keyword">function</span> <span class="token function">ThemeButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>ThemeContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>button style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">background</span><span class="token operator">:</span> theme<span class="token punctuation">.</span>background<span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> theme<span class="token punctuation">.</span>foreground<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
    hello world
  <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B50\u7EC4\u4EF6</span>
<span class="token keyword">function</span> <span class="token function">Toolbar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>ThemeButton<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>ThemeButton<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7236\u7EC4\u4EF6</span>
<span class="token keyword">function</span> <span class="token function">UseContextDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ThemeContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span>themes<span class="token punctuation">.</span>dark<span class="token punctuation">}</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Toolbar<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Toolbar<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeContext<span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> UseContextDemo
</code></pre></div><h2 id="usereducer-\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#usereducer-\u7684\u4F7F\u7528" aria-hidden="true">#</a> useReducer \u7684\u4F7F\u7528</h2><p>useReducer \u80FD\u4EE3\u66FF redux \u5417</p><ul><li>useReducer \u662F useState \u7684\u66FF\u4EE3\u65B9\u6848\uFF0C\u7528\u4E8E state \u590D\u6742\u53D8\u5316</li><li>useReducer \u662F\u5355\u4E2A\u7EC4\u4EF6\u72B6\u6001\u7BA1\u7406\uFF0C\u7EC4\u4EF6\u901A\u8BAF\u8FD8\u9700\u8981 props</li><li>redux \u662F\u5168\u5C40\u7684\u72B6\u6001\u7BA1\u7406\uFF0C\u591A\u7EC4\u4EF6\u5171\u4EAB\u6570\u636E</li></ul><p>\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>useReducer<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">reducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;increment&#39;</span> <span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">count</span><span class="token operator">:</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token string">&#39;decrement&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">count</span><span class="token operator">:</span> state<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">}</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">UseReducerDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5F88\u50CF const [count,setCount] = useState(0)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useReducer</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> initialState<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token punctuation">{</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;increment&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>increment<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;decrement&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>decrement<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> UseReducerDemo
</code></pre></div><h2 id="usememo-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#usememo-\u4F7F\u7528" aria-hidden="true">#</a> useMemo \u4F7F\u7528</h2><p>\u4F7F\u7528 useMemo \u505A\u6027\u80FD\u4F18\u5316</p><ul><li>React \u9ED8\u8BA4\u4F1A\u66F4\u65B0\u6240\u6709\u5B50\u7EC4\u4EF6</li><li>class \u7EC4\u4EF6\u4F7F\u7528 SCU \u548C PureComponect \u505A\u4F18\u5316</li><li>Hooks \u4E2D\u4F7F\u7528 useMemo\uFF0C\u4F46\u4F18\u5316\u7684\u539F\u7406\u662F\u76F8\u540C\u7684</li></ul><p>\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>memo<span class="token punctuation">,</span> useMemo<span class="token punctuation">,</span> useState<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B50\u7EC4\u4EF6</span>
<span class="token comment">// function Child({userInfo}) {</span>
<span class="token comment">//   console.log(&#39;child render ...&#39;, userInfo)</span>
<span class="token comment">//</span>
<span class="token comment">//   return &lt;div&gt;</span>
<span class="token comment">//     &lt;p&gt;this is child {userInfo.name} {userInfo.age}&lt;/p&gt;</span>
<span class="token comment">//   &lt;/div&gt;</span>
<span class="token comment">// }</span>

<span class="token comment">// \u7C7B\u4F3C class PureComponent\uFF0C\u5BF9 props \u8FDB\u884C\u6D45\u5C42\u6BD4\u8F83</span>
<span class="token keyword">const</span> Child <span class="token operator">=</span> <span class="token function">memo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>userInfo<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;child render ...&#39;</span><span class="token punctuation">,</span> userInfo<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token keyword">this</span> is child <span class="token punctuation">{</span>userInfo<span class="token punctuation">.</span>name<span class="token punctuation">}</span> <span class="token punctuation">{</span>userInfo<span class="token punctuation">.</span>age<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u7236\u7EC4\u4EF6</span>
<span class="token keyword">function</span> <span class="token function">UseMemoDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;parent render ...&#39;</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;lzw&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// const userInfo = {name, age: 20}</span>
  <span class="token comment">// \u7528 useMemo \u7F13\u5B58\u6570\u636E\uFF0C\u6709\u4F9D\u8D56</span>
  <span class="token keyword">const</span> userInfo <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>
      count is <span class="token punctuation">{</span>count<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>click<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Child userInfo<span class="token operator">=</span><span class="token punctuation">{</span>userInfo<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Child<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> UseMemoDemo
</code></pre></div><h2 id="usecallback-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#usecallback-\u4F7F\u7528" aria-hidden="true">#</a> useCallback \u4F7F\u7528</h2><p>\u4F7F\u7528 useCallback \u505A\u6027\u80FD\u4F18\u5316</p><ul><li>useMemo \u7F13\u5B58\u6570\u636E</li><li>useCallback \u7F13\u5B58\u51FD\u6570</li><li>\u4E24\u8005\u662F React Hooks \u7684\u5E38\u89C1\u4F18\u5316\u7B56\u7565</li></ul><p>\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>memo<span class="token punctuation">,</span> useMemo<span class="token punctuation">,</span> useState<span class="token punctuation">,</span> useCallback<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B50\u7EC4\u4EF6\uFF0C memo \u7C7B\u4F3C class PureComponent\uFF0C\u5BF9 props \u8FDB\u884C\u6D45\u5C42\u6BD4\u8F83</span>
<span class="token keyword">const</span> Child <span class="token operator">=</span> <span class="token function">memo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>userInfo<span class="token punctuation">,</span> onChange<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;child render ...&#39;</span><span class="token punctuation">,</span> userInfo<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token keyword">this</span> is child <span class="token punctuation">{</span>userInfo<span class="token punctuation">.</span>name<span class="token punctuation">}</span> <span class="token punctuation">{</span>userInfo<span class="token punctuation">.</span>age<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>input onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u7236\u7EC4\u4EF6</span>
<span class="token keyword">function</span> <span class="token function">UseCallbackDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;parent render ...&#39;</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;lzw&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// \u7528 useMemo \u7F13\u5B58\u6570\u636E\uFF0C\u6709\u4F9D\u8D56</span>
  <span class="token keyword">const</span> userInfo <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token comment">// function onChange(e) {</span>
  <span class="token comment">//   console.log(e.target.value)</span>
  <span class="token comment">// }</span>
  <span class="token comment">// \u7528 useCallback \u7F13\u5B58\u51FD\u6570</span>
  <span class="token keyword">const</span> onChange <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>
      count is <span class="token punctuation">{</span>count<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>click<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Child userInfo<span class="token operator">=</span><span class="token punctuation">{</span>userInfo<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Child<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> UseCallbackDemo
</code></pre></div>`,24);function p(o,e){return t}var u=s(a,[["render",p]]);export{u as default};
