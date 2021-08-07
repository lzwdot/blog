<template><h1 id="手写用-promise-加载一张图片" tabindex="-1"><a class="header-anchor" href="#手写用-promise-加载一张图片" aria-hidden="true">#</a> 手写用 Promise 加载一张图片</h1>
<p>使用 Promise 来解决 callback hell 回调地狱的问题，举例演示</p>
<p>先定义一个 Promise 的函数</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">loadImg</span><span class="token punctuation">(</span><span class="token parameter">src</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span>
        img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        img<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
            <span class="token keyword">const</span> err <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">图片加载失败 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>src<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
            <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
        img<span class="token punctuation">.</span>src <span class="token operator">=</span> src
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>然后怎么使用</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> url1 <span class="token operator">=</span> <span class="token string">'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'</span>
<span class="token keyword">const</span> url2 <span class="token operator">=</span> <span class="token string">'https://box.bdimg.com/static/fisp_static/common/img/searchbox/logo_news_276_88_1f9876a.png'</span>
<span class="token function">loadImg</span><span class="token punctuation">(</span>url1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">img1</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'img1.width '</span> <span class="token operator">+</span> img1<span class="token punctuation">.</span>width<span class="token punctuation">)</span>
    <span class="token keyword">return</span> img1
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">img1</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'img1.height '</span> <span class="token operator">+</span> img1<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token function">loadImg</span><span class="token punctuation">(</span>url2<span class="token punctuation">)</span> <span class="token comment">//promise实例解决 callback hell</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">img2</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'img2.width '</span> <span class="token operator">+</span> img2<span class="token punctuation">.</span>width<span class="token punctuation">)</span>
    <span class="token keyword">return</span> img2
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">img2</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'img2.height '</span> <span class="token operator">+</span> img2<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 3</span>
<span class="token comment">// 1</span>
<span class="token comment">// img1.width 540</span>
<span class="token comment">// img1.height 258</span>
<span class="token comment">// 3</span>
<span class="token comment">// 1</span>
<span class="token comment">// img2.width 276</span>
<span class="token comment">// img2.height 88</span>
</code></pre></div></template>
