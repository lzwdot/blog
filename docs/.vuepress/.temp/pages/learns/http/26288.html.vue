<template><h1 id="描述一下-http-的缓存机制" tabindex="-1"><a class="header-anchor" href="#描述一下-http-的缓存机制" aria-hidden="true">#</a> 描述一下 http 的缓存机制</h1>
<p>关于缓存</p>
<ul>
<li>什么是缓存？把无需再请求一次的资源存一份在本地</li>
<li>为什么需要缓存？使页面加载更快，因为网络请求慢，不稳定</li>
<li>哪些资源可以被缓存？静态资源（js css img）</li>
</ul>
<p>强制缓存</p>
<p><img src="@source/learns/http/images/3838812698.png" alt=""></p>
<p>Cache-Control</p>
<ul>
<li>Response Headers 中</li>
<li>控制强制缓存的逻辑</li>
<li>例如 Cache-Control:max-age=31536000（单位是秒）</li>
<li>值：<strong>max-age，no-cache</strong>（不强制缓存），no-store（不强制缓存，也不用服务端缓存措施，不常用），private（最终用户缓存），public（中间的路由也可以缓存）</li>
</ul>
<p>Expires</p>
<ul>
<li>同在 Response Headers 中</li>
<li>同为控制缓存过期</li>
<li>已被 Cache-Control 代替</li>
</ul>
<p>协商缓存（对比缓存）</p>
<ul>
<li>服务端缓存策略</li>
<li>服务端判断客户端资源，是否和服务端资源一样</li>
<li>一致则返回 304，否则返回 200 和最新的资源<br>
<img src="@source/learns/http/images/1501089056.png" alt=""></li>
</ul>
<p>资源标识</p>
<ul>
<li>在 Response Headers 中，有两种</li>
<li>Last-Modified 资源的最后修改时间<br>
<img src="@source/learns/http/images/1619832831.png" alt=""></li>
<li>Etag 资源的唯一标识（<strong><code>nginx</code> 中 <code>etag</code> 由响应头的 <code>Last-Modified</code> 与 <code>Content-Length</code> 表示为十六进制组合而成</strong>）https://juejin.cn/post/6844904018012012552<br>
<img src="@source/learns/http/images/3247340338.png" alt=""></li>
</ul>
<p>Last-Modified 和 Etag</p>
<ul>
<li>会优先使用 Etag</li>
<li>Last-Modified 只能精确到秒级</li>
<li>如果资源被重新生成，而内容不变，则 Etag 更准确<br>
<img src="@source/learns/http/images/709619993.png" alt=""></li>
</ul>
<p>三种刷新操作</p>
<ul>
<li>正常操作：地址栏输入 url，跳转链接，前进后退等</li>
<li>手动刷新：F5，点击刷新按钮，右击菜单刷新</li>
<li>强制刷新：ctrl + F5</li>
</ul>
<p>不同刷新操作，不同的缓存策略</p>
<ul>
<li>正常操作：强制缓存有效，协商缓存有效</li>
<li>手动刷新：强制缓存失效，协商缓存有效</li>
<li>强制刷新：强制缓存失效，协商缓存失效</li>
</ul>
</template>
