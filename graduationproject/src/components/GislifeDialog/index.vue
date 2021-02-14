<template>
  <el-dialog
    class="dialog-containers"
    :visible.sync="config.createDialog"
    :width="config.width ? config.width : '60%'"
    :show-close="config.showClose"
    :close-on-click-modal="
      config.closeOnClickModal ? config.closeOnClickModal : false
    "
    :modal-append-to-body="config.appendToBody ? config.appendToBody : false"
    :modal="config.modal === false ? config.modal : true"
    @closed="closed"
    @close="close"
    @open="open"
    @opened="opened"
    :top="config.top || '15vh'"
    :destroy-on-close="config.destroyOnClose ? config.destroyOnClose : false"
    :title="config.title ? config.title : '标题'"
  >
    <div v-loading="loading">
      <slot name="main">
        <!-- <div class="title_box">
          <div class="text">
            <slot name="title">
              {{ config.title ? config.title : "标题" }}
            </slot>
          </div>
        </div> -->
        <div class="dialog-container">
          <slot name="container"> 内容 </slot>
        </div>
        <div class="dialog-footer">
          <slot name="footer">
            <el-button @click="config.createDialog = false">取消</el-button>
            <el-button
              class="common_btn"
              @click="save"
              :disabled="config.disabled"
              >{{ config.saveText || "保存" }}</el-button
            >
          </slot>
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
          showClose: true,
          disabled: false,
          // destroyOnClose: true,
          // title: "标题",
          // createDialog: false,
          // closeOnClickModal: false,
          // width: "70%",
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
    save() {
      this.$emit("save");
    },
    // 关闭
    closed() {
      this.$emit("closed");
    },
    // 关闭
    close() {
      this.$emit("close");
    },
    // 打开
    open() {
      this.$emit("open");
    },
    // 打开
    opened() {
      this.$emit("opened");
    },
  },
};
</script>

<style lang="scss" scoped>
.title_box {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
  margin-bottom: 16px;
  .text {
    flex: 1;
    font-size: 20px;
    font-weight: 700;
    color: #0874c1;
  }
}
.dialog-container {
  max-height: 600px;
  overflow-x: hidden;
  overflow-y: auto;
}

.dialog-footer {
  margin-top: 10px;
  text-align: right;
}

//当前页面element覆盖

/deep/.el-dialog__body {
  padding: 20px;
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
</style>
