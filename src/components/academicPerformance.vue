<template>
  <div id="userinformation" style="padding:30px 0px 0px 0px;">
    <el-row :gutter="2">
      <el-col :span="12">
        <div id="myradar" style="width: 400px;height: 410px"></div>
      </el-col>
      <el-col :span="11">
        <br/>
        <br/>
        <div style="font-size: 24px">
          <p>Trust作为贴心的校园金融助手，将您的在校表现纳入我们的信用评价体系，旨在为您提供全面而精准的服务。</p>
          <p>美好校园生活，Trust伴您成就卓越之旅！</p><br/>
          <!--<img class="img-responsive" src="../../static/pic/perform.png">-->
          <div v-if="aboveAverage">
            <p>从雷达图中可以看出</p>
            <p>您的校园表现评分高于用户平均水平</p>
          </div>
          <div v-if="!aboveAverage">
            <p>从雷达图中可以看出</p>
            <p>您的校园表现评分低于于用户平均水平</p>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="user_credit">
      <div class="table-responsive" style="text-indent: 5px">
        <table class="table table-bordered">
          <!--<caption><b>您的非结构化信息如下</b></caption>-->
          <thead>
          <tr>
            <th colspan="4" style="text-align: center">基本情况</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th width="280px">学校分类</th>
            <td>&nbsp&nbsp&nbsp{{ user.schoolClass }}</td>
            <th>专业情况</th>
            <td>&nbsp&nbsp&nbsp{{ user.majorCondition }}</td>
          </tr>
          <tr>
            <th>受教育情况</th>
            <td>&nbsp&nbsp&nbsp{{ user.educationBackground }}</td>
            <th>经济来源</th>
            <td>&nbsp&nbsp&nbsp{{ user.financeSource }}</td>
          </tr>
          </tbody>
          <thead>
          <tr>
            <th colspan="4" style="text-align: center">学习情况</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th>学习成绩</th>
            <td>&nbsp&nbsp&nbsp{{ user.GPA }}</td>
            <th>挂科数目</th>
            <td>&nbsp&nbsp&nbsp{{ user.numNoPass }}</td>
          </tr>
          <tr>
            <th>奖学金情况</th>
            <td colspan="3">
              <div>
                <div v-if="user.scholarship==null">
                  &nbsp&nbsp&nbsp无奖学金情况
                </div>
                <div v-else>
                  <ol>
                    <li v-for="a in user.scholarship">
                      {{ a.text }}
                    </li>
                  </ol>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>科研竞赛获奖情况</th>
            <td colspan="3">
              <div>
                <div v-if="user.reseachCompetition==null">
                  &nbsp&nbsp&nbsp无获奖情况
                </div>
                <div v-else>
                  <ol>
                    <li v-for="a in user.reseachCompetition">
                      {{ a.text }}
                    </li>
                  </ol>
                </div>
              </div>
            </td>
          </tr>
          </tbody>
          <thead>
          <tr>
            <th colspan="4" style="text-align: center">奖惩情况</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th>奖励情况</th>
            <td colspan="3">
              <div>
                <div v-if="user.awards==null">
                  &nbsp&nbsp&nbsp无奖励情况
                </div>
                <div v-else>
                  <ol>
                    <li v-for="a in user.awards">
                      {{ a.text }}
                    </li>
                  </ol>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>违纪或处罚等不良信息</th>
            <td colspan="3">
              <div>
                <div v-if="user.punishment==null">
                  &nbsp&nbsp&nbsp无不良信息
                </div>
                <div v-else>
                  <ol>
                    <li v-for="a in user.punishment">
                      {{ a.text }}
                    </li>
                  </ol>
                </div>
              </div>
            </td>
          </tr>
          </tbody>
          <thead>
          <tr>
            <th colspan="4" style="text-align: center">信誉状况</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th colspan="1">学费及住宿费缴纳状况</th>
            <td colspan="3">
              <div>
                <div v-if="user.payment==null">
                  &nbsp&nbsp&nbsp全按时缴纳
                </div>
                <div v-else>
                  <ol>
                    <li v-for="a in user.payment">
                      {{ a.text }}
                    </li>
                  </ol>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th colspan="1">图书馆借阅还书情况</th>
            <td colspan="3">
              <div>
                <div v-if="user.library==null">
                  &nbsp&nbsp&nbsp无超时还书记录
                </div>
                <div v-else>
                  <ol>
                    <li v-for="a in user.library">
                      {{ a.text }}
                    </li>
                  </ol>
                </div>
              </div>            </td>
          </tr>
          <tr>
            <th colspan="1">考试作弊的信息</th>
            <td colspan="3">
              <div>
                <div v-if="user.cheating==null">
                  &nbsp&nbsp&nbsp无作弊记录
                </div>
                <div v-else>
                  <ol>
                    <li v-for="a in user.cheating">
                      {{ a.text }}
                    </li>
                  </ol>
                </div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <hr/>
    <div id="interGraph">
      <div id="myGraph" style="height: 600px;width:88%;"></div>
    </div>
    <div>
      组内罚分: {{ group_rating }}
    </div>
  </div>
