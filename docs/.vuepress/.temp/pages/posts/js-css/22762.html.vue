<template><h1 id="js数组合并的方法探讨" tabindex="-1"><a class="header-anchor" href="#js数组合并的方法探讨" aria-hidden="true">#</a> js数组合并的方法探讨</h1>
<p>我们在项目过程中，有时候会遇到需要将两个数组合并成为一个的情况。</p>
<p>比如：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 
</code></pre></div><p>有两个数组a、b，需求是将两个数组合并成一个。方法如下：</p>
<h3 id="_1、concat" tabindex="-1"><a class="header-anchor" href="#_1、concat" aria-hidden="true">#</a> 1、concat</h3>
<p>js的Array对象提供了一个叫concat()方法，连接两个或更多的数组，并返回结果。</p>
<p>var c = a.concat(b);//c=[1,2,3,4,5,6]</p>
<p>这里有一个问题，concat方法连接a、b两个数组后，a、b两个数组的数据不变，同时会返回一个新的数组。这样当我们需要进行多次的数组合并时，会造成很大的内存浪费，所以这个方法肯定不是最好的。</p>
<h3 id="_2、for循环" tabindex="-1"><a class="header-anchor" href="#_2、for循环" aria-hidden="true">#</a> 2、for循环</h3>
<p>大概的思路是：遍历其中一个数组，把该数组中的所有元素依次添加到另外一个数组中。直接上代码：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token keyword">in</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
    a<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>b<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>这样的写法可以解决第一种方案中对内存的浪费，但是会有另一个问题：丑！这么说不是没有道理，如果能只用一行代码就搞定，岂不快哉~</p>
<h3 id="_3、apply" tabindex="-1"><a class="header-anchor" href="#_3、apply" aria-hidden="true">#</a> 3、apply</h3>
<p>函数的apply方法有一个特性，那就是func.apply(obj,argv)，argv是一个数组。所以我们可以利用这点，直接上代码：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>a<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p>调用a.push这个函数实例的apply方法，同时把，b当作参数传入，这样a.push这个方法就会遍历b数组的所有元素，达到合并的效果。</p>
<p>这里可能有点绕，我们可以把b看成[4,5,6]，变成这样：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>a<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p>然后上面的操作就等同于：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>a<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p>这样就很清楚了！</p>
<h4 id="另外-还要注意两个小问题" tabindex="-1"><a class="header-anchor" href="#另外-还要注意两个小问题" aria-hidden="true">#</a> 另外，还要注意两个小问题：</h4>
<p>1）以上3种合并方法并没有考虑过a、b两个数组谁的长度更小。</p>
<p>所以好的做法是预先判断a、b两个数组哪个更大，然后使用大数组合并小数组，这样就减少了数组元素操作的次数！</p>
<p>2）有时候我们不希望原数组（a、b）改变，这时就只能使用concat了。</p>
</template>
