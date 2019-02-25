<template>
  <el-tabs v-model="activeParent" @tab-click="handleClick" >
    <div class="Parent">

      <el-tab-pane label="项目信息" name="two">
        <div id="loan_id">
          <LoanInformationPane :username="username"></LoanInformationPane>
        </div>
      </el-tab-pane>
      <el-tab-pane label="基本资料" name="three">
        <loanerBasicInfo></loanerBasicInfo>
      </el-tab-pane>
      <el-tab-pane label="学业表现" name = "four">
      </el-tab-pane>
      <div v-if="showGraph">
        <academicPerformance :username="username"></academicPerformance>
      </div>
      <el-tab-pane label="财务分析" name="one">
        <fin-analysis :username="username"></fin-analysis>
      </el-tab-pane>
    </div>

  </el-tabs>
</template>

<script>
    import FinAnalysis from "./finAnalysis";
    import loanTopBar from "../components/loanTopBar";
    import loanUnderway from "../components/loanUnderway";
    import loanComplete from "../components/loanComplete";
    import loanLaunched from "../components/loanLaunched";
    import loanUnbelievable from "../components/loanUnbelievable";
    import loanerBasicInfo from "../components/loanerBasicInfo";
    import academicPerformance from "../components/academicPerformance";
    import LoanInformationPane from '../components/LoanInformationPane.vue'

    export default {
      name: "doInvestingLoanerInfo",
      components: {FinAnalysis,loanTopBar,loanUnderway,loanComplete,loanLaunched,loanUnbelievable,loanerBasicInfo,academicPerformance,LoanInformationPane},
      props:["username"],
      data(){
        return{
          activeParent: 'three',
          activeChild:'first',
          showGraph:false,
        }
      },
      mounted() {

      },
      methods: {
        handleClick(tab, event) {
          if(this.activeParent=="four"){
            this.showGraph = true;
          }else{
            this.showGraph = false;
          }
        },
      }
    }

</script>



<style scoped>
  .Parent >>>.el-tabs__item{
    font-size: 15px;
    width:220px;
  }
</style>
