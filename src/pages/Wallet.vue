<template>
  <personalCenter paneltitle="我的钱包">
    <el-row :gutter="20">
      	<el-col :span="4"><div class="grid-content bg-purple"><span>账户余额 :</span></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple right" ><span>{{ balance }}  积分</span></div></el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="4"><div class="grid-content bg-purple "><span>钱包地址 :</span></div></el-col>
        <el-col :span="14"><div class="grid-content bg-purple right"><span>{{ walletAddress }}</span></div></el-col>
    </el-row>
		<!-- <el-row :gutter="20">
        <el-col :span="24"><div class="grid-content bg-purple" style="text-align:start; padding-left:25px"><span>&nbsp;银行卡</span></div></el-col>
    </el-row> -->
		<div shadow="always" style="font-size:25px;background-color:rgb(173, 193, 233); padding-left:25px; padding-top:3px; padding-bottom:3px; border-radius: 3px;">银行卡</div>
        <el-card shadow="always" class="sum_repay">
          <el-row style="margin-bottom:0;">
						<el-col :span="4"><el-button type="primary">新增</el-button></el-col>
					</el-row>
			<!-- 银行卡列表 -->
					<el-table :data="tableData"
						style="width: 100%;"
						>
						<el-table-column
							prop="owner"
							label="持卡人"
							width="120">
						</el-table-column>
						<el-table-column
							prop="cardID"
							label="银行卡号"
							width="300">
						</el-table-column>
						<el-table-column
							prop="bank"
							label="所在银行"
							width="200">
						</el-table-column>
						<el-table-column
							fixed="right"
							label="操作"
							width="120">
							<template slot-scope="scope">
								<el-button
									@click.native.prevent="deleteRow(scope.$index, tableData)"
									type="text"
									size="small">
									解绑
								</el-button>
							</template>
						</el-table-column>
					</el-table>
			<el-row :gutter="2" style="padding-top:10px;">
				<el-col :span="2" offset="20"><el-button type="primary">充值</el-button></el-col>
  			<el-col :span="2" offset="0"><el-button type="primary">提现</el-button></el-col>
			</el-row>
    </el-card>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";

  export default {
    name:"wallet",
    components: {personalCenter},
    data(){
			return{
				balance: 10,
				walletAddress: '0x10Ad2F4BB73e23e8B72C56b9EFdc3B7aD8Bb808E',
				//表格数据
				tableData: [{
          owner: '王小虎',
          cardID: '62220231568453211666420',
          bank: '中国工商银行'
        }, {
          owner: '王小虎',
          cardID: '62220231568453211666420',
          bank: '中国农业银行'
        }, {
          owner: '王小虎',
          cardID: '62220231568453211666420',
          bank: '中国建设银行'
        }]
			}	
    }
  }

</script>


<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 5px;
  }
  .bg-purple {
    background: rgb(173, 193, 233);
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
		text-align: center;
		padding-top: 3px;
		font-size: 20px;
  }
	.right {
		text-align: start;
		padding-left: 10px;
	}
</style>



