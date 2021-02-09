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
                `创建人：${options.details.creator}`
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
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                accept="image/*,.pdf,.doc"
                :auto-upload="false"
                :http-request="uploadSectionFile"
                :file-list="fileList"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                支持上传jpg/png/doc文件
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
        <el-button type="primary" @click="doIssue('ruleForm')">完成</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {doCommon,upFile} from "@/api/dispatch/dialog.js"
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
    // 指令执行
    doIssue(formName) {
      this.$refs.upload.submit()
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let doInfo = new FormData()
          doInfo.append("id",this.options.details.id)
          doInfo.append("explain",this.options.ruleForm.explain)
          doInfo.append("state",2)
          doInfo.append("executePerson",JSON.parse(sessionStorage.userinfo).xm)
          // 修改指令状态
          let {data} = await doCommon(doInfo)
          if(data.code == 200){
            this.$message({
              message: "执行成功",
              type: "success",
            });
          }else{
            this.$message.error("执行失败")
          }
          // 重置状态
          this.options.dialogVisible = false
          this.$refs[formName].resetFields();
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
    // 文件上传
    uploadSectionFile(param){
      console.log(param)
      let file = new FormData()
      file.append("creator",this.options.creator)
      file.append("commandId",this.options.details.id)
      file.append("processFile",param.file)
      upFile(file).then((res)=>{
          console.log(res)
        }).catch((err)=>{
          console.log(err)
        })
    },
    handleExceed(){
      this.$message.warning(`当前限制选择 3 个文件`);
    },
  },
};
</script>

<style lang="scss" scoped>
.trackDialog {
  span{
    font-size: 18px;
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
