<template>
  <div>
    <div class="table-responsive" style="text-indent: 5px">
      <table class="table table-bordered repaytable">
        <tbody>
        <tr>
          <th id="titleProject" width="180px" rowspan="6">{{paylist.paytitle}}</th>
          <th width="200px">项目时间</th>
          <th width="180px">代还期数</th>
          <th width="180px">代还本息</th>
        </tr>
        <tr>
          <td>{{paylist.projectTime}}</td>
          <td>{{paylist.times}}</td>
          <td>{{paylist.interestPlus}}</td>
        </tr>
        <tr>
          <th>近3期</th>
          <th>还款时间</th>
          <th>还款金额</th>
        </tr>
        <tr>
          <td>{{paylist.timesA}}</td>
          <td>{{paylist.timeA}}</td>
          <td>{{paylist.amountA}}</td>
        </tr>
        <tr>
          <td>{{paylist.timesB}}</td>
          <td>{{paylist.timeB}}</td>
          <td>{{paylist.amountB}}</td>
        </tr>
        <tr>
          <td>{{paylist.timesC}}</td>
          <td>{{paylist.timeC}}</td>
          <td>{{paylist.amountC}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'nextpay',
    data () {
      return{

      }
    },
    // props:['paytitle','projectTime','times','interestPlus'
    //   , 'timesA','timeA','amountA'
    //   , 'timesB','timeB','amountB'
    //   , 'timesC','timeC','amountC']

    props:['paylist']
  }
</script>

<style>
  .repaytable tr,th{
    text-align: center;
    font-size: 18px;
  }

  #titleProject{
    text-align: center;
    vertical-align: middle;
    font-size: 22px;
  }

</style>
