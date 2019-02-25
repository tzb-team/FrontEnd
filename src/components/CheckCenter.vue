<template>
  <div>
    <!--顶栏-->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <adminNavi style="position: relative"></adminNavi>
    </div>
    <!--简介-->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;">
      <div class="myspace">
        <h2 class="myspace" style="margin-left:2%;">审核中心</h2>
        <p style="color: #777777;margin-left:2%;" >平台人工审核用户非结构化信息及各类标的请求</p>
      </div>
    </div>

    <!--正文-->
    <el-row>
      <el-col span="6">
        <leftCheckBar></leftCheckBar>
      </el-col>
      <el-col span="18">
        <div class="mesboxborder">
          <div id="mainpanel" >
            <div class="panel-heading">
              <h4 class="panel-title" id="tmptitle">
                {{ paneltitle }}
              </h4>
            </div>
            <div class="panel-body">
              <div class="row placeholders">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <!--底栏-->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <footer-bar></footer-bar>
    </div>

  </div>

</template>

<script>
  import leftCheckBar from "../components/leftCheckBar";
  import footerBar from "../components/footerBar";
  import rightBar from "./leftAlumniBar";
  import adminNavi from "./adminNavi";

  export default {
    name: "CheckCenter",
    components: {adminNavi, leftCheckBar, footerBar,rightBar},
    props:['paneltitle']

  }
</script>

<style scoped>
  .mesboxborder{
  //width:850px;
    margin-right: 10%;
    margin-left: 5%;
    margin-top: 30px;
    margin-bottom:5%;
    min-height: 650px;
    border-radius: 3px;
    background:white;
    border:1px solid #e4e4e4;
    /*//height:80px;*/
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
  }

  div.myspace{
    /*个人中心*/
    text-indent: 4.5%;
    color: black;
    background-color: white;
    margin: 0px;
    border: 0px;
    padding: 5px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
  }

  .myspace p{
    font-size: 15px;
    color: #505050;
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

</style>
