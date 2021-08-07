<template><h1 id="js-执行字符串函数" tabindex="-1"><a class="header-anchor" href="#js-执行字符串函数" aria-hidden="true">#</a> js 执行字符串函数</h1>
<p>在某些情况下，传递函数名之后，接收的不是函数而是函数名的字符串类型；</p>
<h4 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法：</h4>
<p><strong>1. eval（不推荐）</strong><br>
eval方法—用来执行字符串代表的 javascript 代码。<br>
如果传递的不是字符串的话，会直接返回传值，而非调用。</p>
<p>例如：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token function">alert</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//如果param是值；</span>
<span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">'test("param")'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//如果param是变量；</span>
<span class="token keyword">var</span> param <span class="token operator">=</span> <span class="token string">'B'</span><span class="token punctuation">;</span>
<span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">'test(param)'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//会查找名为param的变量，如果找不到会抛出异常 </span>
</code></pre></div><p><strong>2. 把方法名看成属性名（推荐）</strong><br>
由于eval 效率低下以及不安全性，正常情况下我们并不会直接使用这种方法来调用一个函数。由于函数在javascript 里面可以被保存在对象中，因此通过对象的属性访问将会是更好的选择。</p>
<p>说明：</p>
<p>1、全局函数声明会变成全局对象的属性。<br>
全局对象是在进入执行上下文前创建的一个唯一的对象。<br>
在浏览器运行环境中，全局对象就是window对象。<br>
2、属性访问可以使用 点标记法 或者 括号标记法 ，其中，使用点访问时需要使用标识符，而使用括号访问时使用的是标识符对应的字符串。</p>
<p>例如：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
window<span class="token punctuation">[</span><span class="token string">'test'</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token string">'param'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//直接执行</span>
window<span class="token punctuation">[</span><span class="token string">'test'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span><span class="token string">'param'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//如果需要修改函数运行时的this </span>
</code></pre></div><p>如果函数是其他对象的属性，也是同理调用。</p>
<p>链接：<a href="https://www.jianshu.com/p/636000befcf3" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/636000befcf3<OutboundLink/></a></p>
</template>
