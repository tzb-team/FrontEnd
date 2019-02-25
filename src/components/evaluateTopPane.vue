<template>
  <div class="top_panel">
    <div>
      <div style="padding-left: 30px">
        还款难度：
        <i class="el-icon-star-on" v-for="i in scheme.difficulty"></i>
        <!--<i class="el-icon-star-on"></i>
        <i class="el-icon-star-on"></i>
        <i class="el-icon-star-on"></i>-->
        <el-tooltip class="item" effect="dark" content="点击查看借款难度算法" placement="bottom-start">
          <i class="el-icon-question pointer" style="color: #409EFF"></i>
        </el-tooltip>

      </div>
      <div style="padding-left: 50px">
        <span style="font-size: 25px;font-weight:bold;color: #cd5f33;padding-top: 20px;padding-left: 15px">{{scheme.sum}}</span>
        <br>
        <span style="color: #acacac;padding-top: -20px">还款总额(元)</span>
      </div>
      <div ></div>
    </div>
    <div style="margin-left: 100px;font-size: 17px;padding-top: 5px">
      贷款金额&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="font-weight: bold;color: red" v-model="scheme">{{scheme.capital}}</span>元
      <div style="border: 1px #b7b7b7 solid;margin-top: 3px;margin-bottom: 5px"></div>
      利息总额&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="font-weight: bold;color: red">{{scheme.interest}}</span>元
      <div style="border: 1px #b7b7b7 solid;margin-top: 3px;margin-bottom: 5px"></div>
      <!--还款总额&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="font-weight: bold;color: red">{{scheme.sum}}</span>元-->
    </div>
  </div>
</template>

<script>
    export default {
        name: "evaluate-top-pane",
        props:["scheme"],
        data(){
          return{

          }// end return
        }
    }
</script>

<style scoped>

  .top_panel{
    display: flex;
  }

</style>
