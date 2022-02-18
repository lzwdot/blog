import{d as t,o,c as e,a as n,e as p,F as c,h as r,g as a}from"./app.4ca8afde.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=r(`<h1 id="laravel-\u672C\u5730\u6269\u5C55\u5305\u5F00\u53D1\u8BE6\u7EC6\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#laravel-\u672C\u5730\u6269\u5C55\u5305\u5F00\u53D1\u8BE6\u7EC6\u8FC7\u7A0B" aria-hidden="true">#</a> Laravel \u672C\u5730\u6269\u5C55\u5305\u5F00\u53D1\u8BE6\u7EC6\u8FC7\u7A0B</h1><h2 id="\u5B89\u88C5-laravel" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-laravel" aria-hidden="true">#</a> \u5B89\u88C5 Laravel</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code>laravel <span class="token keyword">new</span> <span class="token class-name">laravel</span>
</code></pre></div><p>\u5728\u6839\u76EE\u5F55\u521B\u5EFA\u6269\u5C55\u5305\u4E13\u7528\u76EE\u5F55 packages</p><h2 id="\u521B\u5EFA\u6269\u5C55\u5305" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6269\u5C55\u5305" aria-hidden="true">#</a> \u521B\u5EFA\u6269\u5C55\u5305</h2><p>1\u3001\u65B0\u5EFA packages/MyVendor/MyPackage/src</p><p>2\u3001\u5728 packages/MyVendor/MyPackage \u521D\u59CB\u5316 composer</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token constant">D</span><span class="token operator">:</span>wwwlaravelpackagesMyVendorMyPackage<span class="token operator">&gt;</span>composer init
  Welcome to the Composer config generator
