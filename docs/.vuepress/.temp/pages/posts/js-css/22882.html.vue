<template><h1 id="千分位转换的正则" tabindex="-1"><a class="header-anchor" href="#千分位转换的正则" aria-hidden="true">#</a> 千分位转换的正则</h1>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//每三位数逗号隔开</span>
<span class="token string">'123456789'</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">B(?=(d{3})+$)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">','</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre></div><p>结果：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token number">123</span><span class="token punctuation">,</span><span class="token number">456</span><span class="token punctuation">,</span><span class="token number">789</span> 
</code></pre></div><blockquote>
<p><code>B</code>：匹配非单词边界<br>
<code>(?=)</code>：正向零宽断言<br>
<code>d{3}</code>：匹配三个数字字符<br>
<code>+</code>：与前面的d{3}结合表示匹配3的整数倍个数字字符<br>
<code>$</code>：字符串结尾<br>
所以合起来的意思就是：匹配单词中的某个位置，这个位置之后的字符全部为数字，且出现次数是3的整数倍。</p>
</blockquote>
</template>
