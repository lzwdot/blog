<template><h1 id="php-fpm配置的优化" tabindex="-1"><a class="header-anchor" href="#php-fpm配置的优化" aria-hidden="true">#</a> PHP-FPM配置的优化</h1>
<p>php-fpm默认安装后以下三个参数都是关闭的：</p>
<p>表示在 emergency_restart_interval 所设值内出现SIGSEGV或者SIGBUS错误的php-cgi进程数如果</p>
<p>超过 emergency_restart_threshold 个php-fpm就会优雅重启。这两个选项一般保持默认值。</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>emergency_restart_threshold <span class="token operator">=</span> <span class="token number">10</span>
emergency_restart_interval <span class="token operator">=</span> <span class="token number">1</span>m
</code></pre></div><p>设置子进程接受主进程复用信号的超时时间. 可用单位: s(秒), m(分), h(小时), 或者 d(天) 默认单位: s(秒). 默认值: 0.</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>process_control_timeout <span class="token operator">=</span> <span class="token number">0</span>
</code></pre></div><p>出于优化的目的，我们把它们打开</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>emergency_restart_threshold <span class="token operator">=</span> <span class="token number">10</span>
emergency_restart_interval <span class="token operator">=</span> <span class="token number">1</span>m
process_control_timeout <span class="token operator">=</span> <span class="token number">10</span>s
</code></pre></div><p><strong>有以下优点</strong></p>
<p>在1分钟内，出现 SIGSEGV 或者 SIGBUS 错误的 PHP-CGI 进程数超到10个时，PHP-FPM 就会优雅的自动重启。</p>
<p>SIGBUS(Bus error)意味着指针所对应的地址是有效地址，但总线不能正常使用该指针。通常是未对齐的数据访问所致。<br>
SIGSEGV(Segment fault)意味着指针所对应的地址是无效地址，没有物理内存对应该地址。</p>
</template>
