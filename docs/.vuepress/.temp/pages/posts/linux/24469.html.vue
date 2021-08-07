<template><h1 id="宝塔-ecs-配置负载均衡-slb-的问题" tabindex="-1"><a class="header-anchor" href="#宝塔-ecs-配置负载均衡-slb-的问题" aria-hidden="true">#</a> 宝塔 ecs 配置负载均衡 slb 的问题</h1>
<p>在配置 slb 健康检查非常重要，如果出现以下情况</p>
<blockquote>
<p>下述原因可能会导致健康检查异常：<br>
iptables 防火墙配置开启<br>
后端 http 探测码401、403与配置不匹配</p>
</blockquote>
<p><strong>1、关闭 iptables服务</strong>， centOS 7 默认用的是 firewalld，也是基于 iptables 的，但 iptables 服务是没安装的</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>#开启防火墙，并启用这个服务
sudo systemctl enable firewalld<span class="token punctuation">.</span>service
sudo systemctl start firewalld<span class="token punctuation">.</span>service
#停止防火墙，并禁用这个服务
sudo systemctl stop firewalld<span class="token punctuation">.</span>service
sudo systemctl disable firewalld<span class="token punctuation">.</span>service
</code></pre></div><p>如果想在 centOS 7 改用 iptables 的话，需要安装 iptables 服务</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>#安装
sudo yum install iptables<span class="token operator">-</span>services
#开启iptables
sudo systemctl enable iptables
sudo systemctl enable ip6tables
#启动服务
sudo systemctl start iptables
sudo systemctl start ip6tables
</code></pre></div><p><strong>2、如果是宝塔面板</strong>的 ecs 服务器，一般监听 80 端口时，最容易发生异常，原因还是服务器 nginx 配置问题，准确的说安装 phpmyadmin 的问题。当启动和停止 phpmyadmin 时， 查看 nginx 配置文件 <code>root</code> 配置项会指向 <code>root /www/server/phpmyadmin;</code> 或 <code>root /www/server/stop;</code> 端口也会跟随 phpmyadmin 配置一起变化。好了，问题找到了，那么怎么解决？</p>
<blockquote>
<p><strong>更新：最快方式就是在宝塔里设置默认站点即可，下面的不用看了</strong></p>
</blockquote>
<p><strong>最快捷方式</strong>，手动修改 nginx 配置文件监听端口 80，root 指向 <code>/www/wwwroot/default/</code>，这种方式不能再使用 phpmyadmin</p>
<p><strong>新建配置文件方式</strong>，在 <code>/www/server/panel/vhost</code> 目录新建 <code>nginx_slb.conf</code> 文件，添加配置</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>server
  <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    server_name slb<span class="token punctuation">;</span>
    index index<span class="token punctuation">.</span>php index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm <span class="token keyword">default</span><span class="token punctuation">.</span>php <span class="token keyword">default</span><span class="token punctuation">.</span>htm <span class="token keyword">default</span><span class="token punctuation">.</span>html<span class="token punctuation">;</span>
    root  <span class="token operator">/</span>www<span class="token operator">/</span>wwwroot<span class="token operator">/</span><span class="token keyword">default</span><span class="token punctuation">;</span>
    #error_page   <span class="token number">404</span>   <span class="token operator">/</span><span class="token number">404.</span>html<span class="token punctuation">;</span>
    include enable<span class="token operator">-</span>php<span class="token punctuation">.</span>conf<span class="token punctuation">;</span>
    location <span class="token operator">~</span> <span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>png<span class="token operator">|</span>bmp<span class="token operator">|</span>swf<span class="token punctuation">)</span>$
      <span class="token punctuation">{</span>
      expires      <span class="token number">30</span>d<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    location <span class="token operator">~</span> <span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token punctuation">(</span>js<span class="token operator">|</span>css<span class="token punctuation">)</span><span class="token operator">?</span>$
      <span class="token punctuation">{</span>
      expires      <span class="token number">12</span>h<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    location <span class="token operator">~</span> <span class="token operator">/</span><span class="token punctuation">.</span>
      <span class="token punctuation">{</span>
      deny all<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    location <span class="token operator">/</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">-</span>e $request_filename<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         rewrite <span class="token operator">^</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token keyword">public</span><span class="token operator">/</span> <span class="token operator">/</span>$<span class="token number">1</span><span class="token operator">/</span><span class="token keyword">public</span><span class="token operator">/</span>index<span class="token punctuation">.</span>php<span class="token operator">?</span>$query_string last<span class="token punctuation">;</span> #推荐
         <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    access_log  <span class="token operator">/</span>www<span class="token operator">/</span>wwwlogs<span class="token operator">/</span>slb<span class="token punctuation">.</span>log<span class="token punctuation">;</span>
    error_log  <span class="token operator">/</span>www<span class="token operator">/</span>wwwlogs<span class="token operator">/</span>slb<span class="token punctuation">.</span>error<span class="token punctuation">.</span>log<span class="token punctuation">;</span>
 <span class="token punctuation">}</span> 
</code></pre></div><p>完成后，需要在 nginx 配置文件中 phpmyadmin 的 server <strong>前面</strong>引入即可</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code> server_tokens off<span class="token punctuation">;</span>
        access_log off<span class="token punctuation">;</span>
include <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>nginx_slb<span class="token punctuation">.</span>conf<span class="token punctuation">;</span>
server
    <span class="token punctuation">{</span>
        listen <span class="token number">888</span><span class="token punctuation">;</span>
        server_name phpmyadmin<span class="token punctuation">;</span> 
</code></pre></div><p>3、<strong>https 重定向的次数过多</strong>，这是端服务器端口配置问题， 修改端口为 80，使 slb 与 ecs 服务器之间通过 http 转发。如果页面样式错乱， 则将 http 调用改为了https ，在页面添加</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">"Content-Security-Policy"</span> content<span class="token operator">=</span><span class="token string">"upgrade-insecure-requests"</span><span class="token operator">></span>
</code></pre></div><blockquote>
<p>参考： <a href="https://blog.csdn.net/zhangyongbink/article/details/86636014" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/zhangyongbink/article/details/86636014<OutboundLink/></a></p>
</blockquote>
<p>如果是 laravel 应用，则在 <code>AppServiceProvider</code> 的 <code>boot()</code> 方法中添加以下代码（注意：需要在 slb 高级配置里勾选“ 通过X-Forwarded-Proto头字段获取SLB的监听协议 ”）</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>$<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">></span>app<span class="token punctuation">[</span><span class="token string">'request'</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">></span>server<span class="token operator">-</span><span class="token operator">></span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'HTTPS'</span><span class="token punctuation">,</span> <span class="token function">isset</span><span class="token punctuation">(</span>$_SERVER<span class="token punctuation">[</span><span class="token string">'HTTP_X_FORWARDED_PROTO'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token string">'https'</span> <span class="token operator">==</span> $_SERVER<span class="token punctuation">[</span><span class="token string">'HTTP_X_FORWARDED_PROTO'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></template>
