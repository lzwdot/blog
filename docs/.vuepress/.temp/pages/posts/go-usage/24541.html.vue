<template><h1 id="各大go-module代理仓库服务" tabindex="-1"><a class="header-anchor" href="#各大go-module代理仓库服务" aria-hidden="true">#</a> 各大Go Module代理仓库服务</h1>
<h4 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h4>
<p>go module公共代理仓库，代理并缓存go模块。你可以利用该代理来避免DNS污染导致的模块拉取缓慢或失败的问题，加速你的构建</p>
<h4 id="各大仓库地址" tabindex="-1"><a class="header-anchor" href="#各大仓库地址" aria-hidden="true">#</a> 各大仓库地址</h4>
<p>百度仓库：<a href="https://goproxy.baidu.com/" target="_blank" rel="noopener noreferrer">https://goproxy.baidu.com/<OutboundLink/></a></p>
<p>阿里云仓库：<a href="https://mirrors.aliyun.com/goproxy/" target="_blank" rel="noopener noreferrer">https://mirrors.aliyun.com/goproxy/<OutboundLink/></a></p>
<p>腾讯云仓库：<a href="https://mirrors.cloud.tencent.com/help/go.html" target="_blank" rel="noopener noreferrer">https://mirrors.cloud.tencent.com/help/go.html<OutboundLink/></a></p>
<p>Goproxy 中国：<a href="https://goproxy.cn" target="_blank" rel="noopener noreferrer">https://goproxy.cn<OutboundLink/></a></p>
<p>goproxy.io：<a href="https://goproxy.io/zh/" target="_blank" rel="noopener noreferrer">https://goproxy.io/zh/<OutboundLink/></a></p>
<h4 id="使用帮助" tabindex="-1"><a class="header-anchor" href="#使用帮助" aria-hidden="true">#</a> 使用帮助</h4>
<p>1.使用go1.11以上版本并开启go module机制</p>
<p>2.导出GOPROXY环境变量</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>go env <span class="token operator">-</span>w <span class="token constant">GO111MODULE</span><span class="token operator">=</span>on
go env <span class="token operator">-</span>w <span class="token constant">GOPROXY</span><span class="token operator">=</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>goproxy<span class="token operator">/</span><span class="token punctuation">,</span>direct
# 设置不走 proxy 的私有仓库，多个用逗号相隔（可选）
go env <span class="token operator">-</span>w <span class="token constant">GOPRIVATE</span><span class="token operator">=</span><span class="token operator">*</span><span class="token punctuation">.</span>corp<span class="token punctuation">.</span>example<span class="token punctuation">.</span>com
</code></pre></div></template>
