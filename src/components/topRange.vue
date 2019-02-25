<template>
  <el-carousel :interval="3000" type="card" height="400px" style="text-align: center;margin-top: 50px;width: 76%;margin-left: 12%;margin-bottom: 50px;min-width: 880px">
    <el-carousel-item v-for="item in 10" :key="item" class="is-always-shadow el-card rangeCard">
      <h3>TOP </h3>
      <img class="photoOfTopRange" src="/static/pic/photo.jpg" style="display: inline-block">
      <div style="width: 40%;display: inline-block;text-align: left;margin-top: 12px" class="basic">
        <p><strong>姓名：</strong></p>
        <p style="margin-top: 20px"><strong>性别：</strong></p>
        <p style="margin-top: 20px"><strong>职业：</strong></p>
        <p style="margin-top: 20px"><strong>院校：</strong></p>
        <p style="margin-top: 20px"><strong>简介：</strong></p>
        <textarea readonly="readonly"
          :rows="5"
                  style="width:96%;resize: none"
        >1
        </textarea>
      </div>
      <div style="width: 40%;text-align: left;margin-left: 10%;margin-top: -150px" class="investConditionOfTopRange">
        <p style="margin-top: 20px"><strong>总计投入资金：</strong></p>
        <p style="margin-top: 20px"><strong>平均利息方案：</strong></p>
        <p style="margin-top: 20px"><strong>个人投标信息：</strong></p>
      </div>

    </el-carousel-item>
  </el-carousel>
</template>

<script>
    export default {
        name: "topRange",
        mounted: function () {
          var items=$(".rangeCard");
          var i=0;
          var photoSrc=['/static/pic/ChenJun.jpg','/static/pic/YinLin.jpg','/static/pic/ZhangRong.jpg','/static/pic/RenLiJian.jpg',
            '/static/pic/PanYi.jpg','/static/pic/ZhengGang.jpg','/static/pic/LvJian.jpg','/static/pic/ZhangYiBin.jpg',
            '/static/pic/XiaoBinQing.jpg','/static/pic/XuXin.jpg'];
          while (i<10) {
            items.eq(i).children('h3').text(items.eq(i).children('h3').text()+(i+1));
            i++;
          }
          i=0;
          while(i<10){
            try{
              $('.photoOfTopRange').eq(i).attr('src',photoSrc[i]);
            }catch (e) {
              console.log(e);
            }
            i++;
          }

          var basicInfo=[
          //   ['陈骏','男','教授','南京大学','陈骏，男， 1954年生，教授，1985年获南京大学矿床学博士学位并留校任教，曾任南京大学地球科学系主任、南京大学副校长、常务副校长、南京大学校长。2013年当选为中国科学院院士。','80000','1.00%','148121\n151152\n180633'],
          //   ['银临','女','歌手','南京大学','银临，本名向异，90后网络歌手，土家族，1991年12月11日生于湖南湘西自治州，毕业于南京大学外国语学院英文系。2013年12月15日，推出首张个人音乐专辑《腐草为萤。2017年9月15日，推出第二张个人音乐专辑《蚍蜉渡海》 ','75000','1.05%','180725\n171111\n156487'],
          //   ['张荣','男','教授','南京大学','张荣，男，1964 年生，1979年9月进入南京大学物理系学习，1986年硕士研究生毕业并留校任教，1995年获理学博士学位，先后担任南京大学校长助理、党委副书记、副校长。现任山东大学校长。','70000','1.01%','156987\n156489\n457866'],
          //   ['任利剑','男','教授','南京大学','任利剑, 男，教授。1962年生，1983年南京大学中文系毕业，曾任南京大学党委副书记，现任东南大学党委常委、党委副书记、纪委书记。','65000','1.50%','457889\n456457\n154347'],
          //   ['潘毅','男','教授','南京大学','潘毅, 男，1957年生，教授、博士生导师。1978年2月进入南京大学化学系学习，1988年获得博士学位。2001年起担任南京大学化学化工学院院长。','60000','1.02%','154678\n457123\n455343'],
          //   ['郑刚','男','职业金融投资人','南京大学','郑刚，男，南京大学校友，慈善家，南京大学校董，江苏南播玩文化传播有限公司董事长、总裁。','55000','1.05%','431235\n546763\n123453'],
          //   ['吕建','男','计算机软件专家','南京大学','吕建，男，1960年生，计算机软件专家。现任第十三届全国人民代表大会常务委员会委员，南京大学校长（副部级）。','50000','1.03%','456873\n145678\n456767'],
          //   ['张异宾','男','教授、博导','南京大学','张异宾，男，1956年生。1996年4月起先后任南京大学哲学系系主任、校长助理、副校长、党委副书记。2010年5月任南京大学党委常务副书记。2014年5月任南京大学党委书记。','45000','1.05%','114678\n131546\n456455'],
          //   ['肖斌卿','男','副教授','南京大学','肖斌卿，男，管理科学与工程（金融工程方向）博士，副教授。多年来致力于银行等金融机构和上市公司运作与管理等领域的研究，以国际化的视野与方法追踪学术前沿，以本土化的价值与使命解决现实问题。','40000','1.04%','457836\n313666\n112545'],
          //   ['徐新','女','风险投资家','南京大学','徐新，女，1988年毕业于南京大学外语系，中华英才网的初始投资者和董事会主席，中国风险投资协会理事会理事，中国最优秀的风险投资家之一。拥有在中国10年以上的风险投资经验。','35000','1.05%','124545\n125456\n156875']
          ];
          i=0;
          this.$axios.get("http://"+ this.url_config +  ":8000/api/auth/topRange",).then(res => {
            basicInfo=res.data.basic;
          });
          items=$(".basic");
          while (i<10){
            var j=0;
            while (j<4) {
              //这一段记得改成二维
              items.eq(i).children('p').eq(j).html(items.eq(i).children('p').eq(j).html()+basicInfo[i][j]);
              j++;
            }
            i++;
          }

          i=0;
          while(i<10){
            console
            try{
              items.eq(i).find('textarea').eq(0).val(basicInfo[i][4]);
            }catch (e) {
              console.log(e);
            }

            // items.eq(i).find('textarea').eq(0).attr('readonly','readonly');
            i++;
          }


          items=$('.investConditionOfTopRange');

          i=0;
          while (i<10){
            var j=0;
            while (j<3) {
              //这一段记得改成二维
              items.eq(i).children('p').eq(j).html(items.eq(i).children('p').eq(j).html()+basicInfo[i][j+5]);
              j++;
            }
            i++;

          }

        }
    }
</script>

<style scoped>
  .rangeCard{
  }

  .photoOfTopRange{
    width: 160px;
    height: 160px;
    border-radius: 80px;
    margin-right: calc(42% - 160px);
    float: left;
    margin-left: 8%;
    margin-top: 10px;
  }

  h3{
    font-weight: bold;
    letter-spacing: 1px;
    padding-top: 10px;
    color: lightskyblue;
  }

  textarea::-webkit-scrollbar{
    width: 0;
  }

  textarea{
    color: black;
    font-family:  'Avenir', Helvetica, Arial, sans-serif;;
  }

</style>
