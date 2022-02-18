import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u4ECB\u7ECD\u4E00\u4E0B-raf-requestanimationframe" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD\u4E00\u4E0B-raf-requestanimationframe" aria-hidden="true">#</a> \u4ECB\u7ECD\u4E00\u4E0B RAF\uFF08requestAnimationFrame\uFF09</h1><p>requestAnimationFrame</p><ul><li>\u60F3\u8981\u52A8\u753B\u6D41\u7545\uFF0C\u66F4\u65B0\u9891\u7387\u8981 60\u5E27/s\uFF0C\u5373 16.67ms \u66F4\u65B0\u4E00\u6B21\u89C6\u56FE</li><li>setTimeout \u8981\u624B\u52A8\u63A7\u5236\u9891\u7387\uFF0C\u800C RAF \u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u63A7\u5236</li><li>\u540E\u53F0\u6807\u7B7E\u6216\u9690\u85CF iframe \u4E2D\uFF0CRAF \u4F1A\u6682\u505C\uFF0C\u800C setTimeout \u4F9D\u7136\u6267\u884C</li></ul><p>\u6709\u8FD9\u6837\u4E00\u4E2A\u9700\u6C42\uFF1A</p><ul><li>3s \u628A\u5BBD\u5EA6\u4ECE 100px \u53D8\u6210 640px\uFF0C\u5373\u589E\u52A0 540px</li><li>60\u5E27/s\uFF0C3s 180 \u5E27\uFF0C\u6BCF\u5E27\u53D8\u5316 540/180=3px</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
   #div<span class="token punctuation">{</span>
       <span class="token literal-property property">width</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
       <span class="token literal-property property">height</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
       background<span class="token operator">-</span>color<span class="token operator">:</span> red<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;div&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre></div><p>\u4F7F\u7528 setTimeout \u548C RAF \u7684\u5B9E\u73B0\u65B9\u5F0F</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> curWidth <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">const</span> maxWidth <span class="token operator">=</span> <span class="token number">640</span>
<span class="token comment">// setTimeout</span>
<span class="token keyword">function</span> <span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    curWidth <span class="token operator">=</span> curWidth <span class="token operator">+</span> <span class="token number">3</span>
    div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> curWidth <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>curWidth <span class="token operator">&lt;</span> maxWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u624B\u52A8\u63A7\u5236\u65F6\u95F4\uFF0C\u5982\u679C\u6BCF\u6B21\u589E\u52A0 1px\uFF0C\u5219\u9700\u8981\u65F6\u95F4 16.7/3</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span>animate<span class="token punctuation">,</span> <span class="token number">16.7</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// RAF</span>
<span class="token keyword">function</span> <span class="token function">animateRAF</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    curWidth <span class="token operator">=</span> curWidth <span class="token operator">+</span> <span class="token number">3</span>
    div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> curWidth <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>curWidth <span class="token operator">&lt;</span> maxWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6D4F\u89C8\u5668\u81EA\u52A8\u63A7\u5236</span>
        window<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>animateRAF<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">animateRAF</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,8);function p(o,e){return t}var r=s(a,[["render",p]]);export{r as default};
