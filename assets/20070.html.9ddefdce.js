import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u6700\u7B80\u5355\u6613\u61C2\u7684laravel\u4E8B\u4EF6\u7CFB\u7EDF\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6700\u7B80\u5355\u6613\u61C2\u7684laravel\u4E8B\u4EF6\u7CFB\u7EDF\u6848\u4F8B" aria-hidden="true">#</a> \u6700\u7B80\u5355\u6613\u61C2\u7684Laravel\u4E8B\u4EF6\u7CFB\u7EDF\u6848\u4F8B</h1><p>\u5148\u8BF4\u4E00\u4E0B\u5728\u4EC0\u4E48\u573A\u666F\u4F1A\u4F7F\u7528\u8FD9\u4E2A\u4E8B\u4EF6\u529F\u80FD\u3002</p><p>\u4E8B\u60C5\u5927\u6982\u662F\u8FD9\u6837\u7684\uFF0C\u9700\u6C42\u8981\u5728\u7528\u6237\u6CE8\u518C\u7684\u65F6\u5019\u53D1\u4E00\u4E9B\u5E2E\u52A9\u90AE\u4EF6\u7ED9\u7528\u6237\uFF08\u539F\u672C\u7528\u6237\u5728\u6CE8\u518C\u4E4B\u540E\u5DF2\u7ECF\u6709\u53D1\u522B\u7684\u90AE\u4EF6\u7684\u4E86\uFF0C\u77ED\u4FE1\uFF0CIM\u4EC0\u4E48\u7684\uFF09</p><p>\u539F\u6765\u8FD9\u4E2A\u6CE8\u518C\u7684\u65B9\u6CD5\u4E5F\u5C3110\u591A\u884C\u4EE3\u7801\u3002\u4F46\u662F\u6709\u65F6\u5019\u6211\u4EEC\u4E3A\u4E86\u7701\u4E8B\uFF0C\u76F4\u63A5\u5728\u6CE8\u518C\u4EE3\u7801\u540E\u9762\u6DFB\u52A0\u4E86\u5404\u79CD\u4EE3\u7801\u3002</p><p>\u4F8B\u5982\u8FD9\u4E2A\u6CE8\u518C\u65B9\u6CD5\u672C\u6765\u662F\u8FD9\u6837\u7684</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
namespace AppHttControllers<span class="token punctuation">;</span>
use IlluminateHttpRequest<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token parameter">Request $request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//\u83B7\u53D6\u53C2\u6570</span>
        <span class="token comment">//\u9A8C\u8BC1\u53C2\u6570</span>
        <span class="token comment">//\u5199\u5165\u6570\u636E\u5E93</span>
        <span class="token comment">//return \u6CE8\u518C\u4FE1\u606F</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>\u73B0\u5728\u6709\u4E00\u4E2A\u9700\u6C42\uFF0C\u8981\u6C42\u6CE8\u518C\u4E4B\u540E\u7ED9\u7528\u6237\u7684\u90AE\u7BB1\u53D1\u4E00\u4E2A\u5E7F\u544A\uFF0C\u7EDD\u5927\u591A\u6570\u7684\u4EBA\uFF08\u4E5F\u5305\u62EC\u4EE5\u524D\u7684\u6211\uFF09\u5C31\u76F4\u63A5\u5728\u8FD9\u540E\u9762\u63A5\u7740\u5199\u4EE3\u7801\u4E86</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
namespace AppHttControllers<span class="token punctuation">;</span>
use IlluminateHttpRequest<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token parameter">Request $request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//\u83B7\u53D6\u53C2\u6570</span>
        <span class="token comment">//\u9A8C\u8BC1\u53C2\u6570</span>
        <span class="token comment">//\u5199\u5165\u6570\u636E\u5E93</span>
        <span class="token comment">//\u53D1\u9001\u5E7F\u544A\u90AE\u4EF6</span>
        <span class="token comment">//return \u6CE8\u518C\u4FE1\u606F</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u662F\u6BD4\u8F83\u76F4\u89C2\u7684\u5199\u6CD5\uFF0C\u540E\u6765\u53C8\u6709\u9700\u6C42\u8981\u53D1\u4E2A\u77ED\u4FE1\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
