import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="this-\u6709\u51E0\u79CD\u8D4B\u503C\u60C5\u51B5-\u5982\u4F55\u53D6\u503C" tabindex="-1"><a class="header-anchor" href="#this-\u6709\u51E0\u79CD\u8D4B\u503C\u60C5\u51B5-\u5982\u4F55\u53D6\u503C" aria-hidden="true">#</a> this \u6709\u51E0\u79CD\u8D4B\u503C\u60C5\u51B5\uFF0C\u5982\u4F55\u53D6\u503C\uFF1F</h1><blockquote><p>this \u53D6\u503C\u662F\u5728\u51FD\u6570\u6267\u884C\u65F6\u786E\u5B9A\u7684\uFF0C\u4E0D\u662F\u5728\u5B9A\u4E49\u65F6</p></blockquote><p>this \u6709\u51E0\u79CD\u8D4B\u503C\u60C5\u51B5</p><ul><li>\u4F5C\u4E3A\u666E\u901A\u51FD\u6570</li><li>\u4F7F\u7528 call apply bind</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// window</span>
<span class="token function">fn1</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// {x: 100}</span>
<span class="token function">fn1</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// {x: 200}</span>
<span class="token keyword">const</span> fn2 <span class="token operator">=</span> <span class="token function">fn1</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// {x: 300}</span>
</code></pre></div><ul><li>\u4F5C\u4E3A\u5BF9\u8C61\u65B9\u6CD5\u88AB\u8C03\u7528</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> zhangsan <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span>
    <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// this \u5373\u5F53\u524D\u5BF9\u8C61</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// this === window</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">waitAgain</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// this \u5373\u5F53\u524D\u5BF9\u8C61</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
zhangsan<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
zhangsan<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
zhangsan<span class="token punctuation">.</span><span class="token function">waitAgain</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><ul><li>\u5728 class \u65B9\u6CD5\u4E2D\u8C03\u7528</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
    <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> lisi <span class="token operator">=</span> <span class="token keyword">new</span>  <span class="token class-name">People</span><span class="token punctuation">(</span><span class="token string">&#39;\u674E\u56DB&#39;</span><span class="token punctuation">)</span>
lisi<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// lisi \u5BF9\u8C61</span>
</code></pre></div><ul><li>\u7BAD\u5934\u51FD\u6570</li></ul>`,10);function t(o,c){return p}var l=s(a,[["render",t]]);export{l as default};
