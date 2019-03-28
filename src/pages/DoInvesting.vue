Author: SDJ
Date: 2019/3/1

<template>
  <div id="Investing">
    <navi></navi>
    <rightBar></rightBar>    

    <div style="min-height:800px;border: 1px solid lightgrey;">
      
      <!-- 专利展示栏目 -->
      <div style="padding:60px 60px 10px 30px;font-size:18px;line-height: 30px;">
        <div style="display: flex;">
          <!-- 图片 标题 -->
          <div style="padding:0px 50px;width:40%">
            <h1 style="font-weight:bold">{{name}}</h1>
            <div>
              <img id="img" src="../assets/logo.png" style="width: 400px;height: 300px;"/>
            </div>
            <label style="font-size:16px;font-style: oblique;text-align: center;font-weight: normal;color:grey">此图为用户上传的项目说明</label>
            <br/>
            <h2>出售价格：</h2>
            <div class="keypoint"> 
               {{price}}
            </div>
          </div>
           <!-- 基本信息 购买栏目  -->
          <div style="padding:25px 70px;width:60%;margin-top:70px">
            <el-card class="box-card" style="width:700px;">
              <div slot="header" class="clearfix">
                <strong><span style="font-size: 20px;">专利简介</span></strong>
              </div>
              <div>
                <div><b>专利ID：</b>{{patentID}}</div>
                <div><b>专利持有人：</b>{{username}}</div>
                <div><b>专利所在地址：</b>{{walletaddress}}</div>
                <div><b>专利概要：</b>{{patentInfo}}</div>
              </div>
              <hr/>
            </el-card>
            <br/>
            <div>
              <countdown :time="leftTime">
                <template slot-scope="props">剩余时间：<span class="keypoint">{{ props.days }}</span> 天 <span class="keypoint">{{ props.hours }}</span> 小时 <span class="keypoint">{{ props.minutes }}</span> 分钟 <span class="keypoint">{{ props.seconds }}</span> 秒</template>
              </countdown>
              <label>剩余时间：{{leftTime}}</label><br/><br/>
              <el-input-number v-model="buyNum" @change="handleNumChange" :min="1" :max="10" label="描述文字"></el-input-number>&nbsp;&nbsp;&nbsp;
              <el-button type="primary" @click="invest()" round>我要购买</el-button>
            </div>
            
            
          </div>

        </div>
      </div>
        
      <!-- 专利相关详情栏目 -->
      <div class="market_out" style="display:flex;height:100%;width:100%;padding:50px">
        <!-- 店铺 -->
        <el-card class="box-card" style="width:300px;padding:20px;margin-right:30px">
          <div slot="header" class="clearfix">
            <strong><span style="font-size: 20px;">推荐专利</span></strong>
            </div>
            <!-- <div>
              <el-card v-for="item ">
            </div> -->
          <hr/>
        </el-card>

        <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick" style="width:1200px">

          <el-tab-pane name="one" label="专利详情" class="overview" style="padding: 60px 60px 40px 40px;font-size:18px;height: 400px;">
            <div style="padding:20px">
              <h1>专利详情：</h1><hr>
              <div>{{patentInfo}}</div>
            </div>
          </el-tab-pane>

          <el-tab-pane name="two" label="专利持有人信息" style="padding:30px 30px 30px 30px;font-size:18px;line-height: 30px;">
            <doInvestingLoanerInfo :username="username"></doInvestingLoanerInfo>
          </el-tab-pane>
           
        </el-tabs>
      </div>

    </div>


    <footerBar></footerBar>
  </div>
</template>

