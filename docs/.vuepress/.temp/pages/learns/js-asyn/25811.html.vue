<template><h1 id="宏任务-macrotask-和微任务-microtask" tabindex="-1"><a class="header-anchor" href="#宏任务-macrotask-和微任务-microtask" aria-hidden="true">#</a> 宏任务 macroTask 和微任务 microTask</h1>
<p>什么是宏任务，什么是微任务</p>
<ul>
<li>宏任务：setTimeout，setInterval，Ajax，DOM事件</li>
<li>微任务：Promise async/await</li>
<li>微任务执行时机比宏任务要早（记住）</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token comment">// 宏任务</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 微任务</span>
Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span>
<span class="token comment">// 100</span>
<span class="token comment">// 400</span>
<span class="token comment">// 300</span>
<span class="token comment">// 200</span>
</code></pre></div><p>event loop 和 DOM 渲染（再次回归一遍 event loop 的过程）</p>
<ul>
<li>JS 是单线程的，而且和 DOM 渲染共用一个线程</li>
<li>JS 执行的时候，得留一些时机供 DOM 渲染</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hi'</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">cb1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'cb1'</span><span class="token punctuation">)</span> <span class="token comment">// cb1 即 callback</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">5000</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Bye'</span><span class="token punctuation">)</span>
</code></pre></div><p><img src="@source/learns/js-asyn/images/2402844147.png" alt=""></p>
<blockquote>
<p>每次 Call Stack 清空（即每次轮询结束），即同步任务执行完；都是 DOM 重新渲染的机会，DOM 结构如有改变则重新渲染；然后再去触发下一次 Event Loop</p>
</blockquote>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> $p1 <span class="token operator">=</span> <span class="token string">'&lt;p>一段文字&lt;/p>'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> $p2 <span class="token operator">=</span> <span class="token string">'&lt;p>一段文字&lt;/p>'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> $p3 <span class="token operator">=</span> <span class="token string">'&lt;p>一段文字&lt;/p>'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> $container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'container'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
$container<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>$p1<span class="token punctuation">)</span>
$container<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>$p2<span class="token punctuation">)</span>
$container<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>$p3<span class="token punctuation">)</span>
<span class="token comment">// length 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'length'</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'container'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
<span class="token comment">// （alert 会阻断 js 执行，也会阻断 DOM 渲染，便于查看效果）</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'本次 call stack 结束，DOM 结构已更新，但尚未触发渲染'</span><span class="token punctuation">)</span>
</code></pre></div><p>微任务和宏任务的区别</p>
<ul>
<li>宏任务：DOM 渲染后触发，如 setTimeout</li>
<li>微任务：DOM 渲染前触发，如 Promise，代码演示：</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> $p1 <span class="token operator">=</span> <span class="token string">'&lt;p>一段文字&lt;/p>'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> $p2 <span class="token operator">=</span> <span class="token string">'&lt;p>一段文字&lt;/p>'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> $p3 <span class="token operator">=</span> <span class="token string">'&lt;p>一段文字&lt;/p>'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> $container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'container'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
$container<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>$p1<span class="token punctuation">)</span>
$container<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>$p2<span class="token punctuation">)</span>
$container<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>$p3<span class="token punctuation">)</span>
<span class="token comment">// 微任务：DOM 渲染前触发</span>
Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token comment">// length1 3</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'length1'</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'container'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Promise then'</span><span class="token punctuation">)</span> <span class="token comment">// DOM 渲染了吗？ - No</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 宏任务：DOM 渲染后触发</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token comment">// length2 6</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'length2'</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'container'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'setTimeout'</span><span class="token punctuation">)</span> <span class="token comment">// DOM 渲染了吗？ - Yes</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>从 event loop 解释，为何微任务执行更早？</p>
<ul>
<li>微任务是 ES6 语法规定的</li>
<li>宏任务是由浏览器规定的</li>
</ul>
<p><img src="@source/learns/js-asyn/images/1071566183.png" alt=""></p>
<p><img src="@source/learns/js-asyn/images/2287511774.png" alt=""></p>
</template>