This command will guide you through creating your composer<span class="token punctuation">.</span>json config<span class="token punctuation">.</span>
Package <span class="token function">name</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>vendor<span class="token operator">&gt;</span><span class="token operator">/</span><span class="token operator">&lt;</span>name<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">[</span>lzw<span class="token punctuation">.</span><span class="token operator">/</span>my<span class="token operator">-</span><span class="token keyword">package</span><span class="token punctuation">]</span><span class="token operator">:</span> myvendor<span class="token operator">/</span>mypackage
Description <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">:</span> a <span class="token keyword">package</span>
Author <span class="token punctuation">[</span><span class="token punctuation">,</span> n to skip<span class="token punctuation">]</span><span class="token operator">:</span> lzw<span class="token punctuation">.</span> <span class="token operator">&lt;</span>lzw22@qq<span class="token punctuation">.</span>com<span class="token operator">&gt;</span>
Minimum Stability <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">:</span> dev
Package <span class="token function">Type</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>g<span class="token punctuation">.</span> library<span class="token punctuation">,</span> project<span class="token punctuation">,</span> metapackage<span class="token punctuation">,</span> composer<span class="token operator">-</span>plugin<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">:</span> project
License <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">MIT</span>
Define your dependencies<span class="token punctuation">.</span>
Would you like to define your <span class="token function">dependencies</span> <span class="token punctuation">(</span>require<span class="token punctuation">)</span> interactively <span class="token punctuation">[</span>yes<span class="token punctuation">]</span><span class="token operator">?</span> no
Would you like to define your dev <span class="token function">dependencies</span> <span class="token punctuation">(</span>require<span class="token operator">-</span>dev<span class="token punctuation">)</span> interactively <span class="token punctuation">[</span>yes<span class="token punctuation">]</span><span class="token operator">?</span> no
<span class="token punctuation">{</span>
    <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;myvendor/mypackage&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a package&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;project&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MIT&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;authors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lzw.&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lzw22@qq.com&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;minimum-stability&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dev&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;require&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
Do you confirm generation <span class="token punctuation">[</span>yes<span class="token punctuation">]</span><span class="token operator">?</span> yes
</code></pre></div><p>\u4EE5\u4E0A\u6267\u884C\u540E\uFF0C\u5C06\u751F\u6210\u6269\u5C55\u5305 composer.json \u6587\u4EF6</p><p>3\u3001\u65B0\u5EFA\u670D\u52A1\u63D0\u4F9B\u8005\uFF0C\u6267\u884C</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>php artisan make<span class="token operator">:</span>provider MyPackageServiceProvider 
</code></pre></div><p>\u5C06\u5728 App/Providers \u65B0\u589E MyPackageServiceProvider \u6587\u4EF6\uFF0C\u5C06\u5176\u79FB\u52A8\u5230 packages/MyVendor/MyPackage/src \u4E0B,\u5C06\u4FEE\u6539\u547D\u540D\u7A7A\u95F4\uFF1Anamespace MyVendorMyPackage;</p><p>4\u3001\u65B0\u5EFA\u63A7\u5236\u5668 packages/MyVendor/MyPackage/src/MyPackageController.php</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
namespace MyVendorMyPackage<span class="token punctuation">;</span>
use AppHttpControllersController<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">MyPackageController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">dd</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>5\u3001\u65B0\u5EFA\u8DEF\u7531\u6587\u4EF6 packages/MyVendor/MyPackage/src/routes.php</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
<span class="token literal-property property">Route</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/test&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;MyVendorMyPackageMyPackageController@index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>6\u3001\u5728 MyPackageServiceProvider \u4E2D\u6CE8\u518C\u8DEF\u7531</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
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
        $<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">loadRoutesFrom</span><span class="token punctuation">(</span>__DIR__ <span class="token punctuation">.</span> <span class="token string">&#39;/routes.php&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E00\u4E2A\u6269\u5C55\u5305\u57FA\u672C\u529F\u80FD\u5DF2\u5B8C\u6210\uFF0C\u73B0\u5728\u9700\u8981\u5728 laravel \u9879\u76EE\u4E2D\u5F15\u7528\u8BE5\u5305</p><h2 id="\u5F15\u5165\u6269\u5C55\u5305" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165\u6269\u5C55\u5305" aria-hidden="true">#</a> \u5F15\u5165\u6269\u5C55\u5305</h2><p>\u4E24\u79CD\u65B9\u5F0F\uFF1A\u4E00\u79CD\u662F laravel 5.5 \u4E4B\u524D\u7684\u624B\u5DE5\u914D\u7F6E\uFF0C\u53E6\u5916\u4E00\u79CD\u662F\u57FA\u4E8E laravel 5.5+ \u5305\u81EA\u52A8\u53D1\u73B0</p><p>1\u3001\u624B\u5DE5\u914D\u7F6E</p><p>\u5728 config/app.php \u7684 providers \u4E2D\u6DFB\u52A0</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token literal-property property">PackagesMyVendorMyPackageServiceProvider</span><span class="token operator">:</span><span class="token operator">:</span><span class="token keyword">class</span><span class="token punctuation">,</span>
</code></pre></div><p>\u4FEE\u6539\u6839\u76EE\u5F55 composer.json</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token string-property property">&quot;autoload&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;psr-4&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>
        <span class="token string-property property">&quot;MyVendorMyPackage&quot;</span><span class="token operator">:</span><span class="token string">&quot;packages/MyVendor/MyPackage/src&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>\u5B8C\u6210\u540E\uFF0C\u6267\u884C\u4E0B\u9762\u547D\u4EE4\uFF0C\u66F4\u65B0\u81EA\u52A8\u52A0\u8F7D\u914D\u7F6E</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>composer dumpautoload
</code></pre></div><p>2\u3001composer \u5B89\u88C5\uFF0C\u5305\u81EA\u52A8\u53D1\u73B0</p><p>\u4FEE\u6539\u6839\u76EE\u5F55 composer.json</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token string-property property">&quot;require&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token string-property property">&quot;myvendor/mypackage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dev-master&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token string-property property">&quot;repositories&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;myvendor/mypackage&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;packages/MyVendor/MyPackage&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u914D\u7F6E laravel \u5305\u81EA\u52A8\u53D1\u73B0\uFF0C\u4FEE\u6539 packages/MyVendor/MyPackage/composer.json</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token string-property property">&quot;require&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token string-property property">&quot;autoload&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;psr-4&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;MyVendorMyPackage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;src/&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token string-property property">&quot;extra&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;laravel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;providers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;MyVendorMyPackageMyPackageServiceProvider&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5B8C\u6210\u540E\uFF0C\u6267\u884C\u5B89\u88C5\u6269\u5C55\u5305\u547D\u4EE4</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>composer update
</code></pre></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><p>\u5728\u6D4F\u89C8\u5668\u6253\u5F00 localhost/test \u8F93\u51FA</p><blockquote><p>test</p></blockquote><h2 id="laravel-\u6269\u5C55\u5305\u751F\u6210\u5668" tabindex="-1"><a class="header-anchor" href="#laravel-\u6269\u5C55\u5305\u751F\u6210\u5668" aria-hidden="true">#</a> laravel \u6269\u5C55\u5305\u751F\u6210\u5668</h2>`,39),k=a("\u4EE5\u4E0A\u90FD\u662F\u624B\u5DE5\u6267\u884C\u521B\u5EFA\u6269\u5C55\u5305\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\xA0"),d={href:"https://lzwdot.com/blog/archives/22837",target:"_blank",rel:"noopener noreferrer"},g=a("Laravel\u6269\u5C55\u5305\u751F\u6210\u5668"),y=a("\xA0"),v={href:"https://github.com/Jeroen-G/laravel-packager",target:"_blank",rel:"noopener noreferrer"},q=a("Laravel Packager"),m=a("\xA0\u6765\u81EA\u52A8\u751F\u6210\u6269\u5C55\u5305");function h(M,j){const s=t("ExternalLinkIcon");return o(),e(c,null,[i,n("p",null,[k,n("a",d,[g,p(s)]),y,n("a",v,[q,p(s)]),m])],64)}var _=l(u,[["render",h]]);export{_ as default};
