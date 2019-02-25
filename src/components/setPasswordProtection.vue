<template>
  <div>
    <label style="color: #606266">请选择您的密保问题&nbsp&nbsp&nbsp</label>
    <el-select v-model="value" placeholder="请选择您的密保问题">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <br/><br/>
    <el-form :label-position="labelPosition" label-width="80px">
      <el-form-item label="密保答案">
        <el-input v-model="answer"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" round>提交<i class="el-icon-upload el-icon--right"></i></el-button>

  </div>
</template>

<script>
  export default {
    name: "setPasswordProtection",
    data() {
      return {
        answer: '',
        options: [{
          value: '选项1',
          label: '您母亲的姓名是？'
        }, {
          value: '选项2',
          label: '您父亲的姓名是？'
        }, {
          value: '选项3',
          label: '您配偶的姓名是？'
        }, {
          value: '选项4',
          label: '您的出生地是？'
        }, {
          value: '选项5',
          label: '您高中班主任的名字是？'
        }, {
          value: '选项6',
          label: '您父亲的生日是？'
        }, {
          value: '选项7',
          label: '您高中班主任的名字是？'
        }, {
          value: '选项8',
          label: '您母亲的生日是？'
        }, {
          value: '选项9',
          label: '您配偶的生日是？'
        }],
        value: ''
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>

<style>
  .el-form-item__label {
    text-align: left !important;
    color: #606266;
  }
</style>

