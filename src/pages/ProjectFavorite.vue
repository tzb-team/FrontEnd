<template>
  <personalCenter paneltitle="收藏项目">
    <div class="projectPanel">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="最近投资" name="first">
          <project-list></project-list><br/>
        </el-tab-pane>
        <el-tab-pane label="最近融资" name="second">
          <project-list></project-list><br/>
          <project-list></project-list><br/>
        </el-tab-pane>
        <el-tab-pane label="历史投资" name="third">
          <project-list></project-list><br/>
          <project-list></project-list><br/>
          <project-list></project-list><br/>
        </el-tab-pane>
        <el-tab-pane label="历史融资" name="fourth">
          <project-list></project-list><br/>
          <project-list></project-list><br/>
          <project-list></project-list><br/>
          <project-list></project-list><br/>
        </el-tab-pane>
      </el-tabs>
      <hr/>
      <!--<div class="projectPages">-->
        <!--<project-list></project-list><br/>-->
        <!--<project-list></project-list><br/>-->
        <!--<project-list></project-list><br/>-->
        <!--<project-list></project-list><br/>-->
      <!--</div>-->
      <div id="poj_pagination">
        <div class="block">
          <!--<span class="demonstration">完整功能</span>-->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage1"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="40">
          </el-pagination>
        </div>
      </div>

    </div>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";
  import ProjectList from "../components/projectList";

  export default {
    name:"projectfavorite",
    components: {ProjectList, personalCenter},
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    data() {
      return {
        currentPage1: 2,
        activeName: 'second',
      };
    }
  }

</script>

<style scoped>
  #poj_pagination{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }

</style>

<style >
  .el-tabs__item{
    font-size: 18px !important;
  }


</style>
