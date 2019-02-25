<template>
  <personalCenter paneltitle="财务验证">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="高级账户验证" name="first">
        <div>
          <div class="AdUsrInstruction" id="ad_info" style="display: inline;margin-top: 10px;margin-bottom: 10px">
            <h3 style="text-indent: 0px">高级账号校验</h3>
            <p class="lead" style="font-size: 16px;">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您即将成为拥有Trust平台高级账户的用户，较之中级账户只能查看日常校园卡消费统计数据，高级账户可以查看个人完整消费财务分析和针对借款生成的消费修正建议；较之中级账户高级账户只能进行标的投资和查看项目信息，高级账户增加了发布资金需求的功能。而成为高级账户，只需在此页面您导入银行卡和支付宝数据并在下一页面完成个性信息的填写。
            </p>
          </div>
          <hr/>
          <div style="min-height: 300px">
            <div class="ad_checkpanel" id="ad_checkid" style="margin-top: 30px;margin-bottom: 30px;display: inline;" >
              <div style="position: relative">
                <div class="col-xs-12 col-sm-6 placeholder" style="min-height: 200px" v-if="!xlsx">
                  <label>请导入校园卡数据</label><br>
                  <el-upload
                    class="upload-demo"
                    drag
                    :action='url'
                    :file-list="fileList2"
                    :onSuccess="uploadCardSuccess"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">上传消费数据excel表格</div>
                    <div class="el-upload__tip" slot="tip">会进行脱敏处理，不会泄露个人隐私</div>
                  </el-upload>
                </div>
                <div v-else>
                  您已经上传了该项数据
                </div>
                <div class="col-xs-12 col-sm-6 placeholder" style="min-height: 200px" v-if="!csv">
                  <label>请导入支付宝数据</label><br>
                  <el-upload
                    class="upload-demo"
                    drag
                    :action='csv_url'
                    :onSuccess="uploadAlipaySuccess"
                    multiple
                    :file-list="fileList"

                  >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">上传支付宝的消费记录csv数据</div>
                    <div class="el-upload__tip" slot="tip">会进行脱敏处理，不会泄露个人隐私</div>
                  </el-upload>
                </div>
                <div v-else>
                  您已经上传了该项数据
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div style="text-align: justify;float:right;">
            <el-button type="primary" @click="confirm" round>&nbsp;提交&nbsp;</el-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="个性信息" style="padding:20px;">
        <el-form ref="selfinfo_form" :rules="selfinfo_rules" :model="selfinfo_form" label-width="130px">
          <div class="fail_subject" style="display:flex;">
            <el-form-item class="info_input" label="挂科数目" prop="fail">
              <el-input class="inputs" v-model.number="selfinfo_form.fail"></el-input>
            </el-form-item>
            <div style="padding-left: 300px;">
              <el-upload
                class="upload-demo"
                :action="url"
                :onSuccess="uploadReportCardSuccess"
                :on-remove="handleReportCardRemove"
                multiple
                :limit="16"
                :on-exceed="handleExceed"
                :file-list="selfinfo_form.report_cards" prop="fail_img">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">仅限jpg/png文件（每张不超过500kb，可以上传多张）</div>
              </el-upload>
            </div>
          </div>
          <div class="reward" style="width:600px">
            <el-form-item class="info_input" label="获奖情况" style="width:650px">
              <!--school-->
              <div class="school" style="padding: 0px 0px 10px 0px;">
                <el-form-item
                  v-for="(school_reward, index) in selfinfo_form.school_rewards"
                  :label="'校级奖项名称'"
                  :key="school_reward.key"
                  :prop="'school_rewards.' + index + '.value'"
                  :rules="{
                  required: true, message: '校级奖项名称不能为空', trigger: 'blur'
                  }" >
                  <div style="display: flex;width:400px;padding:0px 0px 10px 0px">
                    <el-input class="inputs" v-model="school_reward.value"></el-input>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <el-button @click.prevent="remove_school_reward(school_reward)" type="danger" icon="el-icon-delete" circle></el-button>
                  </div>
                </el-form-item>
                <el-form-item style="float:left; padding-bottom: 10px;" >
                  <el-button @click="add_school_reward">新增校级奖项名称</el-button>
                </el-form-item>
                <el-form-item style="float:left; padding-bottom: 10px;" >
                  <el-upload
                    class="upload-demo"
                    :action="url"
                    :fileList="schoolRewardList"
                    :onSuccess="uploadSchoolReward"
                    :on-remove="handleSchoolRewardRemove"
                    multiple
                    :limit="10"
                  >
                    <el-button type="primary">上传校级奖项凭证</el-button>
                    <div slot="tip" class="el-upload__tip">请按所填奖项顺序上传，每项一张图片凭证，仅限jpg/png文件（每张不超过500kb）</div>
                  </el-upload>
                </el-form-item>
                <br/>
              </div>

              <!--city-->
              <div class="city" style="padding: 0px 0px 10px 0px;">
                <el-form-item
                  v-for="(city_reward, index) in selfinfo_form.city_rewards"
                  :label="'市级奖项名称'"
                  :key="city_reward.key"
                  :prop="'city_rewards.' + index + '.value'"
                  :rules="{
                  required: true, message: '市级奖项名称不能为空', trigger: 'blur'
                  }" >
                  <div style="display: flex;width:400px;padding:0px 0px 10px 0px">
                    <el-input class="inputs" v-model="city_reward.value"></el-input>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <el-button @click.prevent="remove_city_reward(city_reward)"  type="danger" icon="el-icon-delete" circle></el-button>
                  </div>
                </el-form-item>
                <el-form-item style="float:left; padding-bottom: 10px;">
                  <el-button @click="add_city_reward">新增市级奖项名称</el-button>
                </el-form-item>
                <el-form-item style="float:left; padding-bottom: 10px;" >
                  <el-upload
                    class="upload-demo"
                    :action="url"
                    :fileList="cityRewardList"
                    :onSuccess="uploadCityReward"
                    :on-remove="handleCityRewardRemove"
                    multiple
                    :limit="10"
                  >
                    <el-button type="primary">上传市级奖项凭证</el-button>
                    <div slot="tip" class="el-upload__tip">请按所填奖项顺序上传，每项一张图片凭证，仅限jpg/png文件（每张不超过500kb）</div>
                  </el-upload>
                </el-form-item>
                <br/>
              </div>

              <!--province-->
              <div class="province" style="padding:0px 0px 10px 0px;">
                <el-form-item
                  v-for="(province_reward, index) in selfinfo_form.province_rewards"
                  :label="'省级奖项名称'"
                  :key="province_reward.key"
                  :prop="'province_rewards.' + index + '.value'"
                  :rules="{
                  required: true, message: '省级奖项名称不能为空', trigger: 'blur'
                  }" >
                  <div style="display: flex;width:400px;padding:0px 0px 10px 0px">
                    <el-input class="inputs" v-model="province_reward.value"></el-input>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <el-button @click.prevent="remove_province_reward(province_reward)"  type="danger" icon="el-icon-delete" circle></el-button>
                  </div>
                </el-form-item>
                <el-form-item style="float:left; padding-bottom: 10px;">
                  <el-button @click="add_province_reward">新增省级奖项名称</el-button>
                </el-form-item>
                <el-form-item style="float:left; padding-bottom: 10px;" >
                  <el-upload
                    class="upload-demo"
                    :action="url"
                    :fileList="provinceRewardList"
                    :onSuccess="uploadProvinceReward"
                    :on-remove="handleProvinceRewardRemove"
                    multiple
                    :limit="10"
                  >
                    <el-button type="primary">上传省级奖项凭证</el-button>
                    <div slot="tip" class="el-upload__tip">请按所填奖项顺序上传，每项一张图片凭证，仅限jpg/png文件（每张不超过500kb）</div>
                  </el-upload>
                </el-form-item>
                <br/>
              </div>

              <!--country-->
              <div class="country" style="padding:0px 0px 10px 0px;">
                <el-form-item
                  v-for="(country_reward, index) in selfinfo_form.country_rewards"
                  :label="'国家级奖项名称'"
                  :key="country_reward.key"
                  :prop="'country_rewards.' + index + '.value'"
                  :rules="{
                  required: true, message: '国家级奖项名称不能为空', trigger: 'blur'
                  }" >
                  <div style="display: flex;width:400px;padding:0px 0px 10px 0px">
                    <el-input class="inputs" v-model="country_reward.value"></el-input>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <el-button @click.prevent="remove_country_reward(country_reward)"  type="danger" icon="el-icon-delete" circle></el-button>
                  </div>
                </el-form-item>
                <el-form-item style="float:left; padding-bottom: 10px;">
                  <el-button @click="add_country_reward">新增国家级奖项名称</el-button>
                </el-form-item>
                <el-form-item style="float:left; padding-bottom: 10px;" >
                  <el-upload
                    class="upload-demo"
                    :action="url"
                    :fileList="countryRewardList"
                    :onSuccess="uploadCountryReward"
                    :on-remove="handleCountryRewardRemove"
                    multiple
                    :limit="10"
                  >
                    <el-button type="primary">上传国级奖项凭证</el-button>
                    <div slot="tip" class="el-upload__tip">请按所填奖项顺序上传，每项一张图片凭证，仅限jpg/png文件（每张不超过500kb）</div>
                  </el-upload>
                </el-form-item>
                <br/>
              </div>


            </el-form-item>
          </div>
          <!--志愿时长-->
          <div class="fail_subject" style="display:flex;">
            <el-form-item class="info_input" label="志愿时长：小时" prop="volunteer">
              <el-input class="inputs" v-model.number="selfinfo_form.volunteer"></el-input>
            </el-form-item>
            <div style="padding-left: 300px">
              <el-upload
                class="upload-demo"
                :action="url"
                :onSuccess="uploadVolunteer"
                :on-remove="removeVolunteer"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">仅限jpg/png文件</div>
              </el-upload>
            </div>
          </div>

          <div class="qualifications" >
            <el-form-item class="info_input" label="获得证书" style="width:640px">
              <!--qualifications-->
              <div class="qualifications" style="padding:0px 0px 10px 0px;">
                <el-form-item
                  v-for="(self_qualification, index) in selfinfo_form.self_qualifications"
                  :label="'获得证书名称'"
                  :key="self_qualification.key"
                  :prop="'self_qualifications.' + index + '.value'"
                  :rules="{
                  required: true, message: '证书名称不能为空', trigger: 'blur'
                  }" >
                  <div style="display: flex;width:400px;padding:0px 0px 10px 0px">
                    <el-input class="inputs" v-model="self_qualification.value"></el-input>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <el-button @click.prevent="remove_self_qualification(self_qualification)" type="danger" icon="el-icon-delete" circle></el-button>
                  </div>
                </el-form-item>
                <el-form-item style="float:left; padding-bottom: 10px;">
                  <el-button @click="add_self_qualification">新增证书名称</el-button>
                </el-form-item>
                <el-form-item style="float:left; padding-bottom: 10px;" >
                  <el-upload
                    class="upload-demo"
                    :action="url"
                    :fileList="qualificationList"
                    :onSuccess="uploadQualification"
                    :on-remove="handleQualificationRemove"
                    multiple
                    :limit="10"
                  >
                    <el-button type="primary">上传证书凭证</el-button>
                    <div slot="tip" class="el-upload__tip">请按所填证书顺序上传，每项一张图片凭证，仅限jpg/png文件（每张不超过500kb）</div>
                  </el-upload>
                </el-form-item>
                <br/>
              </div>
            </el-form-item>
          </div>
          <div style="text-align: justify;float:right;">
            <el-button type="primary" round @click="submitForm('selfinfo_form')">提交</el-button>
          </div>


        </el-form>
      </el-tab-pane>
    </el-tabs>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";

  export default {
    name:"advancedcheck",
    components: {personalCenter},
    mounted() {

    },
    data() {
      return {
        url: "http://"+ this.url_config +  ":8000/upload/csv",
        csv_url: "http://"+ this.url_config +  ":8000/upload/csv",
        alipay: '',
        card: '',
        csv: false,
        xlsx: false,
        reportFileList:[],
        schoolRewardList:[],
        cityRewardList:[],
        provinceRewardList:[],
        countryRewardList:[],
        qualificationList:[],
        fileList: [],
        fileList2: [],
        activeName: 'first',
        activeNames: ['1'],
        selfinfo_form:{
          fail:0,
          report_cards: [],
          volunteer:0.0,
          volunteer_img:'',
          school_rewards: [{
            value: '',
            file:'',
          }],
          city_rewards: [{
            value: '',
            file:'',
          }],
          province_rewards: [{
            value: '',
            file:'',
          }],
          country_rewards: [{
            value: '',
            file:'',
          }],
          self_qualifications: [{
            value: '',
            file:'',
          }],
        },
        selfinfo_rules:{
          fail:[
            {required:true,type: 'number', message: '必须为数字值'}
          ],
          volunteer:[
            {required:true,type: 'number', message: '必须为数字值'}
          ],
        },
        };
    },
    methods: {
      confirm() {

      },
      /*支付宝*/
      uploadCardSuccess(response){
        this.card += 'http://'+ this.url_config +  ':8000/'
        this.card += response
        console.log(response)
        console.log(localStorage.username)
        this.$axios.get('/upload/csvconfirm',{
          params: {
            filename: response,
            username: localStorage.username
          }
        }).then(function (res) {
          console.log(res)
        }).catch(function (error) {
          console.log(error)
        });
        this.fileList2.push({name: response, url: this.card})


      },

      uploadAlipaySuccess(response) {
        this.alipay += 'http://'+ this.url_config +  ':8000/'
        this.alipay += response
        console.log(response)
        console.log(localStorage.username)
        this.$axios.get('/upload/csvconfirm',{
          params: {
            filename: response,
            username: localStorage.username
          }
        }).then(function (res) {
          console.log(res)
        }).catch(function (error) {
          console.log(error)
        });
        this.fileList.push({name: response, url: this.alipay})

      },
      /*上传成绩*/
      uploadReportCardSuccess(response, file, fileList){
        console.log("upload")
        this.reportFileList=fileList;
      },
      handleReportCardRemove(file, fileList){
        this.reportFileList=fileList;
        console.log("remove")
      },
      /*上传志愿时长*/
      uploadVolunteer(response, file, fileList){
        this.selfinfo_form.volunteer_img += 'http://' + this.url_config +  ':8000/'
        this.selfinfo_form.volunteer_img += response;
      },
      removeVolunteer(file, fileList){
        this.selfinfo_form.volunteer_img="";
      },
      uploadSchoolReward(response, file, fileList){
        this.schoolRewardList=fileList;
        //console.log(this.schoolRewardList)
      },
      handleSchoolRewardRemove(file, fileList){
        this.schoolRewardList=fileList;
        //console.log(this.schoolRewardList)
      },
      uploadCityReward(response, file, fileList){
        this.cityRewardList=fileList;
      },
      handleCityRewardRemove(file, fileList){
        this.cityRewardList=fileList;
      },
      uploadProvinceReward(response, file, fileList){
        this.provinceRewardList=fileList;
      },
      handleProvinceRewardRemove(file, fileList){
        this.provinceRewardList=fileList;
      },
      uploadCountryReward(response, file, fileList){
        this.countryRewardList=fileList;
      },
      handleCountryRewardRemove(file, fileList){
        this.countryRewardList=fileList;
      },
      uploadQualification(response, file, fileList){
        this.qualificationList=fileList;
      },
      handleQualificationRemove(file, fileList){
        this.qualificationList=fileList;
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      add_school_reward() {
        this.selfinfo_form.school_rewards.push({
          value: '',
          key: Date.now()
        });
      },
      remove_school_reward(item) {
        var index = this.selfinfo_form.school_rewards.indexOf(item)
        this.selfinfo_form.school_rewards.splice(index, 1)

      },
      add_city_reward() {
        this.selfinfo_form.city_rewards.push({
          value: '',
          key: Date.now()
        });
      },
      remove_city_reward(item) {
        var index = this.selfinfo_form.city_rewards.indexOf(item)
        this.selfinfo_form.city_rewards.splice(index, 1)

      },
      add_province_reward() {
        this.selfinfo_form.province_rewards.push({
          value: '',
          key: Date.now()
        });
      },
      remove_province_reward(item) {
        var index = this.selfinfo_form.province_rewards.indexOf(item)
        this.selfinfo_form.province_rewards.splice(index, 1)
      },
      add_country_reward() {
        this.selfinfo_form.country_rewards.push({
          value: '',
          key: Date.now()
        });
      },
      remove_country_reward(item) {
        var index = this.selfinfo_form.country_rewards.indexOf(item)
        this.selfinfo_form.country_rewards.splice(index, 1)

      },
      add_self_qualification() {
        this.selfinfo_form.self_qualifications.push({
          value: '',
          key: Date.now()
        });
      },
      remove_self_qualification(item) {
        var index = this.selfinfo_form.self_qualifications.indexOf(item)
        this.selfinfo_form.self_qualifications.splice(index, 1)

      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 16 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      submitForm(formName) {
        if(this.reportFileList.length===0||this.selfinfo_form.volunteer_img===''){
          this.$message({
            message:"必须上传成绩单和志愿图片凭证！",
            type:'error',
          });
        }else if(this.selfinfo_form.school_rewards.length!=this.schoolRewardList.length||
          this.selfinfo_form.city_rewards.length!=this.cityRewardList.length||
          this.selfinfo_form.province_rewards.length!=this.provinceRewardList.length||
          this.selfinfo_form.country_rewards.lengtRdwfh!=this.countryRewardList.length||
          this.selfinfo_form.self_qualifications.length!=this.qualificationList.length){
          this.$message({
            message:"上传的奖项、证书凭证与描述个数不匹配！",
            type:'error',
          });
        }else{
          this.$refs[formName].validate((valid) => {
            if (valid) {
              //console.log(this.reportFileList)
              for(var i=0;i<this.reportFileList.length;i++){
                this.selfinfo_form.report_cards[i]=('http://' + this.url_config +  ':8000/'+this.reportFileList[i].response)
              }
              //console.log(this.selfinfo_form.report_cards)
              //console.log(this.selfinfo_form.school_rewards)
              for(var i=0;i<this.schoolRewardList.length;i++){
                this.selfinfo_form.school_rewards[i].file=('http://' + this.url_config +  ':8000/'+this.schoolRewardList[i].response)
              }
              //console.log(this.selfinfo_form.school_rewards)
              for(var i=0;i<this.cityRewardList.length;i++){
                this.selfinfo_form.city_rewards[i].file=('http://' + this.url_config +  ':8000/'+this.cityRewardList[i].response)
              }
              for(var i=0;i<this.provinceRewardList.length;i++){
                this.selfinfo_form.province_rewards[i].file=('http://'+ this.url_config +  ':8000/'+this.provinceRewardList[i].response)
              }
              for(var i=0;i<this.countryRewardList.length;i++){
                this.selfinfo_form.country_rewards[i].file=('http://'+ this.url_config +  ':8000/'+this.countryRewardList[i].response)
              }
              for(var i=0;i<this.qualificationList.length;i++){
                this.selfinfo_form.self_qualifications[i].file=('http://'+ this.url_config +  ':8000/'+this.qualificationList[i].response)
              }

              var _this = this;
              this.$axios.post('/verify/selfInfo',{
                  fail:_this.selfinfo_form.fail,
                  report_cards:_this.selfinfo_form.report_cards,
                  school_rewards:_this.selfinfo_form.school_rewards,
                  city_rewards:_this.selfinfo_form.city_rewards,
                  province_rewards:_this.selfinfo_form.province_rewards,
                  country_rewards:_this.selfinfo_form.country_rewards,
                  country_rewards:_this.selfinfo_form.country_rewards,
                  volunteer:_this.volunteer,
                  volunteer_img:_this.volunteer_img,
                  self_qualifications:_this.selfinfo_form.self_qualifications
              }).then(function (response) {
                var data = response.data
                console.log("data:")
                console.log(data)
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
    }
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

<style>
  .el-tabs__item{
    font-size: 18px !important;
  }
</style>

<style>
  /*#leftOV,#leftFS,#leftSP,#leftLI,#leftLS,#leftII,#leftIE,#leftNC,#leftBI,#leftCC{ color: #777777 !important; }*/
  #leftAC{ color: dodgerblue !important}
  .el-upload__input{
    display: none !important;
  }
</style>
