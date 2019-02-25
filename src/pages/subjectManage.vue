<template>
  <div class="UserList">
    <adminNavi></adminNavi>

    <div style="position: relative;padding: 60px 0px;height:600px;">
      <el-table :data="mockSubjects"
                height="500"
                border
                style="width: 920px;margin: auto;text-align: left;">
        <el-table-column
          prop="id"
          label="编号"
          align="center"
          width="150">
        </el-table-column>
        <el-table-column
          prop="loanUser"
          label="借款人"
          align="center"
          width="150">
        </el-table-column>
        <el-table-column
          prop="investUser"
          label="投资人"
          align="center"
          width="150">
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态"
          align="center"
          :filters="[{text: '待审核', value: '待审核'}, {text: '待投标', value: '待投标'}, {text: '运行中', value: '运行中'}, {text: '已结束', value: '已结束'}]"
          :filter-method="filterHandler"
          width="150">
        </el-table-column>
        <el-table-column
          prop="type"
          label="标的分类"
          align="center"
          :filters="[{text: '小额拆借类', value: '小额拆借类'}, {text: '学习培训类', value: '学习培训类'}]"
          :filter-method="filterHandler"
          width="150">
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width="150">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" plain @click="seeDetail(scope.row.id)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--<div class="mytable">
      <div class="base-info" style="padding:50px 0px 0px 30px;font-size:15px;margin-left:20%;">
        <label>标的状态：</label>
        <select name="state" type="hidden" v-model.lazy="state" style="color:black;">
          <option value="">所有</option>
          <option value="待审核">待审核</option>
          <option value="待投标">待投标</option>
          <option value="运行中">运行中</option>
          <option value="已结束">已结束</option>
        </select>
        <label style="margin-left:25%;">标的分类：</label>
        <select name="state" type="hidden" v-model.lazy="state" style="color:black;">
          <option value="" >小额拆借类</option>
          <option value="学习培训类">学习培训类</option>
        </select>
      </div>
      <br/><br/><br/><br/><br/><br/><br/>
      <div class="tableBackground">
        <table class="usertable">
          <tbody class="usertablebody">
          <tr>
            <th style="border: 1px solid black;text-align:center;">编号</th>
            <th style="border: 1px solid black;text-align:center;">借款用户</th>
            <th style="border: 1px solid black;text-align:center;">投资用户</th>
            <th style="border: 1px solid black;text-align:center;">查看详情</th>
          </tr>
          <tr v-for="subject in filteredSubjects" @click="showModel" >
            <td style="border: 1px solid black ;text-align:center;">{{ subject.id }}</td>
            <td style="border: 1px solid black ;text-align:center;">{{ subject.loanUser }}</td>
            <td style="border: 1px solid black ;text-align:center;">{{ subject.investUser }}</td>
            <td style="border: 1px solid black ;text-align:center;">
              <router-link to="/subjectManageDetail">
                <button class="checkDetailButton">查看详情</button>
              </router-link>
            </td>
          </tr>
          </tbody>
          <tfoot class="full-width">
          <tr>
            <th></th>
            <th colspan="4" style="text-align:center;">
              <button class="pageButton" @click="turnPage(-1)">Prev</button>
              <span>共 {{ totalPage }} 页，当前第 {{ currentPage+1 }} 页</span>
              <button class="pageButton" @click="turnPage(1)">Next</button>
              <span>跳转到第</span>
              <input type="text" v-model="jPage" @keyup.enter="jumpToPage" style="width:50px;height:25px;color:black;">
              <span>页</span>
            </th>
          </tr>
          </tfoot>
        </table>
      </div>
    </div>-->
    <div style="padding-top: 30px;">
      <footerBar></footerBar>
    </div>


  </div>



</template>

