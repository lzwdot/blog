<template><h1 id="css设置高度等于其宽度" tabindex="-1"><a class="header-anchor" href="#css设置高度等于其宽度" aria-hidden="true">#</a> css设置高度等于其宽度</h1>
<p>1、使用padding-bottom的百分比值是相对包含块的宽度的知识点 ，如：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>style type<span class="token operator">=</span><span class="token string">"text/css"</span><span class="token operator">></span>
#container <span class="token punctuation">{</span>
    width<span class="token operator">:</span> <span class="token number">80</span><span class="token operator">%</span><span class="token punctuation">;</span>
    height<span class="token operator">:</span> <span class="token number">500</span>px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>attr <span class="token punctuation">{</span>
    width<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
    height<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    padding<span class="token operator">-</span>bottom<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #<span class="token number">008</span>b57<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">'container'</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">'attr'</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre></div><p>2、或使用js方法</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#box1'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">'height'</span><span class="token punctuation">,</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#box1'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">'width'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>参考：<a href="https://segmentfault.com/q/1010000002629233" target="_blank" rel="noopener noreferrer">https://segmentfault.com/q/1010000002629233<OutboundLink/></a></p>
</template>
