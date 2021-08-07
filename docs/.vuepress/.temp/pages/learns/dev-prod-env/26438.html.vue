<template><h1 id="前端性能优化有哪些方式" tabindex="-1"><a class="header-anchor" href="#前端性能优化有哪些方式" aria-hidden="true">#</a> 前端性能优化有哪些方式</h1>
<p>性能优化原则</p>
<ul>
<li>多使用内存，缓存或其他方法</li>
<li>减少 CPU 计算量，减少网络加载耗时</li>
<li>（适用于所有编程的性能优化 —— 空间换时间）</li>
</ul>
<blockquote>
<p>从何下手：让加载更快，让渲染更快</p>
</blockquote>
<p>让加载更快</p>
<ul>
<li>减少资源体积：压缩代码</li>
<li>减少访问次数：合并代码，SSR 服务器端渲染，缓存</li>
<li>使用更快的网络：CDN</li>
</ul>
<p>让渲染更快</p>
<ul>
<li>CSS 放在 head，JS 放在 body 最下面</li>
<li>尽早开始执行 JS，用 DOMContentLoaded 触发</li>
<li>懒加载（图片懒加载，上滑加载更多）</li>
<li>对 DOM 查询进行缓存</li>
<li>频繁 DOM 操作，合并到一起插入 DOM 结构</li>
<li>使用节流 throttle 防抖 debounce</li>
</ul>
<blockquote>
<p>各种缓存详解</p>
</blockquote>
<p>资源合并</p>
<p>比如：a.js，b.js，c.js 合并为 abc.js</p>
<p>缓存，加 hash</p>
<ul>
<li>静态资源加 hash 后缀，根据文件内容计算 hash</li>
<li>文件内容不变，则 hash 不变，则 url 不变</li>
<li>url 和文件不变，则会自动触发 http 缓存机制，返回 304</li>
</ul>
<p>SSR</p>
<ul>
<li>服务器端渲染，将网页和数据一起加载，一起渲染</li>
<li>非 SSR（前后端分离）：先加载网页，再加载数据，再渲染数据</li>
<li>比如现在的 vue SSR</li>
</ul>
<p>CDN</p>
<p>比如：<a href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/1.4.0/css/bootstrap.css" target="_blank" rel="noopener noreferrer">https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/1.4.0/css/bootstrap.css<OutboundLink/></a></p>
<p>懒加载</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>img id<span class="token operator">=</span><span class="token string">"img"</span> data<span class="token operator">-</span>src<span class="token operator">=</span><span class="token string">"https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"</span> alt<span class="token operator">=</span><span class="token string">""</span><span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span>
    img<span class="token punctuation">.</span>src <span class="token operator">=</span> img<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'data-sr'</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div><p>缓存 DOM 查询</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 不缓存 DOM 查询结果</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 缓存 DOM 查询结果</span>
<span class="token keyword">const</span> length <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><p>多个 DOM 操作一起插入 DOM 结构</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> list <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'list'</span><span class="token punctuation">)</span>
<span class="token comment">// 创建一个文档片段，此时还没有插入到 DOM 结构中</span>
<span class="token keyword">const</span> frag <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createDocumentFragment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> li <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span>
    li<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">List item </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
    <span class="token comment">// 先插入到文档片段中</span>
    frag<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>li<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 都完成后，再统一插入到 DOM 结构中</span>
list<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>frag<span class="token punctuation">)</span>
</code></pre></div><p>尽早开始执行 JS</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'load'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 页面的全部资源加载完成才会执行，包括图片，视频等</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'DOMContentLoaded'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// DOM 渲染完后即可执行，此时图片，视频可能还没加载完</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p><img src="@source/learns/dev-prod-env/images/2151798436-59da4801c6772_fix732.png" alt=""></p>
</template>
