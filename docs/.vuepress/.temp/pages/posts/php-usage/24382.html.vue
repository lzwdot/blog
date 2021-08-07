<template><h1 id="crypto-js与php通过aes加密传输" tabindex="-1"><a class="header-anchor" href="#crypto-js与php通过aes加密传输" aria-hidden="true">#</a> crypto-js与php通过aes加密传输</h1>
<p>CryptoJS (crypto.js) 为 JavaScript 提供了各种各样的加密算法。目前已支持的算法包括：</p>
<ul>
<li>MD5</li>
<li>SHA-1</li>
<li>SHA-256</li>
<li>AES<br>
....</li>
</ul>
<p>这里我们演示aes对称加密数据传输，下面列出crypto-js的几个重要链接</p>
<p>github项目地址<br>
<a href="https://github.com/brix/crypto-js" target="_blank" rel="noopener noreferrer">https://github.com/brix/crypto-js<OutboundLink/></a><br>
文档<br>
<a href="https://github.com/brix/crypto-js/blob/master/docs/QuickStartGuide.wiki" target="_blank" rel="noopener noreferrer">https://github.com/brix/crypto-js/blob/master/docs/QuickStartGuide.wiki<OutboundLink/></a><br>
源码地址<br>
<a href="https://github.com/brix/crypto-js/releases" target="_blank" rel="noopener noreferrer">https://github.com/brix/crypto-js/releases<OutboundLink/></a></p>
<p><strong>js前端演示代码：</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"./crypto-js-3.1.9-1/crypto-js.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"text/javascript"</span><span class="token operator">></span>
    <span class="token doc-comment comment">/**加密
    *
    * <span class="token keyword">@param</span> <span class="token parameter">data</span>
    * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
    */</span>
    <span class="token keyword">function</span> <span class="token function">encrypt</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        text <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Base64<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> key <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">'1234567887654321'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//为了避免补位，直接用16位的秘钥</span>
        <span class="token keyword">let</span> iv <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">'1234567887654321'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//16位初始向量</span>
        <span class="token keyword">let</span> encrypted <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span><span class="token constant">AES</span><span class="token punctuation">.</span><span class="token function">encrypt</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            iv<span class="token operator">:</span> iv<span class="token punctuation">,</span>
            mode<span class="token operator">:</span> CryptoJS<span class="token punctuation">.</span>mode<span class="token punctuation">.</span><span class="token constant">CBC</span><span class="token punctuation">,</span>
            padding<span class="token operator">:</span> CryptoJS<span class="token punctuation">.</span>pad<span class="token punctuation">.</span>ZeroPadding
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Base64<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>encrypted<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**解密
    *
    * <span class="token keyword">@param</span> <span class="token parameter">data</span>
    * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
    */</span>
    <span class="token keyword">function</span> <span class="token function">decrypt</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> encrypted <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Base64<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> key <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">'1234567887654321'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//为了避免补位，直接用16位的秘钥</span>
        <span class="token keyword">let</span> iv <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">'1234567887654321'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//16位初始向量</span>
        <span class="token keyword">let</span> decrypted <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span><span class="token constant">AES</span><span class="token punctuation">.</span><span class="token function">decrypt</span><span class="token punctuation">(</span>encrypted<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            iv<span class="token operator">:</span> iv<span class="token punctuation">,</span>
            mode<span class="token operator">:</span> CryptoJS<span class="token punctuation">.</span>mode<span class="token punctuation">.</span><span class="token constant">CBC</span><span class="token punctuation">,</span>
            padding<span class="token operator">:</span> CryptoJS<span class="token punctuation">.</span>pad<span class="token punctuation">.</span>ZeroPadding
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Base64<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>decrypted<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"username"</span><span class="token operator">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span> <span class="token string">"pwd"</span><span class="token operator">:</span> <span class="token string">"passwd"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> encrypt_data <span class="token operator">=</span> <span class="token function">encrypt</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> decrypt_data <span class="token operator">=</span> <span class="token function">decrypt</span><span class="token punctuation">(</span>encrypt_data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>decrypt_data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div><p><strong>php后端演示代码：</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**加密
* <span class="token keyword">@param</span> <span class="token parameter">$data</span>
* <span class="token keyword">@return</span> string
*/</span>
<span class="token keyword">function</span> <span class="token function">encrypt</span><span class="token punctuation">(</span><span class="token parameter">$data</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    $key <span class="token operator">=</span> <span class="token string">"1234567887654321"</span><span class="token punctuation">;</span><span class="token comment">//秘钥必须为：8/16/32位</span>
    $iv <span class="token operator">=</span> <span class="token string">"1234567887654321"</span><span class="token punctuation">;</span>
    $base64_str <span class="token operator">=</span> <span class="token function">base64_encode</span><span class="token punctuation">(</span><span class="token function">json_encode</span><span class="token punctuation">(</span>$data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    $encrypted <span class="token operator">=</span> <span class="token function">openssl_encrypt</span><span class="token punctuation">(</span>$base64_str<span class="token punctuation">,</span> <span class="token string">"aes-128-cbc"</span><span class="token punctuation">,</span> $key<span class="token punctuation">,</span> <span class="token constant">OPENSSL_ZERO_PADDING</span><span class="token punctuation">,</span> $iv<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">base64_encode</span><span class="token punctuation">(</span>$encrypted<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**解密
* <span class="token keyword">@param</span> <span class="token parameter">$data</span>
* <span class="token keyword">@return</span> mixed
*/</span>
<span class="token keyword">function</span> <span class="token function">decrypt</span><span class="token punctuation">(</span><span class="token parameter">$data</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    $encrypted <span class="token operator">=</span> <span class="token function">base64_decode</span><span class="token punctuation">(</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    $key <span class="token operator">=</span> <span class="token string">"1234567887654321"</span><span class="token punctuation">;</span><span class="token comment">//秘钥必须为：8/16/32位</span>
    $iv <span class="token operator">=</span> <span class="token string">"1234567887654321"</span><span class="token punctuation">;</span>
    $decrypted <span class="token operator">=</span> <span class="token function">openssl_decrypt</span><span class="token punctuation">(</span>$encrypted<span class="token punctuation">,</span> <span class="token string">'aes-128-cbc'</span><span class="token punctuation">,</span> $key<span class="token punctuation">,</span> <span class="token constant">OPENSSL_ZERO_PADDING</span><span class="token punctuation">,</span> $iv<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">json_decode</span><span class="token punctuation">(</span><span class="token function">base64_decode</span><span class="token punctuation">(</span>$decrypted<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
$data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'username'</span><span class="token operator">=></span><span class="token string">'admin'</span><span class="token punctuation">,</span><span class="token string">'pwd'</span><span class="token operator">=></span><span class="token string">'admin'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
$encrypt<span class="token operator">=</span><span class="token function">encrypt</span><span class="token punctuation">(</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>
$str<span class="token operator">=</span><span class="token function">decrypt</span><span class="token punctuation">(</span>$encrypt<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span>$str<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>参考：<a href="https://www.jianshu.com/p/5619d68bc2d1" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/5619d68bc2d1<OutboundLink/></a></p>
</template>
