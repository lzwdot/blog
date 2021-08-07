<template><h1 id="多台服务器使用-rsync-同步代码" tabindex="-1"><a class="header-anchor" href="#多台服务器使用-rsync-同步代码" aria-hidden="true">#</a> 多台服务器使用 rsync 同步代码</h1>
<p>当多台服务器使用负载均衡等解决方案时，各服务器代码同步又是另一个问题，这时使用 rsync 是一个常用的方案。这里以两台服务器为例</p>
<blockquote>
<p>主服务器 A ：192.168.0.2</p>
<p>辅服务器 B ：192.168.0.3</p>
</blockquote>
<h2 id="安装配置-rsync" tabindex="-1"><a class="header-anchor" href="#安装配置-rsync" aria-hidden="true">#</a> 安装配置 rsync</h2>
<p>安装 rsync 并查看版本信息</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>yum install rsync
rsync <span class="token operator">-</span>version 
</code></pre></div><p>启动和停止 rsync</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>rsync <span class="token operator">--</span>daemon <span class="token operator">--</span>config<span class="token operator">=</span><span class="token operator">/</span>etc<span class="token operator">/</span>rsyncd<span class="token punctuation">.</span>conf
ps <span class="token operator">-</span>ef<span class="token operator">|</span>grep rsync
kill <span class="token number">12521</span>
</code></pre></div><p><strong>配置主服务器 A</strong>， 首先简单配置下 rsync，使用命令 <code>vi  /etc/rsyncd.conf</code></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>#运行rsync守护进程用户和组
uid <span class="token operator">=</span> nobody
gid <span class="token operator">=</span> nobody
 #允许最大连接数 就是预序多少台服务器链接
