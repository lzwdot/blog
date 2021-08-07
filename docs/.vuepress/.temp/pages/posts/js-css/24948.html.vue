<template><h1 id="了解-npm-install-s-d-g-的用法" tabindex="-1"><a class="header-anchor" href="#了解-npm-install-s-d-g-的用法" aria-hidden="true">#</a> 了解 npm install -S -D -g 的用法</h1>
<p>当安装插件配置到 <code>package.json</code> 文件时，了解 npm install -S -D -g 的用法区别</p>
<p>--保存到 dependencies</p>
<p><code>npm install module_name -S</code>    即    <code>npm install module_name --save</code></p>
<p>--保存到 devDependencies</p>
<p><code>npm install module_name -D </code>   即    <code>npm install module_name --save-dev</code></p>
<p>模块安装位置</p>
<ul>
<li><code>npm install module_name -g</code> 全局安装(命令行使用)</li>
<li><code>npm install module_name</code> 本地安装(将安装包放在 ./node_modules 下)</li>
</ul>
<p><code>dependencies</code> 与 <code>devDependencies</code> 有什么区别呢？</p>
<p><code>dependencies</code> 的插件需要发布到生产环境中</p>
<p><code>devDependencies</code> 中的插件只在开发环境下使用</p>
<p>举个例子：使用 weui 组件时，因为要用到生产环境中，应写入到 <code>dependencies</code> 中；而使用 eslint 插件只是用来开发时调试代码，应写入到 <code>devDependencies</code> 中。你的明白了吗？</p>
</template>
