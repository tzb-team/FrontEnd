<template>
  <personalCenter paneltitle="账户总览">

    <div id="user_welcome">
      <el-row :gutter="20" id="welcome_top">
        <el-col :span="14">
          <div class="grid-content bg-purple wel_left">
            <br>
            <!--{{ hours }}-->
            <p class="wel_words" v-if="morning">早上好，{{realName}}</p>
            <p class="wel_words" v-if="afternoon">下午好，{{realName}}</p>
            <p class="wel_words" v-if="evening">晚上好，{{realName}}</p>
            <p class="wel_words wel_texts">欢迎进入个人中心</p>
            <br/>
            <!--<p> 最近回款时间：无</p>-->
          </div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content bg-purple wel_right">
            <br/>
            <br/>
            <br/>
            <br/>
            <!--<el-row>-->
              <!--<el-button type="primary" plain class="wel_right_btn">充值</el-button>-->
              <!--<el-button type="primary" plain class="wel_right_btn">提现</el-button>-->
            <!--</el-row>-->
            <!--<div class="wel_right_text">-->
              <!--<p>账户总额</p>-->
              <!--<p><b style="font-size: 28px">0</b> 元</p>-->
              <!--<p>可用余额：0元</p>-->
            <!--</div>-->
          </div>
        </el-col>
      </el-row>
    </div><hr/>
    <div id="user_overview">
      <h4><b>账户总览</b></h4>
      <br/>
      <div v-if="true"><!--是否校友-->
        <el-row :gutter="36">
          <el-col :span="6">
            <el-card shadow="always" class="mycard card_A">
              <p>投资总额</p>
              <span>{{ user.investAmount }}</span> 元
              <br/><br/><br/>
              <p>借款总额</p>
              <span>{{ user.loanAmount }}</span> 元
            </el-card>
          </el-col>
          <el-col :span="13">
            <el-card shadow="always" class="mycard card_B">
              <el-row :gutter="2">
                <el-col :span="8">
                  <el-progress type="circle" :percentage="user.captial.progress" :width="81"></el-progress>
                </el-col>
                <el-col :span="16">
                  <p>待收回本息 <span>{{ user.captial.amountToCover }}</span> 元</p>
                  <p>已收回 {{ user.captial.progress }}%</p>
                </el-col>
              </el-row>
            </el-card>
            <br/>
            <el-card shadow="always" class="mycard card_B">
              <el-row :gutter="2">
                <el-col :span="8">
                  <el-progress type="circle" :percentage="user.interest.progress" :width="81"></el-progress>
                </el-col>
                <el-col :span="16">
                  <p>待偿还本息 <span>{{ user.interest.amountToCove }}</span> 元</p>
                  <p>已偿还 {{ user.interest.progress }}%</p>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
          <el-col :span="5">
            <el-card shadow="always" class="mycard card_A">
              <p>信用评分</p>
              <span>{{ user.credit.points }}分</span>
              <br/><br/><br/>
              <p>信用等级</p>
              <span>{{ user.credit.level }}</span> 级
              <!--<p class="CreditJudge"><b>AA</b>级</p>-->
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div v-if="false"><!--是否校友-->
        <el-row :gutter="24">
          <el-col :span="6">
            <el-card shadow="always" class="mycard card_C">
              <p>投资总额</p>
              <span>{{ user.investAmount }}</span> 元
            </el-card>
          </el-col>
          <el-col :span="9">
            <el-card shadow="always" class="mycard card_B">
              <el-row :gutter="2">
                <el-col :span="8">
                  <el-progress type="circle" :percentage=user.captial.progress :width="81"></el-progress>
                </el-col>
                <el-col :span="16">
                  <p>待收回本息 <span>{{ user.captial.amountToCover }}</span> 元</p>
                  <p>已收回 {{ user.captial.progress }}%</p>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
          <el-col :span="9">
            <el-card shadow="always" class="mycard card_B">
              <el-row :gutter="2">
                <el-col :span="8">
                  <el-progress type="circle" :percentage=user.interest.progress :width="81"></el-progress>
                </el-col>
                <el-col :span="16">
                  <p>待偿还本息 <span>{{ user.interest.amountToCove }}</span> 元</p>
                  <p>已偿还 {{ user.captial.progress }}%</p>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <br/><br/>
    <div id="user_financial">
      <div style="margin-left: 10px; margin-right: 10px">
        <el-row :gutter="10" id="welcome_down">
          <el-col :span="6">
            <div class="grid-content bg-purple ov-content" style="text-align: center">
              <p>账户总额</p>
              <p><b style="font-size: 28px">{{ user.amountAll}}</b> 元</p>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple "></div>
          </el-col>
          <el-col :span="2.5">
            <div class="grid-content bg-purple ov-content">
              <p>账户余额&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <p><b style="font-size: 28px">{{ user.balance }}</b> 元</p>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content bg-purple ov-plus">
              <p>&nbsp;</p>+
            </div>
          </el-col>
          <el-col :span="2.5">
          <div class="grid-content bg-purple ov-content">
            <p>冻结金额&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p><b style="font-size: 28px">{{ user.accountFrozen }}</b> 元</p>
          </div>
        </el-col>
          <el-col :span="1">
            <div class="grid-content bg-purple ov-plus">
              <p>&nbsp;</p>+
            </div>
          </el-col>
          <el-col :span="2.5">
            <div class="grid-content bg-purple ov-content">
              <p>待回收本息</p>
              <p><b style="font-size: 28px">{{ user.interestToRecovered}}</b> 元</p>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content bg-purple ov-plus">
              <p>&nbsp;</p>+
            </div>
          </el-col>
          <el-col :span="2.5">
            <div class="grid-content bg-purple ">
              <p>招标中投资</p>
              <p><b style="font-size: 28px">{{ user.investmentTender }}</b> 元</p>
            </div>
          </el-col>

        </el-row>
      </div>
    </div>
    <hr/>
    <div id="user_calendar">
      <vue-event-calendar :events="demoEvents" title="提示"  @monthChanged="" @dayChanged=""></vue-event-calendar>
    </div>
    <hr/>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";

  export default {
    name:"userspace",
    components: {personalCenter},
    mounted: function() {
      this.getName();
      this.getOverview();
      this.getTodo();
    },
    methods:{
      getName(){
        const self = this;
        this.$axios.get('/citi/basic')
          .then(res=>{
            self.realName = res.data
          }).catch(e=>{
            console.log(e)
        })
      },
      getOverview(){
        // alert("用户总览");
        console.log("用户总览");
        let self = this;
        console.log("usernameTest:"+localStorage.username);
        this.$axios.get('/profile/investAndLoan',{
          params:{
            username:localStorage.username
          }
        })
          .then(function (response) {
            console.log(response);
            console.log("用户总览success");
            console.log(response.data);
            var res = response.data;
            self.user.investAmount = res.totalInvestment;
            self.user.loanAmount = res.totalLoan;
            self.user.captial.amountToCover = res.getMoney;
            self.user.captial.progress = res.getMoneyProgress;
            self.user.interest.amountToCove = res.payMoney;
            self.user.interest.progress = res.payMoneyProgress;
            self.user.credit.points = res.creditRatingScore;
            self.user.credit.level = res.creditRating;
            // alert("success");
            //todo Maybe some bugs? 账户总览
            // let regUser= {
            //   investAmount: 12869,
            //   loanAmount: 19857,
            //   captial:{
            //     amountToCover: '856',
            //     progress: 37
            //   },
            //   interest:{
            //     amountToCove: '7263.33',
            //     progress: 21
            //   },
            //   credit:{
            //     points: 91,
            //     level: 'AA'
            //   },
            //   amountAll: 4356,
            //   balance: 3500,
            //   accountFrozen: 0,
            //   interestToRecovered: 856,
            //   investmentTender: 0
            // }
            // //toDelete
            // self.user = regUser;
          })
          .catch(function (response) {
            console.log(response);
            // alert("error")
          });
        console.log("usernameTest:"+localStorage.username);
        this.$axios.get('/profile/totalAccount',{
          params:{
            username:localStorage.username
          }
        })
          .then(function (response) {
            console.log(response);
            console.log("totalAccount success");
            console.log(response.data);
            var res = response.data;
            self.user.amountAll = res.totalAccount;
            self.user.balance = res.balance;
            self.user.accountFrozen = res.frozenAmount;
            self.user.interestToRecovered = res.pendingPI;
            self.user.investmentTender = res.investmentInBidding;

            // let regUser= {
            //   investAmount: 12869,
            //   loanAmount: 19857,
            //   captial:{
            //     amountToCover: '856',
            //     progress: 37
            //   },
            //   interest:{
            //     amountToCove: '7263.33',
            //     progress: 21
            //   },
            //   credit:{
            //     points: 91,
            //     level: 'AA'
            //   },
            //   amountAll: 4356,
            //   balance: 3500,
            //   accountFrozen: 0,
            //   interestToRecovered: 856,
            //   investmentTender: 0
            // }
            // //toDelete
            // self.user = regUser;

            // alert("success");
          })
          .catch(function (response) {
            console.log(response);
            // alert("error")
          });


      },
      getTodo(){
        // alert("用户总览");
        console.log("用户总览");
        let self = this;
        console.log("usernameTest:"+localStorage.username);
        this.$axios.get('/profile/todo',{
          params:{
            username:localStorage.username
          }
        })
          .then(function (response) {
            console.log(response);
            console.log("Get TodoList success");
            console.log(response.data);
            // let res = [
            //   {
            //   date: '2018/10/1',
            //   title: '待还款',
            //   desc: '您还有一笔还款在10月1号'
            // }, {
            //   date: '2018/10/4',
            //   title: '待还款',
            //   desc: '您还有一笔还款在10月4号'
            // },{
            //   date: '2018/10/5',
            //   title: '待还款',
            //   desc: '您还有一笔还款在10月5号'
            // }, {
            //   date: '2018/10/7',
            //   title: '待还款',
            //   desc: '您还有一笔还款在10月7号'
            // }, {
            //   date: '2018/10/9',
            //   title: '待还款',
            //   desc: '您还有一笔还款在10月9号'
            // }, {
            //   date: '2018/10/11',
            //   title: '待还款',
            //   desc: '您还有一笔还款在10月11号'
            // }, {
            //   date: '2018/9/11',
            //   title: '已收款',
            //   desc: '您已在9月11日收款'
            // }, {
            //   date: '2018/9/9',
            //   title: '已收款',
            //   desc: '您已在9月9日收款'
            // }, {
            //   date: '2018/9/4',
            //   title: '已收款',
            //   desc: '您已在9月4日收款'
            // }, {
            //   date: '2018/9/5',
            //   title: '已收款',
            //   desc: '您已在9月5日收款'
            // }, {
            //   date: '2018/8/5',
            //   title: '已收款',
            //   desc: '您已在8月5日收款'
            // }, {
            //   date: '2018/7/5',
            //   title: '已收款',
            //   desc: '您已在7月5日收款'
            // }, ];
            let todoList = [];
            for(let i of response.data){
              todoList.push({
                date:i.date,
                title:i.title,
                desc:i.description
              });
            }
            self.demoEvents = todoList;

          })
          .catch(function (response) {
            console.log(response);
          });
      },
    },
    data () {
      var time = new Date();
      var hours = time.getHours();
      var morning = (hours<12) && (hours>=6);
      var afternoon = (hours>=12) && (hours<18);
      var evening = (hours>=18) || (hours<6);

      return {
        hours,
        morning,
        afternoon,
        evening,
        realName: '',
        user: {
          investAmount: 12869,
          loanAmount: 19857,
          captial:{
            amountToCover: '856',
            progress: 37
          },
          interest:{
            amountToCove: '7263.33',
            progress: 21
          },
          credit:{
            points: 91,
            level: 'AA'
          },
          amountAll: 4356,
          balance: 3500,
          accountFrozen: 0,
          interestToRecovered: 856,
          investmentTender: 0
        },
        demoEvents: [{
          date: '2018/10/1',
          title: '待还款',
          desc: '您还有一笔还款在10月1号'
        }, {
          date: '2018/10/4',
          title: '待还款',
          desc: '您还有一笔还款在10月4号'
        },{
          date: '2018/10/5',
          title: '待还款',
          desc: '您还有一笔还款在10月5号'
        }, {
          date: '2018/10/7',
          title: '待还款',
          desc: '您还有一笔还款在10月7号'
        }, {
          date: '2018/10/9',
          title: '待还款',
          desc: '您还有一笔还款在10月9号'
        }, {
          date: '2018/10/11',
          title: '待还款',
          desc: '您还有一笔还款在10月11号'
        }, {
          date: '2018/9/11',
          title: '已收款',
          desc: '您已在9月11日收款'
        }, {
          date: '2018/9/9',
          title: '已收款',
          desc: '您已在9月9日收款'
        }, {
          date: '2018/9/4',
          title: '已收款',
          desc: '您已在9月4日收款'
        }, {
          date: '2018/9/5',
          title: '已收款',
          desc: '您已在9月5日收款'
        }, {
          date: '2018/8/5',
          title: '已收款',
          desc: '您已在8月5日收款'
        }, {
          date: '2018/7/5',
          title: '已收款',
          desc: '您已在7月5日收款'
        }, ]
      }
    },
    beforeCreate: function () {
      localStorage.route="#userSpace";
    },
  }

