<template>
  <div style="width:100%;background-color: black;">
    <div id="insult" style="width: 100%;padding: 20px;">
      <div class="insultSession" style="margin-left: 5%">
        <h4>规则中心</h4>
        <a href="guide">借款规则</a>
        <a href="guide">投资规则</a>
        <a href="guide">发布规则</a>
        <a href="guide">交易规则</a>
      </div>
      <div class="insultSession">
        <h4>帮助中心</h4>
        <a href="guide">用户须知</a>
        <a href="guide">常见问题</a>
      </div>
      <div class="insultSession">
        <h4>安全中心</h4>
        <a href="guide">政策法规</a>
        <a href="guide">隐私保护</a>
      </div>
      <div class="insultSession">
        <h4>关于我们</h4>
        <a href="guide">平台定位</a>
        <a href="guide">团队简介</a>
        <a href="guide">合作机构</a>
      </div>
      <div class="rightSession">
        <div style="display: inline-block"></div>
        <h3 style="font-size: 22px">联系我们</h3>
        <p>地址：南京市栖霞区仙林大道163号</p>
        <p style="margin-top: -5px;vertical-align: -10%">邮箱：nju_trust@163.com</p>
      </div>
    </div>
    <div style="width: 100%;border-top: 1px solid #33333a;">
      <img src="/static/pic/logo3_blue.png" style="margin-left:5%;width:7%;padding-top: 10px">
      <span style="color: white;text-align: center;margin-left: 10px;font-size: 16px;vertical-align: -30%">让你的大学生活更美好</span>
      <span style="color: white;text-align: center;font-size: 16px;float: right;padding-top: 10px;margin-right: 5%">NJU_Trust Team</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "footerBar"
    }
</script>

<style scoped>

  .insultSession{
    width:10%;
    display:inline-block;
    vertical-align: top;
  }

  #insult h4{
    color: white;
    font-weight:bold;
    font-size: 18px;
    padding-top: 16px;
  }

  #insult a{
    color: #c4c4c5;
    font-size: 15px;
    display: block;
    padding-top: 7px;
    padding-bottom: 7px;
    cursor: pointer;
  }
  #insult a:hover{
    color: dodgerblue;
    text-decoration:none;
  }

  .rightSession{
    display: inline-block;
    float: right;
    color: white;
    vertical-align: top;
    margin-right: 60px;
  }
</style>
