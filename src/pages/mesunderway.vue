<template>
  <div :style=back>
    <!--顶栏 -->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <navi style="position: relative"></navi>
    </div>
    <div class="col-xs-12 col-md-12" style="padding: 0;position:relative;">
      <div class="myspace">
        <h2 class="myspace">信息发布 -- 正在进行</h2>
        <p style="color: #777777;">欢迎访问这个帮你找东西的神奇平台！</p>
      </div>
    </div>

    <!--正文-->
    <el-row>
      <el-col span="6">
        <leftInformationbar></leftInformationbar>
      </el-col>
      <el-col span="18">
        <div class="mesboxborder" >
          <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="失物招领" name="first">
              <div v-for="i in mesdata1.length" :key="i">
                <div v-if="mesdata1[i-1].mestype === '失物招领'" style="margin-left: 20px;margin-top: 20px">
                  <el-row>
                    <el-col :span="24">
                      <div class="grid-content bg-purple-dark">
                        <el-card class="box-card">
                          <el-row >
                            <el-col :span="6">
                              <div class="grid-content bg-purple">
                                <div>
                                  <img :src="mesdata1[i-1].pic"  class="picbox" alt="User_pic">
                                </div>
                              </div>
                            </el-col>
                            <el-col :span="16">
                              <div class="grid-content bg-purple" style="margin-left:25%;margin-top:5%;">
                                <el-row>
                                  <el-col :span="12">
                                    <div class="grid-content bg-purple">
                                      <div>
                                        <strong style="font-size: 15px;">物品类别</strong>
                                        <span style="position:relative;left:20px;">{{ mesdata1[i-1].itemtype}}</span>
                                      </div>
                                      <div>
                                        <strong style="font-size: 15px;">发布时间</strong>
                                        <span style="position:relative;left:20px;">{{ mesdata1[i-1].time}}</span>
                                      </div>
                                    </div>
                                  </el-col>
                                  <el-col :span="12">
                                    <div class="grid-content bg-purple-light">
                                      <div>
                                        <strong style="font-size: 15px;">物品名称</strong>
                                        <span style="position:relative;left:20px;">{{ mesdata1[i-1].name}}</span>
                                      </div>
                                      <div >
                                        <strong style="font-size: 15px;">联系方式</strong>
                                        <span style="position:relative;left:20px;">{{ mesdata1[i-1].phone}}</span>
                                      </div>
                                    </div>
                                  </el-col>
                                </el-row>
                                <br/>
                                <div>
                                    <strong style="font-size: 15px;">详细信息</strong>
                                    <span style="position:relative;left:20px;">{{ mesdata1[i-1].dec}}</span>
                                  </div>
                                <el-row>
                                  <el-col :offset="14">
                                    <el-button type="success"
                                               round size="small"
                                               @click="currentId(mesdata1[i-1].id)"
                                               style="margin-top: 30px;">确认完成</el-button>
                                    <el-dialog title="确认完成"
                                               width="40%"
                                               :visible.sync="dialogFormVisible">
                                      <el-form :model="form" >
                                        <el-form-item label="对方用户名" :label-width="formLabelWidth">
                                          <el-input v-model="form.name"
                                                    style="width:330px;"
                                                    auto-complete="off"></el-input>
                                        </el-form-item>
                                      </el-form>
                                      <div slot="footer" class="dialog-footer">
                                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                                        <el-button type="primary" @click="done()">确 定</el-button>
                                      </div>
                                    </el-dialog>
                                  </el-col>
                                </el-row>
                              </div>
                            </el-col>
                          </el-row>
                        </el-card>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-tab-pane>

            <el-tab-pane label="寻物启事" name="second">
              <div v-for="i in mesdata2.length" :key="i">
                <div v-if="mesdata2[i-1].mestype === '寻物启事'" style="margin-left: 20px;margin-top: 20px">
                  <el-card class="box-card">
                    <el-row >
                      <el-col :span="6">
                        <div class="grid-content bg-purple">
                          <div>
                            <img :src="mesdata2[i-1].pic"  class="picbox" alt="User_pic">
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="16">
                        <div class="grid-content bg-purple" style="margin-left:25%;margin-top:5%;">
                          <el-row>
                            <el-col :span="12">
                              <div class="grid-content bg-purple">
                                <div>
                                  <strong style="font-size: 15px;">物品类别</strong>
                                  <span style="position:relative;left:20px;">{{ mesdata2[i-1].itemtype}}</span>
                                </div>
                                <div>
                                  <strong style="font-size: 15px;">发布时间</strong>
                                  <span style="position:relative;left:20px;">{{ mesdata2[i-1].time}}</span>
                                </div>
                              </div>
                            </el-col>
                            <el-col :span="12">
                              <div class="grid-content bg-purple-light">
                                <div>
                                  <strong style="font-size: 15px;">物品名称</strong>
                                  <span style="position:relative;left:20px;">{{ mesdata2[i-1].name}}</span>
                                </div>
                                <div >
                                  <strong style="font-size: 15px;">联系方式</strong>
                                  <span style="position:relative;left:20px;">{{ mesdata2[i-1].phone}}</span>
                                </div>
                              </div>
                            </el-col>
                          </el-row>
                          <br/>
                          <div>
                            <strong style="font-size: 15px;">详细信息</strong>
                            <span style="position:relative;left:20px;">{{ mesdata2[i-1].dec}}</span>
                          </div>
                          <el-row>
                            <el-col :offset="14">
                              <el-button type="success"
                                         round size="small"
                                         @click="currentId(mesdata1[i-1].id)"
                                         style="margin-top: 30px;">确认完成</el-button>
                              <el-dialog title="确认完成"
                                         width="40%"
                                         :visible.sync="dialogFormVisible">
                                <el-form :model="form" >
                                  <el-form-item label="对方用户名" :label-width="formLabelWidth">
                                    <el-input v-model="form.name"
                                              style="width:330px;"
                                              auto-complete="off"></el-input>
                                  </el-form-item>
                                </el-form>
                                <div slot="footer" class="dialog-footer">
                                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                                  <el-button type="primary" @click="done()">确 定</el-button>
                                </div>
                              </el-dialog>
                            </el-col>
                          </el-row>
                        </div>
                      </el-col>
                    </el-row>
                  </el-card>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>

    <!--右边栏-->
    <div>
      <right-bar></right-bar>
    </div>

    <!--底栏-->
    <div  style="padding: 0;position: relative;background-color: black;">
      <footer-bar></footer-bar>
    </div>

  </div>
