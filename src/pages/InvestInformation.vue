<template>
  <personalCenter paneltitle="项目信息">
    <investInfoTabs :username="username"></investInfoTabs>

  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";
  import investList from "../components/investList";
  import loanTopBar from "../components/loanTopBar";
  import investInfoTabs from "../components/investInfoTabs";

  export default {
    name:"investinformation",
    components: {investList, personalCenter,loanTopBar,investInfoTabs},
    data() {
      return {
        username:localStorage.username
      };
    },
    methods:{

    }
  }

</script>

<style scoped>

</style>

<style>
  .el-tabs__item{
    font-size: 18px !important;
  }

</style>

<style>
  /*#leftOV,#leftFS,#leftSP,#leftLI,#leftLS,#leftBI,#leftIE,#leftNC,#leftAC,#leftCC{ color: #777777 !important; }*/
  #leftII { color: dodgerblue !important}
  #mainpanel { min-height: 400px !important}
</style>
