<template><h1 id="什么是-restful-api" tabindex="-1"><a class="header-anchor" href="#什么是-restful-api" aria-hidden="true">#</a> 什么是 Restful API</h1>
<p>传统的 methods</p>
<ul>
<li>get 获取服务器的数据</li>
<li>post 向服务器提交数据</li>
</ul>
<p>现在的 methods</p>
<ul>
<li>get 获取数据</li>
<li>post 新建数据</li>
<li>patch/put 更新数据</li>
<li>delete 删除数据</li>
</ul>
<p>Restful API</p>
<ul>
<li>一种新的 API 设计方法（早已推广使用）</li>
<li>传统 API 设计：把每个 url 当做一个功能</li>
<li>Restful API 设计：把每个 url 当做一个唯一的资源</li>
</ul>
<p>如何设计成一个资源？</p>
<ul>
<li>尽量不用 url 参数
<ul>
<li>传统 API 设计：/api/list?pageIndex=2，</li>
<li>Restful API 设计：/api/list2</li>
</ul>
</li>
<li>用 method 表示操作类型
<ul>
<li>传统 API 设计
<ul>
<li>post 请求 /api/create-blog</li>
<li>post 请求 /api/update-blog?id=100</li>
<li>get 请求 /api/get-blog?id=100</li>
</ul>
</li>
<li>Restful API 设计
<ul>
<li>post 请求 /api/blog</li>
<li>patch 请求 /api/blog/100</li>
<li>get 请求 /api/blog/100</li>
</ul>
</li>
</ul>
</li>
</ul>
</template>
