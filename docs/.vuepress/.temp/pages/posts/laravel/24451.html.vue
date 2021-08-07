<template><h1 id="laravel-5-5-42-版本后-errorexception-e-warning-openssl-encrypt-的问题" tabindex="-1"><a class="header-anchor" href="#laravel-5-5-42-版本后-errorexception-e-warning-openssl-encrypt-的问题" aria-hidden="true">#</a> Laravel 5.5.42 版本后 ErrorException (E_WARNING) openssl_encrypt() 的问题</h1>
<p>如果使用 Laravel 5.5 版本，执行 <code>composer update</code> 后出现ErrorException (E_WARNING) openssl_encrypt() 的问题：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token function">ErrorException</span> <span class="token punctuation">(</span><span class="token constant">E_WARNING</span><span class="token punctuation">)</span>
<span class="token function">openssl_encrypt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> expects parameter <span class="token number">1</span> to be string<span class="token punctuation">,</span> array given
</code></pre></div><p>一般原因是 Laravel 新版为了防止 PHP 对象的序列化/反序列化漏洞被利用，不再对 Cookie 值进行自动的序列化和反序列化处理。 参考 （<a href="https://link.zhihu.com/?target=https%3A//laravel.com/docs/5.5/upgrade%23upgrade-5.5.42" target="_blank" rel="noopener noreferrer">Laravel 5.5 Upgrade Guide<OutboundLink/></a>）</p>
<p><strong>解决方法</strong></p>
<p>对于<strong>老项目</strong>，建议在中间件 <code>AppHttpMiddlewareEncryptCookies</code> 设置开启 Cookie 值的自动序列化和反序列化处理参数 <code>$serialize</code></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">EncryptCookies</span> <span class="token keyword">extends</span> <span class="token class-name">Middleware</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">static</span> $serialize <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * The names of the cookies that should not be encrypted.
     *
     * <span class="token keyword">@var</span> array
     */</span>
    <span class="token keyword">protected</span> $except <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>新项目</strong>则建议将 Cookie 值使用 JSON 函数处理下，比如：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Cookie<span class="token operator">:</span><span class="token operator">:</span><span class="token function">queue</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span> <span class="token function">json_encode</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'name'</span> <span class="token operator">=></span> <span class="token string">'user1'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>为了安全，建议再执行一次 <code>php artisan key:generate</code> 重新生成 <code>APP_KEY</code>使之前加密数据失效。</p>
</template>
