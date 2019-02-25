<template>
  <div class="UserList">
    <adminNavi></adminNavi>
    <div style="height:700px;padding-top: 50px;">
      <table style="margin:0 auto;">
        <tbody>
        <tr>
          <td>
            <el-card class="box-card">
              <div style="padding: 30px 0px;">
                <span style="font-size: 24px;padding:50px 0px;">基本信息</span>
              </div>
              <div style="padding: 30px;">
                <el-table
                  :data="detailData"
                  style="width: 100%"
                  height="100">
                  <el-table-column
                    prop="id"
                    label="编号"
                    align="center"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="用户名"
                    align="center"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="time"
                    label="拆借起始时间"
                    align="center"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="total"
                    label="金额"
                    align="center"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="gainMoney"
                    label="已筹集金额"
                    align="center"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="projectState"
                    label="标的状态"
                    align="center"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="profit"
                    label="收益情况"
                    align="center"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="projectLevel"
                    label="项目风险评级"
                    align="center"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="payPlan"
                    label="还款方案"
                    align="center"
                    width="120">
                  </el-table-column>
                </el-table>
              </div>
              <div style="padding: 30px 0px;">
                <span style="font-size: 24px;padding:50px 0px;">项目描述</span>
              </div>
              <div style="padding: 30px;font-size:18px;">
                {{ detailData[0].description }}
              </div>
            </el-card>
          </td>
        </tr>
        </tbody>
      </table>
      <div style="padding:50px;float: right;">
        <el-button class="returnButton" plain @click="seeList">返回列表</el-button>
      </div>
    </div>

    <!--<div class="mytable">
      <div class="tableBackground">
        <table class="usertable">
          <tbody class="usertablebody">
          <tr>
            <th style="border: 1px solid black;text-align:center;">编号</th>
            <td style="border: 1px solid black ;text-align:center;">{{subject.id}}</td>
            <th style="border: 1px solid black;text-align:center;">用户名</th>
            <td style="border: 1px solid black ;text-align:center;">{{subject.name}}</td>
            <th style="border: 1px solid black;text-align:center;">拆借起始时间</th>
            <td style="border: 1px solid black ;text-align:center;">{{subject.beginTime}}</td>
          </tr>
          <tr>
            <th style="border: 1px solid black;text-align:center;">金额</th>
            <td style="border: 1px solid black ;text-align:center;">{{subject.money}}</td>
            <th style="border: 1px solid black;text-align:center;">以筹集金额</th>
            <td style="border: 1px solid black ;text-align:center;">{{subject.money - subject.remainMoney}}</td>
            <th style="border: 1px solid black;text-align:center;">标的状态</th>
            <td style="border: 1px solid black ;text-align:center;">{{subject.state}}</td>
          </tr>
          <tr>
            <th style="border: 1px solid black;text-align:center;">收益情况</th>
            <td style="border: 1px solid black ;text-align:center;">{{subject.profit}}</td>
            <th style="border: 1px solid black;text-align:center;">项目风险评级</th>
            <td style="border: 1px solid black ;text-align:center;">{{subject.range}}</td>
            <th style="border: 1px solid black;text-align:center;">还款方案</th>
            <td style="border: 1px solid black ;text-align:center;">{{subject.solution}}</td>
          </tr>
          </tbody>
        </table>
        <table class="usertable" style="margin-top:11.4%;">
          <tbody class="usertablebody">
          <tr>
            <th style="border: 1px solid black;text-align:center;width:15.6%;">项目说明  </th>
            <td style="border: 1px solid black ;text-align:center;">{{subject.description}}</td><br><br><br><br>
          </tr>
          </tbody>
        </table>
      </div>
    </div>-->
    <footerBar></footerBar>

  </div>



</template>

<script>
  import footerBar from '@/components/footerBar.vue';
  import adminNavi from '@/components/adminNavi.vue';
  export default {
    name: "subjectManageDetail",
    components:{adminNavi,footerBar},
    data () {
      return {
        detailData:[
          {
            id:"0002",
            name:'王刚',
            time:'2018-09-01',
            total:1000,
            gainMoney:800,
            projectState:'运行中',
            profit:'5.55%',
            projectLevel:'A',
            payPlan:'每月10%',
            description:'想要报名托福学习课程，无奈费用太高，想请有缘人帮助'
          },
        ],
      }
    },
    mounted: function() {
      this.getSubjectManageDetail();
    },
    methods:{
      getSubjectManageDetail(){
        console.log("标的详情查看");
        let self = this;
        self.detailData[0].id = this.$route.params.userID;
        console.log("Get id from up is "+ self.detailData[0].id);
        this.$axios.get('adminTarget/detailInfo',{
          params:{
            id: this.detailData[0].id
          }
        })
          .then(function (response) {
            console.log(response);
            console.log("标的详情查看success");
            console.log(response.data);
            let res = response.data;
            self.detailData[0].id = res.id;
            self.detailData[0].name = res.username;
            self.detailData[0].time = res.startTime;
            self.detailData[0].total = res.money;
            self.detailData[0].gainMoney = res.collectedMoney;
            self.detailData[0].projectState = res.state;
            self.detailData[0].profit = res.interestRate;
            self.detailData[0].projectLevel = res.riskRating;
            self.detailData[0].payPlan = res.type;
            self.detailData[0].description = res.projectDescription;
            // self.detailData[0].description = '想要报名托福学习课程，无奈费用太高，想请有缘人帮助';
          })
          .catch(function (response) {
            console.log(response);
            console.log("标的详情查看error");
            // alert("error")
          });
      },
      seeList(){
        window.location.href='/subjectManage';
      },
    }
  }
</script>


<style scoped>
  .mytable{
    min-width: 400px;
    min-height: 500px;
    padding: 0px 0px;
    line-height: 3px;
    background-color:transparent;
    color: black;
    border: none;
    font-size: 16px;
    font-family: "Microsoft YaHei UI";
    top:100px;
    width:100%;
    left: 0%;
    position: absolute;
    letter-spacing: 2px;
  }
  .tableBackground{
    background-color:transparent;
    min-height: 480px;
    padding:20px;
  }
  .usertable{
    min-width: 400px;
    padding: 240px 0px;
    line-height: 50px;
    color: black;
    border-collapse: collapse;
    border: none;
    font-size: 16px;
    font-family: "Microsoft YaHei UI";
    width:80%;
    left: 10%;
    height: 70%;
    position: absolute;
    letter-spacing: 2px;
  }
  .status-picker select {
    border-radius: 5px;
    width: 200px;
    float: left;
    height: 37px;
    margin-bottom: -13px;
    border: 1px solid rgba(34, 36, 38, .15);
    padding: 0 10px;
  }
</style>

