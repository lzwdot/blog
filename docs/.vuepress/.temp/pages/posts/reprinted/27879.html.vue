<template><h1 id="js中的-foreach-map-filter-some-every-for-in-for-of-reduce-find-用法" tabindex="-1"><a class="header-anchor" href="#js中的-foreach-map-filter-some-every-for-in-for-of-reduce-find-用法" aria-hidden="true">#</a> JS中的 forEach,map,filter,some,every, for in,for of,reduce,find 用法</h1>
<p><code>forEach(function(currentValue, index, arr), thisValue)</code><br>
没有返回值，只针对每个元素调用func，无法使用break，return等终止循环</p>
<p><code>map(function(currentValue, index, arr), thisValue)</code><br>
返回一个新的数组，每个元素为调用func的结果</p>
<p><code>filter(function(currentValue, index, arr), thisValue)</code><br>
返回一个新的数组，每个元素符合func条件的数组</p>
<p><code>some(function(currentValue, index, arr), thisValue)</code><br>
返回一个boolean，判断是否有元素符合func条件，如果有一个元素符合 func 条件，则循环会终止</p>
<p><code>every(function(currentValue, index, arr), thisValue)</code><br>
返回一个boolean，判断每个元素是否符合func条件，有一个元素不满足 func 条件，则循环终止，返回false</p>
<p><code>for in</code><br>
是用来循环带有字符串 key 的对象的方法，只能获得对象的键名，不能直接获取键值</p>
<p><code>for of</code><br>
返回键值，用于遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构</p>
<p><code>reduce(function(total, currentValue, currentIndex, arr), initialValue)</code><br>
接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值，reduceRight() 从数组的末尾向前将数组中的数组项做累加</p>
<p><code>find(function(total, currentValue, currentIndex, arr), initialValue)</code><br>
返回通过测试（函数内判断）的数组的第一个元素的值。findIndex() 返回第一个元素的位置</p>
</template>
