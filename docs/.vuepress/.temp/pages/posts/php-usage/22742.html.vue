<template><h1 id="wordpress显示自定义类型-posttype-文章" tabindex="-1"><a class="header-anchor" href="#wordpress显示自定义类型-posttype-文章" aria-hidden="true">#</a> WordPress显示自定义类型（PostType）文章</h1>
<p>WordPress默认只显示PostType为post类型内容，自定义的PostType 的内容不会自动混入主循环里面。那如何让自定义PostType的内容显示出来？</p>
<p>你需要使用 pre_get_posts 这个 action 来做一些处理：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 显示自定义PostType的内容显示
 * <span class="token keyword">@param</span> <span class="token parameter">$query</span>
 * <span class="token keyword">@return</span> mixed
 */</span>
<span class="token keyword">function</span> <span class="token function">add_my_post_types_to_query</span><span class="token punctuation">(</span> <span class="token parameter">$query</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token function">is_home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> $query<span class="token operator">-</span><span class="token operator">></span><span class="token function">is_main_query</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
        $query<span class="token operator">-</span><span class="token operator">></span><span class="token function">set</span><span class="token punctuation">(</span> <span class="token string">'post_type'</span><span class="token punctuation">,</span> <span class="token function">array</span><span class="token punctuation">(</span> <span class="token string">'post'</span><span class="token punctuation">,</span> <span class="token string">'docs'</span><span class="token punctuation">,</span> <span class="token string">'dwqa-question'</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> $query<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">add_action</span><span class="token punctuation">(</span> <span class="token string">'pre_get_posts'</span><span class="token punctuation">,</span> <span class="token string">'add_my_post_types_to_query'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p>以上代码添加到functions.php中，然后刷新页面试试</p>
<p>参考：<a href="https://blog.csdn.net/youcijibi/article/details/78490500" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/youcijibi/article/details/78490500<OutboundLink/></a></p>
</template>
