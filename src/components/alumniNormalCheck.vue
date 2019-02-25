<template>

  <el-tabs type="border-card" style="min-height: 600px;">
    <el-tab-pane label="基本资料" style="padding:20px">
      <el-form ref="base_form" :rules="base_rules" :model="base_form" label-width="150px">
        <el-form-item label="姓名" prop="name">
          <el-input style="width:267px;" v-model="base_form.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
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
        <div style="display:flex;">
          <el-form-item label="学历">
            <template>
              <el-radio v-model="base_form.university" label="本科毕业"></el-radio>
              <el-radio v-model="base_form.university" label="研究生毕业"></el-radio>
              <el-radio v-model="base_form.university" label="博士毕业"></el-radio>
            </template>
          </el-form-item>
          <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-upload
            class="upload-demo"
            :action='url'
            :onSuccess="uploadGraduate"
          >
            <el-button type="primary">点击上传</el-button>
            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <slot type="tip">请上传您的毕业证书，仅限jpg与png文件</slot>
          </el-upload>
        </div>
        <el-form-item label="工作单位及职务" prop="institution">
          <el-input class="inputs" v-model="base_form.institution"></el-input>
        </el-form-item>
        <el-form-item label="现居住地" prop="living_place">
          <el-input class="inputs" v-model="base_form.living_place"></el-input>
        </el-form-item>

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
      name: "alumniNormalCheck",
      data() {
        return {
          url: "http://"+ this.url_config +  ":8000/upload/image",
          base_form: {
            name: '',
            gender: '男',
            date: '',
            id_card:'',
            university:'本科毕业',
            evidence:'',
            institution:'',
            living_place:'',
          },
          base_rules:{
            name:[
              {required:true, message:'请输入您的姓名',trigger:'blur'},
              {min:1,max:6, message:'长度在1-6之间', trigger:'blur'}
            ],
            date:[
              {type:'date', required:true, message:'请选择出生日期', trigger:'change'}
            ],
            id_card:[
              {required:true, message:'请输入您的身份证',trigger:'blur'},
              {min:15,max:18, message:'长度为15或18', trigger:'blur'}
            ],
            major:[
              {required:true, message:'请输入您的专业',trigger:'blur'}
            ],
            institution:[
              {required:true, message:'请输入您的学院',trigger:'blur'}
            ],
            living_place:[
              {required:true, message:'请输入您的居住地信息',trigger:'blur'}
            ]
          },

        }
      },
      methods: {
        uploadGraduate(response, file, fileList){
          console.log("uploadSuccess");
          this.base_form.evidence+= 'http://'+ this.url_config +  ':8000/';
          this.base_form.evidence+=response;
        },
        submitForm(formName) {
          if(this.base_form.university===''){
            this.$message({
              message:"请上传学历证明！",
              type:'error',
            });
          }else{
            this.$refs[formName].validate((valid) => {
              if (valid) {
                var _this = this;
                this.$axios.get('/verify/alumnaVerify',{
                  params:{
                    gender:_this.base_form.gender,
                    birthday: _this.base_form.date,
                    idCardNumber:_this.base_form.id_card,
                    education:_this.base_form.university,
                    evidence:_this.base_form.evidence,
                    //institution:_this.base_form.institution,
                    //livingPlace:_this.base_form.living_place
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
