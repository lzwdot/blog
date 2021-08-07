<template><h1 id="css属性white-space、word-wrap和word-break" tabindex="-1"><a class="header-anchor" href="#css属性white-space、word-wrap和word-break" aria-hidden="true">#</a> css属性white-space、word-wrap和word-break</h1>
<p>有时会用到文本换行，但新增了css3的属性，导致傻傻分不清楚，总结下white-space、word-wrap和word-break使用</p>
<h3 id="white-space" tabindex="-1"><a class="header-anchor" href="#white-space" aria-hidden="true">#</a> white-space</h3>
<p>如何处理文本中的空白符（比如空格和换行符）。</p>
<blockquote>
<p>常用:normal | nowrap</p>
</blockquote>
<ul>
<li>normal 默认。空白会被浏览器忽略。</li>
<li>nowrap 文本不会换行，文本会在在同一行上继续，直到遇到标签为止。</li>
</ul>
<p>常用场景：单行文本溢出使用省略号代替</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>css<span class="token punctuation">{</span>
    text<span class="token operator">-</span>overflow<span class="token operator">:</span>ellipsis<span class="token punctuation">;</span>
    white<span class="token operator">-</span>space<span class="token operator">:</span>nowrap<span class="token punctuation">;</span>
    overflow<span class="token operator">:</span>hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>关于多行文本溢出使用省略号代替，则利用-webkit-line-clamp：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>css<span class="token punctuation">{</span>
    overflow<span class="token operator">:</span> hidden<span class="token punctuation">;</span>
    text<span class="token operator">-</span>overflow<span class="token operator">:</span> ellipsis<span class="token punctuation">;</span>
    display<span class="token operator">:</span> <span class="token operator">-</span>webkit<span class="token operator">-</span>box<span class="token punctuation">;</span>
    <span class="token operator">-</span>webkit<span class="token operator">-</span>line<span class="token operator">-</span>clamp<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token operator">-</span>webkit<span class="token operator">-</span>box<span class="token operator">-</span>orient<span class="token operator">:</span> vertical<span class="token punctuation">;</span>
    <span class="token comment">/*英文强制换行*/</span>
    word<span class="token operator">-</span>wrap<span class="token operator">:</span><span class="token keyword">break</span><span class="token operator">-</span>word<span class="token punctuation">;</span>
    word<span class="token operator">-</span><span class="token keyword">break</span><span class="token operator">:</span><span class="token keyword">break</span><span class="token operator">-</span>all<span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>总结：white-space用来设置CJK(中文、日文、韩文)文本是否不折行，实际中大多是要用white-space:nowrap来让文本不折行。</p>
<h3 id="word-wrap" tabindex="-1"><a class="header-anchor" href="#word-wrap" aria-hidden="true">#</a> word-wrap</h3>
<p>css3属性，允许长单词或 URL 地址换行到下一行。</p>
<blockquote>
<p>常用:normal | break-word</p>
</blockquote>
<ul>
<li>normal 只在允许的断字点换行（浏览器保持默认处理）。</li>
<li>break-word 在长单词或 URL 地址内部进行换行。</li>
</ul>
<p>总结：word-wrap用来设置非CJK文本是否折行（因为CJK文本会自动折行），如果空间足够，不会对单词内部进行截断</p>
<h3 id="word-break" tabindex="-1"><a class="header-anchor" href="#word-break" aria-hidden="true">#</a> word-break</h3>
<p>css3属性，规定自动换行的处理方法。</p>
<blockquote>
<p>常用:normal | break-all | keep-all</p>
</blockquote>
<ul>
<li>normal 使用浏览器默认的换行规则。</li>
<li>break-all 允许在单词内换行。</li>
<li>keep-all 只能在半角空格或连字符处换行。</li>
</ul>
<p>总结：word-break用来设置非CJK文本是否折行，可以使用break-all对单词内部进行折行</p>
<blockquote>
<p>PS:如果用了white-space为nowrap，设置其他的强制折行（word-break）是不起作用的，要将white-space设置为normal</p>
</blockquote>
</template>
