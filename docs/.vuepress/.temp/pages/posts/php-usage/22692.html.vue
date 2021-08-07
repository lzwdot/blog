<template><h1 id="mysql-php和js根据经纬度计算距离" tabindex="-1"><a class="header-anchor" href="#mysql-php和js根据经纬度计算距离" aria-hidden="true">#</a> mysql，php和js根据经纬度计算距离</h1>
<h3 id="根据经纬度计算距离公式" tabindex="-1"><a class="header-anchor" href="#根据经纬度计算距离公式" aria-hidden="true">#</a> 根据经纬度计算距离公式</h3>
<p><img src="@source/posts/php-usage/images/1345407982.jpg" alt=""></p>
<blockquote>
<p>图片来自互联网</p>
</blockquote>
<p>对上面的公式解释如下：</p>
<ol>
<li>Lung1 Lat1表示A点经纬度， Lung2 Lat2表示B点经纬度；</li>
<li>a=Lat1 – Lat2 为两点纬度之差 b=Lung1 -Lung2 为两点经度之差；</li>
<li>6378.137为地球半径，单位为千米；</li>
<li>计算出来的结果单位为千米，若将半径改为米为单位则计算的结果单位为米。</li>
<li>计算精度与谷歌地图的距离精度差不多，相差范围在0.2米以下。</li>
</ol>
<h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h3>
<p>lng：经度<br>
lat：纬度<br>
地球半径：6378.137（千米）</p>
<p>一般地图上显示的坐标顺序为，纬度在前（范围-90 ~ 90），经度在后（范围-180 ~ 180）</p>
<h3 id="各种语言计算距离的代码" tabindex="-1"><a class="header-anchor" href="#各种语言计算距离的代码" aria-hidden="true">#</a> 各种语言计算距离的代码</h3>
<blockquote>
<p>这种计算方式一般都是直线距离</p>
</blockquote>
<p>sql语句</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token constant">SELECT</span>
    <span class="token operator">*</span><span class="token punctuation">,</span>
    <span class="token number">6378.138</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token constant">ASIN</span><span class="token punctuation">(</span>
      <span class="token constant">SQRT</span><span class="token punctuation">(</span>
        <span class="token constant">POW</span><span class="token punctuation">(</span>
          <span class="token constant">SIN</span><span class="token punctuation">(</span>
            <span class="token punctuation">(</span>
              <span class="token string">'.$lat.'</span> <span class="token operator">*</span> <span class="token constant">PI</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">180</span> <span class="token operator">-</span> lat <span class="token operator">*</span> <span class="token constant">PI</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">180</span>
            <span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span>
        <span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token constant">COS</span><span class="token punctuation">(</span><span class="token string">'.$lat.'</span> <span class="token operator">*</span> <span class="token constant">PI</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">180</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token constant">COS</span><span class="token punctuation">(</span>lat <span class="token operator">*</span> <span class="token constant">PI</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">180</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token constant">POW</span><span class="token punctuation">(</span>
          <span class="token constant">SIN</span><span class="token punctuation">(</span>
            <span class="token punctuation">(</span>
              <span class="token string">'.$lng.'</span> <span class="token operator">*</span> <span class="token constant">PI</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">180</span> <span class="token operator">-</span> lng <span class="token operator">*</span> <span class="token constant">PI</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">180</span>
            <span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">)</span> <span class="token operator">*</span><span class="token number">1000</span> <span class="token constant">AS</span> distance
<span class="token constant">FROM</span>
    distance
<span class="token constant">ORDER</span> <span class="token constant">BY</span>
    distance <span class="token constant">ASC</span>
</code></pre></div><p>php计算距离</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 根据两点间的经纬度计算距离
 * <span class="token keyword">@param</span> <span class="token parameter">$lng1</span>
 * <span class="token keyword">@param</span> <span class="token parameter">$lat1</span>
 * <span class="token keyword">@param</span> <span class="token parameter">$lng2</span>
 * <span class="token keyword">@param</span> <span class="token parameter">$lat2</span>
 * <span class="token keyword">@return</span> int
 */</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function">getDistance</span><span class="token punctuation">(</span><span class="token parameter">$lng1<span class="token punctuation">,</span> $lat1<span class="token punctuation">,</span> $lng2<span class="token punctuation">,</span> $lat2</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//将角度转为狐度</span>
    $radLat1 <span class="token operator">=</span> <span class="token function">deg2rad</span><span class="token punctuation">(</span>$lat1<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//deg2rad()函数将角度转换为弧度</span>
    $radLat2 <span class="token operator">=</span> <span class="token function">deg2rad</span><span class="token punctuation">(</span>$lat2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    $radLng1 <span class="token operator">=</span> <span class="token function">deg2rad</span><span class="token punctuation">(</span>$lng1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    $radLng2 <span class="token operator">=</span> <span class="token function">deg2rad</span><span class="token punctuation">(</span>$lng2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    $a <span class="token operator">=</span> $radLat1 <span class="token operator">-</span> $radLat2<span class="token punctuation">;</span>
    $b <span class="token operator">=</span> $radLng1 <span class="token operator">-</span> $radLng2<span class="token punctuation">;</span>
    $s <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token function">asin</span><span class="token punctuation">(</span><span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token function">sin</span><span class="token punctuation">(</span>$a <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">cos</span><span class="token punctuation">(</span>$radLat1<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token function">cos</span><span class="token punctuation">(</span>$radLat2<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token function">pow</span><span class="token punctuation">(</span><span class="token function">sin</span><span class="token punctuation">(</span>$b <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">6378.137</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> $s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>js求距离的方法</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 转换弧度
 * <span class="token keyword">@param</span> <span class="token parameter">d</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">getRad</span><span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> <span class="token constant">PI</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> d<span class="token operator">*</span><span class="token constant">PI</span><span class="token operator">/</span><span class="token number">180.0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 根据经纬度计算两点间距离
 * <span class="token keyword">@param</span> <span class="token parameter">lng1</span>
 * <span class="token keyword">@param</span> <span class="token parameter">lat1</span>
 * <span class="token keyword">@param</span> <span class="token parameter">lng2</span>
 * <span class="token keyword">@param</span> <span class="token parameter">lat2</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token operator">|</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
 * <span class="token keyword">@constructor</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">CoolWPDistance</span><span class="token punctuation">(</span><span class="token parameter">lng1<span class="token punctuation">,</span>lat1<span class="token punctuation">,</span>lng2<span class="token punctuation">,</span>lat2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> f <span class="token operator">=</span> <span class="token function">getRad</span><span class="token punctuation">(</span><span class="token punctuation">(</span>lat1 <span class="token operator">+</span> lat2<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> g <span class="token operator">=</span> <span class="token function">getRad</span><span class="token punctuation">(</span><span class="token punctuation">(</span>lat1 <span class="token operator">-</span> lat2<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> l <span class="token operator">=</span> <span class="token function">getRad</span><span class="token punctuation">(</span><span class="token punctuation">(</span>lng1 <span class="token operator">-</span> lng2<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> sg <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> sl <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> sf <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> s<span class="token punctuation">,</span>c<span class="token punctuation">,</span>w<span class="token punctuation">,</span>r<span class="token punctuation">,</span>d<span class="token punctuation">,</span>h1<span class="token punctuation">,</span>h2<span class="token punctuation">;</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">6378137.0</span><span class="token punctuation">;</span><span class="token comment">//The Radius of eath in meter.</span>
    <span class="token keyword">var</span> fl <span class="token operator">=</span> <span class="token number">1</span><span class="token operator">/</span><span class="token number">298.257</span><span class="token punctuation">;</span>
    sg <span class="token operator">=</span> sg<span class="token operator">*</span>sg<span class="token punctuation">;</span>
    sl <span class="token operator">=</span> sl<span class="token operator">*</span>sl<span class="token punctuation">;</span>
    sf <span class="token operator">=</span> sf<span class="token operator">*</span>sf<span class="token punctuation">;</span>
    s <span class="token operator">=</span> sg<span class="token operator">*</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">-</span>sl<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">-</span>sf<span class="token punctuation">)</span><span class="token operator">*</span>sl<span class="token punctuation">;</span>
    c <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">-</span>sg<span class="token punctuation">)</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">-</span>sl<span class="token punctuation">)</span> <span class="token operator">+</span> sf<span class="token operator">*</span>sl<span class="token punctuation">;</span>
    w <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">atan</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>s<span class="token operator">/</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    r <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>s<span class="token operator">*</span>c<span class="token punctuation">)</span><span class="token operator">/</span>w<span class="token punctuation">;</span>
    d <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">*</span>w<span class="token operator">*</span>a<span class="token punctuation">;</span>
    h1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token operator">*</span>r <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token operator">/</span>c<span class="token punctuation">;</span>
    h2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token operator">*</span>r <span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token operator">/</span>s<span class="token punctuation">;</span>
    s <span class="token operator">=</span> d<span class="token operator">*</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> fl<span class="token operator">*</span><span class="token punctuation">(</span>h1<span class="token operator">*</span>sf<span class="token operator">*</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">-</span>sg<span class="token punctuation">)</span> <span class="token operator">-</span> h2<span class="token operator">*</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">-</span>sf<span class="token punctuation">)</span><span class="token operator">*</span>sg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>s <span class="token operator">>=</span> <span class="token number">1000</span> <span class="token operator">&amp;&amp;</span> s <span class="token operator">&lt;=</span> <span class="token number">99000</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> kilometer <span class="token operator">=</span> s<span class="token operator">/</span><span class="token number">1000</span><span class="token punctuation">;</span>
        s <span class="token operator">=</span> kilometer<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'km'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>s <span class="token operator">></span> <span class="token number">99000</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        s <span class="token operator">=</span> <span class="token string">'>99km'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        s <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'m'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// s = s/1000;</span>
    <span class="token comment">// s = s.toFixed(2);//指定小数点后的位数。</span>
    <span class="token keyword">return</span> s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>以上代码大部分来自网上收集，经过验证过的，可以使用</p>
</template>
