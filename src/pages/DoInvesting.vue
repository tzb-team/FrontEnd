Author: SDJ
Date: 2019/3/1

<template>
  <div id="Investing">
    <navi></navi>
    <rightBar></rightBar>
    <!-- 顶部图片 -->
    <!-- <div>
      <img src="https://megsoftconsulting.com/wp-content/uploads/2016/04/web-design-packages-background.jpg" class="img-responsive gray" alt="Cinque Terre" style="opacity:0.7;top: 0;z-index: -1;width:100%;height:450px;position: absolute">
    </div> -->


    

    <div style="min-height:800px;border: 1px solid lightgrey;">
      
      <!-- 专利展示栏目 -->
      <div style="padding:60px 60px 10px 30px;font-size:18px;line-height: 30px;">
        <div style="display: flex;">
          <!-- 图片 标题 -->
          <div style="padding:0px 50px;width:40%">
            <h1 style="font-weight:bold">佛山邦信知识产权代理商标专利版权注册</h1>
            <div>
              <img id="img" style="width: 400px;height: 300px;"/>
            </div>
            <label style="font-size:16px;font-style: oblique;text-align: center;font-weight: normal;color:grey">此图为用户上传的项目说明</label>
            <br/>
          </div>
           <!-- 基本信息 购买栏目  -->
          <div style="padding:25px 70px;width:60%;">
            <el-card class="box-card" style="width:550px;">
              <div slot="header" class="clearfix">
                <strong><span style="font-size: 20px;">专利简介</span></strong>
              </div>
              <div>
                <div>专利ID：{{patentID}}</div>
                <div>专利持有人：{{username}}</div>
                <div>专利概要：{{patentInfo}}</div>
              </div>
              <hr/>
            </el-card>
            <br/>
            <div>
              <countdown :time="leftTime">
                <template slot-scope="props">剩余时间：<span class="keypoint">{{ props.days }}</span> 天 <span class="keypoint">{{ props.hours }}</span> 小时 <span class="keypoint">{{ props.minutes }}</span> 分钟 <span class="keypoint">{{ props.seconds }}</span> 秒</template>
              </countdown>
              <label>剩余时间：{{leftTime}}</label><br/><br/>
              <el-input-number v-model="buyNum" @change="handleNumChange" :min="1" :max="10" label="描述文字"></el-input-number>&nbsp;&nbsp;&nbsp;
              <el-button type="primary" @click="invest()" round>我要投资</el-button>
            </div>
            
            
          </div>

        </div>
      </div>
        
      <!-- 专利相关详情栏目 -->
      <div class="market_out" style="display:flex;height:100%;width:100%;padding:50px">
        <!-- 店铺 -->
        <el-card class="box-card" style="width:300px;padding:20px;margin-right:30px">
          <div slot="header" class="clearfix">
            <strong><span style="font-size: 20px;">推荐专利</span></strong>
            </div>
            <div>
              <div>专利ID：{{patentID}}</div>
              <div>专利持有人：{{username}}</div>
              <div>专利概要：{{patentInfo}}</div>
            </div>
          <hr/>
        </el-card>

        <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick" style="width:1200px">

          <el-tab-pane name="one" label="专利详情" class="overview" style="padding: 60px 60px 40px 40px;font-size:18px;height: 400px;">
            <div style="padding:20px">
              <h1>专利详情：</h1><hr>
              <div>{{patentInfo}}</div>
            </div>
          </el-tab-pane>

          <el-tab-pane name="two" label="专利持有人信息" style="padding:30px 30px 30px 30px;font-size:18px;line-height: 30px;">
            <doInvestingLoanerInfo :username="username"></doInvestingLoanerInfo>
          </el-tab-pane>
           
        </el-tabs>
      </div>

    </div>


    <footerBar></footerBar>
  </div>
</template>

