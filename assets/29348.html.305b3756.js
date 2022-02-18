import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="react-\u51FD\u6570\u5F0F\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#react-\u51FD\u6570\u5F0F\u7F16\u7A0B" aria-hidden="true">#</a> React \u51FD\u6570\u5F0F\u7F16\u7A0B</h1><p>\u7279\u70B9</p><ul><li>\u4E00\u79CD\u7F16\u7A0B\u8303\u5F0F\uFF0C\u6982\u5FF5\u6BD4\u8F83\u591A</li><li>\u7EAF\u51FD\u6570</li><li>\u4E0D\u53EF\u53D8\u503C</li></ul><p>\u56DE\u987E\u4E0B SCU \u548C redux \u7684\u4E00\u4E9B\u4EE3\u7801</p><blockquote><p>\u7EAF\u51FD\u6570\u7684\u6700\u6700\u6838\u5FC3\uFF0C\u5C31\u662F\u4E0D\u53EF\u53D8\u503C</p></blockquote><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function-variable function">onSubmitTitle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">title</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">id-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      title
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// \u4E3A\u4E86\u6F14\u793A SCU\uFF0C\u6545\u610F\u5199\u9519</span>
  <span class="token comment">// this.state.list.push({</span>
  <span class="token comment">//   id: \`id-\${Date.now()}\`,</span>
  <span class="token comment">//   title</span>
  <span class="token comment">// })</span>
  <span class="token comment">// this.setState({</span>
  <span class="token comment">//   list: this.state.list</span>
  <span class="token comment">// })</span>
<span class="token punctuation">}</span>

<span class="token comment">//----------------</span>

<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A todo</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">addTodo</span> <span class="token operator">=</span> <span class="token parameter">text</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;ADD_TODO&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> nextTodoId<span class="token operator">++</span><span class="token punctuation">,</span>
    text
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6);function p(o,e){return t}var i=s(a,[["render",p]]);export{i as default};
