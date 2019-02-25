<template>
  <div class="leftsidenav">
    <div class="left_menus">
      <p class="left_head" style="margin-top: 10px"><b>数据统计</b></p><hr/>
      <ul class="left_ul">
        <li><a href="/backAdminData" id="leftAA" class="active" @click="setA">基础数据</a></li>
        <li><a href="/backAdminData/Default">违约信息</a></li>
      </ul>
      <hr/>
    </div>

  </div>
</template>

<script>
    export default {
        name: "leftAdminBar"
        methods:{
          setA:function(){

          }
        }
    }
</script>

<style scoped>

</style>