max connections <span class="token operator">=</span> <span class="token number">4</span>
#只读模式
read only <span class="token operator">=</span> <span class="token boolean">true</span>
#预序链接的ip 多个用逗号隔开
#hosts allow <span class="token operator">=</span> <span class="token number">202.207</span><span class="token number">.177</span><span class="token number">.180</span>
# 现在是允许所有的服务器都能连
hosts allow <span class="token operator">=</span> <span class="token operator">*</span>
transfer logging <span class="token operator">=</span> <span class="token boolean">true</span>
log format <span class="token operator">=</span> <span class="token operator">%</span>h <span class="token operator">%</span>o <span class="token operator">%</span>f <span class="token operator">%</span>l <span class="token operator">%</span>b
#日志文件
log file <span class="token operator">=</span> <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>log<span class="token operator">/</span>rsyncd<span class="token punctuation">.</span>log
slp refresh <span class="token operator">=</span> <span class="token number">300</span>
#进程文件位置
pid file <span class="token operator">=</span> <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>run<span class="token operator">/</span>rsyncd<span class="token punctuation">.</span>pid
lock file <span class="token operator">=</span> <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>run<span class="token operator">/</span>rsyncd<span class="token punctuation">.</span>lock
<span class="token punctuation">[</span>test<span class="token punctuation">]</span>
#<span class="token constant">A</span>服务器需要做镜像的目录
path <span class="token operator">=</span> <span class="token operator">/</span>www<span class="token operator">/</span>wwwroot<span class="token operator">/</span>test
read only <span class="token operator">=</span> <span class="token boolean">false</span>
#允许的认证用户
auth users <span class="token operator">=</span> root
#密码文件位置
secrets file <span class="token operator">=</span> <span class="token operator">/</span>etc<span class="token operator">/</span>rsyncd<span class="token punctuation">.</span>password
</code></pre></div><blockquote>
<p>注意：注释“#”不能放在配置项的后面，错误示例 “ <code>secrets file = /etc/rsyncd.password #密码文件位置</code> ”</p>
</blockquote>
<p>接着设置上面配置文件中的密码文件 <code>vim rsyncd.password</code> 添加【user:password】格式的内容如：<code>root:123456</code>，<em>并设置 600 权限，这点非常重要</em></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>chmod <span class="token operator">-</span><span class="token constant">R</span> <span class="token number">600</span> rsyncd<span class="token punctuation">.</span>password
</code></pre></div><p><strong>配置辅服务器 B</strong>，这里只需要添加密码文件 <code>vim rsyncd.password</code> 添加【password】格式的内容如：<code>123456</code></p>
<p><strong>添加开机启动</strong>，防止服务器重启或者宕机修复好之后，需要手动重启服务</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>vi <span class="token operator">/</span>etc<span class="token operator">/</span>rc<span class="token punctuation">.</span>local
<span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>rsync <span class="token operator">--</span>daemon <span class="token operator">--</span>config<span class="token operator">=</span><span class="token operator">/</span>ect<span class="token operator">/</span>rsyncd<span class="token punctuation">.</span>conf   #开机自动运行
</code></pre></div><h2 id="代码同步" tabindex="-1"><a class="header-anchor" href="#代码同步" aria-hidden="true">#</a> 代码同步</h2>
<p>配置好了 rsync，现在就来实现服务器 B 从服务器 A 同步代码，执行以下命令</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>rsync <span class="token operator">-</span>vzrtopg <span class="token operator">--</span>progress root@<span class="token number">192.168</span><span class="token number">.0</span><span class="token number">.2</span><span class="token operator">:</span><span class="token operator">:</span>test <span class="token operator">/</span>www<span class="token operator">/</span>wwwroot<span class="token operator">/</span>test <span class="token operator">--</span>password<span class="token operator">-</span>file<span class="token operator">=</span><span class="token operator">/</span>etc<span class="token operator">/</span>rsyncd<span class="token punctuation">.</span>password
</code></pre></div><blockquote>
<p><code>root</code> 对应服务器 A 配置文件 rsyncd.conf 中的 auth users = root</p>
<p><code>192.168.0.2</code> 应服务器 A 的 ip</p>
<p><code>test</code> 对应服务器 A 配置文件 rsyncd.conf 中的 [test]</p>
<p><code>/www/wwwroot/test</code> 是服务器 B 存放同步代码的目录</p>
<p><code>/etc/rsyncd.password</code> 是服务器 B 的密码文件</p>
</blockquote>
<p>以上命令执行一次，同步一次，需要用到 crontab 计划任务来做到实时同步，新建 shell 脚本 <code>vim /root/rsyncd.sh</code></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token hashbang comment">#!/bin/bash</span>
<span class="token constant">PATH</span><span class="token operator">=</span><span class="token operator">/</span>bin<span class="token operator">:</span><span class="token operator">/</span>sbin<span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>sbin<span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>bin<span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>sbin<span class="token operator">:</span><span class="token operator">~</span><span class="token operator">/</span>bin
<span class="token keyword">export</span> <span class="token constant">PATH</span>
#间隔的秒数，不能大于<span class="token number">60</span>
step<span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">(</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">60</span><span class="token punctuation">;</span> i<span class="token operator">=</span><span class="token punctuation">(</span>i<span class="token operator">+</span>step<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token function">$</span><span class="token punctuation">(</span>rsync <span class="token operator">-</span>vzrtopg <span class="token operator">--</span>progress root@<span class="token number">192.168</span><span class="token number">.0</span><span class="token number">.2</span><span class="token operator">:</span><span class="token operator">:</span>test <span class="token operator">/</span>www<span class="token operator">/</span>wwwroot<span class="token operator">/</span>test <span class="token operator">--</span>password<span class="token operator">-</span>file<span class="token operator">=</span><span class="token operator">/</span>etc<span class="token operator">/</span>rsyncd<span class="token punctuation">.</span>password<span class="token punctuation">)</span>
    sleep $step
done
exit <span class="token number">0</span>
</code></pre></div><p>然后在服务器 B 添加  crontab 定时任务， 执行 <code>crontab -e</code></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">*</span> <span class="token operator">*</span> <span class="token operator">*</span> <span class="token operator">*</span> <span class="token operator">*</span> sh <span class="token operator">/</span>root<span class="token operator">/</span>rsyncd<span class="token punctuation">.</span>sh <span class="token operator">></span> <span class="token operator">/</span>dev<span class="token operator">/</span><span class="token keyword">null</span> <span class="token number">2</span><span class="token operator">></span><span class="token operator">&amp;</span><span class="token number">1</span>
</code></pre></div><p>OK，大功告成，赶紧去试试吧！</p>
<p>参考： <a href="https://blog.csdn.net/oljuydfcg/article/details/91639416" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/oljuydfcg/article/details/91639416<OutboundLink/></a></p>
</template>