</script>

<style scoped>

  .mycard{
    padding-left: 10px;
  }

  .mycard span{
    font-size: 24px;
  }

  .card_A {
    /*background-image: url("../../static/pic/card2.jpg");*/
    /*width: 249px;*/
    /*color: ghostwhite;*/
    height: 260px;
    color: #333333;

  }

  .card_A span{
    font-size: 34px;
    color: #409EFF;
  }

  .CreditJudge b{
    font-size: 72px;
    font-family: "Yu Gothic Light";
    color: #409EFF;
  }


  .card_B {
    /*background-image: url("../../static/pic/card2.jpg");*/
    /*width: 249px;*/
    height: 120px;
    color: #333333;
  }

  .card_C {
    height: 120px;
    color: #333333;
  }

  .card_C span{
    font-size: 34px;
    color: #409EFF;
  }


  .bg-purple {
    /*background: ghostwhite;*/
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .wel_words{
    font-size: 36px;
    color: dodgerblue;
  }

  .wel_texts{
    color: black;
  }

  .wel_right{
    text-align: right;
  }

  .wel_right_btn{
    color: #333333;
    font-size: 24px;
    background: white;
    padding-left: 40px;
    padding-right: 40px;
    border: 1px solid #333333;
  }

  .wel_right_text{
    font-size: 16px;
  }

  #welcome_down{
    border-top: 1px solid #333333;
    border-bottom: 1px solid #333333;
    padding-top: 12px;
  }

  .ov-plus{
    color: #333333;
    font-size: 16px;
  }

  .ov-content{
    color: #333333;
  }

</style>

<style>
  .__vev_calendar-wrapper .events-wrapper {
    background-color: #ecffff !important;
  }
  .__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item .is-event {
    border: 1px solid #409EFF !important;
  }

  .__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item.selected-day .is-event{
    background-color: #409eff !important;
    color: azure !important;
  }

  .__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item.selected-day .is-event>p{
    color: azure !important;
  }

  .__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item .is-today {
    background-color: #409eff !important;
  }

  .__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item.event p{
    color: #409eff !important;
  }

  .__vev_calendar-wrapper .events-wrapper .event-item .time {
    display: none !important;
  }

  .__vev_calendar-wrapper .events-wrapper .date {
    background-color: #409eff !important;
  }

  .__vev_calendar-wrapper .cal-wrapper {
    padding: 30px 30px !important;
  }

  .__vev_calendar-wrapper .cal-wrapper .cal-body .weeks {
    font-size: 1.5rem !important;
  }

  .__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item .date-num {
    font-size: 1.5rem !important;
  }

  .__vev_calendar-wrapper .events-wrapper {
    padding: 20px 45px !important;
  }

</style>

<style>
  #leftOV { color: dodgerblue !important}
</style>


