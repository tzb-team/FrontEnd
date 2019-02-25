<template>
  <div>
    <navi></navi>
    <img src="../../static/pic/guideBackground.jpg"  style="width:100%;min-height:1150px;opacity:0.3;position: absolute"/>
    <div style="position:relative;display:flex;width:100%;margin-top:8%;">
      <div style="padding-left:5%;">
        <el-row>
          <el-col :span="24">
            <el-menu
              style="opacity: 0.7;min-width:320px;"
              default-active="1-1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span style="font-size: 18px;">关于我们</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1" @click="handleClick">平台定位</el-menu-item>
                  <el-menu-item index="1-2" @click="handleClick">团队简介</el-menu-item>
                  <el-menu-item index="1-3" @click="handleClick">合作机构</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span style="font-size: 18px;">使用指南</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1" @click="handleClick">注册账号</el-menu-item>
                  <el-menu-item index="2-2" @click="handleClick">借款须知</el-menu-item>
                  <el-menu-item index="2-3" @click="handleClick">贷款须知</el-menu-item>
                  <el-menu-item index="2-4" @click="handleClick">信息发布</el-menu-item>
                  <el-menu-item index="2-5" @click="handleClick">物品交易</el-menu-item>
                  <el-menu-item index="2-6" @click="handleClick">规则须知</el-menu-item>
                  <el-menu-item index="2-7" @click="handleClick">常见问题</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span style="font-size: 18px;">安全中心</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1" @click="handleClick">政策法规</el-menu-item>
                  <el-menu-item index="3-2" @click="handleClick">隐私保护</el-menu-item>
                </el-menu-item-group>

              </el-submenu>

            </el-menu>
          </el-col>
        </el-row>
      </div>
      <table style="margin:0 auto;">
        <tbody>
        <tr><td>
          <ul>
            <el-col :span="12">
              <div class="detail" v-if="item1">
                <div class="content">
                  <label style="font-weight: normal;">
                    平台定位<hr/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trust致力于打造基于校园的金融互助平台，给在校大学生提供一个良好的资金交易、生活互助生态圈。在平台中，您可以向同校生申请借款，也可以把每月的盈余生活费拿来发放贷款、收取利息，从而实现资金从盈余方到需求方的流动，也降低了违约风险。
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同时，Trust也给校友带来了回馈母校的机会，通过无利率贷款行为，校友可以帮助在校生解决因学习而产生的大额经济需求，充分展现校友情谊。此外，附加的失物招领、二手交易板块也使得Trust平台更加全面、生动，力求带给您最佳的用户体验。
                  </label>
                </div>
                <div align="center" style="padding:0px 0px 20px 0px;">
                  <img style="border-radius:10%;" src="../../static/pic/nju.jpg">
                </div>
              </div>
              <div class="detail" v-if="item2">
                <div class="content">
                  <label style="font-weight: normal;">
                    团队简介<hr/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本项目的管理团队由来自南京大学的优秀师生组成，在南京大学工程管理学院肖斌卿教授与李心丹教授的带领下，本团队21名成员分为商业组和软件组，分别负责金融产品的设计和软件开发等工作。两组队员合理分工相互协作，充分发挥团队的能力和凝聚力。
                  </label>
                  <table style="margin:0 auto;">
                    <tbody>
                    <tr>
                      <td>
                        <div style="display: flex;">
                          <img  style="padding:20px;width:250px;height: 250px;border-radius:50%;" src="../../static/pic/南大软院.jpg"/>
                          <img  style="padding:20px;width:250px;height: 250px;border-radius:50%;" src="../../static/pic/工管院.jpg"/>
                          <img  style="padding:20px;width:250px;height: 250px;border-radius:50%;" src="../../static/pic/计算机学院.jpg"/>
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="detail" v-if="item3">
                <div class="content">
                  <div style="display: flex">
                    <div style="padding:0px 20px;">
                      <label style="font-weight: normal;">
                        合作机构<hr/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trust平台的主要合作机构是工行南大未来广场支行，它是南京大学 - 工商银行金融创新实验室项目的重要组成部分，是工商银行将金融创新科技融入网点建设当中，倾力打造的新型网点。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;未来广场富有科技感，采用了工行最先进的智能设备，可以完成 90% 以上的非现金业务。同时引入人脸识别系统，在校师生可以通过手机端“工银 e 校园”注册并预定支行的会议室。
                      </label>
                    </div>
                    <div style="padding:70px 0px 0px 0px;">
                      <img style="width:300px;height: 300px;border-radius:50%;" src="../../static/pic/futurefinance.png"/>
                    </div>
                  </div>
                  <div style="display: flex">
                    <div style="padding:10px 20px;">
                      <img style="width:250px;height: 250px;border-radius:50%;" src="../../static/pic/futureservice.png"/>
                    </div>
                    <div>
                      <label style="font-weight: normal;">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;未来广场布局功能多样，内部分为四大区域，即智能服务区、多功能服务区、研讨区和休闲区，不仅是金融服务场所，更能为客户提供交流、展示等多种服务。
                      </label>
                      <br/>
                      <label style="font-weight: normal;">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;未来广场作为南京大学“双创 ” 基地，为学生提供了了解银行、实习体验、创新研讨的平台，为其走进社会开展创业创新提供了经验和技能储备。后续还将招募学生参与运营管理。
                      </label>
                    </div>
                  </div>
                  <div style="display: flex">
                    <div style="padding:40px;">
                      <label style="font-weight: normal;">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;南大未来广场支行作为南京工行着力打造的创新平台，今后还将逐步完善各类功能，成为真正的“未来银行”。而Trust与未来广场的合作与日常交流，也将是我们平台不断进步的原动力。
                      </label>
                    </div>
                    <div>
                      <img style="width:250px;height: 250px;border-radius:50%;" src="../../static/pic/futuresquare.png"/>
                    </div>
                  </div>


                </div>
              </div>
              <div class="detail" v-if="item4">
                <div class="content">
                  <label style="font-weight: normal">注册账号</label><hr/>
                  <label style="font-weight: normal;line-height: 50px;">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点击“注册”，填写相关信息，您便开启了美好的Trust之旅！<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注册成功之后，您将会进入“个人中心”的“校园验证”页面，如您需要体验和享受更多的Trust服务您需完成信息填写（您也可选择跳过此步），您的信息完善程度将会影响您用户级别。
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：不同用户权限如下<br/>
                  </label>
                  <table style="margin:0 auto;width: 100%;">
                    <tbody>
                    <tr>
                      <th style="text-align:center;border: 1px solid dimgrey;">用户级别</th>
                      <th style="text-align:center;border: 1px solid dimgrey;">浏览信息</th>
                      <th style="text-align:center;border: 1px solid dimgrey;">投资功能</th>
                      <th style="text-align:center;border: 1px solid dimgrey;">借款功能</th>
                    </tr>
                    <tr>
                      <td style="text-align:center;border: 1px solid dimgrey;">初级用户</td>
                      <td style="text-align:center;border: 1px solid dimgrey;">√</td>
                      <td style="text-align:center;border: 1px solid dimgrey;">×</td>
                      <td style="text-align:center;border: 1px solid dimgrey;">×</td>
                    </tr>
                    <tr>
                      <td style="text-align:center;border: 1px solid dimgrey;">中级用户</td>
                      <td style="text-align:center;border: 1px solid dimgrey;">√</td>
                      <td style="text-align:center;border: 1px solid dimgrey;">√</td>
                      <td style="text-align:center;border: 1px solid dimgrey;">√</td>
                    </tr>
                    <tr>
                      <td style="text-align:center;border: 1px solid dimgrey;">高级用户</td>
                      <td style="text-align:center;border: 1px solid dimgrey;">√</td>
                      <td style="text-align:center;border: 1px solid dimgrey;">√</td>
                      <td style="text-align:center;border: 1px solid dimgrey;">√</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="detail" v-if="item5">
                <div class="content">
                  <label style="font-weight: normal">借款须知</label><hr/>
                  <div class="page1" v-if="page1">
                    <label style="font-weight: normal">（1）借款教程</label>
                    <div>
                      <div style="height: 200px;width:850px;">
                        <el-steps align-center :active="4">
                          <el-step title="步骤 1" description="进入trust平台主页，点击“我要借款”"></el-step>
                          <el-step title="步骤 2" description="选择借款类型（消费类小额短期 或 学习培训类大额长期）"></el-step>
                          <el-step title="步骤 3" description="进入借款信息填写页面，依次填写项目信息、信息披露层级、关于贷款三项内容"></el-step>
                          <el-step title="步骤 4" description="填写完成后选择“确定贷款”，即发送贷款请求给后台审核人员，如果审核通过，则您的贷款信息将出现在平台借贷页面。如果所填内容有误，可以返回上一步或直接选择清空重写"></el-step>
                        </el-steps>
                      </div>
                    </div>
                    <label style="font-weight: normal">  （2）借款规则</label>
                    <label style="font-weight: normal;font-size:14px;line-height: 26px;">
                      一、校园互助平台的特点和优势<br/>
                      A. 社区模式下交易成本更低。
                      <br/>校园互助平台的使用者，是南京大学的在读学生、已经毕业的校友和在校职工。在这一社区模式下，投资人和借贷人不再是陌生人，而是互相熟知的朋友、校友。这极大地方便了平台对其使用者的信用评级，因此在一定程度上能够使得交易双方的信息对称，从而降低交易成本。
                      <br/> B. 社区模式下违约可能性更低。
                      <br/>社区模式下，参与人的之间的关联性更强，这就使得借款人违约的成本增加。在熟人社交网络下，借款人的违约行为将会对其个人信用及未来发展产生影响。同时，由于对借款人的信用评级更为精准，因此投资人在选择标的时能够更好的进行决策，这极大地降低了投资人的投资风险。
                      <br/>二、借款的预期成本
                      <br/>（1）借款利率由用户提出借款申请时所填写的利率确定。
                      <br/>（2）在借款截止日期前，若标的提前满标，借款人从标的满标时即可将资金取出，系统即日开始计算利息，到还款截止日期为止；
                      <br/>（3）在借款截止日，若标的未满标，但达到最低达标率，借款人在借款截止日可将资金取出，系统开始计算利息，到还款截止日前为止；
                      <br/>（4）在借款截止日，若标的为达到最低达标率，则该标的流标，借款人借款失败。
                    </label>
                  </div>
                  <div class="page2" v-if="page2">
                    <label style="font-weight: normal;font-size:14px;line-height: 30px;">
                      <br/>三、借款所需材料
                      <br/>借款人：
                      <br/>1. 有效身份证件、学生证、手持身份证照片；
                      <br/>2. 拥有校园互助平台等级为完整的本人账户；
                      <br/>3. 申请二类标的还需提供学习培训证明；
                      <br/>以上材料要求尽可能的提供，平台会提供材料模板。根据项目具体要求，可能会增加其他材料。由于不可控原因造成的资料缺失，则根据具体情况进行协商、灵活处理。
                      前期风控审核时借款人可提供材料扫描件或复印件，放款签订合同之前必须核实原件。
                      如有疑问，可联系客服或信贷人员。
                      <br/>四、项目流程
                      <br/>借款人提出借款申请，并提交相关材料（联系信贷人员）。
                      相关材料齐全后，需通过材料审核。如项目风险可控，则通过时间一般不超过一天，如项目风险较大、争议较大，则可能拖延较长时间或者需补充相关材料。
                      风控通过后即可发标，项目募足资金后放款。资金募集期为1至7天。
                      <br/>五、借款额度及期限
                      <br/>借款人借款额度根据项目具体情况来确定。一般一类标的最高借款额度为5000，二类标的的最高额度为5万，可以根据项目具体风险情况调整。
                      期限根据具体项目需求确定。一般一类标的的借款期限为1-3个月，二类标的的借款期限为1-3年，可以根据具体项目风险情况调整。
                      <br/>六、还款方式
                      <br/>借款人在提出借款申请时可以选择不同的还款方式（不同的借款申请可以选择的还款方式也不同），同时平台也会结合项目的具体情况和借款人情况来提供一些建议。
                      <br/>七、是不是一定要南京大学的校友才能借款？还是其他人都可以借？
                      <br/>校园互助平台创立之初的目标用户就是南京大学的校友群体，主要包括南京大学在读学生、南京大学校友以及南京大学职工。借款人仅限于南京大学在读学生。
                      <br/>八、延期还款
                      <br/>延期还款的，根据合同约定支付罚息。
                      <br/>九、如何还款和还利息？
                      <br/>请借款人记住每月还利息日期和还款日期，提前一至两天打款，确保还款日钱能到账，金额大的一定要提前两天打款，否则延期还款的话我们将收取罚息。我们也会提前一个星期提醒还款。

                    </label>
                  </div>
                  <div style="float:right;">
                    <el-button circle @click="changePage1">1</el-button>
                    <el-button circle @click="changePage2">2</el-button>
                    <div style="width:100px;"></div>
                  </div>
                  <div style="height: 20px;"></div>

                </div>
              </div>
              <div class="detail" v-if="item6">
                <div class="content">
                  <label style="font-weight: normal">贷款须知</label><hr/>
                  <div>
                    <div>
                      <div class="page1" v-if="page3">
                        <label style="font-weight: normal;">（1）贷款教程</label>
                        <div style="height: 400px;width:850px;padding:20px 0px 50px 30px;">
                          <el-steps :active="3" direction="vertical">
                            <el-step title="步骤 1" description="选择投资类型（小额短期投资或者大额长期投资）选择投资类型（小额短期投资或者大额长期投资）"></el-step>
                            <el-step title="步骤 2" description="点击进入相应标的页面进行标的选择
                    （1）：显示筛选项，您可以根据自己的偏好进行投资标的的筛选：投资金额、利率、用户信用评级等。
                    （2）：排序维度：平台会为您提供合适的标的信息，您可通过个性化排序进行标的查看。
                    （3）：标的信息：此处您可看到标的的基本信息，点击“查看详情”可以进一步了解。
                    （4）：标的搜索：您可通过关键词（例如标的编号、借款用途等）对标的进行搜索。
                    （5）：平台为您提供个性推荐，您可输入投资金额和期望利率，平台将为您推荐合适的标的。
                    （6）：标的比较：输入亮哥标的的编号，可对其在金额、期限、利率等多方面进行全面比较，方便您的投资选择。
                    "></el-step>
                            <el-step title="步骤 3" description="选择标的后进行查看与投资
                    （1）：您可以查看产品概要、借款人信息、投标记录等，来决定是否投资。
                    （2）：您可看到目前标的的需求金额以及您的余额，自定义将要投资的金额大小，点击确认投资即可完成投标。
                    "></el-step>
                          </el-steps>
                        </div>
                        <label style="font-weight: normal;">（2）贷款规则</label>
                        <label style="font-weight: normal;font-size:14px;line-height: 24px;">
                          一、校园互助平台的特点和优势
                          <br/>A.社区模式下交易成本更低。
                          <br/>校园互助平台的使用者，是南京大学的在读学生、已经毕业的校友和在校职工。在这一社区模式下，投资人和借贷人不再是陌生人，而是互相熟知的朋友、校友。这极大地方便了平台对其使用者的信用评级，因此在一定程度上能够使得交易双方的信息对称，从而降低交易成本。
                          <br/>B.社区模式下违约可能性更低。
                          <br/>社区模式下，参与人的之间的关联性更强，这就使得借款人违约的成本增加。在熟人社交网络下，借款人的违约行为将会对其个人信用及未来发展产生影响。同时，由于对借款人的信用评级更为精准，因此投资人在选择标的时能够更好的进行决策，这极大地降低了投资人的投资风险。
                          <br/>二、投资的预期收益
                          <br/>（1）投资利率由投资者自行选择的标的利率确定。
                          <br/>（2）在借款截止日期前，若标的提前满标，则从标的满标当日开始计算利息，到还款截止日期为止；
                          <br/> （3）在借款截止日，若标的未满标，但达到最低达标率，则从借款截止日开始计算利息，到还款截止日前为止；
                          <br/> （4）在借款截止日，若标的为达到最低达标率，则该标的流标。
                          <br/>  （5）提前撤资将无法获得收益。
                          </label>
                      </div>
                      <div class="page2" v-if="page4" style="padding:30px 0px 0px 0px;">
                        <label style="font-weight: normal;font-size:14px;line-height: 24px;">
                          <br/>  三、投资所需材料
                          <br/>   投资人：
                          <br/>  1.有效身份证件、学生证、手持身份证照片；
                          <br/>  2.拥有校园互助平台等级为中级及以上的本人账户（中级账户仅能够参与一类标的投资，完整账号能参与一、二类标的投资）；

                          <br/>   以上材料要求尽可能的提供，平台会提供材料模板。根据项目具体要求，可能会增加其他材料。由于不可控原因造成的资料缺失，则根据具体情况进行协商、灵活处理。
                          前期风控审核时借款人可提供材料扫描件或复印件，放款签订合同之前必须核实原件。
                          如有疑问，可联系客服或信贷人员。
                          <br/>  四、项目流程
                          <br/>  投资人通过设定预期投资的各项条目，例如金额、期限、利率等，提交后系统将会自动生成投资方案。
                          <br/>  投资人可以浏览投资方案中各标的信息，无异议后即可提交投资方案，方案即刻生效。
                          <br/>  投资的收益计算日从标的集资成功日算起，若标的流标，资金将退回相应投资人的账户。投资人选择投资标的后，所投资金在账户中显示为“冻结资金”，投资人无法对这笔资金进行操作。
                          <br/> 五、资金收回方式
                          <br/>  投资人在提交投资方案并标的融资成功后，可以在个人中心的历史投资模块中了解各个标的的各项信息，包括标的投资利率、还款进度、还款期限等。
                          <br/>  六、是不是一定要南京大学的校友才能投资？还是其他人都可以？
                          <br/>  校园互助平台创立之初的目标用户就是南京大学的校友群体，主要包括南京大学在读学生、南京大学校友以及南京大学职工。目前，投资人仅限于以上三个群体。
                          <br/>  七、提前撤资
                          <br/> 想要提前撤资的用户，首先在平台提出“提前撤资”申请，当且仅当该标的被其他用户接管时，才能将自己的投资资金收回，并此前所获的投资收益均归接管标的的用户所有。若无人接管，则用户无法收回自己的投资资金。
                          <br/>  八、接管标的
                          <br/>  用户在选择接管标的后，将获得撤资用户之前投资所获得的收益和自己投资后所获得的收益，标的详情中所显示的利率为用户实际所得收益的利率。

                        </label>
                      </div>
                      <div style="float:right;">
                        <el-button circle @click="changePage3">1</el-button>
                        <el-button circle @click="changePage4">2</el-button>
                        <div style="width:100px;"></div>
                      </div>
                      <div style="height: 20px;"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="detail" v-if="item7">
                <div class="content">
                  <label style="font-weight: normal">信息发布</label><hr/>
                  <label style="font-weight: normal">
                    <br/>“失物/寻物”板块帮您找回您的心中所爱！<br/><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点击进入“失物/寻物”，您可以在“与我相关”发布信息、查看您正在进行与已经完成的失物招领与寻物启事信息；在“消息集散”中，您可以查看其它用户发布的失物招领与寻物启事信息。
                  </label>
                </div>
              </div>
              <div class="detail" v-if="item8">
                <div class="content">
                  <label style="font-weight: normal">物品交易</label><hr/>
                  <label style="font-weight: normal">
                    <br/>“南大鱼塘”板块让闲置物品效用最大化！<br/><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点击进入“南大鱼塘”，您可以在“交易大厅”查看相关二手物品的发布信息；在“我的闲置”中，您可以选择发布闲置物品信息、查看您已发布的闲置物品以及查看已经成功交易的物品。
                  </label>
                </div>
              </div>
              <div class="detail" v-if="item9">
                <div class="content">
                  <label style="font-weight: normal">规则须知</label><hr/>
                  <label style="font-weight: normal;font-size: 14px;line-height: 20px;">
                    （1）信用评级<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为大学生金融普惠互助平台，Trust的主要功能是资金借贷。因此，对大学生进行信用画像是至关重要的。
                    在这里，通过初始注册信息，后台会自动计算出您的初始信用分数，并按照分数给您打出相应的初始信用评级（信用评级包括AA/A/B/C/D五级）。需要注意的是，您在平台上的每一次行为都为影响您的信用分数，作为一个动态指标，它将实时监测和反应您的借贷、信息发布等一切活动。
                    信用评级至关重要。首先，它会直接影响您的信用额度。处于不同信用级别的用户拥有不同的借款额度。此外，信用评级也会影响您的借贷行为：信用评级越低，您的借贷风险评级越高，需求被实现的成功率越低。最后，信用评级也会间接影响您在借贷时的利率大小。
                    保持良好的信用，诚信借贷、和谐交流，是trust平台的宗旨所在，也是您拥有尚佳的用户体验的基础。

                  </label>
                  <label style="font-weight: normal;font-size: 14px;line-height: 20px;">
                    （2）关于收费<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小额消费类：<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;投资者：<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、	本平台进行充值时免费，提现需要收取一定费用。<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a)	当充值的资金经投资回款后，每提现5000元收取5元<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b)	当充值的资金未经投资直接取出，资金在网站的时间大于10天，每提现5000元收取5元，小于等于10天，收取5元+0.05%*提现金额<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、	投资服务费：按标的产生的利息收取相应的费用，利息在0~500，收取5%，500~5000收取2%，>5000不收取，此费用在借款人还款之后收取。<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、	标的转让费（债权人因特殊原因需要将标的转让时收取一定费用）：债权已持有90天（含）以内，转让服务费率为1%，债权已持有超过90天，转让服务费率为0.5%，转让时收取。
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;借款者：<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、	借款管理费：申请标的时收取，费用为金额*天数*0.01%<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、	逾期服务费（借款者未按时归还借款所需提交的服务费）：<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;逾期服务费=逾期本息总额*对应逾期服务费率*逾期天数；<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;逾期服务费率：1-30天为0.1%，31-60天为0.16%，61天及以上为0.2%；<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;借贷双方：<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、	提前还款违约金：平台不收取费用，费用全部交由投资者<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a) 借款方在第4期结息日（含结息日）前提前还款的，提前还款违约金为剩余本金的 1.5%；<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b) 借款方在第4期结息日次日至第8期结息日（含结息日）期间提前还款的，提前还款违约金为剩余本金的 1.0%；<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c) 借款方在第8期结息日后提前还款的，提前还款违约金为剩余本金的0.5%。<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：一般情况下，一月为一期（一般标的是按月计息的）；当用户自定义以日计息的时候，仍以月为单位进行比较，考虑到如果借款期限不足四个月时投资者获得的利息本来就较少，此时提前还款对投资者的利益损害相对较大，因此需采取较高比率的违约金。故在此按月或按天计息不做区分。“剩余本金”是指所有未到期的借款本金（当提前还款日为结息日时，剩余本金不包括当期本金；当提前还款日不为结息日时，剩余本金包括当期本金）。
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、	逾期还款：费用交由投资者<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;罚息金额=逾期本息总额*对应罚息利率*逾期天数；<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;罚息利率：1-30天为0.05%，31-60天为0.08%，61天及以上为0.1%；<br/>
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学习培训类：<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、发布学习培训类标的的借款人需要在借款前缴纳一定的保证金作为抵押，待还款成功之后平台自动退还。<br/>

                  </label>
                </div>
              </div>
              <div class="detail" v-if="item10">
                <div class="content">
                  <label style="font-weight: normal;">常见问题</label><hr/>
                  <label style="font-weight: normal;font-size: 16px;line-height: 26px;">
                    1、	问：你们的投资利息是多少？<br/>
                    答：投资利息主要由借款人发布标的时决定，利率范围较大，投资人可自行选择偏好的利率进行投标。
                    <br/>2、	问：投资安不安全？标的安全吗？<br/>
                    答：安全，借款人限制在南京大学在校学生，在注册平台时我们收集了用户的各项详细资料，通过团队的严格审核与调查来核实信息。通过对借款人的信用评级和财务状况的评估之后决定是否有借款资格以及申请的标的是否合理。
                    <br/>3、	问：你们的风控怎么做的？<br/>
                    答：我们有全方位的信用评级及财务状况分析，对借款人的还款能力与意愿进行了评估；此外，我们将资本严格限制在校友圈内，大大降低了坏账的风险。
                    <br/>4、	问：其他平台有不少跑路的现象，你们怎么确保投资安全？<br/>
                    答：我们的借款人都是南京大学在校学生，在向其提供借款前，我们都会要求其提供各项个人的真实信息，在确保资料真实、具有还款能力后才会通过其标的。
                    <br/>5、	问：充值提现要收钱吗？<br/>
                    答：充值免费，提现收费，当充值的资金经投资回款后，提现每5000元收取5元，当充值的资金未经投资直接取出，资金在网站的时间大于10天，提现每5000元收取5元，小于等于10天，收取5元+0.05%*金额。
                    <br/>6、	问：借款人都是真实的吗？借款资料是真实的吗？<br/>
                    答：真实的，借款人都是南京大学在校学生，平台拥有其个人基本信息及财务状况等，只是匿名化机制可以让借款人自由选择信息披露程度。
                    <br/>7、	问：投资人必须是校友吗？<br/>
                    答：是的，小额类标的限于南京大学在校学生进行投资，大额类标的限于已毕业校友进行投资。
                    <br/>8、	问：借款人必须是校友吗？<br/>
                    答：是的。
                    <br/>9、	问：不满标怎么办？<br/>
                    答：在借款截止日，若标的未满标，但达到最低达标率，借款人在借款截止日可将资金取出，系统开始计算利息，到还款截止日前为止；若未达到最低达标率，则借款失败。借款人可重新申请新的标的，可适当调整借款条件（例如提高借款利率）来加速满标。
                    <br/>10、问：什么叫透明标？<br/>
                    答：借款人为了加速满标，愿意将信息披露程度提到最高，公开身份信息进行借款。
                    <br/>11、问：投资后因特殊原因急需撤回资金怎么办？<br/>
                    答：当投资人需要撤资时可以进行债权转让，但是需要缴纳一定的债权转让费且在标的持有期的收益将无法享有。
                  </label>
                </div>
              </div>
              <div class="detail" v-if="item11">
                <div class="content">
                  <label style="font-weight: normal;">政策法规</label><hr/>
                  <label style="font-weight: normal;font-size: 16px;line-height: 36px;">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;民间借贷，即自然人之间、自然人与法人之间、自然人与其它组织之间借贷。民间借贷是《民法通则》中一种民事法律行为，是民间资本的一种投资渠道，在当今社会，已经成为民间金融的一种重要的表达形式。《中华人民共和国合同法》从法律上肯定了民间借贷行为的合法性，并从法律层面保护出借人收回借贷资金和利息的权利。
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;民间借贷的法律责任以民事责任为主，严重者还要追究刑事责任。主要包括：（1）瑕疵担保责任。实践中存在因标的物的瑕疵而致人损害的的事实，因此法律应该对民间借贷的瑕疵担保责任作出规定，可以参照《合同法》和其他国家的制度。有偿的民间借贷，出借人应承担担保责任，对于无偿的，除非明知有瑕疵故意不告知，不承担瑕疵担保责任。（2）违约责任。当事人违法借贷合同约定应承担的责任形式有四种：继续履行、承担违约金、定金责任和赔偿损失。
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;《中华人民共和国合同法》第二十三章“居间合同”中明确规定，居间人提供贷款合同订立的媒介服务，可依法向委托方收取相应的报酬。最高人民法院《关于人民法院审理借贷案件的若干意见》第6条：“民间借贷的利率可以适当高于银行的利率， 各地人民法院可以根据本地区的实际情况具体掌握，但最高不得超过银行同类贷款利率的四倍，（包含利率本款）。超出此限度的，超出部分的利息不予保护”。因此贷款服务机构的存在和服务费的收取都是符合法律规定并受法律保护的，且民间借贷行为具有合法性，出借人收回借贷资金和利息的权利也受法律保护。
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为校园金融互助平台，trust既不吸储，也不放贷，作为一个网络信用管理及借贷服务中介机构，其业务范围和经营活动完全符合相关法律规定。
                  </label>
                </div>
              </div>
              <div class="detail" v-if="item12">
                <div class="content">
                  <label style="font-weight: normal;">隐私保护</label><hr/>
                  <label style="font-weight: normal;font-size: 16px;line-height:45px;">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trust致力于打造和谐、安全的校园金融互助交易平台，我们有以下措施可以保障您的隐私安全：<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）平台提供的金融借贷均严格遵守我国相关法律法规，同时严格保护您的隐私信息，对于您拒绝披露的信息，平台承诺不会予以公开。<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）平台具有严格、可靠的安全系统，未经允许的管理员不可获取您的相关信息。<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（3）平台承诺绝不会将您的银行信息、个人隐私以任何方式透露给第三方。<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（4）平台通过先机的加密技术，对您的注册信息、收支情况、交易记录都进行了高强度的加密，保证您在平台的足迹不会被不法分子窃取利用。<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此外，平台仍需提醒您，trust是一个实名认证平台，您在其上进行浏览和交易时，也要有防范意识，时刻注意保护个人隐私。截图注意覆盖个人信息，除特殊情况外，不要轻易透露电话、住址等隐私信息，以防信息窃取造成不必要的损失。<br/>
                  </label>
                </div>
              </div>
            </el-col>
          </ul>
        </td></tr>
        </tbody>
      </table>



    </div>


  </div>
