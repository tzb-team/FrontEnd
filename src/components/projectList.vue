<template>
  <div class="investList">
    <div class="type">
      <p class="center">STUDY</p>
    </div>
    <div style="height: 200px; margin-top: 20px">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div>
              <p class="month" style="margin-top:5%;">Profit : </p>
              <p class="profit">10.9840%</p>
              <p class="month">/ per year</p>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <p class="itemName">托福补课学费</p>
            <p class="money">￥3 000  </p><p class="moneyName"> / 剩余金额</p>
            <p style="margin-top:5%;">借款总金额：￥8 000</p>
            <div class="progress round-conner">
              <div class="curRate round-conner">
                <p>62.5%</p>
              </div>
              <div style="display:inline;"></div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="itemDescription" style="margin-top: 30px">
              <div>
                <el-row>
                  <el-button type="primary" round @click="showDetails">查看详情</el-button>
                </el-row>
                <br/>
                <p>借款截止：2018.9.10</p>
                <p>还款日期：2019.9.10</p>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "projectList",
    methods: {
      showDetails(){
        window.location.href='/userdetail';
      }
    }

  }
</script>

<style scoped>
  .progress {
    background: #A6A3A3;
    margin-left:5%;
    margin-right:5%;
  }
  .curRate {
    width: 62.5%;
    background: #409EFF;
    color:white;
  }
  .round-conner {
    height: 18px;
    border-radius: 15px;
  }
  .investList{
    background: white;
    border:1px solid #e4e4e4;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    max-height: 500px;
    text-align: center;
  }
  .investList:hover{
    border:2px solid #7CADDB;
  }
  .itemName{
    color:#616363;
    font-size:20px;
    margin-top:3%;
  }
  .itemDescription {
    color: #7A7A7A;
  }
  .month{
    color:#616363;
    font-size:16px;
    font-weight: 500;
  }
  .profit{
    color:#409EFF;
    font-size:46px;
    font-weight:500;
  }
  .center{
    margin: auto;
    text-align: center;
  }
  .type{
    background: #409EFF;
    max-width:60%;
    color:white;
    margin-left:20%;
    font-size:18px;
    height:25px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .moneyName{
    font-size:16px;
    color:#616363;
    display:inline;
  }
  .money{
    color:#616363;
    font-size:25px;
    display:inline;
  }

  .el-row {
    margin-bottom: 20px;
  }

  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  /*.bg-purple {*/
    /*background: #d3dce6;*/
  /*}*/
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>