<script>
    import navi from '@/components/navi.vue';
    import rightBar from '@/components/rightBar.vue';
    import doInvestingLoanerInfo from '@/components/doInvestingLoanerInfo.vue';
    import footerBar from '@/components/footerBar.vue';
    // import LoanInformationPane from "../components/LoanInformationPane"
    export default {
      name: "DoInvesting",
      components:{navi,rightBar,doInvestingLoanerInfo,footerBar},
      data(){
        return{
          buyNum:1,//购买个数
          isShow:true,
          activeName:'one',
          name:"A专利", //专利名称
          username:"A公司", //专利持有人姓名
          patentID:"723972", //专利号
          walletaddress:"0x11111111111111111111111111111", //专利所在链上地址
          price: "1000", //专利价格
          orderState: "出售/转让",
          leftTime:2 * 24 * 60 * 60 * 1000,
          DoInvest:"确认购买",
          //产品详细信息
          patentInfo:"我们拥有热诚的知识产权顾问和强大的专业代理人团队，快速响应客户需求，为客户提供一对一的贴心服务，解决客户知识产权问题，助力客户利用知识产权这个工具获得更大的商业成功。",
        
          
        }
      },
      mounted: function () {
        this.patentID = this.$route.params.id;
        this.name = this.$route.params.name;
        this.walletaddress = this.$route.params.walletaddress;
        this.isShow = this.$route.params.isShow;
        console.log("this.isShow:"+this.isShow);
        console.log(this.$route.params);
        this.getInvestmentDetail(Number(this.patentID))
      },
      methods: {
        invest: function (){
          let self = this;
          let testpos = -1;
          this.$confirm('您确定要购买吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            testpos=1
            patentID = "111"
            console.log("self.username",self.username)
            self.$axios.post('/transaction/transaction',{
              params:{
                "patentID": patentID,
                "from": localStorage.username,//买家账户
                "to": self.username,//专利持有人
                "price": parseInt(price)
              }
            })
            .then(function (response) {
              testpos=2
              var data = response.data
              if(data.isSucc=="true"){
                self.$message({
                  message:'购买成功！',
                  type:'success',
                });
                self.getInvestmentDetail(String(self.patentID))//更新订单状态
                // self.update()
              }else {
                self.$message({
                  message: data.msg,
                  // message: "交易失败",
                  type: 'error',
                });
              }
            }).catch(function (error) {
              console.log(error)
            });
          }).catch((e) => {
            this.$message({
              type: 'info',
              message: testpos
            });
          });
        },
        // dateFormat(time) {
				// 	var date=new Date(time);
			  //   var year=date.getFullYear();
			  //   /* 在日期格式中，月份是从0开始的，因此要加0
			  //    * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
				// 	 * */
			  //   var month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
			  //   var day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
			  //   var hours=date.getHours()<10 ? "0"+date.getHours() : date.getHours();
			  //   var minutes=date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes();
			  //   var seconds=date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds();
			  //   // 拼接
			  //   return year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
  			// },
        getInvestmentDetail(patentID){
          var self = this;
          alert("调用了getInvDet");
          patentID = "111" //暂时设为数据库中有的
          this.$axios.post('/order/details',{
            params:{
              "patentID" : patentID
            }
          }).then(function (response) {
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
        // update(){
        //   this.$axios.get('/order/cancelPend', {
        //     params:{
        //       "patentID": this.patentID
        //     }
        //   })
        //   .then(function(res){
        //     if (res.data.isSucceed==0){
        //       console.log("交易成功！")
        //     }
        //     else{
        //       console.log("交易失败！")
        //     }
        //   })
        // },
        formatTooltip(val) {
          return val;
        },
        handleChange(value) {
          console.log(value);
        },
        handleNumChange(value){
          buyNum = value
        },
        handleClick(tab,event) {
          if(tab.name==="two"){
          }
          
        }
      }
    }
</script>

<style scoped>
  .keypoint{
    font-size:40px;
    color: aquamarine;
  }
  .market_out{
    word-wrap: break-word;
    word-break: normal;
  }
  .level{
    font-size: 30px;color:deepskyblue;
    font-style:oblique;
    font-family:"Times New Roman";
  }
</style>
<style scoped>
  .market_out >>> .el-tabs__item{
    font-size: 80px;
    padding: 10px 20px 40px 30px;
    width:170px;
    height: 50px;
    text-align: left;
  }
  .gray {
    -webkit-filter: brightness(200%);
    filter: brightness(200%);
  }
  .small {
    color: white;
    font-size: 15px
  }






  @-webkit-keyframes sheen {
    0% {
      -webkit-transform: skewY(-45deg) translateX(0);
      transform: skewY(-45deg) translateX(0);
    }
    100% {
      -webkit-transform: skewY(-45deg) translateX(12.5em);
      transform: skewY(-45deg) translateX(12.5em);
    }
  }
  @keyframes sheen {
    0% {
      -webkit-transform: skewY(-45deg) translateX(0);
      transform: skewY(-45deg) translateX(0);
    }
    100% {
      -webkit-transform: skewY(-45deg) translateX(12.5em);
      transform: skewY(-45deg) translateX(12.5em);
    }
  }
  .wrapper {
    display: block;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .button {
    padding: 0.5em 1.5em;
    text-align: center;
    text-decoration: none;
    color: #2194E0;
    border: 2px solid #2194E0;
    font-size: 18px;
    display: inline-block;
    border-radius: 0.3em;
    transition: all 0.2s ease-in-out;
    position: relative;
    overflow: hidden;
  }
  .button:before {
    content: "";
    background-color: rgba(255, 255, 255, 0.5);
    height: 100%;
    width: 3em;
    display: block;
    position: absolute;
    top: 0;
    left: -4.5em;
    -webkit-transform: skewX(-45deg) translateX(0);
    transform: skewX(-45deg) translateX(0);
    transition: none;
  }
  .button:hover {
    background-color: #2194E0;
    color: #fff;
    border-bottom: 4px solid #1977b5;
  }
  .button:hover:before {
    -webkit-transform: skewX(-45deg) translateX(13.5em);
    transform: skewX(-45deg) translateX(13.5em);
    transition: all 0.5s ease-in-out;
  }


</style>
<!--<style lang="scss" scoped>

  @import '../scss/element-variables.scss';

</style>-->
<!--
<style>
  .ruzhu-mess .el-form-item__label{
    font-size:16px!important;
  }
  .zhuanye-mess .el-form-item__label,.zhuanye-mess .color-t{
    font-size:16px!important;
    color:#606266;
  }
</style>
<style lang="scss" scoped>

  @import '../../../assets/scss/pages/organizationUserCenter1.scss';

</style>
-->




