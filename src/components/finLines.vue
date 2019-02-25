<template>
  <div id="line_template">
    <div>
      <p>您选中了{{ monthLineStart }} 到 {{ monthLineEnd }}</p>
    </div>
    <!--恩格尔系数、刚性比率、负债率、偿债能力、杠杆比率、消费比率、储蓄比率-->
    <div>
      <el-row :gutter="20">
        <el-col :span="5">
          <span>请选择您所要查看的指标</span>
        </el-col>
        <el-col :span="19">
          <div id="selectLine_id">
            <el-radio-group v-model="selectLine" size="mini">
              <el-radio label="恩格尔系数" v-bind:title="'食品支出/总支出\n'"></el-radio>
              <el-radio label="刚性比率" v-bind:title="'刚性支出/总支出'"></el-radio>
              <el-radio label="负债率" v-bind:title="'月负债/月结余'"></el-radio>
              <el-radio label="偿债能力" v-bind:title="'月结余/月负债\n'"></el-radio>
              <el-radio label="杠杆比率" v-bind:title="'净资产/月负债'"></el-radio>
              <el-radio label="消费比率" v-bind:title="'支出/收入'"></el-radio>
              <el-radio label="储蓄比率" v-bind:title="'（收入-支出）/收入'"></el-radio>
            </el-radio-group>
          </div>
        </el-col>
      </el-row>
    </div><!--Line选择指标-->
    <hr>
    <div v-show="selectLine=='恩格尔系数'">
      <div v-if="selectLine=='恩格尔系数'">
        <h4><i class="el-icon-success"></i><b>&nbsp&nbsp在此期间, 您的{{selectLine}}每月变化情况如下</b></h4>
      </div>
      <div id="myEngelsLine" :style="{width: '600px', height: '450px'}"></div>
    </div>
    <div v-show="selectLine=='刚性比率'">
      <div v-if="selectLine=='刚性比率'">
        <h4><i class="el-icon-goods"></i><b>&nbsp&nbsp在此期间, 您的{{selectLine}}每月变化情况如下</b></h4>
      </div>
      <div id="myRigidLine" :style="{width: '600px', height: '450px'}"></div>
    </div>
    <div v-show="selectLine=='负债率'">
      <div v-if="selectLine=='负债率'">
        <h4><i class="el-icon-document"></i><b>&nbsp&nbsp在此期间, 您的{{selectLine}}每月变化情况如下</b></h4>
      </div>
      <div id="myLiabilityLine" :style="{width: '600px', height: '450px'}"></div>
    </div>
    <div v-show="selectLine=='偿债能力'">
      <div v-if="selectLine=='偿债能力'">
        <h4><i class="el-icon-info"></i><b>&nbsp&nbsp在此期间, 您的{{selectLine}}每月变化情况如下</b></h4>
      </div>
      <div id="mySolvencyLine" :style="{width: '600px', height: '450px'}"></div>
    </div>
    <div v-show="selectLine=='杠杆比率'">
      <div v-if="selectLine=='杠杆比率'">
        <h4><i class="el-icon-news"></i><b>&nbsp&nbsp在此期间, 您的{{selectLine}}每月变化情况如下</b></h4>
      </div>
      <div id="myLeverageLine" :style="{width: '600px', height: '450px'}"></div>
    </div>
    <div v-show="selectLine=='消费比率'">
      <div v-if="selectLine=='消费比率'">
        <h4><i class="el-icon-date"></i><b>&nbsp&nbsp在此期间, 您的{{selectLine}}每月变化情况如下</b></h4>
      </div>
      <div id="myConsumptionLine" :style="{width: '600px', height: '450px'}"></div>
    </div>
    <div v-show="selectLine=='储蓄比率'">
      <div v-if="selectLine=='储蓄比率'">
        <h4><i class="el-icon-date"></i><b>&nbsp&nbsp在此期间, 您的{{selectLine}}每月变化情况如下</b></h4>
      </div>
      <div id="mySavingLine" :style="{width: '600px', height: '450px'}"></div>
    </div>
  </div>
</template>


