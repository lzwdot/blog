<template><h1 id="canvas-图片压缩示例" tabindex="-1"><a class="header-anchor" href="#canvas-图片压缩示例" aria-hidden="true">#</a> canvas 图片压缩示例</h1>
<HtmlDemo>   
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"file"</span> id<span class="token operator">=</span><span class="token string">"upload"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">const</span> <span class="token constant">ACCEPT</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'image/jpg'</span><span class="token punctuation">,</span> <span class="token string">'image/png'</span><span class="token punctuation">,</span> <span class="token string">'image/jpeg'</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> <span class="token constant">MAXSIZE</span> <span class="token operator">=</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span>
    <span class="token keyword">const</span> <span class="token constant">MAXSIZE_STR</span> <span class="token operator">=</span> <span class="token string">'1MB'</span>
    <span class="token keyword">const</span> upload <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'upload'</span><span class="token punctuation">)</span>

    <span class="token comment">// 图片转base64</span>
    <span class="token keyword">function</span> <span class="token function">ImgToBase64</span><span class="token punctuation">(</span><span class="token parameter">file<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        reader<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'load'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> base64Img <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result
            callback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span>base64Img<span class="token punctuation">)</span>
            reader <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        reader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 图片压缩</span>
    <span class="token keyword">function</span> <span class="token function">compress</span><span class="token punctuation">(</span><span class="token parameter">base64Img<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> maxW <span class="token operator">=</span> <span class="token number">1024</span>
        <span class="token keyword">let</span> maxH <span class="token operator">=</span> <span class="token number">1024</span>
        <span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        img<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'load'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> ratio <span class="token comment">// 压缩比例</span>
            <span class="token keyword">let</span> needCompress <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token comment">// 是否需要压缩</span>

            <span class="token comment">// 压缩比例</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>maxW <span class="token operator">&lt;</span> img<span class="token punctuation">.</span>naturalWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                needCompress <span class="token operator">=</span> <span class="token boolean">true</span>
                ratio <span class="token operator">=</span> img<span class="token punctuation">.</span>naturalWidth <span class="token operator">/</span> maxW
                maxH <span class="token operator">=</span> img<span class="token punctuation">.</span>naturalHeight <span class="token operator">/</span> ratio
            <span class="token punctuation">}</span>
            
            <span class="token keyword">if</span> <span class="token punctuation">(</span>maxH <span class="token operator">&lt;</span> img<span class="token punctuation">.</span>naturalHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                needCompress <span class="token operator">=</span> <span class="token boolean">true</span>
                ratio <span class="token operator">=</span> img<span class="token punctuation">.</span>naturalHeight <span class="token operator">/</span> maxH
                maxW <span class="token operator">=</span> img<span class="token punctuation">.</span>naturalWidth <span class="token operator">/</span> ratio
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>needCompress<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                maxW <span class="token operator">=</span> img<span class="token punctuation">.</span>naturalWidth
                maxH <span class="token operator">=</span> img<span class="token punctuation">.</span>naturalHeight
            <span class="token punctuation">}</span>

            <span class="token comment">//添加 canvas 元素</span>
            <span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'canvas'</span><span class="token punctuation">)</span>
            canvas<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">,</span> <span class="token string">'__compress__'</span><span class="token punctuation">)</span>
            canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> maxW
            canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> maxH
            canvas<span class="token punctuation">.</span>style<span class="token punctuation">.</span>visibility <span class="token operator">=</span> <span class="token string">'visible'</span>
            document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span>

            <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span>
            <span class="token comment">// 清空之前渲染的</span>
            ctx<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> maxW<span class="token punctuation">,</span> maxW<span class="token punctuation">)</span>
            <span class="token comment">// 绘制图片</span>
            ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> maxW<span class="token punctuation">,</span> maxH<span class="token punctuation">)</span>

            <span class="token comment">// 真正实现压缩的操作</span>
            <span class="token keyword">const</span> compressImg <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">'image/jpg'</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">)</span>

            callback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span>compressImg<span class="token punctuation">)</span>

            <span class="token keyword">const</span> _img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            _img<span class="token punctuation">.</span>src <span class="token operator">=</span> compressImg
            document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>_img<span class="token punctuation">)</span>

            canvas<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        img<span class="token punctuation">.</span>src <span class="token operator">=</span> base64Img
        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 模拟上传服务器</span>
    <span class="token keyword">function</span> <span class="token function">uploadToServer</span><span class="token punctuation">(</span><span class="token parameter">compressImg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'upload to server...'</span><span class="token punctuation">,</span> compressImg<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    upload<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'change'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>file<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">const</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> fileType<span class="token punctuation">,</span> siz<span class="token operator">:</span> fileSize <span class="token punctuation">}</span> <span class="token operator">=</span> file
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token constant">ACCEPT</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>fileType<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">不支持</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>fileType<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">文件类型</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
            upload<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">''</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>fileSize <span class="token operator">></span> <span class="token constant">MAXSIZE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">文件超出</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">MAXSIZE_STR</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
            upload<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">''</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 图片压缩运行</span>
        <span class="token function">ImgToBase64</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">base64Img</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">compress</span><span class="token punctuation">(</span>base64Img<span class="token punctuation">,</span> uploadToServer<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div></HtmlDemo>    
</template>
