<template><h1 id="最简单易懂的laravel事件系统案例" tabindex="-1"><a class="header-anchor" href="#最简单易懂的laravel事件系统案例" aria-hidden="true">#</a> 最简单易懂的Laravel事件系统案例</h1>
<p>先说一下在什么场景会使用这个事件功能。</p>
<p>事情大概是这样的，需求要在用户注册的时候发一些帮助邮件给用户（原本用户在注册之后已经有发别的邮件的了，短信，IM什么的）</p>
<p>原来这个注册的方法也就10多行代码。但是有时候我们为了省事，直接在注册代码后面添加了各种代码。</p>
<p>例如这个注册方法本来是这样的</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
namespace AppHttControllers<span class="token punctuation">;</span>
use IlluminateHttpRequest<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token parameter">Request $request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//获取参数</span>
        <span class="token comment">//验证参数</span>
        <span class="token comment">//写入数据库</span>
        <span class="token comment">//return 注册信息</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>现在有一个需求，要求注册之后给用户的邮箱发一个广告，绝大多数的人（也包括以前的我）就直接在这后面接着写代码了</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
namespace AppHttControllers<span class="token punctuation">;</span>
use IlluminateHttpRequest<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token parameter">Request $request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//获取参数</span>
        <span class="token comment">//验证参数</span>
        <span class="token comment">//写入数据库</span>
        <span class="token comment">//发送广告邮件</span>
        <span class="token comment">//return 注册信息</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>这是比较直观的写法，后来又有需求要发个短信。</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
namespace AppHttControllers<span class="token punctuation">;</span>
use IlluminateHttpRequest<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token parameter">Request $request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//获取参数</span>
        <span class="token comment">//验证参数</span>
        <span class="token comment">//写入数据库</span>
        <span class="token comment">//发送广告邮件</span>
        <span class="token comment">//发送短信</span>
        <span class="token comment">//return 注册信息</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>然后又有需求，要发IM消息，这样的需求很多。这些方法如果你封装了，可能也就一行代码。</p>
<p>但是，在实际项目中，这个注册方法里面已经加了很多东西。如果多人开发的话各种不方便。然后想到了laravel似乎有这个功能，但是一直都不知道怎么应用，仔细看了一下手册，发现和自己的想法不谋而合。</p>
<p>laravel的事件功能实际上更倾向是一种管理手段，并不是没了它我们就做不到了，只是它能让我们做得更加好，更加优雅。</p>
<p>laravel的事件是一种管理+实现的体现，它首先有一个总的目录，然后我们可以宏观的看到所有的事件，而不需要每次都要打开控制器的方法我们才能知道注册后会发生什么，这一点很重要，非常的方便，我就不按着laravel的顺序来讲，而是按着实际情况来建立这种关系。</p>
<p>现在我们无非就是要在注册之后要做一系列的事情，首先得注册完之后调用一个事件，然后这个事件再做各种各样的事</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
namespace AppHttControllers<span class="token punctuation">;</span>
use IlluminateHttpRequest<span class="token punctuation">;</span>
<span class="token comment">//我们先引入一个事件类，名字自定义的，之后再一步一步创建</span>
use AppEventsRegister<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token parameter">Request $request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//获取参数</span>
        <span class="token comment">//验证参数</span>
        <span class="token comment">//写入数据库</span>
        <span class="token comment">//触发事件，以后所有需要注册后要做的事情，都不需要再这里加代码了，我们只需要管理事件就好了</span>
        <span class="token comment">//event方法是laravel自带方法, $uid是外部参数，看你需要做什么，传什么参数了。注册之后肯定有$uid的嘛</span>
        <span class="token function">event</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Register</span><span class="token punctuation">(</span>$uid<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//return 注册信息</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>找到<code>appProvidersEventServiceProvider.php</code>文件。给它添加关系，告诉系统，有人用event()调用了事件之后要被谁监听得到。</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
namespace AppProviders<span class="token punctuation">;</span>
use LaravelLumenProvidersEventServiceProvider <span class="token keyword">as</span> ServiceProvider<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">EventServiceProvider</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceProvider</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * The event listener mappings for the application.
     *
     * <span class="token keyword">@var</span> array
     */</span>
    <span class="token keyword">protected</span> $listen <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token comment">// 用户注册后的事件</span>
        <span class="token string">'AppEventsRegister'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
            <span class="token comment">// 发送广告邮件</span>
            <span class="token string">'AppListenersSendAdMail'</span><span class="token punctuation">,</span>
            <span class="token comment">// 发送短信</span>
            <span class="token string">'AppListenersSendSms'</span><span class="token punctuation">,</span>
            <span class="token comment">// 发送帮助信息</span>
            <span class="token string">'AppListenersSendHelpInformation'</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>这里是注册事件的入口，相当于一个总目录，这样就可以跟注册代码解耦了，以后要加东西我们就不需要再去看注册方法的代码了</p>
<p>然后运行下面命令生成文件</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>php artisan event<span class="token operator">:</span>generate
</code></pre></div><p><strong>也可以通过下面步骤手动生成：</strong></p>
<p>现在注册完之后会触发这个<code>AppEventsRegister</code>类，然后这个类会被<code>AppListenersSendAdMail</code>,<code>AppListenersSendSms</code>，<code>AppListenersSendHelpInformation</code>监听得到，我们进入<code>appEvents</code>目录，创建Register这个类</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
namespace AppEvents<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Register</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> $uid<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 创建一个新的事件实例.
     *
     * <span class="token keyword">@param</span>  <span class="token parameter">Order</span>  $order
     * <span class="token keyword">@return</span> void
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token parameter">$uid</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        $<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">></span>uid <span class="token operator">=</span> $uid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>这样就可以了。</p>
<p>然后去<code>appListeners</code>目录创建各种要做的事件监听类。</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
namespace AppListeners<span class="token punctuation">;</span>
use AppEventsRegister<span class="token punctuation">;</span>
use AppModelsUser<span class="token punctuation">;</span>
use IlluminateContractsQueueShouldQueue<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">SendHelpInformation</span> <span class="token keyword">implements</span> <span class="token class-name">ShouldQueue</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token parameter">Register $event</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        $uid <span class="token operator">=</span> $event<span class="token operator">-</span><span class="token operator">></span>uid<span class="token punctuation">;</span>
        $user <span class="token operator">=</span> User<span class="token operator">:</span><span class="token operator">:</span><span class="token function">find</span><span class="token punctuation">(</span>$uid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//......各种实现</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>这个handle方法就是我们要做的具体实现了，有个很方便的功能就是如果<code>implements ShouldQueue</code>这个接口的话就会异步队列执行，如果去掉的话就是同步执行。很方便有没有，这样代码就解耦了，不需要再管注册代码了，在这里就能很方便的管理了。多人开发也是单独写自己的Listeners就可以了。</p>
</template>
