<template>
  <personalCenter paneltitle="专利登记">
    <el-form :rules="rules"
                   :inline="true"
                   ref="ruleForm" :model="sizeForm" label-width="80px" style="margin-top:8%;margin-left:18%;">
      <el-row>
        <el-col :span="10" >
          <div class="grid-content bg-purple">
            <el-form-item label="专利名称" prop="name">
              <el-input v-model="sizeForm.name"
                        palceholder="请输入专利名称"
                        style="width:200px;">
              </el-input>
            </el-form-item>
            <el-form-item label="专利ID"
                          prop="id">
              <el-input v-model.number="sizeForm.id"
                        style="width:200px;"
                        placeholder="请输入专利号">
              </el-input>
            </el-form-item>
            <el-form-item label="专利类别" prop="type">
              <el-select v-model="sizeForm.type"  placeholder="请选择物品类别" style="width:200px">
                <el-option label="数码零件" value="数码零件"></el-option>
                <el-option label="医用药品" value="医用药品"></el-option>
                <el-option label="机械工具" value="机械工具"></el-option>
                <el-option label="其他" value="其他"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="专利池号"
                          prop="set">
              <el-input v-model.number="sizeForm.set"
                        style="width:200px;"
                        placeholder="请输入专利池号">
              </el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-form-item label="专利图片" prop="pic">
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
      <el-form-item label="专利信息" prop="desc">
        <el-input type="textarea"
                  style="width:360px"
                  minRows="1"
                  maxRows="3"
                  autosize
                  placeholder="请输入专利的详细信息"
                  v-model="sizeForm.desc"></el-input>
      </el-form-item>
      <el-row :gutter="20">
        <el-col :span="8" :offset="2">
          <div class="grid-content bg-purple">
            <el-form-item size="large" style="margin-top: 20px;">
              <el-button type="primary" @click="onSubmit()" >提交</el-button>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";
  import ProjectList from "../components/projectList";

  export default {
    name:"patentRegister",
    components: {ProjectList, personalCenter},
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
          id: '',
          desc: '',
          set: ''
        },
        rules: {
          type: [
            { required: true, message: '请至少选择一个类别', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入专利名称', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          id:[
            { required: true, message: '请输入专利号'},
            // { type: 'number', message: '联系方式必须为数字'},
          ],
          set:[
            { required: true, message: '请输入专利池号'},
            // { type: 'number', message: '联系方式必须为数字'},
          ],
          pic: [
            { required: true, message: '请上传相关图片', trigger: 'blur' }
          ],
          desc: [
            { required: true, message: '请填写专利详细信息', trigger: 'blur' },
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
            contact: self.sizeForm.id,
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
  .emphasize{
    position: block;
    display: inline
  }
  .keypoint{
    color:deepskyblue;
    font-size: 40px
  }
  .inform1{
    margin-top: 50px;
  }
</style>
<style>
  /*#leftOV,#leftFS,#leftSP,#leftLI,#leftLS,#leftII,#leftBI,#leftNC,#leftAC,#leftCC{ color: #777777 !important; }*/
  #leftIE { color: dodgerblue !important}
</style>