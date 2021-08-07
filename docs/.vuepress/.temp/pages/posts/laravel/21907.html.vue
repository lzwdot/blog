<template><h1 id="laravel-mongodb日志管理系统" tabindex="-1"><a class="header-anchor" href="#laravel-mongodb日志管理系统" aria-hidden="true">#</a> Laravel+Mongodb日志管理系统</h1>
<blockquote>
<p>GitHub地址：<a href="https://github.com/awei922/laravel-mongodb" target="_blank" rel="noopener noreferrer">https://github.com/awei922/laravel-mongodb<OutboundLink/></a></p>
</blockquote>
<p>使用Laravel框架通过扩展jenssegers/mongodb操作mongodb数据库组成的laravel日志管理系统</p>
<h3 id="环境要求" tabindex="-1"><a class="header-anchor" href="#环境要求" aria-hidden="true">#</a> 环境要求</h3>
<ul>
<li>PHP &gt;= 7.0.0</li>
<li>Laravel &gt;= 5.5.0</li>
<li>Mongodb &gt;= 3.6.0</li>
<li>Fileinfo PHP Extension</li>
</ul>
<h3 id="安装及配置" tabindex="-1"><a class="header-anchor" href="#安装及配置" aria-hidden="true">#</a> 安装及配置</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>$ composer update
</code></pre></div><div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>$ php artisan migrate
$ php artisan key<span class="token operator">:</span>generate
</code></pre></div><h3 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明" aria-hidden="true">#</a> 使用说明</h3>
<ul>
<li>日志记录</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>test<span class="token punctuation">.</span>com<span class="token operator">/</span>api<span class="token operator">/</span>log<span class="token operator">/</span>create 
</code></pre></div><ul>
<li>日志查看</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>test<span class="token punctuation">.</span>com<span class="token operator">/</span>admin 
</code></pre></div><p>默认账号：<a href="mailto:admin@admin.com">admin@admin.com</a>/123456</p>
<h3 id="其他扩展" tabindex="-1"><a class="header-anchor" href="#其他扩展" aria-hidden="true">#</a> 其他扩展</h3>
<ul>
<li><a href="https://almsaeedstudio.com/" target="_blank" rel="noopener noreferrer">AdminLTE<OutboundLink/></a></li>
<li><a href="https://github.com/jenssegers/laravel-mongodb" target="_blank" rel="noopener noreferrer">laravel-mongodb<OutboundLink/></a></li>
<li><a href="https://github.com/overtrue/easy-sms" target="_blank" rel="noopener noreferrer">easy-sms<OutboundLink/></a></li>
</ul>
<h3 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h3>
<p>The MIT License(<a href="http://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">http://opensource.org/licenses/MIT<OutboundLink/></a>)</p>
</template>
