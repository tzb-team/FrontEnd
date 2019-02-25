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
          prop="launch_date"
          label="发布时间"
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
              @click="getRepayDetail(scope.row.targetId,scope.row.name,scope.row.state)">查看</el-button>
          </template>
        </el-table-column>

      </el-table>

      <div class="projectPanel">
        <div class="projectPages">

        </div>
       <!-- <div id="poj_pagination" class="poj_pagination">
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
        </div>-->

      </div>

    </div>
</template>

<script>
    export default {
        name: "loan-launched",
        props:["username"],
        data(){
          return{
            tableData:[],
            a:{
              targetId:0,
              targetName:'',
              targetState:''
            },
            currentPage1:1
          }// end return
        },
     methods: {
       handleSizeChange(val) {
         console.log(`每页 ${val} 条`);
       },
       handleCurrentChange(val) {
         console.log(`当前页: ${val}`);
       },
       getTableData(moneyUpper,moneyLower,targetType,name,startDate,endDate){
         console.log(moneyUpper,moneyLower,targetType,name,startDate,endDate);
         this.tableData = [];
         var list = [];
         const self = this;
         this.$axios.post('/loan/info/released',{
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
               self.tableData.push({name:list[i].name, money:list[i].money, year_rate:list[i].interestRate,
                 launch_date:list[i].duration[0],state:list[i].state,targetId:list[i].targetId});
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