<script>
  import footerBar from '@/components/footerBar.vue';
  import adminNavi from '@/components/adminNavi.vue';

  export default {
    name: "subjectManage",
    components:{adminNavi,footerBar},
    data () {
      return {
        mockSubjects : [
          {id:'0001',
            loanUser:'王刚',
            investUser:'李明',
            state:'待审核',
            type:'学习培训类'
          },
          {id:'0002',
            loanUser:'田明',
            investUser:'张三',
            state:'待审核',
            type:'学习培训类'
          },
          {id:'0003',
            loanUser:'杨清',
            investUser:'马源',
            state:'运行中',
            type:'小额拆借类',
          },
          {id:'0004',
            loanUser:'欣欣',
            investUser:'小红',
            state:'待审核',
            type:'小额拆借类'
          },
          {id:'0005',
            loanUser:'小兰',
            investUser:'茵茵',
            state:'待投标',
            type:'学习培训类'
          },
          {id:'0006',
            loanUser:'华华',
            investUser:'天天',
            state:'已结束',
            type:'小额拆借类'
          },
          {id:'0007',
            loanUser:'黄浩',
            investUser:'连号',
            state:'待审核',
            type:'学习培训类'
          },
          {id:'0008',
            loanUser:'郭小童',
            investUser:'关云',
            state:'待投标',
            type:'学习培训类'
          },
          {id:'0009',
            loanUser:'李顶',
            investUser:'青樱',
            state:'待审核',
            type:'学习培训类'
          },
          {id:'0010',
            loanUser:'Jack',
            investUser:'Rose',
            state:'待审核',
            type:'小额拆借类'
          },
        ],
        // STORAGE_KEY : 'subjects',
        // subjectStorage : {
        //   fetch: function () {
        //     return JSON.parse(localStorage.getItem(STORAGE_KEY)) || mockSubjects
        //   },
        //   save: function (data) {
        //     localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
        //   }
        // },
        // subjects: subjectStorage.fetch(), // subjects 数据
        /*selectedSubjects: [], // 保存选中的 users 数组
        selectedSubject: {}, // 选中 user
        limit: 9, // 每页显示行数
        totalPage: 0, // 总页数
        currentPage: 0, // 当前页
        jPage: 1, // 跳转到某页*/
      }
    },
    watch: {
      subjects: {
        handler () {
          subjectStorage.save(this.subjects)
        },
        deep: true
      }
    },
    computed: {
      filteredSubjects () {
        let fSubjects = this.queryFilter('id', this.id, this.subjects)
        fSubjects = this.queryFilter('loanUser', this.loanUser, fSubjects)
        fSubjects = this.queryFilter('investUser',this.investUser,fSubjects)
        return this.paginate(fSubjects)
      }
    },
    mounted: function() {
      this.getInvestManager();
    },
    methods: {
      getInvestManager(){
        console.log("标的管理");
        let self = this;
        this.$axios.get('adminTarget/briefInfo',{
          params:{

          }
        })
          .then(function (response) {
            console.log(response);
            console.log("标的管理success");
            console.log(response.data);
            let res = response.data;
            console.log("mockSubjects "+self.mockSubjects);
            self.mockSubjects[0].id = "6666";

            let returnValue = [];


            for(let i of res){
              let investor ="";
              for(let j of i.investors){
                investor += (j+",");
              }
              returnValue.push(
                {
                  id:"0001",
                  loanUser:i.borrower,
                  investUser:investor,
                  state:'待审核',
                  type:'学习培训类'
                });
            }
            for(let i of returnValue){
              console.log(i);
            }

            self.mockSubjects = returnValue;

          })
          .catch(function (response) {
            console.log(response);
            console.log("标的管理error");
            // alert("error")
          });
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      seeDetail(id){
        //window.location.href='/subjectManageDetail';
        this.$router.push({name:'subjectManageDetail',params:{userID:id}})
        console.log("查看"+id+"的详情");
      },
      /*addSubject() {
        this.subjects.push(this.subject)
      },
      queryFilter(prop, key, arr) {
        // none query string, return arr
        if (!key) {
          return arr
        }
        // filtering
        arr = arr.filter((user) => {
          if (subject[prop].toString().indexOf(key) !== -1) {
            return true
          }
        })
        // if it's a new filter query, research and turn to page one
        if (key !== this[prop]) {
          this.currentPage = 0
          // save last filter query
          this[prop] = key
        }
        return arr
      },

      paginate(arr) {
        // totalPage
        this.totalPage = Math.ceil(arr.length / this.limit)
        let page = this.currentPage
        let curLimit = this.limit
        // 返回指定条数的数组
        arr = arr.slice(curLimit * page, curLimit * (page + 1))
        return arr
      },
      turnPage(num) {
        if (num === 1) {
          if (this.currentPage === this.totalPage - 1) {
            return
          } else {
            this.currentPage++
          }
        } else {
          if (this.currentPage === 0) {
            return
          } else {
            this.currentPage--
          }
        }
      },
      jumpToPage() {
        let jPage = this.jPage - 1
        if (jPage < 0 || jPage > this.totalPage) {
          alert('page out of range')
        } else {
          this.currentPage = jPage
        }
      },
      showModel(e) {
        let target = e.target
        if (target.nodeName.toLowerCase() === 'td') {
          $('.ui.modal').modal('show')
        }
        let index = $(target.parentNode).index()
        this.selectedSubject = this.filteredSubject[index]
      }*/
    }
  }
</script>


<style scoped>
  .mytable{
    min-width: 400px;
    min-height: 500px;
    padding: 0px 0px;
    line-height: 3px;
    background-color:transparent;
    color: black;
    border: none;
    font-size: 16px;
    font-family: "Microsoft YaHei UI";
    top: 53px;
    width:100%;
    left: 0%;
    position: absolute;
    letter-spacing: 2px;
  }
  .tableBackground{
    background-color:transparent;
    min-height: 480px;
    padding:20px;
  }
  .usertable{
    min-width: 400px;
    padding: 240px 0px;
    line-height: 40px;
    color: black;
    border-collapse: collapse;
    border: none;
    font-size: 16px;
    font-family: "Microsoft YaHei UI";
    width:80%;
    left: 10%;
    height: 70%;
    position: absolute;
    letter-spacing: 2px;
  }
  .sureButton,.checkDetailButton,.pageButton{
    border-radius: 30px;
    min-width: 80px;
    min-height: 28px;
    padding: 0px 0px;
    line-height: 18px;
    background-color:rgba(173,210,250,0.8);
    color: black;
    border: none;
    font-size: 14px;
    font-family: "Microsoft YaHei UI";
    top: 550px;
    width: 10%;
    left: 43%;
    letter-spacing: 2px;
  }


  .status-picker select {
    border-radius: 5px;
    width: 200px;
    float: left;
    height: 37px;
    margin-bottom: -13px;
    border: 1px solid rgba(34, 36, 38, .15);
    padding: 0 10px;
  }
</style>

