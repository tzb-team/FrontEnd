// Author:SDJ
// Date:2019/2/26

<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :router="routerBool">
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
          <span>钱包管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/UserSpace/Wallet">我的钱包</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3" class="bar-main">
        <template slot="title">
          <i class="el-icon-menu bar-icon"></i>
          <span>专利管理</span>
        </template>
        <el-menu-item-group class="bar-main">
          <el-menu-item index="/UserSpace/MyPatent">我的专利</el-menu-item>
          <el-menu-item index="/UserSpace/PatentRegister">专利登记</el-menu-item>
          <el-menu-item index="/UserSpace/MyExpectation">我的求购</el-menu-item>
          <el-menu-item index="/UserSpace/MyOrderList">我的挂单</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4" class="bar-main">
        <template slot="title">
          <i class="el-icon-location bar-icon"></i>
          <span>专利池管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/UserSpace/InvestPools">我的专利池</el-menu-item>
          </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
      name: "leftUserBar",
      data(){
        return{
          routerBool:true
        }
      },
      methods:{
        
      }
  }
</script>

<style scoped>
  /*----------左侧导航栏样式-------------*/

  .bar-icon{
    color: dodgerblue;
  }

  div.leftsidenav{
    background:white;
    border:1px solid #e4e4e4;
    border-top:5px solid dodgerblue;
    height:650px;
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
