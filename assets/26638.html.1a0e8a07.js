import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="new-object-\u548C-object-create-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#new-object-\u548C-object-create-\u7684\u533A\u522B" aria-hidden="true">#</a> new Object() \u548C Object.create \u7684\u533A\u522B</h1><p>\u533A\u522B</p><ul><li>{} \u7B49\u540C\u4E8E new Object()\uFF0C\u539F\u578B\u90FD\u662F Object.prototype</li><li>Object.create(null) \u6CA1\u6709\u539F\u578B</li><li>Object.create({...}) \u53EF\u6307\u5B9A\u539F\u578B</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>b
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>b
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> obj3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token operator">===</span>obj2<span class="token punctuation">)</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token operator">===</span>obj3<span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token keyword">const</span> obj4 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// {} \u6CA1\u6709\u539F\u578B</span>
<span class="token keyword">const</span> obj5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// {} \u6709\u539F\u578B</span>
<span class="token comment">// obj6 \u7684 __proto__ \u539F\u578B\u5C31\u662F</span>
<span class="token comment">// {</span>
<span class="token comment">//     a: 10,</span>
<span class="token comment">//     b: 20,</span>
<span class="token comment">//     sum() {</span>
<span class="token comment">//         return this.a + this.b</span>
<span class="token comment">//     }</span>
<span class="token comment">// }</span>
<span class="token keyword">const</span> obj6 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>b
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// obj7 \u7684 __proto__ \u539F\u578B\u5C31\u662F obj1</span>
<span class="token keyword">const</span> obj7 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj7<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> obj1<span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj7 <span class="token operator">===</span> obj1<span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre></div>`,4);function t(o,e){return p}var k=s(a,[["render",t]]);export{k as default};
