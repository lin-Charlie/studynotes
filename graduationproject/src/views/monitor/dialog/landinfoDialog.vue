<template>
  <gislife-dialog
    ref="Dialog"
    :config="dialogConfig"
    @closed="cleanForm"
    @save="saveForm"
  >
    <template slot="container">
      <el-collapse v-model="activeNames">
        <el-collapse-item title="基础信息" name="1">
          <gislife-form
            :init="initFormItem"
            ref="FormItem"
            :isDisabled="dialogDisabled"
          >         
            <el-date-picker
              slot="monitorDate"
              v-model="initFormItem.ruleForm.monitorDate"
              type="datetime"
              value-format="yyyy-MM-dd HH:mm"
              placeholder="监测日期"
            >
            </el-date-picker>
          </gislife-form>
        </el-collapse-item>
      </el-collapse></template
    >
    <template slot="footer" v-if="dialogDisabled">
      <span v-show="false"></span>
    </template>
  </gislife-dialog>
</template>

<script>
import GislifeForm from "@/components/GislifeForm";
import GislifeDialog from "@/components/GislifeDialog";
import { initlandInfoFormItem } from "@/config/from/monitor.js"
export default {
  components: {
    GislifeForm,
    GislifeDialog,
  },
  data() {
    return {
      dialogConfig: {
        createDialog: false,
      },
      formLoading: false,
      initFormItem: initlandInfoFormItem,
      operateType: "",
      activeNames: ["1"],
      dialogDisabled: false,
      orgDisabled: false,
    };
  },
  methods: {
    cleanForm() {
      this.$refs.FormItem.resetForm();
    },
    openDialog(obj) {
      const { type, title, row, index } = obj;

      this.dialogDisabled = type === "detail";

      this.orgDisabled = !!row;

      // 处理回显 -- 修改
      if (row && row.id) {
        for(let key in row){
          this.initFormItem.ruleForm[key] = row[key]
        }
        // this.initFormItem.ruleForm = { ...row };
      }

      this.operateType = type;
      this.dialogConfig.title = title;
      this.dialogConfig.createDialog = true;
    },
    saveForm() {
      let FormItemRes = this.$refs.FormItem.submitForm();
      console.log(FormItemRes)
      if (!FormItemRes) return;
      if (this.initFormItem.ruleForm.id) {
        this.update(FormItemRes);
      } else {
        this.add(FormItemRes);
      }
    },
    async add(params) {
      try {
        // 重置父节点id
        // const { code, data } = await noiseManageAdd(params);

        if (code === 0) {
          this.dialogConfig.createDialog = false;
          this.$message.success("新增成功！");
          this.$emit("save");
        }
      } catch (error) {
        console.warn(error);
      }
    },
    async update(params) {
      try {
        // 重置父节点id
        // const { code, data } = await noiseManageUpdate(params);

        if (code === 0) {
          this.dialogConfig.createDialog = false;
          this.$message.success("修改成功！");
          this.$emit("save");
        }
      } catch (error) {
        console.warn(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>