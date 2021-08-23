<template>
  <div>
    <el-row>
      <el-col :span="4">
        <div class="grid-content">选择字符</div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content">
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="1">A-Z</el-checkbox>
            <el-checkbox label="2">a-z</el-checkbox>
            <el-checkbox label="3">0-9</el-checkbox>
            <el-checkbox label="4">!@#$%^&*</el-checkbox>
          </el-checkbox-group>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <div class="grid-content">密码长度</div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content">
          <el-slider v-model="sliderValue"></el-slider>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <div class="grid-content">生产结果</div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content">
          <el-input v-model="pwdValue" placeholder="随机密码">
            <template #append>
              <el-rate
                v-model="scoreValue"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
              </el-rate>
            </template>
          </el-input>
        </div>

        <el-alert v-show="scoreLabel"
                  :closable="closable"
                  :title="scoreLabel"
                  type="success">
        </el-alert>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import zxcvbn from 'zxcvbn'

export default {
  data() {
    return {
      checkList: ['1', '2', '3'],
      sliderValue: 16,
      scoreValue: 0,
      scoreLabel: '',
      pwdValue: '',
      closable: false
    }
  },
  watch: {
    checkList(newVal) {
      this.makePassWord()
    },
    sliderValue(newVal) {
      this.makePassWord()

    }
  },
  methods: {
    makePassWord() {
      const scoreLabel = ['太容易猜到了吧', '很容易就猜到了', '还是有点容易猜', '安全比较难猜到', '非常安全难猜到']
      const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
      const upCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      const number = '1234567890'
      const special = '!@#$%^&*'

      let str = ''
      if (this.checkList.includes('1')) str += lowerCase
      if (this.checkList.includes('2')) str += upCase
      if (this.checkList.includes('3')) str += number
      if (this.checkList.includes('4')) str += special

      let length = str.length
      let res = ''
      for (let i = 0; i < this.sliderValue && str; i++) {
        res += str[Math.floor(Math.random() * length)]
      }

      const score = this.checkPassWord(res)
      this.pwdValue = res
      this.scoreValue = score
      this.scoreLabel = scoreLabel[score - 1]
    },
    checkPassWord(value) {
      try {
        console.log(zxcvbn(value))
        return value ? zxcvbn(value).score : 0
      } catch (err) {
        console.error(err)
      }

      // 0：太容易猜到了吧
      // 1：很容易就猜到了
      // 2：还是有点容易猜
      // 3：安全比较难猜到
      // 4：非常安全难猜到
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
      for (let i = 0; i < array.length; i++) {
        if (arr.indexOf(array[i]) == -1) {
          return array[i];
        }
      }
    },
    formatTime(str) {
      const mistiming = Math.abs(str)
      const arrR = ['年', '个月', '星期', '天', '小时', '分钟', '秒'];
      const arrN = [31536000, 2592000, 604800, 86400, 3600, 60, 1];
      for (let i = 0; i < 7; i++) {
        let inm = Math.floor(mistiming / arrN[i])
        if (inm != 0) {
          return inm + arrR[i]
        }
      }
    }
  }
}
</script>