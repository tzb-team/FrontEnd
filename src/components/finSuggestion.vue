<template>
  <div>
    <h3><b>消费修正建议</b></h3><hr/>
    <div class="LoanPanel">
      <div id="myNextPay">
        <h4><b><i class="el-icon-warning" style="color: #409EFF"></i>&nbsp&nbsp距离下次还款还需 <span>{{ nextRepayTime }}</span> 天, 下次还需还款 <span>{{ nextRepayAmount }}</span> 元</b></h4>
        <nextpay
          v-for="item in NextpayList"
          v-bind:paylist="item"
          v-bind:key="item.paytitle"
        ></nextpay>
        <!--<img src="../../static/pic/loanSuggestion.png" style="width: 600px;height: 450px">-->
        <hr/>
      </div><!--更新版本修正建议-->
    </div>
    <div class="LoanPanel">
      <div class="LevelTwoIndex" id="leveltwoindex">
        <div class="LevelTwoPanel">
          <el-row :gutter="2">
            <el-col :span="12">
              <h4><i class="el-icon-success"></i><b>&nbsp&nbsp您的结余为：&nbsp {{ user.surplus }} 元</b></h4><hr/>
              <div id="Index_NetWorth">
                <h4><i class="el-icon-info"></i><b>&nbsp&nbsp您的净资产为：&nbsp {{ user.netAssets }} 元</b></h4><hr/>
              </div>
              <div id="Index_EngelsCoefficient">
                <h4><i class="el-icon-success"></i><b>&nbsp&nbsp您的恩格尔系数为：&nbsp {{ user.engel }}%,&nbsp&nbsp在同学中处于中等水平</b></h4><hr/>
              </div>
              <div id="Index_RigidRatio">
                <h4><i class="el-icon-goods"></i><b>&nbsp&nbsp您的刚性比率是:&nbsp {{ user.rigid }}%,&nbsp&nbsp当前可支配收入较多</b></h4><hr/>
              </div>
              <div id="Index_AssetLiabilityRatio">
                <h4><i class="el-icon-document"></i><b>&nbsp&nbsp您的资产负债率为：&nbsp {{ user.assetLiabilityRatio }}%</b></h4>
              </div>
            </el-col>
            <el-col :span="12">
              <h4><i class="el-icon-info"></i><b>&nbsp&nbsp您的负债总额为：&nbsp {{ user.totalLiabilities }} 元</b></h4><hr/>
              <div id="Index_Solvency">
                <h4><i class="el-icon-tickets"></i><b>&nbsp&nbsp您的偿债能力为：&nbsp {{ user.solvency }}%</b></h4><hr/>
              </div>
              <div id="Index_Leverage">
                <h4><i class="el-icon-news"></i><b>&nbsp&nbsp您的杠杆比例为：&nbsp {{ user.leverage }}%</b></h4><hr/>
              </div>
              <div id="Index_MonthConsumptionRatio">
                <h4><i class="el-icon-date"></i><b>&nbsp&nbsp您的月消费比率为：&nbsp {{ user.monthCusumptionRatio }}%，在同学中处于中等水平</b></h4>
                <hr/>
              </div>
              <div id="Index_MonthlySavingsRatio">
                <h4><i class="el-icon-date"></i><b>&nbsp&nbsp您的月储蓄比例为：&nbsp {{ user.monthSavingRatio }}%</b></h4>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <hr/>
      <div id="forecast_lines">
        <el-row :gutter="2">
          <el-col :span="12">
            <div id="ForecastK" :style="{width: '400px', height: '300px'}"></div>
          </el-col>
          <el-col :span="12">
            <div id="ForecastA" :style="{width: '400px', height: '300px'}"></div>
          </el-col>
        </el-row>
        <hr/>
      </div>
    </div>
    <div class="LoanPanel" style="padding-left: 20px">
      <p>在您借款成功后的{{ loanStart }}个月内，根据历史消费记录预测，可知结余占用率、可调支出占用率、需要的额外收入金额如下：</p>
      <div style="width: 700px" id="loanTable">
        <template>
          <el-table
            :data="tableData"
            height="250"
            border
            style="width: 100%">
            <el-table-column
              prop="month"
              label="月份"
              width="100">
            </el-table-column>
            <el-table-column
              prop="valX"
              label="结余占用率X%"
              width="200">
            </el-table-column>
            <el-table-column
              prop="valY"
              label="可调支出占用率Y%"
              width="200">
            </el-table-column>
            <el-table-column
              prop="valZ"
              label="额外收入金额Z%"
              width="200">
            </el-table-column>
          </el-table>
        </template>
        <br/>
      </div>
      <p>因此，建议您酌情调整下在各项支出中占比较大的几项。</p>
    </div>
  </div>
</template>

