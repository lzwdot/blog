<template><h1 id="laravel-5-5添加自定义表单验证规则" tabindex="-1"><a class="header-anchor" href="#laravel-5-5添加自定义表单验证规则" aria-hidden="true">#</a> Laravel 5.5添加自定义表单验证规则</h1>
<p>存在验证码身份证的函数：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">function_exists</span><span class="token punctuation">(</span><span class="token string">'is_card'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token operator">/</span>
      <span class="token operator">*</span> 身份证号
      <span class="token operator">*</span> @param $str
      <span class="token operator">*</span> @<span class="token keyword">return</span> bool
      <span class="token operator">*</span><span class="token operator">/</span>
     <span class="token keyword">function</span> <span class="token function">is_card</span><span class="token punctuation">(</span><span class="token parameter">$str</span><span class="token punctuation">)</span>
     <span class="token punctuation">{</span>
         $str <span class="token operator">=</span> <span class="token function">strtoupper</span><span class="token punctuation">(</span>$str<span class="token punctuation">)</span><span class="token punctuation">;</span>
         $regx <span class="token operator">=</span> <span class="token string">"/(^d{15}$)|(^d{17}([0-9]|X)$)/"</span><span class="token punctuation">;</span>
         $arr_split <span class="token operator">=</span> <span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">preg_match</span><span class="token punctuation">(</span>$regx<span class="token punctuation">,</span> $str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
         <span class="token comment">//检查15位</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">15</span> <span class="token operator">==</span> <span class="token function">strlen</span><span class="token punctuation">(</span>$str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             $regx <span class="token operator">=</span> <span class="token string">"/^(d{6})+(d{2})+(d{2})+(d{2})+(d{3})$/"</span><span class="token punctuation">;</span>
             @<span class="token function">preg_match</span><span class="token punctuation">(</span>$regx<span class="token punctuation">,</span> $str<span class="token punctuation">,</span> $arr_split<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token comment">//检查生日日期是否正确</span>
             $dtm_birth <span class="token operator">=</span> <span class="token string">"19"</span> <span class="token punctuation">.</span> $arr_split<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">.</span> <span class="token string">'/'</span> <span class="token punctuation">.</span> $arr_split<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">.</span> <span class="token string">'/'</span> <span class="token punctuation">.</span> $arr_split<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
             <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">strtotime</span><span class="token punctuation">(</span>$dtm_birth<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                 <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
             <span class="token comment">//检查18位</span>
             $regx <span class="token operator">=</span> <span class="token string">"/^(d{6})+(d{4})+(d{2})+(d{2})+(d{3})([0-9]|X)$/"</span><span class="token punctuation">;</span>
             @<span class="token function">preg_match</span><span class="token punctuation">(</span>$regx<span class="token punctuation">,</span> $str<span class="token punctuation">,</span> $arr_split<span class="token punctuation">)</span><span class="token punctuation">;</span>
             $dtm_birth <span class="token operator">=</span> $arr_split<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">.</span> <span class="token string">'/'</span> <span class="token punctuation">.</span> $arr_split<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">.</span> <span class="token string">'/'</span> <span class="token punctuation">.</span> $arr_split<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
             <span class="token comment">//检查生日日期是否正确</span>
             <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">strtotime</span><span class="token punctuation">(</span>$dtm_birth<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                 <span class="token comment">//检验18位身份证的校验码是否正确。</span>
                 <span class="token comment">//校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。</span>
                 $arr_int <span class="token operator">=</span> <span class="token function">array</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                 $arr_ch <span class="token operator">=</span> <span class="token function">array</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'0'</span><span class="token punctuation">,</span> <span class="token string">'X'</span><span class="token punctuation">,</span> <span class="token string">'9'</span><span class="token punctuation">,</span> <span class="token string">'8'</span><span class="token punctuation">,</span> <span class="token string">'7'</span><span class="token punctuation">,</span> <span class="token string">'6'</span><span class="token punctuation">,</span> <span class="token string">'5'</span><span class="token punctuation">,</span> <span class="token string">'4'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                 $sign <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                 <span class="token keyword">for</span> <span class="token punctuation">(</span>$i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> $i <span class="token operator">&lt;</span> <span class="token number">17</span><span class="token punctuation">;</span> $i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                     $b <span class="token operator">=</span> <span class="token punctuation">(</span>int<span class="token punctuation">)</span>$str<span class="token punctuation">{</span>$i<span class="token punctuation">}</span><span class="token punctuation">;</span>
                     $w <span class="token operator">=</span> $arr_int<span class="token punctuation">[</span>$i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                     $sign <span class="token operator">+=</span> $b <span class="token operator">*</span> $w<span class="token punctuation">;</span>
                 <span class="token punctuation">}</span>
                 $n <span class="token operator">=</span> $sign <span class="token operator">%</span> <span class="token number">11</span><span class="token punctuation">;</span>
                 $str_num <span class="token operator">=</span> $arr_ch<span class="token punctuation">[</span>$n<span class="token punctuation">]</span><span class="token punctuation">;</span>
                 <span class="token keyword">if</span> <span class="token punctuation">(</span>$str_num <span class="token operator">!=</span> <span class="token function">substr</span><span class="token punctuation">(</span>$str<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                     <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                     <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                 <span class="token punctuation">}</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre></div><p>以上函数添加到laravel的验证器中，实现方法：</p>
<p>1、服务提供者 AppServiceProvider@boot方法下添加代码：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>use Validator<span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token comment">//Schema::defaultStringLength(191);</span>
   <span class="token comment">//自定义验证码规则 Validator::_extend_('is_card', function ($attribute, $value, $parameters) {</span>
      <span class="token keyword">return</span> <span class="token function">is_card</span><span class="token punctuation">(</span>$value<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>2、cn/validation.php 验证规则中文包最后添加一条：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token string">'is_card'</span> <span class="token operator">=></span> <span class="token string">':attribute 格式不正确。'</span><span class="token punctuation">,</span>
</code></pre></div><p>3、使用</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>$validator <span class="token operator">=</span> Validator<span class="token operator">:</span><span class="token operator">:</span><span class="token function">make</span><span class="token punctuation">(</span>$request<span class="token operator">-</span><span class="token operator">></span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
     <span class="token string">'name'</span> <span class="token operator">=></span> <span class="token string">'required'</span><span class="token punctuation">,</span>
     <span class="token string">'phone'</span> <span class="token operator">=></span> <span class="token string">'required|regex:/^1[23456789]d{9}$/i'</span><span class="token punctuation">,</span>
     <span class="token string">'card'</span> <span class="token operator">=></span> <span class="token string">'required|is_card'</span><span class="token punctuation">,</span>
 <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>注意：is_card命名必须是is_card，不能使用isCard这种命名</p>
</template>