<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/line')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  //
  require('echarts/theme/macarons')
  require('echarts/theme/shine')

  export default {
    name: 'finlines',
    props:["username"],
    data() {
      return{
        selectLine:'恩格尔系数',
      }
    },
    props:['monthLineStart','monthLineEnd'],
    watch: {
      monthLineStart: function (newVal,oldVal){
        this.monthLineStart = newVal;
        this.getLines();
      },
      monthLineEnd: function (newVal,oldVal){
        this.monthLineEnd = newVal;
        this.getLines();
      },
    },
    mounted() {
      var lineData = {
        time: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月","9月","10月","11月","12月"],
        dataEngels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        dataRigid: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        dataLiability: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        dataSolvency: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        dataLeverageLine: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        dataConsumpt: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        dataSaving: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      };
      this.drawEngelsLine(lineData.time,lineData.dataEngels);
      this.drawRigidLine(lineData.time,lineData.dataRigid);
      this.drawLiabilityLine(lineData.time,lineData.dataLiability);
      this.drawSolvencyLine(lineData.time,lineData.dataSolvency);
      this.drawLeverageLine(lineData.time,lineData.dataLeverageLine);
      this.drawConsumptionLine(lineData.time,lineData.dataConsumpt);
      this.drawSavingLine(lineData.time,lineData.dataSaving);
    },
    methods: {
      //线图集合
      getLines(){
        console.log("趋势分析");
        let self = this;
        this.$axios.get('/profile/trendAnalysis',{
          params:{
            username:self.username,
            startMonth: this.monthLineStart,
            endMonth: this.monthLineEnd
          }
        })
          .then((response) => {
            console.log("success");
            console.log(response);
            //TODO to add the true data
            let lineData = {
              time: [],
              dataEngels: [],
              dataRigid: [],
              dataLiability: [],
              dataSolvency: [],
              dataLeverageLine: [],
              dataConsumpt: [],
              dataSaving: [],
            };

            for(let i of response.data){
              lineData.time.push(i.month);
              lineData.dataEngels.push(i.engel);
              lineData.dataRigid.push(i.rig_ratio);
              lineData.dataLiability.push(i.d2a_ratio);
              lineData.dataSolvency.push(i.dp_ability);
              lineData.dataLeverageLine.push(i.leverage);
              lineData.dataConsumpt.push(i.consump_ratio);
              lineData.dataSaving.push(i.saving_ratio);
            }
            console.log('趋势分析的数据如下:');
            console.log(lineData);

            this.drawEngelsLine(lineData.time,lineData.dataEngels);
            this.drawRigidLine(lineData.time,lineData.dataRigid);
            this.drawLiabilityLine(lineData.time,lineData.dataLiability);
            this.drawSolvencyLine(lineData.time,lineData.dataSolvency);
            this.drawLeverageLine(lineData.time,lineData.dataLeverageLine);
            this.drawConsumptionLine(lineData.time,lineData.dataConsumpt);
            this.drawSavingLine(lineData.time,lineData.dataSaving);
          })
          .catch((response) => {
            console.log(response);
            console.log("error");
          })

      },
      drawEngelsLine(time,lineData) {
        // 基于准备好的dom，初始化echarts实例
        let myEngelsLine = echarts.init(document.getElementById('myEngelsLine'))
        // 绘制图表
        myEngelsLine.setOption({
          // title: { text: '预测您第n个月内的可调整支出A(n)' },
          tooltip: {},
          xAxis: {
            name: '时间',
            type: 'category',
            data: time
          },
          yAxis: {
            name: '恩格尔系数',
            type: 'value'
          },
          series: [{
            name: '恩格尔系数',
            type: 'line',
            data: lineData,
            smooth: true
          }]
        });
      },
      drawRigidLine(time,lineData) {
        // 基于准备好的dom，初始化echarts实例
        let myRigidLine = echarts.init(document.getElementById('myRigidLine'))
        // 绘制图表
        myRigidLine.setOption({
          // title: { text: '预测您第n个月内的可调整支出A(n)' },
          tooltip: {},
          xAxis: {
            name: '时间',
            type: 'category',
            data: time
          },
          yAxis: {
            name: '刚性比率',
            type: 'value'
          },
          series: [{
            name: '刚性比率',
            type: 'line',
            data: lineData,
            smooth: true
          }]
        });
      },
      drawLiabilityLine(time,lineData) {
        // 基于准备好的dom，初始化echarts实例
        let myLiabilityLine = echarts.init(document.getElementById('myLiabilityLine'))
        // 绘制图表
        myLiabilityLine.setOption({
          // title: { text: '预测您第n个月内的可调整支出A(n)' },
          tooltip: {},
          xAxis: {
            name: '时间',
            type: 'category',
            data: time
          },
          yAxis: {
            name: '负债率',
            type: 'value'
          },
          series: [{
            name: '负债率',
            type: 'line',
            data: lineData,
            smooth: true
          }]
        });
      },
      drawSolvencyLine(time,lineData) {
        // 基于准备好的dom，初始化echarts实例
        let mySolvencyLine = echarts.init(document.getElementById('mySolvencyLine'))
        // 绘制图表
        mySolvencyLine.setOption({
          // title: { text: '预测您第n个月内的可调整支出A(n)' },
          tooltip: {},
          xAxis: {
            name: '时间',
            type: 'category',
            data: time
          },
          yAxis: {
            name: '偿债能力',
            type: 'value'
          },
          series: [{
            name: '偿债能力',
            type: 'line',
            data: lineData,
            smooth: true
          }]
        });
      },
      drawLeverageLine(time,lineData) {
        // 基于准备好的dom，初始化echarts实例
        let myLeverageLine = echarts.init(document.getElementById('myLeverageLine'))
        // 绘制图表
        myLeverageLine.setOption({
          // title: { text: '预测您第n个月内的可调整支出A(n)' },
          tooltip: {},
          xAxis: {
            name: '时间',
            type: 'category',
            data: time
          },
          yAxis: {
            name: '杠杆比率',
            type: 'value'
          },
          series: [{
            name: '杠杆比率',
            type: 'line',
            data: lineData,
            smooth: true
          }]
        });
      },
      drawConsumptionLine(time,lineData) {
        // 基于准备好的dom，初始化echarts实例
        let myConsumptionLine = echarts.init(document.getElementById('myConsumptionLine'))
        // 绘制图表
        myConsumptionLine.setOption({
          // title: { text: '预测您第n个月内的可调整支出A(n)' },
          tooltip: {},
          xAxis: {
            name: '时间',
            type: 'category',
            data: time
          },
          yAxis: {
            name: '消费比率',
            type: 'value'
          },
          series: [{
            name: '消费比率',
            type: 'line',
            data: lineData,
            smooth: true
          }]
        });
      },
      drawSavingLine(time,lineData) {
        // 基于准备好的dom，初始化echarts实例
        let mySavingLine = echarts.init(document.getElementById('mySavingLine'))
        // 绘制图表
        mySavingLine.setOption({
          // title: { text: '预测您第n个月内的可调整支出A(n)' },
          tooltip: {},
          xAxis: {
            name: '时间',
            type: 'category',
            data: time
          },
          yAxis: {
            name: '储蓄比率',
            type: 'value'
          },
          series: [{
            name: '储蓄比率',
            type: 'line',
            data: lineData,
            smooth: true
          }]
        });
      },

    },
  }
</script>

<style scoped>
  #line_template i{
    color: #409EFF;
  }

</style>
