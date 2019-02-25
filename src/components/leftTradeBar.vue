<template>
  <!--<el-menu
  default-active="2"
  class="el-menu-vertical-demo"
  style="height: auto;margin-top: 30px" router="true">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>交易大厅</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="/trade">交易大厅</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-menu"></i>
      <span>我的闲置</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="/trade/mine">闲置上传</el-menu-item>
      <el-menu-item index="/trade/going">正在进行</el-menu-item>
      <el-menu-item index="/trade/finished">成功交易</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</el-menu>-->

  <el-menu
    default-active="2"
    class="my_menu"
    active-text-color="#ffd04b"
    router="true">
    <el-submenu index="1" style="background-color:#f5f5f5">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span><strong>交易大厅</strong></span>
      </template>
      <el-menu-item-group >
        <el-menu-item index="/trade">交易大厅</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="1" style="background-color:#f5f5f5">
      <template slot="title">
        <i class="el-icon-bell"></i>
        <span ><strong>我的闲置</strong></span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/trade/mine">闲置上传</el-menu-item>
        <el-menu-item index="/trade/going">正在进行</el-menu-item>
        <el-menu-item index="/trade/finished">成功交易</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>

</template>

<script>
    export default {
        name: "leftTradeBar"
    }
</script>

<style scoped>
  .my_menu{
  //active-text-color:#409EFF;
    height: auto;
    margin-top: 30px;
    margin-left:25%;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
  }
</style>
