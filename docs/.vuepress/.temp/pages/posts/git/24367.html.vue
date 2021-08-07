<template><h1 id="git-push处于writing-objects进度不变" tabindex="-1"><a class="header-anchor" href="#git-push处于writing-objects进度不变" aria-hidden="true">#</a> git push处于writing objects进度不变</h1>
<p>在git bush 中使用命令：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code> git config <span class="token operator">--</span>global http<span class="token punctuation">.</span>postBuffer <span class="token number">524288000</span>
</code></pre></div><p>因为git上传，限定一次push命令的buffer大小</p>
</template>
