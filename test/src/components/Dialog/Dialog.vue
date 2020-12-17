<template>
  <el-dialog
    
    :visible.sync="config.createDialog"
    :width="config.width ? config.width : '50%'"
    :show-close="true"
    :close-on-click-modal="
      config.closeOnClickModal ? config.closeOnClickModal : false
    "
    :before-close="handleClose"
    @closed="closed"
    @open="open"
  >
    <div v-loading="loading">
      <slot name="main">
        <div class="title_box">
          <div class="text">
            {{ config.title ? config.title : "标题" }}
          </div>
          <!--          <slot name="opetateBox">-->
          <!--            <div class="opetate_box">-->
          <!--              <el-button class="danger_btn" plain @click="config.createDialog = false">取消</el-button>-->
          <!--              <el-button class="save_btn" style="color: white" plain @click="save">保存</el-button>-->
          <!--            </div>-->
          <!--          </slot>-->
        </div>
        <div class="container" ref="dialog">
          <slot name="container"> 内容 </slot>

          <!-- <slot name="opetateBox">
            <div class="opetate_box">
              <el-button
                class="close_btn"
                style="color: #409eff"
                plain
                @click="config.createDialog = false"
                >取消</el-button
              >
              <el-button
                class="save_btn"
                style="color: white"
                plain
                @click="save"
                >保存</el-button
              >
            </div>
          </slot> -->
        </div>

        <div class="dialog-footer">
          <slot name="footer"></slot>
        </div>
      </slot>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default: () => {
        return {
          destroyOnClose: true,
          title: "标题",
          createDialog: false,
          closeOnClickModal: false,
          width: "70%",
        };
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    // 保存
    // save() {
    //   this.$emit("save");
    // },
    // 关闭
    closed() {
      this.$emit("closed");
    },
    // 打开
    open() {
      this.$emit("open");
    },
    handleClose(done){
      // this.$refs.ruleForm.resetFields();
      // console.log(this.$refs)
      done()
    }
  },
};
</script>

<style lang="scss" scoped>
.el-dialog__wrapper {
  overflow: hidden;
}

.title_box {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
  margin-bottom: 16px;
  .text {
    flex: 1;
    font-size: 24px;
    font-weight: 700;
    color: #333333;
  }
}
.container {
  max-height: 650px !important;
  overflow-x: hidden;
  overflow-y: auto;
  .opetate_box {
    text-align: center;
  }
}

//当前页面element覆盖
/deep/.el-dialog__header {
  padding: 0;
}
/deep/.el-radio__inner {
  width: 20px;
  height: 20px;
  background: #fff !important;
  border: 2px solid #316fd0 !important;
}
/deep/.el-radio__input.is-checked .el-radio__inner::after {
  width: 12px;
  height: 12px;
  background: #316fd0;
}
/deep/.el-radio__input.is-checked + .el-radio__label {
  color: #606266;
}

.dialog-footer {
  text-align: right;
  padding-top: 5px;
  border-top:  1px solid #ccc;
}
</style>
