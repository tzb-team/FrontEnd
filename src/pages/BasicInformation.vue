<template>
  <personalCenter paneltitle="基本信息">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="个人资料" name="first">
        <user-information v-bind:user-name="userName"></user-information>
      </el-tab-pane>
      <el-tab-pane label="修改资料" name="second">
        <div style="padding-left: 60px;padding-right: 200px">
          <br/>
          <el-form ref="userName"  :model="userName" label-width="80px" :label-position="labelPosition">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="userName.name" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
              <template>
                <el-radio v-model="userName.sex" label="男">男</el-radio>
                <el-radio v-model="userName.sex" label="女">女</el-radio>
              </template>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
              <el-input v-model="userName.age"></el-input>
            </el-form-item>
            <el-form-item label="工作单位" prop="workaddr">
              <el-input v-model="userName.workaddr"></el-input>
            </el-form-item>
            <el-form-item label="现居地" prop="address">
              <el-input v-model="userName.address"></el-input>
            </el-form-item>
            <el-form-item style="float:right;">
              <el-button type="primary" @click="submitChange">提交</el-button>
            </el-form-item>
          </el-form>

        </div>
      </el-tab-pane>
      <!--<el-tab-pane label="安全服务" name="third">-->
        <!--<div class="user_sec">-->
          <!--<div class="chooseButton">-->
            <!--<el-radio v-model="secService" label="1" >修改密码</el-radio>-->
            <!--<el-radio v-model="secService" label="2" >修改绑定邮箱</el-radio>-->
            <!--<el-radio v-model="secService" label="3" >修改绑定手机</el-radio>-->
            <!--<el-radio v-model="secService" label="4"  >设置密保问题</el-radio>-->
          <!--</div><hr/><br/>-->
          <!--<div v-show="secService=='1'">-->
            <!--<changepassword></changepassword>-->
          <!--</div>-->
          <!--<div v-show="secService=='2'">-->
            <!--<modifymailbox></modifymailbox>-->
          <!--</div>-->
          <!--<div v-show="secService=='3'">-->
            <!--<modifyphone></modifyphone>-->
          <!--</div>-->
          <!--<div v-show="secService=='4'">-->
            <!--<set-password-protection></set-password-protection>-->
          <!--</div>-->
        <!--</div>-->

      <!--</el-tab-pane>-->
    </el-tabs>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";
  import Changepassword from "../components/changePassword";
  import OrdinaryNormalCheck from "../components/ordinaryNormalCheck";
  import Modifymailbox from "../components/modifyMailBox";
  import Modifyphone from "../components/modifyPhone";
  import SetPasswordProtection from "../components/setPasswordProtection";
  import UserInformation from "../components/userInformation";

  export default {
    name:"basicinformation",
    components: {
      UserInformation,
      SetPasswordProtection, Modifyphone, Modifymailbox, OrdinaryNormalCheck, Changepassword, personalCenter},
    mounted: function() {
      this.getUserDetails();
    },
    data() {
      return {
        activeName: 'first',
        userName: {
          name: 'test',
          sex: '女',
          age: '20',
          level: '高级账户',
          stuNum: '161090000',
          grade: '大二',
          major: '金融学',
          phone: '13055644123',
          alipay: '13055644123',
          email: 'lovetrust@trust.com',
          workaddr: '南京大学',
          address: '江苏省南京市栖霞区仙林大道163号南京大学仙林校区'
        },
        secService: '1',
        labelPosition: 'right',
      };
    },
    methods: {
      handleClick(tab, event) {
        if(activeName == 'second')
        {
          alert('修改密码');
        }
        else
        {
          alert('hhh');
        }
        console.log(tab, event);
      },
      getUserDetails(){
        // alert("用户总览");
        console.log("个人信息");
        let self = this;
        this.$axios.get('/profile/personalInformation',{
          params:{
            username:localStorage.username
          }
        })
          .then(function (response) {
            console.log(response);
            console.log("个人信息success");
            console.log(response.data);
            let res = response.data;

            let ulevel = 0;
            switch (res.userLevel) {
              case 'PRIMARY': ulevel ='高级账号';break;
              //TODO to complete it
              default:
                ulevel = '普通账号';
            }

            let regUser= {
                name: res.username,
                sex: res.gender,
                age: res.age,
                level: ulevel,
                stuNum: res.studentId,
                grade: res.grade,
                major: res.major,
                phone: res.phoneNumber,
                alipay: res.alipay,
                email: res.email,
                workaddr: res.institution,
                address: res.livingPlace,
              };

            self.userName = regUser;
          })
          .catch(function (response) {
            console.log(response);
            // alert("error")
          });
      },
      submitChange()
      {
        let self = this;
        let username =  self.userName.name;
        let gender = self.userName.sex;
        let age = self.userName.age;
        let institution = self.userName.workaddr;
        let livingPlace = self.userName.address;
        this.$axios.post('/profile/changeInformation', {
          username: username,
          gender: gender,
          age: age,
          institution: institution,
          livingPlace: livingPlace
        })
          .then(function (response) {
            console.log(response);
            alert("修改成功！");
            self.getUserDetails();
            self.$router.replace("/userSpace/BasicInformation");
          })
          .catch(function (response) {
            console.log(response);
            alert("修改失败！请检测您的网络连接");
            self.$router.replace("/userSpace/BasicInformation");
          })
      }

    }
  }

</script>

<style scoped>

  /*----------用户信息查看-------------*/
  div.user_info{
    margin-top: 2%;
    margin-left: 6%;
    margin-right: 6%;
    text-align: left;
    font-size: 16px;
    color: #505050;
    min-height: 550px;
  }

  div.user_sec{
    margin-top: 2%;
    margin-left: 6%;
    margin-right: 6%;
    text-align: left;
  }

  .user_info .table>tbody>tr>td{
    border:0px;
  }

  .user_info .table>tbody>tr>th{
    border:0px;
    min-width: 110px;
  }

  .user_credit caption>b{
    color: #333333;
    font-size: large;
  }

  .user_info_title{
    color: #505050;
  }

</style>

<style>
  .el-tabs__item{
    font-size: 18px !important;
  }
</style>

<style>
  /*#leftOV,#leftFS,#leftSP,#leftLI,#leftLS,#leftII,#leftIE,#leftNC,#leftAC,#leftCC{ color: #777777 !important; }*/
  #leftBI { color: dodgerblue !important}
</style>
