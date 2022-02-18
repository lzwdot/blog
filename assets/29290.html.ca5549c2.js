import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="react-\u8868\u5355\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#react-\u8868\u5355\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> React \u8868\u5355\u77E5\u8BC6\u70B9</h1><p>\u8868\u5355\u63A7\u4EF6\u7B49</p><ul><li>\u53D7\u63A7\u7EC4\u4EF6</li><li>input textarea select \u7528 value</li><li>checkbox radio \u7528 checked</li></ul><p><strong>\u975E\u53D7\u63A7\u7EC4\u4EF6</strong></p><blockquote><p>\u975E\u53D7\u63A7\u7EC4\u4EF6\uFF0C\u5373\u7EC4\u4EF6\u7684\u72B6\u6001\u4E0D\u53D7 React \u63A7\u5236\u7684\u7EC4\u4EF6</p></blockquote><p><strong>\u53D7\u63A7\u7EC4\u4EF6</strong></p><blockquote><p>\u540C\u6837\u7684\uFF0C\u53D7\u63A7\u7EC4\u4EF6\u5C31\u662F\u7EC4\u4EF6\u7684\u72B6\u6001\u53D7 React \u63A7\u5236\u3002\u4E0A\u9762\u63D0\u5230\u8FC7\uFF0C\u65E2\u7136\u901A\u8FC7\u8BBE\u7F6E input \u7684 value \u5C5E\u6027, \u65E0\u6CD5\u6539\u53D8\u8F93\u5165\u6846\u503C,\u90A3\u4E48\u6211\u4EEC\u628A\u5B83\u548C state \u7ED3\u5408\u5728\u4E00\u8D77,\u518D\u7ED1\u5B9A onChange \u4E8B\u4EF6,\u5B9E\u65F6\u66F4\u65B0 value \u503C\u5C31\u884C\u4E86\u3002</p></blockquote><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">FormDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lzw.&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token string">&#39;\u4E2A\u4EBA\u4FE1\u606F&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">&#39;changsha&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">flag</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&#39;male&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53D7\u63A7\u7EC4\u4EF6\uFF0C\u7C7B\u4F3C v-model\uFF08state.name \u53D7\u5230 input \u4E8B\u4EF6\u63A7\u5236\u6539\u53D8\u503C\uFF09</span>
    <span class="token comment">// return &lt;div&gt;</span>
    <span class="token comment">//   &lt;p&gt;{this.state.name}&lt;/p&gt;</span>
    <span class="token comment">//   {/*\u7528 htmlFor \u4EE3\u66FF for*/}</span>
    <span class="token comment">//   &lt;label htmlFor=&quot;inputName&quot;&gt;\u59D3\u540D\uFF1A&lt;/label&gt;</span>
    <span class="token comment">//   &lt;input id=&quot;inputName&quot; value={this.state.name} onChange={this.onInputChange}/&gt;</span>
    <span class="token comment">// &lt;/div&gt;</span>

    <span class="token comment">// textarea - \u4F7F\u7528 value</span>
    <span class="token comment">// return &lt;div&gt;</span>
    <span class="token comment">//   &lt;textarea value={this.state.info} onChange={this.onTextareaChange}&gt;&lt;/textarea&gt;</span>
    <span class="token comment">//   &lt;p&gt;{this.state.info}&lt;/p&gt;</span>
    <span class="token comment">// &lt;/div&gt;</span>

    <span class="token comment">// select - \u4F7F\u7528 value</span>
    <span class="token comment">// return &lt;div&gt;</span>
    <span class="token comment">//   &lt;select value={this.state.city} onChange={this.onSelectChange}&gt;</span>
    <span class="token comment">//     &lt;option value=&quot;beijing&quot;&gt;\u5317\u4EAC&lt;/option&gt;</span>
    <span class="token comment">//     &lt;option value=&quot;shanghai&quot;&gt;\u4E0A\u6D77&lt;/option&gt;</span>
    <span class="token comment">//     &lt;option value=&quot;shenzhen&quot;&gt;\u6DF1\u5733&lt;/option&gt;</span>
    <span class="token comment">//   &lt;/select&gt;</span>
    <span class="token comment">//   &lt;p&gt;{this.state.city}&lt;/p&gt;</span>
    <span class="token comment">// &lt;/div&gt;</span>

    <span class="token comment">// checkbox</span>
    <span class="token comment">// return &lt;div&gt;</span>
    <span class="token comment">//   &lt;input type=&quot;checkbox&quot; checked={this.state.flag} onChange={this.onCheckboxChange}/&gt;</span>
    <span class="token comment">//   &lt;p&gt;{this.state.flag.toString()}&lt;/p&gt;</span>
    <span class="token comment">// &lt;/div&gt;</span>

    <span class="token comment">// radio</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;radio&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;male&quot;</span> checked<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>gender <span class="token operator">===</span> <span class="token string">&#39;male&#39;</span><span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onRadioChange<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;radio&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;female&quot;</span> checked<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>gender <span class="token operator">===</span> <span class="token string">&#39;female&#39;</span><span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onRadioChange<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>gender<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">onInputChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">onTextareaChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">info</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">onSelectChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">city</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function-variable function">onCheckboxChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">flag</span><span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>flag
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">onRadioChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">gender</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> FormDemo
</code></pre></div>`,8);function p(o,e){return t}var u=s(a,[["render",p]]);export{u as default};
