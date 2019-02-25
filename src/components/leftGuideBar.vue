<template>
  <div class="leftsidenav" style="position:relative;left:-160px;top:200px;">
    <div style="position:relative;top:-80px;">
      <div class="left_menus">
        <p class="left_head"><b>关于我们</b></p><hr/>
        <ul class="left_ul">
          <li><a href="/trade">平台定位</a></li>
          <li><a href="/trade">团队简介</a></li>
          <li><a href="/trade">合作机构</a></li>
        </ul>
        <hr/>
      </div>
      <div class="left_menus">
        <p class="left_head"><b>使用指南</b></p><hr/>
        <ul class="left_ul">
          <li><a href="/trade/mine">注册账号</a></li>
          <li><a href="/trade/going">借款须知</a></li>
          <li><a href="/trade/finished">贷款须知</a></li>
          <li><a href="/trade/finished">信息发布</a></li>
          <li><a href="/trade/finished">物品交易</a></li>
          <li><a href="/trade/finished">规则须知</a></li>
          <li><a href="/trade/finished">常见问题</a></li>
        </ul>
        <hr/>
      </div>
      <div class="left_menus">
        <p class="left_head"><b>安全中心</b></p><hr/>
        <ul class="left_ul">
          <li><a href="/trade">政策法规</a></li>
          <li><a href="/trade">隐私保护</a></li>
        </ul>
        <hr/>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "leftGuideBar"
    }
</script>

<style scoped>
  /*----------左侧导航栏样式-------------*/
  div.leftsidenav{
    margin-top:0px;
    background:white;
    border:1px solid #e4e4e4;
    border-top:5px solid dodgerblue;
    height:600px;
    width:200px;
    margin-right: 10%;
    margin-left: 16%;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
  }
  /*----------左侧导航栏修正----------*/
  .left_menus ul{
    list-style: none;
    position: relative;
  }

  .left_head {
    font-size: 16px;
    color: #48576a;
    text-indent: 8%;
    margin-top: -3%;
    margin-bottom: -3%;
  }

  .left_ul li{
    margin: 3%;
    padding: 0;
    min-width: 80px;
    font-size: 15px;
  }

  .left_ul li a{
    color: #777777;
    text-decoration:none;
  }

  .left_ul li a:hover{
    color: dodgerblue;
  }

  .left_ul li a.active{
    color: dodgerblue;
  }
</style>
