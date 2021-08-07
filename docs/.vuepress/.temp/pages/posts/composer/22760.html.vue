<template><h1 id="如何安装composer和使用packagist镜像" tabindex="-1"><a class="header-anchor" href="#如何安装composer和使用packagist镜像" aria-hidden="true">#</a> 如何安装Composer和使用Packagist镜像</h1>
<h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3>
<p><strong>Composer</strong></p>
<p>Composer 是 PHP5.3以上 的一个依赖管理工具。它允许你申明项目所依赖的代码库，它会在你的项目中为你安装他们。Composer 不是一个包管理器。是的，它涉及 &quot;packages&quot; 和 &quot;libraries&quot;，但它在每个项目的基础上进行管理，在你项目的某个目录中（例如 vendor）进行安装。默认情况下它不会在全局安装任何东西。因此，这仅仅是一个依赖管理。</p>
<p><strong>Packagist</strong></p>
<p>packagist 是 Composer 的主要资源库。 一个 Composer 的库基本上是一个包的源：记录了可以得到包的地方。Packagist 的目标是成为大家使用库资源的中央存储平台。</p>
<h3 id="_1、下载-composer" tabindex="-1"><a class="header-anchor" href="#_1、下载-composer" aria-hidden="true">#</a> 1、下载 Composer</h3>
<blockquote>
<p>安装前请务必确保已经正确安装了PHP。打开命令行窗口并执行 php -v 查看是否正确输出版本号。</p>
</blockquote>
<h4 id="命令下载" tabindex="-1"><a class="header-anchor" href="#命令下载" aria-hidden="true">#</a> 命令下载</h4>
<p>打开命令行并依次执行下列命令安装最新版本的 Composer：</p>
<p><em>下载安装脚本 － composer-setup.php － 到当前目录。</em></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>php <span class="token operator">-</span>r <span class="token string">"copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"</span> 
</code></pre></div><p><em>执行安装过程。</em></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>php composer<span class="token operator">-</span>setup<span class="token punctuation">.</span>php 
</code></pre></div><p><em>删除安装脚本。</em></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>php <span class="token operator">-</span>r <span class="token string">"unlink('composer-setup.php');"</span> 
</code></pre></div><p>执行第一条命令下载下来的composer-setup.php脚本将简单地检测php.ini中的参数设置，如果某些参数未正确设置则会给出警告；然后下载最新版本的 composer.phar 文件到当前目录。</p>
<h4 id="手动下载" tabindex="-1"><a class="header-anchor" href="#手动下载" aria-hidden="true">#</a> 手动下载</h4>
<p>通过访问下面地址下载</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>getcomposer<span class="token punctuation">.</span>org<span class="token operator">/</span>composer<span class="token punctuation">.</span>phar 
</code></pre></div><h3 id="_2、安装-composer" tabindex="-1"><a class="header-anchor" href="#_2、安装-composer" aria-hidden="true">#</a> 2、安装 Composer</h3>
<p><strong>局部安装</strong></p>
<p>上述下载 Composer 的过程正确执行完毕后，可以将 composer.phar 文件复制到任意目录（比如项目根目录下），然后通过 php composer.phar 指令即可使用 Composer 了！</p>
<p><strong>全局安装</strong></p>
<p>全局安装是将 Composer 安装到系统环境变量 PATH 所包含的路径下面，然后就能够在命令行窗口中直接执行 composer 命令了。</p>
<h4 id="mac-或-linux-系统" tabindex="-1"><a class="header-anchor" href="#mac-或-linux-系统" aria-hidden="true">#</a> Mac 或 Linux 系统：</h4>
<p>打开命令行窗口并执行如下命令将前面下载的 composer.phar 文件移动到 /usr/local/bin/ 目录下面：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>sudo mv composer<span class="token punctuation">.</span>phar <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>bin<span class="token operator">/</span>composer 
</code></pre></div><h4 id="windows-系统" tabindex="-1"><a class="header-anchor" href="#windows-系统" aria-hidden="true">#</a> Windows 系统：</h4>
<ol>
<li>找到并进入 PHP 的安装目录（和你在命令行中执行的 php 指令应该是同一套 PHP）。</li>
<li>将 composer.phar 复制到 PHP 的安装目录下面，也就是和 php.exe 在同一级目录。</li>
<li>在 PHP 安装目录下新建一个composer.bat文件，并将下列代码保存到此文件中。</li>
</ol>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>@php <span class="token string">"%~dp0composer.phar"</span> <span class="token operator">%</span><span class="token operator">*</span> 
</code></pre></div><p>最后重新打开一个命令行窗口试一试执行 composer --version 看看是否正确输出版本号。</p>
<h3 id="_3、使用-packagist-镜像" tabindex="-1"><a class="header-anchor" href="#_3、使用-packagist-镜像" aria-hidden="true">#</a> 3、使用 Packagist 镜像</h3>
<p>有两种方式启用本镜像服务：</p>
<ul>
<li><strong>系统全局配置：</strong> 即将配置信息添加到 Composer 的全局配置文件 config.json 中。见“方法一”</li>
<li><strong>单个项目配置：</strong> 将配置信息添加到某个项目的 composer.json 文件中。见“方法二”</li>
</ul>
<p><strong>方法一：</strong> 修改 composer 的全局配置文件（<strong>推荐方式</strong>）</p>
<p>打开命令行窗口（windows用户）或控制台（Linux、Mac 用户）并执行如下命令：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>composer config <span class="token operator">-</span>g repo<span class="token punctuation">.</span>packagist composer https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>packagist<span class="token punctuation">.</span>phpcomposer<span class="token punctuation">.</span>com 
</code></pre></div><p><strong>方法二：</strong> 修改当前项目的 composer.json 配置文件：</p>
<p>打开命令行窗口（windows用户）或控制台（Linux、Mac 用户），进入你的项目的根目录（也就是 composer.json 文件所在目录），执行如下命令：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>composer config repo<span class="token punctuation">.</span>packagist composer https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>packagist<span class="token punctuation">.</span>phpcomposer<span class="token punctuation">.</span>com 
</code></pre></div><p>上述命令将会在当前项目中的 composer.json 文件的末尾自动添加镜像的配置信息（你也可以自己手工添加）：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token string">"repositories"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"packagist"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">"type"</span><span class="token operator">:</span> <span class="token string">"composer"</span><span class="token punctuation">,</span>
        <span class="token string">"url"</span><span class="token operator">:</span> <span class="token string">"https://packagist.phpcomposer.com"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>以 thinkPHP 项目的 composer.json 配置文件为例，执行上述命令后如下所示（注意最后几行）：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"topthink/think"</span><span class="token punctuation">,</span>
    <span class="token string">"description"</span><span class="token operator">:</span> <span class="token string">"the new thinkphp framework"</span><span class="token punctuation">,</span>
    <span class="token string">"type"</span><span class="token operator">:</span> <span class="token string">"project"</span><span class="token punctuation">,</span>
    <span class="token string">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"framework"</span><span class="token punctuation">,</span>
        <span class="token string">"thinkphp"</span><span class="token punctuation">,</span>
        <span class="token string">"ORM"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">"homepage"</span><span class="token operator">:</span> <span class="token string">"http://thinkphp.cn/"</span><span class="token punctuation">,</span>
    <span class="token string">"license"</span><span class="token operator">:</span> <span class="token string">"Apache-2.0"</span><span class="token punctuation">,</span>
    <span class="token string">"authors"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"liu21st"</span><span class="token punctuation">,</span>
            <span class="token string">"email"</span><span class="token operator">:</span> <span class="token string">"liu21st@gmail.com"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">"require"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">"php"</span><span class="token operator">:</span> <span class="token string">">=5.4.0"</span><span class="token punctuation">,</span>
        <span class="token string">"topthink/framework"</span><span class="token operator">:</span> <span class="token string">"^5.0"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">"extra"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">"think-path"</span><span class="token operator">:</span> <span class="token string">"thinkphp"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">"config"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">"preferred-install"</span><span class="token operator">:</span> <span class="token string">"dist"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">"repositories"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">"packagist"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span><span class="token operator">:</span> <span class="token string">"composer"</span><span class="token punctuation">,</span>
            <span class="token string">"url"</span><span class="token operator">:</span> <span class="token string">"https://packagist.phpcomposer.com"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre></div><blockquote>
<p>提示：可以经常执行 composer selfupdate 以保持 Composer 一直是最新版本哦！</p>
</blockquote>
<h3 id="_4、使用composer安装项目实例" tabindex="-1"><a class="header-anchor" href="#_4、使用composer安装项目实例" aria-hidden="true">#</a> 4、使用Composer安装项目实例</h3>
<p><strong>安装thinkPHP5</strong></p>
<p>在命令行中执行：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>composer create<span class="token operator">-</span>project topthink<span class="token operator">/</span>think tp5  <span class="token operator">--</span>prefer<span class="token operator">-</span>dist 
</code></pre></div><p>可以在本地看到文件夹tp5，说明tp5已被下载到本地</p>
<p><strong>安装thinkphp5扩展</strong></p>
<p>在命令行中执行：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>composer require topthink<span class="token operator">/</span>think<span class="token operator">-</span>mongo 
</code></pre></div><p>命令执行完成后，可以在tp5/vendor/topthink目录下增加了think-mongo扩展</p>
<blockquote>
<p>OK，一切搞定！快来试一下 composer install 来体验飞一般的速度吧！</p>
</blockquote>
</template>
