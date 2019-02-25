<template>

  <el-tabs type="border-card" style="min-height: 600px;">
    <el-tab-pane label="基本资料" style="padding:20px;">
      <el-form ref="base_form" :rules="base_rules" :model="base_form" label-width="100px" style="padding:15px;">
        <el-form-item label="姓名" prop="name">
          <el-input style="width:267px;" v-model="base_form.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <template>
            <el-radio v-model="base_form.gender" label="男">男</el-radio>
            <el-radio v-model="base_form.gender" label="女">女</el-radio>
          </template>
        </el-form-item>
        <el-form-item label="出生日期" prop="date">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="base_form.date" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="身份证号" prop="id_card">
          <el-input class="inputs" v-model="base_form.id_card"></el-input>
        </el-form-item>
        <el-form-item label="学校" prop="university">
          <el-input class="inputs" v-model="base_form.university"></el-input>
        </el-form-item>
        <el-form-item label="学院" prop="institution">
          <el-input class="inputs" v-model="base_form.institution"></el-input>
        </el-form-item>
        <el-form-item label="专业" prop="major">
          <el-input class="inputs" v-model="base_form.major"></el-input>
        </el-form-item>
        <el-form-item label="支付宝账号" prop="alipay">
          <el-input class="inputs" v-model="base_form.alipay"></el-input>
        </el-form-item>

        <div style="min-height: 300px;padding:40px 0px 10px 0px;">
          <div class="mid_checkpanel" id="mid_checkid" style="margin-top: 30px;margin-bottom: 30px">
            <div style="min-height: 300px;">
              <div class="col-xs-12 col-sm-6 placeholder" style="min-height: 200px">
                <label>请上传校园卡照片</label><br>
                <el-upload
                  class="upload-demo"
                  drag
                  :action='url'
                  :onSuccess="uploadSchoolCardSuccess"
                  multiple>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                  <div class="el-upload__tip" slot="tip">校园卡正面，能清楚看到头像，姓名以及学号</div>
                </el-upload>
              </div>
              <div class="col-xs-12 col-sm-6 placeholder" style="min-height: 200px">
                <label>请上传学生证照片</label><br>
                <el-upload
                  class="upload-demo"
                  drag
                  :action='url'
                  :onSuccess="uploadStuCardSuccess"
                  multiple>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                  <div class="el-upload__tip" slot="tip">学生证首页，能清楚看清楚头像，姓名，院系以及学号</div>
                </el-upload>
              </div>
            </div>
          </div>
        </div>

        <el-form-item style="float:right;">
          <el-button type="primary" @click="submitForm('base_form')">立即创建</el-button>
          <el-button @click="resetForm('base_form')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>

</template>

<script>
  export default {
    name: "ordinaryNormalCheck",
    data() {
      return {
        count:0,
        url: "http://"+ this.url_config +  ":8000/upload/image",
        base_form: {
          name: '',
          gender: '男',
          date: '',
          id_card:'',
          university:'',
          major:'',
          institution:'',
          alipay:'',
          school_card_proof: '',
          stu_card_proof:'',
        },
        base_rules:{
          name:[
            {required:true, message:'请输入您的姓名',trigger:'blur'},
            {min:1,max:6, message:'长度在1-6之间', trigger:'blur'}
          ],
          gender:[
            {required:true}
          ],
          date:[
            {type:'date', required:true, message:'请选择出生日期', trigger:'change'}
          ],
          id_card:[
            {required:true, message:'请输入您的身份证',trigger:'blur'},
            {min:15,max:18, message:'长度为15或18', trigger:'blur'}
          ],
          university:[
            {required:true, message:'请输入您的大学',trigger:'blur'}
          ],
          major:[
            {required:true, message:'请输入您的专业',trigger:'blur'}
          ],
          institution:[
            {required:true, message:'请输入您的学院',trigger:'blur'}
          ],
          alipay:[
            {required:true, message:'请输入您的支付宝账号',trigger:'blur'}
          ]
        },
        //img

      }
    },

    mounted:function(){
      this.$axios.get('/verify/getRoles',{
        params:{

        }
      }).then(function (response) {

      }).catch(function (error) {
        console.log("error:"+error)
      });
    },

    methods: {
      uploadSchoolCardSuccess(response, file, fileList) {
        console.log("uploadSuccess");
        this.base_form.school_card_proof += 'http://'+ this.url_config +  ':8000/';
        this.base_form.school_card_proof += response;
        //console.log("school_card_proof:" + this.base_form.school_card_proof);
      },
      uploadStuCardSuccess(response, file, fileList){
        console.log("uploadSuccess");
        this.base_form.stu_card_proof += 'http://'+ this.url_config +  ':8000/';
        this.base_form.stu_card_proof += response;
        //console.log("stu_card_proof:" + this.base_form.stu_card_proof);
      },
      submitForm(formName) {
        if(this.base_form.stu_card_proof===''||this.base_form.school_card_proof===''){
          this.$message({
            message:"请上传学生证和校园卡照片！",
            type:'error',
          });
        }else{
          this.$refs[formName].validate((valid) => {
            if (valid) {
              var _this = this;
              this.$axios.get('/verify/campus',{
                params:{
                  realName:_this.base_form.name,
                  gender:_this.base_form.gender,
                  birthday:_this.base_form.date,
                  idCardNumber:_this.base_form.id_card,
                  university:_this.base_form.university,
                  institution:_this.base_form.institution,
                  major:_this.base_form.major,
                  alipay:_this.base_form.alipay,
                  stuCardImage:_this.base_form.stu_card_proof,
                  schoolCardImage:_this.base_form.school_card_proof
                }
              }).then(function (response) {
                var data = response.data
                //console.log(data)
                if(data.success){
                  _this.$message({
                    message:'提交成功！',
                    type:'success',
                  });
                }else{
                  _this.$message({
                    message:data.message,
                    type:'error',
                  });
                }
              }).catch(function (error) {
                console.log(error)
              });


            } else {
              this.$message({
                message:"信息不完整！",
                type:'error',
              });
            }
          });
        }
      },
      otherway(){
        this.count++;
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

    },
  }
</script>

<style scoped>
  .info_input{
    width:400px;
  }
  .inputs{
    width:520px;
  }
</style>
