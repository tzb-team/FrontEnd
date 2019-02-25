<template>
  <div class="UserList">
    <div>
      <adminNavi></adminNavi>
    </div>
    <div style="width: 100%;text-align: center;">
    <el-form :inline="true">
      <el-form-item label="用户名称" style="padding:40px 40px 10px 40px;">
        <el-input placeholder="请输入查询内容" style="width: 150px;" clearable v-model="searchOption.name"></el-input>
      </el-form-item>
      <el-form-item label="电话" style="padding:40px 40px 10px 40px;">
        <el-input placeholder="请输入查询内容"  clearable v-model="searchOption.tel"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" style="padding:40px 40px 10px 40px;">
        <el-input placeholder="请输入查询内容" clearable v-model="searchOption.email"></el-input>
      </el-form-item>
    </el-form>
    <el-table :data="users"
              height="500"
              border
              @cell-click="checkDetail"
              style="width: 920px;margin: auto;text-align: left;">
      <el-table-column
        prop="username"
        label="用户名称"
        align="center"
        width="100">
      </el-table-column>
      <el-table-column
        prop="level"
        label="信用评级"
        align="center"
        :filters="[{text: 'AA', value: 'AA'}, {text: 'A', value: 'A'}, {text: 'B', value: 'B'}, {text: 'C', value: 'C'}, {text: 'D', value: 'D'}]"
        :filter-method="filterHandler"
        width="100">
      </el-table-column>
      <el-table-column
        prop="tel"
        label="电话"
        align="center"
        width="130">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        align="center"
        width="170">
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态"
        align="center"
        :filters="[{text: '无借款', value: '无借款'}, {text: '待还款', value: '待还款'}, {text: '逾期', value: '逾期'}, ]"
        :filter-method="filterHandler"
        width="100">
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        width="300">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" plain @click="seeDetail">查看投资/借款/个人财务</el-button>
          </template>
      </el-table-column>
    </el-table>
    </div>

    <div>

    </div>


    <div style="padding-top: 50px;">
      <footerBar></footerBar>
    </div>
  </div>



</template>

<script>
  import footerBar from '@/components/footerBar.vue';
  import adminNavi from '@/components/adminNavi.vue';
  /*var mockUsers = [
    {username: '王刚',state:'待还款',
    level: 'B',
    tel: '13258449922',
    email: '134456745@qq.com',},
    {username: '李艺璇',state:'待还款',
      level: 'A',
      tel: '14423945566',
      email: 'lyxnju@163.com',},
    {username: '张一帆',state:'待还款',
      level: 'C',
      tel: '18628993345',
      email: 'zyf12345@126.com',},
    {username: '刘浩',state:'待还款',
      level: 'B',
      tel: '13293334853',
      email: 'liuhao@126.com',},
    {username: '吴欣怡',state:'待还款',
      level: 'B',
      tel: '18312348534',
      email: 'xinyiwu12@163.com',},
    {username: '陈文博',state:'无借款',
      level: 'AA',
      tel: '13329483758',
      email: 'studywb@126.com',},
    {username: '付贺然',state:'无借款',
      level: 'C',
      tel: '18756763899',
      email: '865428373@qq.com',},
    {username: '罗子俊',state:'无借款',
      level: 'A',
      tel: '18188829384',
      email: 'lzjhappy1@163.com',},
    {username: '王桐',state:'逾期',
      level: 'D',
      tel: '13211238753',
      email: 'wangtong22@126.com',}];*/
