<template><h1 id="laravel扩展包生成器" tabindex="-1"><a class="header-anchor" href="#laravel扩展包生成器" aria-hidden="true">#</a> Laravel扩展包生成器</h1>
<h2 id="laravel-packager" tabindex="-1"><a class="header-anchor" href="#laravel-packager" aria-hidden="true">#</a> Laravel Packager</h2>
<p>GitHub：<a href="https://github.com/Jeroen-G/laravel-packager" target="_blank" rel="noopener noreferrer">https://github.com/Jeroen-G/laravel-packager<OutboundLink/></a></p>
<p>这个软件包提供了一种简单的方式来创建一个新的扩展包，通过生成样板文件让开发者专注于扩展包的开发。</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<p>composer安装</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>$ composer require jeroen<span class="token operator">-</span>g<span class="token operator">/</span>laravel<span class="token operator">-</span>packager <span class="token operator">--</span>dev 
</code></pre></div><p>如果不是Laravel 5.5（或更高版本），请在<code>config/app.php</code>添加服务提供商：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>JeroenGPackagerPackagerServiceProvider<span class="token operator">:</span><span class="token operator">:</span><span class="token keyword">class</span><span class="token punctuation">,</span> 
</code></pre></div><p>如果在Laravel 5.5+上运行该软件包，则<a href="https://medium.com/@taylorotwell/package-auto-discovery-in-laravel-5-5-ea9e3ab20518" target="_blank" rel="noopener noreferrer">软件包自动发现<OutboundLink/></a>会自动处理添加服务提供商 。请注意，自动发现还意味着此包会在生产环境中加载。如果想 <a href="https://laravel.com/docs/5.5/packages#package-discovery" target="_blank" rel="noopener noreferrer">禁用自动发现<OutboundLink/></a>，则可以在<code>AppServiceProvider</code> 添加以下内容：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>$<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">></span>app<span class="token operator">-</span><span class="token operator">></span><span class="token function">environment</span><span class="token punctuation">(</span><span class="token string">'local'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    $<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">></span>app<span class="token operator">-</span><span class="token operator">></span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'JeroenGPackagerPackagerServiceProvider'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>（可选）发布配置文件。默认配置：<a href="https://github.com/jeroen-g/packager-skeleton" target="_blank" rel="noopener noreferrer">查看<OutboundLink/></a>。</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>$ php artisan vendor<span class="token operator">:</span>publish <span class="token operator">--</span>provider<span class="token operator">=</span><span class="token string">"JeroenGPackagerPackagerServiceProvider"</span> 
</code></pre></div><h2 id="可用命令" tabindex="-1"><a class="header-anchor" href="#可用命令" aria-hidden="true">#</a> 可用命令</h2>
<h3 id="新建" tabindex="-1"><a class="header-anchor" href="#新建" aria-hidden="true">#</a> 新建</h3>
<p><strong>命令：</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>$ php artisan packager<span class="token operator">:</span><span class="token keyword">new</span> <span class="token class-name">MyVendor</span> MyPackage 
</code></pre></div><p><strong>结果：</strong>  该命令会自动处理好所有事情。首先，在根目录创建一个packages目录，然后在packages中创建类似vendor/package（供应商/ 扩展包）格式的一个框架包目录，并自动设置composer.json，最后创建一个服务提供者，并会在config/app.php和根目录的composer.json中注册该包。</p>
<p><strong>选项：</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>$ php artisan packager<span class="token operator">:</span><span class="token keyword">new</span> <span class="token class-name">MyVendor</span> MyPackage <span class="token operator">--</span>i
$ php artisan packager<span class="token operator">:</span><span class="token keyword">new</span> <span class="token operator">--</span>i 
</code></pre></div><p>软件包提供了以交互方式来创建扩展包，可以配置  <code>composer.json</code> 中的所有内容 ，例如许可证和包描述。</p>
<p><strong>备注：</strong>  新建的扩展包都基于此<a href="https://github.com/jeroen-g/packager-skeleton" target="_blank" rel="noopener noreferrer">自定义框架包<OutboundLink/></a>。</p>
<h3 id="get-git" tabindex="-1"><a class="header-anchor" href="#get-git" aria-hidden="true">#</a> Get＆Git</h3>
<p><strong>命令：</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>$ php artisan packager<span class="token operator">:</span><span class="token keyword">get</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>author<span class="token operator">/</span>repository
$ php artisan packager<span class="token operator">:</span>git https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>author<span class="token operator">/</span>repository 
</code></pre></div><p><strong>结果：</strong>  这将<code>config/app.php</code> 和 <code>composer.json</code> 文件中注册包  。如果使用  <code>packager:git</code> 命令，则克隆整个Git存储库。如果 使用 <code>packager:get</code> ，则下载包，而不使用存储库。这也适用于Bitbucket存储库，但必须<br>
在 <code>packager:get</code> 命令中添加<code>--host=bitbucket</code> 提供标志  。</p>
<p><strong>选项：</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>$ php artisan packager<span class="token operator">:</span><span class="token keyword">get</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>author<span class="token operator">/</span>repository <span class="token operator">--</span>branch<span class="token operator">=</span>develop
$ php artisan packager<span class="token operator">:</span><span class="token keyword">get</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>author<span class="token operator">/</span>repository MyVendor MyPackage
$ php artisan packager<span class="token operator">:</span>git https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>author<span class="token operator">/</span>repository MyVendor MyPackage 
</code></pre></div><p>可以使用该<code>--branch</code> 选项指定分支  。如果您直接在网址后面指定供应商和名称，则会使用指的的扩展包而不是分支。</p>
<h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3>
<p><strong>命令：</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>$ php artisan packager<span class="token operator">:</span>tests 
</code></pre></div><p><strong>结果：</strong>  Packager将遍历所有维护包（ <code>packages/</code>目录）并将其测试文件发布到  <code>tests/packages</code>。将以下内容添加到phpunit.xml（在其他测试套件下）以便从包运行测试：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>testsuite name<span class="token operator">=</span><span class="token string">"Packages"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>directory suffix<span class="token operator">=</span><span class="token string">"Test.php"</span><span class="token operator">></span><span class="token punctuation">.</span><span class="token operator">/</span>tests<span class="token operator">/</span>packages<span class="token operator">&lt;</span><span class="token operator">/</span>directory<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>testsuite<span class="token operator">></span> 
</code></pre></div><p><strong>选项：</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>$ php artisan packager<span class="token operator">:</span>tests MyVendor MyPackage 
</code></pre></div><p><strong>备注：</strong>  如果存在tests文件夹，则将文件复制到Laravel应用测试专用文件夹中。这使您可以毫不费力地使用Laravel自带的所有测试功能。</p>
<h3 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h3>
<p><strong>命令：</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>$ php artisan packager<span class="token operator">:</span>list 
</code></pre></div><p>**结果：**列出<code>/packages</code>  目录中所有扩展包的概述  。</p>
<h3 id="移除" tabindex="-1"><a class="header-anchor" href="#移除" aria-hidden="true">#</a> 移除</h3>
<p><strong>命令：</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>$ php artisan packager<span class="token operator">:</span>remove MyVendor MyPackage 
</code></pre></div><p><strong>结果：</strong>  该  <code>MyVendorMyPackage</code> 扩展包将被删除，包括在  <code>composer.json</code> 和  <code>config/app.php</code>中相关信息。</p>
<h3 id="发布" tabindex="-1"><a class="header-anchor" href="#发布" aria-hidden="true">#</a> 发布</h3>
<p><strong>命令：</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>$ php artisan packager<span class="token operator">:</span>publish MyVendor MyPackage https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>myvendor<span class="token operator">/</span>mypackage 
</code></pre></div><p><strong>结果：</strong>  该  <code>MyVendorMyPackage</code> 扩展包将使用所提供的网址发布到Github上。</p>
<h3 id="校验" tabindex="-1"><a class="header-anchor" href="#校验" aria-hidden="true">#</a> 校验</h3>
<p><strong>命令：</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>$ php artisan packager<span class="token operator">:</span>check MyVendor MyPackage 
</code></pre></div><p><strong>结果：</strong>  该  <code>MyVendorMyPackage</code> 扩展包将被使用SensioLabs进行 安全漏洞检查。</p>
<p><strong>备注</strong>  您首先需要运行</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>$ composer require sensiolabs<span class="token operator">/</span>security<span class="token operator">-</span>checker 
</code></pre></div><h2 id="curl-ssl证书的问题" tabindex="-1"><a class="header-anchor" href="#curl-ssl证书的问题" aria-hidden="true">#</a> cURL SSL证书的问题</h2>
<p>事实证明，特别是在Windows上，由于操作系统上缺少SSL证书的文件，因此下载框架包时可能会出现一些问题。这可以通过打开.env文件并将其以下内容来解决：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token constant">CURL_VERIFY</span><span class="token operator">=</span><span class="token boolean">false</span> 
</code></pre></div><p>当然这意味着它不太安全，但是你不应该在生产环境中的任何地方运行这个包。</p>
</template>
