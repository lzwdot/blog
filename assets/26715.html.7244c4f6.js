import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u624B\u5199\u6DF1\u62F7\u8D1D-\u6CE8\u610F-object-assign-\u4E0D\u662F\u6DF1\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u624B\u5199\u6DF1\u62F7\u8D1D-\u6CE8\u610F-object-assign-\u4E0D\u662F\u6DF1\u62F7\u8D1D" aria-hidden="true">#</a> \u624B\u5199\u6DF1\u62F7\u8D1D\uFF0C\u6CE8\u610F Object.assign \u4E0D\u662F\u6DF1\u62F7\u8D1D</h1><p>\u6DF1\u62F7\u8D1D\u51FD\u6570</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token parameter">obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4E00\u822C\u62F7\u8D1D\u7684\u662F\u5BF9\u8C61\u6216\u8005\u6570\u7EC4</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">&#39;array&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> obj
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> res
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&#39;array&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5224\u65AD\u662F\u5426\u5C5E\u4E8E\u81EA\u5DF1\u7684\u5C5E\u6027\uFF0C\u4E0D\u662F\u539F\u578B\u7684</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">20</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">deepClone</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// {a: 1, b: 2, c: {\u2026}}</span>
<span class="token comment">// a: 1</span>
<span class="token comment">// b: 2</span>
<span class="token comment">// c:</span>
<span class="token comment">// x: 10</span>
<span class="token comment">// y:</span>
<span class="token comment">// z: 20</span>
<span class="token comment">// __proto__: Object</span>
<span class="token comment">// __proto__: Object</span>
<span class="token comment">// __proto__: Object</span>
</code></pre></div><p>\u6D4B\u8BD5 Object.assign \u4E0D\u662F\u6DF1\u62F7\u8D1D</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">20</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> obj1<span class="token punctuation">)</span>
obj1<span class="token punctuation">.</span>c<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">30</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">.</span>c<span class="token punctuation">.</span>x<span class="token punctuation">)</span> <span class="token comment">// 30</span>
</code></pre></div>`,5);function t(o,e){return p}var r=s(a,[["render",t]]);export{r as default};
