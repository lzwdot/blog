<template><h1 id="windows下go编译成linux可执行文件" tabindex="-1"><a class="header-anchor" href="#windows下go编译成linux可执行文件" aria-hidden="true">#</a> windows下go编译成linux可执行文件</h1>
<p><strong>如果编译报错：</strong></p>
<blockquote>
<p>cmd/go: unsupported GOOS/GOARCH pair linux /amd64</p>
<p>是因为在 SET GOOS=linux 这句后面多了个空格（直接复制的命令。。。）</p>
</blockquote>
<p><strong>先执行</strong>：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token constant">SET</span> <span class="token constant">CGO_ENABLED</span><span class="token operator">=</span><span class="token number">0</span>
</code></pre></div><p>然后再执行</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token constant">SET</span> <span class="token constant">GOOS</span><span class="token operator">=</span>linux 
<span class="token constant">SET</span> <span class="token constant">GOARCH</span><span class="token operator">=</span>amd64
go build 
</code></pre></div><p>参考：<a href="https://www.rootop.org/pages/4328.html" target="_blank" rel="noopener noreferrer">https://www.rootop.org/pages/4328.html<OutboundLink/></a></p>
</template>
