<template><h1 id="h5利用cropper-js实现图片裁剪" tabindex="-1"><a class="header-anchor" href="#h5利用cropper-js实现图片裁剪" aria-hidden="true">#</a> h5利用cropper.js实现图片裁剪</h1>
<p>最近为了实现h5图片裁剪功能，在网上查阅了很多资料，最后找到cropper.js非常好用，以此记录下实现过程：</p>
<h3 id="关于cropper-js" tabindex="-1"><a class="header-anchor" href="#关于cropper-js" aria-hidden="true">#</a> 关于cropper.js</h3>
<blockquote>
<p>cropper是一款使用简单且功能强大的图片剪裁js插件。该图片剪裁插件支持图片放大缩小，支持鼠标滚轮操作，支持图片旋转，支持触摸屏设备，支持canvas，并且支持跨浏览器使用<br>
官方网站：<a href="http://fengyuanchen.github.io/cropper/" target="_blank" rel="noopener noreferrer">http://fengyuanchen.github.io/cropper/<OutboundLink/></a></p>
</blockquote>
<h2 id="前端图片裁剪处理" tabindex="-1"><a class="header-anchor" href="#前端图片裁剪处理" aria-hidden="true">#</a> 前端图片裁剪处理</h2>
<ol>
<li>引入cropper文件，初始化文档结构</li>
</ol>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html<span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"./cropper.min.css"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>文件上传<span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"file"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"js-uploadfile"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>确定裁剪<span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"button"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"js-ok"</span> value<span class="token operator">=</span><span class="token string">"裁剪"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>cropper基本结构<span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container js-container"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>img <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"js-image"</span> src<span class="token operator">=</span><span class="token string">""</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>裁剪结果显示<span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"js-result"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"./jquery-1.10.1.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"./cropper.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
    <span class="token operator">&lt;</span>script<span class="token operator">></span><span class="token comment">//其他js代码&lt;/script></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span> 
</code></pre></div><p>以上代码包含文件上传，裁剪按钮和cropper基本结构，打好结构架子，下面就是功能的实现</p>
<ol>
<li>核心js代码，实现功能有：</li>
</ol>
<ul>
<li>文件上传</li>
<li>图片裁剪</li>
<li>图片提交</li>
</ul>
<p>根据input[type=file]的值变化获取图片的base64文件信息</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> cropper<span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".js-uploadfile"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"change"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> fr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> file <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">/</span>image<span class="token operator">/</span>w<span class="token operator">+</span><span class="token operator">/</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">showTips</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">"不是图片文件！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span>size <span class="token operator">></span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">showTips</span><span class="token punctuation">(</span><span class="token string">'图片大小不能超过2M'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    fr<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
    fr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//这里初始化cropper</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'.js-image'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">'src'</span><span class="token punctuation">,</span>fr<span class="token punctuation">.</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">iniCropper</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p>然后初始化cropper，参数解释参考官方文档</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> croppable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">iniCropper</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> $image <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'.js-image'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        image <span class="token operator">=</span> $image<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    cropper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cropper</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        dragMode<span class="token operator">:</span> <span class="token string">'move'</span><span class="token punctuation">,</span>
        aspectRatio<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        autoCropArea<span class="token operator">:</span> <span class="token number">0.65</span><span class="token punctuation">,</span>
        restore<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        viewMode<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        guides<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        center<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        highlight<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        cropBoxMovable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        cropBoxResizable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        toggleDragModeOnDblclick<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token function-variable function">ready</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            croppable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>实现裁剪，并上传图片。这里需要调用两个函数getRectCanvas，convertBase64UrlToBlob：<br>
