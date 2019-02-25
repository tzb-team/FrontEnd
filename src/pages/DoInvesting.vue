<template>
  <div id="Investing">
    <navi></navi>
    <rightBar></rightBar>
    <div>
      <img src="https://megsoftconsulting.com/wp-content/uploads/2016/04/web-design-packages-background.jpg" class="img-responsive gray" alt="Cinque Terre" style="opacity:0.7;top: 0;z-index: -1;width:100%;height:450px;position: absolute">
    </div>
    <div class="overview" style="padding: 60px 60px 40px 40px;font-size:18px;height: 400px">
      <el-row>
        <el-col :span="12">
          <div style="padding-left: 70px;padding-right: 70px">
          <div style="color: white;text-align: center">
            <span style="color: aquamarine;font-size: 60px">{{percentage}}</span><label>%已完成</label>
            <br/>
            <vm-progress :percentage="percentage" :text-inside="true" :stroke-width="18" strokeColor="info" :striped="true">.</vm-progress>
          </div>
            <br/>
            <br/>
          <el-row>
            <el-col :span="8">
              <div style="padding:0px 40px 0px 0px;text-align: center">
              <span class="keypoint">{{revenueRate}}</span><label class="small"> %</label><br/>
              <label class="small">预期年化收益率</label>
            </div></el-col>
            <el-col :span="8"> <div style="padding:0px 40px 0px 0px;text-align: center">
              <span class="keypoint">{{lifeOfLoan}}</span><br/>
              <label class="small">借款期限</label>
            </div></el-col>
            <el-col :span="8">   <div style="padding:0px 40px 0px 0px;text-align: center">
              <span class="keypoint">{{totalLoan}}</span><label class="small"> 元</label><br/>
              <label class="small">总额度</label>
            </div></el-col>
          </el-row>
          </div>
        </el-col>
        <el-col :span="12">
            <div style="color: white; " v-show="isShow">
              <countdown :time="leftTime">
                <template slot-scope="props">剩余时间：<span class="keypoint">{{ props.days }}</span> 天 <span class="keypoint">{{ props.hours }}</span> 小时 <span class="keypoint">{{ props.minutes }}</span> 分钟 <span class="keypoint">{{ props.seconds }}</span> 秒</template>
              </countdown>
              <!--<label>剩余时间：{{leftTime}}</label>-->
              <br>
              <label style="font-weight: normal">还需投资：{{leftNeeds}} 元</label>
              <br/>
              <!--<label style="font-weight: normal">您的余额为：{{userMoney}} 元</label>-->
              <br/>
              <br/>
              <label style="font-weight: normal">投资金额： </label>
              <div class="block">
                <el-slider
                  v-model="money"
                  :max="10000"
                  :format-tooltip="formatTooltip"
                  show-input>
                </el-slider>
              </div>
              <br/>
              <el-button type="primary" @click="invest()" round>我要投资</el-button>
            </div>
        </el-col>
      </el-row>
    </div>
    <div style="display:flex;min-height:800px;border: 1px solid lightgrey;">
      <div class="market_out" style="height:100%;width:100%;">
        <el-tabs :tab-position="tabPostion" style="height:100%;" @tab-click="handleClick" v-model="activeName">
          <el-tab-pane name="one" label="产品概要"
                        style="padding:60px 60px 10px 30px;font-size:18px;line-height: 30px;">
            <div style="display: flex;">
                <div style="padding:25px 70px;">
                  <div>
                    <img id="img" style="width: 400px;height: 300px;"/>
                  </div>
                  <label style="font-size:16px;font-style: oblique;text-align: center;font-weight: normal;color:grey">此图为用户上传的项目说明</label>
                  <br/>
                  <label>信用等级排序说明：</label>
                  <label class="level">AA</label>
                  <label>></label>
                  <label class="level">A</label>
                  <label >></label>
                  <label class="level">B</label>
                  <label>></label>
                  <label class="level">C</label>
                  <label>></label>
                  <label class="level">D</label>
                </div>
                <div style="padding:25px 70px;width:500px;">
                  <el-card class="box-card" style="width:430px;">
                    <div slot="header" class="clearfix">
                      <strong><span style="font-size: 20px;">借款项目简介</span></strong>
                    </div>
                    <div>
                      <div>还款方式：{{username}}</div>
                      <div>还款方式：{{payWay}}</div>
                      <div>借款用途：{{useWay}}</div>
                      <div>月还本息：{{monthInterest}}</div>
                      <div>到期需还本金：{{payAll}}</div>
                      <div>说明：在投资期限届满前，投资人{{PS}}转让，不可以赎回</div>
                    </div>
                    <hr/>
                    <div>
                      <label>用户信用评级：</label>
                      <label class="level">{{userLevel}}&nbsp;&nbsp;</label>
                      <label>项目风险评级:</label>
                      <label class="level">{{projectLevel}}</label>
                    </div>
                  </el-card>

                </div>

              </div>



          </el-tab-pane>
          <el-tab-pane name="two" label="借款人信息" style="padding:60px 60px 10px 30px;font-size:18px;line-height: 30px;">
            <doInvestingLoanerInfo :username="username"></doInvestingLoanerInfo>
          </el-tab-pane>
          <el-tab-pane name="three" label="投标记录" style="padding:80px 60px 10px 30px;font-size:18px;line-height: 30px;">
            <el-table
              :data="tableData"
              height="290"
              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="money"
                label="金额">
              </el-table-column>
            </el-table>
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
          isShow:true,
          activeName:'one',
          tableData:[
            /*{date: '2018-05-03',
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
            },*/
          ],
          userLevel:"",
          projectLevel:"",
          username:"",
          target_id:"723972",
          percentage:80,
          leftTime:2 * 24 * 60 * 60 * 1000,
          revenueRate:5.85,
          lifeOfLoan:"2年",
          totalLoan:8000,
          leftNeeds:1600,
          userMoney:1000,
          money: 1000,
          tabPostion:"left",
          DoInvest:"确认投资",
          payWay:"付息还本",
          useWay:"托福培训",
          monthInterest:  "180.32",
          payAll: "8000",
          PS: "不可以",

          //产品概要
          InvestInfo:"XXXXXXXXXXXX",
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
            // self.revenueRate = data.interestRate
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
            self.useWay = data.useWay
            self.monthInterest = data.monthInterest
            self.payAll = data.payAll
            self.PS = data.PS;
            self.username = data.username
            self.userLevel = data.userLevel
            self.projectLevel = data.projectLevel
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
        //点击左导航栏
        handleClick(tab, event) {
          if(tab.name==="two"){

          }else if(tab.name==="three"){
            if(this.tableData.length===0){
              //无数据则调用
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
    font-size: 20px;
    padding: 40px 20px 30px 20px;
    width:250px;
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




