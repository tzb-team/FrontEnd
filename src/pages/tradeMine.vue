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

    <el-row>
      <el-col span="6">
        <leftTradeBar></leftTradeBar>
      </el-col>
      <el-col span="18">
        <div class="publishmes" >
          <el-form :rules="rules"
                   :inline="true"
                   ref="ruleForm" :model="sizeForm" label-width="80px" style="margin-top:8%;margin-left:18%;">
            <el-row>
              <el-col :span="10" >
                <div class="grid-content bg-purple">
                  <el-form-item label="物品类别" prop="type">
              <el-select v-model="sizeForm.type"  placeholder="请选择物品类别" style="width:200px">
                <el-option label="数码零件" value="家居日用"></el-option>
                <el-option label="影音家电" value="影音家电"></el-option>
                <el-option label="鞋服配饰" value="运动器材"></el-option>
                <el-option label="化妆洗漱" value="化妆洗漱"></el-option>
                <el-option label="图书教材" value="图书教材"></el-option>
                <el-option label="其他" value="其他"></el-option>
              </el-select>
            </el-form-item>
                  <el-form-item label="物品名称" prop="name">
                    <el-input v-model="sizeForm.name"
                              palceholder="请输入物品名称"
                              style="width:200px;"></el-input>
                  </el-form-item>
                  <el-form-item label="联系方式"
                                prop="phone">
                    <el-input v-model.number="sizeForm.phone"
                              type="phone"
                              style="width:200px;"
                              placeholder="电话"></el-input>
                  </el-form-item>
                </div>
              </el-col>
            </el-row>
            <el-form-item label="物品图片" prop="pic">
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
            <el-form-item label="大约价格" prop="price">
              <el-input v-model.number="sizeForm.price"
                        type="price"
                        style="width:200px;"
                        placeholder="价格"></el-input>
            </el-form-item>
            <el-form-item label="物品信息" prop="desc">
              <el-input type="textarea"
                        style="width:360px"
                        minRows="1"
                        maxRows="3"
                        autosize
                        placeholder="请输物品的详细信息"
                        v-model="sizeForm.desc"></el-input>
            </el-form-item>
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
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <footer-bar></footer-bar>
    </div>

  </div>
</template>

<script>
  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue';
  import LeftTradeBar from "../components/leftTradeBar";

  export default {
    name: "tradeMine",
    components:{LeftTradeBar, navi, footerBar, rightBar},
    data() {
      return {
        proof: '',
        url: "http://"+ this.url_config +  ":8000/upload/image",
        back:{
          backgroundImage:"url(" + require("../../static/pic/investListBack.jpg") + ")",
          backgroundRepeat:"no-repeat",
          backgroundAttachment:"fixed",
          backgroundSize:"100% auto",
          backgroundPosition: "0% 0%",
        },

        sizeForm: {
          type: '',
          name: '',
          phone: '',
          price: 0,
          desc: '',
        },
        rules: {
          type: [
            { required: true, message: '请至少选择一个类别', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入物品名称', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          phone:[
            { required: true, message: '联系方式不能为空'},
            { type: 'number', message: '联系方式必须为数字'},
          ],
          pic: [
            { required: true, message: '请上传相关图片', trigger: 'blur' }
          ],
          desc: [
            { required: true, message: '请填写物品详细信息', trigger: 'blur' },
            { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
          ],
        },
      };
    },
    methods: {
      uploadSuccess(response, file, fileList) {
        this.proof += 'http://' + this.url_config +  ':8000/'
        this.proof += response
      },
      onSubmit() {
        const self = this;
        this.$confirm('确认发布这条信息吗', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          self.$axios.post('/flea/newTrade',{
            name: self.sizeForm.name,
            type: self.sizeForm.type,
            contact: self.sizeForm.phone,
            picPath: self.proof,
            desc: self.sizeForm.desc,
            price: self.sizeForm.price,
          })
            .then(function (response) {
              console.log(response)
              self.$message({
                type: 'success',
                message: '发布成功!'
              });
              self.$router.push('/trade');
            }).catch(function (error) {
            console.log("error:"+error)
          });
        }).catch(() => {
          self.$message({
            type: 'info',
            message: '已取消'
          });
        });
      }
    },
    beforeCreate:function(){
      localStorage.route="#trade";
    },
  }
</script>

<style scoped>

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
  /*主体样式*/
  .publishmes{
    background:white;
    border:1px solid #e4e4e4;
    //height:630px;
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
