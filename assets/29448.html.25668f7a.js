import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u4F7F\u7528-hooks-\u7684\u91CD\u8981\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-hooks-\u7684\u91CD\u8981\u89C4\u8303" aria-hidden="true">#</a> \u4F7F\u7528 Hooks \u7684\u91CD\u8981\u89C4\u8303</h1><blockquote><p>\u518D\u6B21\u5F3A\u8C03\u547D\u540D\u89C4\u8303 useXxx</p></blockquote><h2 id="hooks-\u4F7F\u7528\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#hooks-\u4F7F\u7528\u89C4\u8303" aria-hidden="true">#</a> Hooks \u4F7F\u7528\u89C4\u8303</h2><ul><li>\u53EA\u80FD\u7528\u4E8E React \u51FD\u6570\u7EC4\u4EF6\u548C\u81EA\u5B9A\u4E49 Hook \u4E2D\uFF0C\u5176\u4ED6\u5730\u65B9\u4E0D\u53EF\u4EE5</li><li>\u53EA\u80FD\u7528\u4E8E\u9876\u5C42\u4EE3\u7801\uFF0C\u4E0D\u80FD\u5728\u5FAA\u73AF\uFF0C\u5224\u65AD\u4E2D\u4F7F\u7528 Hooks</li><li>eslint \u63D2\u4EF6 eslint-plugin-react-hooks \u53EF\u4EE5\u5E2E\u5230\u4F60</li></ul><p>\u9519\u8BEF\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">Demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span>setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token comment">// \u9519\u8BEF\u4F8B\u5B50</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">,</span>count<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u9519\u8BEF\u4F8B\u5B50</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">100</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>age<span class="token punctuation">,</span>setAge<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u9519\u8BEF\u4F8B\u5B50</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>count<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//....</span>
<span class="token punctuation">}</span>
</code></pre></div><p>eslint-plugin-react-hooks \u914D\u7F6E</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token comment">// ESLint \u914D\u7F6E</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
    <span class="token string">&quot;react-hooks&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token property">&quot;react-hooks/rules-of-hooks&quot;</span><span class="token operator">:</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u68C0\u67E5 Hook \u7684\u89C4\u5219</span>
    <span class="token property">&quot;react-hooks/exhaustive-deps&quot;</span><span class="token operator">:</span><span class="token string">&quot;warn&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u68C0\u67E5 effect \u7684\u4F9D\u8D56</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="hooks-\u7684\u8C03\u7528\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#hooks-\u7684\u8C03\u7528\u987A\u5E8F" aria-hidden="true">#</a> Hooks \u7684\u8C03\u7528\u987A\u5E8F</h2><p>Hooks \u8C03\u7528\u987A\u5E8F\u5FC5\u987B\u4FDD\u6301\u4E00\u81F4</p><ul><li>\u65E0\u8BBA\u662F render \u8FD8\u662F re-render\uFF0CHooks \u8C03\u7528\u987A\u5E8F\u5FC5\u987B\u4E00\u81F4</li><li>\u5982\u679C Hooks \u51FA\u73B0\u5728\u5FAA\u73AF\uFF0C\u5224\u65AD\u91CC\uFF0C\u5219\u65E0\u6CD5\u4FDD\u8BC1\u987A\u5E8F\u4E00\u81F4</li><li>Hooks \u4E25\u91CD\u4F9D\u8D56\u4E8E\u8C03\u7528\u987A\u5E8F\uFF01\u7279\u522B\u91CD\u8981</li></ul><p>\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>useEffect<span class="token punctuation">,</span> useState<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">TeachDemo</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>couseName<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u51FD\u6570\u7EC4\u4EF6\uFF0C\u7EAF\u51FD\u6570\uFF0C\u6267\u884C\u5B8C\u5373\u9500\u6BC1</span>
  <span class="token comment">// \u6240\u4EE5\uFF0C\u65E0\u8BBA\u7EC4\u4EF6\u521D\u59CB\u5316\uFF08render\uFF09\u8FD8\u662F\u7EC4\u4EF6\u66F4\u65B0\uFF08re-render\uFF09</span>
  <span class="token comment">// \u90FD\u4F1A\u91CD\u65B0\u6267\u884C\u4E00\u6B21\u8FD9\u4E2A\u51FD\u6570\uFF0C\u83B7\u53D6\u6700\u65B0\u7684\u7EC4\u4EF6</span>
  <span class="token comment">// \u8FD9\u4E00\u70B9\u548C class \u7EC4\u4EF6\u4E0D\u4E00\u6837</span>

  <span class="token comment">// render: \u521D\u59CB\u5316 state \u7684\u503C &#39;\u5F20\u4E09&#39;</span>
  <span class="token comment">// re-render: \u8BFB\u53D6 state \u7684\u503C &#39;\u5F20\u4E09&#39;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>studentName<span class="token punctuation">,</span> setStudentName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// \u9519\u8BEF\u4EE3\u7801================</span>
  <span class="token comment">// if(couseName){</span>
  <span class="token comment">// const [studentName, setStudentName] = useState(&#39;\u5F20\u4E09&#39;)</span>
  <span class="token comment">// }</span>
  <span class="token comment">// \u9519\u8BEF\u4EE3\u7801 end================</span>

  <span class="token comment">// render: \u521D\u59CB\u5316 state \u7684\u503C &#39;lzw&#39;</span>
  <span class="token comment">// re-render: \u8BFB\u53D6 state \u7684\u503C &#39;lzw&#39;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>teacherName<span class="token punctuation">,</span> setTeacherName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;lzw&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// \u9519\u8BEF\u4EE3\u7801================</span>
  <span class="token comment">// if(couseName){</span>
  <span class="token comment">//   const [studentName, setStudentName] = useState(&#39;\u5F20\u4E09&#39;)</span>
  <span class="token comment">//   const [teacherName, setTeacherName] = useState(&#39;lzw&#39;)</span>
  <span class="token comment">// }</span>

  <span class="token comment">// if(couseName){</span>
  <span class="token comment">//   useEffect(() =&gt; {</span>
  <span class="token comment">//     // \u6A21\u62DF\u5B66\u751F\u7B7E\u5230</span>
  <span class="token comment">//     localStorage.setItem(&#39;name&#39;, studentName)</span>
  <span class="token comment">//   })</span>
  <span class="token comment">// }</span>
  <span class="token comment">// \u9519\u8BEF\u4EE3\u7801 end================</span>

  <span class="token comment">// render: \u6DFB\u52A0 effect \u51FD\u6570</span>
  <span class="token comment">// re-render: \u66FF\u6362 effect \u51FD\u6570\uFF08\u5185\u90E8\u7684\u51FD\u6570\u4E5F\u4F1A\u91CD\u65B0\u5B9A\u4E49\uFF09</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6A21\u62DF\u5B66\u751F\u7B7E\u5230</span>
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> studentName<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// render: \u6DFB\u52A0 effect \u51FD\u6570</span>
  <span class="token comment">// re-render: \u66FF\u6362 effect \u51FD\u6570\uFF08\u5185\u90E8\u7684\u51FD\u6570\u4E5F\u4F1A\u91CD\u65B0\u5B9A\u4E49\uFF09</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5F00\u59CB\u4E0A\u8BFE</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>teacherName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> \u5F00\u59CB\u4E0A\u8BFE\uFF0C\u5B66\u751F </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>studentName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    \u8BFE\u7A0B\uFF1A<span class="token punctuation">{</span>couseName<span class="token punctuation">}</span>\uFF0C
    \u8BB2\u5E08\uFF1A<span class="token punctuation">{</span>teacherName<span class="token punctuation">}</span>\uFF0C
    \u5B66\u751F\uFF1A<span class="token punctuation">{</span>studentName<span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> TeachDemo
</code></pre></div><p>\u6D4B\u8BD5\u4EE3\u7801</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>TeachDemo couseName<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;\u524D\u7AEF\u8BFE\u7A0B&#39;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>TeachDemo<span class="token operator">&gt;</span>
</code></pre></div>`,15);function p(o,e){return t}var l=s(a,[["render",p]]);export{l as default};
