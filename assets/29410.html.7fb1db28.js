import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="class-\u7EC4\u4EF6\u5B58\u5728\u54EA\u4E9B\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#class-\u7EC4\u4EF6\u5B58\u5728\u54EA\u4E9B\u95EE\u9898" aria-hidden="true">#</a> class \u7EC4\u4EF6\u5B58\u5728\u54EA\u4E9B\u95EE\u9898</h1><p>\u8BA4\u8BC6 React Hooks</p><ul><li>\u56DE\u987E React \u51FD\u6570\u7EC4\u4EF6</li><li>state Hook</li><li>Effect Hook</li></ul><p><strong>React \u51FD\u6570\u7EC4\u4EF6</strong></p><ul><li>\u6CA1\u6709\u7EC4\u4EF6\u5B9E\u4F8B</li><li>\u6CA1\u6709\u751F\u547D\u5468\u671F</li><li>\u6CA1\u6709 state \u548C setState\uFF0C\u53EA\u80FD\u63A5\u6536 props</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// class \u7EC4\u4EF6</span>
<span class="token keyword">class</span> <span class="token class-name">ListDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>    
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
          <span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>           
            <span class="token keyword">return</span> <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">&gt;</span>
              index <span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token punctuation">;</span> title <span class="token punctuation">{</span>item<span class="token punctuation">.</span>title<span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u51FD\u6570\u7EC4\u4EF6</span>
<span class="token keyword">function</span> <span class="token function">List</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
    <span class="token punctuation">{</span>
      props<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>        
          <span class="token keyword">return</span> <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">&gt;</span>
            index <span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token punctuation">;</span> title <span class="token punctuation">{</span>item<span class="token punctuation">.</span>title<span class="token punctuation">}</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>class \u7EC4\u4EF6\u5B58\u5728\u54EA\u4E9B\u95EE\u9898</strong></p><ul><li>\u5927\u578B\u7EC4\u4EF6\u5F88\u96BE\u62C6\u5206\u548C\u91CD\u6784\uFF0C\u5F88\u96BE\u6D4B\u8BD5\uFF08\u5373 class \u4E0D\u6613\u62C6\u5206\uFF09</li><li>\u76F8\u540C\u4E1A\u52A1\u903B\u8F91\uFF0C\u5206\u6563\u5230\u5404\u4E2A\u65B9\u6CD5\u4E2D\uFF0C\u903B\u8F91\u6DF7\u4E71</li><li>\u590D\u7528\u903B\u8F91\u53D8\u7684\u590D\u6742\uFF0C\u5982 Mixins\u3001HOC\u3001Render Prop</li></ul><p><strong>React \u7EC4\u4EF6\u66F4\u6613\u7528\u51FD\u6570\u8868\u8FBE</strong></p><ul><li>React \u63D0\u5021\u51FD\u6570\u5F0F\u7F16\u7A0B\uFF0Cview=fn(props)</li><li>\u51FD\u6570\u66F4\u7075\u6D3B\uFF0C\u66F4\u6613\u62C6\u5206\uFF0C\u66F4\u6613\u6D4B\u8BD5</li><li>\u4F46\u51FD\u6570\u7EC4\u4EF6\u592A\u7B80\u5355\uFF0C\u9700\u8981\u589E\u52A0\u80FD\u529B - Hooks</li></ul>`,10);function p(o,e){return t}var u=s(a,[["render",p]]);export{u as default};
