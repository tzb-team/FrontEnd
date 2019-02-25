<template>
  <div style="width: 100%;text-align: center">
    <h2>Trust平台公告</h2>
    <div id="announceBox" ref="announceBox">
      <ul id="con1" ref="con1">
        <li><a href="/guide">1.关于平台后台</a><span>2018-09-09</span></li>
        <li><a href="/guide">2.平台交易利息计算细则</a><span>2018-09-07</span></li>
        <li><a href="/guide">3.平台信用分调整规则公示</a><span>2018-08-12</span></li>
        <li><a href="/guide">4.各信用评级对应额度公示</a><span>2018-07-18</span></li>
        <li><a href="/notice">5.关于失物/寻物页面</a><span>2018-06-25</span></li>
      </ul>
      <ul id="con2" ref="con2"></ul>
    </div>
    <div style="text-align: left;margin-top:36px;margin-left: 20%;cursor: pointer">
      <a id="more">查看更多公告</a>
    </div>
  </div>
</template>

<script>

  export default {
      name: "announcement",

      mounted: function () {
        var area = this.$refs.announceBox;
        var con1 = this.$refs.con1;
        var con2 = this.$refs.con2;

        area.scrollTop = 0;
        con2.innerHTML = con1.innerHTML;

        var myScroll = setInterval(() => {
          if(con2.offsetTop - area.scrollTop <= 0) {
            area.scrollTop -= con1.offsetHeight;
          } else {
            area.scrollTop++;
          }
        }, 50);

        $('#announceBox').on("mouseenter" ,function(){
          clearInterval(myScroll);
        });
        $('#announceBox').on("mouseleave", function(){
          myScroll = setInterval(() => {
            if(con2.offsetTop - area.scrollTop <= 0) {
              area.scrollTop -= con1.offsetHeight;
            } else {
              area.scrollTop++;
            }
          }, 50);
        });
      }
  }
</script>

<style scoped>
  h2{
    font-size: 27px;
    font-weight: bold;
    letter-spacing: 3px;
    padding-top: 50px;
  }

  #announceBox {
    height: 400px;
    width: 70%;
    margin-left: 15%;
    margin-top: 50px;
    overflow: hidden;    /* 超出的内容部分要隐藏，免得撑高中间部分 */
  }

  #announceBox ul li {
    height: 24px;
    font-size: 16px;
    padding-top: 50px;
    list-style: none;
  }
  #announceBox ul li a {
    float: left;
    color: #303133;
  }
  #announceBox ul li span {
    float: right;
    color: #999;
  }

  #more{
    font-weight: bold;
    letter-spacing: 1px;
    text-decoration: none;
    color: lightskyblue;
  }
</style>
