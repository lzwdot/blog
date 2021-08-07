<template><h1 id="如何制作wordpress友情链接独立页面" tabindex="-1"><a class="header-anchor" href="#如何制作wordpress友情链接独立页面" aria-hidden="true">#</a> 如何制作wordpress友情链接独立页面</h1>
<p>如何制作wordpress友情链接独立页面？之前百度了很多次，看了不少文章，这里我也把制作的过程总结下：</p>
<h4 id="首先开启友情链接功能" tabindex="-1"><a class="header-anchor" href="#首先开启友情链接功能" aria-hidden="true">#</a> 首先开启友情链接功能</h4>
<p>在主题functions.php添加代码，开启链接功能</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 打开友情链接
 */</span>
<span class="token function">add_filter</span><span class="token punctuation">(</span><span class="token string">'pre_option_link_manager_enabled'</span><span class="token punctuation">,</span> <span class="token string">'__return_true'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><h4 id="添加友情链接页面" tabindex="-1"><a class="header-anchor" href="#添加友情链接页面" aria-hidden="true">#</a> 添加友情链接页面</h4>
<p>一般WordPress主题都会有一个默认页面page.php，这里我们需要做的就是复制page.php改名为page-links.php，这个就是我们的友情链接页面，修改模板名称：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
<span class="token comment">/*
Template Name: 友情链接
*/</span>
<span class="token operator">?</span><span class="token operator">></span> 
</code></pre></div><h4 id="输出链接内容" tabindex="-1"><a class="header-anchor" href="#输出链接内容" aria-hidden="true">#</a> 输出链接内容</h4>
<p>找到page-links.php中的 <strong>the_content()</strong> 代码，再下面添加输出链接的代码：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 友情链接 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"page-links"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">?</span>php
    <span class="token keyword">function</span> <span class="token function">get_the_link_items</span><span class="token punctuation">(</span><span class="token parameter">$id <span class="token operator">=</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        $bookmarks <span class="token operator">=</span> <span class="token function">get_bookmarks</span><span class="token punctuation">(</span><span class="token string">'orderby=date&amp;category='</span> <span class="token punctuation">.</span> $id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        $default_ico <span class="token operator">=</span> <span class="token string">'https://s.w.org/favicon.ico?2'</span><span class="token punctuation">;</span>
        $output <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">empty</span><span class="token punctuation">(</span>$bookmarks<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            $output <span class="token punctuation">.</span><span class="token operator">=</span> <span class="token string">'&lt;ul>'</span><span class="token punctuation">;</span>
            <span class="token function">foreach</span> <span class="token punctuation">(</span><span class="token parameter">$bookmarks <span class="token keyword">as</span> $bookmark</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                $output <span class="token punctuation">.</span><span class="token operator">=</span> <span class="token string">'&lt;li>&lt;img src="'</span> <span class="token punctuation">.</span> $bookmark<span class="token operator">-</span><span class="token operator">></span>link_url <span class="token punctuation">.</span> <span class="token string">'/favicon.ico" onerror="javascript:this.src='</span><span class="token string">' . $default_ico . '</span><span class="token string">'" />&lt;a href="'</span> <span class="token punctuation">.</span> $bookmark<span class="token operator">-</span><span class="token operator">></span>link_url <span class="token punctuation">.</span> <span class="token string">'" title="'</span> <span class="token punctuation">.</span> $bookmark<span class="token operator">-</span><span class="token operator">></span>link_description <span class="token punctuation">.</span> <span class="token string">'" target="_blank" >'</span> <span class="token punctuation">.</span> $bookmark<span class="token operator">-</span><span class="token operator">></span>link_name <span class="token punctuation">.</span> <span class="token string">'&lt;/a>&lt;/li>'</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            $output <span class="token punctuation">.</span><span class="token operator">=</span> <span class="token string">'&lt;/ul>&lt;div class="clear">&lt;/div>'</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> $output<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    $linkcats <span class="token operator">=</span> <span class="token function">get_terms</span><span class="token punctuation">(</span><span class="token string">'link_category'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">empty</span><span class="token punctuation">(</span>$linkcats<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">foreach</span> <span class="token punctuation">(</span><span class="token parameter">$linkcats <span class="token keyword">as</span> $linkcat</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            $result <span class="token punctuation">.</span><span class="token operator">=</span> <span class="token string">'&lt;h3>'</span> <span class="token punctuation">.</span> $linkcat<span class="token operator">-</span><span class="token operator">></span>name <span class="token punctuation">.</span> <span class="token string">'&lt;/h3>'</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>$linkcat<span class="token operator">-</span><span class="token operator">></span>description<span class="token punctuation">)</span> $result <span class="token punctuation">.</span><span class="token operator">=</span> <span class="token string">'&lt;blockquote>'</span> <span class="token punctuation">.</span> $linkcat<span class="token operator">-</span><span class="token operator">></span>description <span class="token punctuation">.</span> <span class="token string">'&lt;/blockquote>'</span><span class="token punctuation">;</span>
            $result <span class="token punctuation">.</span><span class="token operator">=</span> <span class="token function">get_the_link_items</span><span class="token punctuation">(</span>$linkcat<span class="token operator">-</span><span class="token operator">></span>term_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        $result <span class="token operator">=</span> <span class="token function">get_the_link_items</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    echo $result<span class="token punctuation">;</span>
    <span class="token operator">?</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span> 
</code></pre></div><p>以上可以获取链接分类下的所有链接，如果无分类，则输出所有链接</p>
<h4 id="内容显示美化" tabindex="-1"><a class="header-anchor" href="#内容显示美化" aria-hidden="true">#</a> 内容显示美化</h4>
<p>css代码</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">/* 友情链接 */</span>
<span class="token punctuation">.</span>page<span class="token operator">-</span>links<span class="token punctuation">{</span>overflow<span class="token operator">:</span>hidden<span class="token punctuation">;</span>margin<span class="token operator">:</span><span class="token number">0</span> <span class="token number">0</span> <span class="token number">18</span>px<span class="token punctuation">;</span>padding<span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">.</span>page<span class="token operator">-</span>links a<span class="token punctuation">{</span>color<span class="token operator">:</span>#<span class="token number">555</span><span class="token punctuation">;</span>text<span class="token operator">-</span>decoration<span class="token operator">:</span>none<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">.</span>page<span class="token operator">-</span>links a<span class="token operator">:</span>hover<span class="token punctuation">{</span>color<span class="token operator">:</span>#<span class="token number">069</span><span class="token punctuation">;</span>text<span class="token operator">-</span>decoration<span class="token operator">:</span>none<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">.</span>page<span class="token operator">-</span>links ul<span class="token punctuation">{</span>margin<span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">;</span>padding<span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">.</span>page<span class="token operator">-</span>links ul li<span class="token punctuation">{</span>
    float<span class="token operator">:</span>left<span class="token punctuation">;</span>
    width<span class="token operator">:</span><span class="token number">250</span>px<span class="token punctuation">;</span>
    line<span class="token operator">-</span>height<span class="token operator">:</span><span class="token number">16</span>px<span class="token punctuation">;</span>
    height<span class="token operator">:</span><span class="token number">20</span>px<span class="token punctuation">;</span>
    margin<span class="token operator">:</span><span class="token number">0</span> <span class="token number">10</span>px <span class="token number">10</span>px <span class="token number">0</span><span class="token punctuation">;</span>
    padding<span class="token operator">:</span><span class="token number">8</span>px<span class="token punctuation">;</span>
    list<span class="token operator">-</span>style<span class="token operator">-</span>type<span class="token operator">:</span>none<span class="token punctuation">;</span>
    border<span class="token operator">:</span><span class="token number">1</span>px solid #ddd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>page<span class="token operator">-</span>links ul li<span class="token operator">:</span>hover<span class="token punctuation">{</span>background<span class="token operator">:</span>#f2f2f2<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">.</span>page<span class="token operator">-</span>links ul li img<span class="token punctuation">{</span>width<span class="token operator">:</span><span class="token number">16</span>px<span class="token punctuation">;</span>height<span class="token operator">:</span><span class="token number">16</span>px<span class="token punctuation">;</span>margin<span class="token operator">:</span><span class="token number">0</span> <span class="token number">5</span>px <span class="token operator">-</span><span class="token number">2</span>px <span class="token number">0</span><span class="token punctuation">;</span>padding<span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">;</span>border<span class="token operator">:</span>none<span class="token punctuation">;</span><span class="token punctuation">}</span> 
</code></pre></div><p>好了，经过以上几步，友情链接独立页面就完成了。</p>
</template>
