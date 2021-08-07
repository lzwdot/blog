<template><h1 id="antv-g2-入门示例" tabindex="-1"><a class="header-anchor" href="#antv-g2-入门示例" aria-hidden="true">#</a> antv-g2 入门示例</h1>
<HtmlDemo>   
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 引入在线资源 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"g2-chart"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"//cdn.staticfile.org/g2plot/0.11.41/g2plot.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> year<span class="token operator">:</span> <span class="token string">'1951'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">38</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> year<span class="token operator">:</span> <span class="token string">'1952'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">52</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> year<span class="token operator">:</span> <span class="token string">'1956'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">61</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> year<span class="token operator">:</span> <span class="token string">'1957'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">145</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> year<span class="token operator">:</span> <span class="token string">'1958'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">48</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> year<span class="token operator">:</span> <span class="token string">'1959'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">38</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> year<span class="token operator">:</span> <span class="token string">'1960'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">38</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> year<span class="token operator">:</span> <span class="token string">'1962'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">38</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> chartDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'g2-chart'</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> line <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">G2Plot<span class="token punctuation">.</span>Line</span><span class="token punctuation">(</span>chartDom<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token punctuation">{</span>
            visible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            text<span class="token operator">:</span> <span class="token string">'g2折线图示例'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        description<span class="token operator">:</span> <span class="token punctuation">{</span>
            visible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            text<span class="token operator">:</span> <span class="token string">'副标题示例'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token punctuation">,</span>
        xField<span class="token operator">:</span> <span class="token string">'year'</span><span class="token punctuation">,</span>
        yField<span class="token operator">:</span> <span class="token string">'value'</span><span class="token punctuation">,</span>
        point<span class="token operator">:</span> <span class="token punctuation">{</span>
            visible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            size<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
            style<span class="token operator">:</span> <span class="token punctuation">{</span>
                stroke<span class="token operator">:</span> <span class="token string">'#fe740'</span><span class="token punctuation">,</span>
                lineWidth<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                fillOpacity<span class="token operator">:</span> <span class="token number">0.6</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">{</span>
            visible<span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        color<span class="token operator">:</span> <span class="token string">'#f2740c'</span><span class="token punctuation">,</span>
        yAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>v<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">k</span><span class="token template-punctuation string">`</span></span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    line<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div></HtmlDemo>    </template>
