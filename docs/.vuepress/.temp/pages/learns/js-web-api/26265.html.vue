<template><h1 id="描述-cookie-localstorage-sessionstorage-区别" tabindex="-1"><a class="header-anchor" href="#描述-cookie-localstorage-sessionstorage-区别" aria-hidden="true">#</a> 描述 cookie localStorage sessionStorage 区别</h1>
<p>cookie</p>
<ul>
<li>本身用于浏览器和 sever 通讯</li>
<li>被“借用”到本地存储来</li>
<li>可用 document.cookie='...' 来修改</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">'a=100'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>cookie<span class="token punctuation">)</span> <span class="token comment">// a=100</span>
document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">'b=200'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>cookie<span class="token punctuation">)</span> <span class="token comment">// a=100; b=200</span>
document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">'a=300'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>cookie<span class="token punctuation">)</span> <span class="token comment">// b=200; a=300</span>
</code></pre></div><ul>
<li>缺点：存储大小，最大 4KB</li>
<li>http 请求时需要发送到服务器，增加请求数据量，在 Request Headers 会带上 <code>Cookie: b=200; a=300</code></li>
<li>只能用 document.cookie='...' 来修改，太过简陋</li>
</ul>
<p>localStorage 和 sessionStorage</p>
<ul>
<li>HTML5 专门为存储而设计，最大可存 5M</li>
<li>API 简单易用 setItem getItem</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span><span class="token string">'100'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 100</span>
sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">,</span><span class="token string">'200'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 200</span>
</code></pre></div><ul>
<li>不会随着 http 请求被发送出去</li>
<li>localStorage 数据会永久存储，除非代码或手动删除</li>
<li>sessionStorage 数据只会存于当前会话，浏览器关闭则清空</li>
<li>一般用 localStorage会更多一些</li>
</ul>
<p>cookie localStorage sessionStorage 区别</p>
<ul>
<li>最大容量，cookie：4KB，localStorage 和 sessionStorage：5M</li>
<li>API 易用性：cookie：只有 document.cookie 操作，localStorage 和 sessionStorage：有setItem getItem 等API</li>
<li>cookie 会随着 http 请求被发送出去，localStorage 和 sessionStorage 不会</li>
</ul>
</template>
