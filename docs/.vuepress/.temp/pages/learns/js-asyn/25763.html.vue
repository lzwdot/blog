<template><h1 id="请描述-event-loop-事件循环-事件轮询-的机制-可画图" tabindex="-1"><a class="header-anchor" href="#请描述-event-loop-事件循环-事件轮询-的机制-可画图" aria-hidden="true">#</a> 请描述 event loop（事件循环/事件轮询）的机制，可画图</h1>
<p>event loop（事件循环/事件轮询）</p>
<ul>
<li>JS 是单线程运行的</li>
<li>异步要基于回调来实现</li>
<li>event loop 就是异步回调的实现原理</li>
</ul>
<p>JS 如何执行？</p>
<ul>
<li>从前到后，一行一行执行</li>
<li>如果某一行执行报错，则停止下面代码的执行</li>
<li>先执行完同步代码，再执行异步</li>
</ul>
<p>event loop 的执行过程？</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hi'</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">cb1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'cb1'</span><span class="token punctuation">)</span> <span class="token comment">// cb1 即 callback</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">5000</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Bye'</span><span class="token punctuation">)</span>
</code></pre></div><ul>
<li>同步代码，一行一行放在 Call Stack 执行</li>
<li>遇到异步，会先“记录”下，等待时机（定时，网络请求等）</li>
<li>时机到了，就移动到 Callback Queue</li>
<li>如 Call Stack 为空（即同步代码执行完）Event Loop 开始工作</li>
<li>轮询查找 Callback Queue，如有则移动 Call Stack 执行</li>
<li>然后继续轮询查找（永动机一样）<br>
<img src="@source/learns/js-asyn/images/3989109606.png" alt=""></li>
</ul>
<p>DOM 事件和 event loop 的关系</p>
<ul>
<li>JS 是单线程的</li>
<li>异步（setTimeout，ajax等）使用回调，基于 event loop</li>
<li>DOM 事件也使用回调，基于 event loop</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">"btn"</span><span class="token operator">></span>点击<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hi'</span><span class="token punctuation">)</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'btn'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'clicked'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Bye'</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div><blockquote>
<p>以上代码通过点击事件把回调函数移动到 Callback Queue</p>
</blockquote>
</template>