<script>
  import InvestList from "../components/investList";
  import Nextpay from "../components/nextPay";

  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  require('echarts/lib/chart/line')
  require('echarts/lib/chart/pie')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  //
  require('echarts/theme/macarons')
  require('echarts/theme/shine')

  export default {
    name: 'finSuggestion',
    components: {Nextpay, InvestList},
    props:["username"],
    data() {
      return {
        nextRepayAmount:318,
        nextRepayTime:15,
        loanStart: 12,
        user:{
          surplus: 3140, //结余
          netAssets: 1750, //净资产
          engel:32,
          rigid:71,
          assetLiabilityRatio:142, //资产负债率
          totalLiabilities: 1390,
          solvency: 216,
          leverage: 116,
          monthCusumptionRatio: 92,
          monthSavingRatio: 5,
        },
        NextpayList: [],
        tableData: [
          {
          month: '1',
          valX: '100%',
          valY: '95.53%',
          valZ: '---'
        }, {
          month: '2',
          valX: '100%',
          valY: '28.50%',
          valZ: '---'
        }, {
          month: '3',
          valX: '80.25%',
          valY: '---',
          valZ: '---'
        }, {
          month: '4',
          valX: '100%',
          valY: '48.99%',
          valZ: '---'
        }, {
          month: '5',
          valX: '100%',
          valY: '38.71%',
          valZ: '---'
        }, {
          month: '6',
          valX: '100%',
          valY: '49.33%',
          valZ: '---'
        }, {
          month: '7',
          valX: '100%',
          valY: '41.69%',
          valZ: '---'
        }, {
          month: '8',
          valX: '100%',
          valY: '35.20%',
          valZ: '---'
        }, {
          month: '9',
          valX: '74.65%',
          valY: '---',
          valZ: '---'
        }, {
          month: '10',
          valX: '100%',
          valY: '14.40%',
          valZ: '---'
        }, {
          month: '11',
          valX: '100%',
          valY: '14.50%',
          valZ: '---'
        }, {
          month: '12',
          valX: '100%',
          valY: '14.09%',
          valZ: '---'
        }
        ],
      };
    },
    mounted() {
      this.getConsumptionAnalysis();
      this.getPredictSurplus();
    },
    methods: {
      getConsumptionAnalysis(){
        console.log("消费修正建议");
        let self = this;
        this.$axios.get('/loan/repayment/consumptionAnalysis',{
          params:{
            username:self.username,
          }
        })
          .then((response) => {
            console.log("消费修正建议success");
            console.log(response);
            console.log(response.data);
            let res = response.data;
            this.nextRepayAmount = res.nextPayment.toFixed(2);
            this.nextRepayTime = res.nextPayTime;
            this.user.solvency = res.user.solvency.toFixed(2);
            this.user.engel = res.user.engel.toFixed(2);
            this.user.leverage = res.user.leverage.toFixed(2);
            this.user.rigid = res.user.rigid.toFixed(2);
            this.user.monthCusumptionRatio = res.user.monthConsumptionRatio.toFixed(2);
            this.user.assetLiabilityRatio = res.user.assetLiabilityRatio.toFixed(2);
            this.user.monthSavingRatio = res.user.monthSavingRatio.toFixed(2);

            //this.NextpayList = res.nextPayList; Some bugs,try another method
            let List  = [];
            for(let l of res.nextPayList){
              List.push({
                paytitle : l.payTitle,
                projectTime : l.projectTime,
                times: l.times,
                interestPlus: l.interestPlus,
                timesA: l.timesA,
                timeA: l.timeA,
                amountA: l.amountA,
                timesB: l.timesB,
                timeB: l.timeB,
                amountB: l.amountB,
                timesC: l.timesC,
                timeC: l.timeC,
                amountC: l.amountC
              })
            }



            this.NextpayList = List;


          })
          .catch((response) => {
            console.log(response);
            console.log("消费修正建议error");
          })
      },
      getPredictSurplus(){
        console.log("预测");
        let self = this;

        let testNum = 0.151313213212;
        testNum *= 100;
        testNum = testNum.toFixed(2);
        console.log("testNum"+testNum);
        this.$axios.get('/loan/repayment/predictSurplus',{
          params:{
            username:self.username,
          }
        })
          .then((response) => {
            console.log("预测success");
            console.log(response);

            let an = response.data.an;
            let kn = response.data.kn;
            let time =response.data.time;
            console.log("before draw");
            this.drawK(time,kn);
            this.drawA(time,an);
            console.log("after draw");
            for(let i of response.data.tableData){
              i.valX *=100;
              i.valY *=100;
              i.valZ *=100;
              i.valX = i.valX.toFixed(2);
              i.valY = i.valY.toFixed(2);
              i.valZ = i.valZ.toFixed(2);
            }
            this.tableData = response.data.tableData;
          })
          .catch((response) => {
            console.log(response);
            console.log("预测error");
          })
      },
      drawK(time,dataK) {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('ForecastK'))
        // 绘制图表
        myChart.setOption({
          title: { text: '预测的您第n个月后的结余K(n)' },
          tooltip: {},
          xAxis: {
            name: '时间',
            type: 'category',
            data: time
          },
          yAxis: {
            name: '结余K(n)',
            type: 'value'
          },
          series: [{
            name: '结余',
            type: 'line',
            data: dataK,
            smooth: true
          }]
        });
      },
      drawA(time,dataA) {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('ForecastA'))
        // 绘制图表
        myChart.setOption({
          title: { text: '预测您第n个月后的可调整支出A(n)' },
          tooltip: {},
          xAxis: {
            name: '时间',
            type: 'category',
            data: time
          },
          yAxis: {
            name: '可调整支出A(n)',
            type: 'value'
          },
          series: [{
            name: '可调整支出',
            type: 'line',
            data: dataA,
            smooth: true
          }]
        });
      },
    }

  }
</script>


<style scoped>
  .LevelTwoPanel i{
    color: #409EFF;
  }

  .LoanPanel {
    margin-left: 20px;
    margin-right: 20px;
  }


  #myNextPay b>span{
    font-size: 30px;
    color: #409EFF;
  }

</style>

<style>
  .el-table thead {
    color: #606266 !important;
    font-weight: 500;
  }
</style>
