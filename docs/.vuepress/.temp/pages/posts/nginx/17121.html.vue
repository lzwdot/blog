<template><h1 id="单域名-localhost-下访问多个laravel-项目" tabindex="-1"><a class="header-anchor" href="#单域名-localhost-下访问多个laravel-项目" aria-hidden="true">#</a> 单域名（localhost）下访问多个laravel 项目</h1>
<p>一个服务器不能配置多个子域名的时候很是尴尬，无法使用虚拟目录，只能通过二级目录访问。在根目录/data/wwwroot/default部署了多个laravel应用，laravel1，-laravel2…，然后按文档配置所谓的优雅链接，遇到了诸多问题：</p>
<ul>
<li>apache服务器：XAMPP的lamp环境</li>
<li>nginx服务器：OneinStack自动部署lnmp环境</li>
</ul>
<h4 id="apache服务器" tabindex="-1"><a class="header-anchor" href="#apache服务器" aria-hidden="true">#</a> Apache服务器</h4>
<p>在lamp环境下使用还是蛮简单，配置Laravel/public/.htaccess:</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Options <span class="token operator">+</span>FollowSymLinks
RewriteEngine On
RewriteCond <span class="token operator">%</span><span class="token punctuation">{</span><span class="token constant">REQUEST_FILENAME</span><span class="token punctuation">}</span> <span class="token operator">!</span><span class="token operator">-</span>d
RewriteCond <span class="token operator">%</span><span class="token punctuation">{</span><span class="token constant">REQUEST_FILENAME</span><span class="token punctuation">}</span> <span class="token operator">!</span><span class="token operator">-</span>f
RewriteRule <span class="token operator">^</span> index<span class="token punctuation">.</span>php <span class="token punctuation">[</span><span class="token constant">L</span><span class="token punctuation">]</span>
</code></pre></div><p>即可，访问的地址：</p>
<blockquote>
<p><a href="http://test.com/laravel1/public/admin/index" target="_blank" rel="noopener noreferrer">http://test.comlaravel1/public/admin/index<OutboundLink/></a><br>
<a href="http://test.com/laravel2/public/admin/index" target="_blank" rel="noopener noreferrer">http://test.com/laravel2/public/admin/index<OutboundLink/></a></p>
</blockquote>
<h4 id="nginx服务器" tabindex="-1"><a class="header-anchor" href="#nginx服务器" aria-hidden="true">#</a> nginx服务器</h4>
<p>文档中说，只要在nginx.conf下配置：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>location <span class="token operator">/</span> <span class="token punctuation">{</span>
    try_files $uri $uri<span class="token operator">/</span> <span class="token operator">/</span>index<span class="token punctuation">.</span>php<span class="token operator">?</span>$query_string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>即可，访问优雅链接，但结果有点失望，你会遇到问题：</p>
<ol>
<li>Access denied.</li>
<li>No input file specified.</li>
<li>504</li>
<li>…</li>
</ol>
<p>归根结底是nginx.conf配置问题，本人遇到最多就是Access denied，因为使用OneinStack自动部署lnmp环境，nginx.conf已经默认配置了，结果仔细对比，少了下面配置</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>fastcgi_split_path_info       <span class="token operator">^</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">+</span><span class="token punctuation">.</span>php<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span>$<span class="token punctuation">;</span>
</code></pre></div><blockquote>
<p>参考：<a href="https://segmentfault.com/a/1190000002667095" target="_blank" rel="noopener noreferrer">https://segmentfault.com/a/1190000002667095<OutboundLink/></a></p>
</blockquote>
<p>难怪laravel优雅链接index.php后面一直无法访问，目前为题已解决，附上一段网上的配置：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>server <span class="token punctuation">{</span>
    listen  <span class="token number">80</span><span class="token punctuation">;</span>
    server_name _<span class="token punctuation">;</span>
    <span class="token keyword">set</span> $root_path <span class="token string">'/data/www/default'</span><span class="token punctuation">;</span>
    root $root_path<span class="token punctuation">;</span>
    index index<span class="token punctuation">.</span>php index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm<span class="token punctuation">;</span>
    try_files $uri $uri<span class="token operator">/</span> @rewrite<span class="token punctuation">;</span>
    location @rewrite <span class="token punctuation">{</span>
        rewrite <span class="token operator">^</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span>$ <span class="token operator">/</span>index<span class="token punctuation">.</span>php<span class="token operator">?</span>_url<span class="token operator">=</span><span class="token operator">/</span>$<span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    location <span class="token operator">~</span> <span class="token punctuation">.</span>php <span class="token punctuation">{</span>
        fastcgi_pass <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">9000</span><span class="token punctuation">;</span>
        fastcgi_index <span class="token operator">/</span>index<span class="token punctuation">.</span>php<span class="token punctuation">;</span>
        fastcgi_split_path_info       <span class="token operator">^</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">+</span><span class="token punctuation">.</span>php<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token operator">/</span><span class="token punctuation">.</span><span class="token operator">+</span><span class="token punctuation">)</span>$<span class="token punctuation">;</span>
        fastcgi_param <span class="token constant">PATH_INFO</span>       $fastcgi_path_info<span class="token punctuation">;</span>
        fastcgi_param <span class="token constant">PATH_TRANSLATED</span> $document_root$fastcgi_path_info<span class="token punctuation">;</span>
        fastcgi_param <span class="token constant">SCRIPT_FILENAME</span> $document_root$fastcgi_script_name<span class="token punctuation">;</span>
        include                       fastcgi_params<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    location <span class="token operator">~</span><span class="token operator">*</span> <span class="token operator">^</span><span class="token operator">/</span><span class="token punctuation">(</span>css<span class="token operator">|</span>img<span class="token operator">|</span>js<span class="token operator">|</span>flv<span class="token operator">|</span>swf<span class="token operator">|</span>download<span class="token punctuation">)</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">+</span><span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
        root $root_path<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    location <span class="token operator">~</span> <span class="token operator">/</span><span class="token punctuation">.</span>ht <span class="token punctuation">{</span>
        deny all<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote>
<p><a href="http://test.com/laravel1/public/index.php/admin/index" target="_blank" rel="noopener noreferrer">http://test.com/laravel1/public/index.php/admin/index<OutboundLink/></a><br>
<a href="http://test.com/laravel2/public/index.php/admin/index" target="_blank" rel="noopener noreferrer">http://test.com/laravel2/public/index.php/admin/index<OutboundLink/></a></p>
</blockquote>
<p>都可以正常访问了，OK!</p>
<h4 id="最后隐藏index-php" tabindex="-1"><a class="header-anchor" href="#最后隐藏index-php" aria-hidden="true">#</a> 最后隐藏index.php</h4>
<p>虽然上述配置在laravel中可以正常访问，但是一些放在public里面的静态资源可能无法访问，比如无法使用asset()函数时，路径中就包含index.php导致资源无法加载，所以建议隐藏index.php</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">-</span>e $request_filename<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   rewrite <span class="token operator">^</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token keyword">public</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span>$ <span class="token operator">/</span>$<span class="token number">1</span><span class="token operator">/</span><span class="token keyword">public</span><span class="token operator">/</span>index<span class="token punctuation">.</span>php<span class="token operator">/</span>$<span class="token number">2</span> last<span class="token punctuation">;</span>
   #或者
   rewrite <span class="token operator">^</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token keyword">public</span><span class="token operator">/</span> <span class="token operator">/</span>$<span class="token number">1</span><span class="token operator">/</span><span class="token keyword">public</span><span class="token operator">/</span>index<span class="token punctuation">.</span>php<span class="token operator">?</span>$query_string last<span class="token punctuation">;</span> #推荐
   <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote>
<p><a href="http://test.com/laravel1/public/admin/index" target="_blank" rel="noopener noreferrer">http://test.com/laravel1/public/admin/index<OutboundLink/></a><br>
<a href="http://test.com/laravel2/public/admin/index" target="_blank" rel="noopener noreferrer">http://test.com/laravel2/public/admin/index<OutboundLink/></a></p>
</blockquote>
<p>以上就无需加index.php，即可正常访问</p>
</template>
