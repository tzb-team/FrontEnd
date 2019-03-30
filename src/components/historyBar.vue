<template>
  <div class="historybar">
    <div style="height:130px;text-align: center;">
      <h1>afds</h1>
    </div>
  </div>
</template>

<script>
export default {
  name:"historyBar",
  props:['historyBar'],
  data(){
    return{
      a:{
        from:"0x",
        to:"0x",
        id:"0",
      }
    }
  },
  methods:{
    showdetails(){
      this.a.from = this.investList.from;
      this.a.to = this.investList.to;
      this.a.id = this.investList.id;
      this.a.time = this.investList.time;
      }
    },
  }
</script>
