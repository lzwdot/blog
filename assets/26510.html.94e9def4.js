import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u624B\u5199\u6DF1\u5EA6\u6BD4\u8F83-isequal" tabindex="-1"><a class="header-anchor" href="#\u624B\u5199\u6DF1\u5EA6\u6BD4\u8F83-isequal" aria-hidden="true">#</a> \u624B\u5199\u6DF1\u5EA6\u6BD4\u8F83 isEqual</h1><p>\u624B\u5199\u6DF1\u5EA6\u6BD4\u8F83 isEqual\uFF0C\u5B9E\u73B0\u4E0B\u9762\u9700\u6C42</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5B9E\u73B0\u9700\u6C42</span>
<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">200</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">200</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> obj3 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">200</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">300</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1 <span class="token operator">===</span> obj2<span class="token punctuation">)</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isEqual</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span> obj2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isEqual</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span> obj3<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre></div><p>isEqual \u51FD\u6570</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5224\u65AD\u662F\u5426\u5BF9\u8C61\u6216\u6570\u7EC4</span>
<span class="token keyword">function</span> <span class="token function">isObject</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> obj1 <span class="token operator">!==</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5168\u76F8\u7B49\u5224\u65AD</span>
<span class="token keyword">function</span> <span class="token function">isEqual</span><span class="token punctuation">(</span><span class="token parameter">obj1<span class="token punctuation">,</span> obj2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isObject</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">isObject</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u503C\u7C7B\u578B\uFF08\u6CE8\u610F\uFF0C\u53C2\u4E0E equal \u7684\u4E00\u822C\u4E0D\u4F1A\u662F\u51FD\u6570\uFF09</span>
        <span class="token keyword">return</span> obj1 <span class="token operator">===</span> obj2
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj1 <span class="token operator">===</span> obj2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u4E24\u4E2A\u90FD\u662F\u5BF9\u8C61\u6216\u6570\u7EC4\uFF0C\u800C\u4E14\u4E0D\u76F8\u7B49</span>
    <span class="token comment">// 1\u3001\u5148\u53D6\u51FA obj1 \u548C obj2 \u7684 keys\uFF0C\u6BD4\u8F83\u4E2A\u6570</span>
    <span class="token keyword">const</span> obj1Keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>
    <span class="token keyword">const</span> obj2Keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj1Keys<span class="token punctuation">.</span>length <span class="token operator">!==</span> obj2Keys<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 2\u3001\u4EE5 obj1 \u4E3A\u57FA\u51C6\uFF0C\u548C obj2 \u4F9D\u6B21\u9012\u5F52\u6BD4\u8F83</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6BD4\u8F83\u5F53\u524D key \u7684 val \u2014\u2014 \u9012\u5F52\uFF01\uFF01</span>
        <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">isEqual</span><span class="token punctuation">(</span>obj1<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> obj2<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 3\u3001\u5168\u76F8\u7B49</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div>`,5);function t(o,e){return p}var k=s(a,[["render",t]]);export{k as default};
