<template><h1 id="解决wordpress无法发送邮件和链接点击无效" tabindex="-1"><a class="header-anchor" href="#解决wordpress无法发送邮件和链接点击无效" aria-hidden="true">#</a> 解决WordPress无法发送邮件和链接点击无效</h1>
<h3 id="_1、解决mail-函数被禁用-wordpress无法发送邮件" tabindex="-1"><a class="header-anchor" href="#_1、解决mail-函数被禁用-wordpress无法发送邮件" aria-hidden="true">#</a> 1、解决mail()函数被禁用，WordPress无法发送邮件</h3>
<p>在一些虚拟主机由于mail()函数被禁用，导致WordPress无法发送邮件，出现下面情况：</p>
<blockquote>
<p>电子邮件未能发送。<br>
可能原因：您的主机禁用了mail()函数。</p>
</blockquote>
<p>可以在主题的function.php添加如下代码解决</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//修复WordPress邮件发送，以QQ邮箱为例</span>
<span class="token keyword">function</span> <span class="token function">mail_smtp</span><span class="token punctuation">(</span> <span class="token parameter">$phpmailer</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    $phpmailer<span class="token operator">-</span><span class="token operator">></span>FromName <span class="token operator">=</span> <span class="token string">'AweiG点看'</span><span class="token punctuation">;</span> <span class="token comment">//名字</span>
    $phpmailer<span class="token operator">-</span><span class="token operator">></span>Host <span class="token operator">=</span> <span class="token string">'smtp.qq.com'</span><span class="token punctuation">;</span> <span class="token comment">//smtp地址,可以到你使用的邮件设置里面找</span>
    $phpmailer<span class="token operator">-</span><span class="token operator">></span>Port <span class="token operator">=</span> <span class="token number">465</span><span class="token punctuation">;</span> <span class="token comment">//端口，一般不用修改</span>
    $phpmailer<span class="token operator">-</span><span class="token operator">></span>Username <span class="token operator">=</span> <span class="token string">'123456@qq.com'</span><span class="token punctuation">;</span>  <span class="token comment">//邮件账号</span>
    $phpmailer<span class="token operator">-</span><span class="token operator">></span>Password <span class="token operator">=</span> <span class="token string">'jbjie'</span><span class="token punctuation">;</span> <span class="token comment">//邮件密码</span>
    $phpmailer<span class="token operator">-</span><span class="token operator">></span>From <span class="token operator">=</span> <span class="token string">'123456@qq.com'</span><span class="token punctuation">;</span><span class="token comment">//邮件账号</span>
    $phpmailer<span class="token operator">-</span><span class="token operator">></span>SMTPSecure <span class="token operator">=</span> <span class="token string">'ssl'</span><span class="token punctuation">;</span> <span class="token comment">//tls or ssl （port=25留空，465为ssl）一般不用修改</span>
    $phpmailer<span class="token operator">-</span><span class="token operator">></span>SMTPKeepAlive <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    $phpmailer<span class="token operator">-</span><span class="token operator">></span>SMTPAuth <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    $phpmailer<span class="token operator">-</span><span class="token operator">></span><span class="token function">IsSMTP</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">add_action</span><span class="token punctuation">(</span><span class="token string">'phpmailer_init'</span><span class="token punctuation">,</span> <span class="token string">'mail_smtp'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_2、解决wordpress重置邮件链接点击无效" tabindex="-1"><a class="header-anchor" href="#_2、解决wordpress重置邮件链接点击无效" aria-hidden="true">#</a> 2、解决WordPress重置邮件链接点击无效</h3>
<p>这本应该不是什么问题，WordPress为了邮件链接突出点，使用了“&lt;&gt;”把链接包住，但在邮件被解析了，点击链接后出现下面情况：</p>
<blockquote>
<p>您的密码重设链接无效，请在下方请求新链接</p>
</blockquote>
<p>可以在主题的function.php添加如下代码解决</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//修复WordPress您的密码重设链接无效</span>
<span class="token keyword">function</span> <span class="token function">reset_password_message</span><span class="token punctuation">(</span> <span class="token parameter">$message<span class="token punctuation">,</span> $key</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token function">strpos</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">'user_login'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'@'</span><span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    $user_data <span class="token operator">=</span> <span class="token function">get_user_by</span><span class="token punctuation">(</span><span class="token string">'email'</span><span class="token punctuation">,</span> <span class="token function">trim</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">'user_login'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    $login <span class="token operator">=</span> <span class="token function">trim</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">'user_login'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    $user_data <span class="token operator">=</span> <span class="token function">get_user_by</span><span class="token punctuation">(</span><span class="token string">'login'</span><span class="token punctuation">,</span> $login<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    $user_login <span class="token operator">=</span> $user_data<span class="token operator">-</span><span class="token operator">></span>user_login<span class="token punctuation">;</span>
    $msg <span class="token operator">=</span> <span class="token function">__</span><span class="token punctuation">(</span><span class="token string">'Someone has requested a password reset for the following account:'</span><span class="token punctuation">)</span><span class="token punctuation">.</span> <span class="token string">"\r\n\r\n"</span><span class="token punctuation">;</span>
    $msg <span class="token punctuation">.</span><span class="token operator">=</span> <span class="token function">network_site_url</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">.</span> <span class="token string">"\r\n\r\n"</span><span class="token punctuation">;</span>
    $msg <span class="token punctuation">.</span><span class="token operator">=</span> <span class="token function">sprintf</span><span class="token punctuation">(</span><span class="token function">__</span><span class="token punctuation">(</span><span class="token string">'Username: %s'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> $user_login<span class="token punctuation">)</span> <span class="token punctuation">.</span> <span class="token string">"\r\n\r\n"</span><span class="token punctuation">;</span>
    $msg <span class="token punctuation">.</span><span class="token operator">=</span> <span class="token function">__</span><span class="token punctuation">(</span><span class="token string">'If this was a mistake, just ignore this email and nothing will happen.'</span><span class="token punctuation">)</span> <span class="token punctuation">.</span> <span class="token string">"\r\n\r\n"</span><span class="token punctuation">;</span>
    $msg <span class="token punctuation">.</span><span class="token operator">=</span> <span class="token function">__</span><span class="token punctuation">(</span><span class="token string">'To reset your password, visit the following address:'</span><span class="token punctuation">)</span><span class="token punctuation">.</span> <span class="token string">"\r\n\r\n"</span><span class="token punctuation">;</span>
    $msg <span class="token punctuation">.</span><span class="token operator">=</span> <span class="token function">network_site_url</span><span class="token punctuation">(</span><span class="token string">"wp-login.php?action=rp&amp;key=$key&amp;login="</span> <span class="token punctuation">.</span> <span class="token function">rawurlencode</span><span class="token punctuation">(</span>$user_login<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'login'</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
    <span class="token keyword">return</span> $msg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">add_filter</span><span class="token punctuation">(</span><span class="token string">'retrieve_password_message'</span><span class="token punctuation">,</span> reset_password_message<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>以上代码只解决了重置密码链接的问题，新用户注册获取密码的邮件链接依然存在。</p>
<p>解决办法：</p>
<p>打开WP安装目录下的/wp-includes/pluggable.php，找到如下代码（1741行左右）</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>$message <span class="token punctuation">.</span><span class="token operator">=</span> <span class="token string">'&lt;'</span> <span class="token punctuation">.</span> <span class="token function">network_site_url</span><span class="token punctuation">(</span><span class="token string">"wp-login.php?action=rp&amp;key=$key&amp;login="</span> <span class="token punctuation">.</span> <span class="token function">rawurlencode</span><span class="token punctuation">(</span>$user<span class="token operator">-</span><span class="token operator">></span>user_login<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'login'</span><span class="token punctuation">)</span> <span class="token punctuation">.</span> "<span class="token operator">></span>
"<span class="token punctuation">;</span> 
</code></pre></div><p>修改成</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>$message <span class="token punctuation">.</span><span class="token operator">=</span> <span class="token function">network_site_url</span><span class="token punctuation">(</span><span class="token string">"wp-login.php?action=rp&amp;key=$key&amp;login="</span> <span class="token punctuation">.</span> <span class="token function">rawurlencode</span><span class="token punctuation">(</span>$user<span class="token operator">-</span><span class="token operator">></span>user_login<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'login'</span><span class="token punctuation">)</span> <span class="token punctuation">.</span> <span class="token string">"\r\n\r\n"</span><span class="token punctuation">;</span>
</code></pre></div><p>以上的修改，根本情况其实就是去掉“&lt;&gt;”,这样邮件中的链接就没有“&lt;&gt;”包含，成为有效的链接</p>
<blockquote>
<p>注意，以上修改会在WordPress和主题升级后覆盖，所以比较麻烦</p>
</blockquote>
<h3 id="_3、使用插件解决无法发送邮件和链接点击无效的问题" tabindex="-1"><a class="header-anchor" href="#_3、使用插件解决无法发送邮件和链接点击无效的问题" aria-hidden="true">#</a> 3、使用插件解决无法发送邮件和链接点击无效的问题</h3>
<p>上面两个问题使用插件可以得到很好的解决，这里推荐使用两个插件：</p>
<h4 id="a-easy-wp-smtp" tabindex="-1"><a class="header-anchor" href="#a-easy-wp-smtp" aria-hidden="true">#</a> a. Easy WP SMTP</h4>
<p>从你的WordPress博客通过SMTP发送电子邮件。解决mail()函数被禁用，WordPress无法发送邮件的问题</p>
<h4 id="b-wp-better-emails" tabindex="-1"><a class="header-anchor" href="#b-wp-better-emails" aria-hidden="true">#</a> b. WP Better Emails</h4>
<p>美化默认文本/普通WP邮件到完全可定制的HTML电子邮件。解决WordPress重置和获取密码邮件链接点击无效的问题</p>
</template>
