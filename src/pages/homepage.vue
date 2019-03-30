<template>
  <div class="col-xs-12 col-md-12" style="padding: 0;">
    <div style="position: absolute">
    <div id="mainPic">
      <img src="/static/pic/标语.png" class="img-responsive" alt="Cinque Terre" style="padding-top: 15%;z-index: 0;width: 56%;margin-left: 22%;">
      <el-button type="primary" class="mainButton" v-on:click="trustNow()">即刻交易</el-button>
      <img src="/static/pic/特色.png" class="img-responsive" alt="Cinque Terre" style="margin-top:4%;z-index: 0;width: 40%;margin-left: 30%;">
    </div>
    <rightBar></rightBar>

    <div class='metamask-info'>
    <p v-if="web3.isInjected" id="has-metamask"><i aria-hidden="true" class="fa fa-check"></i> Metamask installed</p>
    <p v-else id="no-metamask"><i aria-hidden="true" class="fa fa-times"></i> Metamask not found</p>
    <p>Network: {{ web3.networkId }}</p>
    <p>Account: {{ web3.coinbase }}</p>
    <p>Balance: {{ web3.balance }} Wei // {{ web3.ethBalance }} Eth</p>
    <button id="test" v-on:click="register()">test</button>
  </div>

    <div style="width: 100%;padding-bottom: 50px;padding-top: 20px">
      <h2 style="width: 100%;text-align: center">全方位平台优势</h2>
      <p style="width: 100%;font-size: 16px;text-align: center;letter-spacing: 1px">从出售到购买，全面贴心服务，让您的体验更轻松愉快。</p>
      <div style="width: 100%;text-align: center;margin-top: 50px">
        <div class="el-card is-always-shadow advantage-card">
          <img src="/static/pic/anonymity.png"/>
          <h4>保护隐私，放心借款</h4>
          <hr>
          <h5>借贷资金匿名化</h5>
          <p>减少同学间资金拆借的尴尬</p>
          <p>避免信息被有心人利用</p>
        </div>
        <div class="el-card is-always-shadow advantage-card">
          <img src="/static/pic/finance.png"/>
          <h4>自动分析，财务无忧</h4>
          <hr>
          <h5>信息获取自动化</h5>
          <p>获取财务数据，分析财务状况</p>
          <p>提供直观信息，梳理消费结构</p>
        </div>
        <div class="el-card is-always-shadow advantage-card">
          <img src="/static/pic/safety.png"/>
          <h4>综合评价，诚信为本</h4>
          <hr>
          <h5>全方位信用评级</h5>
          <p>硬性软性指标，综合评估信用额度</p>
          <p>打击欺诈拖欠，打造诚信氛围</p>
        </div>
        <br>
        <div class="el-card is-always-shadow advantage-card">
          <img src="/static/pic/chooseFree.png"/>
          <h4>精准推荐，自主选择</h4>
          <hr>
          <h5>交易对象可自选</h5>
          <p>分析投资偏好，个性化优质标推荐</p>
          <p>展示融资信息，支持条件筛选</p>
        </div>
        <div class="el-card is-always-shadow advantage-card">
          <img src="/static/pic/repay.png"/>
          <h4>个性定制，舒心还款</h4>
          <hr>
          <h5>还款方案个性化</h5>
          <p>提供还款选择，减轻还款压力</p>
          <p>建议调整消费，实现顺利交易</p>
        </div>
        <div class="el-card is-always-shadow advantage-card">
          <img src="/static/pic/mutualAid.png"/>
          <h4>放心二手，轻松交流</h4>
          <hr>
          <h5>互助互惠生态化</h5>
          <p>交易闲置物品，避免资源浪费</p>
          <p>发布失物信息，提升寻回几率</p>
        </div>
      </div>
    </div>

    <announcement></announcement>


    <div style="width: 100%;text-align: center;margin-top: 60px">
      <h2>优质专利身推荐</h2>
      <br><br>
      <!--<el-button type="plain" id="shiftRecommend"  v-on:click="shiftRecommend()" round>小额/大额推荐</el-button>-->
      <a href="/enterInvest"><el-button type="plain" id="goInvest" style="margin-left: 60%" round>进入投资中心</el-button></a>
      <br><br>
      <el-card id="recommend" style="height: 600px;width: 90%;margin-left:5%;overflow-y: auto;overflow-x: hidden">
        <invest-list
          v-for="item in investInformation"
          v-bind:investList="item"
          v-bind:key="item.id"
        ></invest-list>
      </el-card>
    </div>

    <footerBar style="float: bottom"></footerBar>
    </div>
    <navi></navi>
  </div>

</template>

