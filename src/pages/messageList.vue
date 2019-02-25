<template>
  <div class="container">
    <navi></navi>
    <div class="myspace">
      <h2>通知中心</h2>
      <p style="color: #777777;">在这里，您可以浏览查看验证结果、借款进展、投资、还款、交易状况、发布情况等通知消息</p>
    </div>


    <el-card class="box-card">
      <el-menu :default-active="activeIndex" class="el-menu-demo is-always-shadow" mode="horizontal" @select="handleSelect" active-text-color="dodgerblue" default-active="1">
        <el-menu-item index="1">全部</el-menu-item>
        <el-menu-item index="2">验证</el-menu-item>
        <el-menu-item index="3">借款</el-menu-item>
        <el-menu-item index="4">还款</el-menu-item>
        <el-menu-item index="5">投资</el-menu-item>
        <el-menu-item index="6">交易</el-menu-item>
        <el-menu-item index="7">发布</el-menu-item>
      </el-menu>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%;min-height: 300px">
        <el-table-column
          prop="state"
          label="状态"
          width="100">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="150">
        </el-table-column>
        <el-table-column
          prop="time"
          label="时间"
          width="100">
        </el-table-column>
        <el-table-column
          prop="kind"
          label="类型"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="content"
          label="内容">
        </el-table-column>
        <el-table-column
          label="操作"
          width="100"
        >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div style="margin-top: 20px">
        <a v-on:click="allDelete()">一键删除</a>
      </div>


    </el-card>
    <footer-bar></footer-bar>
    <right-bar></right-bar>

    <!--<el-card id="messageDetail">-->
      <!--<div style="text-align: center;margin-top: 6%">-->
        <!--<h3 style="padding-bottom: 20px;color: lightskyblue">消息详情</h3>-->
        <!--<h4>日期：{{dateOfDetail}}</h4>-->
        <!--<h4>时间：{{timeOfDetail}}</h4>-->
        <!--<h4>类型：{{kindOfDetail}}</h4>-->
      <!--</div>-->
      <!--<div style="padding: 30px;padding-right: 70px;padding-left: 70px;">-->
        <!--<p>{{contentOfDetail}}</p>-->
      <!--</div>-->
    <!--</el-card>-->
    <!--<a v-on:click="closeDetail()" id="closeDetail" style="position:fixed;z-index: 11;top: 450px;left:35%">查看完毕</a>-->


  </div>

</template>

<script>
  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue'

    export default {
        name: "messageList",
      components:{navi, footerBar, rightBar},
      data(){
        return{
          dateOfDetail: '2018-09-10',
          timeOfDetail: '19:18:31',
          kindOfDetail: '借款',
          contentOfDetail:'您的编号10012的借款申请已经通过审核，可在个人空间查看借款进度，祝您早日借款成功。',
          tableData: [
            // {
            //   state: '最新',
            //   date: '2018-09-21',
            //   time: '21:01',
            //   kind: '借款进展',
            //   content: '您的编号10012的借款申请已经通过审核，可在个人空间查看借款进度，祝您早日借款成功。'
            // },
            // {
            //   state: '最新',
            //   date: '2018-09-20',
            //   time: '19:34',
            //   kind: '发布情况',
            //   content: '您在2018年9月20日发布的“失物招领”帖发布成功，感谢您为校园物品寻回助力。'
            // },
            // {
            //   state: '已读',
            //   date: '2018-09-16',
            //   time: '14:45',
            //   kind: '交易情况',
            //   content: '您在2018年9月20日发布的“出售加湿器”出物帖交易成功，请及时在相应界面对其进行操作。'
            // },
            // {
            //   state: '已读',
            //   date: '2018-09-14',
            //   time: '11:36',
            //   kind: '借款进展',
            //   content: '您的借款标的456365，已提前满标，请在相应界面对其进行操作。'
            // },
            // {
            //   state: '已读',
            //   date: '2018-09-11',
            //   time: '12:35',
            //   kind: '验证结果',
            //   content: '恭喜您，用户个人信息完善成功，目前账户等级为中级。'
            // }
          ]
        }
      },
      mounted: function () {
        localStorage.route="#message";
        $('#message').attr('src', '/static/pic/message_blue.png');
      },
      methods:{
         allDelete: function () {
           this.tableData=[];
         },
        deleteRow(index, rows) {
          rows.splice(index, 1);
        }
      }

    }
</script>

<style scoped>
  .container {
    width:100%;
    /*background-image:url('/static/pic/messageBackground.png');*/
    /*background-size: cover;*/
    /*background-attachment:fixed;*/
    /*background-position: center center;*/
    /*background-repeat: no-repeat;*/
    padding: 0;
  }

  .myspace {
    text-indent: 6.3%;
    color: black;
    background-color: white;
    margin: 0px;
    border: 0px;
    padding: 5px;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, .12),
    0 1px 6px 0 rgba(0, 0, 0, .12);
    border-radius: 3px;
  }

  .el-card{
    width: 90%;
    margin-left: 5%;
    margin-top: 15px;
    padding-left: 0;
    padding-right: 0;
    margin-bottom: 75px;
  }

  .el-menu-item{
    width: 100px;
    text-align: center;
    font-size: 15px;
  }

  .chooseKind button{
    display: inline;
    background-color: transparent;
    border: none;
    font-size: 16px;
    color: #48576a;
    width: 100px;
  }
  a{
    margin-right: 30px;
    color: dodgerblue;
    cursor: pointer;
  }

  #messageDetail{
    position: fixed;
    height: 400px;
    width:40%;
    margin-left: 30%;
    top: 100px;
    z-index: 10;
  }

  #messageDetail h4{
    display: inline;
    margin-right: 2.5%;
    margin-left: 2.5%;
    color: #909399;
  }

  #messageDetail a{
    color: dodgerblue;
    float: bottom;
    bottom: 10px;
    margin-left: 20px;
  }

  .el-card__body{
    height: 100%;
  }

</style>
