<template><h1 id="laravel-passport-微信小程序的登录认证" tabindex="-1"><a class="header-anchor" href="#laravel-passport-微信小程序的登录认证" aria-hidden="true">#</a> Laravel Passport &amp; 微信小程序的登录认证</h1>
<p><strong>安装和配置Laravel Passport</strong></p>
<p>安装 Laravel Passport，可以参考 Laravel 文档 <a href="https://learnku.com/docs/laravel/6.x/passport/5152" target="_blank" rel="noopener noreferrer">https://learnku.com/docs/laravel/6.x/passport/5152<OutboundLink/></a>，执行命令生产生成访问令牌的「个人访问」客户端</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>php artisan passport<span class="token operator">:</span>install
</code></pre></div><blockquote>
<p>Passport 有几种认证模式，而个人访问令牌更适合微信小程序的应用场景</p>
</blockquote>
<p>假设已经安装好了Passport，然后打开 <code>app/Providers/AuthServiceProvider.php</code>，在<code>boot</code>方法中添加</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//Passport 个人访问令牌默认有效期30天</span>
Passport<span class="token operator">:</span><span class="token operator">:</span><span class="token function">personalAccessTokensExpireIn</span><span class="token punctuation">(</span>Carbon<span class="token operator">:</span><span class="token operator">:</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">addDays</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>在用户模型里引用，例如我的模型叫 <code>Wxuser</code>，可以参考文档说明</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>use LaravelPassportHasApiTokens<span class="token punctuation">;</span>
use IlluminateNotificationsNotifiable<span class="token punctuation">;</span>
use IlluminateFoundationAuthUser <span class="token keyword">as</span> Authenticatable<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Wechat</span> <span class="token keyword">extends</span> <span class="token class-name">Authenticatable</span>
<span class="token punctuation">{</span>
    use HasApiTokens<span class="token punctuation">,</span> Notifiable<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>修改<code>configauth.php</code> 中相应的配置， 可以参考文档说明</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token string">'guards'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
    <span class="token string">'api'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token string">'driver'</span> <span class="token operator">=></span> <span class="token string">'passport'</span><span class="token punctuation">,</span>
        <span class="token string">'provider'</span> <span class="token operator">=></span> <span class="token string">'wxusers'</span><span class="token punctuation">,</span> <span class="token comment">//修改users=>wxusers</span>
        <span class="token comment">//'hash' => false,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre></div><blockquote>
<p>Laravel 默认配置只支持一个 provider，当多用户模型认证时，我们可以在控制器的构造函数中来动态修改</p>
</blockquote>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//修改api供应商provider</span>
Config<span class="token operator">:</span><span class="token operator">:</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'auth.guards.api.provider'</span><span class="token punctuation">,</span> <span class="token string">'wxusers'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>在 <code>api.php</code> 中使用<code>auth:api</code>中间件即可将路由保护起来</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Route<span class="token operator">:</span><span class="token operator">:</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'middleware'</span> <span class="token operator">=></span> <span class="token string">'auth:api'</span><span class="token punctuation">]</span> <span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>基本的 Laravel Passport 安装和配置就已经完成了，现在可以开始使用了</p>
<p><strong>Passport 个人访问令牌的使用</strong></p>
<p>新建一个对应微信小程序 <code>WxuserController</code> 控制器，并设置好路由</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Route<span class="token operator">:</span><span class="token operator">:</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'wxuser/login'</span><span class="token punctuation">,</span> <span class="token string">'WeappWxuserController@login'</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">'weapp.wxuser.login'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>在 <code>login</code> 方法中生成 <code>accessToken</code> 返回给小程序</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter">Request $request</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    $input <span class="token operator">=</span> Xss<span class="token operator">:</span><span class="token operator">:</span><span class="token function">xss_clean</span><span class="token punctuation">(</span>$request<span class="token operator">-</span><span class="token operator">></span><span class="token function">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">empty</span><span class="token punctuation">(</span>$input<span class="token punctuation">[</span><span class="token string">'code'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> $<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">apiJsonError</span><span class="token punctuation">(</span><span class="token string">'code参数缺失'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//通过code获取小程序authSession</span>
    $authSession <span class="token operator">=</span> $<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">authSession</span><span class="token punctuation">(</span>$input<span class="token punctuation">[</span><span class="token string">'code'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    $wxuser <span class="token operator">=</span> $<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">></span>model<span class="token operator">-</span><span class="token operator">></span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string">'openid'</span><span class="token punctuation">,</span> $authSession<span class="token punctuation">[</span><span class="token string">'openid'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//根据openid生成唯一token</span>
    $createToken <span class="token operator">=</span> $wxuser<span class="token operator">-</span><span class="token operator">></span><span class="token function">createToken</span><span class="token punctuation">(</span>$authSession<span class="token punctuation">[</span><span class="token string">'openid'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    $accessToken <span class="token operator">=</span> $createToken<span class="token operator">-</span><span class="token operator">></span>accessToken<span class="token punctuation">;</span>
    $data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'token_type'</span> <span class="token operator">=></span> <span class="token string">"Bearer"</span><span class="token punctuation">,</span> <span class="token string">'access_token'</span> <span class="token operator">=></span> $createToken<span class="token operator">-</span><span class="token operator">></span>accessToken<span class="token punctuation">,</span> <span class="token string">'expires_at'</span> <span class="token operator">=></span> $createToken<span class="token operator">-</span><span class="token operator">></span>token<span class="token operator">-</span><span class="token operator">></span>expires_at<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> $<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">apiJsonSucc</span><span class="token punctuation">(</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>微信小程序登录</strong></p>
<p>通过 <code>wx.login</code> 来换取第三方的 <code>access_token</code> 并保存到本地</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token function-variable function">login</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    wx<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">// 发送 res.code 到后台换取 openId, sessionKey, unionId</span>
            app<span class="token punctuation">.</span><span class="token function">wxRequest</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                url<span class="token operator">:</span> <span class="token string">'/wxuser/login'</span><span class="token punctuation">,</span>
                method<span class="token operator">:</span> <span class="token string">'post'</span><span class="token punctuation">,</span>
                data<span class="token operator">:</span> <span class="token punctuation">{</span>
                    code<span class="token operator">:</span> res<span class="token punctuation">.</span>code
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function-variable function">succ</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">const</span> data <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        wx<span class="token punctuation">.</span><span class="token function">setStorageSync</span><span class="token punctuation">(</span><span class="token string">'access_token'</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>access_token<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>这里我们可以在 <code>app.js</code> 中封装基础的 <code>wxRequest</code> 请求函数，把从后台获取的 <code>access_token</code> 添加到 <code>header</code> 中</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token function-variable function">wxRequest</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> accessToken</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>globalData<span class="token punctuation">.</span>url<span class="token punctuation">;</span>
    <span class="token keyword">const</span> header <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">'Authorization'</span><span class="token operator">:</span> <span class="token string">'Bearer '</span> <span class="token operator">+</span> <span class="token punctuation">(</span>accessToken <span class="token operator">||</span> wx<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span><span class="token string">'access_token'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string">'Accept'</span><span class="token operator">:</span> <span class="token string">'application/json'</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">//加载中</span>
    wx<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    obj<span class="token punctuation">.</span>url <span class="token operator">=</span> url <span class="token operator">+</span> obj<span class="token punctuation">.</span>url<span class="token punctuation">;</span>
    wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        header<span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>header<span class="token punctuation">,</span> obj<span class="token punctuation">.</span>header <span class="token operator">?</span> obj<span class="token punctuation">.</span>header <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">typeof</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>succ<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">'function'</span> <span class="token operator">&amp;&amp;</span> obj<span class="token punctuation">.</span><span class="token function">succ</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>data <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>status <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                that<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">complete</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            wx<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>好了，以上就是 Laravel Passport &amp; 微信小程序登录认证的基本流程。</p>
</template>
