<template><h1 id="float-布局" tabindex="-1"><a class="header-anchor" href="#float-布局" aria-hidden="true">#</a> float 布局</h1>
<p><strong>圣杯布局</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>style<span class="token operator">></span>
    #container <span class="token punctuation">{</span>
        padding<span class="token operator">-</span>left<span class="token operator">:</span> <span class="token number">200</span>px<span class="token punctuation">;</span>
        padding<span class="token operator">-</span>right<span class="token operator">:</span> <span class="token number">150</span>px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    #container <span class="token punctuation">.</span>column <span class="token punctuation">{</span>
        float<span class="token operator">:</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    #center <span class="token punctuation">{</span>
        width<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    #left <span class="token punctuation">{</span>
        width<span class="token operator">:</span> <span class="token number">200</span>px<span class="token punctuation">;</span>
        margin<span class="token operator">-</span>left<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
        position<span class="token operator">:</span> relative<span class="token punctuation">;</span>
        right<span class="token operator">:</span> <span class="token number">200</span>px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    #right <span class="token punctuation">{</span>
        width<span class="token operator">:</span> <span class="token number">150</span>px<span class="token punctuation">;</span>
        margin<span class="token operator">-</span>right<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">150</span>px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    #footer <span class="token punctuation">{</span>
        clear<span class="token operator">:</span> both<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"header"</span><span class="token operator">></span>header<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"center"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"column"</span><span class="token operator">></span>center<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"left"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"column"</span><span class="token operator">></span>left<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"right"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"column"</span><span class="token operator">></span>right<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"footer"</span><span class="token operator">></span>footer<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre></div><p><strong>双飞翼布局</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>style<span class="token operator">></span>
    #container <span class="token punctuation">{</span>
        width<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>column <span class="token punctuation">{</span>
        float<span class="token operator">:</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    #center <span class="token punctuation">{</span>
        margin<span class="token operator">-</span>left<span class="token operator">:</span> <span class="token number">200</span>px<span class="token punctuation">;</span>
        margin<span class="token operator">-</span>right<span class="token operator">:</span> <span class="token number">150</span>px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    #left <span class="token punctuation">{</span>
        width<span class="token operator">:</span> <span class="token number">200</span>px<span class="token punctuation">;</span>
        margin<span class="token operator">-</span>left<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    #right <span class="token punctuation">{</span>
        width<span class="token operator">:</span> <span class="token number">150</span>px<span class="token punctuation">;</span>
        margin<span class="token operator">-</span>left<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">150</span>px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    #footer <span class="token punctuation">{</span>
        clear<span class="token operator">:</span> both<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"header"</span><span class="token operator">></span>header<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"container"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"column"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"center"</span><span class="token operator">></span>center<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"left"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"column"</span><span class="token operator">></span>left<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"right"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"column"</span><span class="token operator">></span>right<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"footer"</span><span class="token operator">></span>footer<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>   
</code></pre></div><p>圣杯布局和双飞翼布局的技术总结</p>
<ul>
<li>使用 float 布局</li>
<li>两侧使用 margin 负值，以便和中间内容横向重叠</li>
<li>防止中间内容被两侧覆盖，一个用 padding 一个用 margin</li>
</ul>
<p><strong>手写 clearfix 代码</strong></p>
<p>css清理浮动</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>clearfix<span class="token operator">:</span>after<span class="token punctuation">{</span>
    content<span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">;</span>
    display<span class="token operator">:</span>table<span class="token punctuation">;</span>
    clear<span class="token operator">:</span>both
<span class="token punctuation">}</span>
</code></pre></div><p>兼容 ie 低版本</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>clearfix<span class="token punctuation">{</span>
    <span class="token operator">*</span>zoom<span class="token operator">:</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div></template>
