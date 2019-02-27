<template>
  <personalCenter paneltitle="我的专利">
    <el-container class="sheet">
      <!-- <el-header class="emphasize">
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
      </el-header> -->
      
      <el-main class="inform1" >
        <div shadow="always" style="font-size:30px;background-color:#E4E7ED">&nbsp;当前持有专利数</div>
        <el-card shadow="always" class="sum_repay">
          <el-row :gutter="2">
            <el-col :span="16" style="width:50%">
              <p><span style="font-size:30px">{{num_of_patents}}</span></p>
              <!-- <p>待收回投资额:<span>{{i_money_toEarn}}</span> 元</p>
              <p>正在进行项目数:<span>{{i_pro_ing}}</span> 元</p>
              <p>待审核转让项目数:<span>{{i_pro_toChange}}</span> 元</p> -->
            </el-col>
            <!-- <el-col :span="16" style="width:50%">
              <p>投资总项目数:<span>{{i_pro_sum}}</span> 元</p>
              <p>已收回投资额:<span>{{i_money_earn}}</span> 元</p>
              <p>成功投资项目数:<span>{{i_pro_done}}</span> 元</p>
              <p>已转让项目数:<span>{{i_pro_change}}</span> 元</p>
            </el-col> -->
          </el-row>
        </el-card>
        <div style="margin-top:20px;font-size:30px;background-color:#E4E7ED">&nbsp;专利列表</div>
        <el-card shadow="always" class="sum_break">
          <!-- <el-row :gutter="2">
            <el-col :span="1" style="width:50%">
              <p>坏账项目投资数:<span>{{b_pro_sum}}</span> 元</p>
            </el-col>
            <el-col :span="1" style="width:50%">
              <p>已损失投资总额:<span>{{b_money_done}}</span> 元</p>
            </el-col>
          </el-row> -->
    <!-- 增加专利列表，具有滚动功能 -->
          <el-container>
            <el-header style="text-align: right; font-size: 12px">
              <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>查看</el-dropdown-item>
                  <el-dropdown-item>新增</el-dropdown-item>
                  <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <span>Mike</span>
            </el-header>
      
            <el-main>
              <el-table :data="tableData" stripe="true">
                <el-table-column prop="patentID" label="专利号" >
                </el-table-column>
                <el-table-column prop="patentName" label="专利名" >
                </el-table-column>
                <el-table-column prop="patentOwner" label="专利持有人" >
                </el-table-column>
                <el-table-column prop="patentState" label="状态" >
                </el-table-column>
                <el-table-column label="详情">
                  <template slot-scope="scope">
                    <el-button
                      @click.native.prevent="getdetails(scope.$index, tableData4)"
                      type="text"
                      size="small">
                      详情
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-main>
          </el-container>
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
      const item = {
        patentID: 'order#53431',
        patentName: '新型口腔器械',
        patentOwner: 'Mike 丁',
        patentState: '正常',
        // patentDetails: '详情'
      };
      return{
        num_of_patents:10,
        tableData: Array(10).fill(item)

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


