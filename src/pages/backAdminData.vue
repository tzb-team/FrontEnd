<template>
  <div id="app">
    <!--顶栏 -->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <adminNavi style="position: relative"></adminNavi>
    </div>

    <!--正文-->
    <el-row>
      <el-col span="24">
        <div class="grid-content bg-purple-dark">
          <div style="margin-top:5%;margin-left:8%;margin-right:8%;min-height:500px;">
            <el-tabs type="border-card"
                     :tab-position="left">
              <el-tab-pane >
                <span slot="label" style="font-size:19px;"><i class="el-icon-document"></i>&nbsp;&nbsp;基础数据</span>
                <div class="sheet">
                  <el-table
                  :data="tableData">
                  <el-table-column
                    prop="total"
                    label="总额"
                    align="center">
                  </el-table-column>
                  <el-table-column
                    prop="total_num"
                    label=""
                    align="center">
                  </el-table-column>
                  <el-table-column
                    prop="average"
                    label="人均统计">
                  </el-table-column>
                  <el-table-column
                    prop="average_num"
                    label="">
                  </el-table-column>
                  <el-table-column
                    prop="other"
                    label="其他统计">
                  </el-table-column>
                  <el-table-column
                    prop="other_num"
                    label="">
                  </el-table-column>
                </el-table>
                </div>
              </el-tab-pane>
              <el-tab-pane >
                <span slot="label" style="font-size:19px;"><i class="el-icon-minus"></i>&nbsp;&nbsp;违约信息</span>
                <div  class="sheet">
                  <el-table
                  :data="tableData2">
                  <el-table-column
                    prop="default_name1"
                    label="违约统计"
                    align="center">
                  </el-table-column>
                  <el-table-column
                    prop="default_num1"
                    label=""
                    align="center">
                  </el-table-column>
                  <el-table-column
                    prop="default_name2"
                    label="">
                  </el-table-column>
                  <el-table-column
                    prop="default_num2"
                    label="">
                  </el-table-column>
                  <el-table-column
                    prop="default_name3"
                    label="">
                  </el-table-column>
                  <el-table-column
                    prop="default_num3"
                    label="">
                  </el-table-column>
                </el-table>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </el-col>
    </el-row>

    <!--右边栏-->
    <div>
      <right-bar></right-bar>
    </div>

    <!--底栏-->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <footer-bar></footer-bar>
    </div>

  </div>
</template>

<script>
  import adminNavi from '@/components/adminNavi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue';

  export default {
    name: "backAdminData",
    components:{ adminNavi, footerBar, rightBar},
    data(){
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        },
        tableData: [
          {
          total: '交易总额',
          total_num: '25600',
          average: '人均累计借贷额度',
          average_num:'610',
          other:'最大单客户借款余额占比',
          other_num:'12%'
        }, {
          total: '交易总笔数',
          total_num: '42',
          average: '笔均借款额度',
          average_num:'610',
          other:'最大10户借款余额占比',
          other_num:'57%'
        }, {
          total: '借款人数量',
          total_num: '42',
          average: '人均累计投资额度',
          average_num:'406',
          other:'平均满标时间',
          other_num:'21天'
        },{
          total: '投资人数量',
          total_num: '63',
          average: '',
          average_num:'',
          other:'',
          other_num:''
        }],

        tableData2: [{
          default_name1: '累计违约率',
          default_num1: '4.76%',
          default_name2: '逾期项目数',
          default_num2:'2',
          default_name3:'项目逾期率',
          default_num3:'0'
        },
          {
            default_name1: '近三月项目逾期率',
            default_num1: '4.76%',
            default_name2: '借款逾期金额',
            default_num2:'800',
            default_name3:'待偿金额',
            default_num3:'0'
          },
          {
            default_name1: '借贷金额逾期率',
            default_num1: '4.76%',
            default_name2: '借贷坏账率',
            default_num2:'930',
            default_name3:'客户投诉情况',
            default_num3:'0'
          }],

        formInline:{
          money:'',
          category:'any',
          return_date:''
        }
      };
    },

    beforeCreate:function(){
      localStorage.route = "";
    },
    mounted: function() {
      this.getBaseData();
      this.getBaseBreakContract();
    },
    methods:{
      change11(){
        document.getElementById("default_info").style.display = "none";
        document.getElementById("basic_data").style.display = "inline";
      },
      change22(){
        document.getElementById("default_info").style.display = "inline";
        document.getElementById("basic_data").style.display = "none";
      },
      getBaseData(){
        console.log("基础数据");
        let self = this;
        this.$axios.get('/adminData/base',{
          params:{

          }
        })
          .then(function (response) {
            console.log(response);
            console.log("基础数据success");
            console.log(response.data);
            let res = response.data;

            let tableDataReg = [{
              total: '交易总额',
              total_num: '25600',
              average: '人均累计借贷额度',
              average_num:'610',
              other:'最大单客户借款余额占比',
              other_num:'12%'
            }, {
              total: '交易总笔数',
              total_num: '42',
              average: '笔均借款额度',
              average_num:'610',
              other:'最大10户借款余额占比',
              other_num:'57%'
            }, {
              total: '借款人数量',
              total_num: '42',
              average: '人均累计投资额度',
              average_num:'406',
              other:'平均满标时间',
              other_num:'21天'
            },{
              total: '投资人数量',
              total_num: '63',
              average: '',
              average_num:'',
              other:'',
              other_num:''
            }];

            tableDataReg[0].total_num = res.dealMoneySum;
            tableDataReg[0].average_num = res.loanPerPerson;
            tableDataReg[0].other_num = res.mostLoanPersonRate;
            tableDataReg[1].total_num = res.dealNum;
            tableDataReg[1].average_num = res.loanPerTarget;
            tableDataReg[1].other_num = res.most10LoanPersonRate;
            tableDataReg[2].total_num = res.borrowerNum;
            tableDataReg[2].average_num = res.investmentPerPerson;
            tableDataReg[2].other_num = res.averageGoingTime;
            tableDataReg[3].total_num = res.investorNum;

            self.tableData = tableDataReg;
          })
          .catch(function (response) {
            console.log(response);
            console.log("基础数据error");
            // alert("error")
          });
      },
      getBaseBreakContract(){
        console.log("违约记录");
        let self = this;
        this.$axios.get('/adminData/breakContract',{
          params:{

          }
        })
          .then(function (response) {
            console.log(response);
            console.log("违约记录success");
            console.log(response.data);
            let res = response.data;

            self.tableData2[0].default_num1 = res.defaultRate;
            self.tableData2[0].default_num2 = res.overdueProgramNum;
            self.tableData2[0].default_num3 = res.overdueProgramRate;
            self.tableData2[1].default_num1 = res.overdueProgramRate3;
            self.tableData2[1].default_num2 = res.overdueMoneySum;
            self.tableData2[1].default_num3 = res.toPay;
            self.tableData2[2].default_num1 = res.overdueMoneyRate;
            self.tableData2[2].default_num2 = res.badDebtRate;
            self.tableData2[2].default_num3 = res.complaints;

          })
          .catch(function (response) {
            console.log(response);
            console.log("违约记录error");
            // alert("error")
          });
      }
    },


  }
</script>

<style scoped>
  .sheet{
    margin-top: 5%;
    margin-left:8%;
    margin-right:8%;
    margin-bottom: 5%;

  }
</style>
