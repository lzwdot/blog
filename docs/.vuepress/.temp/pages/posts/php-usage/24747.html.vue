<template><h1 id="wordpress-文章部分加密" tabindex="-1"><a class="header-anchor" href="#wordpress-文章部分加密" aria-hidden="true">#</a> WordPress 文章部分加密</h1>
<p>这里用到了 “&lt;--more--&gt;” 作为分割，“&lt;--more--&gt;” 的内容加密，在主题 functions.php 文件中添加：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">theme_custom_post_content</span><span class="token punctuation">(</span><span class="token parameter">$content</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    global $post<span class="token punctuation">;</span>
    <span class="token comment">//if post password</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">post_password_required</span><span class="token punctuation">(</span>$post<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        $content <span class="token operator">=</span> <span class="token function">explode</span><span class="token punctuation">(</span><span class="token string">'&lt;!--more-->'</span><span class="token punctuation">,</span> $post<span class="token operator">-</span><span class="token operator">></span>post_content<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">.</span> $content<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> $content<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">add_filter</span><span class="token punctuation">(</span><span class="token string">'the_content'</span><span class="token punctuation">,</span> <span class="token string">'theme_custom_post_content'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>下面是演示效果，输入密码：123456，查看</p>
<blockquote>
<p>这里是加密的部分内容...</p>
</blockquote>
</template>