<script>
    import navi from '@/components/navi.vue';
    import rightBar from '@/components/rightBar.vue';
    import doInvestingLoanerInfo from '@/components/doInvestingLoanerInfo.vue';
    import footerBar from '@/components/footerBar.vue';
    import LoanInformationPane from "../components/LoanInformationPane"
    export default {
      name: "DoInvesting",
      components:{navi,rightBar,doInvestingLoanerInfo,footerBar,LoanInformationPane},
      data(){
        return{
          buyNum:1,//购买个数
          isShow:true,
          activeName:'one',
          tableData:[
            {date: '2018-05-03',
            name: '陈文博',
            money: '5000'
            },
            {date: '2018-06-13',
              name: '罗子俊',
              money: '500'
            },
            {date: '2018-08-08',
              name: '付贺然',
              money: '100'
            },
            {date: '2018-08-20',
              name: '吴欣怡',
              money: '400'
            },
            {date: '2018-08-29',
              name: '王刚',
              money: '400'
            },
          ],
          // userLevel:"",
          // projectLevel:"",
          username:"Mike丁",
          target_id:"723972",
          percentage:80,
          leftTime:2 * 24 * 60 * 60 * 1000,
          lifeOfLoan:"2年",
          totalLoan:8000,
          leftNeeds:1600,
          userMoney:1000,
          money: 1000,
          DoInvest:"确认投资",

          //产品详细信息
          patentInfo:"XXXXXXXXXXXX",
        }
      },
      mounted: function () {
        this.target_id = this.$route.params.id;
        this.isShow = this.$route.params.isShow;
        console.log("this.isShow:"+this.isShow);
        console.log(this.$route.params);
        //console.log("in mount:")
        //console.log(this.target_id)
        //console.log("detail:")
        this.getInvestmentDetail(Number(this.target_id))
      },
      methods: {
        invest: function (){
          let self = this;
          this.$confirm('您真的要投资吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            self.$axios.get('/loan/investment/target',{
              params:{
                targetId : parseInt(self.target_id),
                money: self.money
              }
            }).then(function (response) {
              var data = response.data
              //console.log("data:")
              //console.log(data)
              if(data.success){
                self.$message({
                  message:'投资成功！',
                  type:'success',
                });
                self.getInvestmentDetail(Number(self.target_id))
              }else {
                self.$message({
                  message: data.message,
                  type: 'error',
                });
              }
            }).catch(function (error) {
              console.log(error)
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消投资'
            });
          });
        },
        getInvestmentDetail(id){
          var self = this;
          this.$axios.get('/loan/details',{
            params:{
              targetId : parseInt(id)
            }
          }).then(function (response) {
            //console.log("response:")
            var data = response.data
            //console.log(data)
            
            self.percentage = (data.progress * 100).toFixed(2);
            self.leftTime = data.leftDays * 24 * 60 * 60 * 1000;
            self.lifeOfLoan = data.lifeOfLoan
            self.totalLoan = data.totalLoan
            self.leftNeeds = data.leftNeeds
            //  userMoney:1000,
            //  num1: 1000,
            switch (data.payWay) {
              case "EQUAL_PRINCIPAL": self.payWay = '等额本金'; break;
              case "EQUAL_INSTALLMENT_OF_PRINCIPAL_AND_INTEREST": self.payWay = '等额本息'; break;
              case "ONE_TIME_PAYMENT": self.payWay = '一次性还付本息'; break;
              case "PRE_INTEREST": self.payWay = '先息后本'; break;

            }
            // self.useWay = data.useWay
            self.monthInterest = data.monthInterest
            self.payAll = data.payAll
            // self.PS = data.PS;
            self.username = data.username
            // self.userLevel = data.userLevel
            // self.projectLevel = data.projectLevel
            document.getElementById("img").src=data.picPath
            //console.log(data)
          }).catch(function (error) {
            console.log(error)
          });
        },
        formatTooltip(val) {
          return val;
        },
        handleChange(value) {
          console.log(value);
        },
        handleNumChange(value){
          buyNum = value
        },
        handleClick(tab,event) {
          if(tab.name==="two"){
            
          }else if(tab.name==="3"){
            var _this = this;
              this.$axios.get('/loan/investmentRecord', {
                params: {
                  targetId:parseInt(_this.target_id)
                }
              }).then(function (response) {
                //console.log("invest record:")
                var data = response.data
                //console.log(data)
                for(var i=0;i<data.length;i++){
                  _this.tableData.push({date:data[i].date,name:data[i].name,money:data[i].money})
                }

              }).catch(function (error) {
                console.log("error:")
                console.log(error)
              });
          }
        }
      }
    }
</script>

<style scoped>
  .keypoint{
    font-size:40px;
    color: aquamarine;
  }
  .market_out{
    word-wrap: break-word;
    word-break: normal;
  }
  .level{
    font-size: 30px;color:deepskyblue;
    font-style:oblique;
    font-family:"Times New Roman";
  }
</style>
<style scoped>
  .market_out >>> .el-tabs__item{
    font-size: 80px;
    padding: 10px 20px 40px 30px;
    width:170px;
    height: 50px;
    text-align: left;
  }
  .gray {
    -webkit-filter: brightness(200%);
    filter: brightness(200%);
  }
  .small {
    color: white;
    font-size: 15px
  }






  @-webkit-keyframes sheen {
    0% {
      -webkit-transform: skewY(-45deg) translateX(0);
      transform: skewY(-45deg) translateX(0);
    }
    100% {
      -webkit-transform: skewY(-45deg) translateX(12.5em);
      transform: skewY(-45deg) translateX(12.5em);
    }
  }
  @keyframes sheen {
    0% {
      -webkit-transform: skewY(-45deg) translateX(0);
      transform: skewY(-45deg) translateX(0);
    }
    100% {
      -webkit-transform: skewY(-45deg) translateX(12.5em);
      transform: skewY(-45deg) translateX(12.5em);
    }
  }
  .wrapper {
    display: block;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .button {
    padding: 0.5em 1.5em;
    text-align: center;
    text-decoration: none;
    color: #2194E0;
    border: 2px solid #2194E0;
    font-size: 18px;
    display: inline-block;
    border-radius: 0.3em;
    transition: all 0.2s ease-in-out;
    position: relative;
    overflow: hidden;
  }
  .button:before {
    content: "";
    background-color: rgba(255, 255, 255, 0.5);
    height: 100%;
    width: 3em;
    display: block;
    position: absolute;
    top: 0;
    left: -4.5em;
    -webkit-transform: skewX(-45deg) translateX(0);
    transform: skewX(-45deg) translateX(0);
    transition: none;
  }
  .button:hover {
    background-color: #2194E0;
    color: #fff;
    border-bottom: 4px solid #1977b5;
  }
  .button:hover:before {
    -webkit-transform: skewX(-45deg) translateX(13.5em);
    transform: skewX(-45deg) translateX(13.5em);
    transition: all 0.5s ease-in-out;
  }


</style>
<!--<style lang="scss" scoped>

  @import '../scss/element-variables.scss';

</style>-->
<!--
<style>
  .ruzhu-mess .el-form-item__label{
    font-size:16px!important;
  }
  .zhuanye-mess .el-form-item__label,.zhuanye-mess .color-t{
    font-size:16px!important;
    color:#606266;
  }
</style>
<style lang="scss" scoped>

  @import '../../../assets/scss/pages/organizationUserCenter1.scss';

</style>
-->




