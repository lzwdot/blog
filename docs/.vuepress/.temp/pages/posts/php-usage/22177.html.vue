<template><h1 id="windows下用nginx配置https服务器" tabindex="-1"><a class="header-anchor" href="#windows下用nginx配置https服务器" aria-hidden="true">#</a> Windows下用Nginx配置https服务器</h1>
<p>以Windows 10系统为例。</p>
<h3 id="一、安装openssl" tabindex="-1"><a class="header-anchor" href="#一、安装openssl" aria-hidden="true">#</a> 一、安装OpenSSL</h3>
<p>先到<a href="http://slproweb.com/products/Win32OpenSSL.html" target="_blank" rel="noopener noreferrer">http://slproweb.com/products/Win32OpenSSL.html<OutboundLink/></a> 去下载OpenSSL（根据系统选择32位或者64位版本下载安装）。</p>
<p>然后安装在C:OpenSSL-Win64下。</p>
<p>然后配置环境变量。在系统环境变量中添加环境变量：</p>
<p>变量名：OPENSSL_HOME</p>
<p>变量值：C:OpenSSL-Win64in;</p>
<p>（变量值为OPENSSL安装位置下的bin目录）</p>
<p>并在Path变量结尾添加一条： %OPENSSL_HOME%</p>
<h3 id="二、安装nginx" tabindex="-1"><a class="header-anchor" href="#二、安装nginx" aria-hidden="true">#</a> 二、安装Nginx</h3>
<p>到<a href="http://nginx.org/en/download.html" target="_blank" rel="noopener noreferrer">Nginx官网<OutboundLink/></a>下载Nginx，我这里下载的是 nginx/Windows-1.12.0 这个版本。</p>
<p>把下载好的压缩包解压出来，拷贝其中的nginx-1.12.0目录到c:下。并将文件夹名字修改为nginx。这样，Nginx就被安装到了c:<br>
ginx目录下。</p>
<p>进入到C:<br>
ginx目录下，双击nginx.exe文件即可启动服务器。在浏览器地址栏输入<a href="http://localhost" target="_blank" rel="noopener noreferrer">http://localhost<OutboundLink/></a>，如果可以成功访问到Nginx的欢迎界面，则说明安装成功。</p>
<h3 id="三、生成证书" tabindex="-1"><a class="header-anchor" href="#三、生成证书" aria-hidden="true">#</a> 三、生成证书</h3>
<h4 id="_1、首先在nginx安装目录中创建ssl文件夹用于存放证书。比如我的文件目录为-c" tabindex="-1"><a class="header-anchor" href="#_1、首先在nginx安装目录中创建ssl文件夹用于存放证书。比如我的文件目录为-c" aria-hidden="true">#</a> 1、首先在Nginx安装目录中创建ssl文件夹用于存放证书。比如我的文件目录为 C:</h4>
<p>ginxssl</p>
<p>在控制台中执行：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>cd <span class="token constant">C</span><span class="token operator">:</span>
ginxssl 
</code></pre></div><h4 id="_2、创建私钥" tabindex="-1"><a class="header-anchor" href="#_2、创建私钥" aria-hidden="true">#</a> 2、创建私钥</h4>
<p>在命令行中执行命令：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>openssl genrsa <span class="token operator">-</span>des3 <span class="token operator">-</span>out test<span class="token punctuation">.</span>key <span class="token number">1024</span>     # test文件名是自己随便起即可 
</code></pre></div><p>输入密码后，再次重复输入确认密码。记住此密码，后面会用到。</p>
<h4 id="_3、创建csr证书" tabindex="-1"><a class="header-anchor" href="#_3、创建csr证书" aria-hidden="true">#</a> 3、创建csr证书</h4>
<p>在命令行中执行命令：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>openssl req <span class="token operator">-</span><span class="token keyword">new</span> <span class="token operator">-</span>key test<span class="token punctuation">.</span>key <span class="token operator">-</span>out test<span class="token punctuation">.</span>csr 
</code></pre></div><p>其中key文件为刚才生成的文件。</p>
<p>执行上述命令后，需要输入一系列的信息。输入的信息中最重要的为Common Name，这里输入的域名即为我们要使用https访问的域名 ，比如我输入的是localhost。其它的内容随便填即可。</p>
<p>以上步骤完成后，ssl文件夹内出现两个文件：test.csr 和 buduhuis.key</p>
<h4 id="_4、去除密码。" tabindex="-1"><a class="header-anchor" href="#_4、去除密码。" aria-hidden="true">#</a> 4、去除密码。</h4>
<p>在加载SSL支持的Nginx并使用上述私钥时除去必须的口令，否则会在启动nginx的时候需要输入密码。</p>
<p>复制test.key并重命名为test.copy.key。</p>
<p>在命令行中执行如下命令以去除口令：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>openssl rsa <span class="token operator">-</span><span class="token keyword">in</span> test<span class="token punctuation">.</span>copy<span class="token punctuation">.</span>key <span class="token operator">-</span>out test<span class="token punctuation">.</span>key 
</code></pre></div><p>然后输入密码，这个密码就是上文中在创建私钥的时候输入的密码。</p>
<h4 id="_5、生成crt证书" tabindex="-1"><a class="header-anchor" href="#_5、生成crt证书" aria-hidden="true">#</a> 5、生成crt证书</h4>
<p>在命令行中执行此命令：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>openssl x509 <span class="token operator">-</span>req <span class="token operator">-</span>days <span class="token number">365</span> <span class="token operator">-</span><span class="token keyword">in</span> test<span class="token punctuation">.</span>csr <span class="token operator">-</span>signkey test<span class="token punctuation">.</span>key <span class="token operator">-</span>out test<span class="token punctuation">.</span>crt 
</code></pre></div><p>至此，证书生成完毕。我们发现，ssl文件夹中一共生成了4个文件。下面，配置https服务器的时候，我们需要用到的是其中的test.crt和test.key这两个文件。</p>
<h3 id="四、修改nginx的nginx-conf配置文件" tabindex="-1"><a class="header-anchor" href="#四、修改nginx的nginx-conf配置文件" aria-hidden="true">#</a> 四、修改Nginx的nginx.conf配置文件</h3>
<p>我的这个文件在C:<br>
ginxconf目录下。用任意一个编辑器（如Sublime Text之类）打开这个nginx.conf文件。</p>
<p>找到HTTPS server配置的那一段（即包含有listen 443 ssl配置那一段）。我们发现这段代码被注释掉了。所以，首先我们把该段代码前面的#号去掉。然后分别修改其中的ssl_certificate和ssl_certificate_key配置项为刚才所生成的test.crt和test.key这两个文件的目录。并配置server_name为localhost。修改后的该段配置如下：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">443</span> ssl<span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>
    ssl_certificate      <span class="token constant">C</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>nginx<span class="token comment">//ssl//test.crt;  # 这个是证书的crt文件所在目录</span>
    ssl_certificate_key  <span class="token constant">C</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>nginx<span class="token comment">//ssl//test.key;  # 这个是证书key文件所在目录</span>
    ssl_session_cache    shared<span class="token operator">:</span><span class="token constant">SSL</span><span class="token operator">:</span><span class="token number">1</span>m<span class="token punctuation">;</span>
    ssl_session_timeout  <span class="token number">5</span>m<span class="token punctuation">;</span>
    ssl_ciphers  <span class="token constant">HIGH</span><span class="token operator">:</span><span class="token operator">!</span>aNULL<span class="token operator">:</span><span class="token operator">!</span><span class="token constant">MD5</span><span class="token punctuation">;</span>
    ssl_prefer_server_ciphers  on<span class="token punctuation">;</span>
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
      root   html<span class="token punctuation">;</span>                  # 这个是指定一个项目所在目录
      index  index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm<span class="token punctuation">;</span>  # 这个是指定首页的文件名
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>注意一下那两个证书的文件路径的写法。</p>
<h3 id="五、nginx的常用操作" tabindex="-1"><a class="header-anchor" href="#五、nginx的常用操作" aria-hidden="true">#</a> 五、Nginx的常用操作</h3>
<p>在继续后面的内容之前，先简单介绍下Windows命令行中操作Nginx的几个常用的语句：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>start nginx               # 启动Nginx
nginx<span class="token punctuation">.</span>exe <span class="token operator">-</span>s stop         # 快速停止Nginx，可能并不保存相关信息
nginx<span class="token punctuation">.</span>exe <span class="token operator">-</span>s quit         # 完整有序的停止Nginx，并保存相关信息
nginx<span class="token punctuation">.</span>exe <span class="token operator">-</span>s reload       # 重新载入Nginx，当配置信息修改，需要重新载入这些配置时使用此命令。
nginx<span class="token punctuation">.</span>exe <span class="token operator">-</span>s reopen       # 重新打开日志文件
nginx <span class="token operator">-</span>v                  # 查看Nginx版本 
</code></pre></div><p>因为修改了配置文件，所以需要退出控制台，并重新打开一个控制台。执行如下命令：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>cd c<span class="token operator">:</span>
ginx
nginx<span class="token punctuation">.</span>exe <span class="token operator">-</span>s quit
start nginx 
</code></pre></div><p>即退出Nginx，然后再重新启动它。这时候，在浏览器地址栏输入<a href="https://localhost" target="_blank" rel="noopener noreferrer">https://localhost<OutboundLink/></a>并回车。</p>
<p>这时候，你可能看到“您的连接不是私密连接”的提示，单击页面中的“高级”，并接着单击“继续前往m.test.com（不安全）”，就可以看到Nginx的欢迎界面了。说明https服务器已经配置成功了。</p>
<p>如果你只想用<a href="https://xn--localhosthttps-eq7vl86cy9olv4eoy7h9eragg3a" target="_blank" rel="noopener noreferrer">https://localhost访问这个https服务器<OutboundLink/></a>，那么下面的内容你就不用接着往下看了。</p>
<p>但是，也许你可能还想要用一个别的域名（例如：<a href="https://m.test.com" target="_blank" rel="noopener noreferrer">https://m.test.com<OutboundLink/></a>）来访问这个服务器。那么怎么做呢？这就需要继续往下看了。</p>
<h3 id="六、修改hosts配置-实现域名映射" tabindex="-1"><a class="header-anchor" href="#六、修改hosts配置-实现域名映射" aria-hidden="true">#</a> 六、修改hosts配置，实现域名映射</h3>
<p>要想用别的域名来访问上文配置好的https服务器，也很简单，修改hosts配置就可以了。你可以到<a href="http://www.xiazaiba.com/html/23970.html" target="_blank" rel="noopener noreferrer">这里<OutboundLink/></a>下载一个hosts管理工具——SwitchHosts。安装号好之后，以管理员身份运行它。并添加上一个hosts项：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>  m<span class="token punctuation">.</span>test<span class="token punctuation">.</span>com 
</code></pre></div><p>这样，你就可以通过<a href="https://m.test.com" target="_blank" rel="noopener noreferrer">https://m.test.com<OutboundLink/></a>来访问配置好的https服务器了。</p>
<p>顺便提一下，关于Mac环境下如何映射一个http路径到一个https路径，可以通过Charles工具来实现。参见<a href="http://www.cnblogs.com/jiasm/archive/2016/11/14/6063317.html" target="_blank" rel="noopener noreferrer">这里<OutboundLink/></a>。</p>
<h3 id="七、可能遇到的问题及其解决办法" tabindex="-1"><a class="header-anchor" href="#七、可能遇到的问题及其解决办法" aria-hidden="true">#</a> 七、可能遇到的问题及其解决办法</h3>
<h4 id="_1、端口被占用" tabindex="-1"><a class="header-anchor" href="#_1、端口被占用" aria-hidden="true">#</a> 1、端口被占用</h4>
<p>完成上述工作之后，在启动nginx的时候，可能提示端口被占用或者虽然没有出错提示，但是访问https页面却访问不到的情况，这时候，你需要检查一下443端口是否已经被占用了。</p>
<p>可以用如下命令查看：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>netstat <span class="token operator">-</span>ano <span class="token operator">|</span> findstr <span class="token number">443</span> 
</code></pre></div><p>一般来说，如果有程序在占用的话，输出的第一行的最后一列就是占用了443端口的PID。</p>
<p>找到这个PID之后，我们就用如下命令强制结束它：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>taskkill <span class="token operator">/</span><span class="token constant">F</span> <span class="token operator">/</span><span class="token constant">IM</span> 这里输入上面找出来的<span class="token constant">PID</span> 
</code></pre></div><h4 id="_2、出现错误提示-您的连接不是私密连接" tabindex="-1"><a class="header-anchor" href="#_2、出现错误提示-您的连接不是私密连接" aria-hidden="true">#</a> 2、出现错误提示：“您的连接不是私密连接”</h4>
<p>点击页面最底部的“高级”，然后点“继续前往WALLET.WALLET.COM（不安全）”</p>
<h4 id="_3、静态的页面资源在开发者工具的network中显示的status为failed" tabindex="-1"><a class="header-anchor" href="#_3、静态的页面资源在开发者工具的network中显示的status为failed" aria-hidden="true">#</a> 3、静态的页面资源在开发者工具的Network中显示的Status为failed</h4>
<p>可以在开发者工具的Network中的该资源上右键单击它，然后选择“Open in new tab”，接着会提示“您的连接不是私密连接”，然后按照上面的问题2的处理方式进行处理就可以了。本质上与上一个问题是同样的问题，只不过因为你的静态资源域名和页面域名用的不是同一个罢了。</p>
<h4 id="_4、忘记配置hosts-导致访问到的不是你本机上的服务的问题" tabindex="-1"><a class="header-anchor" href="#_4、忘记配置hosts-导致访问到的不是你本机上的服务的问题" aria-hidden="true">#</a> 4、忘记配置hosts，导致访问到的不是你本机上的服务的问题</h4>
<p>只需要配置好host就可以了。注意，如果你的页面域名、静态资源域名两者是不一样的话，那么两者都需要配置hosts中，比如：</p>
<p>127.0.0.1 m.paian.com 127.0.0.1 static.pain.com</p>
<h4 id="_5、出现权限不足的问题" tabindex="-1"><a class="header-anchor" href="#_5、出现权限不足的问题" aria-hidden="true">#</a> 5、出现权限不足的问题</h4>
<p>这时候，你只需要以管理员身份打开命令行工具，再正常进行操作即可。</p>
<p>原文：<a href="http://mobilesite.github.io/2017/03/11/windows-nginx-https-config/" target="_blank" rel="noopener noreferrer">http://mobilesite.github.io/2017/03/11/windows-nginx-https-config/<OutboundLink/></a></p>
</template>
