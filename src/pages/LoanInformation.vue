<template>
  <personalCenter paneltitle="项目信息">
    <LoanInformationPane :username="username"></LoanInformationPane>
    <!--<el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="正在进行" name="first" >
        <loanTopBar v-on:getConditionEvent="getCondition"></loanTopBar>
        <loanUnderway ref="underway"></loanUnderway>
      </el-tab-pane>
      <el-tab-pane label="完成项目" name="second" >
        <loanTopBar></loanTopBar>
        <loanComplete ref="complete"></loanComplete>
      </el-tab-pane>
      <el-tab-pane label="已发布项目" name="third">
        <loanTopBar></loanTopBar>
        <loanLaunched ref="launched"></loanLaunched>
      </el-tab-pane>
      <el-tab-pane label="违约记录" name="fourth">
        <loanTopBar></loanTopBar>
        <loanUnbelievable ref="unbelievable"></loanUnbelievable>
      </el-tab-pane>
    </el-tabs>-->

   <!-- <div class="projectPanel">
      <div class="projectPages">

      </div>
      <div id="poj_pagination">
        <div class="block">
          &lt;!&ndash;<span class="demonstration">完整功能</span>&ndash;&gt;
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage1"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="40">
          </el-pagination>
        </div>
      </div>

    </div>-->

  </personalCenter>
</template>

<script>
  /*import personalCenter from "../components/personalCenter";
  import loanTopBar from "../components/loanTopBar";
  import loanUnderway from "../components/loanUnderway"
  import loanComplete from "../components/loanComplete"
  import loanLaunched from "../components/loanLaunched"
  import loanUnbelievable from "../components/loanUnbelievable"*/

  import personalCenter from "../components/personalCenter"
  import LoanInformationPane from "../components/LoanInformationPane"

  export default {
    name:"loaninformation",
    components: {personalCenter,LoanInformationPane},
    data() {
      return {
        username:localStorage.username
      }
    }
   /* mounted:function(){
      this.getUnderway();
    },*/
   /* methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },*/
    /*data() {
      return {
        currentPage1: 2,
        activeName: 'first',
        paneName:'',

        condition:{
          moneyUpper:null,
          moneyLower:null,
          targetType:null,
          name:null,
          startDate:null,
          endDate:null
        },

      };
    },
    methods:{
      handleClick(tab, event) {
        this.paneName = tab.name;
        console.log(this.paneName);
        if(this.paneName==='first'){
          this.getUnderway();
        }else if(this.paneName==='second'){
          this.getComplete();
        }else if(this.paneName==='third'){
          this.getLaunched();
        }else if(this.paneName==='fourth'){
          this.getUnbelieve();
        }
      },
      getUnderway(){

        var moneyUpper = this.condition.moneyUpper;
        var moneyLower = this.condition.moneyLower;
        var targetType = this.condition.targetType;
        var name = this.condition.name;
        var startDate = this.condition.startDate;
        var endDate = this.condition.endDate;

        console.log("正在进行");
        this.$refs.underway.getTableData(moneyUpper,moneyLower,targetType,name,startDate,endDate);
      },
      getComplete(){
        console.log("已完成");

        var moneyUpper = this.condition.moneyUpper;
        var moneyLower = this.condition.moneyLower;
        var targetType = this.condition.targetType;
        var name = this.condition.name;
        var startDate = this.condition.startDate;
        var endDate = this.condition.endDate;

        this.$refs.complete.getTableData(moneyUpper,moneyLower,targetType,name,startDate,endDate);
      },
      getLaunched(){
        console.log("已发布");

        var moneyUpper = this.condition.moneyUpper;
        var moneyLower = this.condition.moneyLower;
        var targetType = this.condition.targetType;
        var name = this.condition.name;
        var startDate = this.condition.startDate;
        var endDate = this.condition.endDate;

        this.$refs.launched.getTableData(moneyUpper,moneyLower,targetType,name,startDate,endDate);
      },
      getUnbelieve(){
        console.log("违约记录");

        var moneyUpper = this.condition.moneyUpper;
        var moneyLower = this.condition.moneyLower;
        var targetType = this.condition.targetType;
        var name = this.condition.name;
        var startDate = this.condition.startDate;
        var endDate = this.condition.endDate;

        this.$refs.unbelievable.getTableData(moneyUpper,moneyLower,targetType,name,startDate,endDate);
      },
      getCondition(money,date,state){
        console.log("data in loanInformation");
        console.log("money:"+money);
        console.log("date:"+date);
        console.log("state:"+state);

      }
    }*/
  }

</script>

<style scoped>
  /*#poj_pagination{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }*/

  .type_choose_btn{
    padding-left: 50px;
    padding-right: 50px;
  }

</style>

<style>
  .el-tabs__item{
    font-size: 18px !important;
  }
</style>

<style>

  #leftLI { color: dodgerblue !important}
</style>
