<template>
  <personalCenter paneltitle="我的专利">
    <el-container class="sheet">
      <el-main class="inform1" >
        <div shadow="always" style="font-size:30px;background-color:#E4E7ED">&nbsp;当前持有专利数</div>
        <el-card shadow="always" class="sum_repay">
          <el-row :gutter="2">
            <el-col :span="16" style="width:50%">
              <p><span style="font-size:30px">{{num_of_patents}}</span></p>
            </el-col>
          </el-row>
        </el-card>
        <div style="margin-top:20px;font-size:30px;background-color:#E4E7ED">&nbsp;专利列表</div>
        <el-card shadow="always" class="sum_break">
    <!-- 增加专利列表，不具有滚动功能 -->
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

  export default {
    name:"myPatent",
    components: {personalCenter},
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

