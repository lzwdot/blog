import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="wordpress-\u6587\u7AE0\u90E8\u5206\u52A0\u5BC6" tabindex="-1"><a class="header-anchor" href="#wordpress-\u6587\u7AE0\u90E8\u5206\u52A0\u5BC6" aria-hidden="true">#</a> WordPress \u6587\u7AE0\u90E8\u5206\u52A0\u5BC6</h1><p>\u8FD9\u91CC\u7528\u5230\u4E86 \u201C&lt;--more--&gt;\u201D \u4F5C\u4E3A\u5206\u5272\uFF0C\u201C&lt;--more--&gt;\u201D \u7684\u5185\u5BB9\u52A0\u5BC6\uFF0C\u5728\u4E3B\u9898 functions.php \u6587\u4EF6\u4E2D\u6DFB\u52A0\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">theme_custom_post_content</span><span class="token punctuation">(</span><span class="token parameter">$content</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    global $post<span class="token punctuation">;</span>
    <span class="token comment">//if post password</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">post_password_required</span><span class="token punctuation">(</span>$post<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        $content <span class="token operator">=</span> <span class="token function">explode</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;!--more--&gt;&#39;</span><span class="token punctuation">,</span> $post<span class="token operator">-</span><span class="token operator">&gt;</span>post_content<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">.</span> $content<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> $content<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">add_filter</span><span class="token punctuation">(</span><span class="token string">&#39;the_content&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;theme_custom_post_content&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4E0B\u9762\u662F\u6F14\u793A\u6548\u679C\uFF0C\u8F93\u5165\u5BC6\u7801\uFF1A123456\uFF0C\u67E5\u770B</p><blockquote><p>\u8FD9\u91CC\u662F\u52A0\u5BC6\u7684\u90E8\u5206\u5185\u5BB9...</p></blockquote>`,5);function p(o,e){return t}var l=s(a,[["render",p]]);export{l as default};
