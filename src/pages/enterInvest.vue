<template>
  <div class="col-xs-12 col-md-12 back" :style="back" style="padding: 0;margin:0;">
    <div style="width: 100%;float: top;">
      <navi></navi>
    </div>
    <div>
      <right-bar></right-bar>
    </div>
    <br/>
    <br/>
    <br/>

    <div class="square">
      <br><br><br>
      <p class="slogan">请选择投资项目类型</p><br><br><br>
      <el-row>
        <el-col span="12">
          <div class="btn" onclick="location.href='/invest'">
            <div class="type">
              <font-awesome-icon :icon="['fas', 'coins']" size="4x" style="color: white;margin-left: 0px;margin-top: 50px;" />
            </div>
            <div class="name" style="margin-left: 0px">
              小额短期项目
            </div>
          </div>
        </el-col>
        <el-col span="12">
          <div class="btn" onclick="location.href='/largeInvest'">
            <div class="type">
              <font-awesome-icon :icon="['fas', 'credit-card']" size="4x" style="color: white;margin-left: 3px;margin-top: 50px;" />
            </div>
            <div class="name" style="margin-left: 0px;">
              大额长期项目
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="float:bottom; padding:0;margin-top:200px;">
      <footerBar></footerBar>
    </div>
  </div>
</template>

<script>
  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue'
  export default {
    name: "enterInvest",
    components:{navi, footerBar, rightBar},
    beforeCreate:function(){
      localStorage.route = "#invest";
    },
    data(){
      return{
        back:{
          backgroundImage:"url(" + require("../../static/pic/investPage.jpg") + ")",
          backgroundRepeat:"no-repeat",
          backgroundSize:"100% auto"
        }
      }
    }
  }
</script>

<style scoped>
  .square{
    width:800px;
    height:500px;
    background-color:rgba(111,109,109,0.6);
    margin: auto;
  }
  .slogan{
    color:white;
    text-align: center;
    font-size:40px;
  }
  .project{
    float:left;
    margin-left:15%;
    height:50%;
    background-color:rgba(51,50,50,0.6);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }
  .button{
    background: #333232;
    width:100%;
    height: 89%;
    margin-top: 5.5%;
    border:transparent;
    color:white;
    font-size:20px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }
  .button:hover{
    background:#E4E9F3;
    color:black;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  .type{

    width: 150px;
    height: 150px;
    /*border: 1px solid black;*/
    background-image: url("/static/pic/62.png");
    /*background-size: 105% 105%;*/
  }

  .name{
    margin-top: 10px;
    font-size: 18px;
    color: white;
  }

  .btn{
    margin-top: 20px;
    margin-left: 120px;
    width: 180px;
    height: 200px;
  }

  .btn:hover{
    cursor: pointer;
  }
</style>
