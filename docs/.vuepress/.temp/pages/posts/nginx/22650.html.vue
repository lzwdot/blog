<template><h1 id="如何禁用http的delete-put-trace-方法" tabindex="-1"><a class="header-anchor" href="#如何禁用http的delete-put-trace-方法" aria-hidden="true">#</a> 如何禁用http的delete put trace 方法</h1>
<p>1、Apache在httpd.conf添加如下配置：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Location <span class="token string">"/"</span><span class="token operator">></span>
   AllowMethods <span class="token constant">GET</span> <span class="token constant">POST</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Location<span class="token operator">></span>
</code></pre></div><p>参考：<a href="https://httpd.apache.org/docs/2.4/mod/mod_allowmethods.html" target="_blank" rel="noopener noreferrer">https://httpd.apache.org/docs/2.4/mod/mod_allowmethods.html<OutboundLink/></a></p>
<p>2、Nginx在nginx.conf中进行如下设置</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>$request_method <span class="token operator">!</span><span class="token operator">~</span> <span class="token operator">^</span><span class="token punctuation">(</span><span class="token constant">GET</span><span class="token operator">|</span><span class="token constant">HEAD</span><span class="token operator">|</span><span class="token constant">POST</span><span class="token punctuation">)</span>$ <span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token number">403</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></template>
