<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="正在进行" name="first">
        <loanTopBar v-on:getConditionEvent="getCondition"></loanTopBar>

        <div class="projectPanel">
          <div class="projectPages">
            <el-table
              :data="tableDataUnderway"
              stripe
              style="width: 100%">
              <el-table-column
                prop="projectName"
                align="center"
                label="项目名称">
              </el-table-column>
              <el-table-column
                prop="loanFrom"
                align="center"
                label="借款人">
              </el-table-column>
              <el-table-column
                prop="loanDate"
                align="center"
                label="项目日期">
              </el-table-column>
              <el-table-column
                prop="investAmount"
                align="center"
                label="投标金额(元)">
              </el-table-column>
              <el-table-column
                prop="deadline"
                align="center"
                label="期限">
              </el-table-column>
              <el-table-column
                prop="interest"
                align="center"
                label="利率">
              </el-table-column>
              <el-table-column
                prop="repayAmountMonth"
                align="center"
                label="每月还款金额">
              </el-table-column>
              <el-table-column
                prop="deadlineDate"
                align="center"
                label="到期还款日期">
              </el-table-column>
              <el-table-column
                prop="deadlineAmount"
                align="center"
                label="到期还款总金额(元)">
              </el-table-column>
              <el-table-column
                prop="state"
                align="center"
                label="状态">
              </el-table-column>
              <el-table-column label="查看详情" align="center">

                <template slot-scope="scope">
                  <el-button size="mini" @click="goTODoingInvestin(scope.row.targetId,true)">查看详情</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="完成项目" name="second">
        <loanTopBar v-on:getConditionEvent="getCondition"></loanTopBar>
        <div class="projectPanel">
          <div class="projectPages">
            <el-table
              :data="tableDataDone"
              stripe
              style="width: 100%">
              <el-table-column
                prop="projectName"
                align="center"
                label="项目名称">
              </el-table-column>
              <el-table-column
                prop="loanFrom"
                align="center"
                label="借款人">
              </el-table-column>
              <el-table-column
                prop="startEndDate"
                label="筹资起止日期"
                align="center"
                width="160">
              </el-table-column>
              <el-table-column
                prop="investAmount"
                align="center"
                label="可投标金额">
              </el-table-column>
              <el-table-column
                prop="interest"
                align="center"
                label="预计年收益率">
              </el-table-column>
              <el-table-column
                prop="state"
                align="center"
                label="状态">
              </el-table-column>
              <el-table-column
                prop="get"
                align="center"
                label="项目收益额(元)">
              </el-table-column>
              <el-table-column label="查看详情" align="center">
                <template slot-scope="scope">
                  <el-button size="mini" @click="goTODoingInvestin(scope.row.targetId,false)">查看详情</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>

        </div>
      </el-tab-pane>
      <!--<el-tab-pane label="收藏项目" name="third">

        <div class="projectPanel">
          <div class="projectPages">
            <el-table
              :data="tableDataFavorite"
              stripe
              :default-sort = "{prop: '', order: 'descending'}"
              style="width: 100%">
              <el-table-column
                sortable
                align="center"
                prop="projectName"
                label="项目名称">
              </el-table-column>
              <el-table-column
                sortable
                align="center"
                prop="loanFrom"
                label="借款人">
              </el-table-column>
              <el-table-column
                sortable
                align="center"
                prop="investAmount"
                label="可投金额(元)">
              </el-table-column>
              <el-table-column
                sortable
                prop="startEndDate"
                label="筹资截止日期">
              </el-table-column>
              <el-table-column
                sortable
                align="center"
                prop="interest"
                label="预计年收益率">
              </el-table-column>
              <el-table-column
                sortable
                align="center"
                prop="months"
                label="还款期限(月)">
              </el-table-column>
              <el-table-column
                sortable
                align="center"
                prop="state"
                label="状态">
              </el-table-column>
              <el-table-column
                sortable
                align="center"
                prop="trust"
                label="借款人信用分">
              </el-table-column>
              <el-table-column label="查看详情" align="center">
                <template slot-scope="scope">
                  <el-button size="mini"><a href="DoInvesting.vue">查看详情</a></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-tab-pane>-->
      <el-tab-pane label="坏账记录" name="fourth">
        <div class="ChooseBar">
          <el-form v-model="bad_form">
            <el-form-item label="损失金额">
              <el-radio-group v-model="bad_form.money">
                <el-radio-button label="全部"></el-radio-button>
                <el-radio-button label="50以下"></el-radio-button>
                <el-radio-button label="100-500"></el-radio-button>
                <el-radio-button label="500以上"></el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="项目状态">
              <el-radio-group v-model="bad_form.state">
                <el-radio-button label="全部"></el-radio-button>
                <el-radio-button label="正在追回"></el-radio-button>
                <el-radio-button label="已结束"></el-radio-button>
              </el-radio-group>
            </el-form-item>
          </el-form>
          <hr>
        </div>
        <div class="projectPanel">
          <div class="projectPages">
            <el-table
              :data="tableDataBad"
              stripe
              style="width: 100%">
              <el-table-column
                prop="projectName"
                align="center"
                label="项目名称">
              </el-table-column>
              <el-table-column
                prop="loanFrom"
                align="center"
                label="借款人">
              </el-table-column>
              <el-table-column
                prop="badStartDate"
                align="center"
                label="坏账发生日期">
              </el-table-column>
              <el-table-column
                prop="investAmount"
                align="center"
                label="投标金额(元)">
              </el-table-column>
              <el-table-column
                prop="lossAmount"
                align="center"
                label="损失金额(元)">
              </el-table-column>
              <el-table-column
                prop="state"
                align="center"
                label="状态">
              </el-table-column>
              <!--<el-table-column label="查看详情" align="center">
                <template slot-scope="scope">
                  <el-button size="mini"><a href="DoInvesting.vue">查看详情</a></el-button>
                </template>
              </el-table-column>-->
            </el-table>
          </div>

        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

  import loanTopBar from "./loanTopBar";
  export default {
    name: "invest-info-tabs",
    components: {loanTopBar},
    props:["username"],
    mounted:function(){
      this.getUnderway();
    },
    data() {
      return {
        currentPage1: 1,
        activeName: 'first',
        a:{
          id:0,
          isShow:false
        },

        bad_form:{
          money:'',
          state:''
        },
        formInline: {
          user: '',
          region: ''
        },
        tableDataUnderway: [{
          projectName: '考托福',
          loanFrom: '南一号',
          loanDate: '2018/1/11',
          investAmount: 300,
          deadline_interest: '3个月/1.03%',
          repayAmountMonth:27.25,
          deadlineDate:'2019/1/11',
          deadlineAmount:327,
          state:'转让审核中',
        },{
          projectName: '考会计',
          loanFrom: '南二号',
          loanDate: '2018/3/4',
          investAmount: 300,
          deadline_interest: '3个月/9%',
          repayAmountMonth:45,
          deadlineDate:'2019/9/4',
          deadlineAmount:540,
          state:'正常还款'
        }, {
          projectName: '考CAAC',
          loanFrom: '南三号',
          loanDate: '2018/8/9',
          investAmount: 400,
          deadline_interest: '3个月/8%',
          repayAmountMonth:45,
          deadlineDate:2019/3/4,
          deadlineAmount:540,
          state:'正常还款'
        },],

        tableDataDone: [{projectName: '买IPAD', loanFrom: '南四号', startEndDate: '2018/1/1-2018/5/31',
          investAmount: 300, interest: '10%', state:'已转让', get:0
        },{projectName: '买相机', loanFrom: '南五号', startEndDate: '2018/3/4-2018/6/30',
          investAmount: 500, interest: '8.5%', state:'已结束', get:10.62
        },{projectName: '出国交流', loanFrom: '南一号', startEndDate: '2018/3/1-2018/6/30',
          investAmount: 700, interest: '9.5%', state:'已结束', get:66.5
        },{projectName: '看演唱会', loanFrom: '南四号', startEndDate: '2018/7/1-2018/12/1',
          investAmount: 400, interest: '5.9%', state:'已结束', get:23.6
        },],

        tableDataFavorite: [{projectName: '看舞剧', loanFrom: '南四号', startEndDate: '2018/9/30',
          investAmount: 300, interest: '10%',months:7, state:'筹资中', trust:'90(AA)'
        },{projectName: '旅游', loanFrom: '南五号', startEndDate: '2018/9/2',
          investAmount: 200, interest: '9.2%',months:8, state:'已结束', trust:'91(AA)'
        },{projectName: '考FRM', loanFrom: '南六号', startEndDate: '2018/11/2',
          investAmount: 600, interest: '8.2%', months:8,state:'筹资中', trust:'95(AA)'
        }],

        tableDataBad: [{projectName: '买iPhone', loanFrom: '南九号', badStartDate: '2018/1/1',
          investAmount: 300, lossAmount: 100, state:'正在追回'
        },{projectName: '考GRE', loanFrom: '南十号', badStartDate: '2018/3/4',
          investAmount: 500, lossAmount: 100, state:'已结束'
        }],

        condition:{
          moneyUpper:null,
          moneyLower:null,
          targetType:null,
          name:null,
          startDate:null,
          endDate:null,
          state:null
        },
      };
    },
    methods:{
      handleClick(tab, event) {
        //console.log(tab, event);
        this.getTargets();

      },

      getTargets(){
        if(this.activeName === "first"){
          this.getUnderway();
        }else if(this.activeName === "second"){
          this.getDone();
        }else if(this.activeName === "third"){

        }else if(this.activeName === "fourth"){
          this.getBad();
        }
      },

      getCondition(moneyUpper,moneyLower,targetType,name,startDate,endDate){
        console.log(moneyUpper,moneyLower,targetType,name,startDate,endDate);
        this.getTargets();
      },

      getUnderway(){
        console.log("正在进行");
        this.tableDataUnderway = [];

        var moneyUpper = this.condition.moneyUpper;
        var moneyLower = this.condition.moneyLower;
        var targetType = this.condition.targetType;
        var name = this.condition.name;
        var startDate = this.condition.startDate;
        var endDate = this.condition.endDate;

        const self = this;
        this.$axios.post('/loan/investment/ongoing',{
          username:self.username,
          moneyUpper:moneyUpper,
          moneyLower:moneyLower,
          targetType:targetType,
          name:name,
          startDate:startDate,
          endDate:endDate
        }).then(
          function(response){
            console.log(response.data);
            var list = response.data;

            for(var i=0;i<list.length;i++){

              if(list[i].state === "ON_GOING"){
                list[i].state = "正在进行";
              }else if(list[i].state === "IN_THE_PAYMENT"){
                list[i].state = "还款中";
              }else if(list[i].state === "PAY_OFF"){
                list[i].state = "已还款";
              }else if(list[i].state === "PENDING"){
                list[i].state = "审核中";
              }else if(list[i].state === "HARMFUL"){
                list[i].state = "含有恶意信息审核不通过";
              }else if(list[i].state === "LACK_INFO"){
                list[i].state = "信息缺失审核不通过";
              }else if(list[i].state === "INFORMAL"){
                list[i].state = "信息不规范审核不通过";
              }


              self.tableDataUnderway.push({projectName:list[i].projectName, loanFrom:list[i].loanFrom, loanDate:list[i].loanDate,
                investAmount:list[i].investAmount, deadlineDate:list[i].deadlineDate,interest:list[i].interest+"%",deadline:list[i].num,
                repayAmountMonth:list[i].repaymentAmountMonth,deadlineAmount:list[i].deadlineAmount,targetId:list[i].targetId,state:list[i].state});
            }
            console.log("tableDataUnderway:");
            console.log(self.tableDataUnderway);

          }
        ).catch(function (error) {
          console.log("error in Underway");
          console.log(error);
        });
      },

      getDone(){
        console.log("已完成");
        this.tableDataDone = [];

        var moneyUpper = this.condition.moneyUpper;
        var moneyLower = this.condition.moneyLower;
        var targetType = this.condition.targetType;
        var name = this.condition.name;
        var startDate = this.condition.startDate;
        var endDate = this.condition.endDate;

        const self = this;
        this.$axios.post('/loan/investment/complete',{
          username:self.username,
          moneyUpper:moneyUpper,
          moneyLower:moneyLower,
          targetType:targetType,
          name:name,
          startDate:startDate,
          endDate:endDate
        }).then(
          function(response){
            console.log(response.data);
            var list = response.data;

            for(var i=0;i<list.length;i++){
              self.tableDataDone.push({projectName:list[i].projectName, loanFrom:list[i].loanFrom,
                startEndDate:list[i].startDate+"~"+list[i].endDate,
                investAmount:list[i].investAmount, interest:list[i].interest+"%",
                state:list[i].state,get:list[i].get,targetId:list[i].targetId});
            }
            console.log("tableDataDone:");
            console.log(self.tableDataDone);

          }
        ).catch(function (error) {
          console.log("error in Done");
          console.log(error);
        });
      },

      getBad(){
        console.log("坏账记录");
        this.tableDataBad = [];

        var moneyUpper = this.condition.moneyUpper;
        var moneyLower = this.condition.moneyLower;
        var state = this.condition.state;

        const self = this;
        this.$axios.post('/loan/investment/bad',{
          username:self.username,
          moneyUpper:moneyUpper,
          moneyLower:moneyLower,
          state:state
        }).then(
          function(response){
            console.log(response.data);
            var list = response.data;

            for(var i=0;i<list.length;i++){
              self.tableDataBad.push({projectName:list[i].projectName, loanFrom:list[i].loanFrom,
                badStartDate:list[i].badStartDate, investAmount:list[i].investAmount, lossAmount:list[i].lossAmount,
                state:list[i].state,targetId:list[i].targetId});
            }
            console.log("tableDataBad:");
            console.log(self.tableDataBad);

          }
        ).catch(function (error) {
          console.log("error in Bad");
          console.log(error);
        });

      },

      goTODoingInvestin(target_id,is_show){
        this.a.id = target_id;
        this.a.isShow = is_show;
        console.log("is_show:"+is_show);
        console.log("this.a.isShow:"+this.a.isShow);
        /*this.$router.push({
          path:'/DoInvesting',
          params:this.a.id
        });*/
        this.$router.push({name:'DoInvesting',params:{id:this.a.id,isShow:this.a.isShow}})
      }
    }// end method
    ,
    watch: {
      bad_form:{
        handler(a){
          var money_str = this.bad_form.money;
          var state_str = this.bad_form.state;

          var moneyUpper = null;
          var moneyLower = null;
          var state = null;

          if(money_str === "全部"){

          }else if(money_str === "50以下"){
            moneyUpper = 50;
          }else if(money_str === "50-100"){
            moneyUpper = 100;
            moneyLower = 50;
          }else if(money_str === "100-500"){
            moneyUpper = 500;
            moneyLower = 100;
          }else if(money_str === "500以上"){
            moneyUpper = null;
            moneyLower = 500;
          }

          if(state_str !== "全部"){
            state = state_str;
          }

          this.condition.moneyUpper = moneyUpper;
          this.condition.moneyLower = moneyLower;
          this.condition.state = state;

          this.getBad();

        },
        deep:true
      }
    }
  }
</script>

<style scoped>

  .poj_pagination{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .ChooseBar{
    min-height: 150px;
    /*background-color: ghostwhite;*/
  }

</style>

<style>
  .el-tabs__item{
    font-size: 18px !important;
  }

  #leftII { color: dodgerblue !important}
  #mainpanel { min-height: 400px !important}
</style>
