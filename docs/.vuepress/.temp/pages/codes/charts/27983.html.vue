<template><h1 id="antv-g6-示例" tabindex="-1"><a class="header-anchor" href="#antv-g6-示例" aria-hidden="true">#</a> antv-g6 示例</h1>
<HtmlDemo>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"g6-chart"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"//gw.alipayobjects.com/os/lib/antv/g6/3.7.1/dist/g6.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
        nodes<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            id<span class="token operator">:</span> <span class="token string">'node1'</span><span class="token punctuation">,</span>  <span class="token comment">// 第一个点</span>
            x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
            y<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
            label<span class="token operator">:</span> <span class="token string">'起始点'</span><span class="token punctuation">,</span>
            size<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
            labelCfg<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 文字的配置</span>
                position<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span> <span class="token comment">// 文字的位置</span>
                style<span class="token operator">:</span> <span class="token punctuation">{</span>
                    fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
                    fill<span class="token operator">:</span> <span class="token string">'#fff'</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            style<span class="token operator">:</span> <span class="token punctuation">{</span>
                fill<span class="token operator">:</span> <span class="token string">'#f00'</span><span class="token punctuation">,</span> <span class="token comment">// 圆的填充色</span>
                stroke<span class="token operator">:</span> <span class="token string">'#888'</span><span class="token punctuation">,</span> <span class="token comment">// 边框颜色</span>
                lineWidth<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 边框宽度</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            id<span class="token operator">:</span> <span class="token string">'node2'</span><span class="token punctuation">,</span> <span class="token comment">// 第二个点</span>
            x<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
            y<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
            label<span class="token operator">:</span> <span class="token string">'目标点1'</span><span class="token punctuation">,</span>
            size<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            id<span class="token operator">:</span> <span class="token string">'node3'</span><span class="token punctuation">,</span> <span class="token comment">// 第三个点</span>
            x<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
            y<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
            label<span class="token operator">:</span> <span class="token string">'结束点'</span><span class="token punctuation">,</span>
            size<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 点集合</span>
        edges<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            source<span class="token operator">:</span> <span class="token string">'node1'</span><span class="token punctuation">,</span> <span class="token comment">// 对应 nodes 中的 id</span>
            target<span class="token operator">:</span> <span class="token string">'node2'</span><span class="token punctuation">,</span> <span class="token comment">// 对应 nodes 中的 id</span>
            label<span class="token operator">:</span> <span class="token string">'连线1'</span>           
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            source<span class="token operator">:</span> <span class="token string">'node2'</span><span class="token punctuation">,</span>
            target<span class="token operator">:</span> <span class="token string">'node3'</span><span class="token punctuation">,</span>
            label<span class="token operator">:</span> <span class="token string">'连线2'</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 边集合</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> graph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">G6<span class="token punctuation">.</span>Graph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        container<span class="token operator">:</span> <span class="token string">'g6-chart'</span><span class="token punctuation">,</span>
        width<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
        height<span class="token operator">:</span> <span class="token number">400</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 完成 G6 图的初始化</span>

    graph<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token comment">// 绑定数据源</span>
    graph<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 绘制矢量图 </span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div></HtmlDemo>
</template>
