<template>
  <div class="whole" id="navi" style="width:100%;">
    <a href="/"><img src="/static/pic/logo3_blue.png" id="naviLogo" class="img-responsive logo" alt="Cinque Terre"></a>
    <img id="remindPoint" src="/static/pic/redPoint.png" style="position: absolute;width:8px;right: 12.6%;top:17px;z-index: 2;display: none">

    <nav class="navbar navbar-inverse wholeNav">
      <div class="container-fluid" style="width: 100%">
        <div class="collapse navbar-collapse" id="myNavbar" style="display: inline-block;font-size: 16px;width: 100%">
          <ul class="nav navbar-nav" id="nav" style="width: 100%">
            <li><a id="invest" href="/enterInvest">投资大厅</a></li>
            <li><a id="loan" href="/enterLoan">我要借款</a></li>
            <li><a id="trade" href="/trade">南大鱼塘</a></li>
            <li><a id="notice" href="/notice">失物/寻物</a></li>
            <li><a id="guide" href="/guide">平台指南</a></li>
            <el-dropdown style="float:right;position: relative;" v-if="login">
              <span>
                <avatar username="default" src="/static/pic/person-flat.png"></avatar>
              </span>
              <el-dropdown-menu slot="dropdown">
                <a href="\userSpace"><el-dropdown-item>用户模式</el-dropdown-item></a>
                <a href="\subjectManage"><el-dropdown-item>管理模式</el-dropdown-item></a>
                <a  v-on:click="logout"><el-dropdown-item >退出登录</el-dropdown-item></a>

              </el-dropdown-menu>
            </el-dropdown>
            <li id="last" style="float: right;min-width: 8%;"><a id="signup" v-on:click="prompt">注册</a></li>
            <li id="secondLast" style="float: right;min-width: 8%;">
              <a id="login" href="/login">登录</a>
            </li>
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
    components: {Avatar},
    inject:['reload'],
    name: 'navi',
    mounted: function () {
      this.login = store.state.token;
      if(localStorage.route=="#homepage"){
        document.getElementById("naviLogo").src="/static/pic/logo3.png";
      }
      $("#manageAccount").css('display','none');
      if (store.getters.isLogin){
        this.login = store.getters.isLogin;
        document.getElementById('last').removeChild(document.getElementById('signup'));
        document.getElementById('secondLast').removeChild(document.getElementById('login'));
        var personalCenter = document.createElement('a');
        personalCenter.innerText = '个人中心';
        personalCenter.href = '/userSpace';
        personalCenter.id='userSpace';
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
        //localStorage.ifUnread=1;
        if (localStorage.ifUnread==1){
          $('#remindPoint').css('display','inherit');
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
            message.src = '/static/pic/message_white.png';
          }
        );

      }
    },
    methods: {
      logout: function () {
        store.commit(types.LOGOUT);
        this.$router.replace("/login");
        this.reload();
      },
      prompt() {
        this.$alert('由于花旗用户的限制，暂时不提供注册', '注意', {
          confirmButtonText: '确定',
          callback: action => {

          }
        });
      }
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
    z-index: 2;
  }
  .wholeNav{
    border-color: transparent;
    display: inline-block;
    width: 86%;
    min-width: 80%;
    min-height: 30px;
    margin-top: 5px;
    margin-bottom: 0;
    background-color: black;
  }
</style>

<style>
  #naviLogo{
    max-width: 7%;
    display: inline-block;
    margin-left: 5%;
    margin-top: -53px;
    position: relative;
  }
  #nav li{
    min-width: 10%;
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
    margin-top: 0px;
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
