<template><h1 id="javascript中apply、call、bind区别" tabindex="-1"><a class="header-anchor" href="#javascript中apply、call、bind区别" aria-hidden="true">#</a> Javascript中apply、call、bind区别</h1>
<h3 id="简单对比" tabindex="-1"><a class="header-anchor" href="#简单对比" aria-hidden="true">#</a> 简单对比</h3>
<p>对于apply、call、bind 三者相比较，之间又有什么异同呢？何时使用 apply、call，何时使用 bind 呢。简单的一个栗子：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token number">81</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">getX</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span><span class="token function">getX</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//81</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span><span class="token function">getX</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//81</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span><span class="token function">getX</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//81 </span>
</code></pre></div><p>三个输出的都是81，但是注意看使用 bind() 方法的，他后面多了对括号。</p>
<p>也就是说，区别是，当你希望改变上下文环境之后并非立即执行，而是回调执行的时候，使用 bind() 方法。而 apply/call 则会立即执行函数。</p>
<p>总结一下：</p>
<ul>
<li>apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；</li>
<li>apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；</li>
<li>apply 、 call 、bind 三者都可以利用后续参数传参；</li>
<li>bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用 。</li>
</ul>
<p>原文：<a href="http://www.cnblogs.com/coco1s/p/4833199.html" target="_blank" rel="noopener noreferrer">http://www.cnblogs.com/coco1s/p/4833199.html<OutboundLink/></a></p>
<h3 id="详解-apply-和call-方法" tabindex="-1"><a class="header-anchor" href="#详解-apply-和call-方法" aria-hidden="true">#</a> 详解 apply()和call()方法</h3>
<p><strong>定义</strong></p>
<p><strong>apply()方法</strong>： Function.apply(obj,args)<br>
obj：这个对象将代替Function类里this对象<br>
args：这个是数组，它将作为参数传给Function(args--&gt;arguments）<br>
<strong>call()方法</strong>：</p>
<blockquote>
<p>Function.call(obj,[param1[,param2[,…[,paramN]]]])<br>
obj：这个对象将代替Function类里this对象<br>
params：这个是一个参数列表</p>
</blockquote>
<p><strong>相同点与不同点</strong></p>
<p>1、<strong>相同点</strong> 作用是一样的，call 和 apply 都是为了改变函数体内部 this 的指向，也就是把Function(即this)绑定到obj，这时候obj具备了Function的属性和方法，说白一点就是obj继承了Function的属性和方法。<br>
2、<strong>不同点</strong> 相信大家也已经发现了，他们唯一区别就是接受参数的方式不太一样，apply接受的是数组参数，call接受的是连续参数。</p>
<p><strong>方法使用</strong></p>
<p><strong>我们来看下面一个例子：</strong></p>
<p>定义一个函数mul</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mul</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token operator">+</span><span class="token punctuation">(</span>a<span class="token operator">*</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>接着我们在控制台上打印出</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">mul</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">mul</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">'s'</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">mul</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">mul</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">mul</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p>分别为：</p>
<blockquote>
<p>[object Window]6<br>
s6<br>
9<br>
[object Window]10<br>
12</p>
</blockquote>
<p>可能你会发现到，第一行 <strong>console.log(mul.call(null,2,3))</strong> 没什么变化，call()的第一个参数就是改变的 this 指向，如果为 null 则函数的 this 不变，注意，如果在严格模式下（函数体或全局的开头有这句话：'use strict'），this 会变成 null。如果函数本身有参数，则从 call 的第二个参数开始写起。<br>
第二行 <strong>console.log(mul.call('s',2,3))</strong> 将函数的 this 指向一个字符串 's'. ===&gt;&gt; 's'+2 * 3=s6<br>
第三行 <strong>console.log(mul.call(3,2,3))</strong> 将函数的this指向一个数字3<br>
===&gt;&gt; 3+2 * 3=9<br>
以此类推。</p>
<p><strong>再举一个例子</strong></p>
<p>学js的都知道 <strong>Math.max()</strong> 方法,比如有三个参数2,3,4那么我们要找出最大值可以这么写 <strong>Math.max(2,3,4)</strong> 那要是有 100 个或更多参数呢？这时候就可以结合 apply 和数组轻松实现了。</p>
<p>比如定义一个数组</p>
<blockquote>
<p>var arr=[2,3,4,5,6,7,8,9,10,23,45,66,22,11];</p>
</blockquote>
<p>接着我们打印出</p>
<blockquote>
<p>console.log(Math.max.apply(null,arr));</p>
</blockquote>
<p>这样一来就很简洁明了。</p>
<p><strong>再举一个例子实现对象继承</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token operator">=</span>age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token function-variable function">Student</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>gender</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//this继承了person的属性和方法</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>gender<span class="token operator">=</span>gender<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> student<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"陈安东"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">"男"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"姓名:"</span><span class="token operator">+</span>student<span class="token punctuation">.</span>name<span class="token operator">+</span>"
<span class="token string">"+"</span>年龄<span class="token operator">:</span><span class="token string">"+student.age+"</span>
<span class="token string">"+"</span>性别<span class="token operator">:</span>"<span class="token operator">+</span>student<span class="token punctuation">.</span>gender<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p>输出</p>
<blockquote>
<p>姓名:陈安东<br>
年龄:20<br>
性别:男</p>
</blockquote>
<p>这样用call就实现了继承（用apply也类似）</p>
<p>链接：<a href="https://www.jianshu.com/p/80ea0d1c04f8" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/80ea0d1c04f8<OutboundLink/></a></p>
</template>
