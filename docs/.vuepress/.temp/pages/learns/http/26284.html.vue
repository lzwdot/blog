<template><h1 id="http-常见的-header-有哪些" tabindex="-1"><a class="header-anchor" href="#http-常见的-header-有哪些" aria-hidden="true">#</a> http 常见的 header 有哪些？</h1>
<p>常见的 Request Headers</p>
<ul>
<li>Accept 浏览器可以接收的数据格式</li>
<li>Accept-Encoding 浏览器可接收的压缩算法，如 gzip</li>
<li>Accept-Languange 浏览器可接收的语言，如 zh-CN</li>
<li>Connection：keep-alive 一次 TCP 连接重复使用</li>
<li>cookie</li>
<li>Host 域名</li>
<li>User-Agent 简称 UA， 浏览器信息</li>
<li>Content-type 发送数据的格式，如 application/json</li>
</ul>
<p>常见的 Response Headers</p>
<ul>
<li>Content-type 返回数据的格式，如 application/json</li>
<li>Content-length 返回数据的大小，多少字节</li>
<li>Content-Encoding 返回数据的压缩算法，如 gzip</li>
<li>Set-Cookie</li>
</ul>
<p>自定义 header</p>
<p>如：<a href="http://axios-js.com/docs/#Request-Config" target="_blank" rel="noopener noreferrer">http://axios-js.com/docs/#Request-Config<OutboundLink/></a></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// `headers` are custom headers to be sent</span>
  headers<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string">'X-Requested-With'</span><span class="token operator">:</span> <span class="token string">'XMLHttpRequest'</span><span class="token punctuation">}</span>
</code></pre></div><p>缓存相关的 headers</p>
<ul>
<li>Cache-Control</li>
<li>Expires</li>
<li>Last-Modified</li>
<li>If-Modified-Since</li>
<li>Etag</li>
<li>If-None-Match</li>
</ul>
</template>
