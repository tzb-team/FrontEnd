<template>
  <div class="container">
    <a href='/'><img src="/static/pic/logo3.png" style="width:12%;position:absolute;top:35px;left: 8%;" align=center></a><br>
    <div class="mainbox">
      <div class="mainbody">
        <h3 style="color: white;float: top;" align="center">注册</h3>
        <input id="account" type="text" style="margin-top: 20px;" placeholder="请输入用户名">
        <input id="email" type="text" style="margin-top: 20px" placeholder="请输入邮箱地址">
        <input id="realName" type="text" style="margin-top: 20px;" align="center" placeholder="请输入真实姓名"><br>
        <input id="IDcard" type="text" style="margin-top: 20px;" align="center" placeholder="请输入身份证号"><br>
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
        var self0 = this

        //下面是检验用户名的合法性
        $("#account").change(function () {
          if($("#account").val().length<2){
            alert("用户名长度过短");
            $('#signup').attr("disabled",true);
            this.focus();
          }
          else if($("#account").val().length>15){
            alert("用户名长度过长");
            $('#signup').attr("disabled",true);
            this.focus();
          }
          else{
            $('#signup').attr("disabled",false);
          }
        });

        //下面是检验密码的合法性
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

        //下面是对确认密码的校验
        $("#passwordConfirm").change(function () {
          if($("#passwordConfirm").val()!=$("#password").val()){
            alert("密码前后不一致");
            $('#signup').attr("disabled",true);
            this.focus();
          }
          else{
            $('#signup').attr("disabled",false);
          }
        });

        //下面是检验邮箱地址是否重复
        $("#email").change(function(){
          let self1 = this;
          self1.$axios.get("user/checkEmail", {
            params:{
              "emailaddress":this.val()
            }
          }).then(res => {
              var data=res.data;
              if(data.isEmailUsed=="true"){
                alert("邮箱地址重复");
                $('#signup').attr("disabled",true);
                this.focus();
              }
              else{
                $('#signup').attr("disabled",false);
              }
            });
        });

        //下面是检验用户名是否重复
        $("#account").change(function(){
          let self2 = this
          console.log(val)
          self0.$axios.get("/user/checkAcc",{
            params:{
              "account":val
            }
          }).then(res => {
              var data = res.data;
              if(data.isAccUsed=="true"){
                alert("用户名重复");
                $('#signup').attr("disabled",true);
                this.focus();
              }
              else{
                $('#signup').attr("disabled",false);
              }
            });
        });

      },

      methods:{
          signup: function () {
            var ac=$('#account').val();
            var pw=$('#password').val();
            var email=$('#email').val();
            var name=$('#realName').val();
            var idcard=$('#IDcard').val();

            //TODO:跟随注册一起生成的钱包地址未实现,先暂定为下面的地址
            var walletAdd="0x10Ad2F4BB73e23e8B72C56b9EFdc3B7aD8Bb808E";

            this.$axios.post("http://localhost:8084/user/userRegister", {"account": ac, "password": pw,"emailaddress":email,"realname":name,"idcard":idcard,"walletaddress":walletAdd}).then(res => {
              var data=res.data;
              if(data.isSucc=="true"){
                alert("注册成功!");
                this.$router.replace('/login');
              }else{
                this.$message({
                  message: data.msg,
                  type: 'error'
                })
                alert("请重试");
              }

            });
          },
          // sendEmail: function () {
          //   var email=$('#email').val();
          //   this.$axios.post("http://localhost:8000/api/auth/signup/sendEmail", {"email":email}).then(res => {
          //     var data=res.data;
          //     if(data.result==1){
          //       $('#sendEmail').attr("disabled",true);
          //       var time=60;
          //       var myScroll = setInterval(() => {
          //         time--;
          //         if(time>=0) {
          //           $('#sendEmail').html(time + "s后重发送");
          //         }else{
          //           $('#sendEmail').html("发送验证码");
          //           $('#sendEmail').attr("disabled",false);   //倒计时结束能够重新点击发送的按钮
          //           clearTimeout(timer);    //清除定时器
          //           time = 60;   //设置循环重新开始条件
          //         }
          //       }, 1000);
          //     }else if(data.result==2){
          //       alert("邮箱地址有误");
          //     }else{
          //       alert("发送失败");
          //     }

          //   });
          // },
          // sendMessage: function () {
          //   var phone=$('#phone').val();
          //   this.$axios.post("http://localhost:8000/api/auth/signup/sendMessage", {"phone":phone}).then(res => {
          //     var data=res.data;
          //     if(data.result==1){
          //       $('#sendMessage').attr("disabled",true);
          //       var time=60;
          //       var myScroll = setInterval(() => {
          //         time--;
          //         if(time>=0) {
          //           $('#sendMessage').html(time + "s后重发送");
          //         }else{
          //           $('#sendMessage').html("发送验证码");
          //           $('#sendMessage').attr("disabled",false);   //倒计时结束能够重新点击发送的按钮
          //           clearTimeout(timer);    //清除定时器
          //           time = 60;   //设置循环重新开始条件
          //         }
          //       }, 1000);
          //     }else if(data.result==2){
          //       alert("手机号码有误");
          //     }else{
          //       alert("发送失败");
          //     }

          //   });
          // }
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
