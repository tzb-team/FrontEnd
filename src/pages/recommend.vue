<template>
  <div class="col-xs-12 col-md-12 back" :style="back" style="padding: 0;">
    <div style="width: 100%;float: top;">
      <navi></navi>
    </div>
    <div>
      <right-bar></right-bar>
    </div>
    <div class="col-xs-12 col-md-12" style="padding: 0; margin-top:40px;">
      <div style="margin-bottom: 50px;text-align: center;">
        <h1>个性推荐</h1>
        <p>Trust平台根据您输入的金额及预期收益率，结合投资风险为您推荐投资标的方案</p>
      </div>
      <div style="width:100%;">
        <div style="width:50%;float:left;">
          <div style="margin-left:11%;width:90%;">
            <invest-list3
              v-for="item in investInformation"
              v-bind:investList="item"
              v-bind:key="item.id"
            ></invest-list3>
          </div>
        </div>
        <div style="width:50%;float:left;">
          <div style="margin-left:3%;width:90%;">
            <invest-list3
              v-for="item in investInformation2"
              v-bind:investList="item"
              v-bind:key="item.id"
            ></invest-list3>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-12" style="float:bottom; padding:0;margin-top:100px;">
      <footerBar></footerBar>
    </div>
  </div>
</template>

<script>
  import investList from '@/components/investList.vue';
  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue';
  import investList3 from '@/components/investList3.vue';
    export default {
      name: "recommend",
      components:{navi, footerBar, rightBar,investList,investList3},
      data() {
        return {
          /* 推荐页面背景图片 */
          back:{
            backgroundImage:"url(" + require("../../static/pic/investListBack.jpg") + ")",
            backgroundRepeat:"no-repeat",
            backgroundAttachment:"fixed",
            backgroundSize:"100% auto",
            backgroundPosition: "0% 0%",
          },
          investInformation: [
            {id:"0001", beginTime:"2018.09.01", endTime:"2018.10.08", name:"AJ13熊猫", type:"SHOES", profit:"5.55%", money:"1800", remainMoney:"360", finishProgress:0.8,range:"AA"},
            {id:"0002", beginTime:"2018.09.14", endTime:"2018.10.03", name:"炉石砰砰计划", type:"GAME", profit:"9.99%", money:"388", remainMoney:"88", finishProgress:0.7731,range:"AA"},
            {id:"0003", beginTime:"2018.09.17", endTime:"2018.10.28", name:"国庆省内", type:"TRAVEL", profit:"6.73%", money:"2000", remainMoney:"400", finishProgress:0.8,range:"A"},
            {id:"0004", beginTime:"2018.10.12", endTime:"2018.10.25", name:"托福考试", type:"EXAM", profit:"5.85%", money:"1800", remainMoney:"360", finishProgress:0.8,range:"A"},
          ],
          investInformation2: [
            {id:"0005", beginTime:"2018.10.15", endTime:"2018.11.20", name:"方大同演唱会", type:"CONCERT", profit:"7.67%", money:"1000", remainMoney:"470", finishProgress:0.53,range:"A"},
            {id:"0006", beginTime:"2018.10.22", endTime:"2018.11.21", name:"d'zzit地素连衣裙", type:"CLOTH", profit:"7.06%", money:"1300", remainMoney:"741", finishProgress:0.43,range:"B"},
            {id:"0007", beginTime:"2018.10.26", endTime:"2018.11.22", name:"预购", type:"GAME", profit:"6.45%", money:"1800", remainMoney:"1116", finishProgress:0.38,range:"B"},
            {id:"0009", beginTime:"2018.11.03", endTime:"2018.12.01", name:"Chanel香水", type:"CONSMETIC", profit:"8.56%", money:"800", remainMoney:"320", finishProgress:0.6,range:"C"},
          ]
        }
      },
      mounted() {
        let self = this;
        let recommendInvestDown = this.$route.params.recommendInvestDown
        let recommendInvestUp = this.$route.params.recommendInvestUp
        let recommendInterestDown = this.$route.params.recommendInterestDown
        let recommendInterestUp = this.$route.params.recommendInterestUp
        console.log(recommendInterestUp)
        let small_data = {
          page: 0,
          size: 8,
          properties: 'targetRatingScore',
          money: [recommendInvestDown, recommendInvestUp],
          time: [null, null],
          interestRate: [recommendInterestDown, recommendInterestUp],
          repaymentDuration: [null, null],
          userCreditRating: [] ,
          targetRating: [],
          useOfFunds: []
        }
        console.log(small_data)
        this.$axios.post("/loan/recommendSmall",small_data )
          .then(res => {
            console.log(res)
            let invests = []
            for(let i of res.data) {
              invests.push({
                id: i.id,
                name: i.name,
                profit: (i.interestRate.toFixed(2) + "%"),
                money: i.money,
                remainMoney: (i.money-i.collectedMoney),
                type: i.classification,
                finishProgress: i.completionRate*1.0/100,
                range: i.riskRating,
                beginTime: i.startTime,
              })
            }
            console.log(invests)
            if(invests.length > 4) {
              self.investInformation = invests.slice(0, 4)
              self.investInformation2 = invests.slice(4, invests.length)
            }else {
              self.investInformation = invests
              self.investInformation2 = []
            }
          })
          .catch(e => {console.log(e)})
      }
    }
</script>

<style scoped>

</style>
