<template><h1 id="window-nginx-php环境配置" tabindex="-1"><a class="header-anchor" href="#window-nginx-php环境配置" aria-hidden="true">#</a> window+nginx+php环境配置</h1>
<h4 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h4>
<p>下载 Nginx Windows版并解压<br>
下载 PHP Windows版 并解压</p>
<p>下载<a href="http://redmine.lighttpd.net/attachments/download/660/RunHiddenConsole.zip" target="_blank" rel="noopener noreferrer">RunHiddenConsole.zip<OutboundLink/></a> 并解压</p>
<h4 id="nginx配置" tabindex="-1"><a class="header-anchor" href="#nginx配置" aria-hidden="true">#</a> nginx配置</h4>
<p>修改nginx目录的nginx.conf配置文件</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>#修改root目录，添加index<span class="token punctuation">.</span>php
location <span class="token operator">/</span> <span class="token punctuation">{</span>
    root   <span class="token constant">D</span><span class="token operator">:</span><span class="token operator">/</span>wnmp<span class="token operator">/</span>nginx<span class="token operator">-</span><span class="token number">1.12</span><span class="token number">.2</span><span class="token operator">/</span>html<span class="token punctuation">;</span>
    index  index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm index<span class="token punctuation">.</span>php<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
#去掉注释，修改root目录，<span class="token operator">/</span>scripts改成$document_root
location <span class="token operator">~</span> <span class="token punctuation">.</span>php$ <span class="token punctuation">{</span>
    root           <span class="token constant">D</span><span class="token operator">:</span><span class="token operator">/</span>wnmp<span class="token operator">/</span>nginx<span class="token operator">-</span><span class="token number">1.12</span><span class="token number">.2</span><span class="token operator">/</span>html<span class="token punctuation">;</span>
    fastcgi_pass   <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">9000</span><span class="token punctuation">;</span>
    fastcgi_index  index<span class="token punctuation">.</span>php<span class="token punctuation">;</span>
    fastcgi_param  <span class="token constant">SCRIPT_FILENAME</span>  $document_root$fastcgi_script_name<span class="token punctuation">;</span>
    include        fastcgi_params<span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre></div><p><em>执行nginx.exe即可启动</em></p>
<h4 id="php配置" tabindex="-1"><a class="header-anchor" href="#php配置" aria-hidden="true">#</a> php配置</h4>
<p>复制一份php.ini-development改为php.ini</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>#去掉注释
extension_dir <span class="token operator">=</span> <span class="token string">"./ext"</span>
<span class="token operator">...</span>
#去掉注释
cgi<span class="token punctuation">.</span>fix_pathinfo<span class="token operator">=</span><span class="token number">1</span> 
</code></pre></div><blockquote>
<p>cgi.fix_pathinfo开启php的cgi设置，这一步非常重要，让php能够与nginx结合</p>
</blockquote>
<p><em>命令行执行：php-cgi.exe -b 127.0.0.1:9000，启动php</em></p>
<h4 id="启动和停止脚本" tabindex="-1"><a class="header-anchor" href="#启动和停止脚本" aria-hidden="true">#</a> 启动和停止脚本</h4>
<p>手动启动很麻烦，所以使用脚本来方便管理启动和停止，需要RunHiddenConsole配置使用</p>
<p>start_nginx.bat 启动（注意修改目录）：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>@echo off
<span class="token keyword">set</span> php_home<span class="token operator">=</span><span class="token constant">D</span><span class="token operator">:</span><span class="token operator">/</span>wnmp<span class="token operator">/</span>php<span class="token operator">-</span><span class="token number">7.1</span><span class="token number">.11</span><span class="token operator">/</span>
<span class="token keyword">set</span> nginx_home<span class="token operator">=</span><span class="token constant">D</span><span class="token operator">:</span><span class="token operator">/</span>wnmp<span class="token operator">/</span>nginx<span class="token operator">-</span><span class="token number">1.12</span><span class="token number">.2</span><span class="token operator">/</span>
echo Stopping nginx<span class="token operator">...</span>
taskkill <span class="token operator">/</span><span class="token constant">F</span> <span class="token operator">/</span><span class="token constant">IM</span> nginx<span class="token punctuation">.</span>exe <span class="token operator">></span> nul
echo Stopping <span class="token constant">PHP</span> FastCGI<span class="token operator">...</span>
taskkill <span class="token operator">/</span><span class="token constant">F</span> <span class="token operator">/</span><span class="token constant">IM</span> php<span class="token operator">-</span>cgi<span class="token punctuation">.</span>exe <span class="token operator">></span> nul
<span class="token constant">REM</span> Windows 下无效
<span class="token constant">REM</span> <span class="token keyword">set</span> <span class="token constant">PHP_FCGI_CHILDREN</span><span class="token operator">=</span><span class="token number">5</span>
<span class="token constant">REM</span> 每个进程处理的最大请求数，或设置为 Windows 环境变量
<span class="token keyword">set</span> <span class="token constant">PHP_FCGI_MAX_REQUESTS</span><span class="token operator">=</span><span class="token number">1000</span>
echo Starting <span class="token constant">PHP</span> FastCGI<span class="token operator">...</span>
RunHiddenConsole <span class="token operator">%</span>php_home<span class="token operator">%</span><span class="token operator">/</span>php<span class="token operator">-</span>cgi<span class="token punctuation">.</span>exe <span class="token operator">-</span>b <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">9000</span> <span class="token operator">-</span>c <span class="token operator">%</span>php_home<span class="token operator">%</span><span class="token operator">/</span>php<span class="token punctuation">.</span>ini
echo Starting nginx<span class="token operator">...</span>
RunHiddenConsole <span class="token operator">%</span>nginx_home<span class="token operator">%</span><span class="token operator">/</span>nginx<span class="token punctuation">.</span>exe <span class="token operator">-</span>p <span class="token operator">%</span>nginx_home<span class="token operator">%</span>
pause 
</code></pre></div><p>stop_nginx.bat 停止：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>@echo off
echo Stopping nginx<span class="token operator">...</span>
taskkill <span class="token operator">/</span><span class="token constant">F</span> <span class="token operator">/</span><span class="token constant">IM</span> nginx<span class="token punctuation">.</span>exe <span class="token operator">></span> nul
echo Stopping <span class="token constant">PHP</span> FastCGI<span class="token operator">...</span>
taskkill <span class="token operator">/</span><span class="token constant">F</span> <span class="token operator">/</span><span class="token constant">IM</span> php<span class="token operator">-</span>cgi<span class="token punctuation">.</span>exe <span class="token operator">></span> nul
pause 
</code></pre></div><blockquote>
<p>注意：start_nginx.bat，stop_nginx.bat和RunHiddenConsole.exe要在同级目录</p>
</blockquote>
<p>window+nginx+php环境就配置好了</p>
</template>
