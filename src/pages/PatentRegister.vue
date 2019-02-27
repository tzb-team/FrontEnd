<template>
  <personalCenter paneltitle="我的专利">
    
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";
  import ProjectList from "../components/projectList";

  export default {
    name:"LoanStatistics",
    components: {ProjectList, personalCenter},
    data(){
      const item = {
        patentID: 'order#53431',
        patentName: '新型口腔器械',
        patentOwner: 'Mike 丁',
        patentState: '正常',
        // patentDetails: '详情'
      };
      return{
        num_of_patents:10,
        tableData: Array(10).fill(item)

      }
    }
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