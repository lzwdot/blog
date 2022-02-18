import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="laravel\u5BF9get\u8BF7\u6C42\u8FDB\u884Ccsrf\u68C0\u9A8C" tabindex="-1"><a class="header-anchor" href="#laravel\u5BF9get\u8BF7\u6C42\u8FDB\u884Ccsrf\u68C0\u9A8C" aria-hidden="true">#</a> Laravel\u5BF9get\u8BF7\u6C42\u8FDB\u884Ccsrf\u68C0\u9A8C</h1><p>Laravel\u7684csrf\u9632\u62A4\u9ED8\u8BA4\u6392\u9664\u4E86get\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5728VerifyCsrfToken.php\u4E2D\u770B\u5230\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Determine if the HTTP request uses a \u2018read\u2019 verb.
 *
 * <span class="token keyword">@param</span>  <span class="token parameter">IlluminateHttpRequest</span>  $request
 * <span class="token keyword">@return</span> bool
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function">isReading</span><span class="token punctuation">(</span><span class="token parameter">$request</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">in_array</span><span class="token punctuation">(</span>$request<span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;HEAD&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;OPTIONS&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4EE5\u4E0A\u7684\u610F\u601D\u662F\u6570\u7EC4\u4E2D\u7684\u65B9\u6CD5\u90FD\u4E0D\u4F7F\u7528csrf\u6821\u9A8C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u589E\u52A0\u4E00\u4E2A\u4E2D\u95F4\u4EF6\u6765\u81EA\u5B9A\u4E49csrf\u68C0\u9A8C\u65B9\u6CD5\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>namespace AppHttpMiddleware<span class="token punctuation">;</span>
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
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">in_array</span><span class="token punctuation">(</span>$request<span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> $<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">tokensMatch</span><span class="token punctuation">(</span>$request<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">$next</span><span class="token punctuation">(</span>$request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TokenMismatchException</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4EE5\u4E0A\u9488\u5BF9get\uFF0Cpost\u65B9\u6CD5\u90FD\u8FDB\u884Ccsrf\u6821\u9A8C</p>`,6);function p(e,o){return t}var l=s(a,[["render",p]]);export{l as default};
