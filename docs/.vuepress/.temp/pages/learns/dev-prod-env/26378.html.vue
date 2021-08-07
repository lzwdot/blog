<template><h1 id="从输入-url-到渲染出页面的整个过程" tabindex="-1"><a class="header-anchor" href="#从输入-url-到渲染出页面的整个过程" aria-hidden="true">#</a> 从输入 url 到渲染出页面的整个过程</h1>
<blockquote>
<p>参考：https://www.cnblogs.com/liutianzeng/p/10456865.html</p>
<p>1、浏览器的地址栏输入URL并按下回车<br>
2、浏览器查找当前URL是否存在缓存，并比较缓存是否过期<br>
3、DNS解析URL对应的IP<br>
4、根据IP建立TCP连接（三次握手）<br>
5、HTTP发起请求<br>
6、服务器处理请求，浏览器接收HTTP响应<br>
7、渲染页面，构建DOM树<br>
8、关闭TCP连接（四次挥手）</p>
</blockquote>
<p>加载资源的形式</p>
<ul>
<li>html 代码</li>
<li>媒体文件，如图片，视频等</li>
<li>javascript css 等</li>
</ul>
<p>加载资源的过程</p>
<ul>
<li>DNS 解析：域名 -&gt; IP 地址</li>
<li>浏览器根据 IP 地址向服务器发起 http 请求</li>
<li>服务器处理 http 请求，并返回给浏览器</li>
</ul>
<p>渲染页面的过程</p>
<ul>
<li>根据 HTML 代码生成 DOM Tree（文档对象化模型树）</li>
<li>根据 CSS 代码生成 CSSOM（CSS 对象模型）</li>
<li>将 DOM Tree 和 CSSOM 整合形成 Render Tree（渲染树）</li>
<li>根据 Render Tree 渲染页面</li>
<li>遇到 <code>&lt;script /&gt;</code> 则暂停渲染，优先加载并执行 JS 代码，完成再继续</li>
<li>直至把 Render Tree 渲染完成</li>
</ul>
<p>举例</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span><span class="token keyword">default</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token comment">// 暂时渲染，先执行 js 代码</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'container'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">'update by js'</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>p<span class="token operator">></span> test <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
</code></pre></div><blockquote>
<p>建议把 css 放在 head 中，把 js 放在 body 最后</p>
</blockquote>
</template>
