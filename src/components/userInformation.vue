<template>
  <div>
    <div id="userinformation">
      <el-row>
        <el-col :span="16">
          <div class="user_info">
            <div class="table-responsive">
              <table class="table" style="border: 0px solid transparent">
                <tbody>
                <tr>
                  <th>用户名</th>
                  <td> {{ userName.name }} </td>
                </tr>
                <tr>
                  <th>性别</th>
                  <td> {{ userName.sex }} </td>
                </tr>
                <tr>
                  <th>年龄</th>
                  <td> {{ userName.age }} </td>
                </tr>
                <tr>
                  <th>账户等级</th>
                  <td> {{ userName.level }} </td>
                </tr>
                <tr v-if="true">
                  <th>学号</th>
                  <td> {{ userName.stuNum }} </td>
                </tr>
                <tr v-if="true">
                  <th>年级</th>
                  <td> {{ userName.grade }} </td>
                </tr>
                <tr v-if="true">
                  <th>专业</th>
                  <td> {{ userName.major }} </td>
                </tr>
                <tr>
                  <th>手机号</th>
                  <td> {{ userName.phone }} </td>
                </tr>
                <tr>
                  <th>支付宝账号</th>
                  <td> {{ userName.alipay }} </td>
                </tr>
                <tr>
                  <th>邮箱</th>
                  <td> {{ userName.email }} </td>
                </tr>
                <tr v-if="true">
                  <th>工作单位</th>
                  <td> {{ userName.workaddr }} </td>
                </tr>
                <tr>
                  <th>现居地</th>
                  <td colspan="3" rowspan="2">{{ userName.address }}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="user_photo">
            <br>
            <img src="/static/pic/nju_user.jpg" width="200" height="200" class="img-responsive img-thumbnail" alt="User_pic" >
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

  export default {
    name: "userInformation",
    data(){
      return{

      }
    },
    mounted() {

    },
    methods: {

    },
    props:['userName'],
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

  div.user_credit{
    margin-top: 2%;
    margin-left: 6%;
    margin-right: 6%;
    text-align: left;
    font-size: 16px;
    color: #505050;
    min-height: 250px;
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

  #myGraph{
    margin-left: 6%;
    margin-right: 6%;
    text-indent: 5px;
    text-align: left;
    /*background-image: url("../../static/pic/CrossLines.png");*/
    background-size:100% 100%;
    -moz-background-size:100% 100%;
  }

</style>

