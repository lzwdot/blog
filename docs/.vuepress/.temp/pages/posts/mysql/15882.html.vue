<template><h1 id="mysql字符集修改为utf8mb4" tabindex="-1"><a class="header-anchor" href="#mysql字符集修改为utf8mb4" aria-hidden="true">#</a> MySQL字符集修改为utf8mb4</h1>
<p>MySQL要存储emoji表情，需要把以前的utf8修改为utf8mb4。</p>
<blockquote>
<p>MySQL版本要大于5.5.3</p>
</blockquote>
<p><strong>通过的my.cnf修改MySQL的字符集</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span>client<span class="token punctuation">]</span>
<span class="token keyword">default</span><span class="token operator">-</span>character<span class="token operator">-</span>set <span class="token operator">=</span> utf8mb4
<span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
<span class="token keyword">default</span><span class="token operator">-</span>character<span class="token operator">-</span>set <span class="token operator">=</span> utf8mb4
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
character<span class="token operator">-</span>set<span class="token operator">-</span>client<span class="token operator">-</span>handshake <span class="token operator">=</span> <span class="token constant">FALSE</span>
character<span class="token operator">-</span>set<span class="token operator">-</span>server <span class="token operator">=</span> utf8mb4
collation<span class="token operator">-</span>server <span class="token operator">=</span> utf8mb4_unicode_ci
init_connect<span class="token operator">=</span><span class="token string">'SET NAMES utf8mb4'</span> 
</code></pre></div><blockquote>
<p>重启或重载mysql配置文件</p>
</blockquote>
<p><strong>重启后检查环境变量</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>mysql<span class="token operator">></span> <span class="token constant">SHOW</span> <span class="token constant">VARIABLES</span> <span class="token constant">WHERE</span> Variable_name <span class="token constant">LIKE</span> <span class="token string">'character_set_%'</span> <span class="token constant">OR</span> Variable_name <span class="token constant">LIKE</span> <span class="token string">'collation%'</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span>
<span class="token operator">|</span> Variable_name            <span class="token operator">|</span> Value              <span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span>
<span class="token operator">|</span> character_set_client     <span class="token operator">|</span> utf8mb4            <span class="token operator">|</span>
<span class="token operator">|</span> character_set_connection <span class="token operator">|</span> utf8mb4            <span class="token operator">|</span>
<span class="token operator">|</span> character_set_database   <span class="token operator">|</span> utf8mb4            <span class="token operator">|</span>
<span class="token operator">|</span> character_set_filesystem <span class="token operator">|</span> binary             <span class="token operator">|</span>
<span class="token operator">|</span> character_set_results    <span class="token operator">|</span> utf8mb4            <span class="token operator">|</span>
<span class="token operator">|</span> character_set_server     <span class="token operator">|</span> utf8mb4            <span class="token operator">|</span>
<span class="token operator">|</span> character_set_system     <span class="token operator">|</span> utf8               <span class="token operator">|</span>
<span class="token operator">|</span> collation_connection     <span class="token operator">|</span> utf8mb4_unicode_ci <span class="token operator">|</span>
<span class="token operator">|</span> collation_database       <span class="token operator">|</span> utf8mb4_unicode_ci <span class="token operator">|</span>
<span class="token operator">|</span> collation_server         <span class="token operator">|</span> utf8mb4_unicode_ci <span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span>
 rows <span class="token keyword">in</span> <span class="token function">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre></div><p><strong>修改数据库，表和字段的字符集</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code># 修改数据库<span class="token operator">:</span>
<span class="token constant">ALTER</span> <span class="token constant">DATABASE</span> database_name <span class="token constant">CHARACTER</span> <span class="token constant">SET</span> <span class="token operator">=</span> utf8mb4 <span class="token constant">COLLATE</span> <span class="token operator">=</span> utf8mb4_unicode_ci<span class="token punctuation">;</span>
# 修改表<span class="token operator">:</span>
<span class="token constant">ALTER</span> <span class="token constant">TABLE</span> table_name <span class="token constant">CONVERT</span> <span class="token constant">TO</span> <span class="token constant">CHARACTER</span> <span class="token constant">SET</span> utf8mb4 <span class="token constant">COLLATE</span> utf8mb4_unicode_ci<span class="token punctuation">;</span>
# 修改表字段<span class="token operator">:</span>
<span class="token constant">ALTER</span> <span class="token constant">TABLE</span> table_name <span class="token constant">CHANGE</span> column_name column_name <span class="token constant">VARCHAR</span><span class="token punctuation">(</span><span class="token number">191</span><span class="token punctuation">)</span> <span class="token constant">CHARACTER</span> <span class="token constant">SET</span> utf8mb4 <span class="token constant">COLLATE</span> utf8mb4_unicode_ci<span class="token punctuation">;</span>
</code></pre></div><blockquote>
<p>最后，在你的程序中也要使用utf8mb4连接数据库，修改mysql字符集使用配置文件，数据库或者字段建议使用客户端工具修改</p>
</blockquote>
</template>
