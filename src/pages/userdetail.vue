<template>
  <div class="UserDetail" >
    <adminNavi></adminNavi>
    <div class="userdetail" style="padding:50px;position: absolute;width:100%;min-height:900px;">
      <table style="margin:0 auto;">
        <tbody>
        <tr>
          <td>
            <div class="base-info" style="padding:30px 0px 50px 0px;font-size:14px;">
              <div style="display: flex;font-size:18px;">
                <label>用户名称：</label>
                <label>{{baseinfo.name}}</label>
                <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <label>信用评级：</label>
                <label>{{baseinfo.level}}</label>
                <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <label >手机号：</label>
                <label>{{baseinfo.tel}}</label>
                <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <label>邮箱：</label>
                <label>{{baseinfo.email}}</label>
                <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <label>借款状态：</label>
                <label>{{baseinfo.state}}</label>
              </div>
            </div>
            <hr/>
            <div class="details" style="min-height:700px;padding-top: 50px;">
              <el-tabs :tab-position="tabPosition">
                <el-tab-pane label="投资详情">
                  <div style="padding:0px 0px 0px 20px;">
                    <investInfoTabs :username="username"></investInfoTabs>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="借款详情">
                  <div style="padding:0px 0px 0px 20px;">
                    <loanInformationPane :username="username"></loanInformationPane>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="个人财务">
                  <div style="padding:0px 0px 0px 20px;">
                    <fin-standing :username="username"></fin-standing>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
            <div style="padding:30px;float: right;">
                <el-button class="returnButton" plain @click="seeList">返回列表</el-button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>

      <br/>
      <br/>




    </div>

  </div>



</template>

<script>
  import loanTopBar from "../components/loanTopBar";
  import loanUnderway from "../components/loanUnderway"
  import loanComplete from "../components/loanComplete"
  import loanLaunched from "../components/loanLaunched"
  import loanUnbelievable from "../components/loanUnbelievable"
  import adminNavi from '@/components/adminNavi.vue';
  import FinStanding from "../components/finStanding";
  import investInfoTabs from "../components/investInfoTabs";
  import loanInformationPane from "../components/LoanInformationPane"

  export default {
    name: "userdetail",
    components:{adminNavi,loanTopBar,loanUnderway,loanComplete,loanLaunched,loanUnbelievable,FinStanding,investInfoTabs,loanInformationPane},
    data() {
      return {
        username:this.$route.params.username,
        currentPage1: 2,
        activeName: 'first',
        tabPosition:"left",
        baseinfo:{
          name:'',
          level:'',
          tel:'',
          email:'',
          state:'',
        }
      }
    },
    beforeCreate:function(){
      localStorage.route='#userdetail'
    },
    mounted:function () {
      //this.show()
      this.baseinfo.name = this.$route.params.username
      this.baseinfo.level = this.$route.params.level
      this.baseinfo.tel = this.$route.params.tel
      this.baseinfo.email = this.$route.params.email
      this.baseinfo.state = this.$route.params.state
    },
    methods:{
      show(){
        console.log(this.$route.params)
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      seeList(){
        window.location.href='/usermanage';
      },
    }
  }
</script>


<style scoped>
  .userdetail{
    min-width: 160px;
    min-height: 80px;
    padding: 0px 0px;
    line-height: 10px;
    border: none;
    font-size: 14px;
    font-family: "Microsoft YaHei UI";
    top: 60px;
    position: absolute;
    letter-spacing: 2px;
  }

</style>

<style scoped>
  .details >>> .el-tabs__item{
    font-size: 20px;
    padding: 70px 20px 30px 20px;
    width: 150px;
    height: 100px;
    text-align: center;
  }
  .details{
    background-color:white;
    width: 1200px;
    min-height: 700px;
  }
</style>
