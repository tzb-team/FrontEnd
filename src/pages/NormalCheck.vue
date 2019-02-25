<template>
  <personalCenter paneltitle="校园验证">
    <div style="background-image: url('/static/pic/decoration.png');">
      <div class="MidUsrInstruction" id="mid_info" style="margin-top: 10px;margin-bottom: 10px">
        <h3 style="text-indent: 0px">校园验证</h3>
        <p class="lead" style="font-size:18px;">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;完善校园信息，您将体验更加多样的服务，尽享便携金融。
        </p>
      </div>
      <hr/>

      <div class="NormalCheckModule">
        <div v-if="test===0">
          <alumniNormalCheck></alumniNormalCheck>
        </div>
        <div v-if="test===1">
          <ordinaryNormalCheck></ordinaryNormalCheck>
        </div>
        <div v-if="test===2">
          <div style="padding:150px">
            <label style="font-size: 20px;">您提交的信息正在审核！</label>
          </div>
        </div>
        <div v-if="test===3">
          <div style="padding:150px">
            <label style="font-size: 20px;">您提交的信息已经通过审核，恭喜您升级为中级账户！</label>
          </div>
        </div>
      </div>



      <hr/>


    </div>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";
  import alumniNormalCheck from "../components/alumniNormalCheck"
  import ordinaryNormalCheck from "../components/ordinaryNormalCheck"
  export default {
    name:"normalcheck",
    components: {personalCenter,alumniNormalCheck,ordinaryNormalCheck},
    data(){
      return{
        test:1,
      }
    },
    mounted:function(){
      this.getState();
    },
    methods:{
      getState: function(){
        let self = this;
        this.$axios.get('/verify/getRoles',{
          params:{

          }
        }).then(function (response) {
          //console.log(response)
          var data = response.data
          if(data[0]==="初级"){
            if(data[1]==="校友"){
              self.test=0;
            }else if(data[1]==="学生"){
              self.test=1;
            }
          }else if(data[0]==="初级审核中"){
            self.test=2;
          }else if(data[0]==="非初级"){
            self.test=3;
          }
        }).catch(function (error) {
          console.log("error:"+error)
        });
      },
    }

  }

</script>



<style>
  /*#leftOV,#leftFS,#leftSP,#leftLI,#leftLS,#leftII,#leftIE,#leftBI,#leftAC,#leftCC{ color: #777777 !important; }*/
  #leftNC { color: dodgerblue !important}
  .el-upload__input{
    display: none !important;
  }
</style>
