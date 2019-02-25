<template>
  <check-center paneltitle="大额标的审核">
    <div id="check" class="sheet">
      <el-table
        :data="tableData"
        max-height="500"
        :default-sort = "{prop: 'time', order: 'descending'}">
        <el-table-column
          prop="time"
          label="提交时间"
          sortable>
        </el-table-column>
        <el-table-column
          prop="name"
          label="标的名称">
        </el-table-column>
        <el-table-column
          prop="state"
          label="当前状态">
          <template slot-scope="scope">
            <el-tag :type="scope.row.state | statusFilter">{{scope.row.state | formatStata}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="100%">
          <template slot-scope="scope">
            <i class="el-icon-view"></i>
            <el-button type="text" @click="dialogFormVisible = check(scope.$index)">审核</el-button>
            <el-dialog title="大额标的审核"
                       :lock-scroll="false"
                       :visible.sync="dialogFormVisible">
              <el-steps :active="active" finfish-status="success">
                <el-step title="第一部分" description="用户基本信息"></el-step>
                <el-step title="第二部分" description="项目基本信息"></el-step>
                <el-step title="第三部分" description="资金去向"></el-step>
                <el-step title="第四部分" description="关于贷款"></el-step>
              </el-steps>

              <br/><br/>
              <el-form v-show="control.part1"
                       style="margin-left:30%">
                <el-form-item label="用户名">{{ tableData[tempindex].username}}</el-form-item>
                <br/>
                <el-form-item label="风险评级">{{ tableData[tempindex].risk }}</el-form-item>
                <br/>
                <el-form-item label="非结构化信息审核情况">{{ tableData[tempindex].userstate }}</el-form-item>
              </el-form>
              <el-button style="margin-top: 12px;margin-left:45%;" type="primary" size="mini" v-show="control.part1" @click="next(control)">下一步</el-button>

              <el-form style="margin-left:30%"
                       v-show="control.part2" >
                <el-form-item label="项目编号"><span>{{ tableData[tempindex].projectid}}</span></el-form-item>
                <el-form-item label="项目名称">{{ tableData[tempindex].name }}</el-form-item>
                <el-form-item label="开始时间">{{ tableData[tempindex].startTime }}</el-form-item>
                <el-form-item label="结束时间">{{ tableData[tempindex].endTime }}</el-form-item>
              </el-form>
              <el-button style="margin-top: 12px;margin-left:35%;"type="primary" size="mini" v-show="control.part2" @click="last(control)">上一步</el-button>
              <el-button style="margin-top: 12px;margin-left:5%;" type="primary" size="mini"v-show="control.part2" @click="next(control)">下一步</el-button>

              <el-form   v-show="control.part3"
                         style="margin-left:5%;margin-right:5%">
                <el-form-item label="资金用途分类"><span>{{ tableData[tempindex].classify}}</span></el-form-item>
                <el-form-item label="资金用途详述">{{ tableData[tempindex].desc }}</el-form-item>
                <el-form-item label="凭证">
                  <template >
                    <img v-bind:src=tableData[tempindex].pic alt="user" class="pics"/>
                  </template>
                </el-form-item>
              </el-form>
              <el-button style="margin-top: 12px;margin-left:35%;" type="primary" size="mini"v-show="control.part3"@click="last(control)">上一步</el-button>
              <el-button style="margin-top: 12px;margin-left:5%;"type="primary" size="mini" v-show="control.part3"@click="next(control)">下一步</el-button>

              <el-form   v-show="control.part4"
                         style="margin-left:30%">
                <el-form-item label="拆借金额"><span>{{ tableData[tempindex].money}}</span></el-form-item>
                <el-form-item label="还款利率">{{ tableData[tempindex].rate }}</el-form-item>
                <el-form-item label="还款期数">{{ tableData[tempindex].repayDate }}</el-form-item>
                <el-form-item label="还款方式">{{ tableData[tempindex].returntype }}</el-form-item>
              </el-form>
              <el-button style="margin-top: 12px;margin-left:45%;"type="primary" size="mini" v-show="control.part4"@click="last(control)">上一步</el-button>

              <div slot="footer" class="dialog-footer">
                <el-button
                  v-show="control.part4" type="primary" @click="dialogFormVisible = send1(tableData[tempindex].projectid)">确 定</el-button>
              </div>
            </el-dialog>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </check-center>
</template>

<script>
  import CheckCenter from '../components/CheckCenter'
  export default {
    name: "largetargetcheck",
    components:{CheckCenter},
    mounted: function() {
      // this.getSmallTargetCheckList();
      this.getLargeTargetCheckDetails();
    },
    methods:{
      getLargeTargetCheckDetails(){
        console.log("大额标的核审详情");
        let self = this;
        this.$axios.get('adminTarget/pendingTarget',{
          params:{
            targetType: "LARGE"
          }
        })
          .then(function (response) {
            console.log(response);
            console.log("大额标的核审详情success");
            console.log(response.data);
            let res = response.data;
            console.log("checkState:"+res[0].checkState);

            let returnData = [];
            let tmp;
            for(let i of res){

              // switch (i.checkState) {
              //   case "ONGING": tmp = "进行中";break;
              //   case "PASS": tmp = "已通过";break;
              //   case "REJECT": tmp = "已被拒绝";break;
              //   case "UPDATE": tmp = "用户再次提交信息";break;
              // };
              // i.checkState = tmp;
              //
              // switch (i.classify) {
              //   case "EXCHANGE_PROJECT": tmp = "交换生";break;
              //   case "GMAT": tmp = "GMAT";break;
              //   case "TOEFL": tmp = "TOEFL";break;
              //   case "IELTS": tmp = "IELTS";break;
              //   case "DAILY_EXPENSE": tmp = "日常费用";break;
              //   case "CONCERT": tmp = "演唱会看比赛看剧音乐会等";break;
              //   case "GAME_MOVIE_MUSIC": tmp = "游戏娱乐电影音乐";break;
              //   case "TRAVEL": tmp = "旅游";break;
              //   case "ELECTRONIC_DEVICE": tmp = "购买电子设备";break;
              //   case "OTHER": tmp = "其他购买项比如化妆品衣服鞋";break;
              //   case "CERTIFICATE_TEST": tmp = "出国所需考试的相关成绩单";break;
              //   case "TRAIN": tmp = "各类考证";break;
              //   case "PROFESSIONAL_QUALIFICATION": tmp = "职业资格证";break;
              // };
              // i.classify = tmp;
              //
              // switch (i.returntype) {
              //   case "EQUAL_PRINCIPAL": tmp = '等额本金'; break;
              //   case "EQUAL_INSTALLMENT_OF_PRINCIPAL_AND_INTEREST": tmp = '等额本息'; break;
              //   case "ONE_TIME_PAYMENT": tmp = '一次性还付本息'; break;
              //   case "PRE_INTEREST": tmp = '先息后本'; break;
              // }

              i.returntype = tmp;
              returnData.push({
                time: i.startTime,//提交时间？？
                name: i.name,//项目名称
                state: 1,//当前状态,待审核啥的。。//woc这里竟然是用数字表示核审状态！！
                action:'',//unused，表理他就行
                username:i.username,//用户名
                risk:i.grade,//风险评级
                userstate: i.checkState,//checkState?非结构化信息审核情况
                projectid: i.targetId,//项目编号
                startTime: i.startTime,//项目名称
                endTime: i.endTime,//结束时间
                classify:i.classify,//资金用途分类
                desc: i.explanation,//资金用途详述
                money: i.money,//拆借金额
                rate: i.creditRating,//还款利率
                repayDate: i.duration,//还款日期
                returntype: i.returntype,//还款方式
                pics: i.proof,//凭证路径
              });
            }
            console.log("checkState:"+returnData[0].checkState);

            self.tableData = returnData;

          })
          .catch(function (response) {
            console.log(response);
            console.log("大额标的核审详情error");
            // alert("error")
          });
      },//获取待审核标详情

      check: function(index){
        this.tempindex = index;
        //console.log(index);
        return true;
      },
      last(control){
        console.log(this.active);
        if (this.active === 2){
          this.active = this.active - 1;
          control.part1 = true;
          control.part2 = false;
        }
        else if(this.active === 3){
          this.active = this.active - 1;
          control.part3 = false;
          control.part2 = true;
        }
        else{
          this.active = this.active - 1;
          control.part4 = false;
          control.part3 = true;
        }
      },
      next(control){
        console.log(this.active);
        if(this.active === 1){
          control.part1 = false;
          control.part2 = true;
        }
        else if (this.active === 2){
          control.part2 = false;
          control.part3 = true;
        }
        else if (this.active === 3){
          control.part3 = false;
          control.part4 = true;
        }
        if(this.active++ > 4) {
          this.active = 0;
        }
      },
      send: function (userstate) {
        //这里会将状态改变传给后端，重新加载页面的时候状态就会传过来，自动跳转到状态2的情况
        console.log(userstate);
        this.$confirm('您的用户选择已提交。系统将及时发送问卷至相应用户邮箱。', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '发送成功!'
          });
          this.$router.push('/UserSpace/CrossCheck');
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
        return false;

      },
      send1: function (targetId) {
        let flag = false;
        console.log(targetId+"号核审状态修改，准备发送");
        //这里会将状态改变传给后端，重新加载页面的时候状态就会传过来，自动跳转到状态2的情况
        this.$axios.get('adminTarget/targetcheck', {
          params:{
            targetId: targetId,
            result: "PASS"
          }
        })
          .then(function (response) {
            console.log(response);
            alert("修改成功！");
            flag = true;
            //self.getUserDetails();
          })
          .catch(function (response) {
            console.log(response);
            alert("修改失败！请检测您的网络连接");
          })

        if(flag){
          this.$message({
            message:'提交成功',
            type:'success',
          });
        }
        this.tableData.splice(this.tempindex, 1);
        this.active = 1;
        this.control.part1=true;
        this.control.part2=false;
        this.control.part3=false;
        this.control.part4=false;
        //this.$router.replace('/UserSpace/CrossCheck');
        return false;
      },
    },
    filters: {
      // el-tag类型转换
      statusFilter(status) {
        const statusMap = {
          1: '',
          2: 'warning',
        }
        return statusMap[status]
      },
      // 状态显示转换
      formatStata(status) {
        const statusMap = {
          1: '待审核',
          2: '初审未通过',
        }
        return statusMap[status]
      }
    },
    data(){
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        },
        dialogFormVisible: false,
        active:1,
        control:{
          part1:true,
          part2:false,
          part3:false,
          part4:false,
        },
        tempindex:0,
        date1: '',
        date2: '',
        date3: '',
        usage_radio: 3,
        textarea1: '',
        formInline: {
          user: '',
          region: ''
        },

        tableData: [{
          time:'2018-08-06',
          name: '考托福',
          state: 1,
          action:'',
          username:'张一一',
          risk:'AA',
          userstate:'已通过',
          projectid:'mu3424581',
          startTime: '2018-8-25',
          endTime:'2018-12-25',
          classify:'日常开销',
          desc: '本人第一次考托福，真的觉得有点小贵，最近生活费不太富足，所以想着先在平台少借一点点啦！！！拜托大家给个机会！',
          pics:'',
          money:200,
          rate: '10%',
          repayDate:'2018-9-25',
          returntype: '等额本息',
          pic:"../../static/pic/大额1.png",
        }, {
          time:'2018-09-08',
          name: '考托福',
          state: 1,
          action:'',
          username:'张一一',
          risk:'AA',
          userstate:'已通过',
          projectid:'mu3424581',
          startTime: '2018-8-25',
          endTime:'2018-12-25',
          classify:'日常开销',
          desc: '本人第一次考托福，真的觉得有点小贵，最近生活费不太富足，所以想着先在平台少借一点点啦！！！拜托大家给个机会！',
          pics:'',
          money:200,
          rate: '10%',
          repayDate:'2018-9-25',
          returntype: '等额本息',
          pics:'',
        }, {
          time:'2018-08-13',
          name: '考雅思',
          state: 1,
          action:'',
          username:'张一一',
          risk:'AA',
          userstate:'已通过',
          projectid:'mu3424581',
          startTime: '2018-8-25',
          endTime:'2018-12-25',
          classify:'日常开销',
          desc: '本人第一次考托福，真的觉得有点小贵，最近生活费不太富足，所以想着先在平台少借一点点啦！！！拜托大家给个机会！',
          pics:'',
          money:200,
          rate: '10%',
          repayDate:'2018-9-25',
          returntype: '等额本息',
          pics:'',
        },{
          time:'2018-09-06',
          name: '报班再战托福',
          state: 2,
          action:'',
          username:'张一一',
          risk:'AA',
          userstate:'已通过',
          projectid:'mu3424581',
          startTime: '2018-8-25',
          endTime:'2018-12-25',
          classify:'日常开销',
          desc: '本人第一次考托福，真的觉得有点小贵，最近生活费不太富足，所以想着先在平台少借一点点啦！！！拜托大家给个机会！',
          pics:'',
          money:200,
          rate: '10%',
          repayDate:'2018-9-25',
          returntype: '等额本息',
          pics:'',
        },{
          time:'2018-09-04',
          name: '出国党求支援',
          state: 1,
          action:'',
          username:'张一一',
          risk:'AA',
          userstate:'已通过',
          projectid:'mu3424581',
          startTime: '2018-8-25',
          endTime:'2018-12-25',
          classify:'日常开销',
          desc: '本人第一次考托福，真的觉得有点小贵，最近生活费不太富足，所以想着先在平台少借一点点啦！！！拜托大家给个机会！',
          pics:'',
          money:200,
          rate: '10%',
          repayDate:'2018-9-25',
          returntype: '等额本息',
          pics:'',
        }, {
          time:'2018-08-31',
          name: '急需雅思报名费',
          state: 1,
          action:'',
          username:'张一一',
          risk:'AA',
          userstate:'已通过',
          projectid:'mu3424581',
          startTime: '2018-8-25',
          endTime:'2018-12-25',
          classify:'日常开销',
          desc: '本人第一次考托福，真的觉得有点小贵，最近生活费不太富足，所以想着先在平台少借一点点啦！！！拜托大家给个机会！',
          pics:'',
          money:200,
          rate: '10%',
          repayDate:'2018-9-25',
          returntype: '等额本息',
          pics:'',
        }]
      };
    },
  }
</script>

<style scoped>
  .sheet{
    margin-top: 5%;
    margin-left:8%;
    margin-right:8%;
  }
</style>
<style>
  #leftC { color: dodgerblue !important}
</style>