</template>

<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/radar')
  require('echarts/lib/chart/graph')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')

  //引入主题
  require('echarts/theme/infographic')

  export default {
    name: "academicPerformance",
    props:["username"],
    data(){
      var person;
      var average;
      return{
        group_rating: 0,

        user:{
          schoolClass: '985',
          majorCondition: '综合',
          educationBackground: '硕士',
          financeSource: '家庭供给',
          GPA: '前20%',
          numNoPass: 0,
          scholarship: [
            { text: '2017年人民奖学金一等奖' },
            { text: '南大联创学生领袖奖学金' }
          ],
          reseachCompetition: [
            { text: '2017花旗杯金融创新应用大赛一等奖' },
            { text: '“悦诗风吟”营销大赛三等奖' },
            { text: '银星杯论文比赛二等奖' },
            { text: '贝恩杯中国赛区二等奖' }
          ],
          awards: [
            { text: '江苏省优秀学生干部' },
            { text: '江苏省社会实践先进个人' },
            { text: '2017-2018年度南京大学优秀共青团员' },
            { text: '全国计算机等级考试二级证书' },
            { text: '证券从业资格证' }
          ],
          punishment: null,
          payment: null,
          library: null,
          cheating: null,
          indentNull: '&nbsp&nbsp',
          aboveAverage: true,
        }
      }
    },
    mounted() {
      this.getRadar();
      this.getSchoolTable();
      this.drawRadar();
      this.drawGraph();
    },
    methods: {
      getCreditChange(creditPts) {
        var resCredit= {
          creditChange:0,
          color: '#5db2ff',
        };
        if(creditPts<30) {
          resCredit.creditChange = -3;
          resCredit.color='#fa6862';
        }
        else if(creditPts<60) {
          resCredit.creditChange = -2;
          resCredit.color='#afb8c2';
        }
        else if(creditPts<70) {
          resCredit.creditChange = -1;
          resCredit.color='#7ac2ff';
        }
        else if(creditPts<80) {
          resCredit.creditChange = 0;
          resCredit.color='#244767';
        }
        else if(creditPts<90) {
          resCredit.creditChange = 1;
          resCredit.color='#5db2ff';
        }
        else{
          resCredit.creditChange = 2;
          resCredit.color='#409EFF';
        }
        return resCredit;
      },
      getRadar() {
        console.log("雷达图");
        let self = this;
        this.$axios.get('/profile/campusPerformence',{
          params:{
            username:self.username
          }
        })
          .then((response) => {
            console.log("success");
            console.log(response);
            console.log(response.data.aboveAverage);
            console.log(response.data.averagePerformance);
            console.log(response.data.personalPerformance);
            self.user.aboveAverage = response.data.aboveAverage;
            self.user.average = response.data.averagePerformance;
            self.user.person = response.data.personalPerformance;
            console.log(self.user.person);
            console.log(self.user.average);

            // alert("success");
          })
          .catch((response) => {
            console.log(response);
            console.log("error");
            // alert("error")
          })
      },
      getSchoolTable(){
        console.log("非结构化数据表格");
        let self = this;
        this.$axios.get('/profile/information',{
          params:{
            username:self.username
          }
        })
          .then((response) => {
            console.log("非结构化数据表格success");
            console.log(response);
            var res = response;
            self.user.schoolClass = res.data.schoolClass;
            self.user.majorCondition = res.data.majorCondition;
            self.user.educationBackground = res.data.educationBackground;
            self.user.financeSource = res.data.financeSource;
            self.user.GPA = res.data.GPA;
            self.user.numNoPass = res.data.numNoPass;
            self.user.scholarship = res.data.scholarship;
            self.user.reseachCompetition = res.data.reseachCompetition;
            self.user.awards = res.data.awards;
            self.user.punishment = res.data.punishment;
            self.user.payment = res.data.payment;
            self.user.library = res.data.library;
            self.user.cheating = res.data.cheating;

            //接入数据
            // self.user.schoolClass = '985';
            // self.user.majorCondition = '综合';
            // self.user.educationBackground = '硕士';
            // self.user.financeSource = '家庭供给';
            // self.user.GPA = '前20%';
            // self.user.numNoPass = 0;
            // self.user.scholarship =  [
            //   { text: '2017年人民奖学金一等奖' },
            //   { text: '南大联创学生领袖奖学金' }
            // ];
            // self.user.reseachCompetition = [
            //   { text: '2017花旗杯金融创新应用大赛一等奖' },
            //   { text: '“悦诗风吟”营销大赛三等奖' },
            //   { text: '银星杯论文比赛二等奖' },
            //   { text: '贝恩杯中国赛区二等奖' }
            // ];
            // self.user.awards =  [
            //   { text: '江苏省优秀学生干部' },
            //   { text: '江苏省社会实践先进个人' },
            //   { text: '2017-2018年度南京大学优秀共青团员' },
            //   { text: '全国计算机等级考试二级证书' },
            //   { text: '证券从业资格证' }
            // ];
            // self.user.punishment = null;
            // self.user.payment = null;
            // self.user.library = null;
            // self.user.cheating = null;

            // alert("success");
          })
          .catch((response) => {
            console.log(response);
            console.log("error");
            // alert("error")
          })
      },
      drawRadar() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myradar'), 'infographic')

        // 绘制图表
        myChart.setOption({
          title: {
            text: '校园表现'
          },
          tooltip: {},
          legend: {
            data: ['您的表现', '注册用户平均表现']
          },
          radar: {
            // shape: 'circle',
            name: {
              textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
              }
            },
            indicator: [
              {name: '学校', max: 100},
              {name: '学历', max: 100},
              {name: '社交情况', max: 100},
              {name: '获奖情况', max: 100},
              {name: '成绩', max: 100}
            ]
          },
          series: [{
            name: '您的表现 VS 平均表现',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
              {
                value: [80, 76, 65, 89, 77, 66],
                name: '您的表现'
              },
              {
                value: [60, 70, 45, 80, 85, 27],
                name: '注册用户平均表现'
              }
            ]
          }]
        });

        console.log("校园表现");
        var value1 = [80, 76, 65, 89, 77, 66];
        var value2 = [60, 70, 45, 80, 85, 27];
        let self = this;
        this.$axios.get('/profile/campusPerformence',{
          params:{
            username:self.username
          }
        })
          .then((response) => {
            console.log("success");
            console.log(response);
            // console.log(response.data.aboveAverage);
            console.log(response.data.averagePerformance);
            console.log(response.data.personalPerformance);
            self.user.aboveAverage = response.data.aboveAverage;
            self.user.aboveAverage = true;
            value1 = response.data.personalPerformance;
            value2 = response.data.averagePerformance;

            // var value1 = [80, 76, 65, 89, 77, 66];
            // var value2 = [60, 70, 45, 80, 85, 27];

            myChart.setOption({
              series: [{
                data: [
                  {
                    value: value1,
                    name: '您的表现'
                  },
                  {
                    value: value2,
                    name: '注册用户平均表现'
                  }
                ]
              }]
            });
          })
          .catch((response) => {
            console.log(response);
            console.log("error");
            // alert("error")
          })
      },
      drawGraph() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myGraph'), 'infographic')
        // 绘制图表
        myChart.setOption({
          title: {text: '您的校园关系图如下'},
          tooltip: {
            formatter: function (x) {
              if (typeof(x.data.creditPts) == "undefined") {
                return x.data.relation;
              }
              else {
                var br = '<br/>';
                var a = '信用分数 ' + x.data.creditPts + br;
                var b = ' 财务分数 ' + x.data.financialPts + br;
                var c = ' 校园表现 ' + x.data.schoolPts + br;
                var d = ' 信用变化 ';
                if(x.data.creditChange == -3) {
                  d += '最近信用状况急剧恶化';
                }
                else if(x.data.creditChange == -2) {
                  d += '最近信用状况越来越不好';
                }
                else if(x.data.creditChange == -1) {
                  d += '最近信用状况有点下降的倾向';
                }
                else if(x.data.creditChange == 0) {
                  d += '最近信用状况处于平稳状况';
                }
                else if(x.data.creditChange == 1) {
                  d += '最近信用状况有提高趋势';
                }
                else{
                  d += '最近该用户的信用状况非常好';
                }
                return a + b + c + d ;
              }

            }
          },
          series: [
            {
              type: 'graph',
              layout: 'force',
              symbolSize: 60,//一般大小
              roam: false, //是否开启鼠标缩放和平移漫游。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
              focusNodeAdjacency: true,
              // symbol: 'pin',
              edgeSymbol: ['circle', 'none'],
              edgeSymbolSize: [4, 10],
              edgeLabel: {
                normal: {
                  textStyle: {
                    fontSize: 20
                  }
                }
              },
              force: {
                repulsion: 2500,
                edgeLength: [10, 50]
              },
              draggable: true,
              itemStyle: {
                normal: {
                  color: '#409EFF',
                }
              },
              lineStyle: {
                normal: {
                  width: 3,
                  type: 'dotted',
                  // color: '#b04ade'
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0, color: '#409EFF' // 0% 处的颜色
                    }, {
                      offset: 1, color: 'blue' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                  }
                }
              },
              edgeLabel: {
                normal: {
                  show: true,
                  formatter: function (x) {
                    //同学，工作伙伴啥的
                    return x.data.name;
                  }
                }
              },
              label: {
                normal: {
                  show: true,
                  textStyle: {}
                }
              },
              data: [{
                name: '南小紫',
                creditPts: 97,
                financialPts: 85,
                schoolPts: 67,
                symbolSize: 100,
                itemStyle: {
                  normal: {
                    // color : '#409EFF'
                    color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [{
                        offset: 0, color: '#7853de' // 0% 处的颜色
                      }, {
                        offset: 1, color: '#409EFF' // 100% 处的颜色
                      }],
                      globalCoord: false, // 缺省为 false
                    }
                  }
                },
              }, {
                name: '张秀英',
                creditPts: 97,
                financialPts: 85,
                schoolPts: 67,
                creditChange: 1,
                itemStyle: {
                  normal: {
                    color: '#5db2ff',
                  }
                },
              }, {
                name: '王桐',
                creditPts: 97,
                financialPts: 85,
                schoolPts: 67,
                creditChange: 2,
                itemStyle: {
                  normal: {
                    color: '#409EFF',
                  }
                },
              }, {
                name: '罗子俊',
                creditPts: 97,
                financialPts: 85,
                schoolPts: 67,
                creditChange: 1,
                itemStyle: {
                  normal: {
                    color: '#5db2ff',
                  }
                },
              }, {
                name: '付贺然',
                creditPts: 97,
                financialPts: 85,
                schoolPts: 67,
                creditChange: -3,
                itemStyle: {
                  normal: {
                    color: '#fa6862',
                  }
                },
              }, {
                name: '陈文博',
                creditPts: 97,
                financialPts: 85,
                schoolPts: 67,
                creditChange: -3,
                itemStyle: {
                  normal: {
                    color: '#fa6862',
                  }
                },
              }, {
                name: '吴欣怡',
                creditPts: 97,
                financialPts: 85,
                schoolPts: 67,
                creditChange: 2,
                itemStyle: {
                  normal: {
                    color: '#409EFF',
                  }
                },
              }, {
                name: '刘浩',
                creditPts: 97,
                financialPts: 85,
                schoolPts: 67,
                creditChange: -2,
                itemStyle: {
                  normal: {
                    color: '#afb8c2',
                  }
                },
              }, {
                name: '张一帆',
                creditPts: 97,
                financialPts: 85,
                schoolPts: 67,
                creditChange: 0,
                normal: {
                  color: '#244767',
                }
              }, {
                name: '李艺璇',
                creditPts: 97,
                financialPts: 85,
                schoolPts: 67,
                creditChange: -1,
                itemStyle: {
                  normal: {
                    color: '#7ac2ff',
                  }
                },
              }, {
                name: '王刚',
                creditPts: 97,
                financialPts: 85,
                schoolPts: 67,
                creditChange: -1,
                itemStyle: {
                  normal: {
                    color: '#7ac2ff',
                  }
                },
              }],
              // links: [],
              links: [{
                source: '南小紫',
                target: '张秀英',
                name: '同学',
                relation: '您最近的关系没什么变化'
              }, {
                source: '南小紫',
                target: '王桐',
                name: '同学',
                relation: '您最近的关系超级好',
                lineStyle: {
                  normal: {
                    type: 'solid',
                  }
                },
              }, {
                source: '南小紫',
                target: '罗子俊',
                name: '校友',
                relation: '您最近的关系没什么变化'
              }, {
                source: '南小紫',
                target: '付贺然',
                name: '校友',
                lineStyle: {
                  normal: {
                    type: 'dashed',
                  }
                },
                relation: '您最近的关系减淡了'
              }, {
                source: '南小紫',
                target: '陈文博',
                name: '同学',
                relation: '您最近的关系没什么变化'
              }, {
                source: '南小紫',
                target: '刘浩',
                name: '同学',
                relation: '您最近的关系没什么变化'
              }, {
                source: '南小紫',
                target: '王刚',
                name: '工作伙伴',
                relation: '您最近的关系没什么变化'
              }, {
                source: '南小紫',
                target: '李艺璇',
                name: '工作伙伴',
                relation: '您最近的关系没什么变化'
              }, {
                source: '南小紫',
                target: '张一帆',
                name: '工作伙伴',
                relation: '您最近的关系没什么变化'
              }, {
                source: '南小紫',
                target: '吴欣怡',
                name: '同学',
                relation: '您最近的关系超级好',
                lineStyle: {
                  normal: {
                    type: 'solid',
                  }
                },
              }],
            }
          ]
        });

        console.log("校园关系图");
        let self = this;
        this.$axios.get('/profile/relationship',{
          params:{
            username:self.username
          }
        })
          .then((response) => {
            console.log("关系图 success");
            console.log(response);
            // console.log(response.data.aboveAverage);
            console.log(response.data.people);
            console.log(response.data.relations);

            let Vertex  = [];
            let Edge = [];
            for(let i of response.data.people) {

              let resCredit = self.getCreditChange(i.creditPts);
              Vertex.push({
                name: i.name,
                creditPts: i.creditPts,
                financialPts: i.financialPts,
                schoolPts: i.schoolPts,
                creditChange: resCredit.creditChange,
                itemStyle: {
                  normal: {
                    color: resCredit.color,
                  }
                }
              });
            }

            var center = {
              name: '南小紫',
              creditPts: 97,
              financialPts: 85,
              schoolPts: 67,
              symbolSize: 100,
              itemStyle: {
                normal: {
                  // color : '#409EFF'
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0, color: '#7853de' // 0% 处的颜色
                    }, {
                      offset: 1, color: '#409EFF' // 100% 处的颜色
                    }],
                    globalCoord: false, // 缺省为 false
                  }
                }
              },
            };

            let user = response.data.people[0];
            center.name = user.name;
            center.creditPts = user.creditPts;
            center.financialPts = user.financialPts;
            center.schoolPts = user.schoolPts;

            Vertex[0] = center;

            for(let i of response.data.relations) {
              Edge.push({
                source: i.source,
                target: i.target,
                name: i.name,
                relation: i.creditChange,
              });
            }

            console.log(Vertex);
            console.log(Edge);

            myChart.setOption({
              series: [{
                data: Vertex,
                links: Edge,
              }]
            });

          })
          .catch((response) => {
            console.log(response);
            console.log("error");
            // alert("error")
          })
      }
    }
  }
