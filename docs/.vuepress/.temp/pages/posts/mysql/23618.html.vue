<template><h1 id="mysql总结常用优化问题" tabindex="-1"><a class="header-anchor" href="#mysql总结常用优化问题" aria-hidden="true">#</a> MySQL总结常用优化问题</h1>
<h2 id="如何定位和分析慢-sql" tabindex="-1"><a class="header-anchor" href="#如何定位和分析慢-sql" aria-hidden="true">#</a> 如何定位和分析慢 SQL</h2>
<p>定位慢 sql 可以通过以下两种方式：</p>
<ul>
<li>查看慢查询日志：tail mysql-slow.log</li>
<li>查看正在执行的 sql：show processlist</li>
</ul>
<p>分析慢 sql 可以通过 explain， profile 和 trace 方式，三者各有其适用场景：</p>
<ul>
<li>explain select * from t1 where id=1：获取 MySQL 中 sql 语句的执行计划，比如语句是否使用了关联查询、是否使用了索引、扫描行数等；</li>
<li>show profiles：可以清楚了解到 sql 到底慢在哪个环节；</li>
<li>SELECT * FROM information_schema.OPTIMIZER_TRACE：查看优化器如何选择执行计划，获取每个可能的索引选择的代价。</li>
</ul>
<p>通过 explain 分析慢 sql，explain 会返回很多字段，其中 select_type、type、key、rows、Extra 是重点关注项。</p>
<h2 id="存在索引但不能使用索引的场景" tabindex="-1"><a class="header-anchor" href="#存在索引但不能使用索引的场景" aria-hidden="true">#</a> 存在索引但不能使用索引的场景</h2>
<p><img src="@source/posts/mysql/images/1725177509.png" alt=""></p>
<p>写 sql 语句时，应尽量注意以下几点</p>
<ul>
<li>应该避免隐式转换</li>
<li>like查询不能以%开头</li>
<li>范围查询时，包含的数据比例不能太大</li>
<li>不建议对条件字段做运算及函数操作</li>
</ul>
<h2 id="优化批量数据导入" tabindex="-1"><a class="header-anchor" href="#优化批量数据导入" aria-hidden="true">#</a> 优化批量数据导入</h2>
<p>一次插入多行的值；如：NSERT INTO <code>t1</code> VALUES (1,'1'), (2,'3')</p>
<p>关闭自动提交，多次插入数据的 SQL 一次提交；如：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token constant">SET</span> autocommit<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token constant">INSERT</span> <span class="token constant">INTO</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">t1</span><span class="token template-punctuation string">`</span></span> <span class="token constant">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">'1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token constant">INSERT</span> <span class="token constant">INTO</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">t1</span><span class="token template-punctuation string">`</span></span> <span class="token constant">VALUES</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">'2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token constant">INSERT</span> <span class="token constant">INTO</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">t1</span><span class="token template-punctuation string">`</span></span> <span class="token constant">VALUES</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">'3'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
……
<span class="token constant">COMMIT</span><span class="token punctuation">;</span>
</code></pre></div><p>调整参数，innodb_flush_log_at_trx_commit 和 sync_binlog 都设置为0（当然这种情况可能会丢数据）。有关的测试结果如下：</p>
<table>
<thead>
<tr>
<th>innodb_flush_log_at_trx_commit</th>
<th>sync_binlog</th>
<th>TPS</th>
<th>结论</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>1</td>
<td>316.83</td>
<td>双一情况写入速度最慢</td>
</tr>
<tr>
<td>1</td>
<td>0</td>
<td>526.97</td>
<td></td>
</tr>
<tr>
<td>0</td>
<td>1</td>
<td>497.42</td>
<td></td>
</tr>
<tr>
<td>0</td>
<td>0</td>
<td>2379.9</td>
<td>都设置为0的情况下，写入速度最快</td>
</tr>
<tr>
<td>2</td>
<td>1</td>
<td>515.76</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>0</td>
<td>2169.51</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="优化order-by、group-by查询" tabindex="-1"><a class="header-anchor" href="#优化order-by、group-by查询" aria-hidden="true">#</a> 优化order by、group by查询</h2>
<p>MySQL 根据索引情况有两种排序方式， 优先考虑索引排序 ：</p>
<ul>
<li>通过有序索引直接返回有序数据</li>
<li>通过 Filesort 进行排序（通过查看explain分析 sql 中的Extra 字段）</li>
</ul>
<p>而 Filesort 根据 sort_buffer_size 设置，优化器会选择两种排序方式， 优先考虑内存排序：</p>
<ul>
<li>内存排序，当 “排序的数据大小” &lt; sort_buffer_size</li>
<li>磁盘文件排序，当 “排序的数据大小” &gt; sort_buffer_size，</li>
</ul>
<p>Filesort 根据 max_length_for_sort_data 设置，优化器采用三种排序模式：</p>
<ul>
<li>&lt; sort_key, rowid &gt; 双路（回表）排序， 当 “ 查询字段的总长度 ” &lt;max_length_for_sort_data&gt;</li>
<li>&lt; sort_key, additional_fields &gt;单路排序，当 “ 查询字段的总长度 ” &lt;max_length_for_sort_data&gt;</li>
<li>&lt; sort_key, packed_additional_fields &gt;打包数据排序模式:与单路排序相似,区别是将 char 和 varchar 字段存到 sort buffe</li>
</ul>
<p><strong>or</strong>der by 语句的优化主要有：</p>
<ul>
<li>通过添加合适索引</li>
<li>去掉不必要的返回字段</li>
<li>调整参数：主要是 max_length_for_sort_data 和 sort_buffer_size</li>
<li>避免无法利用索引排序的情况，如：使用范围查询再排序，asc和 desc 混合使用</li>
</ul>
<p>group by 语句的优化，如果只要分组，没有排序需求的话，可以加 order by null 禁止排序。</p>
<h2 id="分页查询优化场景" tabindex="-1"><a class="header-anchor" href="#分页查询优化场景" aria-hidden="true">#</a> 分页查询优化场景</h2>
<p>根据<strong>自增且连续主键</strong>排序的分页查询优化，如：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>select <span class="token operator">*</span> from t1 limit <span class="token number">99000</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">;</span>
#优化后
select <span class="token operator">*</span> from t1 where id <span class="token operator">></span><span class="token number">99000</span> limit <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre></div><p>查询<strong>根据非主键字段</strong>（a上有索引）排序的分页查询优化，如：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>select <span class="token operator">*</span> from t1 order by a limit <span class="token number">99000</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">;</span>
#优化后
select <span class="token operator">*</span> from t1 f inner <span class="token function">join</span> <span class="token punctuation">(</span>select id from t1 order by a limit <span class="token number">99000</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>g on f<span class="token punctuation">.</span>id <span class="token operator">=</span> g<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
</code></pre></div><h2 id="join语句优化" tabindex="-1"><a class="header-anchor" href="#join语句优化" aria-hidden="true">#</a> Join语句优化</h2>
<p>MySQL 关联查询目前有三种算法：</p>
<ul>
<li>Nested-Loop Join 算法，当有索引时使用</li>
<li>Block Nested-Loop Join 算法，当没有索引时，利用 join_buffer 内存</li>
<li>Batched Key Access 算法（MySQL 5.6新增），算是以上两种算法的结合，采用 join_buffer 和 Multi-Range Read(MRR) 接口的方式</li>
</ul>
<p>使用explain 分析 join 语句时，第一行是驱动表（默认小表作为驱动表，可以使用straight_join 指定驱动表）；主要看被驱动表的执行计划 Extra 参数来判断采用哪种算法，所以主要的优化方式有：</p>
<ul>
<li>通过关联字段添加索引</li>
<li>如无法在原表上加索引，可以创建临时表加索引</li>
<li>使用 straight_join 指定小表作为驱动表，但是需要确定关联字段有索引</li>
</ul>
<h2 id="优化count-查询" tabindex="-1"><a class="header-anchor" href="#优化count-查询" aria-hidden="true">#</a> 优化count(*)查询</h2>
<p>MyISAM 引擎执行 count() 比 InnoDB 引擎快， InnoDB 引擎（MySQL 5.7.18 之后）则使用二级索引来处理 count() 语句比使用主键索引处理 count() 效率更高， 按照效率排序的话，count(字段)&lt;count(主键id)&lt;count(1)≈count(<em>)，所以尽量使用count(</em>)。</p>
<p>几种优化 count() 的建议：</p>
<ul>
<li>show table status：能快速获取结果，但是结果不准确；</li>
<li>用 Redis 做计数器：能快速获取结果，比 show table status 结果准确，但是并发场景计数可能不准确；</li>
<li>增加 InnoDB 计数表：能快速获取结果，利用了事务特性确保了计数的准确，也是<strong>比较推荐</strong>的方法。</li>
</ul>
<h2 id="b-树索引" tabindex="-1"><a class="header-anchor" href="#b-树索引" aria-hidden="true">#</a> B+ 树索引</h2>
<p>B+ 树索引 发展过程：二分查找法 =&gt; 二叉查找树 =&gt; 平衡二叉树 =&gt; B 树 =&gt; B+ 树 =&gt; B+ 树索引。为什么 B+ 树索引这么快，主要是用到了聚集索引和辅助索引：聚集索引按照每张表的主键构造一颗B+ 数据，叶子节点存放整行数据；而辅助索引叶子节点只存放键值和主键ID。当通过辅助索引来寻找数据时,InnoDB 存储引擎会遍历辅助索引树查找到对应记录的主键索引来找到对应的行数据。</p>
<h2 id="常见添加索引的场景" tabindex="-1"><a class="header-anchor" href="#常见添加索引的场景" aria-hidden="true">#</a> 常见添加索引的场景</h2>
<ul>
<li>数据检索时在条件字段添加索引</li>
<li>聚合函数对聚合字段添加索引</li>
<li>对排序字段添加索引</li>
<li>为了防止回表添加索引</li>
<li>关联查询在关联字段添加索引</li>
</ul>
</template>
