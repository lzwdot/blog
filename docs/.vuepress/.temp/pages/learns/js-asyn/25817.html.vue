<template><h1 id="async-await-是语法糖-异步的本质还是回调函数" tabindex="-1"><a class="header-anchor" href="#async-await-是语法糖-异步的本质还是回调函数" aria-hidden="true">#</a> async/await 是语法糖，异步的本质还是回调函数</h1>
<p>async/await 语法</p>
<ul>
<li>异步回调容易产生 callback hell（回调地狱）</li>
<li>Promise then catch 链式调用，但也是基于回调函数</li>
<li>async/await 是同步语法，彻底消灭回调函数，代码演示：</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//加载图片</span>
<span class="token keyword">function</span> <span class="token function">loadImg</span><span class="token punctuation">(</span><span class="token parameter">src</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span>
        img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        img<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> err <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">图片加载失败 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>src<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
            <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        img<span class="token punctuation">.</span>src <span class="token operator">=</span> src
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> p
<span class="token punctuation">}</span>
<span class="token keyword">const</span> src1 <span class="token operator">=</span> <span class="token string">'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'</span>
<span class="token keyword">const</span> src2 <span class="token operator">=</span> <span class="token string">'https://box.bdimg.com/static/fisp_static/common/img/searchbox/logo_news_276_88_1f9876a.png'</span>
<span class="token comment">// !用于解决报错 Uncaught TypeError: "https..." is not a function is not a function</span>
<span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 同步的写法</span>
    <span class="token keyword">const</span> img1 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">loadImg1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//也可以直接用 loadImg(src1)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>img1<span class="token punctuation">.</span>width<span class="token punctuation">,</span>img1<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
    <span class="token keyword">const</span> img2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">loadImg2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//也可以直接用 loadImg(src2)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>img2<span class="token punctuation">.</span>width<span class="token punctuation">,</span>img2<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">loadImg1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> img1 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">loadImg</span><span class="token punctuation">(</span>src1<span class="token punctuation">)</span>
    <span class="token keyword">return</span> img1
<span class="token punctuation">}</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">loadImg2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> img2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">loadImg</span><span class="token punctuation">(</span>src2<span class="token punctuation">)</span>
    <span class="token keyword">return</span> img2
<span class="token punctuation">}</span>
</code></pre></div><p>async/await 和 Promise 的关系</p>
<ul>
<li>async/await 是消灭异步回调的终极武器</li>
<li>但和 Promise 并不互斥，反而两者相辅相成</li>
<li>执行 async 函数，返回的是 Promise 对象</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">100</span>
    <span class="token comment">// return Promise.resolve(200)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> res1 <span class="token operator">=</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 执行 async 函数，返回 Promise 对象</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'res1'</span><span class="token punctuation">,</span>res1<span class="token punctuation">)</span> <span class="token comment">// res1 Promise</span>
res1<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'data1'</span><span class="token punctuation">,</span>data<span class="token punctuation">)</span> <span class="token comment">// data1 100</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ul>
<li>await 相当于 Promise 的 then</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">100</span>
    <span class="token comment">// return Promise.resolve(200)</span>
<span class="token punctuation">}</span>
<span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> p1 <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> p1 <span class="token comment">// await 相当于 Promise then</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span>data<span class="token punctuation">)</span> <span class="token comment">// data 300</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> data1 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token number">400</span> <span class="token comment">// 直接返回 400</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span>data1<span class="token punctuation">)</span> <span class="token comment">// data 400</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> data2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// await 相当于 Promise.resolve(100)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span>data2<span class="token punctuation">)</span> <span class="token comment">// data 100</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><ul>
<li>try...catch 可捕获异常，代替了 Promise 的 catch</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> p4 <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">'err'</span><span class="token punctuation">)</span> <span class="token comment">// rejected状态</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> res4 <span class="token operator">=</span> <span class="token keyword">await</span> p4
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'res4'</span><span class="token punctuation">,</span> res4<span class="token punctuation">)</span> <span class="token comment">// 不执行</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'err4'</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span> <span class="token comment">//err4 err try…catch 相当于 Promise catch</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 没有 try…catch 无法捕获错误</span>
<span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> p5 <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">'err1'</span><span class="token punctuation">)</span> <span class="token comment">// rejected状态</span>
    <span class="token keyword">const</span> res5 <span class="token operator">=</span> <span class="token keyword">await</span> p5 <span class="token comment">// await -> then，下面不会执行</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'res5'</span><span class="token punctuation">,</span>res5<span class="token punctuation">)</span> <span class="token comment">// 不执行</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>异步的本质</p>
<ul>
<li>async/await 是消灭异步回调的终极武器</li>
<li>JS 还是单线程，还得是有异步，还得是基于 event loop</li>
<li>async/await 只是一个语法糖，代码演示：</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'async1 start'</span><span class="token punctuation">)</span> <span class="token comment">// step 2</span>
    <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//undefined</span>
    <span class="token comment">// await 的后面，都可以看做是 callback 里的内容，即异步</span>
    <span class="token comment">// 类似 event loop，setTimeout(function(){ console.log('async1 end')})</span>
    <span class="token comment">// 或 Promise.resolve().then(()=>{console.log('async1 end')})</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'async1 end'</span><span class="token punctuation">)</span> <span class="token comment">// step 5</span>
<span class="token punctuation">}</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'async2'</span><span class="token punctuation">)</span> <span class="token comment">// step 3</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'script start'</span><span class="token punctuation">)</span> <span class="token comment">// step 1</span>
<span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'script end'</span><span class="token punctuation">)</span> <span class="token comment">// step 4</span>
<span class="token comment">// 同步代码已经执行完（event loop）</span>
<span class="token comment">// script start</span>
<span class="token comment">// async1 start</span>
<span class="token comment">// async2</span>
<span class="token comment">// script end</span>
<span class="token comment">// async1 end</span>
</code></pre></div><p>再看一个例子：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'async1 start'</span><span class="token punctuation">)</span> <span class="token comment">// step 2</span>
    <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 下面都是异步回调 callback 的内容</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'async1 end'</span><span class="token punctuation">)</span> <span class="token comment">// step 5</span>
    <span class="token keyword">await</span> <span class="token function">async3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 下面都是异步回调 callback 的内容</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'async1 end 2'</span><span class="token punctuation">)</span> <span class="token comment">// step 7</span>
<span class="token punctuation">}</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'async2'</span><span class="token punctuation">)</span> <span class="token comment">// step 3</span>
<span class="token punctuation">}</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'async3'</span><span class="token punctuation">)</span> <span class="token comment">// step 6</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'script start'</span><span class="token punctuation">)</span> <span class="token comment">// step 1</span>
<span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'script end'</span><span class="token punctuation">)</span> <span class="token comment">// step 4</span>
<span class="token comment">// 同步代码已经执行完（event loop）</span>
<span class="token comment">// script start</span>
<span class="token comment">// async1 start</span>
<span class="token comment">// async2</span>
<span class="token comment">// script end</span>
<span class="token comment">// async1 end</span>
<span class="token comment">// async3</span>
<span class="token comment">// async1 end 2</span>
</code></pre></div><p>补充 for ... of 异步的使用</p>
<ul>
<li>for ... in （以及 forEach for ）是常规的同步遍历</li>
<li>for ... of 常用于异步的遍历</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">muti</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span>num <span class="token operator">*</span> num<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
nums<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// 1秒后同步执行</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">muti</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// 相当于 Promise 的 then</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token comment">// 1 4 9</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 1秒执行一个</span>
        <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">muti</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// 相当于 Promise 的 then</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token comment">// 1 4 9</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div></template>
