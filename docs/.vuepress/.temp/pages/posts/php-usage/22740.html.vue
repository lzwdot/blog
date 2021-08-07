<template><h1 id="wordpress主题如何去掉google字体" tabindex="-1"><a class="header-anchor" href="#wordpress主题如何去掉google字体" aria-hidden="true">#</a> WordPress主题如何去掉Google字体</h1>
<p>在国内Google字体会是WordPress网站加载很慢，那么该如何移除Google字体？这里以WordPress自动主题twentyfourteen为例</p>
<h4 id="查找google字体" tabindex="-1"><a class="header-anchor" href="#查找google字体" aria-hidden="true">#</a> 查找Google字体</h4>
<p>首先在functions.php文件搜索google，可以发现下面一段代码中包含Google字体</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Register Lato Google font for Twenty Fourteen.
 *
 * <span class="token keyword">@since</span> Twenty Fourteen 1.0
 *
 * <span class="token keyword">@return</span> string
 */</span>
<span class="token keyword">function</span> <span class="token function">twentyfourteen_font_url</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    $font_url <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token comment">/*
     * Translators: If there are characters in your language that are not supported
     * by Lato, translate this to 'off'. Do not translate into your own language.
     */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token string">'off'</span> <span class="token operator">!==</span> <span class="token function">_x</span><span class="token punctuation">(</span> <span class="token string">'on'</span><span class="token punctuation">,</span> <span class="token string">'Lato font: on or off'</span><span class="token punctuation">,</span> <span class="token string">'twentyfourteen'</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        $query_args <span class="token operator">=</span> <span class="token function">array</span><span class="token punctuation">(</span>
            <span class="token string">'family'</span> <span class="token operator">=></span> <span class="token function">urlencode</span><span class="token punctuation">(</span> <span class="token string">'Lato:300,400,700,900,300italic,400italic,700italic'</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string">'subset'</span> <span class="token operator">=></span> <span class="token function">urlencode</span><span class="token punctuation">(</span> <span class="token string">'latin,latin-ext'</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        $font_url   <span class="token operator">=</span> <span class="token function">add_query_arg</span><span class="token punctuation">(</span> $query_args<span class="token punctuation">,</span> <span class="token string">'https://fonts.googleapis.com/css'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> $font_url<span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>然后继续查找twentyfourteen_font_url函数使用的地方</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// Add Lato font, used in the main stylesheet.</span>
<span class="token function">wp_enqueue_style</span><span class="token punctuation">(</span> <span class="token string">'twentyfourteen-lato'</span><span class="token punctuation">,</span> <span class="token function">twentyfourteen_font_url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">null</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p>可以看到使用twentyfourteen-lato把Google字体加入了队列。那么想要去掉Google字体，就需要取消这个队列</p>
<h4 id="移除google字体" tabindex="-1"><a class="header-anchor" href="#移除google字体" aria-hidden="true">#</a> 移除Google字体</h4>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// Remove Lato Font</span>
<span class="token keyword">function</span> <span class="token function">lato_dequeue_fonts</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">wp_dequeue_style</span><span class="token punctuation">(</span> <span class="token string">'twentyfourteen-lato'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">add_action</span><span class="token punctuation">(</span> <span class="token string">'wp_enqueue_scripts'</span><span class="token punctuation">,</span> <span class="token string">'lato_dequeue_fonts'</span><span class="token punctuation">,</span> <span class="token number">11</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p>通过取消字体队列，来去掉Google字体，就这么简单，快去尝试吧</p>
</template>
