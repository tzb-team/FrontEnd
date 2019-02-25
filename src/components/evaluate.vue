<template>
    <el-form class="main_panel">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="等额本息" name="first">
          <el-card>
            <evaluateTopPane :scheme="scheme"></evaluateTopPane>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="等额本金" name="second">
          <el-card>
            <evaluateTopPane :scheme="scheme"></evaluateTopPane>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="一次性还本付息" name="third">
          <el-card>
            <evaluateTopPane :scheme="scheme"></evaluateTopPane>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="先息后本" name="fourth">
          <el-card>
            <evaluateTopPane :scheme="scheme"></evaluateTopPane>
          </el-card>
        </el-tab-pane>
      </el-tabs>
      <!--<div style="display: flex;padding-bottom: 20px">

        <div class="scheme_type" style="color: #ff6445">
          等额本息
          <div style="border: 1px solid #ff6445"></div>
        </div>
        <div class="scheme_type">
          等额本金
        </div>
        <div class="scheme_type">
          一次性还本付息
        </div>
        <div class="scheme_type">
          先息后本
        </div>
      </div>-->


      <el-card id="myChart" v-show="scheme.show_table" align="center" style="width: 450px;height: 300px;margin-top: 20px"></el-card>
      <!--<div id="myChart" style="width: 450px;height: 300px;margin-top: 50px;margin-left: 40px">
      </div>-->
      <el-card style="margin-top: 20px;font-size: 15px">
        <div style="font-size: 22px;margin-top: 5px;margin-bottom: 10px">贷款建议:</div>
        <p id="enough" style="color: #31d09f" v-if="scheme.enough">根据预测，您足以支付每期还款</p>
        <p id="not_enough" v-if="scheme.enough==false">在您的还款期内，根据历史消费记录预测，有 <span style="color:#409EFF;font-size: 20px">{{scheme.count}}</span>个月（<span v-for="month in scheme.months"><span style="color:#409EFF;font-size: 20px" >{{month}}</span>,</span>）应还金额超出当月预测结余，如果选择该方案，请<span style="color: #ffa5a4;font-size: 18px">酌情调整</span>这些月份的消费</p>
        <p id="can_change" v-if="scheme.change" style="padding-top: 10px">对于上述需调整的月份，根据您的历史消费数据预测，您额可调整支出分类占比为：衣物饰品 <span style="color: #409EFF;font-size: 20px">{{scheme.a}}</span> 饮食<span style="color: #409EFF;font-size: 20px">{{scheme.b}}</span> 住宿<span style="color: #409EFF;font-size: 20px">{{scheme.c}}</span> 娱乐消费<span style="color: #409EFF;font-size: 20px">{{scheme.d}}</span>.您可以<span style="color: #ffa5a4;font-size: 18px">根据自身需求</span>调整这些消费</p>
        <p id="cannot_change" v-if="scheme.change==false">根据您的历史消费，有<span style="color:#409EFF;font-size: 20px">{{scheme.count2}}</span>个月（<span v-for="get in scheme.income"><span style="color:#409EFF;font-size: 20px" >{{get}}</span>,</span>)应还金额还需要其他资金收入，您可以考虑还款期内是否有以下的收入：奖学金、到期理财产品、兼职等，<span style="color: red">如果没有，请酌情调整所选贷款方案</span></p>
      </el-card>
    </el-form>
</template>

<script>


  import ElCard from "element-ui/packages/card/src/main";
  import evaluateTopPane from './evaluateTopPane'

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
  /*require('echarts/theme/shine')*/

    export default {
      components: {ElCard,evaluateTopPane},
      name: "evaluate",
      props:["scheme","plan_table"],
      mounted() {
        console.log("!!!!!!!this.scheme.interest_list:"+this.scheme.interest_list);

        this.drawLine();
      },
      data() {
        return {

          /*scheme:{
            capital:0,
            interest:0,
            sum:0
          },*/
          activeName:'first',
          enough:false,
          change:true,
          tableData: [{
            id:'1',
            sum:'',
            capital:'',
            interest:'',
            else:''
          }, {
            id:'2',
            sum:'',
            capital:'',
            interest:'',
            else:''
          }, {
            id:'3',
            sum:'',
            capital:'',
            interest:'',
            else:''
          }, {
            id:'4',
            sum:'',
            capital:'',
            interest:'',
            else:''
          }],
          myChart: null,
          option:[],
        } //end return
      },
      methods: {
        drawLine () {

          this.getPeriod();

          // 基于准备好的dom，初始化echarts实例
          let myChart = echarts.init(document.getElementById('myChart'),'macarons');
          // 绘制图表
          myChart.setOption({
            title : {
              text: '预期还款',
              /*subtext: '纯属虚构'*/
            },
            tooltip : {
              trigger: 'axis'
            },
            legend: {
              data:['偿还本息','偿还利息']
            },
            toolbox: {
              show : true,
              feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
              }
            },
            calculable : true,
            xAxis : [
              {
                type : 'category',
                boundaryGap : false,
                data : this.scheme.period
              }
            ],
            yAxis : [
              {
                type : 'value',
                axisLabel : {
                  formatter: '{value} 元'
                }
              }
            ],
            series : [
              {
                name:'偿还本息',
                type:'line',
                data:this.scheme.capital_and_interest_list,
                markPoint : {
                  data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                  ]
                },
                markLine : {
                  data : [
                    {type : 'average', name: '平均值'}
                  ]
                }
              },
              {
                name:'偿还利息',
                type:'line',
                data:this.scheme.interest_list,
                markPoint : {
                  data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                  ]
                },
                markLine : {
                  data : [
                    {type : 'average', name : '平均值'}
                  ]
                }
              }
            ]
          });
        },
        getPeriod(){
          this.scheme.period = [];
          var length = this.scheme.interest_list.length;
          for(var i=1;i<=length;i++){
            var str = "第"+i+"期";
            this.scheme.period.push(str);
          }
          /*this.scheme.period.push("");*/
        },
        getActiveName(){
          this.activeName = this.scheme.activeName;
        },
        handleClick(tab,event){
          console.log("in evaluate handleClick")
          this.$emit("getSchemeEvent",this.activeName);
        }
      },

    }
</script>

<style scoped>

  .main_panel{
    width:450px;
    background-color: white;
    /*height:600px;*/
  }

  .top_panel{
    display: flex;
  }

  .pointer:hover{
    cursor:pointer;
  }

  .scheme_type{
    margin-left: 30px;
    font-size: 16px;
  }

</style>
