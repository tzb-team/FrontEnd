<template>
  <div class="container">
    <a href='/'><img src="/static/pic/logo3.png" style="width:12%;position:absolute;top:35px;left: 6%;" align=center></a><br>
    <!-- 以下是主登录框 -->
    <div class="mainbox">
      <el-card class="box-card loginbody"
               v-loading="loading"
               element-loading-text="拼命加载中"
               element-loading-spinner="el-icon-loading">
        <h3 style="float: top;" align="center">登录</h3>
        <el-input id="account" class="loginInput" v-model="account" style="margin-top: 6%;" placeholder="账户/邮箱"></el-input>
        <el-input id="password" type="password" v-model="password" class="loginInput" style="margin-top: 8%;" align="center" placeholder="请输入密码"></el-input><br>
        <el-checkbox id="remember" v-model="remember" style="margin-top: 3%;margin-left: 8%"></el-checkbox>
        <p style="display: inline;">记住密码</p>
        <a style="float: right;margin-right: 8%;display: inline;margin-top: 3%" v-on:click="prompt">忘记密码？</a>
        <el-button type="primary" id="login" v-on:click="login()" round>登录</el-button>
        <div style="width: 100%;text-align: center;margin-top: 20px">
          <a href='/signup' style="font-size: 16px;color: lightskyblue;">即刻注册</a>
        </div>
      </el-card>
    </div>

    <footer-bar style="margin-top: calc(50% - 430px)"></footer-bar>
  </div>


</template>

<script>

  import footerBar from '@/components/footerBar.vue';
  import store from '../vuex/store'
  import * as types from '../vuex/types'

  export default {
      name: "login",
      components: {footerBar},
      mounted() {
        store.commit(types.LOGOUT)
        if(store.getters.isRemember) {
          this.account = localStorage.username;
          this.password = window.atob(localStorage.password)
          this.remember = true;
        }
      },
      methods: {
        prompt() {
          this.$alert('您可以使用以下花旗虚拟用户<br/> 用户:SandboxUser1 密码:P@ssUser1$ <br/> 用户:SandboxUser2 密码:P@ssUser2$ <br/> 用户:SandboxUser3 密码:P@ssUser3$ ', '注意', {
            confirmButtonText: '确定',
            dangerouslyUseHTMLString: true
          });
        },
        login: function () {
          let self = this;
          self.loading = true;
          this.$axios.post('/user/userLog', {account: self.account, password: self.password}).then(
            res => {            
              if(!res.LogRes){
                alert("登陆成功！！！！！")
              }
              // store.commit(types.LOGIN, res.data);
              // localStorage.ifUnread=1;
              self.$router.replace({
                path: '/',
                query: { redirect: self.$router.currentRoute.path }})
            }).catch(err => {
              console.log(err)
          });
          console.log(this.remember)
          if(this.remember) {
            store.commit(types.REMEMBER, {username: this.username , password: this.password })
          } else {
            store.commit(types.CANCELREMEMBER)
          }
        }
      },
      data() {
        return {
          account: "",
          password: "",
          remember: false,
          loading: false
        }
      },
    }

</script>

<style scoped>
  .container {
    width:100%;
    background: #222;
    background-image:url('/static/pic/loginBackground1.png');
    background-size: cover;
    background-attachment:fixed;
    background-position: center center;
    background-repeat: no-repeat;
    padding: 0;
  }

  .mainbox{
    margin-top: 10%;
    height: 330px;
  }

  .loginbody{
    width: 32%;
    height: 360px;
    /* position: relative; */
    margin: auto;
    /* right: 100px; */
    /* float: right; */
  }

  .loginInput{
    width: 84%;
    margin-left: 8%;
  }

  button{
    width:84%;
    height:40px;
    font-size: 18px;
    margin-left: 8%;
    margin-top: 3%;
  }

  .bott a{
    color: lightyellow;
  }

</style>
