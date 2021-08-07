<template><h1 id="linux上iptables防火墙的基本应用教程" tabindex="-1"><a class="header-anchor" href="#linux上iptables防火墙的基本应用教程" aria-hidden="true">#</a> Linux上iptables防火墙的基本应用教程</h1>
<p>iptables是Linux上常用的防火墙软件，下面说一下iptables的安装、清除iptables规则、iptables只开放指定端口、iptables屏蔽指定ip、ip段及解封、删除已添加的iptables规则等iptables的基本应用。</p>
<h4 id="_1、安装iptables防火墙" tabindex="-1"><a class="header-anchor" href="#_1、安装iptables防火墙" aria-hidden="true">#</a> 1、安装iptables防火墙</h4>
<p>如果没有安装iptables需要先安装，CentOS执行：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>yum install iptables
</code></pre></div><p>Debian/Ubuntu执行：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>apt<span class="token operator">-</span><span class="token keyword">get</span> install iptables
</code></pre></div><h4 id="_2、清除已有iptables规则" tabindex="-1"><a class="header-anchor" href="#_2、清除已有iptables规则" aria-hidden="true">#</a> 2、清除已有iptables规则</h4>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>iptables <span class="token operator">-</span><span class="token constant">F</span>
iptables <span class="token operator">-</span><span class="token constant">X</span>
iptables <span class="token operator">-</span><span class="token constant">Z</span>
</code></pre></div><h4 id="_3、开放指定的端口" tabindex="-1"><a class="header-anchor" href="#_3、开放指定的端口" aria-hidden="true">#</a> 3、开放指定的端口</h4>
<p>-A和-I参数分别为添加到规则末尾和规则最前面。</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token function">#允许本地回环接口</span><span class="token punctuation">(</span>即运行本机访问本机<span class="token punctuation">)</span>
iptables <span class="token operator">-</span><span class="token constant">A</span> <span class="token constant">INPUT</span> <span class="token operator">-</span>i lo <span class="token operator">-</span>j <span class="token constant">ACCEPT</span>
# 允许已建立的或相关连的通行
iptables <span class="token operator">-</span><span class="token constant">A</span> <span class="token constant">INPUT</span> <span class="token operator">-</span>m state <span class="token operator">--</span>state <span class="token constant">ESTABLISHED</span><span class="token punctuation">,</span><span class="token constant">RELATED</span> <span class="token operator">-</span>j <span class="token constant">ACCEPT</span>
#允许所有本机向外的访问
iptables <span class="token operator">-</span><span class="token constant">A</span> <span class="token constant">OUTPUT</span> <span class="token operator">-</span>j <span class="token constant">ACCEPT</span>
# 允许访问<span class="token number">22</span>端口
iptables <span class="token operator">-</span><span class="token constant">A</span> <span class="token constant">INPUT</span> <span class="token operator">-</span>p tcp <span class="token operator">--</span>dport <span class="token number">22</span> <span class="token operator">-</span>j <span class="token constant">ACCEPT</span>
#允许访问<span class="token number">80</span>端口
iptables <span class="token operator">-</span><span class="token constant">A</span> <span class="token constant">INPUT</span> <span class="token operator">-</span>p tcp <span class="token operator">--</span>dport <span class="token number">80</span> <span class="token operator">-</span>j <span class="token constant">ACCEPT</span>
#允许访问<span class="token number">443</span>端口
iptables <span class="token operator">-</span><span class="token constant">A</span> <span class="token constant">INPUT</span> <span class="token operator">-</span>p tcp <span class="token operator">--</span>dport <span class="token number">443</span> <span class="token operator">-</span>j <span class="token constant">ACCEPT</span>
#允许<span class="token constant">FTP</span>服务的<span class="token number">21</span>和<span class="token number">20</span>端口
iptables <span class="token operator">-</span><span class="token constant">A</span> <span class="token constant">INPUT</span> <span class="token operator">-</span>p tcp <span class="token operator">--</span>dport <span class="token number">21</span> <span class="token operator">-</span>j <span class="token constant">ACCEPT</span>
iptables <span class="token operator">-</span><span class="token constant">A</span> <span class="token constant">INPUT</span> <span class="token operator">-</span>p tcp <span class="token operator">--</span>dport <span class="token number">20</span> <span class="token operator">-</span>j <span class="token constant">ACCEPT</span>
#如果有其他端口的话，规则也类似，稍微修改上述语句就行
#允许ping
iptables <span class="token operator">-</span><span class="token constant">A</span> <span class="token constant">INPUT</span> <span class="token operator">-</span>p icmp <span class="token operator">-</span>m icmp <span class="token operator">--</span>icmp<span class="token operator">-</span>type <span class="token number">8</span> <span class="token operator">-</span>j <span class="token constant">ACCEPT</span>
#禁止其他未允许的规则访问
iptables <span class="token operator">-</span><span class="token constant">A</span> <span class="token constant">INPUT</span> <span class="token operator">-</span>j <span class="token constant">REJECT</span>  #（注意：如果<span class="token number">22</span>端口未加入允许规则，<span class="token constant">SSH</span>链接会直接断开。）
iptables <span class="token operator">-</span><span class="token constant">A</span> <span class="token constant">FORWARD</span> <span class="token operator">-</span>j <span class="token constant">REJECT</span>
</code></pre></div><h4 id="_4、屏蔽ip" tabindex="-1"><a class="header-anchor" href="#_4、屏蔽ip" aria-hidden="true">#</a> 4、屏蔽IP</h4>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>#如果只是想屏蔽<span class="token constant">IP</span>的话“<span class="token number">3</span>、开放指定的端口”可以直接跳过。
#屏蔽单个<span class="token constant">IP</span>的命令是
iptables <span class="token operator">-</span><span class="token constant">I</span> <span class="token constant">INPUT</span> <span class="token operator">-</span>s <span class="token number">123.45</span><span class="token number">.6</span><span class="token number">.7</span> <span class="token operator">-</span>j <span class="token constant">DROP</span>
#封整个段即从<span class="token number">123.0</span><span class="token number">.0</span><span class="token number">.1</span>到<span class="token number">123.255</span><span class="token number">.255</span><span class="token number">.254</span>的命令
iptables <span class="token operator">-</span><span class="token constant">I</span> <span class="token constant">INPUT</span> <span class="token operator">-</span>s <span class="token number">123.0</span><span class="token number">.0</span><span class="token number">.0</span><span class="token operator">/</span><span class="token number">8</span> <span class="token operator">-</span>j <span class="token constant">DROP</span>
#封<span class="token constant">IP</span>段即从<span class="token number">123.45</span><span class="token number">.0</span><span class="token number">.1</span>到<span class="token number">123.45</span><span class="token number">.255</span><span class="token number">.254</span>的命令
iptables <span class="token operator">-</span><span class="token constant">I</span> <span class="token constant">INPUT</span> <span class="token operator">-</span>s <span class="token number">124.45</span><span class="token number">.0</span><span class="token number">.0</span><span class="token operator">/</span><span class="token number">16</span> <span class="token operator">-</span>j <span class="token constant">DROP</span>
#封<span class="token constant">IP</span>段即从<span class="token number">123.45</span><span class="token number">.6</span><span class="token number">.1</span>到<span class="token number">123.45</span><span class="token number">.6</span><span class="token number">.254</span>的命令是
iptables <span class="token operator">-</span><span class="token constant">I</span> <span class="token constant">INPUT</span> <span class="token operator">-</span>s <span class="token number">123.45</span><span class="token number">.6</span><span class="token number">.0</span><span class="token operator">/</span><span class="token number">24</span> <span class="token operator">-</span>j <span class="token constant">DROP</span>
</code></pre></div><h4 id="_5、屏蔽或允许某ip访问指定端口" tabindex="-1"><a class="header-anchor" href="#_5、屏蔽或允许某ip访问指定端口" aria-hidden="true">#</a> 5、屏蔽或允许某IP访问指定端口</h4>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>#屏蔽某<span class="token constant">IP</span>访问指定端口，以<span class="token number">22</span>端口为例命令是
iptables <span class="token operator">-</span><span class="token constant">I</span> <span class="token constant">INPUT</span> <span class="token operator">-</span>s <span class="token number">123.45</span><span class="token number">.6</span><span class="token number">.7</span> <span class="token operator">-</span>p tcp <span class="token operator">--</span>dport <span class="token number">22</span> <span class="token operator">-</span>j <span class="token constant">DROP</span>
#允许某<span class="token constant">IP</span>访问指定端口，以<span class="token number">22</span>端口为例命令是
iptables <span class="token operator">-</span><span class="token constant">I</span> <span class="token constant">INPUT</span> <span class="token operator">-</span>p tcp <span class="token operator">--</span>dport <span class="token number">22</span> <span class="token operator">-</span>j <span class="token constant">DROP</span>
iptables <span class="token operator">-</span><span class="token constant">I</span> <span class="token constant">INPUT</span> <span class="token operator">-</span>s <span class="token number">123.45</span><span class="token number">.6</span><span class="token number">.7</span> <span class="token operator">-</span>p tcp <span class="token operator">--</span>dport <span class="token number">22</span> <span class="token operator">-</span>j <span class="token constant">ACCEPT</span>
</code></pre></div><h4 id="_6、查看已添加的iptables规则" tabindex="-1"><a class="header-anchor" href="#_6、查看已添加的iptables规则" aria-hidden="true">#</a> 6、查看已添加的iptables规则</h4>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>iptables <span class="token operator">-</span><span class="token constant">L</span> <span class="token operator">-</span>n
</code></pre></div><blockquote>
<p>v：显示详细信息，包括每条规则的匹配包数量和匹配字节数<br>
x：在 v 的基础上，禁止自动单位换算（K、M） vps侦探<br>
n：只显示IP地址和端口号，不将ip解析为域名</p>
</blockquote>
<h4 id="_7、删除已添加的iptables规则" tabindex="-1"><a class="header-anchor" href="#_7、删除已添加的iptables规则" aria-hidden="true">#</a> 7、删除已添加的iptables规则</h4>
<p>将所有iptables以序号标记显示，执行：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>iptables <span class="token operator">-</span><span class="token constant">L</span> <span class="token operator">-</span>n <span class="token operator">--</span>line<span class="token operator">-</span>numbers
</code></pre></div><p>比如要删除INPUT里序号为8的规则(要删除OUTPUT的话就改成OUTPUT，以此类推)，执行：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>iptables <span class="token operator">-</span><span class="token constant">D</span> <span class="token constant">INPUT</span> <span class="token number">8</span>
</code></pre></div><h4 id="_8、iptables的开机启动及规则保存" tabindex="-1"><a class="header-anchor" href="#_8、iptables的开机启动及规则保存" aria-hidden="true">#</a> 8、iptables的开机启动及规则保存</h4>
<p>CentOS上可能会存在安装好iptables后，iptables并不开机自启动，可以执行一下：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>chkconfig <span class="token operator">--</span>level <span class="token number">345</span> iptables on
</code></pre></div><p>将其加入开机启动。</p>
<p>CentOS上可以执行：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>service iptables save
</code></pre></div><p>保存规则。</p>
<p>另外更需要注意的是Debian/Ubuntu上iptables是不会保存规则的。</p>
<p>需要按如下步骤进行，让网卡关闭是保存iptables规则，启动时加载iptables规则：</p>
<p>创建/etc/network/if-post-down.d/iptables 文件，添加如下内容：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token hashbang comment">#!/bin/bash</span>
iptables<span class="token operator">-</span>save <span class="token operator">></span> <span class="token operator">/</span>etc<span class="token operator">/</span>iptables<span class="token punctuation">.</span>rules
</code></pre></div><p>执行：chmod +x /etc/network/if-post-down.d/iptables 添加执行权限。</p>
<p>创建/etc/network/if-pre-up.d/iptables 文件，添加如下内容：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token hashbang comment">#!/bin/bash</span>
iptables<span class="token operator">-</span>restore <span class="token operator">&lt;</span> <span class="token operator">/</span>etc<span class="token operator">/</span>iptables<span class="token punctuation">.</span>rules
</code></pre></div><p>执行：chmod +x /etc/network/if-pre-up.d/iptables 添加执行权限。</p>
<p>关于更多的iptables的使用方法可以执行：iptables –help或网上搜索一下iptables参数的说明。</p>
<h4 id="_9、查看iptables启动状态" tabindex="-1"><a class="header-anchor" href="#_9、查看iptables启动状态" aria-hidden="true">#</a> 9、查看iptables启动状态</h4>
<p>iptables 所在目录 ：/etc/sysconfig/iptables</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code># service iptables status    #查看iptables状态
# service iptables restart   #iptables服务重启
# service iptables stop      #iptables服务禁用
</code></pre></div><blockquote>
<p>出处：VPS侦探 本文链接地址：<a href="https://www.vpser.net/security/linux-iptables.html" target="_blank" rel="noopener noreferrer">https://www.vpser.net/security/linux-iptables.html<OutboundLink/></a></p>
</blockquote>
</template>