namespace AppHttControllers<span class="token punctuation">;</span>
use IlluminateHttpRequest<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token parameter">Request $request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//\u83B7\u53D6\u53C2\u6570</span>
        <span class="token comment">//\u9A8C\u8BC1\u53C2\u6570</span>
        <span class="token comment">//\u5199\u5165\u6570\u636E\u5E93</span>
        <span class="token comment">//\u53D1\u9001\u5E7F\u544A\u90AE\u4EF6</span>
        <span class="token comment">//\u53D1\u9001\u77ED\u4FE1</span>
        <span class="token comment">//return \u6CE8\u518C\u4FE1\u606F</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7136\u540E\u53C8\u6709\u9700\u6C42\uFF0C\u8981\u53D1IM\u6D88\u606F\uFF0C\u8FD9\u6837\u7684\u9700\u6C42\u5F88\u591A\u3002\u8FD9\u4E9B\u65B9\u6CD5\u5982\u679C\u4F60\u5C01\u88C5\u4E86\uFF0C\u53EF\u80FD\u4E5F\u5C31\u4E00\u884C\u4EE3\u7801\u3002</p><p>\u4F46\u662F\uFF0C\u5728\u5B9E\u9645\u9879\u76EE\u4E2D\uFF0C\u8FD9\u4E2A\u6CE8\u518C\u65B9\u6CD5\u91CC\u9762\u5DF2\u7ECF\u52A0\u4E86\u5F88\u591A\u4E1C\u897F\u3002\u5982\u679C\u591A\u4EBA\u5F00\u53D1\u7684\u8BDD\u5404\u79CD\u4E0D\u65B9\u4FBF\u3002\u7136\u540E\u60F3\u5230\u4E86laravel\u4F3C\u4E4E\u6709\u8FD9\u4E2A\u529F\u80FD\uFF0C\u4F46\u662F\u4E00\u76F4\u90FD\u4E0D\u77E5\u9053\u600E\u4E48\u5E94\u7528\uFF0C\u4ED4\u7EC6\u770B\u4E86\u4E00\u4E0B\u624B\u518C\uFF0C\u53D1\u73B0\u548C\u81EA\u5DF1\u7684\u60F3\u6CD5\u4E0D\u8C0B\u800C\u5408\u3002</p><p>laravel\u7684\u4E8B\u4EF6\u529F\u80FD\u5B9E\u9645\u4E0A\u66F4\u503E\u5411\u662F\u4E00\u79CD\u7BA1\u7406\u624B\u6BB5\uFF0C\u5E76\u4E0D\u662F\u6CA1\u4E86\u5B83\u6211\u4EEC\u5C31\u505A\u4E0D\u5230\u4E86\uFF0C\u53EA\u662F\u5B83\u80FD\u8BA9\u6211\u4EEC\u505A\u5F97\u66F4\u52A0\u597D\uFF0C\u66F4\u52A0\u4F18\u96C5\u3002</p><p>laravel\u7684\u4E8B\u4EF6\u662F\u4E00\u79CD\u7BA1\u7406+\u5B9E\u73B0\u7684\u4F53\u73B0\uFF0C\u5B83\u9996\u5148\u6709\u4E00\u4E2A\u603B\u7684\u76EE\u5F55\uFF0C\u7136\u540E\u6211\u4EEC\u53EF\u4EE5\u5B8F\u89C2\u7684\u770B\u5230\u6240\u6709\u7684\u4E8B\u4EF6\uFF0C\u800C\u4E0D\u9700\u8981\u6BCF\u6B21\u90FD\u8981\u6253\u5F00\u63A7\u5236\u5668\u7684\u65B9\u6CD5\u6211\u4EEC\u624D\u80FD\u77E5\u9053\u6CE8\u518C\u540E\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF0C\u8FD9\u4E00\u70B9\u5F88\u91CD\u8981\uFF0C\u975E\u5E38\u7684\u65B9\u4FBF\uFF0C\u6211\u5C31\u4E0D\u6309\u7740laravel\u7684\u987A\u5E8F\u6765\u8BB2\uFF0C\u800C\u662F\u6309\u7740\u5B9E\u9645\u60C5\u51B5\u6765\u5EFA\u7ACB\u8FD9\u79CD\u5173\u7CFB\u3002</p><p>\u73B0\u5728\u6211\u4EEC\u65E0\u975E\u5C31\u662F\u8981\u5728\u6CE8\u518C\u4E4B\u540E\u8981\u505A\u4E00\u7CFB\u5217\u7684\u4E8B\u60C5\uFF0C\u9996\u5148\u5F97\u6CE8\u518C\u5B8C\u4E4B\u540E\u8C03\u7528\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u7136\u540E\u8FD9\u4E2A\u4E8B\u4EF6\u518D\u505A\u5404\u79CD\u5404\u6837\u7684\u4E8B</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
