<template>
  <check-center paneltitle="非结构化信息">
    <div id="check" class="sheet">
      <template>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="item"
            label="条目类别">
          </el-table-column>
          <el-table-column
            prop="description"
            label="条目信息">
          </el-table-column>
          <el-table-column
            label="条目证明">
            <template slot-scope="scope">
                <el-popover v-for="i in scope.row.pics"
                  placement="bottom-end"
                  title="图片详情"
                  trigger="hover">
                  <img v-bind:src=i  alt="pics"  />
                  <el-button slot="reference" style="margin:-6%;">
                    <img v-bind:src=i alt="pics"  class="pic"/>
                  </el-button>
                </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <div v-if="scope.row.state !== 'approve'">
                <el-button
                  size="mini"
                  type="text"
                  @click="qualified(scope.row)">合格</el-button>
                <el-button
                  size="mini"
                  type="text"
                  @click="unqualified(scope.row)">不合格</el-button>
              </div>
              <div v-else>
                已通过
              </div>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <br/>
      <br/>
      <br/>
      <div style="margin-left:80%;">
        <el-button size="mini"
                   type="primary"
                   @click="clear"
        >审核其他用户
        </el-button>
      </div>
      <br/>
    </div>
  </check-center>
</template>

<script>
  import CheckCenter from '../components/CheckCenter'


  export default {
    name: "userverify",
    components:{CheckCenter},
    data: {
      tableData: []
    },
    mounted() {
      const self = this
      this.$axios.get('/adminUser/userpendingitem', {
        params:{
          username: self.$route.params.username
        }
      }).then(res=>{
        for(let d in res.data.toApprove){
          self.tableData.push({
            id: d.id,
            item: d.item,
            description: d.description,
            state: '',
            pics: d.evidences
          })
        }
        for(let d in res.data.haveApproved){
          self.tableData.push({
            id: d.id,
            item: d.item,
            description: d.description,
            state: 'approve',
            pics: d.evidences
          })
        }
        console.log(res)
      }).catch(e=>{
        console.log(e)
      })
    },
    methods: {
      clear() {
        this.$router.push({name:'EnterVerify'})
      },
      qualified(row) {
        this.$axios.get('/adminUser/usercheck', {
          params:{
            username: self.$route.params.username,
            id: row.id,
            result: 'PASS'
          }
        }).then(res=>{
          console.log(res)
        }).catch(e=>{
          console.log(e)
        })
      },
      unqualified(row) {
        this.$axios.get('/adminUser/usercheck', {
          params:{
            username: self.$route.params.username,
            id: row.id,
            result: 'LACKINFO'
          }
        }).then(res=>{
          console.log(res)
        }).catch(e=>{
          console.log(e)
        })
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
  .pic{
    max-width:200px;
  }
</style>
<style>
  #leftA { color: dodgerblue !important}
  .popover{
    background-color: red;
  }
</style>
