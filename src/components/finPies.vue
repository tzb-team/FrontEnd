<template>
  <div id="pie_template">
    <div>
      <p>您选中了{{ monthPie }}</p>
    </div>
    <div>
      <el-row :gutter="20">
        <el-col :span="5">
          <span>请选择您所要查看的指标</span>
        </el-col>
        <el-col :span="19">
          <div id="selectPie_id">
            <el-radio-group v-model="selectPie" size="mini">
              <el-radio label="支出" v-bind:title="'支出'"></el-radio>
              <el-radio label="可调支出" v-bind:title="'可调支出'"></el-radio>
              <el-radio label="饮食支出" v-bind:title="'饮食支出'"></el-radio>
            </el-radio-group>
          </div>
        </el-col>
      </el-row>
    </div><!--Pie选择指标-->
    <hr/>
    <div v-show="selectPie=='支出' && user.outcome!=-1">
      <div v-if="selectPie=='支出'">
        <h4><i class="el-icon-success"></i><b>&nbsp&nbsp在此期间, 您的{{selectPie}}总额是 {{ user.outcome }} 元, 具体分布如下</b></h4>
      </div>
      <br/>
      <div id="myOutcomePie" :style="{width: '900px', height: '450px'}"></div>
    </div>
    <div v-show="selectPie=='可调支出' && user.adjust!=-1">
      <div v-if="selectPie=='可调支出'">
        <h4><i class="el-icon-tickets"></i><b>&nbsp&nbsp在此期间, 您的{{selectPie}}总额是 {{ user.adjust }} 元, 具体分布如下</b></h4>
      </div>
      <br/>
      <div id="myAdjustOutcomePie" :style="{width: '900px', height: '450px'}"></div>
    </div>
    <div v-show="selectPie=='饮食支出' && user.food!=-1">
      <div v-if="selectPie=='饮食支出'">
        <h4><i class="el-icon-time"></i><b>&nbsp&nbsp在此期间, 您的{{selectPie}}总额是 {{ user.food }}元, 具体分布如下</b></h4>
      </div>
      <br/>
      <div id="myFoodOutcomePie" :style="{width: '900px', height: '450px'}"></div>
    </div>
  </div>
</template>