namespace AppHttControllers<span class="token punctuation">;</span>
use IlluminateHttpRequest<span class="token punctuation">;</span>
<span class="token comment">//\u6211\u4EEC\u5148\u5F15\u5165\u4E00\u4E2A\u4E8B\u4EF6\u7C7B\uFF0C\u540D\u5B57\u81EA\u5B9A\u4E49\u7684\uFF0C\u4E4B\u540E\u518D\u4E00\u6B65\u4E00\u6B65\u521B\u5EFA</span>
use AppEventsRegister<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token parameter">Request $request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//\u83B7\u53D6\u53C2\u6570</span>
        <span class="token comment">//\u9A8C\u8BC1\u53C2\u6570</span>
        <span class="token comment">//\u5199\u5165\u6570\u636E\u5E93</span>
        <span class="token comment">//\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u4EE5\u540E\u6240\u6709\u9700\u8981\u6CE8\u518C\u540E\u8981\u505A\u7684\u4E8B\u60C5\uFF0C\u90FD\u4E0D\u9700\u8981\u518D\u8FD9\u91CC\u52A0\u4EE3\u7801\u4E86\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u7BA1\u7406\u4E8B\u4EF6\u5C31\u597D\u4E86</span>
        <span class="token comment">//event\u65B9\u6CD5\u662Flaravel\u81EA\u5E26\u65B9\u6CD5, $uid\u662F\u5916\u90E8\u53C2\u6570\uFF0C\u770B\u4F60\u9700\u8981\u505A\u4EC0\u4E48\uFF0C\u4F20\u4EC0\u4E48\u53C2\u6570\u4E86\u3002\u6CE8\u518C\u4E4B\u540E\u80AF\u5B9A\u6709$uid\u7684\u561B</span>
        <span class="token function">event</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Register</span><span class="token punctuation">(</span>$uid<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//return \u6CE8\u518C\u4FE1\u606F</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u627E\u5230<code>appProvidersEventServiceProvider.php</code>\u6587\u4EF6\u3002\u7ED9\u5B83\u6DFB\u52A0\u5173\u7CFB\uFF0C\u544A\u8BC9\u7CFB\u7EDF\uFF0C\u6709\u4EBA\u7528event()\u8C03\u7528\u4E86\u4E8B\u4EF6\u4E4B\u540E\u8981\u88AB\u8C01\u76D1\u542C\u5F97\u5230\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
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
        <span class="token comment">// \u7528\u6237\u6CE8\u518C\u540E\u7684\u4E8B\u4EF6</span>
        <span class="token string">&#39;AppEventsRegister&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token comment">// \u53D1\u9001\u5E7F\u544A\u90AE\u4EF6</span>
            <span class="token string">&#39;AppListenersSendAdMail&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// \u53D1\u9001\u77ED\u4FE1</span>
            <span class="token string">&#39;AppListenersSendSms&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// \u53D1\u9001\u5E2E\u52A9\u4FE1\u606F</span>
            <span class="token string">&#39;AppListenersSendHelpInformation&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>\u8FD9\u91CC\u662F\u6CE8\u518C\u4E8B\u4EF6\u7684\u5165\u53E3\uFF0C\u76F8\u5F53\u4E8E\u4E00\u4E2A\u603B\u76EE\u5F55\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u8DDF\u6CE8\u518C\u4EE3\u7801\u89E3\u8026\u4E86\uFF0C\u4EE5\u540E\u8981\u52A0\u4E1C\u897F\u6211\u4EEC\u5C31\u4E0D\u9700\u8981\u518D\u53BB\u770B\u6CE8\u518C\u65B9\u6CD5\u7684\u4EE3\u7801\u4E86</p><p>\u7136\u540E\u8FD0\u884C\u4E0B\u9762\u547D\u4EE4\u751F\u6210\u6587\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>php artisan event<span class="token operator">:</span>generate
</code></pre></div><p><strong>\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u6B65\u9AA4\u624B\u52A8\u751F\u6210\uFF1A</strong></p><p>\u73B0\u5728\u6CE8\u518C\u5B8C\u4E4B\u540E\u4F1A\u89E6\u53D1\u8FD9\u4E2A<code>AppEventsRegister</code>\u7C7B\uFF0C\u7136\u540E\u8FD9\u4E2A\u7C7B\u4F1A\u88AB<code>AppListenersSendAdMail</code>,<code>AppListenersSendSms</code>\uFF0C<code>AppListenersSendHelpInformation</code>\u76D1\u542C\u5F97\u5230\uFF0C\u6211\u4EEC\u8FDB\u5165<code>appEvents</code>\u76EE\u5F55\uFF0C\u521B\u5EFARegister\u8FD9\u4E2A\u7C7B</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
namespace AppEvents<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Register</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> $uid<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4E8B\u4EF6\u5B9E\u4F8B.
     *
     * <span class="token keyword">@param</span>  <span class="token parameter">Order</span>  $order
     * <span class="token keyword">@return</span> void
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token parameter">$uid</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        $<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">&gt;</span>uid <span class="token operator">=</span> $uid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u6837\u5C31\u53EF\u4EE5\u4E86\u3002</p><p>\u7136\u540E\u53BB<code>appListeners</code>\u76EE\u5F55\u521B\u5EFA\u5404\u79CD\u8981\u505A\u7684\u4E8B\u4EF6\u76D1\u542C\u7C7B\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
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
        $uid <span class="token operator">=</span> $event<span class="token operator">-</span><span class="token operator">&gt;</span>uid<span class="token punctuation">;</span>
        $user <span class="token operator">=</span> User<span class="token operator">:</span><span class="token operator">:</span><span class="token function">find</span><span class="token punctuation">(</span>$uid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//......\u5404\u79CD\u5B9E\u73B0</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u4E2Ahandle\u65B9\u6CD5\u5C31\u662F\u6211\u4EEC\u8981\u505A\u7684\u5177\u4F53\u5B9E\u73B0\u4E86\uFF0C\u6709\u4E2A\u5F88\u65B9\u4FBF\u7684\u529F\u80FD\u5C31\u662F\u5982\u679C<code>implements ShouldQueue</code>\u8FD9\u4E2A\u63A5\u53E3\u7684\u8BDD\u5C31\u4F1A\u5F02\u6B65\u961F\u5217\u6267\u884C\uFF0C\u5982\u679C\u53BB\u6389\u7684\u8BDD\u5C31\u662F\u540C\u6B65\u6267\u884C\u3002\u5F88\u65B9\u4FBF\u6709\u6CA1\u6709\uFF0C\u8FD9\u6837\u4EE3\u7801\u5C31\u89E3\u8026\u4E86\uFF0C\u4E0D\u9700\u8981\u518D\u7BA1\u6CE8\u518C\u4EE3\u7801\u4E86\uFF0C\u5728\u8FD9\u91CC\u5C31\u80FD\u5F88\u65B9\u4FBF\u7684\u7BA1\u7406\u4E86\u3002\u591A\u4EBA\u5F00\u53D1\u4E5F\u662F\u5355\u72EC\u5199\u81EA\u5DF1\u7684Listeners\u5C31\u53EF\u4EE5\u4E86\u3002</p>`,28);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
