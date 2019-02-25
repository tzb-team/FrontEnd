<template>
  <div>
    <el-steps :active="active">
      <el-step title="输入绑定邮箱"></el-step>
      <el-step title="输入邮箱验证码"></el-step>
      <el-step title="输入新手机号"></el-step>
      <el-step title="输入手机验证码"></el-step>
    </el-steps>

    <br/><br/>
    <div style="padding-right: 400px">
      <el-form :label-position="labelPosition" label-width="80px" :model="phoneForm" status-icon :rules="rulesPhone" ref="phoneForm" class="demo-ruleForm" @submit.native.prevent>
        <el-form-item label="请输入您绑定的邮箱" prop="mailAddr" v-if="active==0">
          <el-input v-model="phoneForm.mailAddr" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="请输入您邮箱收到的验证码" prop="verificationCode" v-if="active==1">
          <el-input v-model="phoneForm.verificationCode" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="请输入您的新手机号码" prop="phoneNumber" v-if="active==2">
          <el-input v-model="phoneForm.phoneNumber" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="请输入您手机收到的验证码" prop="verificationCode2" v-if="active==3">
          <el-input v-model="phoneForm.verificationCode2" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
    </div>

    <br>
    <div v-if="active==4">
      <label style="font-size: 18px">您已成功绑定手机号 {{ phoneForm.phoneNumber }}</label>
    </div>
    <div v-show="active<4">
      <el-button style="margin-top: 12px;" @click="last">上一步</el-button>
      <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>


  </div>
</template>

<script>
  export default {
    name: "modifyphone",
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

      var validateCode2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        }
      };
      return {
        active: 0,
        labelPosition: 'top',
        phoneForm:{
          phoneNumber: '',
          verificationCode: '',
          mailAddr:'',
          verificationCode2:''
        },
        rulesPhone:{
          phoneNumber:[
            { validator: validatePhone, trigger: 'blur' }
          ],
          verificationCode:[
            { validator: validateCode, trigger: 'blur' }
          ],
          verificationCode2:[
            { validator: validateCode2, trigger: 'blur' }
          ],
          mailAddr:[
            { required: true, message: '请输入想绑定的新的邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ]
        }
      };
    },
    methods: {
      next() {
        if (this.active++ > 3) this.active = 0;
      },
      last() {
        if(this.active > 0) this.active--;
      }
    }
  }
</script>

<style scoped>

</style>