<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/pie')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  //
  require('echarts/theme/macarons')
  require('echarts/theme/shine')

  export default {
    name: 'finpies',
    props:["username"],
    data() {
      return{
        user:{
          outcome: -1,
          adjust: -1,
          food: -1
        },
        selectPie: '支出',
      }
    },
    props:['monthPie'],
    watch: {
      monthPie: function (newVal,oldVal){
        this.monthPie = newVal;
        this.getPies();
      }
    },

    mounted() {
      var pieData = {
        data1:[
          {value:0, name:'日常'},
          {value:0, name:'学习'},
          {value:0, name:'饮食'},
          {value:0, name:'出行'},
          {value:0, name:'娱乐'},
        ],
        data2:[
          {value:0, name:'衣物'},
          {value:0, name:'饮食'},
          {value:0, name:'住宿'},
          {value:0, name:'娱乐'},
        ],
        data3:[
          {value:0, name:'食堂条数'},
          {value:0, name:'外卖单数'},
          {value:0, name:'外出次数'},
          {value:0, name:'零食数目'}
        ]
      };
      this.drawOutcomePie(pieData.data1);
      this.drawAdjustOutcomePie(pieData.data2);
      this.drawFoodOutcomePie(pieData.data3);
    },
    methods: {
      getPies() {
        console.log("比例分析");
        let self = this;
        this.$axios.get('/profile/proportionAnalysis',{
          params:{
            username:self.username,
            month: this.monthPie,
          }
        })
          .then((response) => {
            console.log("比例分析success");
            console.log(response);

            this.user.outcome = response.data.outcome;
            this.user.adjust = response.data.adjust;
            this.user.food = response.data.food;

            let pieData = {
              data1:[
                {value:0, name:'日常'},
                {value:0, name:'学习'},
                {value:0, name:'饮食'},
                {value:0, name:'出行'},
                {value:0, name:'娱乐'},
              ],
              data2:[
                {value:0, name:'衣物'},
                {value:0, name:'饮食'},
                {value:0, name:'住宿'},
                {value:0, name:'娱乐'},
              ],
              data3:[
                {value:0, name:'食堂'},
                {value:0, name:'外卖'},
                {value:0, name:'外出'},
                {value:0, name:'零食'}
              ]
            };

            let res = response.data.data1;
            pieData.data1[0].value = res.daily;
            pieData.data1[1].value = res.learning;
            pieData.data1[2].value = res.food;
            pieData.data1[3].value = res.travel;
            pieData.data1[4].value = res.fun;

            res = response.data.data2;
            pieData.data2[0].value = res.dress;
            pieData.data2[1].value = res.food;
            pieData.data2[2].value = res.fun;
            pieData.data2[3].value = res.hotel;

            res = response.data.data3;
            pieData.data3[0].value = res.schoolCanteen;
            pieData.data3[1].value = res.takeOut;
            pieData.data3[2].value = res.eatingOut;
            pieData.data3[3].value = res.snackAndFruit;

            console.log('比例分析数据');
            console.log(pieData);

            this.drawOutcomePie(pieData.data1);
            this.drawAdjustOutcomePie(pieData.data2);
            this.drawFoodOutcomePie(pieData.data3);

          })
          .catch((response) => {
            console.log(response);
            console.log("error");
          })
        var pieData = {
          data1:[
            {value:1501, name:'日常'},
            {value:482, name:'学习'},
            {value:1297, name:'饮食'},
            {value:211, name:'出行'},
            {value:509, name:'娱乐'},
          ],
          data2:[
            {value:566, name:'衣物'},
            {value:237, name:'饮食'},
            {value:143, name:'住宿'},
            {value:54, name:'娱乐'},
          ],
          data3:[
            {value:45, name:'食堂条数'},
            {value:17, name:'外卖单数'},
            {value:7, name:'外出次数'},
            {value:9, name:'零食数目'}
          ]
        };

      },
      //饼状图集合
      drawOutcomePie(Piedata) {
        // 基于准备好的dom，初始化echarts实例
        let myOutcomePie = echarts.init(document.getElementById('myOutcomePie'))
        // 绘制图表
        myOutcomePie.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data:['日常','学习','饮食','出行','娱乐']
          },
          series: [
            {
              name:'支出去向',
              type:'pie',
              radius: ['40%', '55%'],
              label: {
                normal: {
                  formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                  backgroundColor: '#eee',
                  borderColor: '#aaa',
                  borderWidth: 1,
                  borderRadius: 4,
                  // shadowBlur:3,
                  // shadowOffsetX: 2,
                  // shadowOffsetY: 2,
                  // shadowColor: '#999',
                  // padding: [0, 7],
                  rich: {
                    a: {
                      color: '#999',
                      lineHeight: 22,
                      align: 'center'
                    },
                    // abg: {
                    //     backgroundColor: '#333',
                    //     width: '100%',
                    //     align: 'right',
                    //     height: 22,
                    //     borderRadius: [4, 4, 0, 0]
                    // },
                    hr: {
                      borderColor: '#aaa',
                      width: '100%',
                      borderWidth: 0.5,
                      height: 0
                    },
                    b: {
                      fontSize: 16,
                      lineHeight: 33
                    },
                    per: {
                      color: '#eee',
                      backgroundColor: '#334455',
                      padding: [2, 4],
                      borderRadius: 2
                    }
                  }
                }
              },
              // data:[
              //   {value:1501, name:'日常'},
              //   {value:482, name:'学习'},
              //   {value:1297, name:'饮食'},
              //   {value:211, name:'出行'},
              //   {value:509, name:'娱乐'},
              // ]
              data: Piedata
            }
          ]
        });
      },
      drawAdjustOutcomePie(Piedata) {
        // 基于准备好的dom，初始化echarts实例
        let myOutcomePie = echarts.init(document.getElementById('myAdjustOutcomePie'),'shine')
        // 绘制图表
        myOutcomePie.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data:['衣物','饮食','住宿','娱乐']
          },
          series: [
            {
              name:'支出去向',
              type:'pie',
              radius: ['40%', '55%'],
              label: {
                normal: {
                  formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                  backgroundColor: '#eee',
                  borderColor: '#aaa',
                  borderWidth: 1,
                  borderRadius: 4,
                  // shadowBlur:3,
                  // shadowOffsetX: 2,
                  // shadowOffsetY: 2,
                  // shadowColor: '#999',
                  // padding: [0, 7],
                  rich: {
                    a: {
                      color: '#999',
                      lineHeight: 22,
                      align: 'center'
                    },
                    // abg: {
                    //     backgroundColor: '#333',
                    //     width: '100%',
                    //     align: 'right',
                    //     height: 22,
                    //     borderRadius: [4, 4, 0, 0]
                    // },
                    hr: {
                      borderColor: '#aaa',
                      width: '100%',
                      borderWidth: 0.5,
                      height: 0
                    },
                    b: {
                      fontSize: 16,
                      lineHeight: 33
                    },
                    per: {
                      color: '#eee',
                      backgroundColor: '#334455',
                      padding: [2, 4],
                      borderRadius: 2
                    }
                  }
                }
              },
              // data:[
              //   {value:566, name:'衣物'},
              //   {value:237, name:'饮食'},
              //   {value:143, name:'住宿'},
              //   {value:54, name:'娱乐'},
              // ]
              data: Piedata
            }
          ]
        });
      },
      drawFoodOutcomePie(Piedata,PieTimes) {
        // 基于准备好的dom，初始化echarts实例
        let myOutcomePie = echarts.init(document.getElementById('myFoodOutcomePie'),'macarons')
        // 绘制图表
        myOutcomePie.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data:['食堂','外卖','外出','零食']
          },
          series: [
            // {
            //   name:'支出条数',
            //   type:'pie',
            //   selectedMode: 'single',
            //   radius: [0, '30%'],
            //
            //   label: {
            //     normal: {
            //       position: 'inner'
            //     }
            //   },
            //   labelLine: {
            //     normal: {
            //       show: false
            //     }
            //   },
            //   data:[
            //     {value:45, name:'食堂条数'},
            //     {value:17, name:'外卖单数'},
            //     {value:7, name:'外出次数'},
            //     {value:9, name:'零食数目', selected:true}
            //   ]
            // },
            {
              name:'支出去向',
              type:'pie',
              radius: ['40%', '55%'],
              label: {
                normal: {
                  formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                  backgroundColor: '#eee',
                  borderColor: '#aaa',
                  borderWidth: 1,
                  borderRadius: 4,
                  // shadowBlur:3,
                  // shadowOffsetX: 2,
                  // shadowOffsetY: 2,
                  // shadowColor: '#999',
                  // padding: [0, 7],
                  rich: {
                    a: {
                      color: '#999',
                      lineHeight: 22,
                      align: 'center'
                    },
                    // abg: {
                    //     backgroundColor: '#333',
                    //     width: '100%',
                    //     align: 'right',
                    //     height: 22,
                    //     borderRadius: [4, 4, 0, 0]
                    // },
                    hr: {
                      borderColor: '#aaa',
                      width: '100%',
                      borderWidth: 0.5,
                      height: 0
                    },
                    b: {
                      fontSize: 16,
                      lineHeight: 33
                    },
                    per: {
                      color: '#eee',
                      backgroundColor: '#334455',
                      padding: [2, 4],
                      borderRadius: 2
                    }
                  }
                }
              },
              // data:[
              //   {value:589, name:'食堂'},
              //   {value:367, name:'外卖'},
              //   {value:140, name:'外出'},
              //   {value:201, name:'零食'},
              // ]
              data:Piedata             }
          ]
        });
      },

    },
  }
</script>

<style scoped>

  #pie_template i{
    color: #409EFF;
  }

</style>
