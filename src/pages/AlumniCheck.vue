<template>
  <personalCenter paneltitle="校友验证">
    <div>
      <div class="AluUsrInstruction" id="ad_info" style="display: inline;margin-top: 10px;margin-bottom: 10px">
        <h3 style="text-indent: 0px">校友账号校验</h3>
        <p class="lead">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;是指在校友的社会活动中以母校为核心，通过母校与校友、校友与校友、母校与社会之间所产生的物质、文化、人才等方面的交流，给母校、校友以及社会带来客观收益的经济活动。它以母校和校友为载体，目的是通过校友与母校之间天然的纽带，长期不断循环推动相关经济活动的发展。这一概念是著名经济学者吕世杰教授最早提出来的
        </p>
      </div>
      <hr/>
      <div style="min-height: 300px">
        <div class="alu_checkpanel" id="alu_checkid" style="margin-top: 30px;margin-bottom: 30px;display: inline;" >
          <div class="col-xs-12 col-sm-6 placeholder" style="min-height: 200px">
            <label>请上传毕业证书照片</label><br>
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              <div class="el-upload__tip" slot="tip">南京大学毕业证书照片正面，最好高清</div>
          </el-upload>
          </div>
          <div class="col-xs-12 col-sm-6 placeholder" style="min-height: 200px">
            <label>请上传学位证书照片</label><br>
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              <div class="el-upload__tip" slot="tip">南京大学学位证书正面，最好高清</div>
            </el-upload>
          </div>
        </div>
      </div>
      <hr/>
      <div style="text-align: justify">
        <el-button type="primary" round>&nbsp;提交&nbsp;</el-button>
      </div>

    </div>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";

  export default {
    name:"alumnicheck",
    components: {personalCenter},
    methods:{

    },
  }

</script>

<style scoped>

  .chooseButton{
    margin-top: 2%;
    margin-bottom: 5%;
  }

</style>
