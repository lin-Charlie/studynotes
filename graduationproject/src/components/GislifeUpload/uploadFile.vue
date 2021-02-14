<template>
  <el-upload
    ref="fileUpload"
    class="upload-demo"
    action="#"
    multiple
    :limit="limit"
    :accept="fileType"
    :on-change="fileChange"
    :on-remove="handleRemove"
    :on-preview="previewImg"
    :auto-upload="false"
    :show-file-list="true"
    :on-exceed="handleExceed"
    :file-list="fileList"
    :data="params"
    :disabled="disabled"
  >
    <el-button
      :class="options.class"
      :icon="options.icon || 'el-icon-download'"
      >{{ options.text }}</el-button
    >
    <div slot="tip" style="font-size: 16px" v-if="showNoverify">
      {{ `支持上传格式${fileType}` }}
    </div>
  </el-upload>
</template>

<script>
import { deleteFile } from "@/api/file";
export default {
  name: "uploadFile",
  props: {
    // 文件类型
    fileType: {
      type: String,
      default: `${window.g.fileType}, ${window.g.imgType}`,
    },
    // 是否显示验证
    noVerify: {
      type: Boolean,
      default: false,
    },
    showNoverify: {
      type: Boolean,
      default: true,
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
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object,
      default: {
        class: "common_btn",
        text: "点击上传",
      },
    },
    params: {},
  },
  data() {
    return {
      // fileList: [
      //   {
      //     name: "food.jpeg",
      //     url:
      //       "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
      //   },
      //   {
      //     name: "food2.jpeg",
      //     url:
      //       "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
      //   },
      // ],
      fileList: [], // 文件列表
      deleteFileList: [], // 删除文件列表
    };
  },
  methods: {
    fileChange(file, fileList) {
      let fileResult = true;

      // 是否验证文件类型
      if (!this.noVerify) {
        let type = file.name.substr(file.name.lastIndexOf(".")).toLowerCase(); // 获得文件后缀名
        if (this.fileType.search(type) == -1) {
          fileList.pop();
          this.$alert("支持格式：" + this.fileType, "当前上传文件格式错误", {
            confirmButtonText: "确定",
            type: "warning ",
          });
          fileResult = false;
        }
      }
      //选中后上传
      if (this.autoUplaod && fileResult) {
        this.$emit("fileUpload", file);
      }

      // 是否显示
      if (!this.showNoverify) {
        fileList.pop();
      } else {
        this.fileList = fileList;
      }
    },
    // eslint-disable-next-line no-unused-vars
    handleRemove(file, fileList) {
      this.delete(file.id);
      this.fileList = fileList;
    },
    handleExceed() {
      this.$message.error("超出文件数量限制，请删除后再添加");
    },
    previewImg(file) {
      file.path && window.open(`${window.g.filePath}${file.path}`);
    },
    async delete(id) {
      try {
        const { code, data, msg } = await deleteFile(id);
      } catch (error) {
        console.warn(error);
      }
    },
  },
  created() {
    this.fileList = this.params && this.params.list;
  },
};
</script>

<style lang="scss" scoped>
.upload-demo {
  display: inline-block;
  margin-right: 5px;
}
</style>
