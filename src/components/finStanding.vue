<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="财务分析" name="first">
      <div id="financial_id"><br/>
        <fin-analysis :username="username"></fin-analysis>
      </div>
    </el-tab-pane>
    <el-tab-pane label="财务建议" name="second">
      <div id="loan_id">
        <fin-suggestion :username="username"></fin-suggestion>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import personalCenter from "../components/personalCenter";
  import FinAnalysis from "./finAnalysis";
  import FinSuggestion from "./finSuggestion";
  // import FinCharts from  "../../static/js/FinCharts";

  const indexAOptions = ['净资产', '恩格尔系数', '刚性比率', '资产负债率','偿债能力','杠杆比例','月消费比率','月储蓄比例'];

  // <nextpay paytitle="托福考试借款项目" project-time="2017.9.1-2018.11.1" times="7" interest-plus="2100" times-a="8" time-a="2018.5.1" amount-a="300" times-b="9"  time-b="2018.6.1" amount-b="300" times-c="10" time-c="2018.7.1" amount-c="300"></nextpay>

  export default {
    name:"FinStanding",
    components: {FinSuggestion, FinAnalysis, personalCenter},
    props:["username"],
    data() {
      return {
        activeName: 'first',
        valueX: '0.5',
        valueY: '0.7',
        valueZ: '0',
        checkboxGroup2: [],
        indexAs: indexAOptions,
        checkAll: false,
        isIndeterminate: true
      };
    },
    mounted() {
      /*console.log("local:")
      console.log(localStorage.username)
      console.log(this.username)*/
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
    }
  }


</script>


<style>
  .el-tabs__item{
    font-size: 18px !important;
  }

  /*#leftOV,#leftSP,#leftBI,#leftLI,#leftLS,#leftII,#leftIE,#leftNC,#leftAC,#leftCC{ color: #777777 !important; }*/
  #leftFS{ color: dodgerblue !important}

</style>
