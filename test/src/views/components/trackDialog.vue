<template>
  <div class="trackDialog">
    <el-dialog :title="options.title" :visible.sync="options.dialogVisible">
      <el-collapse v-model="activeNames">
        <el-collapse-item title="审批进度" name="1" class="approval_progress">
          <el-row v-if="options.details.state!==2">
            <el-col :span="12" class="progress_icon left"><span class="step_circle">1</span>- — — — — — — —</el-col>
            <el-col :span="12" class="progress_icon right"> — — — — — — — -<span class="step_circle">2</span></el-col>
          </el-row>
          <el-row v-if="options.details.state==2">
            <el-col :span="12" class="progress_icon" style="textAlign:right"><span class="step_circle">1</span>—————————</el-col>
            <el-col :span="12" class="progress_icon" style="textAlign:left">—————————<span class="step_circle">2</span></el-col>
          </el-row>
          <el-row>
            <el-col :span="12">任务下达</el-col>
            <el-col :span="12" v-if="options.details.state==1">指令终止</el-col>
            <el-col :span="12" v-if="options.details.state==2">指令完成</el-col>
          </el-row>
          <el-row> 
            <el-col :span="12">{{`${options.details.creator} 提交于 ${options.details.createTime}`}}</el-col>
            <el-col :span="12" v-if="options.details.state==1">{{`${options.details.executePersonNote} 终止于 ${options.details.completeTime}`}}</el-col>
            <el-col :span="12" v-if="options.details.state==2">{{`${options.details.executePersonNote} 完成于 ${options.details.completeTime}`}}</el-col>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="指令信息" name="2">
          <el-row>
            <el-col :span="8"
              ><span>{{ `指令名称：${options.details.name}` }}</span></el-col
            >
            <el-col :span="8"
              ><span v-if="options.details.dealerNote == undefined">{{
                `创建人：${options.details.creator}`
              }}</span>
              <span v-if="options.details.dealerNote !== undefined">{{
                `提交人：${options.details.dealerNote}`
              }}</span></el-col
            >
            <el-col :span="8"
              ><span>{{
                `状态：${(state =
                  options.details.state == 0
                    ? "指令下达"
                    : options.details.state == 1
                    ? "指令终止"
                    : "指令完成")}`
              }}</span></el-col
            >
          </el-row>
          <el-row>
            <el-col :span="8"
              ><span>{{ `指令描述：${options.details.note}` }}</span></el-col
            >
            <el-col :span="8"></el-col>
            <el-col :span="8"
              ><span v-if="options.details.state == 2">{{
                `处理时间：1小时0分`
              }}</span></el-col
            >
          </el-row>
          <el-row>
            <el-col :span="8"
              ><span>{{
                `创建时间：${options.details.createTime}`
              }}</span></el-col
            >
            <el-col :span="8"
              ><span>{{
                `计划时间：${options.details.planTime}`
              }}</span></el-col
            >
            <el-col :span="8"
              ><span v-if="options.details.state == 2">{{
                `完成时间：${options.details.completeTime}`
              }}</span>
              <span v-if="options.details.state == 1">{{
                `终止时间：${options.details.completeTime}`
              }}</span></el-col
            >
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="执行过程" name="3">
          <el-row>
            <el-col :span="24">
              <span v-if="options.details.state == 2"
                >说明：{{ `${options.details.explain}` }}</span
              >
              <span v-if="options.details.state == 1"
                >终止原因：{{ `${options.details.explain}` }}</span
              >
              <span v-if="options.details.state == 0">暂无数据</span>
            </el-col>
          </el-row>
          <el-row v-if="options.details.list.length > 0">
            <el-col :span="24">
              <div
                class="block"
                v-for="(url, index) in options.details.list"
                :key="index"
              >
                <el-image
                  style="width: 100px; height: 100px"
                  :src="url"
                  fit="contain"
                ></el-image>
              </div>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1", "2", "3"],
      // 存储状态文本
      state: "",
    };
  },
  props: {
    options: {
      type: Object,
      require: true,
    },
  },
  methods: {
    cancel() {
      this.options.dialogVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.trackDialog {
  .approval_progress{
    text-align: center;
    // 进度条
    .progress_icon{
      font-size: 20px;
      font-weight: bolder;
      color: rgba(0, 0, 0, 0.192);
      .step_circle{
        text-align: center;
        font-size: 20px;
        font-weight: normal;
        width: 0.18rem;
        color: rgba(255, 255, 255,1);
        display: inline-block;
        border-radius: 50%;
        background-color: rgb(37,185,185);
      }
    }
    .left{
      padding-right: 4px;
      text-align: right;
    }
    .right{
      padding-left: 4px;
      text-align: left;
    }
  }
  /deep/.el-dialog__title {
    font-size: 26px;
  }
  /deep/.el-dialog__body {
    padding-top: 10px;
    /deep/.el-collapse-item__header {
      font-size: 20px;
      border-bottom-color: transparent;
    }
    /deep/.el-collapse-item__header.is-active {
      border-bottom: 1px dashed #000;
    }
    /deep/.el-collapse-item__content {
      padding: 10px;
    }
    .el-row {
      color: rgba($color: #000000, $alpha: 0.5);
      margin: 20px 0;
    }
  }
}
</style>
