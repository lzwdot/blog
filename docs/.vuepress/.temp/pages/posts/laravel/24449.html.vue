<template><h1 id="laravel-修改默认-view-模版路径" tabindex="-1"><a class="header-anchor" href="#laravel-修改默认-view-模版路径" aria-hidden="true">#</a> Laravel 修改默认 view 模版路径</h1>
<p>Laravel 默认的 view 模版路径是 <code>resources/views</code> 目录 ，但可以通过 <code>config/view.php</code> 来添加多个模板目录，列如：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code> <span class="token string">'paths'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
     <span class="token function">resource_path</span><span class="token punctuation">(</span><span class="token string">'views'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     <span class="token function">public_path</span><span class="token punctuation">(</span><span class="token string">'views'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre></div><p>只要在 <code>'paths'</code> 添加相应的目录即可。</p>
</template>
