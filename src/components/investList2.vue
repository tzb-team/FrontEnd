<template>
  <div class="investList">
    <div style="height:130px;text-align: center;">
      <el-row :gutter="20">
        <el-col :span="6">
          <div style="display: inline;float: left;margin: -2px;padding: 0">
            <p class="text">{{investList.range}}</p>
            <div class="triangle-topleft">
            </div>
          </div>
          <div class="grid-content bg-purple" style="margin-left:30%;">
            <div style="margin-top:10%;">
              <p class="month" style="display: inline;">Profit : </p>
              <p class="profit" style="display: inline;">{{investList.profit}}</p>
              <p class="month" >/ per year</p>
              <p style="font-size:10px;display: inline-block;">标的编号：</p>
              <p style="display: inline-block;font-weight:800;">{{investList.id}}</p>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="type" style="text-align: center;">
            <p class="center">{{investList.type}}</p>
          </div>
          <div class="grid-content bg-purple">
            <p class="itemName">{{investList.name}}</p>
            <p class="money">￥{{investList.remainMoney}}</p><p class="moneyName"> / 剩余金额</p>
            <p>借款总金额：￥{{investList.money}}</p>
            <vm-progress :percentage="investList.finishProgress * 100"  :text-inside="true" :stroke-width="18" strokeColor="#F88562" :striped="true">
              {{investList.finishProgress * 100}}%
            </vm-progress>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="itemDescription" style="margin-top: 10px">
              <div>
                <el-row>
                  <el-button type="primary" round @click="showDetails" class="showDetails">查看详情</el-button>
                </el-row>
                <br/>
                <p style="font-size:10px;">借款截止：{{investList.beginTime}}</p>
                <p style="font-size:10px;">还款日期：{{investList.endTime}}</p>
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
    name: "investList2",
    data(){
      return{
        a:{
          id:0,
          isShow:true
        }
      }
    },
    methods: {
      showDetails(){
        //console.log(this.investList.id)
        this.a.id = this.investList.id;
        this.a.isShow = true;
        this.$router.push({name:'DoInvesting',params:{id:this.a.id, isShow:this.a.isShow}})
      }
    },
    props:['investList'],

  }
</script>

<style scoped>
  .text{
    color: white;
    font-size:35px;
    text-align: left;
    display: block;
    position:absolute;
    z-index:100;
    margin-left:3px;
  }
  .triangle-topleft{
    width: 0;
    height: 0;
    border-top: 80px solid #E73826;
    border-right: 100px solid transparent;
    display: block;
    position:absolute;
    z-index:10;
  }
  .progress {
    background: #A6A3A3;
    margin-left:5%;
    margin-right:5%;
  }
  .curRate {
    width: 60%;
    background: #F88562;
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
    max-height: 170px;
    text-align: center;
    margin-top:10px;
  }
  .investList:hover{
    border:2px solid #F88562;
  }
  .itemName{
    color:#616363;
    font-size:15px;
    margin-top:1%;
    margin-bottom: 0;
  }
  .itemDescription {
    color: #7A7A7A;
  }
  .month{
    color:#616363;
    font-size:12px;
    font-weight: 500;
  }
  .profit{
    color:#F88562;
    font-size:32px;
    font-weight:500;
  }
  .center{
    margin: auto;
    text-align: center;
  }
  .type{
    margin: auto;
    background: #A6A3A3;
    max-width:50%;
    color:white;
    font-size:10px;
    height:15px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .moneyName{
    font-size:10px;
    color:#616363;
    display:inline;
  }
  .money{
    color:#616363;
    font-size:18px;
    display:inline;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .showDetails{
    background: #F88562;
    border:1px solid #F88562;
  }

</style>
