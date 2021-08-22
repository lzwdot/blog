<template>
  <div>
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="1">A-Z</el-checkbox>
      <el-checkbox label="2">a-z</el-checkbox>
      <el-checkbox label="3">0-9</el-checkbox>
      <el-checkbox label="4">.@$!%*#_~?&^</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
import md5 from 'crypto-js/md5'

export default {
  data() {
    return {
      checkList: [],
    }
  },
  watch: {
    checkList(newVal) {
      console.log(newVal)
    }
  },
  methods: {
    checkPassWord(value) {
      // 0： 表示第一个级别
      // 1：表示第二个级别
      // 2：表示第三个级别
      // 3： 表示第四个级别
      // 4：表示第五个级别
      var arr = [], array = [1, 2, 3, 4];
      if (value.length < 6) {//最初级别
        return 0;
      }
      if (/\d/.test(value)) {//如果用户输入的密码 包含了数字
        arr.push(1);
      }
      if (/[a-z]/.test(value)) {//如果用户输入的密码 包含了小写的a到z
        arr.push(2);
      }
      if (/[A-Z]/.test(value)) {//如果用户输入的密码 包含了大写的A到Z
        arr.push(3);
      }
      if (/\W/.test(value)) {//如果是非数字 字母 下划线
        arr.push(4);
      }
      for (var i = 0; i < array.length; i++) {
        if (arr.indexOf(array[i]) == -1) {
          return array[i];
        }
      }
    },
  }
}
</script>