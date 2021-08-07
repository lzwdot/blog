<template><h1 id="nginx-常用参数配置" tabindex="-1"><a class="header-anchor" href="#nginx-常用参数配置" aria-hidden="true">#</a> Nginx 常用参数配置</h1>
<p>nginx配置文件 <code>/usr/local/nginx/conf/nginx.conf</code> ， 四部分组成：main(全区设置)，server(主机配置)，upstream(负载均衡服务器设置)，和location(URL匹配特定位置设置)。</p>
<p><img src="@source/posts/nginx/images/822986579.png" alt=""></p>
<h3 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量" aria-hidden="true">#</a> 全局变量</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code># 配置用户或者组，默认为nobody nobody。
#user www www<span class="token punctuation">;</span>
 #Nginx开启的worker进程数，建议为<span class="token constant">CPU</span>的核数
#worker_processes <span class="token number">2</span><span class="token punctuation">;</span>
#指定nginx进程运行文件存放地址
#pid <span class="token operator">/</span>nginx<span class="token operator">/</span>pid<span class="token operator">/</span>nginx<span class="token punctuation">.</span>pid<span class="token punctuation">;</span>
#指定日志路径，级别。这个设置可以放入全局块、http块、server块，级别以此为：debug<span class="token operator">|</span>info<span class="token operator">|</span>notice<span class="token operator">|</span>warn<span class="token operator">|</span>error<span class="token operator">|</span>crit<span class="token operator">|</span>alert<span class="token operator">|</span>emerg
error_log log<span class="token operator">/</span>error<span class="token punctuation">.</span>log debug<span class="token punctuation">;</span>
#可以在任意地方使用include指令实现配置文件的包含，类似于apache中的include方法，可减少主配置文件长度。
include vhosts<span class="token comment">/*.conf;
</span></code></pre></div><h3 id="事件配置" tabindex="-1"><a class="header-anchor" href="#事件配置" aria-hidden="true">#</a> 事件配置</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>events <span class="token punctuation">{</span>
    #use <span class="token punctuation">[</span> kqueue <span class="token operator">|</span> rtsig <span class="token operator">|</span> epoll <span class="token operator">|</span> <span class="token operator">/</span>dev<span class="token operator">/</span>poll <span class="token operator">|</span> select <span class="token operator">|</span> poll <span class="token punctuation">]</span><span class="token punctuation">;</span> epoll模型是Linux <span class="token number">2.6</span>以上版本内核中的高性能网络<span class="token constant">I</span><span class="token operator">/</span><span class="token constant">O</span>模型，如果跑在FreeBSD上面，就用kqueue模型。
    use epoll<span class="token punctuation">;</span>
    #每个进程可以处理的最大连接数，理论上每台nginx服务器的最大连接数为worker_processes<span class="token operator">*</span>worker_connections。理论值：worker_rlimit_nofile<span class="token operator">/</span>worker_processes
    #注意：最大客户数也由系统的可用socket连接数限制（<span class="token operator">~</span> <span class="token number">64</span>K），所以设置不切实际的高没什么好处
    worker_connections  <span class="token number">65535</span><span class="token punctuation">;</span>
    #worker工作方式：串行（一定程度降低负载，但服务器吞吐量大时，关闭使用并行方式）
    multi_accept on<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="http参数" tabindex="-1"><a class="header-anchor" href="#http参数" aria-hidden="true">#</a> http参数</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>http <span class="token punctuation">{</span>
    #文件扩展名与文件类型映射表
    include mime<span class="token punctuation">.</span>types<span class="token punctuation">;</span>
    #默认文件类型
    default_type application<span class="token operator">/</span>octet<span class="token operator">-</span>stream<span class="token punctuation">;</span>
    #日志相关定义
    #log_format  main  <span class="token string">'$remote_addr - $remote_user [$time_local] "$request" '</span>
    #                  <span class="token string">'$status $body_bytes_sent "$http_referer" '</span>
    #                  <span class="token string">'"$http_user_agent" "$http_x_forwarded_for"'</span><span class="token punctuation">;</span>
    #定义日志的格式。后面定义要输出的内容。
    #<span class="token number">1.</span>$remote_addr 与$http_x_forwarded_for 用以记录客户端的ip地址；
    #<span class="token number">2.</span>$remote_user ：用来记录客户端用户名称；
    #<span class="token number">3.</span>$time_local ：用来记录访问时间与时区；
    #<span class="token number">4.</span>$request  ：用来记录请求的url与http协议；
    #<span class="token number">5.</span>$status ：用来记录请求状态；
    #<span class="token number">6.</span>$body_bytes_sent ：记录发送给客户端文件主体内容大小；
    #<span class="token number">7.</span>$http_referer ：用来记录从那个页面链接访问过来的；
    #<span class="token number">8.</span>$http_user_agent ：记录客户端浏览器的相关信息
    #access_log  logs<span class="token operator">/</span>access<span class="token punctuation">.</span>log  main<span class="token punctuation">;</span> #连接日志的路径，指定的日志格式放在最后。
    error_log logs<span class="token operator">/</span>error<span class="token punctuation">.</span>log crit<span class="token punctuation">;</span> #只记录更为严重的错误日志，减少<span class="token constant">IO</span>压力
    #access_log  off<span class="token punctuation">;</span> #关闭日志
    #默认编码
    #charset utf<span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">;</span>
    #服务器名字的hash表大小
    server_names_hash_bucket_size <span class="token number">128</span><span class="token punctuation">;</span>
    #客户端请求单个文件的最大字节数
    client_max_body_size <span class="token number">8</span>m<span class="token punctuation">;</span>
    #指定来自客户端请求头的hearerbuffer大小
    client_header_buffer_size <span class="token number">32</span>k<span class="token punctuation">;</span>
    #指定客户端请求中较大的消息头的缓存最大数量和大小。
    large_client_header_buffers <span class="token number">4</span> <span class="token number">64</span>k<span class="token punctuation">;</span>
    #开启高效传输模式。
    sendfile on<span class="token punctuation">;</span>
    #防止网络阻塞
    tcp_nopush on<span class="token punctuation">;</span>
    tcp_nodelay on<span class="token punctuation">;</span>
    #客户端连接超时时间，单位是秒
    keepalive_timeout <span class="token number">60</span><span class="token punctuation">;</span>
    #客户端请求头读取超时时间
    client_header_timeout <span class="token number">10</span><span class="token punctuation">;</span>
    #设置客户端请求主体读取超时时间
    client_body_timeout <span class="token number">10</span><span class="token punctuation">;</span>
    #响应客户端超时时间
    send_timeout <span class="token number">10</span><span class="token punctuation">;</span>
    #FastCGI相关参数是为了改善网站的性能：减少资源占用，提高访问速度。
    fastcgi_connect_timeout <span class="token number">300</span><span class="token punctuation">;</span>
    fastcgi_send_timeout <span class="token number">300</span><span class="token punctuation">;</span>
    fastcgi_read_timeout <span class="token number">300</span><span class="token punctuation">;</span>
    fastcgi_buffer_size <span class="token number">64</span>k<span class="token punctuation">;</span>
    fastcgi_buffers <span class="token number">4</span> <span class="token number">64</span>k<span class="token punctuation">;</span>
    fastcgi_busy_buffers_size <span class="token number">128</span>k<span class="token punctuation">;</span>
    fastcgi_temp_file_write_size <span class="token number">128</span>k<span class="token punctuation">;</span>
    #gzip模块设置
    gzip on<span class="token punctuation">;</span>  #开启gzip压缩输出
    gzip_min_length <span class="token number">1</span>k<span class="token punctuation">;</span> #最小压缩文件大小
    gzip_buffers <span class="token number">4</span> <span class="token number">16</span>k<span class="token punctuation">;</span> #压缩缓冲区
    gzip_http_version <span class="token number">1.0</span><span class="token punctuation">;</span> #压缩版本（默认<span class="token number">1.1</span>，前端如果是squid2<span class="token punctuation">.</span><span class="token number">5</span>请使用<span class="token number">1.0</span>）
    gzip_comp_level <span class="token number">2</span><span class="token punctuation">;</span> #压缩等级 <span class="token number">1</span><span class="token operator">-</span><span class="token number">9</span> 等级越高，压缩效果越好，节约宽带，但<span class="token constant">CPU</span>消耗大
    gzip_types text<span class="token operator">/</span>plain application<span class="token operator">/</span>x<span class="token operator">-</span>javascript text<span class="token operator">/</span>css application<span class="token operator">/</span>xml<span class="token punctuation">;</span> #压缩类型，默认就已经包含text<span class="token operator">/</span>html，所以下面就不用再写了，写上去也不会有问题，但是会有一个warn。
    gzip_vary on<span class="token punctuation">;</span> #前端缓存服务器缓存经过压缩的页面
<span class="token punctuation">}</span> 
</code></pre></div><h3 id="虚拟主机基本设置" tabindex="-1"><a class="header-anchor" href="#虚拟主机基本设置" aria-hidden="true">#</a> 虚拟主机基本设置</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>#虚拟主机定义
server <span class="token punctuation">{</span>
    #监听端口
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    #访问域名
    server_name  localhost<span class="token punctuation">;</span>
    #编码格式，若网页格式与此不同，将被自动转码
    #charset koi8<span class="token operator">-</span>r<span class="token punctuation">;</span>
    #虚拟主机访问日志定义
    #access_log  logs<span class="token operator">/</span>host<span class="token punctuation">.</span>access<span class="token punctuation">.</span>log  main<span class="token punctuation">;</span>
    #对<span class="token constant">URL</span>进行匹配
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        #访问路径，可相对也可绝对路径
        root   html<span class="token punctuation">;</span>
        #首页文件。以下按顺序匹配
        index  index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    #错误信息返回页面
    #error_page  <span class="token number">404</span> <span class="token operator">/</span><span class="token number">404.</span>html<span class="token punctuation">;</span>
    # redirect server error pages to the <span class="token keyword">static</span> page <span class="token operator">/</span><span class="token number">50</span>x<span class="token punctuation">.</span>html
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  <span class="token operator">/</span><span class="token number">50</span>x<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> <span class="token operator">/</span><span class="token number">50</span>x<span class="token punctuation">.</span>html <span class="token punctuation">{</span>
        root   html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    #访问<span class="token constant">URL</span>以<span class="token punctuation">.</span>php结尾则自动转交给<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>
    # proxy the <span class="token constant">PHP</span> scripts to Apache listening on <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">80</span>
    #location <span class="token operator">~</span> <span class="token punctuation">.</span>php$ <span class="token punctuation">{</span>
    #    proxy_pass   http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">;</span>
    #<span class="token punctuation">}</span>
    #php脚本请求全部转发给FastCGI处理
    # pass the <span class="token constant">PHP</span> scripts to FastCGI server listening on <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">9000</span>
    #location <span class="token operator">~</span> <span class="token punctuation">.</span>php$ <span class="token punctuation">{</span>
    #    root           html<span class="token punctuation">;</span>
    #    fastcgi_pass   <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">9000</span><span class="token punctuation">;</span>
    #    fastcgi_index  index<span class="token punctuation">.</span>php<span class="token punctuation">;</span>
    #    fastcgi_param  <span class="token constant">SCRIPT_FILENAME</span>  <span class="token operator">/</span>scripts$fastcgi_script_name<span class="token punctuation">;</span>
    #    include        fastcgi_params<span class="token punctuation">;</span>
    #<span class="token punctuation">}</span>
    #禁止访问<span class="token punctuation">.</span>ht页面 （需ngx_http_access_module模块）
    # deny access to <span class="token punctuation">.</span>htaccess files<span class="token punctuation">,</span> <span class="token keyword">if</span> Apache's document root
    # concurs <span class="token keyword">with</span> nginx's one
    #location <span class="token operator">~</span> <span class="token operator">/</span><span class="token punctuation">.</span>ht <span class="token punctuation">{</span>
    #    deny  all<span class="token punctuation">;</span>
    #<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
#<span class="token constant">HTTPS</span>虚拟主机定义
server <span class="token punctuation">{</span>
#    listen       <span class="token number">443</span> ssl<span class="token punctuation">;</span>
#    server_name  localhost<span class="token punctuation">;</span>
#    ssl_certificate      cert<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>
#    ssl_certificate_key  cert<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
#    ssl_session_cache    shared<span class="token operator">:</span><span class="token constant">SSL</span><span class="token operator">:</span><span class="token number">1</span>m<span class="token punctuation">;</span>
#    ssl_session_timeout  <span class="token number">5</span>m<span class="token punctuation">;</span>
#    ssl_ciphers  <span class="token constant">HIGH</span><span class="token operator">:</span><span class="token operator">!</span>aNULL<span class="token operator">:</span><span class="token operator">!</span><span class="token constant">MD5</span><span class="token punctuation">;</span>
#    ssl_prefer_server_ciphers  on<span class="token punctuation">;</span>
#    location <span class="token operator">/</span> <span class="token punctuation">{</span>
#        root   html<span class="token punctuation">;</span>
#        index  index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm<span class="token punctuation">;</span>
#    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
#vue配置
server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  jcsd<span class="token operator">-</span>cdn<span class="token operator">-</span>monitor<span class="token punctuation">.</span>jdcloud<span class="token punctuation">.</span>com<span class="token punctuation">;</span>
    #charset koi8<span class="token operator">-</span>r<span class="token punctuation">;</span>
    #access_log  logs<span class="token operator">/</span>host<span class="token punctuation">.</span>access<span class="token punctuation">.</span>log  main<span class="token punctuation">;</span>
    root <span class="token operator">/</span>root<span class="token operator">/</span>dist<span class="token punctuation">;</span>
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        try_files $uri $uri<span class="token operator">/</span> <span class="token operator">/</span>index<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  <span class="token operator">/</span><span class="token number">50</span>x<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> <span class="token operator">/</span><span class="token number">50</span>x<span class="token punctuation">.</span>html <span class="token punctuation">{</span>
        root   html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="nignx状态监控" tabindex="-1"><a class="header-anchor" href="#nignx状态监控" aria-hidden="true">#</a> Nignx状态监控</h3>
<p>Nginx运行状态，StubStatus模块获取Nginx自启动的工作状态（编译时要开启对应功能）</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>location <span class="token operator">/</span>NginxStatus <span class="token punctuation">{</span>
    #启用StubStatus的工作访问状态
    stub_status    on<span class="token punctuation">;</span>
    #指定StubStaus模块的访问日志文件 可off
    access_log    logs<span class="token operator">/</span>Nginxstatus<span class="token punctuation">.</span>log<span class="token punctuation">;</span>
    #Nginx认证机制（需Apache的htpasswd命令生成）
    #auth_basic    <span class="token string">"NginxStatus"</span><span class="token punctuation">;</span>
    #用来认证的密码文件
    #auth_basic_user_file    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">/</span>htpasswd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>访问：<a href="http://IP/NginxStatus(%E6%B5%8B%E8%AF%95%E5%B0%B1%E4%B8%8D%E5%8A%A0%E5%AF%86%E7%A0%81%E9%AA%8C%E8%AF%81%E7%9B%B8%E5%85%B3)" target="_blank" rel="noopener noreferrer">http://IP/NginxStatus(测试就不加密码验证相关)<OutboundLink/></a></p>
<blockquote>
<p>active connections – 活跃的连接数量<br>
server accepts handled requests — 总共处理了3个连接 , 成功创建3次握手, 总共处理了1个请求<br>
reading — 读取客户端的连接数.<br>
writing — 响应数据到客户端的数量<br>
waiting — 开启 keep-alive 的情况下,这个值等于 active – (reading+writing), 意思就是 Nginx 已经处理完正在等候下一次请求指令的驻留连接.</p>
</blockquote>
<h3 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>#以下配置追加在<span class="token constant">HTTP</span>的全局变量中
proxy_buffering on<span class="token punctuation">;</span> #启动代理缓存功能
proxy_connect_timeout      <span class="token number">5</span><span class="token punctuation">;</span> <span class="token function">#nginx跟后端服务器连接超时时间</span><span class="token punctuation">(</span>代理连接超时<span class="token punctuation">)</span>
proxy_send_timeout         <span class="token number">5</span><span class="token punctuation">;</span> <span class="token function">#后端服务器数据回传时间</span><span class="token punctuation">(</span>代理发送超时<span class="token punctuation">)</span>
proxy_read_timeout         <span class="token number">60</span><span class="token punctuation">;</span> <span class="token function">#连接成功后，后端服务器响应时间</span><span class="token punctuation">(</span>代理接收超时<span class="token punctuation">)</span>
proxy_buffer_size          <span class="token number">16</span>k<span class="token punctuation">;</span> #设置代理服务器（nginx）保存用户头信息的缓冲区大小
proxy_buffers              <span class="token number">4</span> <span class="token number">32</span>k<span class="token punctuation">;</span> #proxy_buffers缓冲区，网页平均在<span class="token number">32</span>k以下的话，这样设置
proxy_busy_buffers_size    <span class="token number">64</span>k<span class="token punctuation">;</span> #高负荷下缓冲大小（proxy_buffers<span class="token operator">*</span><span class="token number">2</span>）
proxy_temp_file_write_size <span class="token number">64</span>k<span class="token punctuation">;</span> #设定缓存文件夹大小，大于这个值，将从upstream服务器传
#反向代理缓存目录
proxy_cache_path <span class="token operator">/</span>data<span class="token operator">/</span>proxy<span class="token operator">/</span>cache levels<span class="token operator">=</span><span class="token number">1</span><span class="token operator">:</span><span class="token number">2</span> keys_zone<span class="token operator">=</span>cache_one<span class="token operator">:</span><span class="token number">500</span>m inactive<span class="token operator">=</span><span class="token number">1</span>d max_size<span class="token operator">=</span><span class="token number">1</span>g<span class="token punctuation">;</span>
#levels<span class="token operator">=</span><span class="token number">1</span><span class="token operator">:</span><span class="token number">2</span> 设置目录深度，第一层目录是<span class="token number">1</span>个字符，第<span class="token number">2</span>层是<span class="token number">2</span>个字符
#keys_zone<span class="token operator">:</span>设置web缓存名称和内存缓存空间大小
#inactive<span class="token operator">:</span>自动清除缓存文件时间。
#max_size<span class="token operator">:</span>硬盘空间最大可使用值。
<span class="token function">#指定临时缓存文件的存储路径</span><span class="token punctuation">(</span>必须在同一分区<span class="token punctuation">)</span>
proxy_temp_path <span class="token operator">/</span>data<span class="token operator">/</span>proxy<span class="token operator">/</span>temp<span class="token punctuation">;</span>
#服务配置
server <span class="token punctuation">{</span>
    #侦听的<span class="token number">80</span>端口
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        proxy_cache cache_one<span class="token punctuation">;</span><span class="token function">#反向代理缓存设置命令</span><span class="token punctuation">(</span>proxy_cache zone<span class="token operator">|</span>off<span class="token punctuation">,</span>默认关闭所以要设置<span class="token punctuation">)</span>
        proxy_cache_valid <span class="token number">200</span> <span class="token number">304</span> <span class="token number">12</span>h<span class="token punctuation">;</span> #对不同的状态码缓存不同时间
        proxy_cache_key $host$uri$is_args$args<span class="token punctuation">;</span>#设置以什么样参数获取缓存文件名
        proxy_set_header Host $host<span class="token punctuation">;</span>#后端的Web服务器可以通过<span class="token constant">X</span><span class="token operator">-</span>Forwarded<span class="token operator">-</span>For获取用户真实<span class="token constant">IP</span>
        proxy_set_header <span class="token constant">X</span><span class="token operator">-</span>Real<span class="token operator">-</span><span class="token constant">IP</span> $remote_addr<span class="token punctuation">;</span>
        proxy_set_header <span class="token constant">X</span><span class="token operator">-</span>Forwarded<span class="token operator">-</span>For $proxy_add_x_forwarded_for<span class="token punctuation">;</span>
        proxy_pass   http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token constant">IP</span><span class="token punctuation">;</span> #代理设置
        expires    <span class="token number">1</span>d<span class="token punctuation">;</span> #文件过期时间控制
    <span class="token punctuation">}</span>
    <span class="token function">#配置手动清楚缓存</span><span class="token punctuation">(</span>实现此功能需第三方模块 ngx_cache_purge<span class="token punctuation">)</span>
    #http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span><span class="token number">123.</span>com<span class="token operator">/</span><span class="token number">2017</span><span class="token operator">/</span><span class="token number">0316</span><span class="token operator">/</span><span class="token number">17.</span>html访问
    #http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span><span class="token number">123.</span>com<span class="token operator">/</span>purge<span class="token operator">/</span><span class="token number">2017</span><span class="token operator">/</span><span class="token number">0316</span><span class="token operator">/</span><span class="token number">17.</span>html清楚<span class="token constant">URL</span>缓存
    location <span class="token operator">~</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">purge(</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        allow    <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">;</span>
        deny    all<span class="token punctuation">;</span>
        proxy_cache_purge    cache_one    $host$<span class="token number">1</span>$is_args$args<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    #设置扩展名以<span class="token punctuation">.</span>jsp、<span class="token punctuation">.</span>php、<span class="token punctuation">.</span>jspx结尾的动态应用程序不做缓存
    location <span class="token operator">~</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token punctuation">(</span>jsp<span class="token operator">|</span>php<span class="token operator">|</span>jspx<span class="token punctuation">)</span><span class="token operator">?</span>$ <span class="token punctuation">{</span>
        proxy_set_header Host $host<span class="token punctuation">;</span>
        proxy_set_header <span class="token constant">X</span><span class="token operator">-</span>Real<span class="token operator">-</span><span class="token constant">IP</span> $remote_addr<span class="token punctuation">;</span>
        proxy_set_header <span class="token constant">X</span><span class="token operator">-</span>Forwarded<span class="token operator">-</span>For $proxy_add_x_forwarded_for<span class="token punctuation">;</span>
        proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token constant">IP</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre></div><h3 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>#负载均衡服务器池
upstream my_server_pool <span class="token punctuation">{</span>
    #调度算法
    #<span class="token number">1.</span>轮循（默认）（weight轮循权值）
    #<span class="token number">2.</span>ip_hash：根据每个请求访问<span class="token constant">IP</span>的hash结果分配。（会话保持）
    #<span class="token number">3.</span>fair<span class="token operator">:</span>根据后端服务器响应时间最短请求。（upstream_fair模块）
    #<span class="token number">4.</span>url_hash<span class="token operator">:</span>根据访问的url的hash结果分配。（需hash软件包）
    #参数：
    #down：表示不参与负载均衡
    #backup<span class="token operator">:</span>备份服务器
    #max_fails<span class="token operator">:</span>允许最大请求错误次数
    #fail_timeout<span class="token operator">:</span>请求失败后暂停服务时间。
    server <span class="token number">192.168</span><span class="token number">.1</span><span class="token number">.109</span><span class="token operator">:</span><span class="token number">80</span> weight<span class="token operator">=</span><span class="token number">1</span> max_fails<span class="token operator">=</span><span class="token number">2</span> fail_timeout<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">;</span>
    server <span class="token number">192.168</span><span class="token number">.1</span><span class="token number">.108</span><span class="token operator">:</span><span class="token number">80</span> weight<span class="token operator">=</span><span class="token number">2</span> max_fails<span class="token operator">=</span><span class="token number">2</span> fail_timeout<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
#负载均衡调用
server <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
    proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>my_server_pool<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="url重写" tabindex="-1"><a class="header-anchor" href="#url重写" aria-hidden="true">#</a> URL重写</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>#根据不同的浏览器<span class="token constant">URL</span>重写
<span class="token keyword">if</span><span class="token punctuation">(</span>$http_user_agent <span class="token operator">~</span> Firefox<span class="token punctuation">)</span><span class="token punctuation">{</span>
    rewrite <span class="token operator">^</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span>$  <span class="token operator">/</span>firefox<span class="token operator">/</span>$<span class="token number">1</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>$http_user_agent <span class="token operator">~</span> <span class="token constant">MSIE</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    rewrite <span class="token operator">^</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span>$  <span class="token operator">/</span>msie<span class="token operator">/</span>$<span class="token number">1</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
#实现域名跳转
location <span class="token operator">/</span> <span class="token punctuation">{</span>
    rewrite <span class="token operator">^</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span>$ https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>web8<span class="token punctuation">.</span>example<span class="token punctuation">.</span>com$<span class="token number">1</span> permanent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="ip限制" tabindex="-1"><a class="header-anchor" href="#ip限制" aria-hidden="true">#</a> IP限制</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>#限制<span class="token constant">IP</span>访问
location <span class="token operator">/</span> <span class="token punctuation">{</span>
    deny <span class="token number">192.168</span><span class="token number">.0</span><span class="token number">.2</span>；
    allow <span class="token number">192.168</span><span class="token number">.0</span><span class="token number">.0</span><span class="token operator">/</span><span class="token number">24</span><span class="token punctuation">;</span>
    allow <span class="token number">192.168</span><span class="token number">.1</span><span class="token number">.1</span><span class="token punctuation">;</span>
    deny all<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="部分参数详细说明" tabindex="-1"><a class="header-anchor" href="#部分参数详细说明" aria-hidden="true">#</a> 部分参数详细说明</h3>
<h4 id="server-name" tabindex="-1"><a class="header-anchor" href="#server-name" aria-hidden="true">#</a> server_name</h4>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token number">1.</span>首先选择所有字符串完全匹配的server_name，如 blog<span class="token punctuation">.</span><span class="token number">13</span>sai<span class="token punctuation">.</span>com 。
<span class="token number">2.</span>其次选择通配符在前面的server_name，如 <span class="token operator">*</span><span class="token number">.13</span>sai<span class="token punctuation">.</span>com。
<span class="token number">3.</span>再次选择通配符在后面的server_name，如www<span class="token punctuation">.</span><span class="token number">13</span>sai<span class="token punctuation">.</span><span class="token operator">*</span> 。
<span class="token number">4.</span>最后选择使用正则表达式才匹配的server_name，如 <span class="token operator">~</span><span class="token operator">^</span><span class="token punctuation">.</span>sai<span class="token punctuation">.</span>com$
如果都不匹配
<span class="token number">1</span>、优先选择listen配置项后有<span class="token keyword">default</span>或default_server的
<span class="token number">2</span>、找到匹配listen端口的第一个server块
</code></pre></div><h4 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> location</h4>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>location
语法<span class="token operator">:</span> location<span class="token punctuation">[</span><span class="token operator">=</span><span class="token operator">|</span><span class="token operator">~</span><span class="token operator">|</span><span class="token operator">~</span><span class="token operator">*</span><span class="token operator">|</span><span class="token operator">^</span><span class="token operator">~</span><span class="token operator">|</span>@<span class="token punctuation">]</span><span class="token operator">/</span>uri<span class="token operator">/</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
配置块<span class="token operator">:</span> server location会尝试根据用户请求中的<span class="token constant">URI</span>来匹配上面的<span class="token operator">/</span>uri表达式，如果可以匹配，就选择 location<span class="token punctuation">{</span><span class="token punctuation">}</span>块中的配置来处理用户请求。
</code></pre></div><p>location 表达式类型</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">~</span> 表示执行一个正则匹配，区分大小写<span class="token punctuation">;</span>
<span class="token operator">~</span><span class="token operator">*</span> 表示执行一个正则匹配，不区分大小写<span class="token punctuation">;</span>
<span class="token operator">^</span><span class="token operator">~</span> 表示普通字符匹配。使用前缀匹配。如果匹配成功，则不再匹配其他location<span class="token punctuation">;</span>
<span class="token operator">=</span> 进行普通字符精确匹配。也就是完全匹配<span class="token punctuation">;</span>
@ 它定义一个命名的 location，使用在内部定向时，例如 error_page<span class="token punctuation">,</span> try_files
</code></pre></div><p>优先级:</p>
<ul>
<li>等号类型 (=) 的优先级最高。一旦匹配成功，则不再查找其他匹配项</li>
<li>前缀普通匹配 (^~) 优先级次之。不支持正则表达式。使用前缀匹配，如果有多个 location 匹配的话，则使用表达式最长的那个</li>
<li>正则表达式类型 (~ ~*) 的优先级次之。一旦匹配成功，则不再查找其他匹配项</li>
<li>常规字符串匹配，如果有多个 location 匹配的话，则使用表达式最长的那个</li>
</ul>
<blockquote>
<p>(location =) &gt; (location 完整路径) &gt; (location ^~ 路径) &gt; (location ~,~* 正则顺序) &gt; (location 部分起始路径)</p>
</blockquote>
<h4 id="return" tabindex="-1"><a class="header-anchor" href="#return" aria-hidden="true">#</a> return</h4>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>语法<span class="token operator">:</span><span class="token keyword">return</span> code <span class="token punctuation">[</span>text<span class="token punctuation">]</span> <span class="token keyword">return</span> code <span class="token constant">URL</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token constant">URL</span><span class="token punctuation">;</span>
配置块<span class="token operator">:</span>server，location，<span class="token keyword">if</span>
该指令用于结束规则的执行并返回状态吗给客户端。
状态码包括<span class="token operator">:</span>
<span class="token number">204</span><span class="token punctuation">(</span>No Content<span class="token punctuation">)</span>、
<span class="token number">400</span><span class="token punctuation">(</span>Bad Request<span class="token punctuation">)</span>、
<span class="token number">402</span><span class="token punctuation">(</span>Payment Required<span class="token punctuation">)</span>、
<span class="token number">403</span><span class="token punctuation">(</span>Forbidden<span class="token punctuation">)</span>
<span class="token number">404</span><span class="token punctuation">(</span>Not Found<span class="token punctuation">)</span>、
<span class="token number">405</span><span class="token punctuation">(</span>Method Not Allowed<span class="token punctuation">)</span>、
<span class="token number">406</span><span class="token punctuation">(</span>Not Acceptable<span class="token punctuation">)</span>、
<span class="token number">408</span><span class="token punctuation">(</span>Request Timeout<span class="token punctuation">)</span>、
<span class="token number">410</span><span class="token punctuation">(</span>Gone<span class="token punctuation">)</span>、
<span class="token number">411</span><span class="token punctuation">(</span>Length Required<span class="token punctuation">)</span>、
<span class="token number">413</span><span class="token punctuation">(</span>Request Entity Too Large<span class="token punctuation">)</span>、
<span class="token number">416</span><span class="token punctuation">(</span>Requested Range Not Satisfiable<span class="token punctuation">)</span>、 <span class="token number">500</span><span class="token punctuation">(</span>Internal Server Error<span class="token punctuation">)</span>、
<span class="token number">501</span><span class="token punctuation">(</span>Not Implemented<span class="token punctuation">)</span>、
<span class="token number">502</span><span class="token punctuation">(</span>Bad Gateway<span class="token punctuation">)</span>、
<span class="token number">503</span><span class="token punctuation">(</span>Service Unavailable<span class="token punctuation">)</span>
<span class="token number">504</span><span class="token punctuation">(</span>Gateway Timeout<span class="token punctuation">)</span>。
例如，示例，如果访问的<span class="token constant">URL</span>以<span class="token punctuation">.</span>sh <span class="token punctuation">.</span>bash 结尾，返回状态码<span class="token number">403</span>
location <span class="token operator">~</span> <span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token punctuation">(</span>sh<span class="token operator">|</span>bash<span class="token punctuation">)</span><span class="token operator">?</span>$ <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">403</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="rewrite" tabindex="-1"><a class="header-anchor" href="#rewrite" aria-hidden="true">#</a> rewrite</h4>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>执行顺序：
<span class="token number">1.</span> <span class="token function">执行server块的rewrite指令</span><span class="token punctuation">(</span>这里的块指的是server关键字后<span class="token punctuation">{</span><span class="token punctuation">}</span>包围的区域，其它xx块类似<span class="token punctuation">)</span>
<span class="token number">2.</span> 执行location匹配
<span class="token number">3.</span> 执行选定的location中的rewrite指令
如果其中某步<span class="token constant">URI</span>被重写，则重新循环执行<span class="token number">1</span><span class="token operator">-</span><span class="token number">3</span>，直到找到真实存在的文件
如果循环超过<span class="token number">10</span>次，则返回<span class="token number">500</span> Internal Server Error错误
语法<span class="token operator">:</span>rewrite regex replacement <span class="token punctuation">[</span>flag<span class="token punctuation">]</span><span class="token punctuation">;</span>
默认值<span class="token operator">:</span>—
配置块<span class="token operator">:</span>server<span class="token punctuation">,</span> location<span class="token punctuation">,</span> <span class="token keyword">if</span>
rewrite是实现<span class="token constant">URL</span><span class="token function">重写的关键指令，根据regex</span><span class="token punctuation">(</span>正则表达式<span class="token punctuation">)</span>部分内容，重定向到replacement，结尾是flag标记。 正则<span class="token operator">:</span>perl兼容正则表达式语句进行规则匹配
替代内容<span class="token operator">:</span>将正则匹配的内容替换成replacement
flag标记<span class="token operator">:</span>rewrite支持的flag标记
</code></pre></div><h6 id="if-指令" tabindex="-1"><a class="header-anchor" href="#if-指令" aria-hidden="true">#</a> if 指令</h6>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>语法：<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token parameter">condition</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
默认值：无
配置块：server<span class="token punctuation">,</span>location
对给定的条件condition进行判断。如果为真，大括号内的rewrite指令将被执行。
<span class="token keyword">if</span><span class="token function">条件</span><span class="token punctuation">(</span>conditon<span class="token punctuation">)</span>可以是如下任何内容<span class="token operator">:</span>
一个变量名；<span class="token boolean">false</span>如果这个变量是空字符串或者以<span class="token number">0</span>开始的字符串；
使用<span class="token operator">=</span> <span class="token punctuation">,</span><span class="token operator">!=</span> 比较的一个变量和字符串
是用<span class="token operator">~</span>， <span class="token operator">~</span><span class="token operator">*</span>与正则表达式匹配的变量，如果这个正则表达式中包含<span class="token punctuation">}</span>，<span class="token punctuation">;</span>则整个表达式需要用" 或' 包围
使用<span class="token operator">-</span>f ，<span class="token operator">!</span><span class="token operator">-</span>f 检查一个文件是否存在
使用<span class="token operator">-</span>d<span class="token punctuation">,</span> <span class="token operator">!</span><span class="token operator">-</span>d 检查一个目录是否存在
使用<span class="token operator">-</span>e ，<span class="token operator">!</span><span class="token operator">-</span>e 检查一个文件、目录、符号链接是否存在
使用<span class="token operator">-</span>x ， <span class="token operator">!</span><span class="token operator">-</span>x 检查一个文件是否可执行
</code></pre></div><h6 id="if-实例" tabindex="-1"><a class="header-anchor" href="#if-实例" aria-hidden="true">#</a> if 实例</h6>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>$http_user_agent<span class="token operator">~</span><span class="token operator">*</span><span class="token punctuation">(</span>mobile<span class="token operator">|</span>nokia<span class="token operator">|</span>iphone<span class="token operator">|</span>ipad<span class="token operator">|</span>android<span class="token operator">|</span>samsung<span class="token operator">|</span>htc<span class="token operator">|</span>blackberry<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rewrite <span class="token operator">^</span><span class="token punctuation">.</span><span class="token operator">+</span> <span class="token operator">/</span>mobile last<span class="token punctuation">;</span> ＃跳转到手机站
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>$request_method <span class="token operator">=</span> <span class="token constant">POST</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">405</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>$slow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    limit_rate <span class="token number">10</span>k<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>$invalid_referer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">403</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h6 id="last-break" tabindex="-1"><a class="header-anchor" href="#last-break" aria-hidden="true">#</a> last &amp; break</h6>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>（<span class="token number">1</span>）last 和 <span class="token keyword">break</span> 当出现在location 之外时，两者的作用是一致的没有任何差异。
注意一点就是，他们会跳过所有的在他们之后的rewrite 模块中的指令，去选择自己匹配的location
（<span class="token number">2</span>）last 和 <span class="token keyword">break</span> 当出现在location 内部时，两者就存在了差异
<span class="token operator">--</span> last<span class="token operator">:</span> 使用了last 指令，rewrite 后会跳出location 作用域，重新开始再走一次刚刚的行为
<span class="token operator">--</span> <span class="token keyword">break</span><span class="token operator">:</span> 使用了<span class="token keyword">break</span> 指令，rewrite后不会跳出location 作用域。它的生命也在这个location中终结。
解释通俗易懂：
last：
        重新将rewrite后的地址在server标签中执行
<span class="token keyword">break</span>：
        将rewrite后的地址在当前location标签中执行
</code></pre></div><h6 id="permanent-redirect" tabindex="-1"><a class="header-anchor" href="#permanent-redirect" aria-hidden="true">#</a> permanent &amp; redirect:</h6>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>permanent<span class="token operator">:</span> 永久性重定向。请求日志中的状态码为<span class="token number">301</span>
redirect<span class="token operator">:</span>临时重定向。请求日志中的状态码为<span class="token number">302</span>
</code></pre></div><p>从实现功能的角度上去看，permanent 和 redirect 是一样的。不存在好坏。也不存在什么性能上的问题。但是对 seo 会有影响，这里要根据需要做出选择<br>
在 permanent 和 redirect 中提到了 状态码 301 和 302。</p>
<p>记住：last 和 break 想对于的访问日志的请求状态码为 200</p>
<p>当你打开一个网页，同时打开 debug 模式时，会发现 301 和 302 时的行为是这样的。</p>
<p>第一个请求 301 或者 302 后，浏览器重新获取了一个新的 URL ，然后会对这个新的 URL 重新进行访问。所以当你配置的是 permanent 和 redirect , 你对一个 URL 的访问请求，落到服务器上至少为 2 次；而当你配置了 last 或者是 break 时，你最终的 URL 确定下来后，不会将这个 URL 返回给浏览器，而是将其扔给了 fastcgi_pass 或者是 proxy_pass 指令去处理。请求一个 URL ，落到服务器上的次数就为 1 次。</p>
<p>注意：配置 last 在跨域的时候效果和 redirect 一致，都是返回 302 状态码，请求地址也发生改变</p>
<h3 id="其他应用" tabindex="-1"><a class="header-anchor" href="#其他应用" aria-hidden="true">#</a> 其他应用</h3>
<h4 id="估算并发" tabindex="-1"><a class="header-anchor" href="#估算并发" aria-hidden="true">#</a> 估算并发</h4>
<p>nginx 作为 http 服务器的时候：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>max_clients <span class="token operator">=</span> worker_processes <span class="token operator">*</span> worker_connections<span class="token operator">/</span><span class="token number">2</span>
</code></pre></div><p>nginx 作为反向代理服务器的时候：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>max_clients <span class="token operator">=</span> worker_processes <span class="token operator">*</span> worker_connections<span class="token operator">/</span><span class="token number">4</span> 
</code></pre></div><h4 id="限制每个-ip-的并发连接数" tabindex="-1"><a class="header-anchor" href="#限制每个-ip-的并发连接数" aria-hidden="true">#</a> 限制每个 IP 的并发连接数</h4>
<p>demo: 定义一个叫 “two” 的记录区，总容量为 10M（超过大小将请求失败，以变量 $binary_remote_addr 作为会话的判断基准（即一个地址一个会话）。 限制 /download/ 目录下，一个会话只能进行一个连接。 简单点，就是限制 /download/ 目录下，一个 IP 只能发起一个连接，多过一个，一律 503。</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>http <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    limit_conn_zone $binary_remote_addr zone<span class="token operator">=</span>two<span class="token operator">:</span><span class="token number">10</span>m<span class="token punctuation">;</span>
    server <span class="token punctuation">{</span>
        <span class="token operator">...</span>
        location <span class="token operator">/</span>download <span class="token punctuation">{</span>
            limit_conn   two  <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="限流" tabindex="-1"><a class="header-anchor" href="#限流" aria-hidden="true">#</a> 限流</h4>
<p>demo: 定义一个叫 “one” 的记录区，占用空间大小为 10m（超过大小将请求失败），平均处理的请求频率不能超过每秒一次，也可以设置分钟速率</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>http <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    limit_req_zone  $binary_remote_addr  zone<span class="token operator">=</span>one<span class="token operator">:</span><span class="token number">10</span>m  rate<span class="token operator">=</span><span class="token number">1</span>r<span class="token operator">/</span>s<span class="token punctuation">;</span>
    server <span class="token punctuation">{</span>
        <span class="token operator">...</span>
        location <span class="token operator">/</span> <span class="token punctuation">{</span>
            #缓存区队列burst<span class="token operator">=</span><span class="token number">5</span>个<span class="token punctuation">,</span><span class="token function">nodelay表示不延期</span><span class="token punctuation">(</span>超过的请求失败<span class="token punctuation">)</span>，即每秒最多可处理rate<span class="token operator">+</span>burst个<span class="token punctuation">,</span>同时处理rate个。
            limit_req zone<span class="token operator">=</span>one burst<span class="token operator">=</span><span class="token number">5</span> nodelay<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="白名单" tabindex="-1"><a class="header-anchor" href="#白名单" aria-hidden="true">#</a> 白名单</h4>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>http<span class="token punctuation">{</span>
    <span class="token operator">...</span>
    #判断客户端的ip地址是否在白名单列表当中<span class="token punctuation">,</span>如果返回为<span class="token number">0</span><span class="token punctuation">,</span>则在白名单列表当中<span class="token punctuation">,</span>否则返回为<span class="token number">1</span>
    geo $whiteIpList <span class="token punctuation">{</span>
        <span class="token keyword">default</span>  <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token number">118.24</span><span class="token number">.109</span><span class="token number">.254</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token number">47.98</span><span class="token number">.147</span><span class="token number">.0</span><span class="token operator">/</span><span class="token number">24</span> <span class="token number">1</span><span class="token punctuation">;</span>
        #可以引入一些白名单配置
        include <span class="token string">'whiteIP.conf'</span>
    <span class="token punctuation">}</span>
    #如果不在白名单之内<span class="token punctuation">,</span>返回客户端的二进制的ip地址
    map $whiteIpList  $limit <span class="token punctuation">{</span>
        <span class="token keyword">default</span>  <span class="token string">""</span><span class="token punctuation">;</span>
        <span class="token number">1</span>   $binary_remote_addr<span class="token punctuation">;</span>
        <span class="token number">0</span>   <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    #如果返回的是空字符串那么速率限制会失效
    limit_req_zone $limit zone<span class="token operator">=</span>test<span class="token operator">:</span><span class="token number">2</span>m rate<span class="token operator">=</span><span class="token number">1</span>r<span class="token operator">/</span>m<span class="token punctuation">;</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="防盗链" tabindex="-1"><a class="header-anchor" href="#防盗链" aria-hidden="true">#</a> 防盗链</h4>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>http <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    server <span class="token punctuation">{</span>
        <span class="token operator">...</span>
        location <span class="token operator">~</span><span class="token operator">*</span> <span class="token punctuation">.</span><span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>png<span class="token operator">|</span>swf<span class="token operator">|</span>flv<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
            valid_referers none blocked <span class="token operator">*</span><span class="token number">.13</span>sai<span class="token punctuation">.</span>com<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>$invalid_referer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                rewrite <span class="token operator">^</span><span class="token operator">/</span> blog<span class="token punctuation">.</span><span class="token number">13</span>sai<span class="token punctuation">.</span>com
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>参考:</p>
<p><a href="https://learnku.com/articles/36768" target="_blank" rel="noopener noreferrer">https://learnku.com/articles/36768<OutboundLink/></a></p>
<p><a href="https://www.jianshu.com/p/5d6bd48b4c2f" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/5d6bd48b4c2f<OutboundLink/></a></p>
</template>
