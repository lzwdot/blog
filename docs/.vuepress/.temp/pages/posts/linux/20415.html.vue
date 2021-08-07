<template><h1 id="supervisor安装以及配置常见问题" tabindex="-1"><a class="header-anchor" href="#supervisor安装以及配置常见问题" aria-hidden="true">#</a> supervisor安装以及配置常见问题</h1>
<h1 id="基本思路" tabindex="-1"><a class="header-anchor" href="#基本思路" aria-hidden="true">#</a> 基本思路：</h1>
<p>1、首先我们要明确问题出在supervisor上还是启动的程序上，可以用<code>ps -ef | grep supervisord</code>查看是否启动，在用ps查看自己的进程有没有启动；</p>
<p>2、确认下启动的supervisor配置文件是哪个，有的是/etc/supervisor/supervisord.conf，有的是/etc/supervisord.conf，以自己的为准，不要弄混；</p>
<p><strong>3、（重点）推荐使用apt-get安装，其次是pip ，最后才是yum。不要问为什么，踩坑踩得。另外，尽量用supervisord 3.x以上的版本，2.x版本出问题概率大；</strong></p>
<p>4、supervisord的日志在 /var/log/supervisor/supervisord.log，启动失败一般能再这里找到有用的信息</p>
<h1 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h1>
<p>启动守护进程：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>supervisord <span class="token operator">-</span>c <span class="token operator">/</span>etc<span class="token operator">/</span>supervisor<span class="token operator">/</span>supervisord<span class="token punctuation">.</span>conf
</code></pre></div><p>重载配置：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>supervisorctl reload
</code></pre></div><h1 id="具体报错分析" tabindex="-1"><a class="header-anchor" href="#具体报错分析" aria-hidden="true">#</a> 具体报错分析</h1>
<p>下面是三种常见的通用报错：</p>
<h2 id="第一类" tabindex="-1"><a class="header-anchor" href="#第一类" aria-hidden="true">#</a> 第一类</h2>
<p>报错信息：<br>
<code>error: &lt;class 'socket.error'&gt;, [Errno 2] No such file or directory: file: &lt;string&gt; line: 1</code></p>
<p>解决办法：<br>
这个可能有多种原因，可能是已经启动过了也可能是没权限，解决步骤如下：</p>
<ol>
<li>先要确认是否已经启动过了：’ps -ef | grep supervisord’</li>
<li>如果有的话先kill掉</li>
<li>运行下面命令：</li>
</ol>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>sudo touch <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>run<span class="token operator">/</span>supervisor<span class="token punctuation">.</span>sock
sudo chmod <span class="token number">777</span> <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>run<span class="token operator">/</span>supervisor<span class="token punctuation">.</span>sock4
</code></pre></div><p>. 再尝试重新启动：<code>supervisord -c /etc/supervisord.conf</code>(如果没有文件找个别人的配置拷贝过来或者运行echosupervisordconf &gt; /etc/supervisord.conf)</p>
<h2 id="第二类" tabindex="-1"><a class="header-anchor" href="#第二类" aria-hidden="true">#</a> 第二类</h2>
<p>报错信息：<br>
<code>Error: .ini file does not include supervisorctl section</code></p>
<p>解决办法：<br>
又是一个权限问题的，步骤：</p>
<ol>
<li>先确保supervisord.conf中有[supervisord]，[supervisorctl]有这两个基本模块，还有[program:XXX]自己程序的配置（可以在supervisord.conf也可以在/etc/supervisor/*.ini中）</li>
<li>最关键的两个命令：`chmod +x /usr/bin/supervisord</li>
<li>+x /usr/bin/supervisorctl</li>
</ol>
<p>chmod +x /etc/supervisord.conf`主要是把把相关文件都授权了</p>
<ol>
<li>把supervisord杀掉后再次启动supervisord</li>
</ol>
<h2 id="第三类" tabindex="-1"><a class="header-anchor" href="#第三类" aria-hidden="true">#</a> 第三类</h2>
<p>报错信息：<br>
<code>Exited too quickly (process log may have details)</code></p>
<p>如果前面的问题都解决了，但还是会遇到这个问题，恭喜你已经离胜利很近了，起码supervisord本身已经没什么问题了^^</p>
<p>解决办法：</p>
<ol>
<li>先确认[program:XXX]中自己的程序的command=&lt;启动命令&gt;和 directory=&lt;运行命令的路径&gt;没有问题，python是不是用的自己要的环境的python（比如虚拟环境的），log文件的文件夹是不是已经创建（没创建的话supervisor没权限生成log文件），以及改log文件是不是授权给所有用户了（可参考前面的解决办法<code>chmod +x aaaaa.log</code>）</li>
<li>确保用上面的配置中的command在指定路径可以直接运行不会报错，这时候一般就不会有什么问题了。这时候tail你自己的log文件一般就能看到log信息，启动失败报错的信息也会在你的log文件中，照着解决后<code>supervisorctl reload</code>就好了。</li>
<li>如果上面的命令确保可以跑，但还是没法正常运行，也看不到自己程序的报错（不然你就能根据报错解决问题了），那么恭喜，你遇到了跟我一样的情况。我的解决办法很诡异，尝试把[program:XXX]中的名字换成了一个跟启动命令不一样的另一个名字（不要太短），reload之后居然就可以跑了。。。。嗯，很不合常理，但是对我来说确实管用了。</li>
</ol>
<p>可参考文章：<br>
<a href="http://flowsnow.net/2017/09/25/%E8%AF%A6%E8%A7%A3supervisor%E8%BF%9B%E7%A8%8B%E7%AE%A1%E7%90%86/" target="_blank" rel="noopener noreferrer">详解supervisor进程管理<OutboundLink/></a><br>
<a href="https://www.jianshu.com/p/805977544d7f" target="_blank" rel="noopener noreferrer">supervisor 进程管理<OutboundLink/></a></p>
</template>
