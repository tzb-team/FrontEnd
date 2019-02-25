<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="正在进行" name="first" >
        <loanTopBar v-on:getConditionEvent="getCondition"></loanTopBar>
        <loanUnderway :username="username" ref="underway"></loanUnderway>
      </el-tab-pane>
      <el-tab-pane label="完成项目" name="second" >
        <loanTopBar v-on:getConditionEvent="getCondition"></loanTopBar>
        <loanComplete :username="username" ref="complete"></loanComplete>
      </el-tab-pane>
      <el-tab-pane label="已发布项目" name="third">
        <loanTopBar v-on:getConditionEvent="getCondition"></loanTopBar>
        <loanLaunched :username="username" ref="launched"></loanLaunched>
      </el-tab-pane>
      <el-tab-pane label="违约记录" name="fourth">
        <loanTopBar v-on:getConditionEvent="getCondition"></loanTopBar>
        <loanUnbelievable ref="unbelievable"></loanUnbelievable>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

  import personalCenter from "./personalCenter";
  import loanTopBar from "./loanTopBar";
  import loanUnderway from "./loanUnderway"
  import loanComplete from "./loanComplete"
  import loanLaunched from "./loanLaunched"
  import loanUnbelievable from "./loanUnbelievable"

    export default {
      name: "loan-information-pane",
      components: {personalCenter,loanTopBar,loanUnderway,loanComplete,loanLaunched,loanUnbelievable},
      props:["username"],
      mounted:function(){
        this.getUnderway();
      },
      data() {
        return {
          currentPage1: 2,
          activeName: 'first',
          paneName:'first',

          condition:{
            moneyUpper:null,
            moneyLower:null,
            targetType:null,
            name:null,
            startDate:null,
            endDate:null
          },

        };
      },
      methods:{
        handleClick(tab, event) {
          this.paneName = tab.name;
          this.getTargets();
        },
        getTargets(){
          if(this.paneName==='first'){
            this.getUnderway();
          }else if(this.paneName==='second'){
            this.getComplete();
          }else if(this.paneName==='third'){
            this.getLaunched();
          }else if(this.paneName==='fourth'){
            this.getUnbelieve();
          }
        },
        getUnderway(){

          var moneyUpper = this.condition.moneyUpper;
          var moneyLower = this.condition.moneyLower;
          var targetType = this.condition.targetType;
          var name = this.condition.name;
          var startDate = this.condition.startDate;
          var endDate = this.condition.endDate;

          console.log("正在进行");
          this.$refs.underway.getTableData(moneyUpper,moneyLower,targetType,name,startDate,endDate);
        },
        getComplete(){
          console.log("已完成");

          var moneyUpper = this.condition.moneyUpper;
          var moneyLower = this.condition.moneyLower;
          var targetType = this.condition.targetType;
          var name = this.condition.name;
          var startDate = this.condition.startDate;
          var endDate = this.condition.endDate;

          this.$refs.complete.getTableData(moneyUpper,moneyLower,targetType,name,startDate,endDate);
        },
        getLaunched(){
          console.log("已发布");

          var moneyUpper = this.condition.moneyUpper;
          var moneyLower = this.condition.moneyLower;
          var targetType = this.condition.targetType;
          var name = this.condition.name;
          var startDate = this.condition.startDate;
          var endDate = this.condition.endDate;

          this.$refs.launched.getTableData(moneyUpper,moneyLower,targetType,name,startDate,endDate);
        },
        getUnbelieve(){
          console.log("违约记录");

          var moneyUpper = this.condition.moneyUpper;
          var moneyLower = this.condition.moneyLower;
          var targetType = this.condition.targetType;
          var name = this.condition.name;
          var startDate = this.condition.startDate;
          var endDate = this.condition.endDate;

          this.$refs.unbelievable.getTableData(moneyUpper,moneyLower,targetType,name,startDate,endDate);
        },
        getCondition(moneyUpper,moneyLower,targetType,name,startDate,endDate){

          this.condition.moneyUpper = moneyUpper;
          this.condition.moneyLower = moneyLower;
          this.condition.targetType =targetType;
          this.condition.name = name;
          this.condition.startDate = startDate;
          this.condition.endDate = endDate;

          /*if(money === "全部"){
            this.condition.moneyUpper = null;
            this.condition.moneyLower = null;
          }else if(money === "100及以下"){
            this.condition.moneyUpper = 100;
            this.condition.moneyLower = 0;
          }else if(money === "100-500"){
            this.condition.moneyUpper = 500;
            this.condition.moneyLower = 100;
          }else if(money === "500-1000"){
            this.condition.moneyUpper = 1000;
            this.condition.moneyLower = 500;
          }else if(money === "1000以上"){
            this.condition.moneyUpper = 1000000;
            this.condition.moneyLower = 1000;
          }

          var now = new Date();
          var nowYear = now.getFullYear();
          var nowMonth = this.getCompleteNum(now.getMonth());
          var nowDate = this.getCompleteNum(now.getDate());
          var nowTime = now.getTime();
          this.condition.endDate = nowYear+"-"+nowMonth+"-"+nowDate;
          console.log("endDate:"+this.condition.endDate);
          if(date === "全部"){
            this.condition.startDate = null;
            this.condition.endDate = null;
          }else if(date === "15天之内"){
            var days = 15;
            this.getStartDate(nowTime,days);
          }else if(date === "1个月之内"){
            var days = 30;
            this.getStartDate(nowTime,days);
          }else if(date === "6个月之内"){
            var days = 183;
            this.getStartDate(nowTime,days);
          }else if(date === "6个月以上"){
            this.condition.startDate = null;
          }

          if(state === "全部"){
            this.condition.targetType = null;
          }else if(state === "大额借款"){
            this.condition.targetType = "LARGE";
          }else if(state === "小额借款"){
            this.condition.targetType = "SMALL";
          }*/

          this.getTargets();
        },

        getStartDate(nowTime,days){
          var startTime = nowTime -  days*(24*3600*1000); // 将天数转换为毫秒
          var start = new Date(startTime);

          var startYear = start.getFullYear();
          var startMonth = this.getCompleteNum(start.getMonth());
          var startDate = this.getCompleteNum(start.getDate());

          this.condition.startDate = startYear+"-"+startMonth+"-"+startDate;
          console.log("startDate:"+this.condition.startDate);
        },

        getCompleteNum(num){
          num += "";
          if(num<=9){
            num = "0"+num;
          }
          return num;
        }

      }// end method
    }
</script>

<style scoped>

</style>

<style>
  .el-tabs__item{
    font-size: 18px !important;
  }
</style>
