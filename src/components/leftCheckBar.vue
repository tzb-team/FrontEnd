<template>
  <el-menu
    default-active="2"
    class="my_menu"
    active-text-color="#ffd04b"
    router="true">
    <el-submenu index="1" style="background-color:#e5e9f2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span><strong>用户信息</strong></span>
      </template>
      <el-menu-item-group >
        <el-menu-item index="/EnterVerify">非结构化信息</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="1" style="background-color:#e5e9f2">
      <template slot="title">
        <i class="el-icon-bell"></i>
        <span ><strong>借款申请</strong></span>
      </template>
      <el-menu-item-group >
        <el-menu-item index="/smalltargetcheck">小额标的</el-menu-item>
        <el-menu-item index="/largetargetcheck">大额标的</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    name: "leftCheckBar",
    methods: {
  }
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
