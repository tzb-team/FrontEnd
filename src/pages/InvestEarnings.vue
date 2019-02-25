<template>
  <personalCenter paneltitle="投资收益">
    <el-container class="sheet">
      <el-header class="emphasize">
        <div style="width:50%;float:left">
          <label style="font-size:30px">总投资金额:</label>
          <span class="keypoint">{{money_invest}}</span>
          <label style="font-size:30px">元</label><br>
          <span style="font-size:18px">总借款金额:{{money_loan}}元</span>
        </div>
        <div style="width:50%;float:right">
          <label style="font-size:30px">加权平均投资利率:</label>
          <span class="keypoint">{{rate_invest}}</span>
          <label style="font-size:30px">%</label><br>
          <span style="font-size:18px">加权平均借款利率:{{rate_loan}}%</span>
        </div>
      </el-header>
      
      <el-main class="inform1" >
        <div shadow="always" style="font-size:30px;background-color:#E4E7ED">&nbsp;投标统计</div>
        <el-card shadow="always" class="sum_repay">
          <el-row :gutter="2">
            <el-col :span="8" style="width:50%">
              <p>投资总收益:<span>{{i_money_done}}</span> 元</p>
              <p>待收回投资额:<span>{{i_money_toEarn}}</span> 元</p>
              <p>正在进行项目数:<span>{{i_pro_ing}}</span> 元</p>
              <p>待审核转让项目数:<span>{{i_pro_toChange}}</span> 元</p>
            </el-col>
            <el-col :span="16" style="width:50%">
              <p>投资总项目数:<span>{{i_pro_sum}}</span> 元</p>
              <p>已收回投资额:<span>{{i_money_earn}}</span> 元</p>
              <p>成功投资项目数:<span>{{i_pro_done}}</span> 元</p>
              <p>已转让项目数:<span>{{i_pro_change}}</span> 元</p>
            </el-col>
          </el-row>
        </el-card>
        <div style="margin-top:20px;font-size:30px;background-color:#E4E7ED">&nbsp;坏账统计</div>
        <el-card shadow="always" class="sum_break">
          <el-row :gutter="2">
            <el-col :span="8" style="width:50%">
              <p>坏账项目投资数:<span>{{b_pro_sum}}</span> 元</p>
            </el-col>
            <el-col :span="16" style="width:50%">
              <p>已损失投资总额:<span>{{b_money_done}}</span> 元</p>
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
    name:"LoanStatistics",
    components: {ProjectList, personalCenter},
    data(){
      return{
        money_loan:2000,
        rate_loan:5.34,
        money_invest:2000,
        rate_invest:5.34,

        i_money_done:100,
        i_money_toEarn:100,
        i_pro_ing:100,
        i_pro_toChange:100,

        i_pro_sum:100,
        i_money_earn:100,
        i_pro_done:100,
        i_pro_change:100,
        
        b_pro_sum:100,
        b_money_done:100
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
  /*#leftOV,#leftFS,#leftSP,#leftLI,#leftLS,#leftII,#leftBI,#leftNC,#leftAC,#leftCC{ color: #777777 !important; }*/
  #leftIE { color: dodgerblue !important}
</style>


