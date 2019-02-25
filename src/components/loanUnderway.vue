<template>
  <div>
    <div>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="name"
          label="项目名称"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="date"
          label="发布时间"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="year_rate"
          label="年利率"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="num"
          label="待还期数"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="principal_and_interest"
          label="待还本息(元)"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="next_return"
          label="下个还款日"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="money"
          label="还款日应还金额(元)"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop=""
          label="项目详情"
          align="center"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="getRepayDetail(scope.row.targetId,scope.row.name,'正在进行')">查看</el-button>
          </template>
        </el-table-column>

      </el-table>
    </div>

  </div>

</template>

<script>
    export default {
        name: "loan-underway",
        props: ["username"],
        beforeCreate:function(){

        },
        data(){
          return{
            a:{
              targetId:0,
              targetName:'',
              targetState:''
            },
            tableData:[],
          }
        },
      methods: {

        getTableData(moneyUpper,moneyLower,targetType,name,startDate,endDate){
          console.log(moneyUpper,moneyLower,targetType,name,startDate,endDate);
          this.tableData = [];
          var list = [];
          const self = this;
          this.$axios.post('/loan/info/ongoing',{
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
              list = response.data;

              for(var i=0;i<list.length;i++){
                self.tableData.push({name:list[i].name, date:list[i].releaseDate, year_rate:list[i].interestRate,
                  num:list[i].remainingRepaidPeriods, principal_and_interest:list[i].remainingMoney,
                  next_return:list[i].nextDueDate,money:list[i].repayMoney,targetId:list[i].targetId});
              }
              console.log("tableData:");
              console.log(self.tableData);

            }
          ).catch(function (error) {
            console.log("error in Underway");
            console.log(error);
          });

        },

        getRepayDetail(targetId,targetName,targetState){
          console.log("targetId in loanUnderway:"+targetId);
          this.a.targetId = targetId;
          this.a.targetName = targetName;
          this.a.targetState = targetState;
         //console.log("a in loanUnderway:"+this.a.targetId);
          this.$router.push({name:'repay',params:this.a});
        }

      },// end method
    }
</script>

<style scoped>

  .poj_pagination{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }

</style>
