<template>
  <div id="app">
    <navi></navi>
    <div>
      <right-bar></right-bar>
    </div>
    <el-form class="back">
      <div id="check" style="margin-top: 100px;">
        <div class="choose">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="项目金额">
              <el-input v-model="formInline.money" style="width: 120px;"></el-input>
            </el-form-item>
            <el-form-item label="项目类型" >
              <el-select v-model="formInline.category">
                <el-option label="不限" value="any"></el-option>
                <el-option label="消费类小额短期" value="consume"></el-option>
                <el-option label="学习培训类大额长期" value="learn"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="还款日期" >
              <el-date-picker type="date" placeholder="选择日期" v-model="formInline.return_date" style="width: 140px;"></el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
          <!--<div class="title">筛选条件</div>-->
        </div>

        <div>
          <checkList></checkList>
        </div>
      </div>
    </el-form>
    <footerBar style="float: bottom"></footerBar>
  </div>
</template>

<script>
  import navi from '@/components/navi.vue';
  import ElCard from "element-ui/packages/card/src/main";
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue';
  import checkList from '@/components/checkList.vue';

  export default {
    name: "check-my-loan",
    components:{
      ElCard,
      navi,
      footerBar,
      rightBar,
     /* evaluate,*/
      checkList
    },
    beforeCreate:function(){
      localStorage.route = "#loan";
    },
    methods:{
      onSubmit(){
        console.log("确认贷款："+this.form3.activeName);
      },

    },

    data(){
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        },

        formInline:{
          money:'',
          category:'any',
          return_date:''
        }
      };
    },

  }
</script>

<style scoped>

  .back{
    /*background-color: rgba(173,216,230,0.5);*/
    width: 100%;
    /* height: 1700px;*/
    display:flex;
    margin-bottom: 50px;
  }

  .choose{
    display: flex;
    /* border: 1px black solid;*/
    margin-left: 30%;
    width:1000px;
  }

</style>
