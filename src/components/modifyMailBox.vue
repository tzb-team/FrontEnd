<template>
  <div>
    <el-steps :active="active">
      <el-step title="输入绑定手机"></el-step>
      <el-step title="输入验证码"></el-step>
      <el-step title="输入新邮箱"></el-step>
    </el-steps>

    <br/><br/>
    <div style="padding-right: 400px">
      <el-form :label-position="labelPosition" label-width="80px" :model="mailForm" status-icon :rules="rulesMail" ref="mailForm" class="demo-ruleForm" @submit.native.prevent>
        <el-form-item label="请输入您绑定的手机号码" prop="phoneNumber" v-if="active==0">
          <el-input v-model="mailForm.phoneNumber" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="请输入您收到的验证码" prop="verificationCode" v-if="active==1">
          <el-input v-model="mailForm.verificationCode" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="请输入您的新邮箱" prop="mailAddr" v-if="active==2">
          <el-input v-model="mailForm.mailAddr" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div v-if="active==3">
      <label style="font-size: 18px">重新设置邮箱的相关邮件已发送，请登录{{ mailForm.mailAddr }}并点击确认</label>
      <p>Tips:没收到？<a href="#">点击此处重新发送</a></p>
    </div>
    <br>
    <div v-show="active<3">
      <el-button style="margin-top: 12px;" @click="last">上一步</el-button>
      <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "modifymailbox",
    data() {
      var validatePhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入您绑定的11位手机号'));
        }
        else if(value.length < 11){
          callback(new Error('手机号长度过短'));
        }
        else if(value.length > 11){
          callback(new Error('手机号长度过长'));
        }
        else {

        }
      };
      var validateCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        }
      };

      return {
        mailForm:{
          phoneNumber: '',
          verificationCode: '',
          mailAddr:'',
        },
        rulesMail: {
          phoneNumber:[
            { validator: validatePhone, trigger: 'blur' }
          ],
          verificationCode:[
            { validator: validateCode, trigger: 'blur' }
          ],
          mailAddr:[
            { required: true, message: '请输入想绑定的新的邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ]

        },
        active: 0,
        labelPosition: 'top',
      };
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
      last() {
        if(this.active > 0) this.active--;
      }
    }
  }
</script>

<style scoped>

</style>
