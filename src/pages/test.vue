

  <template id="v-card">

    <el-row>
      <el-col :span="4" v-for="(o, index) in " :key="o" :offset="index > 0 ? 1 : 0">
        <el-card :body-style="{ padding: '5px' }">
          <img src="https://placekitten.com/380/200" class="image">
          <div style="padding: 14px;">
            <strong style="font-size: 18px;">一只猫猫</strong>
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item title="详细信息" name="1">
                <div style="position:relative;top:3px;">
                  <strong style="font-size: 15px;color: #999;">种类</strong>
                  <span style="position:relative;left:20px;">其他</span>
                </div>
                <div style="position:relative;top:3px;">
                  <strong style="font-size: 15px;color: #999;">电话</strong>
                  <span style="position:relative;left:20px;">233333345</span>
                </div>
                <div style="position:relative;top:3px;">
                  <strong style="font-size: 15px;color: #999;">详细描述</strong>
                </div>
                <span style="position:relative;left:0px;right:20px;">非常可爱的喵喵~o( =∩ω∩= )m，召之即来，来之可撸，萌萌萌。</span>
              </el-collapse-item>

            </el-collapse>
            <div style="position:relative;top:3px;">
              <strong style="font-size: 15px;">目标价格</strong>
              <span style="position:relative;left:20px;">100元</span>
            </div>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="primary" class="button" icon="el-icon-star-off">收藏</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </template>

<script>


  export default {
    data() {
      return {
        currentDate: new Date()
      };
    }

  }
</script>


<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

</style>


