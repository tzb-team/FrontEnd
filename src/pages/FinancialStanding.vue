<template>
  <personalCenter paneltitle="财务状况">
    <fin-standing :username="username"></fin-standing>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";
  import FinStanding from "../components/finStanding";

  export default {
    name:"FinancialStanding",
    components: {FinStanding, personalCenter},
    data(){
      return{
        username:localStorage.username,
      }
    }
  }


</script>

