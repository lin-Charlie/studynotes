<template>
  <div class="trackDialog">
    <el-dialog :title="options.title" :visible.sync="options.dialogVisible">
      <el-collapse v-model="activeNames">
        <el-collapse-item title="指令信息" name="1">
          <el-row>
            <el-col :span="8"
              ><span>{{ `指令名称：${options.details.name}` }}</span></el-col
            >
            <el-col :span="8"
              ><span>{{
                `创建人：${options.details.creatorNote}`
              }}</span></el-col
            >
            <el-col :span="8"></el-col>
          </el-row>
          <el-row>
            <el-col :span="8"
              ><span>{{ `指令描述：${options.details.note}` }}</span></el-col
            >
            <el-col :span="8"></el-col>
            <el-col :span="8"></el-col>
          </el-row>
          <el-row>
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
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="执行情况" name="2">
          <el-form
            ref="ruleForm"
            :model="options.ruleForm"
            label-position="right"
            :rules="options.rules"
            label-width="80px"
          >
            <el-form-item label="附件：">
              <el-upload
                class="upload-demo"
                ref="upload"
                action="#"
                :on-preview="handlePreview"
                multiple
                :limit="3"
                accept="image/*,.pdf,.doc"
                :auto-upload="false"
                :http-request="uploadSectionFile"
                :file-list="fileList"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <el-button size="small" type="success" @click="upSubmit">上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  上传jpg/png/doc文件，且不超过500kb
                </div>
              </el-upload>
            </el-form-item>
            <el-form-item label="说明：" prop="explain">
              <el-input
                type="textarea"
                v-model="options.ruleForm.explain"
              ></el-input>
            </el-form-item>
          </el-form>
        </el-collapse-item>
      </el-collapse>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel('ruleForm')">取消</el-button>
        <el-button type="primary" @click="endIssue('ruleForm')">完成</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1", "2"],
      // 状态存储
      state:'',
      fileList:[]
    };
  },
  props: {
    options: {
      type: Object,
      require: true,
    },
  },
  methods: {
    endIssue(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    cancel(formName) {
      this.options.dialogVisible = false;
      this.$refs[formName].resetFields();
    },
    handlePreview(file) {
      console.log(file);
      // this.fileList[0].name = file.url
    },
    uploadFile(file){
      console.log(file)
      // :before-upload="uploadFile"
      // this.fileList[0].name = file.name
    },
    uploadSectionFile(param){
      console.log(param)
      // this.fileList[0].name = param.file.name
      // console.log(this.fileList)
    },
    upSubmit(){
      this.$refs.upload.submit()
    }
  },
};
</script>

<style lang="scss" scoped>
.trackDialog {
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
