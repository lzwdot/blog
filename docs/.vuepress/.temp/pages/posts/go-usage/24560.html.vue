<template><h1 id="go-解析多层级-json-后嵌套-map-的取值问题" tabindex="-1"><a class="header-anchor" href="#go-解析多层级-json-后嵌套-map-的取值问题" aria-hidden="true">#</a> go 解析多层级 json 后嵌套 map 的取值问题</h1>
<p>有这么一段多级 json 字符</p>
<blockquote>
<p>[&quot;base&quot;:{&quot;captcha&quot;:1 &quot;lottery_open&quot;:1}}</p>
</blockquote>
<p>使用 go 来处理多层级的 json 数据</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>tempMap <span class="token operator">:</span><span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span>map<span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
err <span class="token operator">:</span><span class="token operator">=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token operator">&amp;</span>tempMap<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> nil <span class="token punctuation">{</span>
   <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>tempMap<span class="token punctuation">)</span>
</code></pre></div><p>得到的是 map 格式嵌套的数据</p>
<blockquote>
<p>map[base:map[captcha:1 lottery_open:1]]</p>
</blockquote>
<p>这个时候取值是个问题，目前个人所用比较笨的办法就是强行类型转换</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token string">"base"</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">(</span>map<span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">"captcha"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div></template>
