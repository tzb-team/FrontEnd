<template>
  <personalCenter paneltitle="融资统计">
    <el-container class="sheet">
      <el-header class="emphasize">
        <div style="width:50%;float:left">
          <label style="font-size:30px">总借款金额:</label>
          <span class="keypoint">{{money_loan}}</span>
          <label style="font-size:30px">元</label><br>
          <span style="font-size:18px">总投资金额:{{money_invest}}元</span>
        </div>
        <div style="width:50%;float:right">
          <label style="font-size:30px">加权平均借款利率:</label>
          <span class="keypoint">{{rate_loan}}</span>
          <label style="font-size:30px">%</label><br>
          <span style="font-size:18px">加权平均投资利率:{{rate_invest}}%</span>
        </div>
      </el-header>

      <el-main class="inform1" >
        <div shadow="always" style="font-size:30px;background-color:#E4E7ED">&nbsp;还款统计</div>
        <el-card shadow="always" class="sum_repay">
          <el-row :gutter="2">
            <el-col :span="8" style="width:50%">
              <p>已还本息:<span>{{r_money_done}}</span> 元</p>
              <p>待还金额:<span>{{r_pro_topay}}</span> 元</p>
              <p>成功借款项目数:<span>{{r_pro_loanDone}}</span> 元</p>
              <p>提前还清项目数:<span>{{r_pro_fore}}</span> 元</p>
            </el-col>
            <el-col :span="16" style="width:50%">
              <p>待还本息:<span>{{r_money_topay}}</span> 元</p>
              <p>发布借款项目数:<span>{{r_pro_rel}}</span> 元</p>
              <p>正常还清项目数:<span>{{r_pro_repayDone}}</span> 元</p>
              <p>历史违约项目数:<span>{{r_pro_break}}</span> 元</p>
            </el-col>
          </el-row>
        </el-card>
        <div style="margin-top:20px;font-size:30px;background-color:#E4E7ED">&nbsp;违约统计</div>
        <el-card shadow="always" class="sum_break">
          <el-row :gutter="2">
            <el-col :span="8" style="width:50%">
              <p>逾期次数:<span>{{b_times_done}}</span> 元</p>
              <p>逾期服务费:<span>{{b_money_serveDone}}</span> 元</p>
            </el-col>
            <el-col :span="16" style="width:50%">
              <p>待处理逾期次数:<span>{{b_times_to}}</span> 元</p>
              <p>待缴逾期服务费:<span>{{b_money_serveTo}}</span> 元</p>
            </el-col>
          </el-row>
        </el-card>
      </el-main>
    </el-container>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";
  import ProjectList from "../components/projectList";

  export default {
    name:"loanstatistics",
    components: {ProjectList, personalCenter},
    data(){
      return{
        money_loan:2000,
        rate_loan:5.34,
        money_invest:2000,
        rate_invest:5.34,

        r_money_done:100,
        r_pro_topay:200,
        r_pro_loanDone:100,
        r_pro_fore:100,
        r_money_topay:100,
        r_pro_rel:100,
        r_pro_repayDone:100,
        r_pro_break:100,
        b_times_done:100,
        b_money_serveDone:100,
        b_times_to:100,
        b_money_serveTo:100
      }
    }
  }

</script>

<style scoped>
  .emphasize{
    position: block;
    display: inline
  }
  .keypoint{
    color:deepskyblue;
    font-size: 40px
  }
  .inform1{
    margin-top: 50px;
  }
</style>
<style>
  /*#leftOV,#leftFS,#leftSP,#leftLI,#leftBI,#leftII,#leftIE,#leftNC,#leftAC,#leftCC{ color: #777777 !important; }*/
  #leftLS { color: dodgerblue !important}
</style>
