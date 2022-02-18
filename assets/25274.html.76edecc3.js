import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u624B\u5199-js-\u6DF1\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u624B\u5199-js-\u6DF1\u62F7\u8D1D" aria-hidden="true">#</a> \u624B\u5199 JS \u6DF1\u62F7\u8D1D</h1><p>\u6D45\u62F7\u8D1D\u548C\u6DF1\u62F7\u8D1D</p><ul><li>\u6D45\u62F7\u8D1D\uFF0Cobj1 = obj2\uFF0C\u6539\u53D8 obj2 \u7684\u503C\u65F6\uFF0Cobj1 \u968F\u4E4B\u6539\u53D8</li><li>\u6DF1\u62F7\u8D1D\uFF0Cobj1 = deepClone(obj2) \uFF0C\u6539\u53D8 obj2 \u7684\u503C\u65F6\uFF0Cobj1 \u4E0D\u4F1A\u6539\u53D8</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">&#39;beijing&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">arr</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6DF1\u62F7\u8D1D\u51FD\u6570</p><ul><li>\u6CE8\u610F\u5224\u65AD\u503C\u7C7B\u578B\u548C\u5F15\u7528\u7C7B\u578B</li><li>\u6CE8\u610F\u5224\u65AD\u662F\u6570\u7EC4\u8FD8\u662F\u5BF9\u8C61</li><li>\u9012\u5F52</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * \u6DF1\u62F7\u8D1D
 * <span class="token keyword">@param</span> <span class="token parameter">obj</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token parameter">obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!=</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> obj <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4E0D\u662F\u5BF9\u8C61\u6216\u8005null\uFF0C\u76F4\u63A5\u8FD4\u56DE</span>
        <span class="token keyword">return</span> obj
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> result
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4FDD\u8BC1 key \u662F\u81EA\u8EAB\u5C5E\u6027\u800C\u4E0D\u662F\u539F\u578B\u7684\u5C5E\u6027</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//\u9012\u5F52\u62F7\u8D1D</span>
            result<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>\u6DF1\u62F7\u8D1D\u901A\u8FC7 JSON \u5BF9\u8C61\u7684 parse \u548C stringify</p></blockquote><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> _obj <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">,</span>
        objClone <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>_obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> objClone
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E24\u79CD\u62F7\u8D1D\u7684\u533A\u522B</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>
obj2<span class="token punctuation">.</span>address<span class="token punctuation">.</span>city <span class="token operator">=</span> <span class="token string">&#39;shanghai&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>address<span class="token punctuation">.</span>city<span class="token punctuation">)</span> <span class="token comment">//beijing</span>
<span class="token keyword">const</span> obj3 <span class="token operator">=</span> obj1
obj3<span class="token punctuation">.</span>address<span class="token punctuation">.</span>city <span class="token operator">=</span> <span class="token string">&#39;shenzhen&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>address<span class="token punctuation">.</span>city<span class="token punctuation">)</span><span class="token comment">//shenzhen</span>
</code></pre></div>`,11);function t(o,e){return p}var u=s(a,[["render",t]]);export{u as default};
