<template>
  <div class="investList">
    <div style="height:100px;text-align: center;">
      <el-row :gutter="20">
        <el-col :span="6">
          <div style="display: inline;float: left;margin: -2px;padding: 0">
            <p class="text">{{investList.transactionid}}</p>
            <div class="triangle-topleft">
            </div>
          </div>
          <div class="grid-content bg-purple" style="margin-left:5%;">
            <div style="margin-top:10%;">
              <br>
              <p class="month" style="display: inline;">专利名称:<strong>{{investList.profit}}</strong></p><br>
              <!-- <p class="profit" style="display: inline;"></p><br> -->
              <br>
              <p class="month" style="display: inline;">专利号:<strong>{{investList.id}}</strong> </p>
              <!-- <p class="profit" style="display: inline;"><b>{{investList.id}}</b></p> -->
              <!-- <p class="month" >/ per year</p> -->
              <!-- <p style="font-size:10px;display: inline-block;">标的编号：</p>
              <p style="display: inline-block;font-weight:800;">{{investList.id}}</p> -->
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="type" style="text-align: center;">
            <p class="center">{{investList.type}}</p>
          </div>
          <div class="grid-content bg-purple" style="margin-top:20px">
            <!-- <p class="itemName">{{investList.name}}</p> -->
            <!-- <p class="money">￥{{investList.remainMoney}}</p>-->
            <!-- <p class="moneyName">&#32;</p> -->
            <p>from：<font color=blue>{{investList.money}}</font></p>
            <p>to：<font color=blue>{{investList.money}}</font></p>
            <!-- <vm-progress :percentage="investList.finishProgress * 100"  :text-inside="true" :stroke-width="18" strokeColor="#F88562" :striped="true">
              {{investList.finishProgress * 100}}%
            </vm-progress> -->  
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="itemDescription" style="margin-top: 23px">
              <div>
                <el-row>
                  <el-button type="primary" round @click="showDetails" class="showDetails">view transaction</el-button>
                </el-row>
                <br/>
                <p style="font-size:12px;">交易价格：{{investList.beginTime}}</p>
                <!-- <p style="font-size:10px;">还款日期：{{investList.endTime}}</p> -->
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
    border-top: 70px solid #E73826;
    border-right: 90px solid transparent;
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
    font-size:13px;
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
    font-size:13px;
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