</template>

<script>
  import navi from "@/components/navi";

  export default{
    name: "guide",
    components:{navi},
    data(){
      return{
        //页面跳转
        item1:true,
        item2:false,
        item3:false,
        item4:false,
        item5:false,
        item6:false,
        item7:false,
        item8:false,
        item9:false,
        item10:false,
        item11:false,
        item12:false,
        //item5分页
        page1:true,
        page2:false,
        //item6分页
        page3:true,
        page4:false,
      }
    },
    beforeCreate:function(){
      localStorage.route='#guide'
    },
    methods: {
      changePage1(){
        this.page1=true;
        this.page2=false;
      },
      changePage2(){
        this.page1=false;
        this.page2=true;
      },
      changePage3(){
        this.page3=true;
        this.page4=false;
      },
      changePage4(){
        this.page3=false;
        this.page4=true;
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClick(key, keyPath) {
        var index = key.index;
        var rank = parseInt(index[2])
        if(parseInt(index[0])==1){

        }else if(parseInt(index[0])==2){
          rank = rank+3;
        }else{
          rank = rank+10;
        }
        console.log(rank);
        if(rank==1){
          this.item1=true;
          this.item2=false;
          this.item3=false;
          this.item4=false;
          this.item5=false;
          this.item6=false;
          this.item7=false;
          this.item8=false;
          this.item9=false;
          this.item10=false;
          this.item11=false;
          this.item12=false;
        }else if(rank==2){
          this.item1=false;
          this.item2=true;
          this.item3=false;
          this.item4=false;
          this.item5=false;
          this.item6=false;
          this.item7=false;
          this.item8=false;
          this.item9=false;
          this.item10=false;
          this.item11=false;
          this.item12=false;
        }else if(rank==3){
          this.item1=false;
          this.item2=false;
          this.item3=true;
          this.item4=false;
          this.item5=false;
          this.item6=false;
          this.item7=false;
          this.item8=false;
          this.item9=false;
          this.item10=false;
          this.item11=false;
          this.item12=false;
        }else if(rank==4){
          this.item1=false;
          this.item2=false;
          this.item3=false;
          this.item4=true;
          this.item5=false;
          this.item6=false;
          this.item7=false;
          this.item8=false;
          this.item9=false;
          this.item10=false;
          this.item11=false;
          this.item12=false;
        }else if(rank==5){
          this.item1=false;
          this.item2=false;
          this.item3=false;
          this.item4=false;
          this.item5=true;
          this.item6=false;
          this.item7=false;
          this.item8=false;
          this.item9=false;
          this.item10=false;
          this.item11=false;
          this.item12=false;
        }else if(rank==6){
          this.item1=false;
          this.item2=false;
          this.item3=false;
          this.item4=false;
          this.item5=false;
          this.item6=true;
          this.item7=false;
          this.item8=false;
          this.item9=false;
          this.item10=false;
          this.item11=false;
          this.item12=false;
        }else if(rank==7){
          this.item1=false;
          this.item2=false;
          this.item3=false;
          this.item4=false;
          this.item5=false;
          this.item6=false;
          this.item7=true;
          this.item8=false;
          this.item9=false;
          this.item10=false;
          this.item11=false;
          this.item12=false;
        }else if(rank==8){
          this.item1=false;
          this.item2=false;
          this.item3=false;
          this.item4=false;
          this.item5=false;
          this.item6=false;
          this.item7=false;
          this.item8=true;
          this.item9=false;
          this.item10=false;
          this.item11=false;
          this.item12=false;
        }else if(rank==9){
          this.item1=false;
          this.item2=false;
          this.item3=false;
          this.item4=false;
          this.item5=false;
          this.item6=false;
          this.item7=false;
          this.item8=false;
          this.item9=true;
          this.item10=false;
          this.item11=false;
          this.item12=false;
        }else if(rank==10){
          this.item1=false;
          this.item2=false;
          this.item3=false;
          this.item4=false;
          this.item5=false;
          this.item6=false;
          this.item7=false;
          this.item8=false;
          this.item9=false;
          this.item10=true;
          this.item11=false;
          this.item12=false;
        }else if(rank==11){
          this.item1=false;
          this.item2=false;
          this.item3=false;
          this.item4=false;
          this.item5=false;
          this.item6=false;
          this.item7=false;
          this.item8=false;
          this.item9=false;
          this.item10=false;
          this.item11=true;
          this.item12=false;
        }else if(rank==12){
          this.item1=false;
          this.item2=false;
          this.item3=false;
          this.item4=false;
          this.item5=false;
          this.item6=false;
          this.item7=false;
          this.item8=false;
          this.item9=false;
          this.item10=false;
          this.item11=false;
          this.item12=true;
        }

      }
    }
  }

</script>

<style>
  .content{
    padding: 40px;
    font-size: 20px;
    line-height: 40px;
    color:dimgrey;
    font-family: "Adobe 仿宋 Std R";
  }
  .detail {
    width: 900px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 10%;
  }

</style>
