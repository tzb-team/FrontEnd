<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      style="height: auto"
      router="true">
      <el-submenu index="1" class="bar-main">
        <template slot="title">
          <i class="el-icon-location-outline bar-icon"></i>
          <span>个人信息</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/UserSpace">账户总览</el-menu-item>
          <el-menu-item index="/UserSpace/BasicInformation">基本信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2" class="bar-main">
        <template slot="title">
          <i class="el-icon-menu bar-icon"></i>
          <span>投资管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/UserSpace/InvestInformation">项目信息</el-menu-item>
          <el-menu-item index="/UserSpace/InvestEarnings">投资统计</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3" class="bar-main">
        <template slot="title">
          <i class="el-icon-location bar-icon"></i>
          <span>信用验证</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/UserSpace/InvestPools">身份验证</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "leftAlumniBar",
    methods:{
      setA: function () {
        this.$store.commit('newAuthor','基本信息')
      },
      setB: function () {
        this.$store.commit('newAuthor','普通验证');
        //document.getElementById("checkA").style.color = "#ffffff";
        //document.getElementById("temptitle").style.color="#ffffff";
      },
      setC: function () {
        document.getElementById("userinformation").style.display="none";
        // document.getElementById("tmptitle").color = "#ffffff";
        // this.$store.commit('newAuthor','财务统计');
      }
    }
  }
</script>

<style scoped>
  /*----------左侧导航栏样式-------------*/
  .bar-icon{
    color: dodgerblue;
  }

  .bar-main{
    /*background-color:ghostwhite;*/
  }

  div.leftsidenav{
    background:white;
    border:1px solid #e4e4e4;
    border-top:5px solid dodgerblue;
    height:400px;
    margin-right: 10%;
    margin-left: 16%;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;

  }
  /*----------左侧导航栏修正----------*/
  .left_menus ul{
    list-style: none;
  }

  .left_head {
    font-size: 16px;
    color: #48576a;
    text-indent: 8%;
    margin-top: -3%;
    margin-bottom: -3%;
  }

  .left_ul li{
    margin: 3%;
    padding: 0;
    min-width: 80px;
    font-size: 15px;
  }

  .left_ul li a{
    color: #777777;
    text-decoration:none;
  }

  .left_ul li a:hover{
    color: dodgerblue;
  }

  .left_ul li a.active{
    color: dodgerblue;
  }


  #leftnav li{
    margin: 0;
    padding: 0;
    min-width: 80px;
    text-align: center;
    background-color: white;
  }

  #leftnav li a{
    color: black;
  }

  #leftnav li.active a{
    color: white;
    background-color: black;
  }

  #leftnav li a:hover{
    background-color: black;
  }

  #leftnav li:hover a{
    color:white;
  }

  #left_sub_nav li{
    margin: 0;
    padding: 0;
    min-width: 80px;
    text-align: center;
    background-color: snow;
  }

  #left_sub_nav li a{
    color: black;
  }

  #left_sub_nav .active a{
    color: darkviolet;
  }

  #left_sub_nav li a:hover{
    color:darkviolet;
  }

</style>
