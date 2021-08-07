<template><h1 id="百度地图-bd-09-和腾讯地图-gcj-02-坐标系转换-php版" tabindex="-1"><a class="header-anchor" href="#百度地图-bd-09-和腾讯地图-gcj-02-坐标系转换-php版" aria-hidden="true">#</a> 百度地图（BD-09）和腾讯地图（GCJ-02）坐标系转换（PHP版）</h1>
<p>简单介绍一下常见的地理经纬度坐标系：</p>
<h3 id="wgs-84坐标系" tabindex="-1"><a class="header-anchor" href="#wgs-84坐标系" aria-hidden="true">#</a> <code>WGS-84</code>坐标系：</h3>
<p>是国际标准坐标系，<code>GPS</code>坐标（<code>Google Earth</code>使用、或者<code>GPS</code>模块）。</p>
<h3 id="gcj-02坐标系" tabindex="-1"><a class="header-anchor" href="#gcj-02坐标系" aria-hidden="true">#</a> <code>GCJ-02</code>坐标系：</h3>
<p>火星坐标系，<code>GCJ-02</code>是由中国国家测绘局制订的地理信息系统的坐标系统。它是一种对经纬度数据的加密算法，即加入随机的偏差。国内出版的各种地图系统（包括电子形式），出于国家安全考虑，必须至少采用<code>GCJ-02</code>对地理位置进行首次加密。国内腾讯地图和高德地图都采用了<code>GCJ-02</code>火星坐标系。</p>
<h3 id="bd-09坐标系" tabindex="-1"><a class="header-anchor" href="#bd-09坐标系" aria-hidden="true">#</a> <code>BD-09</code>坐标系：</h3>
<p>百度坐标系，也就是在<code>GCJ-02</code>的基础上，进行了<code>BD-09</code>二次加密措施生成的一种坐标系。</p>
<p><code>GCJ-02</code>(火星，腾讯) 坐标和<code>BD-09</code>(百度) 坐标相互转换的函数<code>PHP</code>版本：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code> <span class="token comment">/*
 中国正常GCJ02坐标---->百度地图BD09坐标
 腾讯地图用的也是GCJ02坐标
 @param double $lat 纬度
 @param double $lng 经度
 */</span>
 <span class="token keyword">function</span> <span class="token function">Convert_GCJ02_To_BD09</span><span class="token punctuation">(</span><span class="token parameter">$lat<span class="token punctuation">,</span>$lng</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     $x_pi <span class="token operator">=</span> <span class="token number">3.14159265358979324</span> <span class="token operator">*</span> <span class="token number">3000.0</span> <span class="token operator">/</span> <span class="token number">180.0</span><span class="token punctuation">;</span>
     $x <span class="token operator">=</span> $lng<span class="token punctuation">;</span>
     $y <span class="token operator">=</span> $lat<span class="token punctuation">;</span>
     $z <span class="token operator">=</span><span class="token function">sqrt</span><span class="token punctuation">(</span>$x <span class="token operator">*</span> $x <span class="token operator">+</span> $y <span class="token operator">*</span> $y<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">0.00002</span> <span class="token operator">*</span> <span class="token function">sin</span><span class="token punctuation">(</span>$y <span class="token operator">*</span> $x_pi<span class="token punctuation">)</span><span class="token punctuation">;</span>
     $theta <span class="token operator">=</span> <span class="token function">atan2</span><span class="token punctuation">(</span>$y<span class="token punctuation">,</span> $x<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">0.000003</span> <span class="token operator">*</span> <span class="token function">cos</span><span class="token punctuation">(</span>$x <span class="token operator">*</span> $x_pi<span class="token punctuation">)</span><span class="token punctuation">;</span>
     $lng <span class="token operator">=</span> $z <span class="token operator">*</span> <span class="token function">cos</span><span class="token punctuation">(</span>$theta<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">0.0065</span><span class="token punctuation">;</span>
     $lat <span class="token operator">=</span> $z <span class="token operator">*</span> <span class="token function">sin</span><span class="token punctuation">(</span>$theta<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">0.006</span><span class="token punctuation">;</span>
     <span class="token keyword">return</span> <span class="token function">array</span><span class="token punctuation">(</span><span class="token string">'lng'</span><span class="token operator">=></span>$lng<span class="token punctuation">,</span><span class="token string">'lat'</span><span class="token operator">=></span>$lat<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token comment">/*
 百度地图BD09坐标---->中国正常GCJ02坐标
 腾讯地图用的也是GCJ02坐标
 @param double $lat 纬度
 @param double $lng 经度
 @return array();
 */</span>
 <span class="token keyword">function</span> <span class="token function">Convert_BD09_To_GCJ02</span><span class="token punctuation">(</span><span class="token parameter">$lat<span class="token punctuation">,</span>$lng</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     $x_pi <span class="token operator">=</span> <span class="token number">3.14159265358979324</span> <span class="token operator">*</span> <span class="token number">3000.0</span> <span class="token operator">/</span> <span class="token number">180.0</span><span class="token punctuation">;</span>
     $x <span class="token operator">=</span> $lng <span class="token operator">-</span> <span class="token number">0.0065</span><span class="token punctuation">;</span>
     $y <span class="token operator">=</span> $lat <span class="token operator">-</span> <span class="token number">0.006</span><span class="token punctuation">;</span>
     $z <span class="token operator">=</span> <span class="token function">sqrt</span><span class="token punctuation">(</span>$x <span class="token operator">*</span> $x <span class="token operator">+</span> $y <span class="token operator">*</span> $y<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">0.00002</span> <span class="token operator">*</span> <span class="token function">sin</span><span class="token punctuation">(</span>$y <span class="token operator">*</span> $x_pi<span class="token punctuation">)</span><span class="token punctuation">;</span>
     $theta <span class="token operator">=</span> <span class="token function">atan2</span><span class="token punctuation">(</span>$y<span class="token punctuation">,</span> $x<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">0.000003</span> <span class="token operator">*</span> <span class="token function">cos</span><span class="token punctuation">(</span>$x <span class="token operator">*</span> $x_pi<span class="token punctuation">)</span><span class="token punctuation">;</span>
     $lng <span class="token operator">=</span> $z <span class="token operator">*</span> <span class="token function">cos</span><span class="token punctuation">(</span>$theta<span class="token punctuation">)</span><span class="token punctuation">;</span>
     $lat <span class="token operator">=</span> $z <span class="token operator">*</span> <span class="token function">sin</span><span class="token punctuation">(</span>$theta<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">return</span> <span class="token function">array</span><span class="token punctuation">(</span><span class="token string">'lng'</span><span class="token operator">=></span>$lng<span class="token punctuation">,</span><span class="token string">'lat'</span><span class="token operator">=></span>$lat<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre></div><p>参考：</p>
<p><a href="https://beltxman.com/archives/1628.html" target="_blank" rel="noopener noreferrer">https://beltxman.com/archives/1628.html<OutboundLink/></a></p>
<p><a href="https://www.cnblogs.com/zonglonglong/p/7018584.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/zonglonglong/p/7018584.html<OutboundLink/></a></p>
</template>
