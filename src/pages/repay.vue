<template>
  <personalCenter paneltitle="还款">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="项目信息" name="first">
        <div class="title2">基本信息</div>
        <div style="display: flex;padding-top: 20px">

          <el-card class="info1" v-model="info1" shadow="always" :class="info1" align="center">
            <p>项目名称</p>
            <span>{{this.targetName}}</span>
            <br><br>
            <p >发布日期</p>
            <span>{{info1.date1}}</span>
            <br><br>
            <p>截止日期</p>
            <span>{{info1.date2}}</span>
            <!--<br><br><br>
            <p>下个还款日</p>
            <span>{{info1.late_date}}</span>-->
          </el-card>

          <div style="display: flex" v-show="targetState === '正在进行' || targetState === '还款中'">
            <el-card class="main_info" v-model="info2" align="center" shadow="always">
            <div class="content">
              下个还款日 <span>{{info1.late_date}}</span>
            </div>
            <div class="content">
              距离下次还款日剩余<span>{{info2.days}}</span>天
            </div>
            <div class="content">
              下次应还： <span>{{info2.money}}</span>元
            </div>
            <el-button type="primary" style="margin-top: 20px" @click="repay">立即还款</el-button>
          </el-card>

            <el-card shadow="always" class="chart" align="center">
              <div style="margin-top: 20px;font-size: 18px;color: #6a6a6a">
                未还款占比：
              </div>

              <div style="margin-top: 40px;">
                <el-progress type="circle" :percentage=percentage width="110"></el-progress>
              </div>
            </el-card>
          </div>

          <div v-show="targetState === '已完成' || targetState === '违约'">
            <el-card class="main_info" v-model="info5" align="center" shadow="always">
              <div style="margin-top: 20px;font-size: 18px;color: #6a6a6a">
                已还款占比：
              </div>

              <div style="margin-top: 40px;">
                <el-progress type="circle" :percentage=info5.percentage width="110"></el-progress>
              </div>
            </el-card>

            <el-card class="main_info" align="center" shadow="always">
              <div v-show="isDefault === false">
                该项目没有违约记录！
              </div>

              <div v-show="isDefault === true">
                该项目存在违约记录，请及时处理!
              </div>
            </el-card>
          </div>

        </div>
        <hr>
        <div class="title2">项目概要</div>
        <div style="display: flex">
          <el-card v-model="info3" align="center" shadow="always" style="width: 320px;height: 300px;margin-top: 20px">
            <div class="title">
              资金用途
            </div>

            <div class="usage" style="margin-top: 50px">
              分类：{{info3.purpose}}
            </div>
            <div class="usage">
              详述：{{info3.projectDescription}}
            </div>

          </el-card>

          <el-card align="center" shadow="always" style="width: 450px;margin-left: 50px;margin-top: 20px" v-model="info4">
            <div class="title">
              关于贷款
            </div>

            <div class="usage" style="margin-top: 30px">拆借类型：{{info4.type}}</div>
            <div class="usage">年利率：{{info4.rate}}%</div>
            <div class="usage">待还款期数：{{info4.period}}</div>
            <div class="usage">待还本息：{{info4.remainMoney}}元</div>
            <div class="usage">披露层级：{{info4.layer}}</div>

          </el-card>

        </div>
      </el-tab-pane>
      <el-tab-pane label="还款分析" name="second">
        <div class="title2">还款方式</div>
        <div style="display: flex">
          <div align="center" style="margin-left: 120px;font-size: 25px;line-height: 100px" >
            <div>
              您当前的还款方式是： <span style="color: #409EFF">{{return_scheme.return_way}}</span>
            </div>
            <div>
              还款难度：<i v-for="n in return_scheme.difficulty" class="el-icon-star-on" style="color:#409EFF"></i>
            </div>

          </div>
          <div class="bubble">
            <div v-show="return_scheme.show === 1" style="font-size: 15px;">
              <p style="margin-top: 45px;margin-left: 70px">贷款数总额等分，每月的<br>还款本金额固定利息越来越少；</p>
              <p style="margin-left: 70px"> 起初还款压力较大，但是随着<br>时间的推移每月的还款数也越来<br> <span style="margin-left: 10px">越少</span>。</p>
            </div>

            <div v-show="return_scheme.show === 2" style="font-size: 15px;">
              <br>
              <p style="margin-top: 45px;margin-left: 70px">每月偿还等同数额的贷款；</p>
              <p style="margin-left: 70px"> 还款期限内压力平分，总利息<br>高于等额本金。</p>
            </div>

            <div v-show="return_scheme.show === 3" style="font-size: 15px;">
              <p style="margin-top: 45px;margin-left: 70px">贷款到期后一次性归还<br>本金和利息；</p>
              <p style="margin-left: 70px"> 还款期压力大，操作间大，借款<br>人资金调整弹性大，资金利用<br> <span style="margin-left: 8px">时间长</span></p>
            </div>

            <div v-show="return_scheme.show === 4" style="font-size: 15px;margin-left: 10px">
              <br>
              <p style="margin-top: 45px;margin-left: 70px">每月只需支付利息，期末<br>还清本金；</p>
              <p style="margin-left: 70px"> 资金利用时间长。</p>
            </div>

          </div>
        </div>
        <hr>
        <div class="title2">
          还款历史
        </div>
        <div>
          <timeLine :recordList="recordList"></timeLine>
        </div>
      </el-tab-pane>
      <el-tab-pane label="违约情况" name="third">
        <div style="font-size: 30px;margin-top: 140px;margin-left: 160px" v-show="this.isDefault === false">
          恭喜您，截止目前，您并未出现违约情况！
        </div>

        <div v-show="this.isDefault">
          <div style="font-size: 20px;margin: 20px">
            截止目前，您在本款项目中共产生了 <span style="font-size: 24px;color:#409EFF">2</span> 次违约情况.
          </div>
          <div style="margin-top: 50px">
            <el-table
              :data="tableData"
              border
              style="width: 100%"
             >
              <el-table-column
                prop="ID"
                label=""
                align="center"
                width="80"
                >
              </el-table-column>
              <el-table-column
                prop="return_date"
                label="应还日期"
                width="100"
                align="center">
              </el-table-column>
              <el-table-column
                prop="actual_date"
                label="实际还款日"
                width="150"
                align="center">
              </el-table-column>
              <el-table-column
                prop="return_money"
                label="当前应还金额"
                align="center"
                >
              </el-table-column>
              <el-table-column
                prop="days"
                label="逾期天数"
                align="center"
                >
              </el-table-column>
              <el-table-column
                prop="punish_money"
                label="违约金"
                align="center"
                >
              </el-table-column>
              <el-table-column
                prop="current_state"
                label="当前状态"
                align="center"
              >
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-tab-pane>

    </el-tabs>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";
  import InvestList from "../components/investList";
  import timeLine from "../components/timeLine";
  import ElCard from "element-ui/packages/card/src/main";

  export default {
    name:"repay",
    components: {ElCard, InvestList, personalCenter,timeLine},
    mounted:function(){
      console.log("repay");
      console.log(this.$route.params);
      this.targetId = this.$route.params.targetId;
      this.targetName = this.$route.params.targetName;
      console.log("targetId in repay:"+this.targetId);
      this.targetState = this.$route.params.targetState

      this.getRepayInfo();
    },
    data() {
      return {
        currentPeriod:0,
        targetState:'已完成',
        targetId:0,
        targetName:'',
        percentage:25,
        isDefault:true,
        info1:{
          name:'项目名称',
          date1:'2018-09-02',
          date2:'2018-09-16',

        },
        info2:{
          late_date:'2018-09-07',
          days:0,
          money:50
        },
        info3:{
          purpose:'',
          projectDescription:''
        },
        info4:{
          type:'',
          rate:'',
          period:'',
          remainMoney:'',
          layer:''
        },
        info5:{
          percentage:100,
          isShow:true
        },
        return_scheme:{
          return_way:'等额本金',
          difficulty:4,
          show:2
        },
        activeName: 'first',
        tableData:[{
          ID:'1',
          return_date:'2018/8/1',
          actual_date:'2018/8/4',
          return_money:'100',
          days:'3',
          punish_money:'10',
          current_state:'结束'
        },{
          ID:'2',
          return_date:'2018/7/1',
          actual_date:'2018/7/6',
          return_money:'200',
          days:'5',
          punish_money:'20',
          current_state:'待办'
      }],

        recordList:[{//time:刻度;normal:左边;overdue:右边
          state:'normal',
          date:'2018/3/27',
          money:100,
          period:1

        },{
          state:'time',
          date:'2018/4/1',
          money:0,
          period:0
        },{
          state:'time',
          date:'2018/5/1',
          money:0,
          period:0
        },{
          state:'overdue',
          date:'2018/5/1',
          money:'100',
          period:1
        },{
          state:'normal',
          date:'2018/5/7',
          money:200,
          period:2
        },{
          state:'time',
          date:'2018/6/1',
          money:0,
          period:0
        },{
          state:'normal',
          date:'2018/6/1',
          money:100,
          period:3
        }],
      }// end return
    },
    methods: {
      handleClick(tab, event) {

        console.log("activeName:"+this.activeName);
        if(this.activeName === "first"){
          this.getRepayInfo();
        }else if(this.activeName === "second"){
          this.getRepayAnalysis();
        }else if(this.activeName === "third"){
          this.getUnbelievable();
        }
      },

      getRepayInfo(){

        this.getRepayAnalysis();
        this.getUnbelievable();

        const self = this;
        this.$axios.get('/loan/repayment/info',
          {
            params:{
              targetId:this.targetId
            }
          }).then(
          function (response) {
            let res = response;
            console.log("data in repay info");
            console.log(res.data);


            self.info1.date2 = res.data.recruitmentDeadline;
            self.info1.late_date = res.data.nextDueDate;

            self.info2.date1 = res.data.releaseDate;
            self.info2.days = res.data.remainingDay;
            self.info2.money = res.data.repay;

            self.percentage = res.data.unrepaidProportion.toFixed(2);

            self.info3.purpose = res.data.purpose;
            self.info3.projectDescription = res.data.projectDescription;

            if(res.data.targetType === "SMALL"){
              self.info4.type = "小额借款";
            }else if(res.data.targetType === "LARGE"){
              self.info4.type = "大额借款";
            }

            self.info4.rate = res.data.interest.toFixed(2);
            self.info4.period = res.data.remainingPeriod;
            self.info4.remainMoney = res.data.remainingMoney;

            if(res.data.identityOption === "ONE"){
              self.info4.layer = "第一层级";
            }else if(res.data.identityOption === "ONE"){
              self.info4.layer = "第二层级";
            }else if(res.data.identityOption === "ONE"){
              self.info4.layer = "第三层级";
            }else if(res.data.identityOption === "ONE"){
              self.info4.layer = "第四层级";
            }

            self.info5.percentage = 100 - self.percentage;
            self.info5.isShow = self.isDefault;

          }
        ).catch(function (error) {
          console.log("error in  repay info");
          console.log(error);
        });
      },

      getRepayAnalysis(){

        const self = this;
        this.$axios.get('/loan/repayment/analysis',
          {
            params:{
              targetId:this.targetId
            }
          }).then(
          function (response) {
            let res = response;
            console.log("data in repay analysis");
            console.log(res.data);

            var data = res.data;

            self.currentPeriod = data.currentPeriod;
            console.log("currentPeriod:"+self.currentPeriod);

            if(data.repaymentType === "PRE_INTEREST"){
              self.return_scheme.return_way = "先息后本";
              self.return_scheme.show = 4;
            }else if(data.repaymentType === "EQUAL_PRINCIPAL"){
              self.return_scheme.return_way = "等额本金";
              self.return_scheme.show = 1;
            }else if(data.repaymentType === "EQUAL_INSTALLMENT_OF_PRINCIPAL_AND_INTEREST"){
              self.return_scheme.return_way = "等额本息";
              self.return_scheme.show = 2;
            }else if(data.repaymentType === "ONE_TIME_PAYMENT"){
              self.return_scheme.return_way = "一次性还本付息";
              self.return_scheme.show = 3;
            }

            if(data.difficulty >= 5){
              self.return_scheme.difficulty = 5;
            }else{
              self.return_scheme.difficulty = parseInt(data.difficulty);
            }

            self.recordList = [];
            for(var i = 0; i < data.timeline.length; i++){
              self.recordList.push({state:data.timeline[i].state, date:data.timeline[i].date,
                period:data.timeline[i].period, money:data.timeline[i].money,})
            }

          }
        ).catch(function (error) {
          console.log("error in  repay analysis");
          console.log(error);
        });
      },

      getUnbelievable(){
        const self = this;
        this.$axios.get('/loan/repayment/default',
          {
            params:{
              targetId:this.targetId
            }
          }).then(
          function (response) {
            let res = response;
            console.log("data in repay default");
            console.log(res.data);

            var data = res.data;
            if(data.length === 0){
              self.isDefault = false;
            }else{
              self.tableData = [];
              for(var i=0;i<data.length;i++){
                self.tableData.push({ID:i,return_date:data[i].repayDate,actual_date:data[i].actualDate,
                  return_money:data[i].currentAmmountDue,days:data[i].overDueDays,punish_money:data[i].overDueFine,
                  current_state:data[i].state});
              }
            }
          }
        ).catch(function (error) {
          console.log("error in  repay default");
          console.log(error);
        });
      },

      repay(){
        const self = this;
        var periods = this.currentPeriod ;

        this.$axios.get('/loan/repayment/repay',
          {
            params:{
              targetId:this.targetId,
              period:periods
            }
          }).then(
          function (response) {
            let res = response;
            console.log("data in repay");
            console.log(res.data);

            if(true){
              var now = new Date();
              var nowYear = now.getFullYear();
              var nowMonth = self.getCompleteNum(now.getMonth());
              var nowDate = self.getCompleteNum(now.getDate());
              var nowDate = nowYear+"-"+nowMonth+"-"+nowDate;
              alert("您已于"+nowDate+"成功还款"+self.info2.money+元);
            }

            self.getRepayInfo();

          }
        ).catch(function (error) {
          console.log("error in  repay");
          console.log(error);
        });
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

<style>

  .info1{
    /*padding-left: 45px;*/
    width: 200px;
    align-content: center;
  }

  .info1 span{
    color: #409EFF;
    font-size: 16px;
  }

  .main_info{
    width:350px;
    margin-left: 50px;
    /*padding-top: 20px;*/
  }

  .content{
    font-size: 20px;
    margin-top: 15px;
    font-family: "Adobe Caslon Pro Bold";
    color: #6628b0;
  }

  .content span{
    font-size: 30px;
    color: #409EFF;
  }

  .chart{
    margin-left: 50px;
    width: 170px;
  }

  .title{
    font-size: 22px;
    margin-top: 10px;
    color: #6c9ab7;
    font-family: "Adobe Caslon Pro";
    /*font-weight: bold;*/
  }

  .usage{
    font-size: 18px;
    margin-top: 10px;

  }

  .bubble{
    width: 300px;
    height: 200px;
    /*border:1px solid black;*/
    margin-left: -20px;
    margin-top: 20px;
    background-image: url("/static/pic/bubble.png");
    background-size: 110% 110%;
  }

  .title2{
    padding-top: 10px;
    font-size: 23px;
    color: #6a6a6a;
    padding-bottom: 10px;
  }

</style>

<style>
  .el-tabs__item{
    font-size: 18px !important;
  }

  #mainpanel { min-height: 500px !important}


</style>
