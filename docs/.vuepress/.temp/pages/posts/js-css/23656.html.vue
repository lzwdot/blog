<template><h1 id="滑动错误提示-unable-to-preventdefault-inside-passive-event-listener-due-to-target-being-treated-as-passive" tabindex="-1"><a class="header-anchor" href="#滑动错误提示-unable-to-preventdefault-inside-passive-event-listener-due-to-target-being-treated-as-passive" aria-hidden="true">#</a> 滑动错误提示：Unable to preventDefault inside passive event listener due to target being treated as passive</h1>
<p>关于这个错误提示网上的文章很多，根据搜索和自己测试的结果情况，利用touch-action方法解决比较稳的一种：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>html <span class="token punctuation">{</span>
    touch<span class="token operator">-</span>action<span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>还有另外一种方式使用passive:false，如下代码：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'touchmove'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    passive<span class="token operator">:</span><span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> 
</code></pre></div><blockquote>
<p>这段代码本来只是解决错误提示问题，有没有跟我一样，以为是解决方案，就直接复制了，然后页面不动了，又到处搜索... ?</p>
</blockquote>
<p>其实这个 passive:false 就是告诉浏览器，要马上使用 e.preventDefault() 来阻止了 touchmove 默认行为（既滑动行为），所以，出现页面无法滑动属于正常</p>
</template>
