<template>
  <personalCenter paneltitle="投资">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="项目信息" name="first">
        <div class="title2">基本信息</div>
        <div style="display: flex;padding-top: 20px">

          <el-card class="info1" v-model="info1" shadow="always" :class="info1" align="center">
            <p >发布日期</p>
            <span>{{info1.date1}}</span>
            <br><br><br>
            <p>截止日期</p>
            <span>{{info1.date2}}</span>
            <br><br><br>
            <p>下个还款日</p>
            <span>{{info1.late_date}}</span>
          </el-card>

          <el-card class="main_info" v-model="info2" align="center" shadow="always">
            <div class="content">
              {{info2.name}}
            </div>
            <div class="content">
              距离下次还款日剩余<span>{{info2.days}}</span>天
            </div>
            <div class="content">
              下次应还： <span>{{info2.money}}</span>元
            </div>
            <el-button type="primary" style="margin-top: 20px">转让</el-button>
          </el-card>

          <el-card shadow="always" class="chart" align="center">
            <div style="margin-top: 20px;font-size: 18px;color: #6a6a6a">
              未还款占比：
            </div>

            <div style="margin-top: 40px;">
              <el-progress type="circle" :percentage="25" width="110"></el-progress>
            </div>
          </el-card>
        </div>
        <hr>
        <div class="title2">项目概要</div>
        <div style="display: flex">
          <el-card align="center" shadow="always" style="width: 320px;height: 300px;margin-top: 20px">
            <div class="title">
              资金用途
            </div>

            <div class="usage" style="margin-top: 50px">
              分类：学习/购买学习用品
            </div>
            <div class="usage">
              详述：买了文具和笔
            </div>

          </el-card>

          <el-card align="center" shadow="always" style="width: 450px;margin-left: 50px;margin-top: 20px">
            <div class="title">
              关于贷款
            </div>

            <div class="usage" style="margin-top: 30px">拆借类型：小额</div>
            <div class="usage">年利率：5%</div>
            <div class="usage">待还款期数：3</div>
            <div class="usage">待还本息：300元</div>
            <div class="usage">披露层级：2</div>


          </el-card>

        </div>
      </el-tab-pane>
      <el-tab-pane label="借款人信息" name="second">
        <div class="title2">基本信息</div>
        <loanerBasicInfo></loanerBasicInfo>
        <div class="title2">学业表现</div>
      </el-tab-pane>
      <div v-if="showGraph">
        <academicPerformance></academicPerformance>
        <div class="title2">财务分析</div>
        <fin-analysis></fin-analysis>
        <div class="title2">项目信息</div>
        <div>
          <el-tabs v-model="activeChild" @tab-click="handleClick">
            <el-tab-pane label="正在进行" name="first">
              <loanTopBar></loanTopBar>
              <loanUnderway></loanUnderway>
            </el-tab-pane>
            <el-tab-pane label="完成项目" name="second">
              <loanTopBar></loanTopBar>
              <loanComplete></loanComplete>
            </el-tab-pane>
            <el-tab-pane label="已发布项目" name="third">
              <loanTopBar></loanTopBar>
              <loanLaunched></loanLaunched>
            </el-tab-pane>
            <el-tab-pane label="违约记录" name="fourth">
              <loanTopBar></loanTopBar>
              <loanUnbelievable></loanUnbelievable>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <el-tab-pane label="还款历史" name="third">
        <div class="title2">
          还款历史
        </div>
        <div>
          <timeLine :recordList="recordList"></timeLine>
        </div>
      </el-tab-pane>
      <el-tab-pane label="违约情况" name="fourth">
        <div style="font-size: 30px;margin-top: 140px;margin-left: 160px;display: none">
          截止目前，该借款人并未出现违约情况！
        </div>

        <div>
          <div style="font-size: 20px;margin: 20px">
            截止目前，该借款人在本款项目中共产生了 <span style="font-size: 24px;color:#409EFF">2</span> 次违约情况.
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
  import loanerBasicInfo from "../components/loanerBasicInfo";
  import academicPerformance from "../components/academicPerformance";
  import FinAnalysis from "../components/finAnalysis";
  import loanTopBar from "../components/loanTopBar";
  import loanUnderway from "../components/loanUnderway";
  import loanComplete from "../components/loanComplete";
  import loanLaunched from "../components/loanLaunched";
  import loanUnbelievable from "../components/loanUnbelievable";

  export default {
    name:"check-invest",
    components: {ElCard, InvestList, loanTopBar,loanUnderway,loanComplete,loanLaunched,loanUnbelievable,personalCenter,timeLine,loanerBasicInfo,academicPerformance,FinAnalysis},
    data() {
      return {
        showGraph:false,
        activeChild:'first',
        info1:{
          date1:'2018-09-02',
          date2:'2018-09-16',
          late_date:'2018-09-07',
        },
        info2:{
          name:'项目名称',
          days:0,
          money:50
        },
        return_scheme:{
          return_way:'等额本金',
          difficulty:4,
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
          current_state:'结束'
        }],

        recordList:[{//A:刻度;B:左边;C:右边
          state:'B',
          date:'2018/3/27',
          money:100,
          period:1

        },{
          state:'A',
          date:'2018/4/1',
          money:0,
          period:0
        },{
          state:'A',
          date:'2018/5/1',
          money:0,
          period:0
        },{
          state:'C',
          date:'2018/5/1',
          money:'100',
          period:1
        },{
          state:'B',
          date:'2018/5/7',
          money:200,
          period:2
        },{
          state:'A',
          date:'2018/6/1',
          money:0,
          period:0
        },{
          state:'B',
          date:'2018/6/1',
          money:100,
          period:3
        }],
      }// end return
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
        console.log(this.activeName)
        if(this.activeName=="second"){
          this.showGraph = true;
        }else{
          this.showGraph = false;
        }
      },
    }
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
