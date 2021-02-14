<template>
  <div>
    <el-upload
      action="#"
      list-type="picture-card"
      :auto-upload="false"
      :on-change="fileChange"
      :file-list="fileList"
      :limit="limit"
      :on-exceed="handleExceed"
      :class="{ upload_box: showUpload }"
    >
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{ file }">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="el-upload-list__item-actions">
          <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
            v-if="config.zoomIn"
          >
            <i class="el-icon-zoom-in"></i>
          </span>
          <span
            v-if="!disabled && config.download"
            class="el-upload-list__item-delete"
            @click="handleDownload(file)"
          >
            <i class="el-icon-download"></i>
          </span>
          <span
            v-if="!disabled && config.delete"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    // 文件类型
    fileType: {
      type: String,
      default: window.g.imgType || ".png,.jpg,.jpeg",
    },
    // 是否验证
    noVerify: {
      type: Boolean,
      default: false,
    },
    //上传数量限制
    limit: {
      type: Number,
      default: 3,
    },
    //选中后上传
    autoUplaod: {
      type: Boolean,
      default: false,
    },
    //显示上传框
    showUpload: {
      type: Boolean,
      default: false,
    },
    config: {
      type: Object,
      default: () => {
        return {
          download: true,
          zoomIn: true,
          delete: true,
        };
      },
    },
  },
  data() {
    return {
      dialogImageUrl: "", //展开问见
      dialogVisible: false,
      disabled: false,
      fileList: [], //文件
    };
  },
  methods: {
    fileChange(file, fileList) {
      let fileResult = true;
      // 手否验证文件类型
      if (!this.noVerify) {
        let type = file.name.substr(file.name.lastIndexOf(".")).toLowerCase(); // 获得文件后缀名
        if (this.fileType.search(type) == -1) {
          fileList.pop();
          this.$message.warning("当前上传文件格式错误");
          fileResult = false;
        }
      }
      //选中后上传
      if (this.autoUplaod && fileResult) {
        fileList.pop();
        this.$emit("fileUpload", file);
      }
      this.fileList = fileList;
    },
    handleRemove(file) {
      this.fileList = this.fileList.filter((e) => e.uid != file.uid);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    //下载
    handleDownload(file) {
      this.$emit("fileDownLoad", file);
    },
    //超出数量
    handleExceed() {
      this.$message.error("超出文件数量限制，请删除后再添加");
    },
  },
};
</script>

<style lang="scss" scoped>
.upload_box {
  /deep/.el-upload--picture-card {
    display: none;
  }
}
</style>
