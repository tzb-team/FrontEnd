<template>
  <personalCenter paneltitle="校园表现">
    <academicPerformance :username="username"></academicPerformance>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";
  import academicPerformance from "../components/academicPerformance"



  export default {
    name:"schoolperformance",
    components: {personalCenter,academicPerformance},
    data(){
      return{
        username:localStorage.username
      }
    }

  }

</script>

