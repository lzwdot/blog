import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u624B\u5199\u7B80\u6613-jquery-\u8003\u8651\u63D2\u4EF6\u548C\u6269\u5C55\u6027" tabindex="-1"><a class="header-anchor" href="#\u624B\u5199\u7B80\u6613-jquery-\u8003\u8651\u63D2\u4EF6\u548C\u6269\u5C55\u6027" aria-hidden="true">#</a> \u624B\u5199\u7B80\u6613 jQuery \u8003\u8651\u63D2\u4EF6\u548C\u6269\u5C55\u6027</h1><p>\u9996\u5148\u51C6\u5907\u4E00\u4E2A\u57FA\u672C\u7684 dom</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u6587\u5B57<span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u6587\u5B57<span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u6587\u5B57<span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
</code></pre></div><p>\u5927\u795E\u624B\u5199\u7B80\u6613 jQuery</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//\u57FA\u672C\u7684\u64CD\u4F5C</span>
<span class="token keyword">class</span> <span class="token class-name">jQuery</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">selector</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> result <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span>
        <span class="token keyword">const</span> length <span class="token operator">=</span> result<span class="token punctuation">.</span>length
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> result<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">=</span> length
    <span class="token punctuation">}</span>
    <span class="token function">get</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">[</span>index<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token function">each</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> elem <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token function">fn</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">on</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token parameter">elem</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            elem<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> fn<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53EF\u4EE5\u8FD9\u6837\u6765\u8FD0\u884C</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> $p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">jQuery</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>$p<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">//&lt;p&gt;\u200B\u6587\u5B572\u200B&lt;/p&gt;\u200B</span>
$p<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;clicked&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// clicked</span>
</code></pre></div><p>\u4E0B\u9762\u6765\u8003\u8651\u4E0B\u63D2\u4EF6\u548C\u6269\u5C55\u6027\uFF0C\u90A3\u5C31\u53EF\u4EE5\u8FD9\u6837\u5199\u5B8C\u4E8B</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//\u63D2\u4EF6</span>
jQuery<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">dialog</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">info</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
$p<span class="token punctuation">.</span><span class="token function">dialog</span><span class="token punctuation">(</span><span class="token string">&#39;info&#39;</span><span class="token punctuation">)</span> <span class="token comment">// info</span>
<span class="token comment">//\u6269\u5C55\u2018\u9020\u8F6E\u5B50\u2019</span>
<span class="token keyword">class</span> <span class="token class-name">myJQuery</span> <span class="token keyword">extends</span> <span class="token class-name">jQuery</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">selector</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u6269\u5C55\u81EA\u5DF1\u65B9\u6CD5</span>
    <span class="token function">addClass</span><span class="token punctuation">(</span><span class="token parameter">className</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token function">style</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,9);function t(o,e){return p}var u=s(a,[["render",t]]);export{u as default};