<script>
    import navi from '@/components/navi.vue';
    import footerBar from '@/components/footerBar.vue';
    import rightBar from '@/components/rightBar.vue'
    import announcement from '@/components/announcement.vue'
    import topRange from '@/components/topRange.vue'
    import Login from "./login";
    import investList from '@/components/investList.vue'
    import store from '../vuex/store'

    import {NETWORKS} from '../util/constants/network'

    export default {
      name: "homepage",
      components:{Login, navi, footerBar, rightBar,announcement,topRange,investList},
      data() {
        return {
          investInformation2: [
            {id:"0001", beginTime:"2018.09.17", endTime:"2018.10.17", name:"托福培训", type:"TOEFL", profit:"2.25%", money:"8000", remainMoney:"1600", finishProgress:0.8,range:"AA"},
            {id:"0002", beginTime:"2018.10.12", endTime:"2018.11.12", name:"CFA培训及考试", type:"大额考证", profit:"2.16%", money:"10000", remainMoney:"2000", finishProgress:0.8,range:"AA"},
            {id:"0003", beginTime:"2018.10.15", endTime:"2018.11.15", name:"雅思培训", type:"IELTS", profit:"3.15%", money:"9000", remainMoney:"2880", finishProgress:0.68,range:"A"},
            {id:"0004", beginTime:"2018.10.22", endTime:"2018.11.22", name:"AFP培训及考试", type:"大额考证", profit:"1.69%", money:"8000", remainMoney:"2160", finishProgress:0.73,range:"B"},
            {id:"0005", beginTime:"2018.10.26", endTime:"2018.11.26", name:"寒假交换", type:"交换生", profit:"0.00%", money:"13000", remainMoney:"5980", finishProgress:0.54,range:"B"},
            {id:"0006", beginTime:"2018.10.30", endTime:"2018.11.39", name:"寒假交换", type:"交换生", profit:"1.65%", money:"10000", remainMoney:"1900", finishProgress:0.81,range:"B"},
            {id:"0007", beginTime:"2018.11.03", endTime:"2018.12.03", name:"寒假交换", type:"交换生", profit:"3.22%", money:"15000", remainMoney:"4350", finishProgress:0.71,range:"B"},
          ],
        }
      },
      computed: {
        web3(){
          return this.$store.state.web3
        }
      },

      mounted: function () {

        console.log('dispatching getContractInstance')
        this.$store.dispatch('getContractInstance')


        $(".whole").css("background-color","transparent");
        $(".wholeNav").css("background-color","transparent");
        let winHeight=0;
        if (window.innerHeight)
          winHeight = window.innerHeight;
        else if ((document.body) && (document.body.clientHeight))
          winHeight = document.body.clientHeight;
        if (document.documentElement && document.documentElement.clientHeight)
          winHeight = document.documentElement.clientHeight;
        document.getElementById("mainPic").style.height= winHeight +"px";
        let self = this;
        let small_data = {
          page: 0,
          size: 8,
          properties: 'targetRatingScore',
          money: [0, 0],
          time: [null, null],
          interestRate: [0, 0],
          repaymentDuration: [null, null],
          userCreditRating: [] ,
          targetRating: [],
          useOfFunds: []
        }
      },
      beforeCreate: function () {
        localStorage.route="#homepage";

        console.log('registerWeb3 Action dispatched from casino-dapp.vue')
        this.$store.dispatch('registerWeb3')

      },
      methods: {
        trustNow:function () {
          if(store.getters.isLogin){
            this.$router.push('/userSpace');
          }else{
            this.$router.push('/signup')
          }

        },
        register:function() {
          var patentId = "201703564758";
          var owner = "0x10Ad2F4BB73e23e8B72C56b9EFdc3B7aD8Bb808E";
          var poolId = "0023";
          console.log('开始执行');
          
          // console.log(this.$store.state.contractInstance().methods)
          this.$store.state.contractInstance().regPatent(patentId,owner,poolId,{
            gas: 300000,
            value: this.$store.state.web3.web3Instance().toWei(this.amount, 'ether'),
            from: this.$store.state.web3.coinbase
          },(err, result) => {
            if(err){
              console.log(err);
            }
            else{
              console.log(result);
            }
          })
        },

        shiftRecommend:function () {
          let temp=this.investInformation;
          this.investInformation=this.investInformation2;
          this.investInformation2=temp;
        }

      }

    }
</script>

<style scoped>
  #mainPic{
    width:100%;
    height: 610px;
    background-image:url('/static/pic/background1.png');
    background-size: cover;
    background-attachment: scroll;
    background-position: center center;
    background-repeat: no-repeat;
    padding: 0;
    top:0;
  }

  .mainButton{
    border-radius: 30px;
    height: 50px;
    min-width: 160px;
    min-height: 60px;
    padding: 0px 0px;
    line-height: 50px;
    background-color: #409EFF;
    color: white;
    border: none;
    font-size: 22px;
    font-family: "Microsoft YaHei UI";
    margin-top: 6%;
    width: 14%;
    margin-left: 43%;
    letter-spacing: 2px;
  }

  h2{
    font-size: 27px;
    font-weight: bold;
    letter-spacing: 3px;
    padding-top: 50px;
  }

  .advantage-card{
    width: 22%;
    text-align: center;
    padding-bottom: 20px;
    display: inline-block;
    margin-left: 2.5%;
    margin-right: 0.5%;
    margin-bottom: 30px;
  }

  .advantage-card img{
    height:100px;
    margin-top: 30px;
  }

  .advantage-card h4{
    font-weight: bold;
    letter-spacing: 1px;
    padding-top: 10px;
  }

  hr{
    border-top:1px dashed lightgray;
  }

  .advantage-card h5{
    font-weight: bold;
    letter-spacing: 1px;
    color: lightskyblue;
    font-size: 16px;
    padding-bottom: 3px;
  }
  .advantage-card p{
    line-height: 10px;
  }
</style>
