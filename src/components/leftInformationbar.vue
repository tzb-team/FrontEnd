<template>
  <el-menu
    default-active="2"
    class="my_menu"
    active-text-color="#ffd04b"
    router="true">
    <el-submenu index="1" style="background-color:#f5f5f5">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span><strong>消息集散</strong></span>
      </template>
      <el-menu-item-group >
        <el-menu-item index="/notice">失物/寻物</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="1" style="background-color:#f5f5f5">
      <template slot="title">
        <i class="el-icon-bell"></i>
        <span ><strong>与我相关</strong></span>
      </template>
      <el-menu-item-group >
        <el-menu-item index="/notice/upload">发布消息</el-menu-item>
        <el-menu-item index="/notice/mesunderway">正在进行</el-menu-item>
        <el-menu-item index="/notice/mesdone">已经完成</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
    export default {
      name: "leftInformationbar",
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
