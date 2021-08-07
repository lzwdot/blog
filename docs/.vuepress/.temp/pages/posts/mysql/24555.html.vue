<template><h1 id="超卖现象的解决方案" tabindex="-1"><a class="header-anchor" href="#超卖现象的解决方案" aria-hidden="true">#</a> 超卖现象的解决方案</h1>
<p><strong>1、悲观锁方案</strong>， update 时使用 for update</p>
<p><strong>2、无符号类型字段</strong>，把库存字段设置无符号整型，更新库存少于0时会报错</p>
<p><strong>3、乐观锁方案</strong></p>
<ul>
<li>使用 case 语句，即 when 库存&gt;=扣减数 then 库存-扣减数</li>
<li>使用 where 语句，即 where 库存&gt;=扣减数</li>
</ul>
<p>性能比较：乐观锁 &gt; 无符号类型字段 &gt; 悲观锁</p>
<p>建议方案： <strong>无符号类型字段 + 乐观锁</strong> 双重保险方案</p>
</template>
