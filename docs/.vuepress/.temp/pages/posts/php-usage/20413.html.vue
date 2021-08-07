<template><h1 id="supervisor安装配置以及laravel队列设置" tabindex="-1"><a class="header-anchor" href="#supervisor安装配置以及laravel队列设置" aria-hidden="true">#</a> supervisor安装配置以及Laravel队列设置</h1>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<p>方法1：先安装 Python 的 <code>easy_install</code>，再通过 easy_install 安装 supervisor</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code># yum install python<span class="token operator">-</span>setuptools
# easy_install supervisor
</code></pre></div><p>方法2：使用pip安装</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code># sudo pip install supervisor
</code></pre></div><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3>
<p>生成配置文件，并建立相应目录，管理 supervisor 启动进程</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code># echo_supervisord_conf <span class="token operator">></span> <span class="token operator">/</span>etc<span class="token operator">/</span>supervisord<span class="token punctuation">.</span>conf
# mkdir <span class="token operator">-</span>p <span class="token operator">/</span>etc<span class="token operator">/</span>supervisor<span class="token operator">/</span>conf<span class="token punctuation">.</span>d<span class="token operator">/</span>
</code></pre></div><p>编辑 <code>/etc/supervisord.conf</code>，修改 [include] （<strong>注意[include]前面的”;”也要去掉</strong>）区块内容：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span>include<span class="token punctuation">]</span>
files <span class="token operator">=</span> <span class="token operator">/</span>etc<span class="token operator">/</span>supervisor<span class="token operator">/</span>conf<span class="token punctuation">.</span>d<span class="token comment">/*.conf
</span></code></pre></div><p>这样， supervisor 会加载 /etc/supervisor/conf.d/ 下的所有 .conf 文件</p>
<h3 id="自动启动" tabindex="-1"><a class="header-anchor" href="#自动启动" aria-hidden="true">#</a> 自动启动</h3>
<p>在 <a href="https://github.com/Supervisor/initscripts" target="_blank" rel="noopener noreferrer">https://github.com/Supervisor/initscripts<OutboundLink/></a> 下载 CentOS 使用的自动启动服务脚本 <code>centos-systemd-etcs</code></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code># wget <span class="token operator">-</span><span class="token constant">O</span> <span class="token operator">/</span>usr<span class="token operator">/</span>lib<span class="token operator">/</span>systemd<span class="token operator">/</span>system<span class="token operator">/</span>supervisord<span class="token punctuation">.</span>service  https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>Supervisor<span class="token operator">/</span>initscripts<span class="token operator">/</span>raw<span class="token operator">/</span>master<span class="token operator">/</span>centos<span class="token operator">-</span>systemd<span class="token operator">-</span>etcs
</code></pre></div><p>将 <code>supervisord</code> 服务设为自启动</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code># systemctl enable supervisord<span class="token punctuation">.</span>service
</code></pre></div><p>输入 supervisorctl 命令可以进入 supervisor 控制台</p>
<h3 id="设置-laravel-队列" tabindex="-1"><a class="header-anchor" href="#设置-laravel-队列" aria-hidden="true">#</a> 设置 Laravel 队列</h3>
<p>新建 <code>/etc/supervisor/conf.d/laravel-work.conf</code> 文件：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span>program<span class="token operator">:</span>laravel<span class="token operator">-</span>worker<span class="token punctuation">]</span>
process_name<span class="token operator">=</span><span class="token operator">%</span><span class="token punctuation">(</span>program_name<span class="token punctuation">)</span>s_<span class="token operator">%</span><span class="token punctuation">(</span>process_num<span class="token punctuation">)</span><span class="token number">02</span>d
command<span class="token operator">=</span><span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>php<span class="token operator">/</span>bin<span class="token operator">/</span>php <span class="token operator">/</span>data<span class="token operator">/</span>wwwroot<span class="token operator">/</span>app<span class="token punctuation">.</span>com<span class="token operator">/</span>artisan queue<span class="token operator">:</span>work database <span class="token operator">--</span>sleep<span class="token operator">=</span><span class="token number">3</span> <span class="token operator">--</span>tries<span class="token operator">=</span><span class="token number">3</span> <span class="token operator">--</span>daemon
autostart<span class="token operator">=</span><span class="token boolean">true</span>
autorestart<span class="token operator">=</span><span class="token boolean">true</span>
user<span class="token operator">=</span>www
numprocs<span class="token operator">=</span><span class="token number">8</span>
redirect_stderr<span class="token operator">=</span><span class="token boolean">true</span>
stdout_logfile<span class="token operator">=</span><span class="token operator">/</span>data<span class="token operator">/</span>wwwroot<span class="token operator">/</span>app<span class="token punctuation">.</span>com<span class="token operator">/</span>storage<span class="token operator">/</span>logs<span class="token operator">/</span>queue<span class="token punctuation">.</span>log
</code></pre></div><p>这里开启了 8 个 queue:work 进程，并监视他们，如果失败的话，自动重启；在项目的 storage/logs/queue.log 记录日志。</p>
<p>启动 supervisor 服务：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code># supervisord
</code></pre></div><p>至此， supervisor 安装及 Laravel 队列设置完毕</p>
<p>如果以后配置文件有修改，或者新增，进入 supervisor 控制台，执行下面的命令</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code># supervisorctl
supervisorctl<span class="token operator">></span> reread
supervisorctl<span class="token operator">></span> update
supervisorctl<span class="token operator">></span> start laravel<span class="token operator">-</span>worker<span class="token operator">:</span><span class="token operator">*</span>
或者
# supervisorctl reread
# supervisorctl update
# supervisorctl start laravel<span class="token operator">-</span>worker<span class="token operator">:</span><span class="token operator">*</span>
</code></pre></div></template>
