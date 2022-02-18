import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="react-\u975E\u53D7\u63A7\u7EC4\u4EF6-\u9AD8\u7EA7" tabindex="-1"><a class="header-anchor" href="#react-\u975E\u53D7\u63A7\u7EC4\u4EF6-\u9AD8\u7EA7" aria-hidden="true">#</a> React \u975E\u53D7\u63A7\u7EC4\u4EF6\uFF08\u9AD8\u7EA7\uFF09</h1><p>\u975E\u53D7\u63A7\u7EC4\u4EF6</p><ul><li>ref</li><li>defaultValue defaultChecked</li><li>\u624B\u52A8\u64CD\u4F5C DOM \u5143\u7D20</li></ul><p>\u4F7F\u7528\u573A\u666F</p><ul><li>\u5FC5\u987B\u624B\u52A8\u64CD\u4F5C DOM \u5143\u7D20\uFF0CsetState \u5B9E\u73B0\u4E0D\u4E86</li><li>\u5982\u6587\u4EF6\u4E0A\u4F20 <code>&lt;input type=file&gt;</code></li><li>\u67D0\u4E9B\u5BCC\u6587\u672C\u7F16\u8F91\u5668\uFF0C\u9700\u8981\u4F20\u5165 DOM \u5143\u7D20</li></ul><p>\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// class \u7EC4\u4EF6</span>
<span class="token keyword">class</span> <span class="token class-name">UncontrolleDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lzw&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">flag</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>nameInputRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u521B\u5EFA ref</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>fileInputRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u521B\u5EFA ref</span>
  <span class="token punctuation">}</span>


  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// input defaultValue</span>
    <span class="token comment">// return &lt;div&gt;</span>
    <span class="token comment">//   {/* \u4F7F\u7528 defaultValue \u800C\u4E0D\u662F value\uFF0C\u4F7F\u7528 ref */}</span>
    <span class="token comment">//   &lt;input defaultValue={this.state.name} ref={this.nameInputRef}/&gt;</span>
    <span class="token comment">//   {/*state \u5E76\u4F1A\u4E0D\u968F\u7740\u6539\u53D8*/}</span>
    <span class="token comment">//   &lt;span&gt;state.name:{this.state.name}&lt;/span&gt;</span>
    <span class="token comment">//   &lt;br/&gt;</span>
    <span class="token comment">//   &lt;button onClick={this.alertName}&gt;alert name&lt;/button&gt;</span>
    <span class="token comment">// &lt;/div&gt;</span>

    <span class="token comment">// checkbox defaultChecked</span>
    <span class="token comment">// return &lt;div&gt;</span>
    <span class="token comment">//   &lt;input type=&quot;checkbox&quot; defaultChecked={this.state.flag}/&gt;</span>
    <span class="token comment">//   &lt;span&gt;state.flag:{this.state.flag.toString()}&lt;/span&gt;</span>
    <span class="token comment">// &lt;/div&gt;</span>

    <span class="token comment">// file</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;file&quot;</span> ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>fileInputRef<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>alertFile<span class="token punctuation">}</span><span class="token operator">&gt;</span>alert file<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">alertName</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> elem <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nameInputRef<span class="token punctuation">.</span>current <span class="token comment">// \u901A\u8FC7 ref \u83B7\u53D6 DOM \u8282\u70B9</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>elem<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// \u4E0D\u662F this.state.value</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">alertFile</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> elem <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fileInputRef<span class="token punctuation">.</span>current  <span class="token comment">// \u901A\u8FC7 ref \u83B7\u53D6 DOM \u8282\u70B9</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>elem<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> UncontrolleDemo
</code></pre></div><p>\u53D7\u63A7\u7EC4\u4EF6 vs \u975E\u53D7\u63A7\u7EC4\u4EF6</p><ul><li>\u4F18\u5148\u4F7F\u7528\u53D7\u63A7\u7EC4\u4EF6\uFF0C\u7B26\u5408 React \u8BBE\u8BA1\u539F\u5219</li><li>\u5FC5\u987B\u64CD\u4F5C DOM \u65F6\uFF0C\u518D\u4F7F\u7528\u975E\u53D7\u63A7\u7EC4\u4EF6</li></ul>`,9);function p(e,o){return t}var u=s(a,[["render",p]]);export{u as default};
