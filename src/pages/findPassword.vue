<template>
  <div class="container">
    <a href='/'><img src="/static/pic/logo3.png" style="width:12%;position:absolute;top:35px;left: 8%;" align=center></a><br>
    <div class="mainbox">
      <div class="mainbody">
        <h3 style="color: white;float: top;" align="center">找回密码</h3>
        <input id="account" type="text" style="margin-top: 40px" placeholder="请输入用户名/手机号/邮箱">
        <input id="code" type="text" style="width:40%;margin-top: 40px;" placeholder="请输入验证码">
        <button id="sendCode" style="vertical-align: -3%" v-on:click="sendCode()">获取验证码</button>
        <button id="signup" class="bigButton" v-on:click="findPW()">下一步</button><br>
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
        name: "findPassword",
      components: {footerBar},
      methods: {
        sendCode: function () {
          var account = $('#account').val();
          this.$axios.post("http://" + this.url_config +  ":8000/api/auth/findPW/sendCode", {"account": account}).then(res => {
            var data = res.data;
            if (data.result == 1) {
              $('#sendCode').attr("disabled", true);
              var time = 60;
              var myScroll = setInterval(() => {
                time--;
                if (time >= 0) {
                  $('#sendCode').html(time + "s后重发送");
                } else {
                  $('#sendCode').html("发送验证码");
                  $('#sendCode').attr("disabled", false);   //倒计时结束能够重新点击发送的按钮
                  clearTimeout(timer);    //清除定时器
                  time = 60;   //设置循环重新开始条件
                }
              }, 1000);
            } else if (data.result == 2) {
              alert("账户不存在");
            } else {
              alert("发送失败");
            }

          });
        },

        findPW: function () {
          var ac = document.getElementById('account').value;
          var co = document.getElementById('code').value;
          this.$axios.post('/user/signin', {"username": ac, "code": co}).then(
            res => {
              //store.commit(types.LOGIN, res.data['accessToken']);
              var data = res.data;
              if (data.result == 1) {
                localStorage.accountOfReset=ac;
                this.$router.replace('/resetPassword');
              }
              else if (data.result == 0) {
                alert("验证码错误");
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
