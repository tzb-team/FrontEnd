<template>
  <!--<div class="col-sm-12 col-md-12">
    <div style="margin-top:1%;margin-left:1%;">
      <span><b>投资金额&nbsp&nbsp&nbsp</b></span>
      <el-radio-group v-model="value_radio1">
        <el-radio-button label="100以下"></el-radio-button>
        <el-radio-button label="100-500"></el-radio-button>
        <el-radio-button label="500-1000"></el-radio-button>
        <el-radio-button label="1000以上"></el-radio-button>
      </el-radio-group>
      <el-input-number v-model="num1" @change="handleChange" :min="1" :max="100000000" label="描述文字"></el-input-number>
    </div>
    <div style="margin-top:2%;margin-left:1%;">
      <span><b>项目类型&nbsp&nbsp&nbsp</b></span>
      <el-select v-model="value_radio2" style="width:180px;">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <span><b>&nbsp&nbsp借款名称&nbsp&nbsp</b></span>
      <el-input v-model="input" placeholder="请输入内容" style="width:180px"></el-input>
    </div>
    <div style="margin-top:1%;margin-left:1%;">
      <span><b>开始时间&nbsp&nbsp&nbsp</b></span>
      <el-date-picker
        v-model="date1"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions0" style="width:180px;">
      </el-date-picker>
      <span><b>&nbsp&nbsp结束时间&nbsp</b></span>
      <el-date-picker
        v-model="date2"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions0" style="width:180px;">
      </el-date-picker>
      <el-button type="primary" icon="el-icon-search" style="margin-top: 15px;margin-left: 20px">一键搜索</el-button>
    </div>
    <br>
    <hr>
  </div>-->
  <div>
    <el-form v-model="radioData" style="padding-top: 20px">
      <el-form-item label="投资金额">
        <el-radio-group v-model="radioData.money">
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="100及以下"></el-radio-button>
          <el-radio-button label="100-500"></el-radio-button>
          <el-radio-button label="500-1000"></el-radio-button>
          <el-radio-button label="1000以上"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="项目时间">
        <el-radio-group v-model="radioData.date">
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="15天之内"></el-radio-button>
          <el-radio-button label="1个月之内"></el-radio-button>
          <el-radio-button label="6个月之内"></el-radio-button>
          <el-radio-button label="6个月以上"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="项目类型">
        <el-radio-group v-model="radioData.state">
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="小额借款"></el-radio-button>
          <el-radio-button label="大额借款"></el-radio-button>
        </el-radio-group>

      </el-form-item>
    </el-form>
    <hr>
  </div>

</template>

<script>
    export default {
        name: "info-top-bar",
        data(){
          return{
            radioData:{
              money:'全部',
              date:'全部',
              state:'全部'
            },
            condition:{
              moneyUpper:null,
              moneyLower:null,
              targetType:null,
              name:null,
              startDate:null,
              endDate:null
            },
          }//return
        },
      methods: {
        handleChange(value) {
          console.log(value);
        },

        getCondition(money,date,state){

          if(money === "全部"){
            this.condition.moneyUpper = null;
            this.condition.moneyLower = null;
          }else if(money === "100及以下"){
            this.condition.moneyUpper = 100;
            this.condition.moneyLower = 0;
          }else if(money === "100-500"){
            this.condition.moneyUpper = 500;
            this.condition.moneyLower = 100;
          }else if(money === "500-1000"){
            this.condition.moneyUpper = 1000;
            this.condition.moneyLower = 500;
          }else if(money === "1000以上"){
            this.condition.moneyUpper = 1000000;
            this.condition.moneyLower = 1000;
          }

          var now = new Date();
          var nowYear = now.getFullYear();
          var nowMonth = this.getCompleteNum(now.getMonth()+1);
          var nowDate = this.getCompleteNum(now.getDate());
          var nowTime = now.getTime();
          this.condition.endDate = nowYear+"-"+nowMonth+"-"+nowDate;
          console.log("endDate:"+this.condition.endDate);
          if(date === "全部"){
            this.condition.startDate = null;
            this.condition.endDate = null;
          }else if(date === "15天之内"){
            var days = 15;
            this.getStartDate(nowTime,days);
          }else if(date === "1个月之内"){
            var days = 30;
            this.getStartDate(nowTime,days);
          }else if(date === "6个月之内"){
            var days = 183;
            this.getStartDate(nowTime,days);
          }else if(date === "6个月以上"){
            this.condition.startDate = null;
          }

          if(state === "全部"){
            this.condition.targetType = null;
          }else if(state === "大额借款"){
            this.condition.targetType = "LARGE";
          }else if(state === "小额借款"){
            this.condition.targetType = "SMALL";
          }
        },

        getStartDate(nowTime,days){
          var startTime = nowTime -  days*(24*3600*1000); // 将天数转换为毫秒
          var start = new Date(startTime);

          var startYear = start.getFullYear();
          var startMonth = this.getCompleteNum(start.getMonth());
          var startDate = this.getCompleteNum(start.getDate());

          this.condition.startDate = startYear+"-"+startMonth+"-"+startDate;
          console.log("startDate:"+this.condition.startDate);
        },

        getCompleteNum(num){
          num += "";
          if(num<=9){
            num = "0"+num;
          }
          return num;
        }
      },
      watch:{
          radioData:{
            handler(a){
              var money = this.radioData.money;
              var date = this.radioData.date;
              var state = this.radioData.state;

              this.getCondition(money,date,state);

              var moneyUpper = this.condition.moneyUpper;
              var moneyLower = this.condition.moneyLower;
              var targetType = this.condition.targetType;
              var name = this.condition.name;
              var startDate = this.condition.startDate;
              var endDate = this.condition.endDate;

              this.$emit("getConditionEvent",moneyUpper,moneyLower,targetType,name,startDate,endDate);

              /*console.log("money:"+this.radioData.money);
              console.log("date:"+this.radioData.date);
              console.log("state:"+this.radioData.state);*/
            },
            deep:true
          }
      }
    }
</script>

<style scoped>

</style>
