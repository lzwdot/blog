<template><h1 id="使用node-js的request库做代理" tabindex="-1"><a class="header-anchor" href="#使用node-js的request库做代理" aria-hidden="true">#</a> 使用Node.js的request库做代理</h1>
<p>首先安装 request 和 axios依赖， axios 用作ajax请求：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>cnpm install request <span class="token operator">--</span>save<span class="token operator">-</span>div
cnpm install axios <span class="token operator">--</span>save   
</code></pre></div><p>完成安装后，在项目根目录新建proxy.js的文件，配置代理：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'request'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> hostname <span class="token operator">=</span> <span class="token string">'127.0.0.1'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">8010</span><span class="token punctuation">;</span>
<span class="token comment">// 创建一个 API 代理服务</span>
<span class="token keyword">const</span> apiServer <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">'http://news-at.zhihu.com/api/4'</span> <span class="token operator">+</span> req<span class="token punctuation">.</span>url<span class="token punctuation">;</span>
    <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
        url<span class="token operator">:</span> url
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">callback</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> response<span class="token punctuation">,</span> body</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>error <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>statusCode <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 设置编码类型，否则中文会显示为乱码</span>
            res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span> <span class="token string">'text/plain;charset=UTF-8'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 设置所有域允许跨域</span>
            res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-Origin'</span><span class="token punctuation">,</span> <span class="token string">'*'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 返回代理后的内容</span>
            res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 监听 8010 端口</span>
apiServer<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> hostname<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">接口代理运行在 http://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>hostname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p>使用 axios 用作ajax请求 ，封装为util.js，代码如下：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> Util <span class="token operator">=</span> <span class="token punctuation">{</span>
    apiPath<span class="token operator">:</span> <span class="token string">'http://127.0.0.1:8010/'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// Ajax 通用配置</span>
Util<span class="token punctuation">.</span>ajax <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    baseURL<span class="token operator">:</span> Util<span class="token punctuation">.</span>apiPath
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 添加响应拦截器</span>
Util<span class="token punctuation">.</span>ajax<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Util<span class="token punctuation">;</span> 
</code></pre></div><p>然后在 vue.js 的组件中的测试代码：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>测试：<span class="token punctuation">{</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">import</span> $ <span class="token keyword">from</span> <span class="token string">'./util'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            data<span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         $<span class="token punctuation">.</span>ajax<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'themes'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> res<span class="token punctuation">.</span>limit<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span> 
</code></pre></div><p>分别在终端命令中启动代理，和启动服务：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>node <span class="token punctuation">.</span>proxy<span class="token punctuation">.</span>js
#成功显示日志：接口代理运行在 http<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">127.0.0.1:8010</span><span class="token regex-delimiter">/</span></span>
cnpm run dev
</code></pre></div></template>