</script>

<style scoped>

  /*----------用户信息查看-------------*/
  div.user_info{
    margin-top: 2%;
    margin-left: 6%;
    margin-right: 6%;
    text-align: left;
    font-size: 16px;
    color: #505050;
    min-height: 550px;
  }

  div.user_credit{
    margin-top: 2%;
    margin-left: 6%;
    margin-right: 6%;
    text-align: left;
    font-size: 16px;
    color: #505050;
    min-height: 250px;
  }

  .user_info .table>tbody>tr>td{
    border:0px;
  }

  .user_info .table>tbody>tr>th{
    border:0px;
    min-width: 110px;
  }

  .user_credit caption>b{
    color: #333333;
    font-size: large;
  }

  .user_info_title{
    color: #505050;
  }

  #myGraph{
    margin-left: 6%;
    margin-right: 6%;
    text-indent: 5px;
    text-align: left;
    /*background-image: url("../../static/pic/CrossLines.png");*/
    background-size:100% 100%;
    -moz-background-size:100% 100%;
  }

</style>

<style>
  /*#leftOV,#leftFS,#leftBI,#leftLI,#leftLS,#leftII,#leftIE,#leftNC,#leftAC,#leftCC{ color: #777777 !important; }*/
  #leftSP { color: dodgerblue !important}
</style>

