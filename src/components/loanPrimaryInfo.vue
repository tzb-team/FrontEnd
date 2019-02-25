<template>
    <div>
      <el-form v-model="form1" label-width="100px" class="primary_info " >
        <div class="title">基本信息</div>

        <el-form-item label="项目名称">
          <div>
            <el-input placeholder="请填写项目名称" v-model="form1.name"></el-input>
            <div style="color:red;font-size: 12px;heigth:14px">*项目名称不超过20字 例：2018年9月16号Jessie J演唱会</div>
          </div>

        </el-form-item>

        <el-form-item label="开始日期">
          <div>
            <el-date-picker type="date" placeholder="选择开始日期" v-model="form1.date1" style="width: 100%;"></el-date-picker>
            <div style="color:red;font-size: 12px;heigth:14px">*标的审核通过后的发布时间</div>
          </div>

        </el-form-item>
        <el-form-item label="截止日期">
          <div>
            <el-date-picker type="date" placeholder="选择截止日期" v-model="form1.date2" style="width: 100%;"></el-date-picker>
            <div style="color:red;font-size: 12px;heigth:14px">*标的发布后筹资结束时间</div>
          </div>

        </el-form-item>

        <el-form-item label="最低达标率">
          <div>
            <el-input placeholder="请填写项目最低达标率" v-model="form1.least_rate"></el-input>
            <div style="color:red;font-size: 12px;heigth:14px">*截止日期时，标的已筹金额占目标金额的最低比率</div>
          </div>

        </el-form-item>

        <div class="title">资金去向</div>
        <el-form-item label="资金用途分类">
          <!--<el-select v-model="form2.region" placeholder="资金用途分类">
            <el-option label="日常生活周转" value="daily"></el-option>
            <el-option label="演唱会看比赛看剧音乐会等" value="entertain"></el-option>
            <el-option label="游戏娱乐电影音乐" value="game"></el-option>
            <el-option label="旅游" value="travel"></el-option>
            <el-option label="购买电子产品" value="shop"></el-option>
            <el-option label="其他购买项如化妆品衣服鞋等等" value="others"></el-option>
          </el-select>-->
          <el-cascader
            expand-trigger="hover"
            :options="options"
            v-model="selectedOptions2"
            @change="handleChange">
          </el-cascader>

        </el-form-item>

        <el-form-item label="资金用途详述">
          <div>
            <el-input
              type="textarea"
              :rows="4"
              placeholder="请输入内容"
              v-model="form2.textarea1">
            </el-input>
            <div style="color:red;font-size: 12px;heigth:14px">*不超过100字</div>
            <div>
              <el-button type="primary" size="small" style="margin-top: -10px">上传凭证<i class="el-icon-upload el-icon--right"></i></el-button>
            </div>
          </div>
        </el-form-item>

      </el-form>
    </div>
</template>

<script>
    export default {
        name: "loan-primary-info",
        data(){
          return{
            form1:{
              name: '',
              date1: '',
              date2: '',
              least_rate:''
            },
            options: [{
              value: 'shop',
              label: '购物',
              children: [{
                value: 'clothing',
                label: '鞋帽服饰',
              },{
                value: 'life',
                label: '生活用品'
              }, {
                value: 'make_up',
                label: '护肤美妆'
              }, {
                value: 'game',
                label: '游戏动漫',
              }, {
                value: 'electronics',
                label: '电子产品',
              }]
            }, {
              value: 'study',
              label: '学习',
              children: [{
                value: 'basic',
                label: '学习用品',
              }, {
                value: 'book',
                label: '书籍报刊',
              }, {
                value: 'data',
                label: '培训考证',
              }, {
                value: 'notice',
                label: '校际交换',
              }]
            }, {
              value: 'entertain',
              label: '娱乐',
              children: [{
                value: 'party',
                label: '聚餐轰趴'
              }, {
                value: 'sports',
                label: '运动健身'
              }, {
                value: 'show',
                label: '观看演出'
              }, {
                value: 'travel',
                label: '外出旅游'
              }]
            },{
              value:'medical',
              label:'医疗',
              children:[{
                value:'treatment',
                label:'诊断治疗'
              }, {
                value:'healthy',
                label:'保健养生'
              }]
            }],
            selectedOptions2: [],
          }
        }
    }
</script>

<style scoped>

  .primary_info{
    width:750px;
    margin-top: 50px;
    border:2px #d6d6d6 solid;
    border-radius:20px;
    padding:10px 50px 20px 40px;
    position: relative;
  }

  .title{
    font-size: 23px;
    color: #6a6a6a;
    padding-bottom: 20px;
  }

</style>
