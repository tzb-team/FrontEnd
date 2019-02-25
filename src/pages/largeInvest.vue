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
        <el-col span="24">
          <el-tabs type="border-card" style="margin-left:7%;"><!--左侧留白7%-->
              <div class="form">
                <el-form :inline="true" label-width="100px">
                  <el-form-item label="标的分类">
                    <el-radio-group v-model="filter_radio">
                      <el-radio-button label="托福培训"></el-radio-button>
                      <el-radio-button label="交换生" ></el-radio-button>
                      <el-radio-button label="GMAT"></el-radio-button>
                      <el-radio-button label="IELTS"></el-radio-button>
                      <el-radio-button label="大额考证"></el-radio-button>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="用户信用等级" class="form_item">
                    <el-select v-model="largeUserRating" multiple placeholder="请选择">
                      <el-option
                        v-for="item in userOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="利率" class="form_item">
                    <input type="number" v-model="largeInterestDown" class="selectInput" style="width:70px;"/>
                    <p style="display: inline;margin-left:5px;margin-right:5px;">-</p>
                    <input type="number" v-model="largeInterestUp" class="selectInput" style="width:70px;"/>
                  </el-form-item>
                  <el-form-item label="项目风险评级" class="form_item">
                    <el-select v-model="largeTargetRating" multiple placeholder="请选择">
                      <el-option
                        v-for="item in targetOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="投资金额" class="form_item">
                    <input type="number" v-model="largeInvestDown"  class="selectInput" style="width:100px;"/>
                    <p style="display: inline;margin-left:5px;margin-right:5px;">-</p>
                    <input type="number" v-model="largeInvestUp" class="selectInput" style="width:100px;"/>
                  </el-form-item>
                  <el-form-item label="还款期限" class="form_item">
                    <input type="number" v-model="largeDayDown" class="selectInput" style="width:83px;"/>
                    <p style="display: inline;margin-left:5px;margin-right:5px;">-</p>
                    <input type="number" v-model="largeDayUp" class="selectInput" style="width:83px;"/>
                    <p style="display: inline;margin-left:5px;margin-right:5px;">天</p>
                  </el-form-item>
                  <el-form-item label="挂科数" class="form_item">
                    <input type="number" v-model="failSubjectDown" class="selectInput" style="width:83px;"/>
                    <p style="display: inline;margin-left:5px;margin-right:5px;">-</p>
                    <input type="number" v-model="failSubjectUp" class="selectInput" style="width:83px;"/>
                    <p style="display: inline;margin-left:5px;margin-right:5px;">天</p>
                  </el-form-item>
                  <el-form-item label="用户评分" class="form_item">
                    <input type="number" v-model="userRankingDown" class="selectInput" style="width:83px;"/>
                    <p style="display: inline;margin-left:5px;margin-right:5px;">-</p>
                    <input type="number" v-model="userRankingUp" class="selectInput" style="width:83px;"/>
                    <p style="display: inline;margin-left:5px;margin-right:5px;">天</p>
                  </el-form-item>
                  <el-form-item label="开始时间" class="form_item">
                    <el-date-picker
                      v-model="largeDateDown"
                      type="date"
                      placeholder="选择日期">
                    </el-date-picker>
                    <p style="display: inline;margin-left:5px;margin-right:5px;">-</p>
                    <el-date-picker
                      v-model="largeDateUp"
                      type="date"
                      placeholder="选择日期">
                    </el-date-picker>
                  </el-form-item>
                  <el-form-item style="width:60px;margin: auto;">
                    <el-button type="primary" @click="large_fil">过滤</el-button>
                  </el-form-item>
                </el-form>
              </div>
              <div style="margin-top: 10px;">
                <el-radio-group v-model="value_radio">
                  <el-radio-button label="money" >标的金额</el-radio-button>
                  <el-radio-button label="target_rating_score">标的评价</el-radio-button>
                </el-radio-group>
              </div>
              <invest-list
                v-for="item in investInformation"
                v-bind:investList="item"
                v-bind:key="item.id"
              ></invest-list>
            <el-pagination style="width: 100px;margin: auto" @current-change="largeCurrentChange"
                           layout="prev, pager, next" :current-page.sync="page"
                           :page-size="size" :total="5">
            </el-pagination>
          </el-tabs>
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
    mounted() {
      let self = this;
      let large_data = {
        page: (self.page - 1),
        size: self.size,
        properties: 'money',
        money: [self.largeInvestDown, self.largeInvestUp],
        time: [self.largeDateDown, self.largeDateUp],
        userFailedSubject: [self.failSubjectDown, self.failSubjectUp],
        userRankingRate: [self.userRankingDown, self.userRankingUp],
        interestRate: [self.largeInterestDown, self.largeInterestUp],
        repaymentDuration: [self.largeDayDown, self.largeDayUp],
        userCreditRating: self.largeUserRating == null? []:self.largeUserRating ,
        targetRating: self.largeTargetRating == null? []:self.largeTargetRating,
        useOfFunds: [self.filter_radio]
      }
      this.$axios.post("/loan/largeTargetList",large_data )
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
    data(){
      return{
        /* 未成交数据*/
        investInformation: [
        //   {id:"0001", beginTime:"2018.09.01", endTime:"2018.10.08", name:"AJ13熊猫", type:"SHOES", profit:"5.55%", money:"1800", remainMoney:"360", finishProgress:0.8,range:"AA"},
        //   {id:"0002", beginTime:"2018.09.14", endTime:"2018.10.03", name:"炉石砰砰计划", type:"GAME", profit:"9.99%", money:"388", remainMoney:"88", finishProgress:0.7731,range:"AA"},
        //   {id:"0003", beginTime:"2018.09.17", endTime:"2018.10.28", name:"国庆省内", type:"TRAVEL", profit:"6.73%", money:"2000", remainMoney:"400", finishProgress:0.8,range:"A"},
        //   {id:"0004", beginTime:"2018.10.12", endTime:"2018.10.25", name:"托福考试", type:"EXAM", profit:"5.85%", money:"1800", remainMoney:"360", finishProgress:0.8,range:"A"},
        //   {id:"0005", beginTime:"2018.10.15", endTime:"2018.11.20", name:"方大同演唱会", type:"CONCERT", profit:"7.67%", money:"1000", remainMoney:"470", finishProgress:0.53,range:"A"},
        //   {id:"0006", beginTime:"2018.10.22", endTime:"2018.11.21", name:"d'zzit地素连衣裙", type:"CLOTH", profit:"7.06%", money:"1300", remainMoney:"741", finishProgress:0.43,range:"B"},
        //   {id:"0007", beginTime:"2018.10.26", endTime:"2018.11.22", name:"预购", type:"GAME", profit:"6.45%", money:"1800", remainMoney:"1116", finishProgress:0.38,range:"B"},
        //   {id:"0008", beginTime:"2018.10.30", endTime:"2018.11.23", name:"生活费周转", type:"TURNOVER", profit:"5.27%", money:"1000", remainMoney:"140", finishProgress:0.86,range:"C"},
        //   {id:"0009", beginTime:"2018.11.03", endTime:"2018.12.01", name:"Chanel香水", type:"CONSMETIC", profit:"8.56%", money:"800", remainMoney:"320", finishProgress:0.6,range:"C"},
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
        filter_radio:'交换生',

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
        largeTargetRating: [],
        largeUserRating: [],

        failSubjectDown: 0,
        failSubjectUp: 10,
        userRankingDown: 0,
        userRankingUp: 100,
        /*pages*/
        page: 1,
        size: 10,
        /*数字信息*/
        largeInterestDown: 0,
        largeInterestUp: 100,
        largeInvestDown: 0,
        largeInvestUp: 10000,
        largeDayDown: 0,
        largeDayUp: 100,
        largeDateDown: null,
        largeDateUp: null,

      };
    },
    beforeCreate:function(){
      localStorage.route = "#invest";
    },
    methods:{
      large_fil() {
        let self = this;
        let large_data = {
          page: (self.page - 1),
          size: self.size,
          properties: 'money',
          money: [self.largeInvestDown, self.largeInvestUp],
          time: [self.largeDateDown, self.largeDateUp],
          interestRate: [self.largeInterestDown, self.largeInterestUp],
          userFailedSubject: [self.failSubjectDown, self.failSubjectUp],
          userRankingRate: [self.userRankingDown, self.userRankingUp],
          repaymentDuration: [self.largeDayDown, self.largeDayUp],
          userCreditRating: self.largeUserRating == null? []:self.largeUserRating ,
          targetRating: self.largeTargetRating == null? []:self.largeTargetRating,
          useOfFunds: [self.filter_radio]
        }
        console.log(large_data)
        this.$axios.post("/loan/largeTargetList",large_data )
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
                finishProgress:(i.collectedMoney* 1.0/i.money).toFixed(2) ,
                range: i.riskRating,
                beginTime: i.startTime,
              })
            }
            console.log(invests)
            self.investInformation = invests
          })
          .catch(e => {console.log(e)})
      },
      largeCurrentChange() {
        let self = this;
        let large_data = {
          page: (self.page - 1),
          size: self.size,
          properties: self.value_radio,
          money: [self.largeInvestDown, self.largeInvestUp],
          time: [self.largeDateDown, self.largeDateUp],
          userFailedSubject: [self.failSubjectDown, self.failSubjectUp],
          userRankingRate: [self.userRankingDown, self.userRankingUp],
          interestRate: [self.largeInterestDown, self.largeInterestUp],
          repaymentDuration: [self.largeDayDown, self.largeDayUp],
          userCreditRating: self.largeUserRating == null? []:self.largeUserRating ,
          targetRating: self.largeTargetRating == null? []:self.largeTargetRating,
          useOfFunds: [self.filter_radio]
        }
        this.$axios.post("/loan/largeTargetList",large_data )
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
  .form {
    padding-top: 20px;
    padding-left: 20px;
    border:0.5px #c7defa solid;
  }
</style>
