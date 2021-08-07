<template><h1 id="使用微信公众号和百度地图获取位置" tabindex="-1"><a class="header-anchor" href="#使用微信公众号和百度地图获取位置" aria-hidden="true">#</a> 使用微信公众号和百度地图获取位置</h1>
<p>1、引入地图 jsSdk</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"//res2.wx.qq.com/open/js/jweixin-1.4.0.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"//api.map.baidu.com/api?v=3.0&amp;ak=ak"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span> 
</code></pre></div><blockquote>
<p>注意：微信公众号需要appID和appSecret，百度地图需要申请ak</p>
</blockquote>
<p>微信jsSdk配置：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    debug<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。</span>
    appId<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// 必填，公众号的唯一标识</span>
    timestamp<span class="token operator">:</span> <span class="token punctuation">,</span> <span class="token comment">// 必填，生成签名的时间戳</span>
    nonceStr<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// 必填，生成签名的随机串</span>
    signature<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span><span class="token comment">// 必填，签名</span>
    jsApiList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getLocation'</span><span class="token punctuation">]</span> <span class="token comment">// 必填，需要使用的JS接口列表</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p>2、获取地理位置</p>
<ul>
<li>首先判断是否微信</li>
<li>获取微信获取经纬度转为百度地图的经纬度</li>
<li>或者直接使用百度地图获取</li>
<li>通过函数回调，使用经纬度位置</li>
</ul>
<p>判断是微信：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//判断是否是微信浏览器的函数</span>
<span class="token keyword">function</span> <span class="token function">isWeiXin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型</span>
    <span class="token keyword">var</span> ua <span class="token operator">=</span> window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//通过正则表达式匹配ua中是否含有MicroMessenger字符串</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ua<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">MicroMessenger</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">'micromessenger'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>获取经纬度：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//获取我的位置经纬度</span>
<span class="token keyword">function</span> <span class="token function">myLngLat</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//默认市民中心</span>
    <span class="token keyword">var</span> longitude <span class="token operator">=</span> <span class="token number">114.052031</span><span class="token punctuation">,</span> latitude <span class="token operator">=</span> <span class="token number">22.54639</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> myLng <span class="token operator">=</span> sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'myLng'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> myLat <span class="token operator">=</span> sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'myLat'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>myLng <span class="token operator">&amp;&amp;</span> myLat<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">(</span>myLng<span class="token punctuation">,</span> myLat<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isWeiXin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            wx<span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                wx<span class="token punctuation">.</span><span class="token function">getLocation</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                    type<span class="token operator">:</span> <span class="token string">'wgs84'</span><span class="token punctuation">,</span> <span class="token comment">// 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'</span>
                    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        latitude <span class="token operator">=</span> res<span class="token punctuation">.</span>latitude<span class="token punctuation">;</span> <span class="token comment">// 纬度，浮点数，范围为90 ~ -90</span>
                        longitude <span class="token operator">=</span> res<span class="token punctuation">.</span>longitude<span class="token punctuation">;</span> <span class="token comment">// 经度，浮点数，范围为180 ~ -180。</span>
                        <span class="token comment">// 转成百度地图</span>
                        $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                            url<span class="token operator">:</span> <span class="token string">'http://api.map.baidu.com/geoconv/v1/?coords='</span> <span class="token operator">+</span> longitude <span class="token operator">+</span> <span class="token string">','</span> <span class="token operator">+</span> latitude <span class="token operator">+</span> <span class="token string">'&amp;from=1&amp;to=5&amp;ak=ak'</span><span class="token punctuation">,</span>
                            type<span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span>
                            dataType<span class="token operator">:</span> <span class="token string">'jsonp'</span><span class="token punctuation">,</span>
                            processData<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                            <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
                                <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                    longitude <span class="token operator">=</span> res<span class="token punctuation">.</span>result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>x<span class="token punctuation">;</span>
                                    latitude <span class="token operator">=</span> res<span class="token punctuation">.</span>result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>y<span class="token punctuation">;</span>
                                <span class="token punctuation">}</span>
                                <span class="token comment">//经纬度</span>
                                <span class="token function">callback</span><span class="token punctuation">(</span>longitude<span class="token punctuation">,</span> latitude<span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 百度地图API功能</span>
            <span class="token keyword">var</span> geolocation <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BMap<span class="token punctuation">.</span>Geolocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            geolocation<span class="token punctuation">.</span><span class="token function">getCurrentPosition</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">r</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token constant">BMAP_STATUS_SUCCESS</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">var</span> mk <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BMap<span class="token punctuation">.</span>Marker</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>point<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>point<span class="token punctuation">.</span>lng<span class="token punctuation">,</span> r<span class="token punctuation">.</span>point<span class="token punctuation">.</span>lat<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token comment">//alert('您的位置：'+r.point.lng+','+r.point.lat);</span>
                    longitude <span class="token operator">=</span> r<span class="token punctuation">.</span>point<span class="token punctuation">.</span>lng<span class="token punctuation">;</span>
                    latitude <span class="token operator">=</span> r<span class="token punctuation">.</span>point<span class="token punctuation">.</span>lat<span class="token punctuation">;</span>
                    <span class="token comment">//经纬度</span>
                    sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'myLng'</span><span class="token punctuation">,</span> longitude<span class="token punctuation">)</span>
                    sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'myLat'</span><span class="token punctuation">,</span> latitude<span class="token punctuation">)</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'定位失败，请允许地图获取您的位置！'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'failed'</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token function">callback</span><span class="token punctuation">(</span>longitude<span class="token punctuation">,</span> latitude<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>enableHighAccuracy<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>3、使用地理位置</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token function">myLngLat</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">myLng<span class="token punctuation">,</span>myLat</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myLng<span class="token punctuation">,</span>myLat<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> 
</code></pre></div><p>在微信中使用公号的接口获取地理位置会更准确些</p>
</template>
