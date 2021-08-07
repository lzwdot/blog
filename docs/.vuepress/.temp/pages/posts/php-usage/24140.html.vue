<template><h1 id="phpunit的eval-stdin-php报警" tabindex="-1"><a class="header-anchor" href="#phpunit的eval-stdin-php报警" aria-hidden="true">#</a> PHPUnit的eval-stdin.php报警</h1>
<p>今天收到阿里云紧急报警，报文如下：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code> 网站后门<span class="token operator">-</span><span class="token function">发现后门</span><span class="token punctuation">(</span>Webshell<span class="token punctuation">)</span>文件
 备注
 该告警由如下引擎检测发现：
 木马文件路径：<span class="token operator">/</span>www<span class="token operator">/</span>wwwroot<span class="token operator">/</span><span class="token keyword">default</span><span class="token operator">/</span>laravel<span class="token operator">/</span>vendor<span class="token operator">/</span>phpunit<span class="token operator">/</span>phpunit<span class="token operator">/</span>src<span class="token operator">/</span>Util<span class="token operator">/</span><span class="token constant">PHP</span><span class="token operator">/</span>eval<span class="token operator">-</span>stdin<span class="token punctuation">.</span>php
 影响域名：<span class="token operator">--</span>
 首次发现时间：<span class="token number">2019</span><span class="token operator">-</span><span class="token number">12</span><span class="token operator">-</span><span class="token number">16</span> <span class="token number">14</span><span class="token operator">:</span><span class="token number">11</span><span class="token operator">:</span><span class="token number">48</span>
 更新时间：<span class="token number">2019</span><span class="token operator">-</span><span class="token number">12</span><span class="token operator">-</span><span class="token number">16</span> <span class="token number">14</span><span class="token operator">:</span><span class="token number">11</span><span class="token operator">:</span><span class="token number">48</span>
 木马类型：Webshell  
</code></pre></div><p>根据路径查看了文件代码：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php <span class="token function">declare</span><span class="token punctuation">(</span>strict_types<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann &lt;sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */</span>
<span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">'?>'</span> <span class="token punctuation">.</span> <span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token string">'php://stdin'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p>对比<code>https://github.com/sebastianbergmann/phpunit/blob/master/src/Util/PHP/eval-stdin.php</code> ，发现一样的的，可能是误报，然后选择忽略了！</p>
</template>
