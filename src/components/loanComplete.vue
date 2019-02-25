<template>
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
        prop="money"
        label="借款金额(元)"
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
        prop="start_date"
        label="开始日期"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="end_date"
        label="截止日期"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="state"
        label="项目状态"
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
            @click="getRepayDetail(scope.row.targetId,scope.row.name,'已完成')">查看</el-button>
        </template>
      </el-table-column>

    </el-table>

    <div class="projectPanel">
      <div class="projectPages">

      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "loan-complete",
        props:["username"],
        data(){
          return{
            a:{
              targetId:0,
              targetName:'',
              targetState:''
            },
            tableData:[],
          }//end return
        },
      methods: {

        getTableData(moneyUpper,moneyLower,targetType,name,startDate,endDate){
          console.log(moneyUpper,moneyLower,targetType,name,startDate,endDate);
          this.tableData = [];
          var list = [];
          const self = this;
          this.$axios.post('/loan/info/complete',{
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
                self.tableData.push({name:list[i].name, money:list[i].money, year_rate:list[i].interestRate,
                  start_date:list[i].duration[0],end_date:list[i].duration[1],state:list[i].state,targetId:list[i].targetId});
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
          this.a.targetState = targetState
          //console.log("a in loanUnderway:"+this.a.targetId);
          this.$router.push({name:'repay',params:this.a});
        }
      },
    }
</script>

<style scoped>

  .poj_pagination{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }

</style>
