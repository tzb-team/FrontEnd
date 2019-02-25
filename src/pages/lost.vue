<template>
  <div id="app">
    <!--顶栏 -->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <navi style="position: relative"></navi>
    </div>
    <div class="col-xs-12 col-md-12" style="padding: 0;position:relative;">
      <div class="myspace">
        <h2 class="myspace">信息发布平台 -- 寻物启事</h2>
        <p style="color: #777777;">欢迎访问这个帮你找东西的神奇平台！</p>
      </div>
    </div>

    <!--正文-->
    <div class="back">
      <leftInformationbar></leftInformationbar>
      <div class="mesboxborder">
        <!-- 搜索 -->
        <el-button type="primary" icon="el-icon-search" style="position:relative;top:30px;left:750px;">搜索</el-button>
        <el-input  placeholder="请输入想要查询的内容" style="position:relative;top:30px;left:415px;width:250px;"></el-input>
        <!--<template >
          <el-select
            v-model="value9"
            style="position:relative;left:650px;top:30px;"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词"
            :remote-method="remoteMethod"
            :loading="loading">
            <el-option
              v-for="item in options4"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <div style="position:relative;left:820px;color:#00BFFF;">搜索</div>
        </template>-->
        <!-- 内容-->
        <div v-for="i in mesdata.length" :key="i">
          <!--<span>{{ i }}</span>
          <span>{{ mesdata[i-1].mestype }}</span>-->
          <div v-if="mesdata[i-1].mestype === '寻物启事'"
               v-show="mesdata[i-1].state">
            <el-card class="box-card">
              <div>
                <img src="../../static/pic/mestest.png" style="width:100px;height:100px;position:relative;left:5px;top:-10px;" class="picbox" alt="User_pic">
              </div>
              <!-- 写成表格的形式 -->

              <div class="textitem">
                <div>
                  <strong style="font-size: 15px;">物品类别</strong>
                  <span style="position:relative;left:20px;">{{ mesdata[i-1].itemtype}}</span>
                </div>
                <div style="position:relative;top:-23px;left:200px;">
                  <strong style="font-size: 15px;">物品名称</strong>
                  <span style="position:relative;left:20px;">{{ mesdata[i-1].name}}</span>
                </div>
                <div style="position:relative;top:-20px;">
                  <strong style="font-size: 15px;">联系方式</strong>
                  <span style="position:relative;left:20px;">{{ mesdata[i-1].phone}}</span>
                </div>
                <div style="position:relative;top:-20px;width:450px;">
                  <strong style="font-size: 15px;">详细信息</strong>
                  <span style="position:relative;left:20px;">{{ mesdata[i-1].dec}}</span>
                </div>
              </div>
            </el-card>
            <hr/>
          </div>
        </div>
        <el-pagination
          background
          layout="prev, pager, next"
          style="position:absolute;left:450px;top:630px;"
          :total="100">
        </el-pagination>

      </div>
    </div>
    <!--右边栏-->
    <div>
      <right-bar></right-bar>
    </div>

    <!--底栏-->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <footer-bar></footer-bar>
    </div>

  </div>

</template>

<script>
  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue';
  import leftInformationbar from "@/components/leftInformationbar.vue"

  export default {
    name: "lost",
    components:{leftInformationbar, navi, footerBar, rightBar},
    data() {
      return {
        options4: [],
        value9: [],
        list: [],
        loading: false,
        states: ["Alabama", "Alaska", "Arizona",
          "Arkansas", "California", "Colorado",
          "Connecticut", "Delaware", "Florida",
          "Georgia", "Hawaii", "Idaho", "Illinois",
          "Indiana", "Iowa", "Kansas", "Kentucky",
          "Louisiana", "Maine", "Maryland",
          "Massachusetts", "Michigan", "Minnesota",
          "Mississippi", "Missouri", "Montana",
          "Nebraska", "Nevada", "New Hampshire",
          "New Jersey", "New Mexico", "New York",
          "North Carolina", "North Dakota", "Ohio",
          "Oklahoma", "Oregon", "Pennsylvania",
          "Rhode Island", "South Carolina",
          "South Dakota", "Tennessee", "Texas",
          "Utah", "Vermont", "Virginia",
          "Washington", "West Virginia", "Wisconsin",
          "Wyoming"],
        mesdata:[
          {
            mestype:'寻物启事',
            itemtype:'其他',
            name:'雨伞',
            phone:'13834712391',
            dec:'啊啊啊啊啊已经是今年丢的第四把伞了，大概长左边酱……中午骑小蓝去九食，应该是落在车筐里面了。捡到的童鞋可以联系我一下嘛，我可以请你喝奶茶啊~',
            pic:'传上来的图片',
            time:'2018-09-04',
            state:true,
            username:'徐忘',
          },
          {
            mestype:'寻物启事',
            itemtype:'其他',
            name:'杯子',
            phone:'7148461',
            dec:'捡到了一个杯子，如图。',
            pic:'传上来的图片',
            state:true,
          },
          {
            mestype:'寻物启事',
            itemtype:'其他',
            name:'杯子',
            phone:'7148461',
            dec:'捡到了一个杯子，如图。我也不知道该说什么，就是想测试一下，如果描述信息过长会不会分行，会不会很丑！可是到底是多少呢，我也不知道，也许应该在输入的时候限制一下？',
            pic:'传上来的图片',
            state:true,
          },
        ],
        activeName: '1',

      }
    },
    mounted() {
      this.list = this.states.map(item => {
        return { value: item, label: item };
      });
    },
    methods: {
      test:function(){
      },
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options4 = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options4 = [];
        }
      }
    },
    created:function(){
      this.test();
    },

    }
</script>

<style scoped>
  .back{
    /*background-color: rgba(173,216,230,0.5);*/
    width: 100%;
    background-color: #D9F3FB;
  //height:100%;
    min-height:1000px;
  //height: 200px;
    padding-bottom: 20px;
    display:flex;
  }

  div.myspace{
    /*个人中心*/
    text-indent:6.3%;
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

  /*消息框*/
  .mesboxborder{
    width:950px;
    margin-right: 10%;
    border-radius: 3px;
    position:absolute;top:222px;
    margin-left: 24%;
    background:white;
    border:1px solid #e4e4e4;
    height:800px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
  }

  .textitem{
    position:relative;
    left:180px;
    top:-110px;

  }

  .picbox{
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;

  }

  /*卡片样式*/
  .box-card {
    width: 780px;
    height: 130px;
    border-top:3px solid dodgerblue;
    border-radius: 5px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    margin: 0px;
    padding: 5px;
    position:relative;
    left:100px;
    top:70px;
  }
  .box-card:hover{
    background:#D1EEEE;
  }


</style>
