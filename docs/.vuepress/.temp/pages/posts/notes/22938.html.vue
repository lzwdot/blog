<template><h1 id="_80端口被system-pid-4-占用的解决方法" tabindex="-1"><a class="header-anchor" href="#_80端口被system-pid-4-占用的解决方法" aria-hidden="true">#</a> 80端口被system(pid=4)占用的解决方法</h1>
<p>使用管理员身份运行 cmd</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>net stop http <span class="token comment">//停止系统http服务</span>
sc config http start<span class="token operator">=</span> disabled <span class="token comment">//禁用服务的自动启动，此处注意等号后面的空格不可少</span>
</code></pre></div></template>
