<template>
  <div class="col-xs-12 col-md-12 back" :style="back" style="padding: 0;background-color: #fff;">
    <div style="width: 100%;float: top;">
      <navi></navi>
    </div>
    <div>
      <right-bar></right-bar>
    </div>
    <div style="margin: 20px 40px 20px 40px;">
      <el-row>
        <el-col span="16">
          <el-tabs type="border-card" style="margin-left:7%;"><!--左侧留白7%-->
            <el-tab-pane label="未成交">
              <div class="form">
              <el-form :inline="true" label-width="100px">
                <el-form-item label="标的分类" class="form_item">
                  <el-dropdown class="dropdown" @command="handleSmallCommand">
                    <el-button type="primary" plain>
                      购物<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="鞋帽服饰">鞋帽服饰</el-dropdown-item>
                      <el-dropdown-item command="生活用品">生活用品</el-dropdown-item>
                      <el-dropdown-item command="护肤美妆">护肤美妆</el-dropdown-item>
                      <el-dropdown-item command="游戏动漫">游戏动漫</el-dropdown-item>
                      <el-dropdown-item command="电子产品">电子产品</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                  <el-dropdown class="dropdown" @command="handleSmallCommand">
                    <el-button type="primary" plain>
                      学习<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown" >
                      <el-dropdown-item command="学习用品">学习用品</el-dropdown-item>
                      <el-dropdown-item command="书籍报刊">书籍报刊</el-dropdown-item>
                      <el-dropdown-item command="培训考证">培训考证</el-dropdown-item>
                      <el-dropdown-item command="校际交换">校际交换</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                  <el-dropdown class="dropdown" @command="handleSmallCommand">
                    <el-button type="primary" plain>
                      娱乐<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown" >
                      <el-dropdown-item command="聚餐轰趴">聚餐轰趴</el-dropdown-item>
                      <el-dropdown-item command="运动健身">运动健身</el-dropdown-item>
                      <el-dropdown-item command="观看演出">观看演出</el-dropdown-item>
                      <el-dropdown-item command="外出旅游">外出旅游</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                  <el-dropdown class="dropdown" @command="handleSmallCommand">
                    <el-button type="primary" plain>
                      医疗<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="诊断治疗">诊断治疗</el-dropdown-item>
                      <el-dropdown-item command="保健养生">保健养生</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                  <el-tag type="success" style="margin-left: 20px" v-show="this.fundUse !== []" >{{ fundUse[0] }}</el-tag>

                </el-form-item>
                <el-form-item label="用户信用等级" class="form_item">
                    <el-select v-model="smallUserRating" multiple placeholder="请选择">
                      <el-option
                        v-for="item in userOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                <el-form-item label="利率" class="form_item">
                    <input type="number" v-model="smallInterestDown" class="selectInput" style="width:70px;"/>
                    <p style="display: inline;margin-left:5px;margin-right:5px;">-</p>
                    <input type="number" v-model="smallInterestUp" class="selectInput" style="width:70px;"/>
                  </el-form-item>
                <el-form-item label="项目风险评级" class="form_item">
                    <el-select v-model="smallTargetRating" multiple placeholder="请选择">
                      <el-option
                        v-for="item in targetOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                <el-form-item label="投资金额" class="form_item">
                    <input type="number" v-model="smallInvestDown"  class="selectInput" style="width:100px;"/>
                    <p style="display: inline;margin-left:5px;margin-right:5px;">-</p>
                    <input type="number" v-model="smallInvestUp" class="selectInput" style="width:100px;"/>
                  </el-form-item>
                <el-form-item label="还款期限" class="form_item">
                  <input type="number" v-model="smallDayDown" class="selectInput" style="width:83px;"/>
                  <p style="display: inline;margin-left:5px;margin-right:5px;">-</p>
                  <input type="number" v-model="smallDayUp" class="selectInput" style="width:83px;"/>
                  <p style="display: inline;margin-left:5px;margin-right:5px;">天</p>
                </el-form-item>
                <el-form-item label="开始时间" class="form_item">
                  <el-date-picker
                    v-model="smallDateDown"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                  <p style="display: inline;margin-left:5px;margin-right:5px;">-</p>
                  <el-date-picker
                    v-model="smallDateUp"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                </el-form-item>
                <el-form-item style="width:60px;margin: auto;">
                  <el-button type="primary" @click="small_fil">过滤</el-button>
                </el-form-item>
              </el-form>
              </div>
              <div style="margin-top: 10px;">
                <el-radio-group v-model="value_radio">
                  <el-radio-button label="money" >标的金额</el-radio-button>
                  <el-radio-button label="target_rating_score">标的评价</el-radio-button>
                  <el-radio-button label="comletion_rate">标的完成度</el-radio-button>
                </el-radio-group>
                <div style="float: right;width: 170px;" @keydown.enter="search">
                  <el-input
                    placeholder="请输入内容"
                    v-model="content"
                    clearable>
                  </el-input>
                </div>
              </div>
              <invest-list
                v-for="item in investInformation"
                v-bind:investList="item"
                v-bind:key="item.id"
              ></invest-list>
              <div></div>
              <el-pagination style="width: 100px;margin: auto" @current-change="smallCurrentChange"
                layout="prev, pager, next" :current-page.sync="page"
                :page-size="size" :total="5">
              </el-pagination>
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col span="8">
          <el-card shadow="hover" style="margin-left: 10px;margin-right: 9%"><!--右侧留白9%-->
            <el-tabs>
              <el-tab-pane label="标的推荐" >
                <el-form label-position="right">
                  <el-form-item label="投资金额" class="form_item">
                    <input v-model="recommendInvestDown" type="number" class="selectInput" style="width:80px;"/>
                    <p style="display: inline;margin-left:5px;margin-right:5px;">-</p>
                    <input v-model="recommendInvestUp" type="number" class="selectInput" style="width:80px;"/>
                  </el-form-item>
                    <el-form-item label="利率范围" class="form_item">
                      <input v-model="recommendInterestDown" type="number" class="selectInput" style="width:70px;"/>
                      <p style="display: inline;margin-left:5px;margin-right:5px;">-</p>
                      <input v-model="recommendInterestUp" type="number" class="selectInput" style="width:70px;"/>
                    </el-form-item>
                  <el-form-item style="margin-top: 20px">
                    <template slot-scope="scope">
                      <router-link to="/recommend">
                        <el-button @click="recommend" type="primary">个性推荐</el-button>
                      </router-link>
                    </template>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
            </el-tabs>
            <el-tabs>
              <el-tab-pane label="标的比较" >
                <el-form :inline="true">
                  <el-form-item label="编号">
                    <el-input v-model="id1" placeholder="" style="width: 80px"></el-input>
                  </el-form-item>
                  <el-form-item label="编号" style="margin-left: 20px;">
                    <el-input v-model="id2" placeholder="" style="width: 80px"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <div id="myradar" style="width: 310px;height: 350px;margin-left:3%;"></div>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="compareTarget">
                      标的比较
                    </el-button>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="col-sm-12 col-md-12" style="float:bottom; padding:0;margin-top:100px;">
      <footerBar></footerBar>
    </div>
  </div>
