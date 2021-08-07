<template><h1 id="laravel-本地扩展包开发详细过程" tabindex="-1"><a class="header-anchor" href="#laravel-本地扩展包开发详细过程" aria-hidden="true">#</a> Laravel 本地扩展包开发详细过程</h1>
<h2 id="安装-laravel" tabindex="-1"><a class="header-anchor" href="#安装-laravel" aria-hidden="true">#</a> 安装 Laravel</h2>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>laravel <span class="token keyword">new</span> <span class="token class-name">laravel</span>
</code></pre></div><p>在根目录创建扩展包专用目录 packages</p>
<h2 id="创建扩展包" tabindex="-1"><a class="header-anchor" href="#创建扩展包" aria-hidden="true">#</a> 创建扩展包</h2>
<p>1、新建 packages/MyVendor/MyPackage/src</p>
<p>2、在 packages/MyVendor/MyPackage 初始化 composer</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token constant">D</span><span class="token operator">:</span>wwwlaravelpackagesMyVendorMyPackage<span class="token operator">></span>composer init
  Welcome to the Composer config generator
This command will guide you through creating your composer<span class="token punctuation">.</span>json config<span class="token punctuation">.</span>
Package <span class="token function">name</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>vendor<span class="token operator">></span><span class="token operator">/</span><span class="token operator">&lt;</span>name<span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">[</span>a<span class="token punctuation">.</span>wei<span class="token operator">/</span>my<span class="token operator">-</span><span class="token keyword">package</span><span class="token punctuation">]</span><span class="token operator">:</span> myvendor<span class="token operator">/</span>mypackage
Description <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">:</span> a <span class="token keyword">package</span>
Author <span class="token punctuation">[</span><span class="token punctuation">,</span> n to skip<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">A</span><span class="token punctuation">.</span>wei <span class="token operator">&lt;</span>lzw22@qq<span class="token punctuation">.</span>com<span class="token operator">></span>
Minimum Stability <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">:</span> dev
Package <span class="token function">Type</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>g<span class="token punctuation">.</span> library<span class="token punctuation">,</span> project<span class="token punctuation">,</span> metapackage<span class="token punctuation">,</span> composer<span class="token operator">-</span>plugin<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">:</span> project
License <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">MIT</span>
Define your dependencies<span class="token punctuation">.</span>
Would you like to define your <span class="token function">dependencies</span> <span class="token punctuation">(</span>require<span class="token punctuation">)</span> interactively <span class="token punctuation">[</span>yes<span class="token punctuation">]</span><span class="token operator">?</span> no
Would you like to define your dev <span class="token function">dependencies</span> <span class="token punctuation">(</span>require<span class="token operator">-</span>dev<span class="token punctuation">)</span> interactively <span class="token punctuation">[</span>yes<span class="token punctuation">]</span><span class="token operator">?</span> no
<span class="token punctuation">{</span>
    <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"myvendor/mypackage"</span><span class="token punctuation">,</span>
    <span class="token string">"description"</span><span class="token operator">:</span> <span class="token string">"a package"</span><span class="token punctuation">,</span>
    <span class="token string">"type"</span><span class="token operator">:</span> <span class="token string">"project"</span><span class="token punctuation">,</span>
    <span class="token string">"license"</span><span class="token operator">:</span> <span class="token string">"MIT"</span><span class="token punctuation">,</span>
    <span class="token string">"authors"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"A.wei"</span><span class="token punctuation">,</span>
            <span class="token string">"email"</span><span class="token operator">:</span> <span class="token string">"lzw22@qq.com"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">"minimum-stability"</span><span class="token operator">:</span> <span class="token string">"dev"</span><span class="token punctuation">,</span>
    <span class="token string">"require"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
Do you confirm generation <span class="token punctuation">[</span>yes<span class="token punctuation">]</span><span class="token operator">?</span> yes
</code></pre></div><p>以上执行后，将生成扩展包 composer.json 文件</p>
<p>3、新建服务提供者，执行</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>php artisan make<span class="token operator">:</span>provider MyPackageServiceProvider 
</code></pre></div><p>将在 App/Providers 新增 MyPackageServiceProvider 文件，将其移动到 packages/MyVendor/MyPackage/src 下,将修改命名空间：namespace MyVendorMyPackage;</p>
<p>4、新建控制器 packages/MyVendor/MyPackage/src/MyPackageController.php</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
namespace MyVendorMyPackage<span class="token punctuation">;</span>
use AppHttpControllersController<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">MyPackageController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">dd</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>5、新建路由文件 packages/MyVendor/MyPackage/src/routes.php</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
Route<span class="token operator">:</span><span class="token operator">:</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/test'</span><span class="token punctuation">,</span> <span class="token string">'MyVendorMyPackageMyPackageController@index'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>6、在 MyPackageServiceProvider 中注册路由</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
namespace MyVendorMyPackage<span class="token punctuation">;</span>
use IlluminateSupportServiceProvider<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">MyPackageServiceProvider</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceProvider</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Register services.
     *
     * <span class="token keyword">@return</span> void
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * Bootstrap services.
     *
     * <span class="token keyword">@return</span> void
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//</span>
        $<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">loadRoutesFrom</span><span class="token punctuation">(</span>__DIR__ <span class="token punctuation">.</span> <span class="token string">'/routes.php'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>一个扩展包基本功能已完成，现在需要在 laravel 项目中引用该包</p>
<h2 id="引入扩展包" tabindex="-1"><a class="header-anchor" href="#引入扩展包" aria-hidden="true">#</a> 引入扩展包</h2>
<p>两种方式：一种是 laravel 5.5 之前的手工配置，另外一种是基于 laravel 5.5+ 包自动发现</p>
<p>1、手工配置</p>
<p>在 config/app.php 的 providers 中添加</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>PackagesMyVendorMyPackageServiceProvider<span class="token operator">:</span><span class="token operator">:</span><span class="token keyword">class</span><span class="token punctuation">,</span>
</code></pre></div><p>修改根目录 composer.json</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token string">"autoload"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"psr-4"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>
        <span class="token string">"MyVendorMyPackage"</span><span class="token operator">:</span><span class="token string">"packages/MyVendor/MyPackage/src"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>完成后，执行下面命令，更新自动加载配置</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>composer dumpautoload
</code></pre></div><p>2、composer 安装，包自动发现</p>
<p>修改根目录 composer.json</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token string">"require"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token string">"myvendor/mypackage"</span><span class="token operator">:</span> <span class="token string">"dev-master"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token string">"repositories"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"myvendor/mypackage"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">"type"</span><span class="token operator">:</span> <span class="token string">"path"</span><span class="token punctuation">,</span>
        <span class="token string">"url"</span><span class="token operator">:</span> <span class="token string">"packages/MyVendor/MyPackage"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>配置 laravel 包自动发现，修改 packages/MyVendor/MyPackage/composer.json</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token string">"require"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token string">"autoload"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"psr-4"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">"MyVendorMyPackage"</span><span class="token operator">:</span> <span class="token string">"src/"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token string">"extra"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"laravel"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">"providers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"MyVendorMyPackageMyPackageServiceProvider"</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>完成后，执行安装扩展包命令</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>composer update
</code></pre></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2>
<p>在浏览器打开 localhost/test 输出</p>
<blockquote>
<p>test</p>
</blockquote>
<h2 id="laravel-扩展包生成器" tabindex="-1"><a class="header-anchor" href="#laravel-扩展包生成器" aria-hidden="true">#</a> laravel 扩展包生成器</h2>
<p>以上都是手工执行创建扩展包，也可以使用 <a href="https://wpfaq.cn/archives/22837" target="_blank" rel="noopener noreferrer">Laravel扩展包生成器<OutboundLink/></a> <a href="https://github.com/Jeroen-G/laravel-packager" target="_blank" rel="noopener noreferrer">Laravel Packager<OutboundLink/></a> 来自动生成扩展包</p>
</template>