/*  var STORAGE_KEY = 'users';
  var userStorage = {
    fetch: function () {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || mockUsers
    },
    save: function (data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    }
  };*/

  export default {
    name: "usermanage",
    components:{adminNavi,footerBar},
    data () {
      return {
        initial_data: true,
        saveUsers:[],
        users: [
          /*{username: '王刚',state:'待还款',
            level: 'B',
            tel: '13258449922',
            email: '134456745@qq.com',},
          {username: '李艺璇',state:'待还款',
            level: 'A',
            tel: '14423945566',
            email: 'lyxnju@163.com',},
          {username: '张一帆',state:'待还款',
            level: 'C',
            tel: '18628993345',
            email: 'zyf12345@126.com',},
          {username: '刘浩',state:'待还款',
            level: 'B',
            tel: '13293334853',
            email: 'liuhao@126.com',},
          {username: '吴欣怡',state:'待还款',
            level: 'B',
            tel: '18312348534',
            email: 'xinyiwu12@163.com',},
          {username: '陈文博',state:'无借款',
            level: 'AA',
            tel: '13329483758',
            email: 'studywb@126.com',},
          {username: '付贺然',state:'无借款',
            level: 'C',
            tel: '18756763899',
            email: '865428373@qq.com',},
          {username: '罗子俊',state:'无借款',
            level: 'A',
            tel: '18188829384',
            email: 'lzjhappy1@163.com',},
          {username: '王桐',state:'逾期',
            level: 'D',
            tel: '13211238753',
            email: 'wangtong22@126.com',}*/], // users 数据
        /*selectedUsers: [], // 保存选中的 users 数组
        selectedUser: {}, // 选中 user*/
        /*input_username: '', // 过滤 username 的关键字
        input_level: '',// 过滤 level 的关键字
        input_tel: '',// 过滤 tel 的关键字
        input_email: '',// 过滤 email 的关键字
        name: '', // 上一次过滤的 name 关键字，初始化为''
        state: '', // 过滤 state 的关键字
        limit: 9, // 每页显示行数
        totalPage: 0, // 总页数
        currentPage: 0, // 当前页
        jPage: 1, // 跳转到某页*/
        options: [
          {value: 4, label: 'AA'},
          {value: 3, label: 'A'},
          {value: 2, label: 'B'},
          {value: 1, label: 'C'},
          {value: 0, label: 'D'},
        ],
        userOptions: [
          {value: 0, label: '无借款'},
          {value: 1, label: '待收款'},
          {value: 2, label: '逾期'}
        ],
        searchOption: {
          name: '',
          tel:'',
          email:'',
        },
        passData:[
          {
            username:'',
            level:'',
            tel:'',
            email:'',
            state:'',
          }
        ],
        listLength:0,

      }
    },
    // watch
    /*watch: {
      users: {
        handler () {
          userStorage.save(this.users)
        },
        deep: true
      },
    },*/
    // computed properties
    beforeCreate:function(){
      localStorage.route='#usermanage'
    },
    mounted:function(){
      this.getData();
    },
    watch:{
      searchOption:{
        deep:true,
        handler: function (val,oldVal) {
          this.users = this.searchNewList(val.name,val.tel,val.email)
        }
      }
    },
    methods: {
      searchNewList(name,tel,email){
        let checkedUser = [];
        for(var i=0;i<this.saveUsers.length;i++){
          //console.log(this.saveUsers[i]);
          if((this.saveUsers[i].username===null||this.saveUsers[i].username.indexOf(name)>=0) &&(this.saveUsers[i].tel===null||this.saveUsers[i].tel.indexOf(tel)>=0)  && (this.saveUsers[i].email===null||this.saveUsers[i].email.indexOf(email)>=0)){
            checkedUser.push(this.saveUsers[i]);
          }
        }
        //console.log(checkedUser)
        return checkedUser;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      seeDetail(){
        console.log(this.passData)
        this.$router.push({name:'userdetail',params:this.passData})
       /* window.location.href='/userdetail';*/
      },
      checkDetail(row, column, cell, event){
        //console.log(row,column,cell,event)
        this.passData.username = row.username;
        this.passData.level = row.level;
        this.passData.tel = row.tel;
        this.passData.state = row.state;
        this.passData.email = row.email;
      },
 /*     getListLength:function(){
        var _this = this;
        this.$axios.get('/adminUser/manageLen',{
          params:{
            keyword: "",
            type:"",
          }
        }).then(function (response) {
          var data = response.data
          var pageNum=0;
          for(var i = 0; i < Number(data); i++){
            _this.getData(pageNum)
            pageNum = pageNum + 1
          }
          //console.log("end: "+pageNum)
        }).catch(function (error) {
          console.log("error:"+error)
        });

      },*/
      getData:function(pageNum){
        var _this = this;
        this.$axios.get('/adminUser/manage', {
          params: {
            keyword: "",
            type:"",
          }
        }).then(function (response) {
          //console.log(response)
          var data = response.data
          for(var i=0;i<data.length;i++){
            //console.log(data[i]);
            _this.users.push({username:data[i].username, level:data[i].level, tel:data[i].tel, email:data[i].email, state:data[i].state})
            _this.saveUsers.push({username:data[i].username, level:data[i].level, tel:data[i].tel, email:data[i].email, state:data[i].state})
          }
          }).catch(function (error) {
            console.log("error:"+error)
          });
      },

/*
      queryFilter(prop, key, arr) {
        // none query string, return arr
        if (!key) {
          return arr
        }
        // filtering
        arr = arr.filter((user) => {
          if (user[prop].toString().indexOf(key) !== -1) {
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

      /!*doAudit(newAudit, user) {
        // user 可指定，为 0 时指选中用户，为 -1 时指全部用户
        let users = []
        if (user === 0) {
          users = this.selectedUsers
        } else if (user === -1) {
          this.filteredUsers.forEach((v) => {
            users.push(v)
          })
        } else {
          users.push(user)
        }
        this.setAuditId(users, newAudit)
      },
      setAuditId(users, aId) {
        users.forEach((user) => {
          user.audit = aId
        })
      },*!/
      showModel(e) {
        let target = e.target
        if (target.nodeName.toLowerCase() === 'td') {
          $('.ui.modal').modal('show')
        }
        let index = $(target.parentNode).index()
        this.selectedUser = this.filteredUsers[index]
      }
      */
    }
  }
</script>


<style scoped>


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

