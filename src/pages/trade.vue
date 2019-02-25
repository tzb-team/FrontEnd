<template>
  <div :style=back>
    <!--顶栏 -->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <navi style="position: relative"></navi>
    </div>
    <div class="col-xs-12 col-md-12" style="padding: 0;position:relative;">
      <div class="myspace">
        <h2 class="myspace">闲置市场</h2>
        <p style="color: #777777;">欢迎来这里，让您的闲置创造价值！</p>
      </div>
    </div>

    <!--正文-->
    <el-row>
      <el-col span="6">
            <leftTradeBar></leftTradeBar>
          </el-col>
      <el-col span="18">
        <div class="mesboxborder">
          <div style="position:relative;top:20px;margin-left:3%;margin-right:3%;">
            <el-tabs type="border-card">
                <el-tab-pane >
                  <span slot="label" style="font-size:19px;"><i class="el-icon-message"></i>&nbsp;&nbsp;鱼塘上新</span>
                  <div style="position:relative;top:20px;margin-left:5%;margin-right:5%;">
                    <template>
                      <el-carousel :interval="3000" type="card" height="250px">
                        <el-carousel-item v-for="i in topData.length" :key="i">
                          <el-popover
                            placement="left"
                            style="background-color: #DCDFE6;"
                            width="200"
                            trigger="hover">
                            <div >
                              <div style="position:relative;top:3px;">
                                <span style="position:relative;left:20px;"><i class="el-icon-goods"></i>&nbsp;&nbsp;{{ topData[i-1].name}}</span>
                                <br/>
                                <span style="position:relative;left:20px;">￥&nbsp;  {{ topData[i-1].price}}</span>
                                <br/>
                                <span style="position:relative;left:20px;"><i class="el-icon-phone"></i>&nbsp;&nbsp;{{ topData[i-1].contact}}</span>
                              </div>
                              <hr/>
                              <div style="margin-top:-10%;width:150px;">
                                <img v-bind:src=topData[i-1].headPic style="width:30px;height:30px;position:relative;left:10px;top:-15px;"  alt="User_pic" >
                                <!--<img src="../../static/pic/testuserpic1.png" style="width:30px;height:30px;position:relative;left:10px;top:-15px;"  alt="User_pic" >-->
                                <span style="position:relative;margin-top:-10%;">&nbsp;&nbsp;&nbsp;&nbsp;“{{ topData[i-1].description}}”</span>
                              </div>
                            </div>
                            <el-button slot="reference">
                              <!--<img src="../../static/pic/dhc.jpeg" style="width:422px;height:250px;" class="picbox" alt="User_pic">-->
                              <img v-bind:src=topData[i-1].pic style="width:422px;height:250px;" class="picbox" alt="User_pic">
                            </el-button>
                          </el-popover>

                        </el-carousel-item>
                      </el-carousel>
                    </template>
                  </div>
                </el-tab-pane>
              </el-tabs>
            <hr/>
          </div>

          <div style="position:relative;top:20px;margin-left:3%;margin-right:3%;">
            <el-tabs type="border-card" >
                <el-tab-pane >
                  <span slot="label" style="font-size:19px;"><i class="el-icon-search"></i>&nbsp;&nbsp;分类检索</span>
                  <el-row :gutter="20">
                    <el-col :span="20"><template>
                      <div style="margin-top: 20px">
                        <span><strong>&nbsp;&nbsp;类别筛选&nbsp;&nbsp;</strong></span>
                        <br/>
                        <br/>
                        <el-checkbox v-model="options" v-for="type in types" :key="type" :label="type" style="margin-left:2%;">{{ type }}</el-checkbox>
                        <br/>
                        <br/>
                        <el-input v-model="searchText" placeholder="搜索名字" class="input-with-select" style="width: 250px;">
                          <el-button @click="search" slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                      </div>
                    </template></el-col>
                    <el-col :span="4"><div style="margin-top: 15px;">
                      <br/>
                      <el-button type="primary" icon="el-icon-search" @click="filter">过滤</el-button>
                    </div>
                    </el-col>
                  </el-row>
                  <el-row :gutter="5" v-for="r in 2" :key="r" style="position:relative;top:20px;">
                    <el-col :span="7" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 1 : 0"style="position:relative;top:20px;">
                      <el-card :body-style="{ padding: '5px' }" v-if="((r-1)*3+o-1) < commData.length" >
                        <img v-bind:src=commData[(r-1)*3+o-1].pic class="image" style="height:200px;">
                        <div style="padding: 14px;">
                          <strong style="font-size: 18px;">{{commData[(r-1)*3+o-1].name}}</strong>
                          <el-collapse accordion >
                            <el-collapse-item  name="1">
                              <span slot="title" style="font-size: 17px;">详细信息</span>
                              <div style="position:relative;top:3px;">
                                <i class="el-icon-menu"></i><strong style="font-size: 14px;">种类</strong>
                                <span style="position:relative;left:20px;">{{commData[(r-1)*3+o-1].type}}</span>
                              </div>
                              <div style="position:relative;top:3px;">

                                <i class="el-icon-phone"></i><strong style="font-size: 15px;">电话</strong>
                                <span style="position:relative;left:20px;">{{commData[(r-1)*3+o-1].contact}}</span>
                              </div>
                              <div style="position:relative;top:3px;">
                                <i class="el-icon-document"></i><strong style="font-size: 15px;">详细描述</strong>
                                <span style="position:relative;left:0px;right:20px;">{{commData[(r-1)*3+o-1].description}}</span>
                              </div>
                            </el-collapse-item>

                          </el-collapse>
                          <div class="bottom clearfix">
                            <i class="el-icon-goods" style='font-size:25px;'></i>
                            <strong style="position:relative;left:20px;font-size: 17px;">{{commData[(r-1)*3+o-1].price}}元</strong>
                          </div>
                        </div>
                      </el-card>
                    </el-col>
                  </el-row>
                </el-tab-pane >
                <br/><br/><br/><br/>
                <el-pagination
                  @current-change="handleCurrentChange"
                  :current-page.sync="pageNow"
                  background
                  :page-count="totalNum"
                  layout="prev, pager, next,jumper"
                  style="position:relative;margin:auto;width: 300px;"
                  >
                </el-pagination>

              </el-tabs>
          </div>
          <br/>
          <hr/>
        </div>
      </el-col>
    </el-row>

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
  import leftTradeBar from "@/components/leftTradeBar.vue";
  const typeOptions = ['数码零件', '影音家电', '鞋服配饰', '化妆洗漱','图书教材','其他'];
  export default {
    name: "trade",
    components:{ leftTradeBar, navi, footerBar, rightBar},
    types:typeOptions,
   data() {
      return {
        back:{
          backgroundImage:"url(" + require("../../static/pic/investListBack.jpg") + ")",
          backgroundRepeat:"no-repeat",
          backgroundAttachment:"fixed",
          backgroundSize:"100% auto",
          backgroundPosition: "0% 0%",
        },
        pageNow: 0,
        // headpic:["../../static/pic/testuserpic1.png","../../static/pic/photo.jpg","../../static/pic/testuserpic3.png","../../static/pic/testuserpic2.png","../../static/pic/testuserpic4.png"],
        options4: [],
        value9: [],
        list: [],
        options: [],
        searchText: '',
        loading: false,
        types:typeOptions,
        totalNum: 0,
        checkboxGroup:['数码零件'],
        topData:[{
          num:'000001',
          type:'化妆洗漱',
          name:'DHC橄榄润唇膏',
          description:'日本 大国药妆店购入 全新未拆封',
          price:'50',
          contact:'15876209838',
          pic:"../../static/pic/dhc.jpeg",
          headPic:'../../static/pic/person-flat.png',
          date:"2018/06/04",
          state: true
        },
          {
            num:'000002',
            type:'化妆洗漱',
            name:'无印良品卸妆啫喱',
            description:'日本 大国药妆店购入 全新未拆封',
            price:'70',
            contact:'13329048392',
            pic:'../../static/pic/wylp.jpeg',
            headPic:'../../static/pic/person-flat.png',
            date:"2018/05/02",
            state: true
          },
          {
            num:'000003',
            type:'影音家电',
            name:'铁三角msr',
            description:'自用一年，音质良好。',
            price:'750',
            contact:'1997939399',
            pic:'../../static/pic/msr.jpg',
            headPic:'../../static/pic/person-flat.png',
            date:"2018/8/12",
            state: true
          },
          {
            num:'000004',
            type:'化妆洗漱',
            name:'YSL粉底液B10色号',
            description:'因为皮肤偏干，这款比较哑光，不适合我，仅用过一次',
            price:'300',
            contact:'1997939399',
            pic:'../../static/pic/ysl.JPG',
            headPic:'../../static/pic/person-flat.png',

            date:"2018/5/12",
            state: true
          },
          {
            num:'000005',
            type:'影音家电',
            name:'Acer宏碁572G-528R',
            description:'自用2年半，硬件全原装，第四代i5标压版 8g(ddr3) gtx840m2g 120g（三星固态，自己加的，根据需求另卖）+1000g。',
            price:'2500',
            contact:'1997939399',
            pic:'../../static/pic/acer.jpg',
            headPic:'../../static/pic/person-flat.png',

            date:"2018/6/13",
            state: true
          }

        ],
        // commData:[{
        //   num:'000000',
        //   type:'鞋服配饰',
        //   name:'名创优品粉红顽皮帽子',
        //   description:'名创优品39.9入 带过一次 可小刀',
        //   price:'35',
        //   contact:'13323389923',
        //   pic:"../../static/pic/hat.jpg",
        //   state: true
        // },
        //   {
        //     num:'000001',
        //     type:'化妆洗漱',
        //     name:'DHC橄榄润唇膏',
        //     description:'日本 大国药妆店购入 全新未拆封',
        //     price:'50',
        //     contact:'123456',
        //     pic:"../../static/pic/dhc.jpeg",
        //     state: true
        //   },
        //   {
        //     num:'000002',
        //     type:'化妆洗漱',
        //     name:'无印良品卸妆啫喱',
        //     description:'日本 大国药妆店购入 全新未拆封',
        //     price:'70',
        //     contact:'13329048392',
        //     pic:'../../static/pic/wylp.jpeg',
        //     state: true
        //   },
        //   {
        //     num:'000003',
        //     type:'影音家电',
        //     name:'铁三角msr',
        //     description:'自用一年，音质良好。',
        //     price:'750',
        //     contact:'1997939399',
        //     pic:'../../static/pic/msr.jpg',
        //     state: true
        //   },
        //   {
        //     num:'000004',
        //     type:'化妆洗漱',
        //     name:'YSL粉底液B10色号',
        //     description:'因为皮肤偏干，这款比较哑光，不适合我，仅用过一次',
        //     price:'300',
        //     contact:'1997939399',
        //     pic:'../../static/pic/ysl.JPG',
        //     state: true
        //   },
        //   {
        //     num:'000005',
        //     type:'影音家电',
        //     name:'Acer宏碁572G-528R',
        //     description:'自用2年半，硬件全原装，第四代i5标压版 8g(ddr3) gtx840m2g 120g（三星固态，自己加的，根据需求另卖）+1000g。',
        //     price:'2500',
        //     contact:'1997939399',
        //     pic:'../../static/pic/acer.jpg',
        //     state: true
        //   }
        // ],
        commData: [],

      }
    },
    mounted() {
      // this.list = this.states.map(item => {
      //   return { value: item, label: item };
      // });
      const self = this;
      let getData = {
        size: 5,
        page: 0,
        properties: 'createDate',
        sort: 'DESC',
        isMine: false,
        isSelling: true,
        isSellingAll: false,
        isRating: false,
        goodsTypes: [],
        goodsName: '',
        username: ''
      }
      this.$axios.post('/flea/getNew', getData).then(function (response) {
        let topNewData = []
        for(let i=0;i<response.data.tradeInfoList.length;i++){
          topNewData.push({
            num: response.data.tradeInfoList[i].id,
            type: response.data.tradeInfoList[i].goodsType,
            name: response.data.tradeInfoList[i].goodsName,
            description: response.data.tradeInfoList[i].goodsDesc,
            price: response.data.tradeInfoList[i].price,
            contact: response.data.tradeInfoList[i].contact,
            headPic:'../../static/pic/person-flat.png',
            pic: response.data.tradeInfoList[i].pic,
          })
        }
        self.topData = topNewData;

      }).catch(function (error) {
        console.log("error:"+error)
      });
      getData = {
        size: 6,
        page: 0,
        properties: 'goodsPrice',
        sort: 'ASC',
        isMine: false,
        isSelling: true,
        isSellingAll: false,
        isRating: false,
        goodsTypes: [],
        goodsName: '',
        username: ''
      }
      this.$axios.post('/flea/getNew', getData).then(function (response) {
        let topNewData = []
        for(let i=0;i<response.data.tradeInfoList.length;i++){
          topNewData.push({
            num: response.data.tradeInfoList[i].id,
            type: response.data.tradeInfoList[i].goodsType,
            name: response.data.tradeInfoList[i].goodsName,
            description: response.data.tradeInfoList[i].goodsDesc,
            price: response.data.tradeInfoList[i].price,
            contact: response.data.tradeInfoList[i].contact,
            pic: response.data.tradeInfoList[i].pic,
          })
        }
        self.commData = topNewData;
        self.totalNum = response.data.total;
      }).catch(function (error) {
        console.log("error:"+error)
      });

    },
    methods: {
      filter() {
        const self = this;
        let getData = {
          size: 6,
          page: 0,
          properties: 'goodsPrice',
          sort: 'ASC',
          isMine: false,
          isSelling: true,
          isSellingAll: false,
          isRating: false,
          goodsTypes: self.options,
          goodsName: '',
          username: ''
        }
        this.$axios.post('/flea/getNew', getData).then(function (response) {
          console.log(response)
          let topNewData = []
          for(let i=0;i<response.data.tradeInfoList.length;i++){
            topNewData.push({
              num: response.data.tradeInfoList[i].id,
              type: response.data.tradeInfoList[i].goodsType,
              name: response.data.tradeInfoList[i].goodsName,
              description: response.data.tradeInfoList[i].goodsDesc,
              price: response.data.tradeInfoList[i].price,
              contact: response.data.tradeInfoList[i].contact,
              pic: response.data.tradeInfoList[i].pic,
            })
          }
          self.commData = topNewData;
          self.totalNum = response.data.total;

        }).catch(function (error) {
          console.log("error:"+error)
        });
      },
      search() {
        const self = this;
        let getData = {
          size: 6,
          page: 0,
          properties: 'goodsPrice',
          sort: 'ASC',
          isMine: false,
          isSelling: true,
          isSellingAll: false,
          isRating: false,
          goodsTypes: self.options,
          goodsName: self.searchText,
          username: ''
        }
        this.$axios.post('/flea/getNew', getData).then(function (response) {
          console.log(response)
          let topNewData = []
          for(let i=0;i<response.data.tradeInfoList.length;i++){
            topNewData.push({
              num: response.data.tradeInfoList[i].id,
              type: response.data.tradeInfoList[i].goodsType,
              name: response.data.tradeInfoList[i].goodsName,
              description: response.data.tradeInfoList[i].goodsDesc,
              price: response.data.tradeInfoList[i].price,
              contact: response.data.tradeInfoList[i].contact,
              pic: response.data.tradeInfoList[i].pic,
            })
          }
          self.commData = topNewData;
          self.totalNum = response.data.total;

        }).catch(function (error) {
          console.log("error:"+error)
        });
      },
      handleCurrentChange(val) {
        const self = this;
        let getData = {
          size: 6,
          page: val -1,
          properties: 'goodsPrice',
          sort: 'ASC',
          isMine: false,
          isSelling: true,
          isSellingAll: false,
          isRating: false,
          goodsTypes: [],
          goodsName: '',
          username: ''
        }
        this.$axios.post('/flea/getNew', getData).then(function (response) {
          console.log(response)
          let topNewData = []
          for(let i=0;i<response.data.tradeInfoList.length;i++){
            topNewData.push({
              num: response.data.tradeInfoList[i].id,
              type: response.data.tradeInfoList[i].goodsType,
              name: response.data.tradeInfoList[i].goodsName,
              description: response.data.tradeInfoList[i].goodsDesc,
              price: response.data.tradeInfoList[i].price,
              contact: response.data.tradeInfoList[i].contact,
              pic: response.data.tradeInfoList[i].pic,
            })
          }
          self.commData = topNewData;
          console.log(self.commData)

        }).catch(function (error) {
          console.log("error:"+error)
        });

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
    },
    beforeCreate:function(){
      localStorage.route="#trade";
    },

  }
</script>

<style scoped>
  .back{
    /*background-color: rgba(173,216,230,0.5);*/
    width: 100%;
    height:1200px;
    padding-bottom: 20px;
    display:flex;
  }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
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
    //width:950px;
    border-radius: 3px;
    margin-right: 10%;
    margin-left: 5%;
    margin-top: 30px;
    margin-bottom:5%;
    background:white;
    border:1px solid #e4e4e4;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
  }

  .textitem{
    position:relative;
    left:180px;
    top:-150px;

  }

  .picbox{
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
    margin-top:-3%;
    margin-left:-12%;
  }

  /*卡片样式*/
  .box-card {
    border-top:3px solid dodgerblue;
    border-radius: 5px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    margin: 0px;
  }
  .box-card:hover{
    background:#D1EEEE;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 5px;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
    data-ratio:"16:9";
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