getRectCanvas：用于绘制矩形Canvas，<br>
convertBase64UrlToBlob：将以base64的图片url数据转换为Blob</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'.js-ok'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> croppedCanvas<span class="token punctuation">;</span>
    <span class="token keyword">var</span> rectCanvas<span class="token punctuation">;</span>
    <span class="token keyword">var</span> rectImage<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>croppable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// Crop</span>
    croppedCanvas <span class="token operator">=</span> cropper<span class="token punctuation">.</span><span class="token function">getCroppedCanvas</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//Rect</span>
    rectCanvas <span class="token operator">=</span> <span class="token function">getRectCanvas</span><span class="token punctuation">(</span>croppedCanvas<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Show</span>
    rectImage <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    rectImage<span class="token punctuation">.</span>src <span class="token operator">=</span> rectCanvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'.js-result'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>rectImage<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//var form=document.forms[0];</span>
    <span class="token keyword">var</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//这里连带form里的其他参数也一起提交了,如果不需要提交其他参数可以直接FormData无参数的构造函数</span>
    <span class="token comment">//convertBase64UrlToBlob函数是将base64编码转换为Blob</span>
    formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"filename"</span><span class="token punctuation">,</span> <span class="token function">convertBase64UrlToBlob</span><span class="token punctuation">(</span>rectCanvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//append函数的第一个参数是后台获取数据的参数名,和html标签的input的name属性功能相同</span>
    <span class="token comment">//ajax 提交form</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span><span class="token comment">//不提交</span>
    $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        url<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">"POST"</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> formData<span class="token punctuation">,</span>
        dataType<span class="token operator">:</span> <span class="token string">"text"</span><span class="token punctuation">,</span>
        processData<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>         <span class="token comment">// 告诉jQuery不要去处理发送的数据</span>
        contentType<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>        <span class="token comment">// 告诉jQuery不要去设置Content-Type请求头</span>
        <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">showTips</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">'url?t='</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">xhr</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>            <span class="token comment">//在jquery函数中直接使用ajax的XMLHttpRequest对象</span>
            <span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            xhr<span class="token punctuation">.</span>upload<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"progress"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>evt<span class="token punctuation">.</span>lengthComputable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">var</span> percentComplete <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>evt<span class="token punctuation">.</span>loaded <span class="token operator">*</span> <span class="token number">100</span> <span class="token operator">/</span> evt<span class="token punctuation">.</span>total<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"正在提交..."</span> <span class="token operator">+</span> percentComplete<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'%'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">//在控制台打印上传进度</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> xhr<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p>功能函数: getRectCanvas：用于绘制矩形Canvas，<br>
convertBase64UrlToBlob：将以base64的图片url数据转换为Blob</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//绘制矩形canvas</span>
<span class="token keyword">function</span> <span class="token function">getRectCanvas</span><span class="token punctuation">(</span><span class="token parameter">sourceCanvas</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'canvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> context <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> width <span class="token operator">=</span> sourceCanvas<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
    <span class="token keyword">var</span> height <span class="token operator">=</span> sourceCanvas<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
    canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> width<span class="token punctuation">;</span>
    canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
    context<span class="token punctuation">.</span>imageSmoothingEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    context<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>sourceCanvas<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span>
    context<span class="token punctuation">.</span>globalCompositeOperation <span class="token operator">=</span> <span class="token string">'destination-in'</span><span class="token punctuation">;</span>
    context<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    context<span class="token punctuation">.</span><span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span>
    context<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> canvas<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
* 将以base64的图片url数据转换为Blob
* <span class="token keyword">@param</span> <span class="token parameter">urlData</span>
* 用url方式表示的base64图片数据
*/</span>
<span class="token keyword">function</span> <span class="token function">convertBase64UrlToBlob</span><span class="token punctuation">(</span><span class="token parameter">urlData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> bytes <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">atob</span><span class="token punctuation">(</span>urlData<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//去掉url的头，并转换为byte</span>
    <span class="token comment">//处理异常,将ascii码小于0的转换为大于0</span>
    <span class="token keyword">var</span> ab <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span>bytes<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> ia <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>ab<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> bytes<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ia<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> bytes<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>ab<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">'image/png'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre></div><h2 id="后端php接收裁剪图片数据" tabindex="-1"><a class="header-anchor" href="#后端php接收裁剪图片数据" aria-hidden="true">#</a> 后端php接收裁剪图片数据</h2>
<p>接收数据分两种情况：</p>
<ol>
<li>接收Blob文件数据</li>
</ol>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>$filename <span class="token operator">=</span> $_FILES<span class="token punctuation">[</span><span class="token string">'filename'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">move_uploaded_file</span><span class="token punctuation">(</span>$filename<span class="token punctuation">[</span><span class="token string">'tmp_name'</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token string">'./'</span><span class="token punctuation">.</span>$filename<span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token string">'png'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">exit</span><span class="token punctuation">(</span><span class="token function">json_encode</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'status'</span><span class="token operator">=></span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">'msg'</span><span class="token operator">=></span><span class="token string">'头像上传成功'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><ol>
<li>接收base64文件数据</li>
</ol>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">'Content-type:text/html;charset=utf-8'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
$base64_image_content <span class="token operator">=</span> $_FILES<span class="token punctuation">[</span><span class="token string">'filename'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//保存base64字符串为图片</span>
<span class="token comment">//匹配出图片的格式</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">preg_match</span><span class="token punctuation">(</span><span class="token string">'/^(data:s*image/(w+);base64,)/'</span><span class="token punctuation">,</span> $base64_image_content<span class="token punctuation">,</span> $result<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    $type <span class="token operator">=</span> $result<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    $new_file <span class="token operator">=</span> <span class="token string">"./test.{$type}"</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">file_put_contents</span><span class="token punctuation">(</span>$new_file<span class="token punctuation">,</span> <span class="token function">base64_decode</span><span class="token punctuation">(</span><span class="token function">str_replace</span><span class="token punctuation">(</span>$result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> $base64_image_content<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        echo <span class="token string">'新文件保存成功：'</span><span class="token punctuation">,</span>
        $new_file<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>好了大告成功，以上就是h5利用cropper.js实现图片裁剪实现过程</p>
<blockquote>
<p>demo和源码</p>
</blockquote>
<p>demo: <a href="https://awei922.github.io/html/cropperjs-demo/index.html" target="_blank" rel="noopener noreferrer">https://awei922.github.io/html/cropperjs-demo/index.html<OutboundLink/></a><br>
源码：<a href="https://github.com/awei922/html/tree/master/swiper-demo" target="_blank" rel="noopener noreferrer">https://github.com/awei922/html/tree/master/swiper-demo<OutboundLink/></a></p>
</template>
