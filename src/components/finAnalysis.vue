<template>
  <div>
    <div class="chooseButton">
      <el-radio v-model="inoutcome" label="1" id="bar_btn" @change="change_bar" border>数值比较</el-radio>
      <el-radio v-model="inoutcome" label="2" id="line_btn" @change="change_line" border>趋势分析</el-radio>
      <el-radio v-model="inoutcome" label="3" id="pie_btn" @change="change_pie" border>比例分析</el-radio>
    </div><hr/><br/>
    <div class="FinDateChoice">
      <div id="dateDouble">
        <el-row :gutter="2">
          <el-col :span="6">
            <div class="block">
              <span class="demonstration"></span>
              <el-date-picker
                v-model="month_start"
                type="month"
                placeholder="请选择起始月份"
                value-format="yyyy-MM"
              >
              </el-date-picker>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="block">
              <span class="demonstration">到&nbsp&nbsp&nbsp&nbsp</span>
              <el-date-picker
                v-model="month_end"
                type="month"
                placeholder="请选择终止月份"
                value-format="yyyy-MM"
              >
              </el-date-picker>
            </div>
          </el-col>
        </el-row>

      </div>
      <div id="dateSingle" style="display: none">
        <div class="block">
          <span class="demonstration"></span>
          <el-date-picker
            v-model="month_single"
            type="month"
            placeholder="请选择您要查看的月份"
            value-format="yyyy-MM"
          >
          </el-date-picker>
        </div>
      </div>
    </div><br/>
    <div id="bar_info" style="display: inline">
     <finbars
       :username="username"
       v-bind:monthBarStart="month_start"
       v-bind:monthBarEnd="month_end">
     </finbars>
    </div>
    <div id="line_info" style="display: none">
      <finlines
        :username="username"
        v-bind:monthLineStart="month_start"
        v-bind:monthLineEnd="month_end"
      ></finlines>
    </div>
    <div id="pie_info" style="display: none">
      <finpies
        :username="username"
        v-bind:monthPie="month_single"
      ></finpies>
    </div>
    <!--<hr/>-->
    <div class="LevelOneIndex" id="leveloneindex" style="display: none"><!--一级指标，收入&&支出和其他-->
      <div class="class_outcome" id="id_class_outcome" style="display: inline">
        <h4><b>您本月的支出情况</b></h4>
        <div class="table-responsive" style="text-indent: 5px;max-width: 700px">
          <table class="table table-bordered">
            <!--<caption><b>您的信用评级为：100</b></caption>-->
            <thead>
            <tr>
              <th><i class="el-icon-info" style="color: #409EFF"></i>&nbsp支出总额</th>
              <th><i class="el-icon-tickets" style="color: #409EFF"></i>&nbsp刚性支出</th>
              <th><i class="el-icon-sold-out" style="color: #409EFF"></i>&nbsp可调指出的总额</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>70</td>
              <td>30</td>
              <td>100</td>
            </tr>
            </tbody>
          </table>
        </div>
        <hr/>
        <h4><b>您本月的支出变化</b></h4>
        <!--<div id="myOutcomeBar" :style="{width: '400px', height: '300px'}"></div>-->
        <hr/>
        <h4><b>您本月的支出分布统计图</b></h4>
        <h4><b>您本月的可调整支出统计图</b></h4>
        <h4><b>您本月的饮食支出分布统计图</b></h4>
      </div>

      <div class="class_income" id="id_class_income">
        <div id="myIncomeOverview">
          <!--<h4><b>您的收入为总额为：<i class="el-icon-menu" style="color: #409EFF"></i>&nbsp 6050 元</b></h4>-->
        </div>
        <hr/>
        <h4><b>您本月的收入变化</b></h4>
        <!--<div id="myIncomeBar" :style="{width: '400px', height: '300px'}"></div>-->
        <h4><b>您的负债总额为：<i class="el-icon-success" style="color: #409EFF"></i>&nbsp 6632.30 元</b></h4>
        <hr/>
        <h4><b>您本月的蚂蚁花呗情况</b></h4>
        <div id="myAntBar" style="width: 800px; height: 300px; "></div>
        <h4><b>您各项投资金额和收益为</b></h4>
        <div id="myInvestLoanPie" style="width: 800px; height: 300px; "></div>
        <hr/>
      </div>

      <div id="mySurplus">
        <hr>
        <h4><b>您的结余为：<i class="el-icon-success" style="color: #409EFF"></i>&nbsp 3752.30 元</b></h4>
        <hr/>
      </div>
    </div>
  </div>
</template>

<script>
  // 引入基本模板
  import Finpies from "./finPies";
  import Finlines from "./finLines";
  import Finbars from "./finBars";
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

  var date = this.month_start;


  export default {
    name: 'finAnalysis',
    components: {Finbars, Finlines, Finpies},
    props:["username"],
    data() {
      var myDate = new Date();//获取系统当前时间
      var initDate = myDate.getFullYear()+'-'+myDate.getMonth();
      return{
        month_start: initDate,
        month_end: initDate,
        month_single: '',
        inoutcome: '1',
      }
    },
    mounted() {
      this.drawAntBar();
    },
    methods: {
      change_bar(){
        document.getElementById("bar_info").style.display = "inline";
        document.getElementById("line_info").style.display = "none";
        document.getElementById("pie_info").style.display = "none";

        document.getElementById("dateDouble").style.display = "inline";
        document.getElementById("dateSingle").style.display = "none";
      },
      change_line(){
        document.getElementById("bar_info").style.display = "none";
        document.getElementById("line_info").style.display = "inline";
        document.getElementById("pie_info").style.display = "none";

        document.getElementById("dateDouble").style.display = "inline";
        document.getElementById("dateSingle").style.display = "none";
      },
      change_pie(){
        document.getElementById("bar_info").style.display = "none";
        document.getElementById("line_info").style.display = "none";
        document.getElementById("pie_info").style.display = "inline";

        document.getElementById("dateDouble").style.display = "none";
        document.getElementById("dateSingle").style.display = "inline";
      },

      getSTime(val){
        this.month_start = val;
      },


      drawAntBar() {
        // 基于准备好的dom，初始化echarts实例
        let myAntBar = echarts.init(document.getElementById('myAntBar'))
        // 绘制图表
        myAntBar.setOption({
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data:['花呗支出', '花呗还款']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          yAxis : [
            {
              type : 'value'
            }
          ],
          xAxis : [
            {
              type : 'category',
              axisTick : {show: false},
              data : ["1号", "2号", "3号", "4号", "5号", "6号","7号","8号", "9号", "10号", "11号", "12号", "13号","14号","15号", "16号", "17号", "18号", "19号", "20号","21号","22号", "23号", "24号", "25号", "26号", "27号","28号"]
            }
          ],
          series : [
            {
              color: '#0039b3',
              name:'花呗支出',
              type:'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true
                }
              },
              data:[20, 36, 10, 40, 20, 60, 5, 20, 36, 10, 40, 20, 60, 5, 20, 36, 10, 40, 20, 60,5, 20, 36, 10, 40, 20, 60, 5]
            },
            {
              color: '#97b7fc',
              name:'花呗还款',
              type:'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'left'
                }
              },
              data:[-5, -20, -36, -10, -40, -20, -80, -5, -20, -36, -10, -40, -20, -60, -5, -20, -36, -10, -40, -20, -60, -5, -20, -36, -10, -40, -20, -60]
            }
          ]
        });
      },
    }
  }
</script>

<style scoped>

</style>