</template>

<script>
  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue';
  import leftInformationbar from "@/components/leftInformationbar.vue"
  let dialogFormVisible;

  export default {
    name: "mesunderway",
    components:{leftInformationbar, navi, footerBar, rightBar},
    data() {
      return {
        back:{
          backgroundImage:"url(" + require("../../static/pic/investListBack.jpg") + ")",
          backgroundRepeat:"no-repeat",
          backgroundAttachment:"fixed",
          backgroundSize:"100% auto",
          backgroundPosition: "0% 0%",
        },
        mesdata1:[
          {
            mestype:'失物招领',
            itemtype:'其他',
            name:'杯子',
            phone:'13834712391',
            dec:'下午在仙I-221上课的时候捡到的一个杯子，放到仙I的保卫处了。（P.s.竟然和我的杯子是同款）',
            pic:'传上来的图片',
            state:true,
            time:'2018-08-24',
          },
          {
            mestype:'寻物启事',
            itemtype:'其他',
            name:'雨伞',
            phone:'13834712391',
            dec:'啊啊啊啊啊已经是今年丢的第四把伞了，大概长左边酱……中午骑小蓝去九食，应该是落在车筐里面了。捡到的童鞋可以联系我一下嘛，我可以请你喝奶茶啊~',
            pic:'传上来的图片',
            state:true,
            time:'2018-09-04',
          }
        ],
        mesdata2: [],
        activeName2: 'first',
        dialogFormVisible: false,
        current_choose_id: 0,
        form: {
          name: '',
        },
        rules:{
          name:[ {required: true, message: '请输入活动名称', trigger: 'blur'} ]
        },
        formLabelWidth: '120px',
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      currentId(index){
        this.dialogFormVisible = true
        this.current_choose_id = index
        console.log(index)
      },
      loadAll(){
        const self = this;
        console.log(localStorage.username)
        this.$axios.get('/lostFound/check',{
          params: {
            username: localStorage.username,
            property: '失物招领',
            state: '正在进行'
          }
        } ).then(function (response) {
          console.log(response)
          let topNewData = []
          for(let i=0;i<response.data.length;i++){
            topNewData.push({
              id: response.data[i].taskID,
              mestype: response.data[i].property,
              itemtype: response.data[i].thingsType,
              name: response.data[i].thingsName,
              dec: response.data[i].description,
              loc: response.data[i].lostPlace,
              phone: response.data[i].phone,
              pic: response.data[i].picPath,
              state: response.data[i].state,
              username: response.data[i].username,
              time: response.data[i].date
            })
          }
          console.log(topNewData)
          self.mesdata1 = topNewData;
        }).catch(function (error) {
          console.log("error:"+error)
        });

        this.$axios.get('/lostFound/check',{
          params: {
            username: localStorage.username,
            property: '寻物启事',
            state: '正在进行'
          }
        } ).then(function (response) {
          let topNewData = []
          for(let i=0;i<response.data.length;i++){
            topNewData.push({
              id: response.data[i].taskID,
              mestype: response.data[i].property,
              itemtype: response.data[i].thingsType,
              name: response.data[i].thingsName,
              dec: response.data[i].description,
              loc: response.data[i].lostPlace,
              phone: response.data[i].phone,
              pic: response.data[i].picPath,
              headpic: "../../static/pic/photo.jpg",
              state: response.data[i].state,
              username: response.data[i].username,
              time: response.data[i].date
            })
          }
          console.log(topNewData)
          self.mesdata2 = topNewData;
        }).catch(function (error) {
          console.log("error:"+error)
        });
      },
      done :function(){
        const self = this;
        this.$axios.get('/lostFound/finish',{
          params: {
            id: self.current_choose_id,
            toUsername: self.form.name
          }
        }).then(
          function(response){
            console.log(response)
            self.dialogFormVisible=false
            self.loadAll()
          }
        ).catch(function (error) {
          console.log(error);
        });
      },
    },
    mounted() {
      const self = this;
      console.log(localStorage.username)
      this.$axios.get('/lostFound/check',{
        params: {
          username: localStorage.username,
          property: '失物招领',
          state: '正在进行'
        }
      } ).then(function (response) {
        console.log(response)
        let topNewData = []
        for(let i=0;i<response.data.length;i++){
          topNewData.push({
            id: response.data[i].taskID,
            mestype: response.data[i].property,
            itemtype: response.data[i].thingsType,
            name: response.data[i].thingsName,
            dec: response.data[i].description,
            loc: response.data[i].lostPlace,
            phone: response.data[i].phone,
            pic: response.data[i].picPath,
            state: response.data[i].state,
            username: response.data[i].username,
            time: response.data[i].date
          })
        }
        console.log(topNewData)
        self.mesdata1 = topNewData;
      }).catch(function (error) {
        console.log("error:"+error)
      });

      this.$axios.get('/lostFound/check',{
        params: {
          username: localStorage.username,
          property: '寻物启事',
          state: '正在进行'
        }
      } ).then(function (response) {
        let topNewData = []
        for(let i=0;i<response.data.length;i++){
          topNewData.push({
            id: response.data[i].taskID,
            mestype: response.data[i].property,
            itemtype: response.data[i].thingsType,
            name: response.data[i].thingsName,
            dec: response.data[i].description,
            loc: response.data[i].lostPlace,
            phone: response.data[i].phone,
            pic: response.data[i].picPath,
            headpic: "../../static/pic/photo.jpg",
            state: response.data[i].state,
            username: response.data[i].username,
            time: response.data[i].date
          })
        }
        console.log(topNewData)
        self.mesdata2 = topNewData;
      }).catch(function (error) {
        console.log("error:"+error)
      });

    },
    beforeCreate:function(){
      localStorage.route="#notice";
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
    //width:850px;
    margin-right: 10%;
    border-radius: 3px;
    margin-left: 5%;
    margin-top: 30px;
    margin-bottom:5%;
    background:white;
    border:1px solid #e4e4e4;
    min-height:800px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
  }

.picbox{
  box-shadow:
    0 1px 6px 0 rgba(0,0,0, .12),
    0 1px 6px 0 rgba(0,0,0, .12);
  border-radius: 3px;
  max-width:250px;
  max-height:200px;
  margin-left:5%;
}

/*卡片样式*/
  .box-card {
    min-height: 250px;
    border-radius: 5px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    margin-left:2%;
    margin-right:5%;
    padding: 5px;
  }
</style>
