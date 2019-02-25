<template>
  <div class="rightBarContainer">
    <div id="share">
      <div class="rightItem">
        <i class="el-icon-share"></i>
      </div>
      <div id="shareContainer">
        <img src="../../static/pic/qq.png" class="shareChoice" v-on:click="qqShare"/>
        <img src="/static/pic/wechat.png" class="shareChoice" v-on:click="wechatShare"/>
        <img src="/static/pic/sina.png" class="shareChoice" v-on:click="sinaShare"/>
      </div>
    </div>
    <div class="rightItem" id="favourite">
      <i class="el-icon-star-off"></i>
    </div>
    <div class="rightItem">
      <a>意见反馈</a>
      <img class="img-responsive" src="/static/pic/advice.png" style="width: 72%;margin-left: 14%;margin-top: 8px" />
    </div>
    <div class="rightItem" id="backTop">
      <a>返回顶部</a>
      <img class="img-responsive" src="/static/pic/backTop.png" style="width: 60%;margin-left: 20%;margin-top: 10px" />
    </div>
    <div></div>
  </div>
</template>

<script>
  var title="安全理财，轻松借款，即刻加入trust平台";
  var url="http://193.112.82.110:3030/";
  var picurl="/static/pic/logo3_blue.png";

    export default {
        name: "rightBar",
        mounted: function () {
          var backButton=$('#backTop');

          backButton.on("click",function(){
            $('html,body').animate({
              scrollTop: 0
            }, 500);
          });

          $(window).on('scroll', function () {/*当滚动条的垂直位置大于浏览器所能看到的页面的那部分的高度时，回到顶部按钮就显示 */
            if ($(window).scrollTop() > $(window).height() )
              backButton.fadeIn();
            else
              backButton.fadeOut();
          });
          $(window).trigger('scroll');

          $("#favourite").click(function() {
            var ctrl = (navigator.userAgent.toLowerCase()).indexOf('mac') != -1 ? 'Command/Cmd': 'CTRL';
            if (document.all) {
              window.external.addFavorite('http://'+ this.url_config +  ':8080', 'trust平台')
            } else if (window.sidebar) {
              window.sidebar.addPanel('trust平台', 'http://'+ this.url_config +  ':8080', "")
            } else {
              alert('您可以尝试通过快捷键' + ctrl + ' + D 加入到收藏夹~')
            }
          })

          $('#share').hover(function(){
            $('#shareContainer').animate({width:'toggle'},350);
          });
        },

      methods:{
          qqShare : function () {
            var shareString='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary='+
              encodeURIComponent(title)+'&url='+encodeURIComponent(url||document.location)+'&pics='+encodeURIComponent(picurl);
            window.open(shareString,'newwindow','height=400,width=400,top=100,left=100');
          },

        sinaShare : function () {
          var shareString='http://v.t.sina.com.cn/share/share.php?title='+
            encodeURIComponent(title)+'&url='+encodeURIComponent(url||document.location)+'&pics='+encodeURIComponent(picurl);
          window.open(shareString,'newwindow','height=400,width=400,top=100,left=100');
        },

        wechatShare : function () {
          var text ="trust校园金融互助平台";
          //生成二维码可能和网上其他地方的资料不一样，添加了logo图片路径（之前不知道哪位高手写的第一版本，貌似没有logo功能，小弟在此基础上加的）
          $('#div_code').qrcode({
            text: utf16to8(text),
            height: 200,
            width: 200,
            colorDark : '#000000',
            colorLight : '#ffffff',
            correctLevel : QRCode.CorrectLevel.H,
            //此处添加了个logo，可以随意替换链接
            src: '/static/pic/logo3_blue.png'
          });
        },

        utf16to8: function (str) {
          var out, i, len, c;
          out = "";
          len = str.length;
          for (i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if ((c >= 0x0001) && (c <= 0x007F)) {
              out += str.charAt(i);
            } else if (c > 0x07FF) {
              out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
              out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
              out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            } else {
              out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
              out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            }
          }
          return out;
        }
      }
    }
</script>

<style scoped>
  .rightBarContainer{
    float: right;
    position: fixed;
    top: 180px;
    z-index: 5;
    right: 5px;
  }

  .rightItem{
    max-height: 66px;
    min-height: 55px;
    height: 58px;
    width: 58px;
    display: block;
    position: relative;
    text-align: center;
    background: hsla(0,0%,100%,.9);
    margin-top: 6px;
    -webkit-box-shadow: 0 0 0 0 #ccc;
    box-shadow: 0 0 0 0 #ccc;
    border: 1px solid #e6e6e6;
    border-radius: 2px;
    cursor: pointer;
  }

  .rightItem a{
    color:white;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 10px;
    display: none;
    text-decoration: none;
  }

  .rightItem i{
    padding-top: 13px;
    font-size: 32px;
  }

  .rightItem:hover{
    background-color: lightskyblue;
  }

  .rightItem:hover a{
    display: inherit;
  }

  .rightItem:hover i{
    color: white;
  }



  .rightItem:hover img{
    display: none;
  }

  #shareContainer{
    padding: 6px 0;
    background: #fff;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    position: absolute;
    right: 58px;
    margin-top: -56px;
    width: 140px;
    height: 54px;
    display: none;
  }

  .shareChoice{
    height: 44px;
    width: 44px;
    border-radius: 22px;
    float: right;
    padding: 5px;
    cursor: pointer;
    display: inline-block;
  }

  #share:hover .rightItem{
    background-color: lightskyblue;
  }

  #share:hover .rightItem i{
    color: white;
  }

</style>
