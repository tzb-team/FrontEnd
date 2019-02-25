<template>
  <div class="whole" id="navi" style="width:100%;">
    <img src="/static/pic/logo3_blue.png" id="naviLogo" class="img-responsive logo" alt="Cinque Terre">

    <nav class="navbar navbar-inverse wholeNav">
      <div class="container-fluid" style="width: 100%">
        <div class="collapse navbar-collapse" id="myNavbar" style="display: inline-block;font-size: 16px;width: 100%">
          <ul class="nav navbar-nav" id="nav" style="width: 100%">
            <li><a id="object" href="/subjectManage" style="width: 120px">标的管理</a></li>
            <li><a id="user" style="width: 120px" href="/usermanage">用户管理</a></li>
            <li><a id="statistics" href="/backAdminData" style="width: 120px">数据统计</a></li>
            <li><a id="verify" style="width: 120px" href="/EnterVerify">审核中心</a></li>
            <el-dropdown style="float:right;position: relative;" v-if="login">
              <span>
                <avatar username="default" src="/static/pic/person-flat.png"></avatar></span>
              <el-dropdown-menu slot="dropdown">
                <a href="\userSpace"><el-dropdown-item>用户模式</el-dropdown-item></a>
                <a href="\subjectManage"><el-dropdown-item>管理模式</el-dropdown-item></a>
                <a  v-on:click="logout"><el-dropdown-item >退出登录</el-dropdown-item></a>
              </el-dropdown-menu>
            </el-dropdown>
            <!--<li id="last" style="float: right;min-width: 8%;"><a id="signup" href="/signup">注册</a></li>-->
            <!--<li id="secondLast" style="float: right;min-width: 8%;"><a id="login" href="/login">登录</a></li>-->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  import Avatar from "vue-avatar/src/Avatar";
  import store from '../vuex/store'
  import * as types from '../vuex/types'

  export default {
      name: "adminNavi",
      components: { Avatar },
      mounted: function () {
        if(localStorage.route=="#homepage"){
          document.getElementById("naviLogo").src="/static/pic/logo3.png";
        }

        $("#manageAccount").css('display','none');
        if (store.getters.isLogin && store.getters.isAdmin){
          this.login = store.getters.isLogin;
          document.getElementById('last').removeChild(document.getElementById('signup'));
          document.getElementById('secondLast').removeChild(document.getElementById('login'));
          var personalCenter = document.createElement('a');
          personalCenter.innerText = '个人中心';
          personalCenter.href = '/userSpace';
          var newLi = document.createElement('li');
          newLi.style.cssFloat = 'right';
          $('#nav').append(newLi);
          newLi.appendChild(personalCenter);

          $(localStorage.route).css("color","dodgerblue");

          var message = document.createElement('img');
          message.className = 'message';
          message.id = 'message';
          message.src = '/static/pic/message_white.png';
          var mes=document.createElement('a');
          mes.href="/messageList";
          mes.appendChild(message);
          mes.style.border="none";
          mes.style.paddingBottom="5px";
          mes.style.paddingTop="12px";
          document.getElementById('secondLast').appendChild(mes);
          document.getElementById('secondLast').style.marginRight="-5%";

          if (localStorage.ifUnread==1){
            message.src = '/static/pic/message_yellow.png';
          }

          $('#last').hover(
            function(){
              $('#last').css('border-bottom','3px solid transparent');
              $('#last').css('border-top','3px solid transparent');
            },
            function(){
              $('#last').css('border-bottom','3px solid transparent');
              $('#last').css('border-top','3px solid transparent');
            }
          );
          $('#secondLast').hover(
            function(){
              $('#secondLast').css('border-bottom','3px solid transparent');
              $('#secondLast').css('border-top','3px solid transparent');
            },
            function(){
              $('#secondLast').css('border-bottom','3px solid transparent');
              $('#secondLast').css('border-top','3px solid transparent');
            }
          );
          $('.message').hover(
            function(){
              message.src = '/static/pic/message_blue.png';
            },
            function(){
              if(localStorage.ifUnread==1){
                message.src = '/static/pic/message_yellow.png';
              }else{
                message.src = '/static/pic/message_white.png';
              }
            }
          );
        }
      },
      methods: {
        logout: function () {
          store.commit(types.LOGOUT)
          this.$router.replace("/login");
          this.reload();
        },
      },
      data() {
        return {
         login: false
        }
     }
    }

</script>

<style scoped>
  .whole{
    padding: 0;
    background-color: black;
    z-index: 1;
  }
  .logo{
    max-width: 7%;
    display: inline-block;
    margin-left: 5%;
    margin-top: -53px;
  }
  .wholeNav{
    border-color: transparent;
    display: inline-block;
    min-width: 80%;
    width: 86%;
    min-height: 30px;
    margin-top: 5px;
    margin-bottom: 0;
    background-color: black;
  }



</style>

<style>
  #nav li{
    min-width: 90px;
    text-align: center;
    border-top:3px solid transparent;
    border-bottom:3px solid transparent;
  }

  #nav li:hover{
    border-top:3px solid dodgerblue;
    border-bottom:3px solid dodgerblue;
  }

  #nav li:hover a{
    color:dodgerblue;
  }

  .message{
    height:25px;
    width: auto;
    cursor: pointer;
  }

  .message:hover{
    height:25px;
    width: auto;
  }

  .photo{
    margin-top: 4px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
  }

  #nav li a{
    color: white;
  }

  #manageAccount{
    background-color: ghostwhite;
    border-color: #efefef;
    position: absolute;
    top:51px;
    right: 4%;
    width: 10%;
    display: none;
    z-index: 2;
  }

  #manageAccount button{
    background-color: ghostwhite;
    border: 0.5px #efefef solid;
    width: 100%;
  }

  #manageAccount button:hover{
    background-color: lightblue;
    border: 0.5px #efefef solid;
    width: 100%;
  }

</style>
