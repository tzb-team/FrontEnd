<template>
  <div :style=back>
    <!--顶栏 -->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <navi style="position: relative"></navi>
    </div>
    <div class="col-xs-12 col-md-12" style="padding: 0;position:relative;">
      <div class="myspace">
        <h2 class="myspace">信息发布 -- 发布消息</h2>
        <p style="color: #777777;">欢迎访问这个帮你找东西的神奇平台！</p>
      </div>
    </div>

    <!--正文-->
    <el-row>
      <el-col span="6">
        <leftInformationbar></leftInformationbar>
      </el-col>
      <el-col span="18">
        <div class="publishmes" >
          <el-form :rules="rules"
                   :inline="true"
                   ref="ruleForm" :model="sizeForm" label-width="80px" size="mini" style="margin-top:5%;margin-left:15%;">
            <el-row>
              <el-col :span="10" >
                <div class="grid-content bg-purple">
                  <el-form-item label="消息性质" prop="type">
                    <el-radio-group v-model="sizeForm.type" size="small">
                      <el-radio border label="失物招领" value="失物招领"></el-radio>
                      <el-radio border label="寻物启事" value="寻物启事"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="物品名称" prop="name" >
                    <el-input v-model="sizeForm.name"
                              palceholder="请输入物品名称"
                              style="width:203px;"></el-input>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="8" >

                <div class="grid-content bg-purple">
                  <el-form-item label="物品类别" prop="itemtype" >
                    <el-select v-model="sizeForm.region"  placeholder="请选择物品类别" style="width:200px">
                      <el-option label="校园卡" value="校园卡"></el-option>
                      <el-option label="钥匙" value="钥匙"></el-option>
                      <el-option label="证件" value="证件"></el-option>
                      <el-option label="其他" value="其他"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="大致地点" prop="itemtype" >
                    <el-select v-model="sizeForm.place"  placeholder="请选择大致地点" style="width:200px">
                      <el-option label="四五六食堂" value="四五六食堂"></el-option>
                      <el-option label="基础实验楼" value="基础实验楼"></el-option>
                      <el-option label="仙I" value="仙I"></el-option>
                      <el-option label="仙II" value="仙II"></el-option>
                      <el-option label="逸夫楼" value="逸夫楼"></el-option>
                      <el-option label="九食堂" value="九食堂"></el-option>
                      <el-option label="十食堂" value="十食堂"></el-option>
                      <el-option label="操场" value="操场"></el-option>
                      <el-option label="其他" value="其他"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="联系方式" prop="phone">
                    <el-input v-model.number="sizeForm.phone"
                              type="phone"
                              style="width:200px;"
                              placeholder="手机号"></el-input>
                  </el-form-item>

                </div>
              </el-col>
            </el-row>
            <br/>
            <el-form-item label="物品图片" prop="pic" >
              <el-upload   class="avatar-uploader"
                           drag
                           :show-file-list="false"
                           :action='url'
                           :onSuccess="uploadSuccess"
                           multiple>
                <img v-if="proof" :src="proof" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <br/>
            <el-form-item label="物品信息" prop="desc" >
              <el-input type="textarea"
                        style="width:360px"
                        minRows="1"
                        maxRows="3"
                        autosize
                        placeholder="请输物品的详细信息"
                        v-model="sizeForm.desc"></el-input>
            </el-form-item>
            <br/>
            <el-row :gutter="20">
              <el-col :span="6" :offset="16">
                <div class="grid-content bg-purple">
                <el-form-item size="large" style="margin-top: 20px;">
                  <el-button type="primary" @click="onSubmit()" >发布</el-button>
                </el-form-item>
              </div>
              </el-col>
            </el-row>
          </el-form>
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

  export default {
    name: "notice",
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
        url: "http://" + this.url_config +  ":8000/upload/image",
        proof: '',
        sizeForm: {
          name: '',
          type:'',
          place:'',
          phone: '',
          pic: '',
          desc: '',
          region: ''
        },
        rules: {
          mestype: [
            {required: true, message: '请选择消息类型', trigger: 'change' }
          ],
          pic: [
            { required: true, message: '请上传相关图片', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入物品名称', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          itemtype: [
            { required: true, message: '请至少选择一个类别', trigger: 'blur' }
          ],
          type: [
            { required: true, message: '请至少选择一个类别', trigger: 'blur' }
          ],
          desc: [
            { required: true, message: '请填写物品详细信息', trigger: 'blur' },
            { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
          ],
          phone:[
            { required: true, message: '联系方式不能为空'},
            { type: 'number', message: '联系方式必须为数字'},
          ]
        },
      };
    },
    methods: {
      uploadSuccess(response) {
        this.proof += 'http://' + this.url_config +  ':8000/'
        this.proof += response
        console.log(response)
      },

      onSubmit() {
        const self = this;
        this.$confirm('确认发布这条信息吗', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          self.$axios.post('/lostFound/launch',{
            property: self.sizeForm.type,
            thingsName: self.sizeForm.name,
            phone: self.sizeForm.phone,
            picPath: self.proof,
            description: self.sizeForm.desc,
            thingsType: self.sizeForm.region,
            lostPlace: self.sizeForm.place,
          })
            .then(function (response) {
              console.log(response)
              self.$message({
                type: 'success',
                message: '发布成功!'
              });
              self.$router.push('/notice/mesunderway');
            }).catch(function (error) {
            console.log("error:"+error)
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      }
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
    min-height:750px;
    //height: 200px;
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
  /*主体样式*/
  .publishmes{
    background:white;
    border:1px solid #e4e4e4;
    min-height:600px;
    //width:850px;
    margin: 30px 10% 50px 3%;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>
