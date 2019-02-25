<template>
  <check-center paneltitle="用户选择">
    <div id="check" class="sheet" >
      <el-table
        :data="tableData"
        max-height="500"
        style="width: 100%">
        <el-table-column
          prop="time"
          label="提交时间"
          sortable>
        </el-table-column>
        <el-table-column
          prop="name"
          label="用户名称">
        </el-table-column>
        <el-table-column
          prop="state"
          label="当前状态">
          <template slot-scope="scope">
            <el-tag :type="scope.row.state | statusFilter">{{scope.row.state | formatStata}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="action"
          label="操作">
          <template slot-scope="scope">
              <i class="el-icon-view"></i>
              <el-button  type="text" @click="check(scope.row)">审核
              </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </check-center>
</template>

<script>
  import CheckCenter from '../components/CheckCenter'
  export default {
    name: "EnterVerify",
    components:{CheckCenter},
    mounted() {
      // this.getUsers()
      let data = []
      const self = this
      this.$axios.get('/adminUser/userlist')
        .then(res=>{
          self.tableData.push({
            time: res.data[0].time,
            name: res.data[0].username,
            state: self.getStatus(res.data[0].checkState),
            action: ''
          })
          console.log(res)

        }).catch(e=>{
        console.log(e)
      })
    },
    filters: {
      // el-tag类型转换
      statusFilter(status) {
        const statusMap = {
          1: '',
          2: 'warning',
          3: 'success',
          4: 'danger'
        }
        return statusMap[status]
      },
      filterTag(value, row) {
        return row.state === value;
      },
      // 状态显示转换
      formatStata(status) {
        const statusMap = {
          1: '待审核',
          2: '初审未通过',
          3: '通过',
          4: '未通过'
        }
        return statusMap[status]
      }
    },
    data(){
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        },
        date1: '',
        date2: '',
        date3: '',
        usage_radio: 3,
        textarea1: '',
        formInline: {
          user: '',
          region: ''
        },

        tableData: [
        //   {
        //   time:'2018-08-06',
        //   name: '马俊豪',
        //   state: 1,
        //   action:''
        // }, {
        //   time:'2018-08-13',
        //   name: '彦志',
        //   state: 1,
        //   action:''
        // }, {
        //   time:'2018-08-24',
        //   name: '付闫博',
        //   state: 1,
        //   action:''
        // },{
        //   time:'2018-09-08',
        //   name: '刘美璇',
        //   state: 2,
        //   action:''
        // }
        ]
      };
    },
    methods: {
      getUsers() {
        let data = []
        const self = this
        this.$axios.get('/adminUser/userlist')
          .then(res=>{
            data.push({
              time: res.data.time,
              name: res.data.username,
              state: self.getStatus(res.data.checkState),
              action: ''
            })
            console.log(res)
            self.tableData = data

          }).catch(e=>{
            console.log(e)
        })
      },
      getStatus(s){
        switch (s) {
          case 'UPDATE': return 2;
          case 'REJECT': return 4;
          case 'ONGOING': return 1;
          case 'PASS': return 3;
        }
      },
      check(row) {
        console.log(row)
        this.$router.push({name:'userverify',params:{username: row.name}})
      }


    }
  }
</script>

<style scoped>
  .sheet{
    margin-top: 5%;
    margin-left:8%;
    margin-right:8%;
  }
</style>

<style>
  #leftA { color: dodgerblue !important}
</style>
