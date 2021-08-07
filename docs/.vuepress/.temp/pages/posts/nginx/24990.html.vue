<template><h1 id="nginx-域名子目录重定向其他目录" tabindex="-1"><a class="header-anchor" href="#nginx-域名子目录重定向其他目录" aria-hidden="true">#</a> Nginx 域名子目录重定向其他目录</h1>
<p>例如，<code>example.org</code>域名运行的是 <code>/var/www/top/public</code>目录中的程序，现在<code>example.org/blog</code>需要运行另一个 <code>/var/www/nested/public</code> 目录下的程序。那该怎么操作？</p>
<p>之前有介绍过类似的“单域名下访问多个laravel 项目”</p>
<p><a href="/archives/17121" target="_blank" rel="noopener noreferrer">/archives/17121<OutboundLink/></a></p>
<p>下面介绍 Nginx 下的另一种比较好的方式，还是以 laravel 应用为例，直接上配置：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>server <span class="token punctuation">{</span>
    listen <span class="token number">80</span> default_server<span class="token punctuation">;</span>
    listen <span class="token punctuation">[</span><span class="token operator">:</span><span class="token operator">:</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token number">80</span> default_server<span class="token punctuation">;</span>
    root <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>www<span class="token operator">/</span>top<span class="token operator">/</span><span class="token keyword">public</span><span class="token punctuation">;</span>
    index index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm index<span class="token punctuation">.</span>php<span class="token punctuation">;</span>
    server_name _<span class="token punctuation">;</span>
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        try_files $uri $uri<span class="token operator">/</span> <span class="token operator">/</span>index<span class="token punctuation">.</span>php$is_args$args<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    location <span class="token operator">/</span>nested <span class="token punctuation">{</span>
        alias <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>www<span class="token operator">/</span>nested<span class="token operator">/</span><span class="token keyword">public</span><span class="token punctuation">;</span>
        try_files $uri $uri<span class="token operator">/</span> @nested<span class="token punctuation">;</span>
        location <span class="token operator">~</span> <span class="token punctuation">.</span>php$ <span class="token punctuation">{</span>
            include snippets<span class="token operator">/</span>fastcgi<span class="token operator">-</span>php<span class="token punctuation">.</span>conf<span class="token punctuation">;</span>
            fastcgi_param <span class="token constant">SCRIPT_FILENAME</span> $request_filename<span class="token punctuation">;</span>
            fastcgi_pass unix<span class="token operator">:</span><span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>run<span class="token operator">/</span>php<span class="token operator">/</span>php7<span class="token punctuation">.</span><span class="token number">2</span><span class="token operator">-</span>fpm<span class="token punctuation">.</span>sock<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    location @nested <span class="token punctuation">{</span>
        rewrite <span class="token operator">/</span>nested<span class="token operator">/</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span>$ <span class="token operator">/</span>nested<span class="token operator">/</span>index<span class="token punctuation">.</span>php<span class="token operator">?</span><span class="token operator">/</span>$<span class="token number">1</span> last<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    location <span class="token operator">~</span> <span class="token punctuation">.</span>php$ <span class="token punctuation">{</span>
        include snippets<span class="token operator">/</span>fastcgi<span class="token operator">-</span>php<span class="token punctuation">.</span>conf<span class="token punctuation">;</span>
        fastcgi_pass unix<span class="token operator">:</span><span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>run<span class="token operator">/</span>php<span class="token operator">/</span>php7<span class="token punctuation">.</span><span class="token number">2</span><span class="token operator">-</span>fpm<span class="token punctuation">.</span>sock<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>配置上后，两个 laravel 应用都可以正常访问了，但可能出现访问不了 css 等静态文件，所以需要添加配置：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>location <span class="token operator">~</span> <span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>png<span class="token operator">|</span>bmp<span class="token operator">|</span>swf<span class="token punctuation">)</span>$
<span class="token punctuation">{</span>
    expires      <span class="token number">30</span>d<span class="token punctuation">;</span>
    error_log off<span class="token punctuation">;</span>
    access_log <span class="token operator">/</span>dev<span class="token operator">/</span><span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
location <span class="token operator">~</span> <span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token punctuation">(</span>js<span class="token operator">|</span>css<span class="token punctuation">)</span><span class="token operator">?</span>$
<span class="token punctuation">{</span>
    expires      <span class="token number">12</span>h<span class="token punctuation">;</span>
    error_log off<span class="token punctuation">;</span>
    access_log <span class="token operator">/</span>dev<span class="token operator">/</span><span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>一切OK了，感觉比之前那个方式要安全，就是配置会比较麻烦点，每次增加一个应用，都需要配置一次。</p>
<p>参考：<a href="https://serversforhackers.com/c/nginx-php-in-subdirectory" target="_blank" rel="noopener noreferrer">https://serversforhackers.com/c/nginx-php-in-subdirectory<OutboundLink/></a></p>
</template>
