<template><h1 id="自动为wordpress文章设置特色图像代码" tabindex="-1"><a class="header-anchor" href="#自动为wordpress文章设置特色图像代码" aria-hidden="true">#</a> 自动为WordPress文章设置特色图像代码</h1>
<p>自动将文章中的第一张图片设置为特色图像，将下面的代码丢到当前主题的functions.php里，以后就不用担心忘记设置特色图像了。</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 自动使用第一张图为特色图
 */</span>
<span class="token keyword">function</span> <span class="token function">autoset_featured</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    global $post<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>$post<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        $already_has_thumb <span class="token operator">=</span> <span class="token function">has_post_thumbnail</span><span class="token punctuation">(</span>$post<span class="token operator">-</span><span class="token operator">></span><span class="token constant">ID</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>$already_has_thumb <span class="token operator">&amp;&amp;</span> $post<span class="token operator">-</span><span class="token operator">></span>post_type <span class="token operator">==</span><span class="token string">'post'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            $attached_image <span class="token operator">=</span> <span class="token function">get_children</span><span class="token punctuation">(</span><span class="token string">"post_parent=$post->ID&amp;post_type=attachment&amp;post_mime_type=image&amp;numberposts=1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>$attached_image<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">foreach</span> <span class="token punctuation">(</span>$attached_image <span class="token keyword">as</span> <span class="token parameter">$attachment_id</span> <span class="token operator">=></span> $attachment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">set_post_thumbnail</span><span class="token punctuation">(</span>$post<span class="token operator">-</span><span class="token operator">></span><span class="token constant">ID</span><span class="token punctuation">,</span> $attachment_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token comment">// Add thumbnail to post</span>
                <span class="token function">update_post_meta</span><span class="token punctuation">(</span> $post<span class="token operator">-</span><span class="token operator">></span><span class="token constant">ID</span><span class="token punctuation">,</span> $meta_key <span class="token operator">=</span> <span class="token string">'_thumbnail_id'</span><span class="token punctuation">,</span> $meta_value <span class="token operator">=</span> <span class="token number">18759</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>  <span class="token comment">//end function</span>
<span class="token function">add_action</span><span class="token punctuation">(</span><span class="token string">'save_post'</span><span class="token punctuation">,</span> <span class="token string">'autoset_featured'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">add_action</span><span class="token punctuation">(</span><span class="token string">'the_post'</span><span class="token punctuation">,</span> <span class="token string">'autoset_featured'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">add_action</span><span class="token punctuation">(</span><span class="token string">'draft_to_publish'</span><span class="token punctuation">,</span> <span class="token string">'autoset_featured'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">add_action</span><span class="token punctuation">(</span><span class="token string">'new_to_publish'</span><span class="token punctuation">,</span> <span class="token string">'autoset_featured'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">add_action</span><span class="token punctuation">(</span><span class="token string">'pending_to_publish'</span><span class="token punctuation">,</span> <span class="token string">'autoset_featured'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">add_action</span><span class="token punctuation">(</span><span class="token string">'future_to_publish'</span><span class="token punctuation">,</span> <span class="token string">'autoset_featured'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></template>
