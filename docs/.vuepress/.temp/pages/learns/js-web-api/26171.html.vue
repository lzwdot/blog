<template><h1 id="手写一个简易的-ajax" tabindex="-1"><a class="header-anchor" href="#手写一个简易的-ajax" aria-hidden="true">#</a> 手写一个简易的 ajax</h1>
<p>先解释 xhr.readyState</p>
<ul>
<li>0-（未初始化）还没有调用 send() 方法</li>
<li>1-（载入）已调用 send() 方法，正在发送请求</li>
<li>2-（载入完成）send() 方法执行完成，已经接收到全部响应内容</li>
<li>3-（交互）正在解析响应内容</li>
<li>4-（完成）响应内容解析完成，可以在客户端调用</li>
</ul>
<p>再解释 xhr.status</p>
<ul>
<li>2xx- 表示成功处理请求，如 200</li>
<li>3xx- 需要重定向，浏览器直接跳转，如 301 302 304</li>
<li>4xx- 客户端请求错误，如 404 403</li>
<li>5xx- 服务器端错误</li>
</ul>
<p>先准备一个数据：<a href="http://test.com//test/test.json" target="_blank" rel="noopener noreferrer">http://test.com//test/test.json<OutboundLink/></a></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string">"name"</span><span class="token operator">:</span><span class="token string">"zhangsan"</span>
<span class="token punctuation">}</span>
</code></pre></div><p>get 请求演示：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// get请求，true 表示异步</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> <span class="token string">'/test/test.json'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token comment">//200 {name: "zhangsan"}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status<span class="token punctuation">,</span> <span class="token string">'其他情况'</span><span class="token punctuation">)</span>
            <span class="token comment">// 404 "其他情况"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
</code></pre></div><p>post 请求演示：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// post请求，无法演示，true 表示异步</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'POST'</span><span class="token punctuation">,</span> <span class="token string">'/login'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token comment">// 登录成功提示</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status<span class="token punctuation">,</span> <span class="token string">'其他情况'</span><span class="token punctuation">)</span>
            <span class="token comment">// 404 "其他情况"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> postData <span class="token operator">=</span> <span class="token punctuation">{</span>
    username<span class="token operator">:</span> <span class="token string">'zhangsan'</span><span class="token punctuation">,</span>
    password<span class="token operator">:</span> <span class="token string">'xxx'</span>
<span class="token punctuation">}</span>
<span class="token comment">//注意，需要把 json 转字符串</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>postData<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><p>手写一个 ajax 函数，增加 Promise 的封装</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
        xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">404</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'404 not found'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> p
<span class="token punctuation">}</span>
<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">'/test/test.json'</span>
<span class="token function">ajax</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token comment">// {name: "zhangsan"}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token comment">// '404 not found'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>实际项目中 ajax 的常用插件</p>
<ul>
<li>jQuery：<a href="https://www.w3school.com.cn/jquery/ajax_ajax.asp" target="_blank" rel="noopener noreferrer">https://www.w3school.com.cn/jquery/ajax_ajax.asp<OutboundLink/></a></li>
<li>Fetch 是新的 API：<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch<OutboundLink/></a></li>
<li>axios：<a href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">https://github.com/axios/axios<OutboundLink/></a></li>
</ul>
</template>
