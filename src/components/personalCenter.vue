<template>
  <div :style=back>
    <div id="personalCenter" style="width: 100%">
      <div style="padding: 0;position: relative;background-color: black">
        <navi style="position: relative"></navi>
      </div>

      <div style="padding: 0;position: relative;z-index: 1;width: 100%">
        <div class="myspace">
          <div>
            <h2>个人中心</h2>
            <p style="color: #777777;">欢迎访问个人中心, 您的Trust您做主!</p>
          </div>
        </div>
      </div>
      <!--background-color: #D9F3FB-->
      <div style="padding: 0;position: relative; min-height: 800px;width: 100%">
        <div class="container-fluid" style="width: 100%;">
          <div class="row" style="width: 100%">
            <div style="height: 30px">
              <!--纯粹占个位置。。-->
            </div>
            <div style="width: 95%;margin-left: 5%;">
              <el-row :gutter="0">
                <el-col :span="6">
                  <div id="UserBar" style="margin-left: 0">
                    <left-user-bar v-if="isStudent"></left-user-bar>
                    <left-alumni-bar v-if="!isStudent"></left-alumni-bar>
                  </div>
                </el-col>
                <el-col :span="18" id="mainbody">
                  <div class="panel-group">
                    <div class="panel panel-default" id="mainpanel" style="min-height: 650px">
                      <div class="panel-heading">
                        <h4 class="panel-title" id="tmptitle">
                          {{ paneltitle }}
                        </h4>
                      </div>
                      <div>
                        <div class="panel-body" id="maincontext">
                          <div class="row placeholders">
                            <slot></slot>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
        <footer-bar></footer-bar>
      </div>
    </div>
  </div>
</template>

<script>
  import navi from "../components/navi";
  import leftUserBar from "../components/leftUserBar";
  import FooterBar from "../components/footerBar";
  import LeftAlumniBar from "./leftAlumniBar";
  // import userPanel from "../components/userPanel";

  export default {
    name:"personalCenter",
    components: {LeftAlumniBar, FooterBar, leftUserBar, navi},
    data(){
      return {
        back:{
          backgroundImage:"url(" + require("../../static/pic/investListBack.jpg") + ")",
          backgroundRepeat:"no-repeat",
          backgroundAttachment:"fixed",
          backgroundSize:"100% auto",
          backgroundPosition: "0% 0%",
        },
        isStudent : true,
      }
    },
    props:['paneltitle']
  }

</script>

<style scoped>

  #personalCenter{
    /*background-image: url("../../static/pic/infoback.jpg");*/
    /*background-size: 100%;*/
  }

  div.myspace{
    /*个人中心*/
    /*text-indent: 6.3%;*/
    color: black;
    background-color: white;
    margin: 0px;
    border: 0px;
    padding: 5px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
    padding-left: 5%;
  }

  .myspace p{
    font-size: 15px;
    color: #505050;
  }

  #UserBar{
    margin-left: 20%;
    margin-right: 12%;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
  }

  .panel-group{
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
    margin-right: 2.7%;
  }

  #mainpanel .panel-heading
  {
    background-color: white;
    border-bottom: 1px solid whitesmoke;
    height: 50px;
  }

  #mainpanel .panel-title
  {
    display: block;
    font-size: 18px;
    font-weight: bold;
    color: #48576a;
    background: white;
    padding-left: 5px;
    padding-top: 5px;
    position: relative;
  }

  #maincontext {
    margin-left: 3em;
    margin-right: 3em;
    height: max-content;
  }

</style>
