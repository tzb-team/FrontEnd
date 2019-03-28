<template>
<el-container style="height: 500px;margin-left:200px ; border: 1px solid #eee">
<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message">导航</i></template>
        <el-menu-item-group>

          <el-menu-item index="1-1">池中专利</el-menu-item>
          
        </el-menu-item-group>
        <el-menu-item-group title="">

        </el-menu-item-group>
       
      </el-submenu>
    
     
    </el-menu>
  </el-aside>

  <el-container>
    <el-header style="text-align: right; font-size: 12px">

    </el-header>
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="patentname" label="专利名称">
        </el-table-column>
        <el-table-column prop="patentid" label="专利id">
        </el-table-column>
        <el-table-column prop="type" label="专利所属行业" >
        </el-table-column>
        <el-table-column prop="dateJoin" label="入池日期" >
        </el-table-column>
         <el-table-column prop="dateexit" label="出池日期">
        </el-table-column>
        <el-table-column prop="ownerid" label="专利持有人">
        </el-table-column>
        
    
      </el-table>
    </el-main>
  </el-container>
</el-container>
</template>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }

</style>

<script>
  export default {
    data() {
      const item = {
        dateJoin: '2016-05-02',
        patentname: '时光传送机',
        type:'信息技术',
        dateexit:'无',
        patentid: '0000000001',
        ownerid: '222222'
      };
      return {
        tableData: Array(6).fill(item)
      }
    }
  };
</script>