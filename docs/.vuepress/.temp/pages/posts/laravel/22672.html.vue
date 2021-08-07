<template><h1 id="laravel对get请求进行csrf检验" tabindex="-1"><a class="header-anchor" href="#laravel对get请求进行csrf检验" aria-hidden="true">#</a> Laravel对get请求进行csrf检验</h1>
<p>Laravel的csrf防护默认排除了get方法，可以在VerifyCsrfToken.php中看到：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Determine if the HTTP request uses a ‘read’ verb.
 *
 * <span class="token keyword">@param</span>  <span class="token parameter">IlluminateHttpRequest</span>  $request
 * <span class="token keyword">@return</span> bool
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function">isReading</span><span class="token punctuation">(</span><span class="token parameter">$request</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">in_array</span><span class="token punctuation">(</span>$request<span class="token operator">-</span><span class="token operator">></span><span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'HEAD'</span><span class="token punctuation">,</span> <span class="token string">'GET'</span><span class="token punctuation">,</span> <span class="token string">'OPTIONS'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>以上的意思是数组中的方法都不使用csrf校验，我们可以增加一个中间件来自定义csrf检验方法：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>namespace AppHttpMiddleware<span class="token punctuation">;</span>
use Closure<span class="token punctuation">;</span>
use IlluminateFoundationHttpMiddlewareVerifyCsrfToken<span class="token punctuation">;</span>
use IlluminateSessionTokenMismatchException<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">AuthCsrf</span> <span class="token keyword">extends</span> <span class="token class-name">VerifyCsrfToken</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Handle an incoming request.
     *
     * <span class="token keyword">@param</span>  <span class="token parameter">IlluminateHttpRequest</span>  $request
     * <span class="token keyword">@param</span>  <span class="token parameter">Closure</span>  $next
     * <span class="token keyword">@return</span> mixed
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token parameter">$request<span class="token punctuation">,</span> Closure $next</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">in_array</span><span class="token punctuation">(</span>$request<span class="token operator">-</span><span class="token operator">></span><span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'POST'</span><span class="token punctuation">,</span> <span class="token string">'GET'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> $<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">tokensMatch</span><span class="token punctuation">(</span>$request<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">$next</span><span class="token punctuation">(</span>$request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TokenMismatchException</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>以上针对get，post方法都进行csrf校验</p>
</template>
