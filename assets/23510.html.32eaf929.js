import{d as t,o as p,c as o,a as n,e,F as c,h as r,g as s}from"./app.4ca8afde.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const k={},u=r(`<h1 id="css\u8BBE\u7F6E\u9AD8\u5EA6\u7B49\u4E8E\u5176\u5BBD\u5EA6" tabindex="-1"><a class="header-anchor" href="#css\u8BBE\u7F6E\u9AD8\u5EA6\u7B49\u4E8E\u5176\u5BBD\u5EA6" aria-hidden="true">#</a> css\u8BBE\u7F6E\u9AD8\u5EA6\u7B49\u4E8E\u5176\u5BBD\u5EA6</h1><p>1\u3001\u4F7F\u7528padding-bottom\u7684\u767E\u5206\u6BD4\u503C\u662F\u76F8\u5BF9\u5305\u542B\u5757\u7684\u5BBD\u5EA6\u7684\u77E5\u8BC6\u70B9 \uFF0C\u5982\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>style type<span class="token operator">=</span><span class="token string">&quot;text/css&quot;</span><span class="token operator">&gt;</span>
#container <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">80</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 500px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>attr <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    padding<span class="token operator">-</span>bottom<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #008b57<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&#39;container&#39;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&#39;attr&#39;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre></div><p>2\u3001\u6216\u4F7F\u7528js\u65B9\u6CD5</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#box1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&#39;height&#39;</span><span class="token punctuation">,</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#box1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&#39;width&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,5),i=s("\u53C2\u8003\uFF1A"),d={href:"https://segmentfault.com/q/1010000002629233",target:"_blank",rel:"noopener noreferrer"},g=s("https://segmentfault.com/q/1010000002629233");function h(_,m){const a=t("ExternalLinkIcon");return p(),o(c,null,[u,n("p",null,[i,n("a",d,[g,e(a)])])],64)}var y=l(k,[["render",h]]);export{y as default};
