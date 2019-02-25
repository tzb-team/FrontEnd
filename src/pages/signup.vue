<template>
  <div class="container">
    <a href='/'><img src="/static/pic/logo3.png" style="width:12%;position:absolute;top:35px;left: 8%;" align=center></a><br>
    <div class="mainbox">
      <div class="mainbody">
        <h3 style="color: white;float: top;" align="center">注册</h3>
        <input id="phone" type="text" style="margin-top: 20px;" placeholder="请输入手机号码">
        <input id="email" type="text" style="margin-top: 20px" placeholder="请输入邮箱地址">
        <input id="account" type="text" style="margin-top: 20px;" align="center" placeholder="请输入用户名，长度在2到15个字符之间"><br>
        <input id="password" type="password" style="margin-top: 20px;" align="center" placeholder="请输入密码，长度在6到20个字符之间"><br>
        <input id="passwordConfirm" type="password" style="margin-top: 20px;" align="center" placeholder="确认密码"><br>
        <button id="signup" class="bigButton" v-on:click="signup()">注册</button><br>
        <div style="width: 100%;text-align: center;margin-top: 10px">
          <a href="/login" style="font-size: 16px;color: yellow;">已有账号，立即登录</a>
        </div>
      </div>
    </div>
    <footer-bar style="margin-top: 100px"></footer-bar>
  </div>
</template>

<script>
  import footerBar from '@/components/footerBar.vue';
    export default {
        name: "signup",
      components: {footerBar},
      mounted: function(){

      },

      methods:{
          signup: function () {

          }
      }

    }
</script>

<style scoped>
  .container {
    width:100%;
    background: #222;
    background-image:url('/static/pic/signupBackground.png');
    background-size: cover;
    background-attachment:fixed;
    background-position: center center;
    background-repeat: no-repeat;
    padding: 0;
  }

  .mainbox{
    -webkit-box-align: center;
    align-items: center;
    margin-top: 100px;
  }

  .mainbody{
    width:40%;
    height: 615px;
    position: relative;
    margin: auto;
    padding: 35px 30px;
    color: black;
    border-radius: 4px;
    background: black;
    box-shadow: 1px 1px 4px #767676;
    opacity: 0.6;
  }

  input[type="text"]{
    width:78%;
    margin-left: 11%;
    height:36px;
    min-height: 20px;
    border-radius: 5px;
    font-size: 14px;
    padding: 11px;
  }

  input[type="password"]{
    width:78%;
    margin-left: 11%;
    height:36px;
    min-height: 20px;
    border-radius: 5px;
    font-size: 14px;
    padding: 11px;
  }

  button{
    vertical-align: 10%;
    width:30%;
    height:35px;
    border-radius: 15px;
    font-size: 14px;
    margin-left: 5%;
    background-color: transparent;
    border-color: white;
    color:white;
  }

  .bigButton{
    width:78%;
    height:35px;
    border-radius: 15px;
    font-size: 20px;
    margin-left: 11%;
    margin-top: 8%;
    background-color: transparent;
    border-color: white;
    color:white;
  }

  .bott a{
    color: lightyellow;
  }
</style>
