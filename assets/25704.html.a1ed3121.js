import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u624B\u5199-bind-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u624B\u5199-bind-\u51FD\u6570" aria-hidden="true">#</a> \u624B\u5199 bind \u51FD\u6570</h1><p>\u9996\u5148\u6765\u770B\u770B bind \u51FD\u6570\u4F7F\u7528</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// bind \u7684\u4F7F\u7528</span>
<span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">//this {x: 100}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span> <span class="token comment">// 10 20 30</span>
    <span class="token keyword">return</span> <span class="token string">&#39;this is fn1&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> fn2 <span class="token operator">=</span> <span class="token function">fn1</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token comment">//this is fn1</span>
</code></pre></div><p>\u7136\u540E\u901A\u8FC7 Function.prototype \u6A21\u62DF bind1 \u51FD\u6570</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u624B\u5199 bind</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">bind1</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u53C2\u6570\u62C6\u89E3\u4E3A\u6570\u7EC4</span>
    <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
    <span class="token comment">//\u83B7\u53D6 this\uFF08\u6570\u7EC4\u7B2C\u4E00\u9879\uFF09</span>
    <span class="token keyword">const</span> t <span class="token operator">=</span> args<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">//fn1.bind(...) \u4E2D\u7684fn1</span>
    <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token comment">//\u8FD4\u56DE\u51FD\u6570</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">self</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> fn3 <span class="token operator">=</span> fn1<span class="token punctuation">.</span><span class="token function">bind1</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> res2 <span class="token operator">=</span> <span class="token function">fn3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//this {x: 100}  10 20 30</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res2<span class="token punctuation">)</span> <span class="token comment">//this is fn1</span>
</code></pre></div><p>\u66F4\u7B80\u6D01\u7684\u5199\u6CD5</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_bind</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    obj<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> newArgs <span class="token operator">=</span> args<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> ret <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>newArgs<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">delete</span> obj<span class="token punctuation">.</span>fn<span class="token punctuation">;</span>
        <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,7);function t(o,c){return p}var l=s(a,[["render",t]]);export{l as default};
