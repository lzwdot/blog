import{d as o,o as e,c,a as n,e as p,F as r,h as t,g as s}from"./app.4ca8afde.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";var u="/blog/assets/822986579.bb80163d.png";const k={},i=t('<h1 id="nginx-\u5E38\u7528\u53C2\u6570\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#nginx-\u5E38\u7528\u53C2\u6570\u914D\u7F6E" aria-hidden="true">#</a> Nginx \u5E38\u7528\u53C2\u6570\u914D\u7F6E</h1><p>nginx\u914D\u7F6E\u6587\u4EF6 <code>/usr/local/nginx/conf/nginx.conf</code> \uFF0C \u56DB\u90E8\u5206\u7EC4\u6210\uFF1Amain(\u5168\u533A\u8BBE\u7F6E)\uFF0Cserver(\u4E3B\u673A\u914D\u7F6E)\uFF0Cupstream(\u8D1F\u8F7D\u5747\u8861\u670D\u52A1\u5668\u8BBE\u7F6E)\uFF0C\u548Clocation(URL\u5339\u914D\u7279\u5B9A\u4F4D\u7F6E\u8BBE\u7F6E)\u3002</p><p><img src="'+u+`" alt=""></p><h3 id="\u5168\u5C40\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a> \u5168\u5C40\u53D8\u91CF</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code># \u914D\u7F6E\u7528\u6237\u6216\u8005\u7EC4\uFF0C\u9ED8\u8BA4\u4E3Anobody nobody\u3002
#user www www<span class="token punctuation">;</span>
 #Nginx\u5F00\u542F\u7684worker\u8FDB\u7A0B\u6570\uFF0C\u5EFA\u8BAE\u4E3A<span class="token constant">CPU</span>\u7684\u6838\u6570
#worker_processes <span class="token number">2</span><span class="token punctuation">;</span>
#\u6307\u5B9Anginx\u8FDB\u7A0B\u8FD0\u884C\u6587\u4EF6\u5B58\u653E\u5730\u5740
#pid <span class="token operator">/</span>nginx<span class="token operator">/</span>pid<span class="token operator">/</span>nginx<span class="token punctuation">.</span>pid<span class="token punctuation">;</span>
#\u6307\u5B9A\u65E5\u5FD7\u8DEF\u5F84\uFF0C\u7EA7\u522B\u3002\u8FD9\u4E2A\u8BBE\u7F6E\u53EF\u4EE5\u653E\u5165\u5168\u5C40\u5757\u3001http\u5757\u3001server\u5757\uFF0C\u7EA7\u522B\u4EE5\u6B64\u4E3A\uFF1Adebug<span class="token operator">|</span>info<span class="token operator">|</span>notice<span class="token operator">|</span>warn<span class="token operator">|</span>error<span class="token operator">|</span>crit<span class="token operator">|</span>alert<span class="token operator">|</span>emerg
error_log log<span class="token operator">/</span>error<span class="token punctuation">.</span>log debug<span class="token punctuation">;</span>
#\u53EF\u4EE5\u5728\u4EFB\u610F\u5730\u65B9\u4F7F\u7528include\u6307\u4EE4\u5B9E\u73B0\u914D\u7F6E\u6587\u4EF6\u7684\u5305\u542B\uFF0C\u7C7B\u4F3C\u4E8Eapache\u4E2D\u7684include\u65B9\u6CD5\uFF0C\u53EF\u51CF\u5C11\u4E3B\u914D\u7F6E\u6587\u4EF6\u957F\u5EA6\u3002
include vhosts<span class="token comment">/*.conf;
</span></code></pre></div><h3 id="\u4E8B\u4EF6\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u914D\u7F6E" aria-hidden="true">#</a> \u4E8B\u4EF6\u914D\u7F6E</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>events <span class="token punctuation">{</span>
    #use <span class="token punctuation">[</span> kqueue <span class="token operator">|</span> rtsig <span class="token operator">|</span> epoll <span class="token operator">|</span> <span class="token operator">/</span>dev<span class="token operator">/</span>poll <span class="token operator">|</span> select <span class="token operator">|</span> poll <span class="token punctuation">]</span><span class="token punctuation">;</span> epoll\u6A21\u578B\u662FLinux <span class="token number">2.6</span>\u4EE5\u4E0A\u7248\u672C\u5185\u6838\u4E2D\u7684\u9AD8\u6027\u80FD\u7F51\u7EDC<span class="token constant">I</span><span class="token operator">/</span><span class="token constant">O</span>\u6A21\u578B\uFF0C\u5982\u679C\u8DD1\u5728FreeBSD\u4E0A\u9762\uFF0C\u5C31\u7528kqueue\u6A21\u578B\u3002
    use epoll<span class="token punctuation">;</span>
    #\u6BCF\u4E2A\u8FDB\u7A0B\u53EF\u4EE5\u5904\u7406\u7684\u6700\u5927\u8FDE\u63A5\u6570\uFF0C\u7406\u8BBA\u4E0A\u6BCF\u53F0nginx\u670D\u52A1\u5668\u7684\u6700\u5927\u8FDE\u63A5\u6570\u4E3Aworker_processes<span class="token operator">*</span>worker_connections\u3002\u7406\u8BBA\u503C\uFF1Aworker_rlimit_nofile<span class="token operator">/</span>worker_processes
    #\u6CE8\u610F\uFF1A\u6700\u5927\u5BA2\u6237\u6570\u4E5F\u7531\u7CFB\u7EDF\u7684\u53EF\u7528socket\u8FDE\u63A5\u6570\u9650\u5236\uFF08<span class="token operator">~</span> 64K\uFF09\uFF0C\u6240\u4EE5\u8BBE\u7F6E\u4E0D\u5207\u5B9E\u9645\u7684\u9AD8\u6CA1\u4EC0\u4E48\u597D\u5904
    worker_connections  <span class="token number">65535</span><span class="token punctuation">;</span>
    #worker\u5DE5\u4F5C\u65B9\u5F0F\uFF1A\u4E32\u884C\uFF08\u4E00\u5B9A\u7A0B\u5EA6\u964D\u4F4E\u8D1F\u8F7D\uFF0C\u4F46\u670D\u52A1\u5668\u541E\u5410\u91CF\u5927\u65F6\uFF0C\u5173\u95ED\u4F7F\u7528\u5E76\u884C\u65B9\u5F0F\uFF09
    multi_accept on<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="http\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#http\u53C2\u6570" aria-hidden="true">#</a> http\u53C2\u6570</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>http <span class="token punctuation">{</span>
    #\u6587\u4EF6\u6269\u5C55\u540D\u4E0E\u6587\u4EF6\u7C7B\u578B\u6620\u5C04\u8868
    include mime<span class="token punctuation">.</span>types<span class="token punctuation">;</span>
    #\u9ED8\u8BA4\u6587\u4EF6\u7C7B\u578B
    default_type application<span class="token operator">/</span>octet<span class="token operator">-</span>stream<span class="token punctuation">;</span>
    #\u65E5\u5FD7\u76F8\u5173\u5B9A\u4E49
    #log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    #                  <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    #                  <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>
    #\u5B9A\u4E49\u65E5\u5FD7\u7684\u683C\u5F0F\u3002\u540E\u9762\u5B9A\u4E49\u8981\u8F93\u51FA\u7684\u5185\u5BB9\u3002
    #<span class="token number">1</span><span class="token punctuation">.</span>$remote_addr \u4E0E$http_x_forwarded_for \u7528\u4EE5\u8BB0\u5F55\u5BA2\u6237\u7AEF\u7684ip\u5730\u5740\uFF1B
    #<span class="token number">2</span><span class="token punctuation">.</span>$remote_user \uFF1A\u7528\u6765\u8BB0\u5F55\u5BA2\u6237\u7AEF\u7528\u6237\u540D\u79F0\uFF1B
    #<span class="token number">3</span><span class="token punctuation">.</span>$time_local \uFF1A\u7528\u6765\u8BB0\u5F55\u8BBF\u95EE\u65F6\u95F4\u4E0E\u65F6\u533A\uFF1B
    #<span class="token number">4</span><span class="token punctuation">.</span>$request  \uFF1A\u7528\u6765\u8BB0\u5F55\u8BF7\u6C42\u7684url\u4E0Ehttp\u534F\u8BAE\uFF1B
    #<span class="token number">5</span><span class="token punctuation">.</span>$status \uFF1A\u7528\u6765\u8BB0\u5F55\u8BF7\u6C42\u72B6\u6001\uFF1B
    #<span class="token number">6</span><span class="token punctuation">.</span>$body_bytes_sent \uFF1A\u8BB0\u5F55\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u6587\u4EF6\u4E3B\u4F53\u5185\u5BB9\u5927\u5C0F\uFF1B
    #<span class="token number">7</span><span class="token punctuation">.</span>$http_referer \uFF1A\u7528\u6765\u8BB0\u5F55\u4ECE\u90A3\u4E2A\u9875\u9762\u94FE\u63A5\u8BBF\u95EE\u8FC7\u6765\u7684\uFF1B
    #<span class="token number">8</span><span class="token punctuation">.</span>$http_user_agent \uFF1A\u8BB0\u5F55\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668\u7684\u76F8\u5173\u4FE1\u606F
    #access_log  logs<span class="token operator">/</span>access<span class="token punctuation">.</span>log  main<span class="token punctuation">;</span> #\u8FDE\u63A5\u65E5\u5FD7\u7684\u8DEF\u5F84\uFF0C\u6307\u5B9A\u7684\u65E5\u5FD7\u683C\u5F0F\u653E\u5728\u6700\u540E\u3002
    error_log logs<span class="token operator">/</span>error<span class="token punctuation">.</span>log crit<span class="token punctuation">;</span> #\u53EA\u8BB0\u5F55\u66F4\u4E3A\u4E25\u91CD\u7684\u9519\u8BEF\u65E5\u5FD7\uFF0C\u51CF\u5C11<span class="token constant">IO</span>\u538B\u529B
    #access_log  off<span class="token punctuation">;</span> #\u5173\u95ED\u65E5\u5FD7
    #\u9ED8\u8BA4\u7F16\u7801
    #charset utf<span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">;</span>
    #\u670D\u52A1\u5668\u540D\u5B57\u7684hash\u8868\u5927\u5C0F
    server_names_hash_bucket_size <span class="token number">128</span><span class="token punctuation">;</span>
    #\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5355\u4E2A\u6587\u4EF6\u7684\u6700\u5927\u5B57\u8282\u6570
    client_max_body_size 8m<span class="token punctuation">;</span>
    #\u6307\u5B9A\u6765\u81EA\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5934\u7684hearerbuffer\u5927\u5C0F
    client_header_buffer_size 32k<span class="token punctuation">;</span>
    #\u6307\u5B9A\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4E2D\u8F83\u5927\u7684\u6D88\u606F\u5934\u7684\u7F13\u5B58\u6700\u5927\u6570\u91CF\u548C\u5927\u5C0F\u3002
    large_client_header_buffers <span class="token number">4</span> 64k<span class="token punctuation">;</span>
    #\u5F00\u542F\u9AD8\u6548\u4F20\u8F93\u6A21\u5F0F\u3002
    sendfile on<span class="token punctuation">;</span>
    #\u9632\u6B62\u7F51\u7EDC\u963B\u585E
    tcp_nopush on<span class="token punctuation">;</span>
    tcp_nodelay on<span class="token punctuation">;</span>
    #\u5BA2\u6237\u7AEF\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F\u79D2
    keepalive_timeout <span class="token number">60</span><span class="token punctuation">;</span>
    #\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5934\u8BFB\u53D6\u8D85\u65F6\u65F6\u95F4
    client_header_timeout <span class="token number">10</span><span class="token punctuation">;</span>
    #\u8BBE\u7F6E\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4E3B\u4F53\u8BFB\u53D6\u8D85\u65F6\u65F6\u95F4
    client_body_timeout <span class="token number">10</span><span class="token punctuation">;</span>
    #\u54CD\u5E94\u5BA2\u6237\u7AEF\u8D85\u65F6\u65F6\u95F4
    send_timeout <span class="token number">10</span><span class="token punctuation">;</span>
    #FastCGI\u76F8\u5173\u53C2\u6570\u662F\u4E3A\u4E86\u6539\u5584\u7F51\u7AD9\u7684\u6027\u80FD\uFF1A\u51CF\u5C11\u8D44\u6E90\u5360\u7528\uFF0C\u63D0\u9AD8\u8BBF\u95EE\u901F\u5EA6\u3002
    fastcgi_connect_timeout <span class="token number">300</span><span class="token punctuation">;</span>
    fastcgi_send_timeout <span class="token number">300</span><span class="token punctuation">;</span>
    fastcgi_read_timeout <span class="token number">300</span><span class="token punctuation">;</span>
    fastcgi_buffer_size 64k<span class="token punctuation">;</span>
    fastcgi_buffers <span class="token number">4</span> 64k<span class="token punctuation">;</span>
    fastcgi_busy_buffers_size 128k<span class="token punctuation">;</span>
    fastcgi_temp_file_write_size 128k<span class="token punctuation">;</span>
    #gzip\u6A21\u5757\u8BBE\u7F6E
    gzip on<span class="token punctuation">;</span>  #\u5F00\u542Fgzip\u538B\u7F29\u8F93\u51FA
    gzip_min_length 1k<span class="token punctuation">;</span> #\u6700\u5C0F\u538B\u7F29\u6587\u4EF6\u5927\u5C0F
    gzip_buffers <span class="token number">4</span> 16k<span class="token punctuation">;</span> #\u538B\u7F29\u7F13\u51B2\u533A
    gzip_http_version <span class="token number">1.0</span><span class="token punctuation">;</span> #\u538B\u7F29\u7248\u672C\uFF08\u9ED8\u8BA4<span class="token number">1.1</span>\uFF0C\u524D\u7AEF\u5982\u679C\u662Fsquid2<span class="token punctuation">.</span><span class="token number">5</span>\u8BF7\u4F7F\u7528<span class="token number">1.0</span>\uFF09
    gzip_comp_level <span class="token number">2</span><span class="token punctuation">;</span> #\u538B\u7F29\u7B49\u7EA7 <span class="token number">1</span><span class="token operator">-</span><span class="token number">9</span> \u7B49\u7EA7\u8D8A\u9AD8\uFF0C\u538B\u7F29\u6548\u679C\u8D8A\u597D\uFF0C\u8282\u7EA6\u5BBD\u5E26\uFF0C\u4F46<span class="token constant">CPU</span>\u6D88\u8017\u5927
    gzip_types text<span class="token operator">/</span>plain application<span class="token operator">/</span>x<span class="token operator">-</span>javascript text<span class="token operator">/</span>css application<span class="token operator">/</span>xml<span class="token punctuation">;</span> #\u538B\u7F29\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u5C31\u5DF2\u7ECF\u5305\u542Btext<span class="token operator">/</span>html\uFF0C\u6240\u4EE5\u4E0B\u9762\u5C31\u4E0D\u7528\u518D\u5199\u4E86\uFF0C\u5199\u4E0A\u53BB\u4E5F\u4E0D\u4F1A\u6709\u95EE\u9898\uFF0C\u4F46\u662F\u4F1A\u6709\u4E00\u4E2Awarn\u3002
    gzip_vary on<span class="token punctuation">;</span> #\u524D\u7AEF\u7F13\u5B58\u670D\u52A1\u5668\u7F13\u5B58\u7ECF\u8FC7\u538B\u7F29\u7684\u9875\u9762
<span class="token punctuation">}</span> 
</code></pre></div><h3 id="\u865A\u62DF\u4E3B\u673A\u57FA\u672C\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DF\u4E3B\u673A\u57FA\u672C\u8BBE\u7F6E" aria-hidden="true">#</a> \u865A\u62DF\u4E3B\u673A\u57FA\u672C\u8BBE\u7F6E</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>#\u865A\u62DF\u4E3B\u673A\u5B9A\u4E49
server <span class="token punctuation">{</span>
    #\u76D1\u542C\u7AEF\u53E3
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    #\u8BBF\u95EE\u57DF\u540D
    server_name  localhost<span class="token punctuation">;</span>
    #\u7F16\u7801\u683C\u5F0F\uFF0C\u82E5\u7F51\u9875\u683C\u5F0F\u4E0E\u6B64\u4E0D\u540C\uFF0C\u5C06\u88AB\u81EA\u52A8\u8F6C\u7801
    #charset koi8<span class="token operator">-</span>r<span class="token punctuation">;</span>
    #\u865A\u62DF\u4E3B\u673A\u8BBF\u95EE\u65E5\u5FD7\u5B9A\u4E49
    #access_log  logs<span class="token operator">/</span>host<span class="token punctuation">.</span>access<span class="token punctuation">.</span>log  main<span class="token punctuation">;</span>
    #\u5BF9<span class="token constant">URL</span>\u8FDB\u884C\u5339\u914D
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        #\u8BBF\u95EE\u8DEF\u5F84\uFF0C\u53EF\u76F8\u5BF9\u4E5F\u53EF\u7EDD\u5BF9\u8DEF\u5F84
        root   html<span class="token punctuation">;</span>
        #\u9996\u9875\u6587\u4EF6\u3002\u4EE5\u4E0B\u6309\u987A\u5E8F\u5339\u914D
        index  index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    #\u9519\u8BEF\u4FE1\u606F\u8FD4\u56DE\u9875\u9762
    #error_page  <span class="token number">404</span> <span class="token operator">/</span><span class="token number">404</span><span class="token punctuation">.</span>html<span class="token punctuation">;</span>
    # redirect server error pages to the <span class="token keyword">static</span> page <span class="token operator">/</span>50x<span class="token punctuation">.</span>html
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  <span class="token operator">/</span>50x<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> <span class="token operator">/</span>50x<span class="token punctuation">.</span>html <span class="token punctuation">{</span>
        root   html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    #\u8BBF\u95EE<span class="token constant">URL</span>\u4EE5<span class="token punctuation">.</span>php\u7ED3\u5C3E\u5219\u81EA\u52A8\u8F6C\u4EA4\u7ED9<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>
    # proxy the <span class="token constant">PHP</span> scripts to Apache listening on <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">80</span>
    #location <span class="token operator">~</span> <span class="token punctuation">.</span>php$ <span class="token punctuation">{</span>
    #    proxy_pass   http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">;</span>
    #<span class="token punctuation">}</span>
    #php\u811A\u672C\u8BF7\u6C42\u5168\u90E8\u8F6C\u53D1\u7ED9FastCGI\u5904\u7406
    # pass the <span class="token constant">PHP</span> scripts to FastCGI server listening on <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">9000</span>
    #location <span class="token operator">~</span> <span class="token punctuation">.</span>php$ <span class="token punctuation">{</span>
    #    root           html<span class="token punctuation">;</span>
    #    fastcgi_pass   <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">9000</span><span class="token punctuation">;</span>
    #    fastcgi_index  index<span class="token punctuation">.</span>php<span class="token punctuation">;</span>
    #    fastcgi_param  <span class="token constant">SCRIPT_FILENAME</span>  <span class="token operator">/</span>scripts$fastcgi_script_name<span class="token punctuation">;</span>
    #    include        fastcgi_params<span class="token punctuation">;</span>
    #<span class="token punctuation">}</span>
    #\u7981\u6B62\u8BBF\u95EE<span class="token punctuation">.</span>ht\u9875\u9762 \uFF08\u9700ngx_http_access_module\u6A21\u5757\uFF09
    # deny access to <span class="token punctuation">.</span>htaccess files<span class="token punctuation">,</span> <span class="token keyword">if</span> Apache&#39;s document root
    # concurs <span class="token keyword">with</span> nginx&#39;s one
    #location <span class="token operator">~</span> <span class="token operator">/</span><span class="token punctuation">.</span>ht <span class="token punctuation">{</span>
    #    deny  all<span class="token punctuation">;</span>
    #<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
#<span class="token constant">HTTPS</span>\u865A\u62DF\u4E3B\u673A\u5B9A\u4E49
server <span class="token punctuation">{</span>
#    listen       <span class="token number">443</span> ssl<span class="token punctuation">;</span>
#    server_name  localhost<span class="token punctuation">;</span>
#    ssl_certificate      cert<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>
#    ssl_certificate_key  cert<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
#    ssl_session_cache    shared<span class="token operator">:</span><span class="token constant">SSL</span><span class="token operator">:</span>1m<span class="token punctuation">;</span>
#    ssl_session_timeout  5m<span class="token punctuation">;</span>
#    ssl_ciphers  <span class="token constant">HIGH</span><span class="token operator">:</span><span class="token operator">!</span>aNULL<span class="token operator">:</span><span class="token operator">!</span><span class="token constant">MD5</span><span class="token punctuation">;</span>
#    ssl_prefer_server_ciphers  on<span class="token punctuation">;</span>
#    location <span class="token operator">/</span> <span class="token punctuation">{</span>
#        root   html<span class="token punctuation">;</span>
#        index  index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm<span class="token punctuation">;</span>
#    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
#vue\u914D\u7F6E
server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  jcsd<span class="token operator">-</span>cdn<span class="token operator">-</span>monitor<span class="token punctuation">.</span>jdcloud<span class="token punctuation">.</span>com<span class="token punctuation">;</span>
    #charset koi8<span class="token operator">-</span>r<span class="token punctuation">;</span>
    #access_log  logs<span class="token operator">/</span>host<span class="token punctuation">.</span>access<span class="token punctuation">.</span>log  main<span class="token punctuation">;</span>
    root <span class="token operator">/</span>root<span class="token operator">/</span>dist<span class="token punctuation">;</span>
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        try_files $uri $uri<span class="token operator">/</span> <span class="token operator">/</span>index<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  <span class="token operator">/</span>50x<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> <span class="token operator">/</span>50x<span class="token punctuation">.</span>html <span class="token punctuation">{</span>
        root   html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="nignx\u72B6\u6001\u76D1\u63A7" tabindex="-1"><a class="header-anchor" href="#nignx\u72B6\u6001\u76D1\u63A7" aria-hidden="true">#</a> Nignx\u72B6\u6001\u76D1\u63A7</h3><p>Nginx\u8FD0\u884C\u72B6\u6001\uFF0CStubStatus\u6A21\u5757\u83B7\u53D6Nginx\u81EA\u542F\u52A8\u7684\u5DE5\u4F5C\u72B6\u6001\uFF08\u7F16\u8BD1\u65F6\u8981\u5F00\u542F\u5BF9\u5E94\u529F\u80FD\uFF09</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>location <span class="token operator">/</span>NginxStatus <span class="token punctuation">{</span>
    #\u542F\u7528StubStatus\u7684\u5DE5\u4F5C\u8BBF\u95EE\u72B6\u6001
    stub_status    on<span class="token punctuation">;</span>
    #\u6307\u5B9AStubStaus\u6A21\u5757\u7684\u8BBF\u95EE\u65E5\u5FD7\u6587\u4EF6 \u53EFoff
    access_log    logs<span class="token operator">/</span>Nginxstatus<span class="token punctuation">.</span>log<span class="token punctuation">;</span>
    #Nginx\u8BA4\u8BC1\u673A\u5236\uFF08\u9700Apache\u7684htpasswd\u547D\u4EE4\u751F\u6210\uFF09
    #auth_basic    <span class="token string">&quot;NginxStatus&quot;</span><span class="token punctuation">;</span>
    #\u7528\u6765\u8BA4\u8BC1\u7684\u5BC6\u7801\u6587\u4EF6
    #auth_basic_user_file    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">/</span>htpasswd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,14),d=s("\u8BBF\u95EE\uFF1A"),m={href:"http://IP/NginxStatus(%E6%B5%8B%E8%AF%95%E5%B0%B1%E4%B8%8D%E5%8A%A0%E5%AF%86%E7%A0%81%E9%AA%8C%E8%AF%81%E7%9B%B8%E5%85%B3)",target:"_blank",rel:"noopener noreferrer"},h=s("http://IP/NginxStatus(\u6D4B\u8BD5\u5C31\u4E0D\u52A0\u5BC6\u7801\u9A8C\u8BC1\u76F8\u5173)"),b=t(`<blockquote><p>active connections \u2013 \u6D3B\u8DC3\u7684\u8FDE\u63A5\u6570\u91CF<br> server accepts handled requests \u2014 \u603B\u5171\u5904\u7406\u4E863\u4E2A\u8FDE\u63A5 , \u6210\u529F\u521B\u5EFA3\u6B21\u63E1\u624B, \u603B\u5171\u5904\u7406\u4E861\u4E2A\u8BF7\u6C42<br> reading \u2014 \u8BFB\u53D6\u5BA2\u6237\u7AEF\u7684\u8FDE\u63A5\u6570.<br> writing \u2014 \u54CD\u5E94\u6570\u636E\u5230\u5BA2\u6237\u7AEF\u7684\u6570\u91CF<br> waiting \u2014 \u5F00\u542F keep-alive \u7684\u60C5\u51B5\u4E0B,\u8FD9\u4E2A\u503C\u7B49\u4E8E active \u2013 (reading+writing), \u610F\u601D\u5C31\u662F Nginx \u5DF2\u7ECF\u5904\u7406\u5B8C\u6B63\u5728\u7B49\u5019\u4E0B\u4E00\u6B21\u8BF7\u6C42\u6307\u4EE4\u7684\u9A7B\u7559\u8FDE\u63A5.</p></blockquote><h3 id="\u53CD\u5411\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u53CD\u5411\u4EE3\u7406" aria-hidden="true">#</a> \u53CD\u5411\u4EE3\u7406</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>#\u4EE5\u4E0B\u914D\u7F6E\u8FFD\u52A0\u5728<span class="token constant">HTTP</span>\u7684\u5168\u5C40\u53D8\u91CF\u4E2D
proxy_buffering on<span class="token punctuation">;</span> #\u542F\u52A8\u4EE3\u7406\u7F13\u5B58\u529F\u80FD
proxy_connect_timeout      <span class="token number">5</span><span class="token punctuation">;</span> <span class="token function">#nginx\u8DDF\u540E\u7AEF\u670D\u52A1\u5668\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4</span><span class="token punctuation">(</span>\u4EE3\u7406\u8FDE\u63A5\u8D85\u65F6<span class="token punctuation">)</span>
proxy_send_timeout         <span class="token number">5</span><span class="token punctuation">;</span> <span class="token function">#\u540E\u7AEF\u670D\u52A1\u5668\u6570\u636E\u56DE\u4F20\u65F6\u95F4</span><span class="token punctuation">(</span>\u4EE3\u7406\u53D1\u9001\u8D85\u65F6<span class="token punctuation">)</span>
proxy_read_timeout         <span class="token number">60</span><span class="token punctuation">;</span> <span class="token function">#\u8FDE\u63A5\u6210\u529F\u540E\uFF0C\u540E\u7AEF\u670D\u52A1\u5668\u54CD\u5E94\u65F6\u95F4</span><span class="token punctuation">(</span>\u4EE3\u7406\u63A5\u6536\u8D85\u65F6<span class="token punctuation">)</span>
proxy_buffer_size          16k<span class="token punctuation">;</span> #\u8BBE\u7F6E\u4EE3\u7406\u670D\u52A1\u5668\uFF08nginx\uFF09\u4FDD\u5B58\u7528\u6237\u5934\u4FE1\u606F\u7684\u7F13\u51B2\u533A\u5927\u5C0F
proxy_buffers              <span class="token number">4</span> 32k<span class="token punctuation">;</span> #proxy_buffers\u7F13\u51B2\u533A\uFF0C\u7F51\u9875\u5E73\u5747\u572832k\u4EE5\u4E0B\u7684\u8BDD\uFF0C\u8FD9\u6837\u8BBE\u7F6E
proxy_busy_buffers_size    64k<span class="token punctuation">;</span> #\u9AD8\u8D1F\u8377\u4E0B\u7F13\u51B2\u5927\u5C0F\uFF08proxy_buffers<span class="token operator">*</span><span class="token number">2</span>\uFF09
proxy_temp_file_write_size 64k<span class="token punctuation">;</span> #\u8BBE\u5B9A\u7F13\u5B58\u6587\u4EF6\u5939\u5927\u5C0F\uFF0C\u5927\u4E8E\u8FD9\u4E2A\u503C\uFF0C\u5C06\u4ECEupstream\u670D\u52A1\u5668\u4F20
#\u53CD\u5411\u4EE3\u7406\u7F13\u5B58\u76EE\u5F55
proxy_cache_path <span class="token operator">/</span>data<span class="token operator">/</span>proxy<span class="token operator">/</span>cache levels<span class="token operator">=</span><span class="token number">1</span><span class="token operator">:</span><span class="token number">2</span> keys_zone<span class="token operator">=</span>cache_one<span class="token operator">:</span>500m inactive<span class="token operator">=</span>1d max_size<span class="token operator">=</span>1g<span class="token punctuation">;</span>
#levels<span class="token operator">=</span><span class="token number">1</span><span class="token operator">:</span><span class="token number">2</span> \u8BBE\u7F6E\u76EE\u5F55\u6DF1\u5EA6\uFF0C\u7B2C\u4E00\u5C42\u76EE\u5F55\u662F<span class="token number">1</span>\u4E2A\u5B57\u7B26\uFF0C\u7B2C<span class="token number">2</span>\u5C42\u662F<span class="token number">2</span>\u4E2A\u5B57\u7B26
#keys_zone<span class="token operator">:</span>\u8BBE\u7F6Eweb\u7F13\u5B58\u540D\u79F0\u548C\u5185\u5B58\u7F13\u5B58\u7A7A\u95F4\u5927\u5C0F
#inactive<span class="token operator">:</span>\u81EA\u52A8\u6E05\u9664\u7F13\u5B58\u6587\u4EF6\u65F6\u95F4\u3002
#max_size<span class="token operator">:</span>\u786C\u76D8\u7A7A\u95F4\u6700\u5927\u53EF\u4F7F\u7528\u503C\u3002
<span class="token function">#\u6307\u5B9A\u4E34\u65F6\u7F13\u5B58\u6587\u4EF6\u7684\u5B58\u50A8\u8DEF\u5F84</span><span class="token punctuation">(</span>\u5FC5\u987B\u5728\u540C\u4E00\u5206\u533A<span class="token punctuation">)</span>
proxy_temp_path <span class="token operator">/</span>data<span class="token operator">/</span>proxy<span class="token operator">/</span>temp<span class="token punctuation">;</span>
#\u670D\u52A1\u914D\u7F6E
server <span class="token punctuation">{</span>
    #\u4FA6\u542C\u7684<span class="token number">80</span>\u7AEF\u53E3
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        proxy_cache cache_one<span class="token punctuation">;</span><span class="token function">#\u53CD\u5411\u4EE3\u7406\u7F13\u5B58\u8BBE\u7F6E\u547D\u4EE4</span><span class="token punctuation">(</span>proxy_cache zone<span class="token operator">|</span>off<span class="token punctuation">,</span>\u9ED8\u8BA4\u5173\u95ED\u6240\u4EE5\u8981\u8BBE\u7F6E<span class="token punctuation">)</span>
        proxy_cache_valid <span class="token number">200</span> <span class="token number">304</span> 12h<span class="token punctuation">;</span> #\u5BF9\u4E0D\u540C\u7684\u72B6\u6001\u7801\u7F13\u5B58\u4E0D\u540C\u65F6\u95F4
        proxy_cache_key $host$uri$is_args$args<span class="token punctuation">;</span>#\u8BBE\u7F6E\u4EE5\u4EC0\u4E48\u6837\u53C2\u6570\u83B7\u53D6\u7F13\u5B58\u6587\u4EF6\u540D
        proxy_set_header Host $host<span class="token punctuation">;</span>#\u540E\u7AEF\u7684Web\u670D\u52A1\u5668\u53EF\u4EE5\u901A\u8FC7<span class="token constant">X</span><span class="token operator">-</span>Forwarded<span class="token operator">-</span>For\u83B7\u53D6\u7528\u6237\u771F\u5B9E<span class="token constant">IP</span>
        proxy_set_header <span class="token constant">X</span><span class="token operator">-</span>Real<span class="token operator">-</span><span class="token constant">IP</span> $remote_addr<span class="token punctuation">;</span>
        proxy_set_header <span class="token constant">X</span><span class="token operator">-</span>Forwarded<span class="token operator">-</span>For $proxy_add_x_forwarded_for<span class="token punctuation">;</span>
        proxy_pass   http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token constant">IP</span><span class="token punctuation">;</span> #\u4EE3\u7406\u8BBE\u7F6E
        expires    1d<span class="token punctuation">;</span> #\u6587\u4EF6\u8FC7\u671F\u65F6\u95F4\u63A7\u5236
    <span class="token punctuation">}</span>
    <span class="token function">#\u914D\u7F6E\u624B\u52A8\u6E05\u695A\u7F13\u5B58</span><span class="token punctuation">(</span>\u5B9E\u73B0\u6B64\u529F\u80FD\u9700\u7B2C\u4E09\u65B9\u6A21\u5757 ngx_cache_purge<span class="token punctuation">)</span>
    #http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span><span class="token number">123</span><span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">2017</span><span class="token operator">/</span><span class="token number">0316</span><span class="token operator">/</span><span class="token number">17</span><span class="token punctuation">.</span>html\u8BBF\u95EE
    #http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span><span class="token number">123</span><span class="token punctuation">.</span>com<span class="token operator">/</span>purge<span class="token operator">/</span><span class="token number">2017</span><span class="token operator">/</span><span class="token number">0316</span><span class="token operator">/</span><span class="token number">17</span><span class="token punctuation">.</span>html\u6E05\u695A<span class="token constant">URL</span>\u7F13\u5B58
    location <span class="token operator">~</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">purge(</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        allow    <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">;</span>
        deny    all<span class="token punctuation">;</span>
        proxy_cache_purge    cache_one    $host$1$is_args$args<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    #\u8BBE\u7F6E\u6269\u5C55\u540D\u4EE5<span class="token punctuation">.</span>jsp\u3001<span class="token punctuation">.</span>php\u3001<span class="token punctuation">.</span>jspx\u7ED3\u5C3E\u7684\u52A8\u6001\u5E94\u7528\u7A0B\u5E8F\u4E0D\u505A\u7F13\u5B58
    location <span class="token operator">~</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token punctuation">(</span>jsp<span class="token operator">|</span>php<span class="token operator">|</span>jspx<span class="token punctuation">)</span><span class="token operator">?</span>$ <span class="token punctuation">{</span>
        proxy_set_header Host $host<span class="token punctuation">;</span>
        proxy_set_header <span class="token constant">X</span><span class="token operator">-</span>Real<span class="token operator">-</span><span class="token constant">IP</span> $remote_addr<span class="token punctuation">;</span>
        proxy_set_header <span class="token constant">X</span><span class="token operator">-</span>Forwarded<span class="token operator">-</span>For $proxy_add_x_forwarded_for<span class="token punctuation">;</span>
        proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token constant">IP</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre></div><h3 id="\u8D1F\u8F7D\u5747\u8861" tabindex="-1"><a class="header-anchor" href="#\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a> \u8D1F\u8F7D\u5747\u8861</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>#\u8D1F\u8F7D\u5747\u8861\u670D\u52A1\u5668\u6C60
upstream my_server_pool <span class="token punctuation">{</span>
    #\u8C03\u5EA6\u7B97\u6CD5
    #<span class="token number">1.</span>\u8F6E\u5FAA\uFF08\u9ED8\u8BA4\uFF09\uFF08weight\u8F6E\u5FAA\u6743\u503C\uFF09
    #<span class="token number">2</span><span class="token punctuation">.</span>ip_hash\uFF1A\u6839\u636E\u6BCF\u4E2A\u8BF7\u6C42\u8BBF\u95EE<span class="token constant">IP</span>\u7684hash\u7ED3\u679C\u5206\u914D\u3002\uFF08\u4F1A\u8BDD\u4FDD\u6301\uFF09
    #<span class="token number">3</span><span class="token punctuation">.</span>fair<span class="token operator">:</span>\u6839\u636E\u540E\u7AEF\u670D\u52A1\u5668\u54CD\u5E94\u65F6\u95F4\u6700\u77ED\u8BF7\u6C42\u3002\uFF08upstream_fair\u6A21\u5757\uFF09
    #<span class="token number">4</span><span class="token punctuation">.</span>url_hash<span class="token operator">:</span>\u6839\u636E\u8BBF\u95EE\u7684url\u7684hash\u7ED3\u679C\u5206\u914D\u3002\uFF08\u9700hash\u8F6F\u4EF6\u5305\uFF09
    #\u53C2\u6570\uFF1A
    #down\uFF1A\u8868\u793A\u4E0D\u53C2\u4E0E\u8D1F\u8F7D\u5747\u8861
    #backup<span class="token operator">:</span>\u5907\u4EFD\u670D\u52A1\u5668
    #max_fails<span class="token operator">:</span>\u5141\u8BB8\u6700\u5927\u8BF7\u6C42\u9519\u8BEF\u6B21\u6570
    #fail_timeout<span class="token operator">:</span>\u8BF7\u6C42\u5931\u8D25\u540E\u6682\u505C\u670D\u52A1\u65F6\u95F4\u3002
    server <span class="token number">192.168</span><span class="token number">.1</span><span class="token number">.109</span><span class="token operator">:</span><span class="token number">80</span> weight<span class="token operator">=</span><span class="token number">1</span> max_fails<span class="token operator">=</span><span class="token number">2</span> fail_timeout<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">;</span>
    server <span class="token number">192.168</span><span class="token number">.1</span><span class="token number">.108</span><span class="token operator">:</span><span class="token number">80</span> weight<span class="token operator">=</span><span class="token number">2</span> max_fails<span class="token operator">=</span><span class="token number">2</span> fail_timeout<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
#\u8D1F\u8F7D\u5747\u8861\u8C03\u7528
server <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
    proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>my_server_pool<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="url\u91CD\u5199" tabindex="-1"><a class="header-anchor" href="#url\u91CD\u5199" aria-hidden="true">#</a> URL\u91CD\u5199</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>#\u6839\u636E\u4E0D\u540C\u7684\u6D4F\u89C8\u5668<span class="token constant">URL</span>\u91CD\u5199
<span class="token keyword">if</span><span class="token punctuation">(</span>$http_user_agent <span class="token operator">~</span> Firefox<span class="token punctuation">)</span><span class="token punctuation">{</span>
    rewrite <span class="token operator">^</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span>$  <span class="token operator">/</span>firefox<span class="token operator">/</span>$1 <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>$http_user_agent <span class="token operator">~</span> <span class="token constant">MSIE</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    rewrite <span class="token operator">^</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span>$  <span class="token operator">/</span>msie<span class="token operator">/</span>$1 <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
#\u5B9E\u73B0\u57DF\u540D\u8DF3\u8F6C
location <span class="token operator">/</span> <span class="token punctuation">{</span>
    rewrite <span class="token operator">^</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span>$ https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>web8<span class="token punctuation">.</span>example<span class="token punctuation">.</span>com$1 permanent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="ip\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#ip\u9650\u5236" aria-hidden="true">#</a> IP\u9650\u5236</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>#\u9650\u5236<span class="token constant">IP</span>\u8BBF\u95EE
location <span class="token operator">/</span> <span class="token punctuation">{</span>
    deny <span class="token number">192.168</span><span class="token number">.0</span><span class="token number">.2</span>\uFF1B
    allow <span class="token number">192.168</span><span class="token number">.0</span><span class="token number">.0</span><span class="token operator">/</span><span class="token number">24</span><span class="token punctuation">;</span>
    allow <span class="token number">192.168</span><span class="token number">.1</span><span class="token number">.1</span><span class="token punctuation">;</span>
    deny all<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u90E8\u5206\u53C2\u6570\u8BE6\u7EC6\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u90E8\u5206\u53C2\u6570\u8BE6\u7EC6\u8BF4\u660E" aria-hidden="true">#</a> \u90E8\u5206\u53C2\u6570\u8BE6\u7EC6\u8BF4\u660E</h3><h4 id="server-name" tabindex="-1"><a class="header-anchor" href="#server-name" aria-hidden="true">#</a> server_name</h4><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token number">1.</span>\u9996\u5148\u9009\u62E9\u6240\u6709\u5B57\u7B26\u4E32\u5B8C\u5168\u5339\u914D\u7684server_name\uFF0C\u5982 blog<span class="token punctuation">.</span>13sai<span class="token punctuation">.</span>com \u3002
<span class="token number">2.</span>\u5176\u6B21\u9009\u62E9\u901A\u914D\u7B26\u5728\u524D\u9762\u7684server_name\uFF0C\u5982 <span class="token operator">*</span><span class="token punctuation">.</span>13sai<span class="token punctuation">.</span>com\u3002
<span class="token number">3.</span>\u518D\u6B21\u9009\u62E9\u901A\u914D\u7B26\u5728\u540E\u9762\u7684server_name\uFF0C\u5982www<span class="token punctuation">.</span>13sai<span class="token punctuation">.</span><span class="token operator">*</span> \u3002
<span class="token number">4.</span>\u6700\u540E\u9009\u62E9\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u624D\u5339\u914D\u7684server_name\uFF0C\u5982 <span class="token operator">~</span><span class="token operator">^</span><span class="token punctuation">.</span>sai<span class="token punctuation">.</span>com$
\u5982\u679C\u90FD\u4E0D\u5339\u914D
<span class="token number">1</span>\u3001\u4F18\u5148\u9009\u62E9listen\u914D\u7F6E\u9879\u540E\u6709<span class="token keyword">default</span>\u6216default_server\u7684
<span class="token number">2</span>\u3001\u627E\u5230\u5339\u914Dlisten\u7AEF\u53E3\u7684\u7B2C\u4E00\u4E2Aserver\u5757
</code></pre></div><h4 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> location</h4><div class="language-javascript ext-js"><pre class="language-javascript"><code>location
<span class="token literal-property property">\u8BED\u6CD5</span><span class="token operator">:</span> location<span class="token punctuation">[</span><span class="token operator">=</span><span class="token operator">|</span><span class="token operator">~</span><span class="token operator">|</span><span class="token operator">~</span><span class="token operator">*</span><span class="token operator">|</span><span class="token operator">^</span><span class="token operator">~</span><span class="token operator">|</span>@<span class="token punctuation">]</span><span class="token operator">/</span>uri<span class="token operator">/</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
<span class="token literal-property property">\u914D\u7F6E\u5757</span><span class="token operator">:</span> server location\u4F1A\u5C1D\u8BD5\u6839\u636E\u7528\u6237\u8BF7\u6C42\u4E2D\u7684<span class="token constant">URI</span>\u6765\u5339\u914D\u4E0A\u9762\u7684<span class="token operator">/</span>uri\u8868\u8FBE\u5F0F\uFF0C\u5982\u679C\u53EF\u4EE5\u5339\u914D\uFF0C\u5C31\u9009\u62E9 location<span class="token punctuation">{</span><span class="token punctuation">}</span>\u5757\u4E2D\u7684\u914D\u7F6E\u6765\u5904\u7406\u7528\u6237\u8BF7\u6C42\u3002
</code></pre></div><p>location \u8868\u8FBE\u5F0F\u7C7B\u578B</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">~</span> \u8868\u793A\u6267\u884C\u4E00\u4E2A\u6B63\u5219\u5339\u914D\uFF0C\u533A\u5206\u5927\u5C0F\u5199<span class="token punctuation">;</span>
<span class="token operator">~</span><span class="token operator">*</span> \u8868\u793A\u6267\u884C\u4E00\u4E2A\u6B63\u5219\u5339\u914D\uFF0C\u4E0D\u533A\u5206\u5927\u5C0F\u5199<span class="token punctuation">;</span>
<span class="token operator">^</span><span class="token operator">~</span> \u8868\u793A\u666E\u901A\u5B57\u7B26\u5339\u914D\u3002\u4F7F\u7528\u524D\u7F00\u5339\u914D\u3002\u5982\u679C\u5339\u914D\u6210\u529F\uFF0C\u5219\u4E0D\u518D\u5339\u914D\u5176\u4ED6location<span class="token punctuation">;</span>
<span class="token operator">=</span> \u8FDB\u884C\u666E\u901A\u5B57\u7B26\u7CBE\u786E\u5339\u914D\u3002\u4E5F\u5C31\u662F\u5B8C\u5168\u5339\u914D<span class="token punctuation">;</span>
@ \u5B83\u5B9A\u4E49\u4E00\u4E2A\u547D\u540D\u7684 location\uFF0C\u4F7F\u7528\u5728\u5185\u90E8\u5B9A\u5411\u65F6\uFF0C\u4F8B\u5982 error_page<span class="token punctuation">,</span> try_files
</code></pre></div><p>\u4F18\u5148\u7EA7:</p><ul><li>\u7B49\u53F7\u7C7B\u578B (=) \u7684\u4F18\u5148\u7EA7\u6700\u9AD8\u3002\u4E00\u65E6\u5339\u914D\u6210\u529F\uFF0C\u5219\u4E0D\u518D\u67E5\u627E\u5176\u4ED6\u5339\u914D\u9879</li><li>\u524D\u7F00\u666E\u901A\u5339\u914D (^~) \u4F18\u5148\u7EA7\u6B21\u4E4B\u3002\u4E0D\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u4F7F\u7528\u524D\u7F00\u5339\u914D\uFF0C\u5982\u679C\u6709\u591A\u4E2A location \u5339\u914D\u7684\u8BDD\uFF0C\u5219\u4F7F\u7528\u8868\u8FBE\u5F0F\u6700\u957F\u7684\u90A3\u4E2A</li><li>\u6B63\u5219\u8868\u8FBE\u5F0F\u7C7B\u578B (~ ~*) \u7684\u4F18\u5148\u7EA7\u6B21\u4E4B\u3002\u4E00\u65E6\u5339\u914D\u6210\u529F\uFF0C\u5219\u4E0D\u518D\u67E5\u627E\u5176\u4ED6\u5339\u914D\u9879</li><li>\u5E38\u89C4\u5B57\u7B26\u4E32\u5339\u914D\uFF0C\u5982\u679C\u6709\u591A\u4E2A location \u5339\u914D\u7684\u8BDD\uFF0C\u5219\u4F7F\u7528\u8868\u8FBE\u5F0F\u6700\u957F\u7684\u90A3\u4E2A</li></ul><blockquote><p>(location =) &gt; (location \u5B8C\u6574\u8DEF\u5F84) &gt; (location ^~ \u8DEF\u5F84) &gt; (location ~,~* \u6B63\u5219\u987A\u5E8F) &gt; (location \u90E8\u5206\u8D77\u59CB\u8DEF\u5F84)</p></blockquote><h4 id="return" tabindex="-1"><a class="header-anchor" href="#return" aria-hidden="true">#</a> return</h4><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token literal-property property">\u8BED\u6CD5</span><span class="token operator">:</span><span class="token keyword">return</span> code <span class="token punctuation">[</span>text<span class="token punctuation">]</span> <span class="token keyword">return</span> code <span class="token constant">URL</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token constant">URL</span><span class="token punctuation">;</span>
<span class="token literal-property property">\u914D\u7F6E\u5757</span><span class="token operator">:</span>server\uFF0Clocation\uFF0C<span class="token keyword">if</span>
\u8BE5\u6307\u4EE4\u7528\u4E8E\u7ED3\u675F\u89C4\u5219\u7684\u6267\u884C\u5E76\u8FD4\u56DE\u72B6\u6001\u5417\u7ED9\u5BA2\u6237\u7AEF\u3002
<span class="token literal-property property">\u72B6\u6001\u7801\u5305\u62EC</span><span class="token operator">:</span>
<span class="token number">204</span><span class="token punctuation">(</span>No Content<span class="token punctuation">)</span>\u3001
<span class="token number">400</span><span class="token punctuation">(</span>Bad Request<span class="token punctuation">)</span>\u3001
<span class="token number">402</span><span class="token punctuation">(</span>Payment Required<span class="token punctuation">)</span>\u3001
<span class="token number">403</span><span class="token punctuation">(</span>Forbidden<span class="token punctuation">)</span>
<span class="token number">404</span><span class="token punctuation">(</span>Not Found<span class="token punctuation">)</span>\u3001
<span class="token number">405</span><span class="token punctuation">(</span>Method Not Allowed<span class="token punctuation">)</span>\u3001
<span class="token number">406</span><span class="token punctuation">(</span>Not Acceptable<span class="token punctuation">)</span>\u3001
<span class="token number">408</span><span class="token punctuation">(</span>Request Timeout<span class="token punctuation">)</span>\u3001
<span class="token number">410</span><span class="token punctuation">(</span>Gone<span class="token punctuation">)</span>\u3001
<span class="token number">411</span><span class="token punctuation">(</span>Length Required<span class="token punctuation">)</span>\u3001
<span class="token number">413</span><span class="token punctuation">(</span>Request Entity Too Large<span class="token punctuation">)</span>\u3001
<span class="token number">416</span><span class="token punctuation">(</span>Requested Range Not Satisfiable<span class="token punctuation">)</span>\u3001 <span class="token number">500</span><span class="token punctuation">(</span>Internal Server Error<span class="token punctuation">)</span>\u3001
<span class="token number">501</span><span class="token punctuation">(</span>Not Implemented<span class="token punctuation">)</span>\u3001
<span class="token number">502</span><span class="token punctuation">(</span>Bad Gateway<span class="token punctuation">)</span>\u3001
<span class="token number">503</span><span class="token punctuation">(</span>Service Unavailable<span class="token punctuation">)</span>
<span class="token number">504</span><span class="token punctuation">(</span>Gateway Timeout<span class="token punctuation">)</span>\u3002
\u4F8B\u5982\uFF0C\u793A\u4F8B\uFF0C\u5982\u679C\u8BBF\u95EE\u7684<span class="token constant">URL</span>\u4EE5<span class="token punctuation">.</span>sh <span class="token punctuation">.</span>bash \u7ED3\u5C3E\uFF0C\u8FD4\u56DE\u72B6\u6001\u7801<span class="token number">403</span>
location <span class="token operator">~</span> <span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token punctuation">(</span>sh<span class="token operator">|</span>bash<span class="token punctuation">)</span><span class="token operator">?</span>$ <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">403</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="rewrite" tabindex="-1"><a class="header-anchor" href="#rewrite" aria-hidden="true">#</a> rewrite</h4><div class="language-javascript ext-js"><pre class="language-javascript"><code>\u6267\u884C\u987A\u5E8F\uFF1A
<span class="token number">1.</span> <span class="token function">\u6267\u884Cserver\u5757\u7684rewrite\u6307\u4EE4</span><span class="token punctuation">(</span>\u8FD9\u91CC\u7684\u5757\u6307\u7684\u662Fserver\u5173\u952E\u5B57\u540E<span class="token punctuation">{</span><span class="token punctuation">}</span>\u5305\u56F4\u7684\u533A\u57DF\uFF0C\u5176\u5B83xx\u5757\u7C7B\u4F3C<span class="token punctuation">)</span>
<span class="token number">2.</span> \u6267\u884Clocation\u5339\u914D
<span class="token number">3.</span> \u6267\u884C\u9009\u5B9A\u7684location\u4E2D\u7684rewrite\u6307\u4EE4
\u5982\u679C\u5176\u4E2D\u67D0\u6B65<span class="token constant">URI</span>\u88AB\u91CD\u5199\uFF0C\u5219\u91CD\u65B0\u5FAA\u73AF\u6267\u884C<span class="token number">1</span><span class="token operator">-</span><span class="token number">3</span>\uFF0C\u76F4\u5230\u627E\u5230\u771F\u5B9E\u5B58\u5728\u7684\u6587\u4EF6
\u5982\u679C\u5FAA\u73AF\u8D85\u8FC7<span class="token number">10</span>\u6B21\uFF0C\u5219\u8FD4\u56DE<span class="token number">500</span> Internal Server Error\u9519\u8BEF
<span class="token literal-property property">\u8BED\u6CD5</span><span class="token operator">:</span>rewrite regex replacement <span class="token punctuation">[</span>flag<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token literal-property property">\u9ED8\u8BA4\u503C</span><span class="token operator">:</span>\u2014
<span class="token literal-property property">\u914D\u7F6E\u5757</span><span class="token operator">:</span>server<span class="token punctuation">,</span> location<span class="token punctuation">,</span> <span class="token keyword">if</span>
rewrite\u662F\u5B9E\u73B0<span class="token constant">URL</span><span class="token function">\u91CD\u5199\u7684\u5173\u952E\u6307\u4EE4\uFF0C\u6839\u636Eregex</span><span class="token punctuation">(</span>\u6B63\u5219\u8868\u8FBE\u5F0F<span class="token punctuation">)</span>\u90E8\u5206\u5185\u5BB9\uFF0C\u91CD\u5B9A\u5411\u5230replacement\uFF0C\u7ED3\u5C3E\u662Fflag\u6807\u8BB0\u3002 \u6B63\u5219<span class="token operator">:</span>perl\u517C\u5BB9\u6B63\u5219\u8868\u8FBE\u5F0F\u8BED\u53E5\u8FDB\u884C\u89C4\u5219\u5339\u914D
<span class="token literal-property property">\u66FF\u4EE3\u5185\u5BB9</span><span class="token operator">:</span>\u5C06\u6B63\u5219\u5339\u914D\u7684\u5185\u5BB9\u66FF\u6362\u6210replacement
<span class="token literal-property property">flag\u6807\u8BB0</span><span class="token operator">:</span>rewrite\u652F\u6301\u7684flag\u6807\u8BB0
</code></pre></div><h6 id="if-\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#if-\u6307\u4EE4" aria-hidden="true">#</a> if \u6307\u4EE4</h6><div class="language-javascript ext-js"><pre class="language-javascript"><code>\u8BED\u6CD5\uFF1A<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token parameter">condition</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
\u9ED8\u8BA4\u503C\uFF1A\u65E0
\u914D\u7F6E\u5757\uFF1Aserver<span class="token punctuation">,</span>location
\u5BF9\u7ED9\u5B9A\u7684\u6761\u4EF6condition\u8FDB\u884C\u5224\u65AD\u3002\u5982\u679C\u4E3A\u771F\uFF0C\u5927\u62EC\u53F7\u5185\u7684rewrite\u6307\u4EE4\u5C06\u88AB\u6267\u884C\u3002
<span class="token keyword">if</span><span class="token function">\u6761\u4EF6</span><span class="token punctuation">(</span>conditon<span class="token punctuation">)</span>\u53EF\u4EE5\u662F\u5982\u4E0B\u4EFB\u4F55\u5185\u5BB9<span class="token operator">:</span>
\u4E00\u4E2A\u53D8\u91CF\u540D\uFF1B<span class="token boolean">false</span>\u5982\u679C\u8FD9\u4E2A\u53D8\u91CF\u662F\u7A7A\u5B57\u7B26\u4E32\u6216\u8005\u4EE5<span class="token number">0</span>\u5F00\u59CB\u7684\u5B57\u7B26\u4E32\uFF1B
\u4F7F\u7528<span class="token operator">=</span> <span class="token punctuation">,</span><span class="token operator">!=</span> \u6BD4\u8F83\u7684\u4E00\u4E2A\u53D8\u91CF\u548C\u5B57\u7B26\u4E32
\u662F\u7528<span class="token operator">~</span>\uFF0C <span class="token operator">~</span><span class="token operator">*</span>\u4E0E\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u7684\u53D8\u91CF\uFF0C\u5982\u679C\u8FD9\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u5305\u542B<span class="token punctuation">}</span>\uFF0C<span class="token punctuation">;</span>\u5219\u6574\u4E2A\u8868\u8FBE\u5F0F\u9700\u8981\u7528&quot; \u6216&#39; \u5305\u56F4
\u4F7F\u7528<span class="token operator">-</span>f \uFF0C<span class="token operator">!</span><span class="token operator">-</span>f \u68C0\u67E5\u4E00\u4E2A\u6587\u4EF6\u662F\u5426\u5B58\u5728
\u4F7F\u7528<span class="token operator">-</span>d<span class="token punctuation">,</span> <span class="token operator">!</span><span class="token operator">-</span>d \u68C0\u67E5\u4E00\u4E2A\u76EE\u5F55\u662F\u5426\u5B58\u5728
\u4F7F\u7528<span class="token operator">-</span>e \uFF0C<span class="token operator">!</span><span class="token operator">-</span>e \u68C0\u67E5\u4E00\u4E2A\u6587\u4EF6\u3001\u76EE\u5F55\u3001\u7B26\u53F7\u94FE\u63A5\u662F\u5426\u5B58\u5728
\u4F7F\u7528<span class="token operator">-</span>x \uFF0C <span class="token operator">!</span><span class="token operator">-</span>x \u68C0\u67E5\u4E00\u4E2A\u6587\u4EF6\u662F\u5426\u53EF\u6267\u884C
</code></pre></div><h6 id="if-\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#if-\u5B9E\u4F8B" aria-hidden="true">#</a> if \u5B9E\u4F8B</h6><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>$http_user_agent<span class="token operator">~</span><span class="token operator">*</span><span class="token punctuation">(</span>mobile<span class="token operator">|</span>nokia<span class="token operator">|</span>iphone<span class="token operator">|</span>ipad<span class="token operator">|</span>android<span class="token operator">|</span>samsung<span class="token operator">|</span>htc<span class="token operator">|</span>blackberry<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rewrite <span class="token operator">^</span><span class="token punctuation">.</span><span class="token operator">+</span> <span class="token operator">/</span>mobile last<span class="token punctuation">;</span> \uFF03\u8DF3\u8F6C\u5230\u624B\u673A\u7AD9
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>$request_method <span class="token operator">=</span> <span class="token constant">POST</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">405</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>$slow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    limit_rate 10k<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>$invalid_referer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">403</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h6 id="last-break" tabindex="-1"><a class="header-anchor" href="#last-break" aria-hidden="true">#</a> last &amp; break</h6><div class="language-javascript ext-js"><pre class="language-javascript"><code>\uFF08<span class="token number">1</span>\uFF09last \u548C <span class="token keyword">break</span> \u5F53\u51FA\u73B0\u5728location \u4E4B\u5916\u65F6\uFF0C\u4E24\u8005\u7684\u4F5C\u7528\u662F\u4E00\u81F4\u7684\u6CA1\u6709\u4EFB\u4F55\u5DEE\u5F02\u3002
\u6CE8\u610F\u4E00\u70B9\u5C31\u662F\uFF0C\u4ED6\u4EEC\u4F1A\u8DF3\u8FC7\u6240\u6709\u7684\u5728\u4ED6\u4EEC\u4E4B\u540E\u7684rewrite \u6A21\u5757\u4E2D\u7684\u6307\u4EE4\uFF0C\u53BB\u9009\u62E9\u81EA\u5DF1\u5339\u914D\u7684location
\uFF08<span class="token number">2</span>\uFF09last \u548C <span class="token keyword">break</span> \u5F53\u51FA\u73B0\u5728location \u5185\u90E8\u65F6\uFF0C\u4E24\u8005\u5C31\u5B58\u5728\u4E86\u5DEE\u5F02
<span class="token operator">--</span> last<span class="token operator">:</span> \u4F7F\u7528\u4E86last \u6307\u4EE4\uFF0Crewrite \u540E\u4F1A\u8DF3\u51FAlocation \u4F5C\u7528\u57DF\uFF0C\u91CD\u65B0\u5F00\u59CB\u518D\u8D70\u4E00\u6B21\u521A\u521A\u7684\u884C\u4E3A
<span class="token operator">--</span> <span class="token keyword">break</span><span class="token operator">:</span> \u4F7F\u7528\u4E86<span class="token keyword">break</span> \u6307\u4EE4\uFF0Crewrite\u540E\u4E0D\u4F1A\u8DF3\u51FAlocation \u4F5C\u7528\u57DF\u3002\u5B83\u7684\u751F\u547D\u4E5F\u5728\u8FD9\u4E2Alocation\u4E2D\u7EC8\u7ED3\u3002
\u89E3\u91CA\u901A\u4FD7\u6613\u61C2\uFF1A
last\uFF1A
        \u91CD\u65B0\u5C06rewrite\u540E\u7684\u5730\u5740\u5728server\u6807\u7B7E\u4E2D\u6267\u884C
<span class="token keyword">break</span>\uFF1A
        \u5C06rewrite\u540E\u7684\u5730\u5740\u5728\u5F53\u524Dlocation\u6807\u7B7E\u4E2D\u6267\u884C
</code></pre></div><h6 id="permanent-redirect" tabindex="-1"><a class="header-anchor" href="#permanent-redirect" aria-hidden="true">#</a> permanent &amp; redirect:</h6><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token literal-property property">permanent</span><span class="token operator">:</span> \u6C38\u4E45\u6027\u91CD\u5B9A\u5411\u3002\u8BF7\u6C42\u65E5\u5FD7\u4E2D\u7684\u72B6\u6001\u7801\u4E3A<span class="token number">301</span>
<span class="token literal-property property">redirect</span><span class="token operator">:</span>\u4E34\u65F6\u91CD\u5B9A\u5411\u3002\u8BF7\u6C42\u65E5\u5FD7\u4E2D\u7684\u72B6\u6001\u7801\u4E3A<span class="token number">302</span>
</code></pre></div><p>\u4ECE\u5B9E\u73B0\u529F\u80FD\u7684\u89D2\u5EA6\u4E0A\u53BB\u770B\uFF0Cpermanent \u548C redirect \u662F\u4E00\u6837\u7684\u3002\u4E0D\u5B58\u5728\u597D\u574F\u3002\u4E5F\u4E0D\u5B58\u5728\u4EC0\u4E48\u6027\u80FD\u4E0A\u7684\u95EE\u9898\u3002\u4F46\u662F\u5BF9 seo \u4F1A\u6709\u5F71\u54CD\uFF0C\u8FD9\u91CC\u8981\u6839\u636E\u9700\u8981\u505A\u51FA\u9009\u62E9<br> \u5728 permanent \u548C redirect \u4E2D\u63D0\u5230\u4E86 \u72B6\u6001\u7801 301 \u548C 302\u3002</p><p>\u8BB0\u4F4F\uFF1Alast \u548C break \u60F3\u5BF9\u4E8E\u7684\u8BBF\u95EE\u65E5\u5FD7\u7684\u8BF7\u6C42\u72B6\u6001\u7801\u4E3A 200</p><p>\u5F53\u4F60\u6253\u5F00\u4E00\u4E2A\u7F51\u9875\uFF0C\u540C\u65F6\u6253\u5F00 debug \u6A21\u5F0F\u65F6\uFF0C\u4F1A\u53D1\u73B0 301 \u548C 302 \u65F6\u7684\u884C\u4E3A\u662F\u8FD9\u6837\u7684\u3002</p><p>\u7B2C\u4E00\u4E2A\u8BF7\u6C42 301 \u6216\u8005 302 \u540E\uFF0C\u6D4F\u89C8\u5668\u91CD\u65B0\u83B7\u53D6\u4E86\u4E00\u4E2A\u65B0\u7684 URL \uFF0C\u7136\u540E\u4F1A\u5BF9\u8FD9\u4E2A\u65B0\u7684 URL \u91CD\u65B0\u8FDB\u884C\u8BBF\u95EE\u3002\u6240\u4EE5\u5F53\u4F60\u914D\u7F6E\u7684\u662F permanent \u548C redirect , \u4F60\u5BF9\u4E00\u4E2A URL \u7684\u8BBF\u95EE\u8BF7\u6C42\uFF0C\u843D\u5230\u670D\u52A1\u5668\u4E0A\u81F3\u5C11\u4E3A 2 \u6B21\uFF1B\u800C\u5F53\u4F60\u914D\u7F6E\u4E86 last \u6216\u8005\u662F break \u65F6\uFF0C\u4F60\u6700\u7EC8\u7684 URL \u786E\u5B9A\u4E0B\u6765\u540E\uFF0C\u4E0D\u4F1A\u5C06\u8FD9\u4E2A URL \u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668\uFF0C\u800C\u662F\u5C06\u5176\u6254\u7ED9\u4E86 fastcgi_pass \u6216\u8005\u662F proxy_pass \u6307\u4EE4\u53BB\u5904\u7406\u3002\u8BF7\u6C42\u4E00\u4E2A URL \uFF0C\u843D\u5230\u670D\u52A1\u5668\u4E0A\u7684\u6B21\u6570\u5C31\u4E3A 1 \u6B21\u3002</p><p>\u6CE8\u610F\uFF1A\u914D\u7F6E last \u5728\u8DE8\u57DF\u7684\u65F6\u5019\u6548\u679C\u548C redirect \u4E00\u81F4\uFF0C\u90FD\u662F\u8FD4\u56DE 302 \u72B6\u6001\u7801\uFF0C\u8BF7\u6C42\u5730\u5740\u4E5F\u53D1\u751F\u6539\u53D8</p><h3 id="\u5176\u4ED6\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u5E94\u7528" aria-hidden="true">#</a> \u5176\u4ED6\u5E94\u7528</h3><h4 id="\u4F30\u7B97\u5E76\u53D1" tabindex="-1"><a class="header-anchor" href="#\u4F30\u7B97\u5E76\u53D1" aria-hidden="true">#</a> \u4F30\u7B97\u5E76\u53D1</h4><p>nginx \u4F5C\u4E3A http \u670D\u52A1\u5668\u7684\u65F6\u5019\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>max_clients <span class="token operator">=</span> worker_processes <span class="token operator">*</span> worker_connections<span class="token operator">/</span><span class="token number">2</span>
</code></pre></div><p>nginx \u4F5C\u4E3A\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u7684\u65F6\u5019\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>max_clients <span class="token operator">=</span> worker_processes <span class="token operator">*</span> worker_connections<span class="token operator">/</span><span class="token number">4</span> 
</code></pre></div><h4 id="\u9650\u5236\u6BCF\u4E2A-ip-\u7684\u5E76\u53D1\u8FDE\u63A5\u6570" tabindex="-1"><a class="header-anchor" href="#\u9650\u5236\u6BCF\u4E2A-ip-\u7684\u5E76\u53D1\u8FDE\u63A5\u6570" aria-hidden="true">#</a> \u9650\u5236\u6BCF\u4E2A IP \u7684\u5E76\u53D1\u8FDE\u63A5\u6570</h4><p>demo: \u5B9A\u4E49\u4E00\u4E2A\u53EB \u201Ctwo\u201D \u7684\u8BB0\u5F55\u533A\uFF0C\u603B\u5BB9\u91CF\u4E3A 10M\uFF08\u8D85\u8FC7\u5927\u5C0F\u5C06\u8BF7\u6C42\u5931\u8D25\uFF0C\u4EE5\u53D8\u91CF $binary_remote_addr \u4F5C\u4E3A\u4F1A\u8BDD\u7684\u5224\u65AD\u57FA\u51C6\uFF08\u5373\u4E00\u4E2A\u5730\u5740\u4E00\u4E2A\u4F1A\u8BDD\uFF09\u3002 \u9650\u5236 /download/ \u76EE\u5F55\u4E0B\uFF0C\u4E00\u4E2A\u4F1A\u8BDD\u53EA\u80FD\u8FDB\u884C\u4E00\u4E2A\u8FDE\u63A5\u3002 \u7B80\u5355\u70B9\uFF0C\u5C31\u662F\u9650\u5236 /download/ \u76EE\u5F55\u4E0B\uFF0C\u4E00\u4E2A IP \u53EA\u80FD\u53D1\u8D77\u4E00\u4E2A\u8FDE\u63A5\uFF0C\u591A\u8FC7\u4E00\u4E2A\uFF0C\u4E00\u5F8B 503\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>http <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    limit_conn_zone $binary_remote_addr zone<span class="token operator">=</span>two<span class="token operator">:</span>10m<span class="token punctuation">;</span>
    server <span class="token punctuation">{</span>
        <span class="token operator">...</span>
        location <span class="token operator">/</span>download <span class="token punctuation">{</span>
            limit_conn   two  <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u9650\u6D41" tabindex="-1"><a class="header-anchor" href="#\u9650\u6D41" aria-hidden="true">#</a> \u9650\u6D41</h4><p>demo: \u5B9A\u4E49\u4E00\u4E2A\u53EB \u201Cone\u201D \u7684\u8BB0\u5F55\u533A\uFF0C\u5360\u7528\u7A7A\u95F4\u5927\u5C0F\u4E3A 10m\uFF08\u8D85\u8FC7\u5927\u5C0F\u5C06\u8BF7\u6C42\u5931\u8D25\uFF09\uFF0C\u5E73\u5747\u5904\u7406\u7684\u8BF7\u6C42\u9891\u7387\u4E0D\u80FD\u8D85\u8FC7\u6BCF\u79D2\u4E00\u6B21\uFF0C\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u5206\u949F\u901F\u7387</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>http <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    limit_req_zone  $binary_remote_addr  zone<span class="token operator">=</span>one<span class="token operator">:</span>10m  rate<span class="token operator">=</span>1r<span class="token operator">/</span>s<span class="token punctuation">;</span>
    server <span class="token punctuation">{</span>
        <span class="token operator">...</span>
        location <span class="token operator">/</span> <span class="token punctuation">{</span>
            #\u7F13\u5B58\u533A\u961F\u5217burst<span class="token operator">=</span><span class="token number">5</span>\u4E2A<span class="token punctuation">,</span><span class="token function">nodelay\u8868\u793A\u4E0D\u5EF6\u671F</span><span class="token punctuation">(</span>\u8D85\u8FC7\u7684\u8BF7\u6C42\u5931\u8D25<span class="token punctuation">)</span>\uFF0C\u5373\u6BCF\u79D2\u6700\u591A\u53EF\u5904\u7406rate<span class="token operator">+</span>burst\u4E2A<span class="token punctuation">,</span>\u540C\u65F6\u5904\u7406rate\u4E2A\u3002
            limit_req zone<span class="token operator">=</span>one burst<span class="token operator">=</span><span class="token number">5</span> nodelay<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u767D\u540D\u5355" tabindex="-1"><a class="header-anchor" href="#\u767D\u540D\u5355" aria-hidden="true">#</a> \u767D\u540D\u5355</h4><div class="language-javascript ext-js"><pre class="language-javascript"><code>http<span class="token punctuation">{</span>
    <span class="token operator">...</span>
    #\u5224\u65AD\u5BA2\u6237\u7AEF\u7684ip\u5730\u5740\u662F\u5426\u5728\u767D\u540D\u5355\u5217\u8868\u5F53\u4E2D<span class="token punctuation">,</span>\u5982\u679C\u8FD4\u56DE\u4E3A<span class="token number">0</span><span class="token punctuation">,</span>\u5219\u5728\u767D\u540D\u5355\u5217\u8868\u5F53\u4E2D<span class="token punctuation">,</span>\u5426\u5219\u8FD4\u56DE\u4E3A<span class="token number">1</span>
    geo $whiteIpList <span class="token punctuation">{</span>
        <span class="token keyword">default</span>  <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token number">118.24</span><span class="token number">.109</span><span class="token number">.254</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token number">47.98</span><span class="token number">.147</span><span class="token number">.0</span><span class="token operator">/</span><span class="token number">24</span> <span class="token number">1</span><span class="token punctuation">;</span>
        #\u53EF\u4EE5\u5F15\u5165\u4E00\u4E9B\u767D\u540D\u5355\u914D\u7F6E
        include <span class="token string">&#39;whiteIP.conf&#39;</span>
    <span class="token punctuation">}</span>
    #\u5982\u679C\u4E0D\u5728\u767D\u540D\u5355\u4E4B\u5185<span class="token punctuation">,</span>\u8FD4\u56DE\u5BA2\u6237\u7AEF\u7684\u4E8C\u8FDB\u5236\u7684ip\u5730\u5740
    map $whiteIpList  $limit <span class="token punctuation">{</span>
        <span class="token keyword">default</span>  <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token number">1</span>   $binary_remote_addr<span class="token punctuation">;</span>
        <span class="token number">0</span>   <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    #\u5982\u679C\u8FD4\u56DE\u7684\u662F\u7A7A\u5B57\u7B26\u4E32\u90A3\u4E48\u901F\u7387\u9650\u5236\u4F1A\u5931\u6548
    limit_req_zone $limit zone<span class="token operator">=</span>test<span class="token operator">:</span>2m rate<span class="token operator">=</span>1r<span class="token operator">/</span>m<span class="token punctuation">;</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u9632\u76D7\u94FE" tabindex="-1"><a class="header-anchor" href="#\u9632\u76D7\u94FE" aria-hidden="true">#</a> \u9632\u76D7\u94FE</h4><div class="language-javascript ext-js"><pre class="language-javascript"><code>http <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    server <span class="token punctuation">{</span>
        <span class="token operator">...</span>
        location <span class="token operator">~</span><span class="token operator">*</span> <span class="token punctuation">.</span><span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>png<span class="token operator">|</span>swf<span class="token operator">|</span>flv<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
            valid_referers none blocked <span class="token operator">*</span><span class="token punctuation">.</span>13sai<span class="token punctuation">.</span>com<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>$invalid_referer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                rewrite <span class="token operator">^</span><span class="token operator">/</span> blog<span class="token punctuation">.</span>13sai<span class="token punctuation">.</span>com
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53C2\u8003:</p>`,53),_={href:"https://learnku.com/articles/36768",target:"_blank",rel:"noopener noreferrer"},g=s("https://learnku.com/articles/36768"),f={href:"https://www.jianshu.com/p/5d6bd48b4c2f",target:"_blank",rel:"noopener noreferrer"},x=s("https://www.jianshu.com/p/5d6bd48b4c2f");function v(y,w){const a=o("ExternalLinkIcon");return e(),c(r,null,[i,n("p",null,[d,n("a",m,[h,p(a)])]),b,n("p",null,[n("a",_,[g,p(a)])]),n("p",null,[n("a",f,[x,p(a)])])],64)}var q=l(k,[["render",v]]);export{q as default};
