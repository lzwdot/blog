<template><h1 id="记录从-wordpress-迁移到-typecho" tabindex="-1"><a class="header-anchor" href="#记录从-wordpress-迁移到-typecho" aria-hidden="true">#</a> 记录从 WordPress 迁移到 Typecho</h1>
<p>前情提要：WordPress资源国内访问越来越卡了，所以有下面这些事了</p>
<blockquote>
<p>1、WordPress文章使用 Gutenberg 编辑器写的<br>
2、Typecho 支持 markdown 格式<br>
3、文章从 WordPress 迁移到 Typecho</p>
</blockquote>
<p>迁移步骤：</p>
<p>1、导出 WordPress 文章 XML 格式的文件，html 转 markdown 格式</p>
<p>工具：<a href="https://github.com/palaniraja/blog2md" target="_blank" rel="noopener noreferrer">https://github.com/palaniraja/blog2md<OutboundLink/></a></p>
<p>利用 blog2md 可以将 html 转 markdown 格式，同时也可以生成 update 更新 sql 语句，需要修改 index.js 部分代码参考：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>markdown <span class="token operator">=</span> markdown<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\'</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">"\\'"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> #将 ' 转义
markdown <span class="token operator">=</span> markdown<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\\\</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">"\\"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> # 将双个\转单个\
markdown <span class="token operator">=</span> markdown<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\\\</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">"\\"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> # 再次将双个\转单个\
fileContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">update typecho_contents set text='&lt;!--markdown--></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>markdown<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">' where cid=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>post<span class="token punctuation">[</span><span class="token string">"wp:post_id"</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n</span><span class="token template-punctuation string">`</span></span> # 生成兼容 Typecho 的 markdown 格式
</code></pre></div><p>2、文章从 WordPress 迁移到 Typecho</p>
<p>官方插件：<a href="http://docs.typecho.org/plugins/wordpress-to-typecho" target="_blank" rel="noopener noreferrer">http://docs.typecho.org/plugins/wordpress-to-typecho<OutboundLink/></a></p>
<p>利用 wordpress-to-typecho 插件即可将文章从 WordPress 迁移到 Typecho</p>
<p>3、更新 Typecho 数据库文章格式</p>
<p>利用之前生成的 update 更新 sql 语句更新数据库文章</p>
<p>ok，大题思路就是这样的。</p>
</template>
