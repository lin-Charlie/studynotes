<template>
  <div class="addDialog">
    <el-dialog :title="options.tittle" :visible.sync="options.dialogVisible">
      <el-form
        :model="options.ruleForm"
        label-width="110px"
        :rules="options.rules"
        ref="ruleForm"
      >
        <el-form-item label="指令名称:" prop="name">
          <el-input
            v-model="options.ruleForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="指令描述:" prop="note">
          <el-input
            v-model="options.ruleForm.note"
            type="textarea"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="计划完成时间:" prop="planTime">
          <el-date-picker
            v-model="options.ruleForm.planTime"
            value-format="yyyy-MM-dd HH:mm"
            format="yyyy-MM-dd HH:mm"
            type="datetime"
            placeholder="完成时间"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="执行场站:" prop="executeDept">
          <el-select v-model="options.ruleForm.executeDept" placeholder="请选择">
            <el-option 
            :label="item.jgmc" 
            :value="index"  
            v-for="(item,index) in stationList" 
            :key="index"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel('ruleForm')">取 消</el-button>
        <el-button type="primary" @click="addIssue('ruleForm')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {addCommon,getInfo} from "@/api/dispatch/dialog.js"
export default {
  data(){
    return{
      userinfo:{},
      stationList:[],
    }
  },
  props: {
    options: {
      type: Object,
      require: true,
    },
  },
  created(){
    this.userinfo = JSON.parse(sessionStorage.userinfo);
    this.getStation()
  },
  methods: {
    // 添加指令
    addIssue(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let info = this.options.ruleForm
          // 添加一些数据
          info.creator = this.userinfo.xm
          // 转换场站数据
          info.executeDept = this.formatStation(info.executeDept)
          info.orderUnit = info.executeDept
          // 格式化时间数据
          info.planTime = `${info.planTime}:00`
          
          let {data} = await addCommon(info)
          if(data){
            // 关闭重置
            this.options.dialogVisible = false
            this.$refs.ruleForm.resetFields()
          }else{
            this.$message.error("添加失败");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 格式化场站数据，number--string
    formatStation(value){
      for(let index in this.stationList){
        if(value == index){
          return this.stationList[index].jgmc
        }
      }
    },
    cancel(formName) {
      this.options.dialogVisible = false;
      this.$refs[formName].resetFields();
    },
    // 获取执行场站信息
    async getStation(){
      let {data} = await getInfo()
      this.stationList = data.data
    }
  },
};
</script>

<style lang="scss" scoped></style>
