<template>
  <div class="container">
    <a href='/'><img src="/static/pic/logo3.png" style="width:12%;position:absolute;top:35px;left: 8%;" align=center></a><br>
    <div class="mainbox">
      <div class="mainbody">
        <h3 style="color: white;float: top;" align="center">重置密码</h3>
        <input id="password" type="password" style="margin-top: 40px;" align="center" placeholder="请输入新密码，长度在6到20个字符之间"><br>
        <input id="passwordConfirm" type="password" style="margin-top: 40px;" align="center" placeholder="确认新密码"><br>
        <button id="signup" class="bigButton" v-on:click="resetPW()">确认重置</button><br>
        <div style="width: 100%;text-align: center;margin-top: 25px">
          <a href="/login" style="font-size: 16px;color: yellow;">返回登录界面</a>
        </div>

      </div>

      <!--<div style="text-align: center; color: white;text-align: center;font-size: 20px; margin-top: 2%">-->
      <!--<span style="color: white;text-align: center;font-size: 22px;font-family: 'Microsoft YaHei UI'">Trust,让你的大学生活更美好</span><br>-->
      <!--<p style="color: white;text-align: center;display: block;padding-top: 40px">@怎么码都码不队</p>-->
      <!--<div style="margin-top: 0;" class="bott">-->
      <!--<a>关于我们</a>|<a>联系我们</a>|<a>微博</a>-->
      <!--</div>-->
      <!--</div>-->
    </div>
    <footer-bar style="margin-top: 100px"></footer-bar>
  </div>
</template>

<script>
  import footerBar from '@/components/footerBar.vue';
    export default {
        name: "resetPassword",
      components: {footerBar},
      mounted:function(){
        $("#password").change(function () {
          if($("#password").val().length<6){
            alert("密码长度过短");
            $('#signup').attr("disabled",true);
            this.focus();
          }
          else if($("#password").val().length>20){
            alert("密码长度过长");
            $('#signup').attr("disabled",true);
            this.focus();
          }
          else{
            $('#signup').attr("disabled",false);
          }
        });
        $("#passwordConfirm").change(function () {
          if($("#passwordConfirm").val()!=$("#password").val()){
            alert("密码前后不一致");
            $('#resetPW').attr("disabled",true);
            this.focus();
          }
          else{
            $('#resetPW').attr("disabled",false);
          }
        });
      },

      methods: {
        resetPW: function () {
          var ac = localStorage.accountOfReset;
          var pw = document.getElementById('password').value;
          this.$axios.post('/user/resetPW', {"account": ac, "password": pw}).then(
            res => {
              //store.commit(types.LOGIN, res.data['accessToken']);
              var data = res.data;
              if (data.result == 1) {
                alert("重置成功")
                this.$router.replace('/login');
              }
              else if (data.result == 0) {
                alert("重置失败");
              }
            }).catch(err => {
              console.log(err);
            }
          );
        }
      }
    }

</script>

<style scoped>
  .container {
    width:100%;
    background: #222;
    background-image:url('/static/pic/pwBackground.png');
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
    height:420px;
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
    margin-top: 60px;
    background-color: transparent;
    border-color: white;
    color:white;
  }

  .bott a{
    color: lightyellow;
  }
</style>
