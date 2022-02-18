import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u7B80\u5355\u7684js\u5012\u8BA1\u65F6\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u7684js\u5012\u8BA1\u65F6\u51FD\u6570" aria-hidden="true">#</a> \u7B80\u5355\u7684js\u5012\u8BA1\u65F6\u51FD\u6570</h1><blockquote><p>\u9700\u8981\u5F15\u5165jQuery</p></blockquote><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">/</span>
<span class="token operator">*</span> \u5012\u8BA1\u65F6
<span class="token operator">*</span>@param el
<span class="token operator">*</span>@param time
<span class="token operator">*</span><span class="token operator">/</span>
<span class="token keyword">function</span> <span class="token function">smsTimeOut</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> time <span class="token operator">=</span> time <span class="token operator">||</span> <span class="token number">60</span><span class="token punctuation">;</span>
    window<span class="token punctuation">.</span>localTimer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">smsTimeOut</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>localTime <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> window<span class="token punctuation">.</span>localTime <span class="token operator">=</span> time<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>localTime <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">$</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">&#39;disabled&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>localTime <span class="token operator">+</span> <span class="token string">&#39;\u79D2\u540E\u83B7\u53D6&#39;</span><span class="token punctuation">)</span>
        window<span class="token punctuation">.</span>localTime<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>localTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        window<span class="token punctuation">.</span>localTime <span class="token operator">=</span> time<span class="token punctuation">;</span>
        <span class="token function">$</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">&#39;disabled&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">&#39; \u83B7\u53D6\u9A8C\u8BC1\u7801&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3);function t(o,c){return p}var l=s(a,[["render",t]]);export{l as default};