</template>

<script>
  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue'
  import investList from '@/components/investList.vue'
  import ProjectList from "../components/projectList";
  import investList2 from "../components/investList2";

  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/radar')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')

  //引入主题
  require('echarts/theme/infographic')
  export default {
    name: "invest",
    components:{navi, footerBar, rightBar,investList,ProjectList,investList2},
    mounted: function(){
      let self = this;
      let small_data = {
        page: (self.page - 1),
        size: self.size,
        properties: 'money',
        money: [null, null],
        time: [null, null],
        interestRate: [null, null],
        repaymentDuration: [null, null],
        userCreditRating: self.smallUserRating == null? []:self.smallUserRating ,
        targetRating: self.smallTargetRating == null? []:self.smallTargetRating,
        useOfFunds: self.fundUse
      }

      this.$axios.post("/loan/smallTargetList",small_data )
        .then(res => {
          console.log(res)
          let invests = []
          for(let i of res.data) {
            invests.push({
              id: i.id,
              name: i.name,
              profit: (i.interestRate.toFixed(2) + "%"),
              money: i.money,
              remainMoney: (i.money-i.collectedMoney),
              type: i.classification,
              finishProgress: (i.collectedMoney* 1.0/i.money).toFixed(2) ,
              range: i.riskRating,
              beginTime: i.startTime,
            })
          }
          console.log(invests)
          self.investInformation = invests
        })
        .catch(e => {console.log(e)})
      this.drawRadar();
    },
    data: function(){
      return{
        /* 未成交数据*/
        investInformation: [
          // {id:"0001", beginTime:"2018.09.01", endTime:"2018.10.08", name:"AJ13熊猫", type:"SHOES", profit:"5.55%", money:"1800", remainMoney:"360", finishProgress:0.8,range:"AA"},
          // {id:"0002", beginTime:"2018.09.14", endTime:"2018.10.03", name:"炉石砰砰计划", type:"GAME", profit:"9.99%", money:"388", remainMoney:"88", finishProgress:0.7731,range:"AA"},
          // {id:"0003", beginTime:"2018.09.17", endTime:"2018.10.28", name:"国庆省内", type:"TRAVEL", profit:"6.73%", money:"2000", remainMoney:"400", finishProgress:0.8,range:"A"},
          // {id:"0004", beginTime:"2018.10.12", endTime:"2018.10.25", name:"托福考试", type:"EXAM", profit:"5.85%", money:"1800", remainMoney:"360", finishProgress:0.8,range:"A"},
          // {id:"0005", beginTime:"2018.10.15", endTime:"2018.11.20", name:"方大同演唱会", type:"CONCERT", profit:"7.67%", money:"1000", remainMoney:"470", finishProgress:0.53,range:"A"},
          // {id:"0006", beginTime:"2018.10.22", endTime:"2018.11.21", name:"d'zzit地素连衣裙", type:"CLOTH", profit:"7.06%", money:"1300", remainMoney:"741", finishProgress:0.43,range:"B"},
          // {id:"0007", beginTime:"2018.10.26", endTime:"2018.11.22", name:"预购", type:"GAME", profit:"6.45%", money:"1800", remainMoney:"1116", finishProgress:0.38,range:"B"},
          // {id:"0008", beginTime:"2018.10.30", endTime:"2018.11.23", name:"生活费周转", type:"TURNOVER", profit:"5.27%", money:"1000", remainMoney:"140", finishProgress:0.86,range:"C"},
          // {id:"0009", beginTime:"2018.11.03", endTime:"2018.12.01", name:"Chanel香水", type:"CONSMETIC", profit:"8.56%", money:"800", remainMoney:"320", finishProgress:0.6,range:"C"},
          ],

        /* 投资页面背景图片 */
        back:{
          backgroundImage:"url(" + require("../../static/pic/investListBack.jpg") + ")",
          backgroundRepeat:"no-repeat",
          backgroundAttachment:"fixed",
          backgroundSize:"100% auto",
          backgroundPosition: "0% 0%",
        },
        /*单选按钮默认值及样式*/
        value_radio: '标的金额',
        /*分类信息*/
        fundUse: [ '鞋帽服饰', '生活用品', '护肤美妆', '游戏动漫', '电子产品', '学习用品', '书籍报刊', '培训考证', '校际交换',
        '聚餐轰趴', '运动健身', '观看演出', '外出旅游', '诊断治疗', '保健养生'],
        fundUse2: [ '鞋帽服饰', '生活用品', '护肤美妆', '游戏动漫', '电子产品', '学习用品', '书籍报刊', '培训考证', '校际交换',
          '聚餐轰趴', '运动健身', '观看演出', '外出旅游', '诊断治疗', '保健养生'],
        /*选择信息*/
        userOptions: [
          { label: 'AA', value: 'AA'},
          { label: 'A', value: 'A'},
          { label: 'B', value: 'B'},
          { label: 'C', value: 'C'},
          { label: 'D', value: 'D'}
        ],
        targetOptions: [
          { label: 'A', value: 'A'},
          { label: 'B', value: 'B'},
          { label: 'C', value: 'C'},
          { label: 'D', value: 'D'}
        ],
        /*评级信息*/
        smallTargetRating: [],
        largeTargetRating: [],
        smallUserRating: [],
        largeUserRating: [],
        /*数字信息*/
        smallInterestDown: 0,
        smallInterestUp: 100,
        largeInterestDown: 0,
        largeInterestUp: 100,
        smallInvestDown: 0,
        smallInvestUp: 10000,
        largeInvestDown: 0,
        largeInvestUp: 0,
        smallDayDown: 0,
        smallDayUp: 100,
        largeDayDown: 0,
        largeDayUp: 0,
        smallDateDown: "",
        smallDateUp: "",
        largeDateDown: "",
        largeDateUp: "",
        /*pages*/
        page: 1,
        size: 10,
        /*标的比较*/
        target1: [0,0,0],
        target2: [0,0,0],
        /*标的推荐**/
        recommendInvestUp: 0,
        recommendInvestDown: 0,
        recommendInterestUp: 0,
        recommendInterestDown: 0,
        id1: 0,
        id2: 0,
        content: ""
      };
    },
    beforeCreate:function(){
      localStorage.route = "#invest";
    },
    methods:{
      search(){
        const self = this
        this.$axios.get("/loan/searchTarget",
          {
            params: {
              name : self.content
            }
          })
          .then(res => {
            console.log(res)
            let invests = []
            for(let i of res.data) {
              invests.push({
                id: i.id,
                name: i.name,
                profit: (i.interestRate.toFixed(2) + "%"),
                money: i.money,
                remainMoney: (i.money-i.collectedMoney),
                type: i.classification,
                finishProgress: (i.collectedMoney* 1.0/i.money).toFixed(2)  ,
                range: i.riskRating,
                beginTime: i.startTime,
              })
            }
            console.log(invests)
            self.investInformation = invests
          })
          .catch(e => {console.log(e)})
      },
      recommend() {
        const self =this
        console.log(self.recommendInvestDown)
        this.$router.push({
          name: 'recommend',
          params: {
            recommendInvestDown: self.recommendInvestDown,
            recommendInvestUp: self.recommendInvestUp,
            recommendInterestDown: self.recommendInterestDown,
            recommendInterestUp: self.recommendInterestUp
          }
        })


      },
      /*过滤*/
      smallCurrentChange() {
        let self = this;
        let small_data = {
          page: (self.page - 1),
          size: self.size,
          properties: 'money',
          money: [self.smallInvestDown, self.smallInvestUp],
          time: [self.smallDateDown, self.smallDateUp],
          interestRate: [self.smallInterestDown, self.smallInterestUp],
          repaymentDuration: [self.smallDayDown, self.smallDayUp],
          userCreditRating: self.smallUserRating == null? []:self.smallUserRating ,
          targetRating: self.smallTargetRating == null? []:self.smallTargetRating,
          useOfFunds: self.fundUse
        }
        this.$axios.post("/loan/smallTargetList",small_data )
          .then(res => {
            console.log(res)
            let invests = []
            for(let i of res.data) {
              invests.push({
                id: i.id,
                name: i.name,
                profit: (i.interestRate.toFixed(2) + "%"),
                money: i.money,
                remainMoney: (i.money-i.collectedMoney),
                type: i.classification,
                finishProgress:(i.collectedMoney* 1.0/i.money).toFixed(2)  ,
                range: i.riskRating,
                beginTime: i.startTime,
              })
            }
            console.log(invests)
            self.investInformation = invests
          })
          .catch(e => {console.log(e)})
      },
      small_fil() {
        let self = this;
        let small_data = {
          page: (self.page - 1),
          size: self.size,
          properties: 'money',
          money: [self.smallInvestDown, self.smallInvestUp],
          time: [self.smallDateDown, self.smallDateUp],
          interestRate: [self.smallInterestDown, self.smallInterestUp],
          repaymentDuration: [self.smallDayDown, self.smallDayUp],
          userCreditRating: self.smallUserRating == null? []:self.smallUserRating ,
          targetRating: self.smallTargetRating == null? []:self.smallTargetRating,
          useOfFunds: self.fundUse
        }
        console.log(self.value_radio)
        this.$axios.post("/loan/smallTargetList",small_data )
          .then(res => {
            console.log(res)
            let invests = []
            for(let i of res.data) {
              invests.push({
                id: i.id,
                name: i.name,
                profit: (i.interestRate.toFixed(2) + "%"),
                money: i.money,
                remainMoney: (i.money-i.collectedMoney),
                type: i.classification,
                finishProgress: (i.collectedMoney* 1.0/i.money).toFixed(2) ,
                range: i.riskRating,
                beginTime: i.startTime,
              })
            }
            console.log(invests)
            self.investInformation = invests
          })
          .catch(e => {console.log(e)})
      },
      handleIconClick() {

      },
      /*更改小分类*/
      handleSmallCommand(command) {
        this.fundUse = [];
        this.fundUse.push(command);
      },
      getRisk(risk) {
        switch (risk) {
          case 'A': return 1;
          case 'B': return 2;
          case 'C': return 3;
          case 'D': return 4;
        }

      },
      /*标的比较*/
      compareTarget() {
        const self = this;
        this.$axios.get("/loan/getTarget", {
          params: {
            id: self.id1
          }
        }).then(res=>{
          console.log(res)
          self.target1 = []
          self.target1.push(res.data.money)
          self.target1.push(self.getRisk(res.data.riskRating))
          self.target1.push(res.data.interestRate)
          self.drawRadar()

        }).catch(e=>{
          console.log(e)
        })
        this.$axios.get("/loan/getTarget", {
          params: {
            id: self.id2
          }
        }).then(res=>{
          console.log(res)
          self.target2 = []
          self.target2.push(res.data.money)
          self.target2.push(self.getRisk(res.data.riskRating))
          self.target2.push(res.data.interestRate)
          self.drawRadar()

        }).catch(e=>{
          console.log(e)
        })
      },
      /* 绘制雷达图*/
      drawRadar() {
        let myChart = echarts.init(document.getElementById('myradar'),'infographic')
        myChart.setOption({
          title: {
            text: '比较'
          },
          tooltip: {},
          legend: {
            data: ['A', 'B']
          },
          radar: {
            // shape: 'circle',
            name: {
              textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5],
              }
            },
            indicator: [
              { name: '金额', max: 5000},
              { name: '风险', max: 4},
              { name: '利率', max: 15}
            ]
          },
          series: [{
            name: '两个标的比较',
            type: 'radar',
            data : [
              {
                value : this.target1,
                name : 'A'
              },
              {
                value : this.target2,
                name : 'B'
              }
            ]
          }]
        });
      },
    }
  }
</script>

<style scoped>
  .selectInput{
    display: inline;
    width:70px;
    height:40px;
    border:1px solid #DCDEE0;
    color:#B6B7B8;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    text-align: center;
  }
  .dropdown {
    margin-left: 20px;
  }
  .form {
    padding-top: 20px;
    padding-left: 20px;
    border:0.5px #c7defa solid;
  }
  .form_item {
    margin-bottom: 14px;
  }
</style>
