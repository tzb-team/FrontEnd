<template>
  <div class="investList">
    <div style="height:130px;text-align: center;">
      <el-row :gutter="20">
        <el-col :span="6">
          <div style="display: inline;float: left;margin: -2px;padding: 0">
            <p class="text">{{investList.orderid}}</p>
            <div class="triangle-topleft">
            </div>
          </div>
          <div class="grid-content bg-purple" style="margin-left:30%;">
            <div style="margin-top:10%;">
              <!-- <p class="month" style="display: inline;">Profit : </p>
              <p class="profit" style="display: inline;">{{investList.profit}}</p>
              <p class="month" >/ per year</p> -->
              <p style="font-size:10px;display: inline-block;margin-top:28%">专利号码：</p>
              <p style="display: inline-block;font-weight:800;">{{investList.id}}</p>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="type" style="text-align: center;">
            <p class="center">{{investList.type}}</p>
          </div>
          <div class="grid-content bg-purple">
            <p class="itemName" style="font-size:200%;margin-top:5%">{{investList.name}}</p>
            <!-- <p class="money">￥{{investList.remainMoney}}</p><p class="moneyName"> / 剩余金额</p> -->
            <p style="margin-top:3%">售价：{{investList.money}}积分</p>
            <!-- <vm-progress :percentage="investList.finishProgress * 100"  :text-inside="true" :stroke-width="18" strokeColor="info" :striped="true">
              {{investList.finishProgress * 100}}%
            </vm-progress> -->
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="itemDescription" style="margin-top: 45px">
              <div>
                <el-row>
                  <el-button type="primary" round @click="showDetails">查看详情</el-button>
                </el-row>
                <br/>
                <!-- <p style="font-size:10px;">专利所有者：{{investList.owner}}</p>
                <p style="font-size:10px;">专利所在地址：{{investList.walletaddress}}</p> -->
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
    props:['investList'],
    data(){
      return{
        a:{
          id:0,
          name:"A专利",
          walletaddress:"0xcE780971b22b8316531dbfbF31B36d183D43C6a0",
          isShow:true
        },
        patent: {},
        state: ""

      }
    },
    mounted: function (){
      // this.getInvestmentDetail(Number(this.patentID))
      this.patent = this,investList.patent
      this.state = this.investList.state
    },
    methods: {
      showDetails(){
        //console.log(this.investList.id)
        // console.log(this.investList.walletaddress)
        this.a.id = this.investList.id;
        this.a.name = this.investList.name;
        // console.log(this.investList.name)
        this.a.walletaddress = this.investList.walletaddress;
        this.a.isShow = true;
        this.$router.push({
          name:'DoInvesting',
          params:{
              id:this.investList.id, 
              owner:this.investList.owner,
              walletaddress:this.investList.walletaddress, 
              name:this.investList.name, 
              type:this.investList.type,
              isShow:this.a.isShow,
              price: this.investList.price,
              pool:this.investList.pool,
              description: this.investList.desc,


              // patent: this.patent,
              state: this.state
          }
        })
        
      },
      getInvestmentDetail(patentID){
          var self = this;
          alert("调用了getInvDet");
          patentID = "11111" //暂时设为数据库中有的
          this.$axios.post('/order/details',{"patentID" : patentID}).then(
            response => {
            // patentID(String) owner(String) walletaddress(String) comment(String)
            // orderState(boolean) price(int)endDate(Calendar) emailaddress(String)
            //console.log("response:")
            alert("成功调用了invDet的api")
            var data = response.data
            alert(data)
            
          
            // this.name = data.name//unknown
            this.username = data.owner
            this.patentID = data.patentID
            this.walletaddress = data.walletaddress
            this.price = data.price
            this.patentInfo = data.comment
            this.orderState = data.orderState

            // self.percentage = (data.progress * 100).toFixed(2);
            // self.leftTime = data.leftDays * 24 * 60 * 60 * 1000;
           
            document.getElementById("img").src=data.picPath
            //console.log(data)
          }).catch(function (error) {
            console.log(error)
          });
        },
    },

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
    border-top: 80px solid #F37B55;
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
    max-height: 170px;
    text-align: center;
    margin-top:10px;
  }
  .investList:hover{
    border:2px solid #7CADDB;
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
    color:#409EFF;
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

</style>
