<template><h1 id="跨域的常用实现方式" tabindex="-1"><a class="header-anchor" href="#跨域的常用实现方式" aria-hidden="true">#</a> 跨域的常用实现方式</h1>
<p>同源策略</p>
<ul>
<li>ajax 请求时，浏览器要求当前网页和 sever 必须同源（安全）</li>
<li>同源：协议，域名，端口，三者必须一致</li>
<li>不同源，前端：http://a.com:8080/；server：https://b.com/api/xxx</li>
</ul>
<p>加载图片 css js 可无视同源策略</p>
<ul>
<li>图片可能防盗链</li>
<li>可用于统计打点，可使用第三方统计服务</li>
<li>
<link /> <script /> 可以使用 CDN，CDN 一般都是外域
</li>
<li>
</li>
</ul>
<p>跨域</p>
<ul>
<li>所有的跨域，都必须经过 sever 端允许和配合</li>
<li>未经 server 端允许就实现跨域，说明浏览器有漏洞，危险信号</li>
</ul>
<p>JSONP 跨域方式</p>
<ul>
<li>
</li>
<li>服务器可以任意动态拼接数据返回</li>
<li>所以，<script /> 就可以获得跨域的数据，只要服务器愿意返回</li>
</ul>
<p>演示，准备一个 http://test.com/test/jsonp.php：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>echo $_GET<span class="token punctuation">[</span><span class="token string">'callback'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token string">'({name: "zhangsan"})'</span><span class="token punctuation">;</span>
</code></pre></div><p>前端使用 jsonp 跨域</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
    window<span class="token punctuation">.</span><span class="token function-variable function">abc</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token comment">// {name: "zhangsan"}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"http://test.com/test/jsonp.php?callback=bac"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div><p>CORS - 服务器设置 http header 跨域</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 允许所有网站跨域访问，一般不建议直接写“*”</span>
response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Access-Control-Allow-Origin"</span><span class="token punctuation">,</span> <span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Access-Control-Expose-Headers"</span><span class="token punctuation">,</span> <span class="token string">"X-Requested-With"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Access-Control-Allow-Methods"</span><span class="token punctuation">,</span> <span class="token string">"POST, GET, OPTIONS, DELETE"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 接收跨域的 cookie</span>
response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Access-Control-Allow-Credentials"</span><span class="token punctuation">,</span> <span class="token string">"true"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>代理 - 比如使用 Nginx，webpack等代理</p>
</template>

<script /> 可实现 JSONP

<script /> 可绕过跨域限制
