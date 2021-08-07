<template><h1 id="zrender-示例" tabindex="-1"><a class="header-anchor" href="#zrender-示例" aria-hidden="true">#</a> zrender 示例</h1>
<HtmlDemo>   
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"container"</span> style<span class="token operator">=</span><span class="token string">"width: 500px;height: 400px;"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"//cdn.staticfile.org/zrender/5.1.1/zrender.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">const</span> zr <span class="token operator">=</span> zrender<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'container'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// 矩形</span>
    <span class="token keyword">const</span> rect <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">zrender<span class="token punctuation">.</span>Rect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        shape<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 形状</span>
            x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            y<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            width<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
            height<span class="token operator">:</span> <span class="token number">50</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        style<span class="token operator">:</span> <span class="token punctuation">{</span>
            fill<span class="token operator">:</span> <span class="token string">'red'</span><span class="token punctuation">,</span> <span class="token comment">// 填充</span>
            lineWidth<span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 线段</span>
    <span class="token keyword">const</span> line <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">zrender<span class="token punctuation">.</span>Polyline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        shape<span class="token operator">:</span> <span class="token punctuation">{</span>
            points<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">[</span><span class="token number">250</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">[</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        style<span class="token operator">:</span> <span class="token punctuation">{</span>
            stroke<span class="token operator">:</span> <span class="token string">'blue'</span><span class="token punctuation">,</span> <span class="token comment">// 边框线</span>
            lineWidth<span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token comment">// 圆</span>
        <span class="token keyword">const</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">zrender<span class="token punctuation">.</span>Circle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        shape<span class="token operator">:</span> <span class="token punctuation">{</span>
            cx<span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span>
            cy<span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span>
            r<span class="token operator">:</span><span class="token number">50</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        style<span class="token operator">:</span> <span class="token punctuation">{</span>
            stroke<span class="token operator">:</span> <span class="token string">'blue'</span><span class="token punctuation">,</span> <span class="token comment">// 边框线</span>
            fill<span class="token operator">:</span><span class="token string">'red'</span><span class="token punctuation">,</span>
            lineWidth<span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 点</span>
    <span class="token keyword">const</span> point <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">zrender<span class="token punctuation">.</span>Polyline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        shape<span class="token operator">:</span> <span class="token punctuation">{</span>
            points<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">[</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                  
                <span class="token punctuation">[</span><span class="token number">301</span><span class="token punctuation">,</span> <span class="token number">301</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        style<span class="token operator">:</span> <span class="token punctuation">{</span>
            stroke<span class="token operator">:</span> <span class="token string">'blue'</span><span class="token punctuation">,</span> <span class="token comment">// 边框线</span>
            lineWidth<span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    zr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>rect<span class="token punctuation">)</span>
    zr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span>
    zr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span>
    zr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>point<span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div></HtmlDemo>    
</template>
