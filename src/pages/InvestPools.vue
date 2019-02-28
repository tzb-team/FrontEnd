// Author:SDJ
// Date:2/26

<template>
  <personalCenter paneltitle="校园验证">
    <div>
      <el-button @click="resetDateFilter">清除日期过滤器</el-button>
      <el-button @click="clearFilter">清除所有过滤器</el-button>

      <el-table ref="filterTable" :data="tableData" style="width: 100%">
        <el-table-column
          prop="enterDate"
          label="加入日期"
          sortable
          width="180"
          column-key="date"
          :filters="[{text: '2019-02-01', value: '2018-02-01'}, {text: '2018-05-02', value: '2018-05-02'}, {text: '2017-05-03', value: '2017-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
          :filter-method="filterHandler"
        >
        <!-- clounm -->
        </el-table-column>


        <el-table-column
          prop="poolID"
          label="专利池号"
          width="180">
        </el-table-column>
    
        <el-table-column
          prop="agent"
          label="代理公司"
          :formatter="formatter">
        </el-table-column>
    
        <el-table-column
          prop="tag"
          label="专利池种类"
          width="150"
          :filters="[{ text: '医药', value: '医药' }, { text: '电子', value: '电子' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end">
            <template slot-scope="scope">
              <el-tag
              :type="scope.row.tag === '医药' ? 'primary' : 'success'"
              disable-transitions>{{scope.row.tag}}</el-tag>
            </template>
        </el-table-column>

        <el-table-column
          fixed="right"
          width="120"
          label="查看详情">
            <template slot-scope="scope"><el-button @click="showDetails(scope.row)">查看详情</el-button></template>

        </el-table-column>

      </el-table>
    </div>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";
  export default {
    name:"investpools",
    components: {personalCenter},
    data(){
      return{
        connetDetails: {
          id: 0,
          isTrue: true
        },
        tableData: [{
          enterDate: '2016-05-02',
          poolID: '001',
          agent: '上海市XX公司',
          tag: '电子',
          details: '/userSpace'
        },
        {
          enterDate: '2019-05-02',
          poolID: '002',
          agent: '北京市XX公司',
          tag: '医药'
        }]
      }
    },
    mounted:function(){
      this.getState();
    },
    methods:{
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, column) {
        return row.agent;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      showDetails(row){
        this.connetDetails.id = row.poolID;
        this.connetDetails.isTrue = true;
        this.$router.push({name: 'poolDetails', params:{id:this.connetDetails.poolID, isShow:this.connetDetails.isShow} })
      },
      getState: function(){
        let self = this;
        this.$axios.get('/verify/getInvestPools',{
          params:{

          }
        }).then(function (response) {
          var data = response.data
          this.tableData = data
          //console.log(response)
          // var data = response.data
          // if(data[0]==="初级"){
          //   if(data[1]==="校友"){
          //     self.test=0;
          //   }else if(data[1]==="学生"){
          //     self.test=1;
          //   }
          // }else if(data[0]==="初级审核中"){
          //   self.test=2;
          // }else if(data[0]==="非初级"){
          //   self.test=3;
          // }
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
