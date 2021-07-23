---
title: "WordPress利用.htaccess解决301重定向"
permalink: "/archives/22731"
date: "2019-04-02 09:32:00"
categories: 
  - "PHP应用"
  - "wordpress"
tags: 
  - "PHP应用"
  - "wordpress"
---

# WordPress利用.htaccess解决301重定向

当WordPress更好域名或者修改固定链接时，最麻烦的就是产生众多的404时，从搜索引擎或者其他地方进来的链接都打不开了，从搜索引擎优化角度和用户体验上出发，301重定向是网址重定向最为可行的一种办法。

比如，改版前固定链接：

[http://test.cn/archives/15627.html](http://test.cn/archives/15627.html)

改变后的链接：

[http://wpfaq.cn/archives/15627.html](http://wpfaq.cn/archives/15627.html)

在.htaccess文件添加

``` js 
# REDIRECTS
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{HTTP_HOST} ^test.cn
RewriteRule ^(.*)$ http://wpfaq.cn/$1 [R=301,L]
</IfModule>
# END REDIRECTS 
```

RewriteCond是旧域名，RewriteRule是新域名。

> 注意：要使用.htaccess文件，Apache必须开启rewirte模块。
