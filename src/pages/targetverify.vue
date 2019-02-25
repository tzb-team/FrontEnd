<template>
  <div id="app">
    <!--顶栏 -->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <navi style="position: relative"></navi>
    </div>
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;">
      <div class="myspace">
        <h2 class="myspace">审核模块</h2>
        <p style="color: #777777;">审核用户非结构化信息，审核各类标的请求</p>
      </div>
    </div>

    <!--右边栏-->
    <div>
      <right-bar></right-bar>
    </div>

    <!--左边栏-->
    <div style="position:relative;top:200px;">
      <leftCheckBar></leftCheckBar>
    </div>

    <!--正文内容 -->
    <div class="back">
      <div id="check" class="sheet" style="position:relative;top:-400px;left:250px">
        <!--用户信息
        <div style="font-size:20px;"><strong>&nbsp;&nbsp;&nbsp;&nbsp;用户基本信息</strong></div>
        <div>
          <span>用户名:{{username}}</span>
        </div>
        <el-form-item label="用户名">
          <span>{{ props.row.username }}</span>
        </el-form-item>-->

        <el-table
          :data="tableData5"
          style="width: 100%">
          <el-table-column type="expand" >
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">

                <!--用户信息-->
                <el-form-item label="" >
                  <div style="font-size:20px;">
                    <strong>&nbsp;&nbsp;&nbsp;&nbsp;用户基本信息</strong>
                  </div>
                </el-form-item>
                <el-form-item ></el-form-item>
                <el-form-item label="用户名">
                  <span>{{ props.row.username }}</span>
                </el-form-item>
                <el-form-item label="风险评级">
                  <span>{{ props.row.grade }}</span>
                </el-form-item>
                <el-form-item label="非结构化信息审核情况">
                  <span>{{ props.row.state }}</span>
                </el-form-item>
                <el-form-item ></el-form-item>

                <!--项目基本信息 -->
                <el-form-item label="" >
                  <div style="font-size:20px;"><strong>&nbsp;&nbsp;&nbsp;&nbsp;项目基本信息</strong></div>
                </el-form-item>
                <el-form-item ></el-form-item>
                <el-form-item label="项目编号">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="项目名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="开始时间">
                  <span>{{ props.row.startTime }}</span>
                </el-form-item>
                <el-form-item label="结束时间">
                  <span>{{ props.row.endTime }}</span>
                </el-form-item>

                <!-- 资金去向 -->
                <el-form-item label="" >
                  <div style="font-size:20px;"><strong>&nbsp;&nbsp;&nbsp;&nbsp;资金去向</strong></div>
                </el-form-item>
                <el-form-item ></el-form-item>
                <el-form-item label="资金用途分类">
                  <span>{{ props.row.classify }}</span>
                </el-form-item>
                <el-form-item ></el-form-item>
                <el-form-item label="资金用途详述">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
                <el-form-item ></el-form-item>

                <!--关于贷款 -->
                <el-form-item label="" >
                  <div style="font-size:20px;"><strong>&nbsp;&nbsp;&nbsp;&nbsp;关于贷款</strong></div>
                </el-form-item>
                <el-form-item ></el-form-item>
                <el-form-item label="拆借金额">
                  <span>{{ props.row.money }}</span>
                </el-form-item>
                <el-form-item label="还款利率">
                  <span>{{ props.row.rate }}</span>
                </el-form-item>
                <el-form-item label="还款日期">
                  <span>{{ props.row.repayDate }}</span>
                </el-form-item>
                <el-form-item label="还款方式">
                  <span>{{ props.row.returntype }}</span>
                </el-form-item>

                <!--审核按钮-->
                <el-form-item ></el-form-item>
                <el-form-item
                  prop="action"
                  label="">
                  <router-link to="/smalltargetcheck">
                  <el-button
                    size="mini"
                    type="success"
                    @click="handleDelete(scope.$index, scope.row)">合格</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">不合格</el-button>
                  </router-link>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>

          <el-table-column
            label="申请人"
            prop="username"
            width="200">
          </el-table-column>
          <el-table-column
            label="申请人风险评级"
            prop="grade"
            width="200">
          </el-table-column>
          <el-table-column
            label="申请人非结构化信息审核情况"
            prop="state"
            width="450">
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!--底栏-->
    <div class="col-sm-12 col-md-12" style="float:bottom; padding:0;margin-top:100px;">
      <footerBar></footerBar>
    </div>

  </div>
</template>

<script>
  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue'
  import LeftCheckBar from "@/components/leftCheckBar";


  export default {
    name: "userverify",
    components:{LeftCheckBar, navi, footerBar, rightBar},
    data() {
      return {
        tableData5: [{
          username:"小红",          //用户名
          grade:'A',                //风险评级
          state:'已通过',
          id:'mu3424581',
          name: '看演唱会',
          startTime: '2018-8-25',
          endTime:'2018-12-25',
          classify:'日常开销',
          desc: '为爱豆吃一学期土！',
          money:1000,
          rate: '10%',
          repayDate:'2018-9-25',
          returntype: '等额本息',
        }]
      }
    }
  }
</script>

<style scoped>

  /*白色背景*/
  .back{
    /*background-color: rgba(173,216,230,0.5);*/
    width: 100%;
    height: 500px;
    display:flex;
  }

  .sheet{
    margin-top: 200px;
    margin-left:10%;

  }

  /*边栏样式*/
  .left{
    /*border:1px black solid;*/
    width:200px;
    height: 150px;
    margin-top: 120px;
    padding-top: 20px;
    position: fixed;
  }
  .left_label{
    width:200px;
    height:50px;
    /*margin-top: 20px;*/
    /* border: 1px black solid;*/
    text-align:center;
    padding-top: 17px;
    font-size: 16px;
  }

  /*完成按钮样式*/
  .button_position{
    width:200px;
    padding:20px;
    height:800px;
    margin:10px;
    position: relative;
    top:600px;
    left:1000px;
  }
  .button{
    background-color: #4285F4;
    border: none;
    border-radius: 12px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    opacity: 0.6;
  }

  /*图片栏*/
  .pic{
    border:2px  solid  black;
    width:850px;
    padding:20px;
    height:500px;
    margin:10px;
    position: relative;
    top:100px;
    left:100px;
  }

  div.myspace{
    /*个人中心*/
    text-indent: 4.5%;
    color: black;
    background-color: white;
    margin: 0px;
    border: 0px;
    padding: 5px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
  }
  .myspace p{
    font-size: 15px;
    color: #505050;
  }

  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

  .title{
    font-size:20px;
    }
</style>
