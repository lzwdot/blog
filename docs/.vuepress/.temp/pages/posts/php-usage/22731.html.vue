<template><h1 id="wordpress利用-htaccess解决301重定向" tabindex="-1"><a class="header-anchor" href="#wordpress利用-htaccess解决301重定向" aria-hidden="true">#</a> WordPress利用.htaccess解决301重定向</h1>
<p>当WordPress更好域名或者修改固定链接时，最麻烦的就是产生众多的404时，从搜索引擎或者其他地方进来的链接都打不开了，从搜索引擎优化角度和用户体验上出发，301重定向是网址重定向最为可行的一种办法。</p>
<p>比如，改版前固定链接：</p>
<p><a href="http://test.cn/archives/15627.html" target="_blank" rel="noopener noreferrer">http://test.cn/archives/15627.html<OutboundLink/></a></p>
<p>改变后的链接：</p>
<p><a href="http://wpfaq.cn/archives/15627.html" target="_blank" rel="noopener noreferrer">http://wpfaq.cn/archives/15627.html<OutboundLink/></a></p>
<p>在.htaccess文件添加</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code># <span class="token constant">REDIRECTS</span>
<span class="token operator">&lt;</span>IfModule mod_rewrite<span class="token punctuation">.</span>c<span class="token operator">></span>
RewriteEngine On
RewriteCond <span class="token operator">%</span><span class="token punctuation">{</span><span class="token constant">HTTP_HOST</span><span class="token punctuation">}</span> <span class="token operator">^</span>test<span class="token punctuation">.</span>cn
RewriteRule <span class="token operator">^</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span>$ http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>wpfaq<span class="token punctuation">.</span>cn<span class="token operator">/</span>$<span class="token number">1</span> <span class="token punctuation">[</span><span class="token constant">R</span><span class="token operator">=</span><span class="token number">301</span><span class="token punctuation">,</span><span class="token constant">L</span><span class="token punctuation">]</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>IfModule<span class="token operator">></span>
# <span class="token constant">END</span> <span class="token constant">REDIRECTS</span> 
</code></pre></div><p>RewriteCond是旧域名，RewriteRule是新域名。</p>
<blockquote>
<p>注意：要使用.htaccess文件，Apache必须开启rewirte模块。</p>
</blockquote>
</template>
