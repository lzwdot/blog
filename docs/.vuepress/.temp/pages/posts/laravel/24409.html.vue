<template><h1 id="laravel-显示-419-page-expired-的几种情况" tabindex="-1"><a class="header-anchor" href="#laravel-显示-419-page-expired-的几种情况" aria-hidden="true">#</a> Laravel 显示 “419 | Page Expired” 的几种情况</h1>
<p>在使用 post 请求时偶尔会出现 “419 | Page Expired” 的问题，可以从以下几个方面着手。</p>
<p><strong>CSRF 令牌问题</strong></p>
<p>如果是 csrf 的问题，可以通过添加 <code>csrf()</code>字段解决问题</p>
<p><strong>配置https环境后，使用http访问</strong></p>
<p>此时应检查 session.php 配置文件，应设置 <code>'secure' =&gt; env('SESSION_SECURE_COOKIE', false),</code></p>
<p><strong>storage目录权限问题</strong></p>
<p>一般给与 <code>storage</code> 目录所属 www:www 用户组，并设置相应的读写权限 <code>sudo chmod -R 775 storage/</code></p>
<p><strong>两个Laravel项目session共享问题</strong></p>
<p>检查 session.php 配置文件 ，设置 <code>'domain' =&gt; env('SESSION_DOMAIN', null),</code></p>
<p><strong>最后</strong>清理所有缓存，重试</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>composer dump<span class="token operator">-</span>autoload
php artisan optimize
php artisan cache<span class="token operator">:</span>clear
php artisan config<span class="token operator">:</span>clear
php artisan route<span class="token operator">:</span>clear
php artisan view<span class="token operator">:</span>clear
</code></pre></div></template>
