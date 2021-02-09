<template>
  <div class="container">
    <trackDialog :options="trackOptions"></trackDialog>
    <div class="serch_bar">
      <div class="serch_box">
        <el-date-picker
          v-model="createTime"
          value-format="yyyy-MM-dd HH:mm"
          format="yyyy-MM-dd HH:mm"
          type="datetime"
          placeholder="创建时间"
        >
        </el-date-picker>
        <el-date-picker
          v-model="planTime"
          type="datetime"
          value-format="yyyy-MM-dd HH:mm"
          format="yyyy-MM-dd HH:mm"
          placeholder="有效时间"
        >
        </el-date-picker>
        <el-button
          type="primary"
          icon="el-icon-search"
          @click="serchDis"
        ></el-button>
      </div>
    </div>
    <div class="table_box">
      <commonTable :init="tableInit" :tableData="tableData">
        <template slot="operate" slot-scope="scope">
          <el-button type="primary" @click="watch(scope.row)">查看</el-button>
        </template>
      </commonTable>
    </div>
    <pagination :pageParams="pageParams" :total="pageParams.total"></pagination>
  </div>
</template>
<script>
import commonTable from "@/components/table/commonTable.vue";
import trackDialog from "@/components/Dialog/trackDialog.vue";
import pagination from "@/components/table/pagination.vue";
import {getStateCommon,getTimeCommon,getUseTime} from "@/api/dispatch/index.js"
import {getFile} from "@/api/dispatch/dialog.js"
export default {
  data() {
    return {
      executeDept:"",
      createTime: "",
      planTime: "",
      trackOptions: {
        dialogVisible: false,
        title: "指令查看",
        details: {
          name: "",
          creator: "",
          createTime: "",
          planTime: "",
          note: "",
          completeTime: "2020-12-04 18:39",
          //完成/终止人
          executePerson: "",
          //完成/终止说明
          explain: "",
          state: "",
          //预览数据
          list: "",
        },
      },
      tableInit: {
        options: [
          { label: "指令名称", prop: "name" },
          { label: "执行单位", prop: "executeDept" },
          { label: "创建时间", prop: "createTime" },
          { label: "提交人", prop: "executePerson" },
          { label: "计划完成时间", prop: "planTime" },
          { label: "指令描述", prop: "note" },
          {
            label: "状态",
            prop: "state",
            format: (row) => {
              return row.state == 0
                ? "指令下达"
                : row.state == 1
                ? "指令终止"
                : "已完成";
            },
          },
          { label: "操作", prop: "operate", width: "200" },
        ],
        config: {
          index: {
            method: (val) => val + 1,
          },
          rowClassName(row) {
            if ((row.rowIndex + 1) % 2 == 0) {
              return "evenCows";
            } else {
              return "oddCows";
            }
          },
        },
      },
      tableData: [],
      pageParams: {
        pageNum: 1,
        pageSize: 10,
        total: 60,
      },
    };
  },
  components: { commonTable, pagination, trackDialog },
  methods: {
    async watch(row) {
      let {data} = await getUseTime(row.id)
      // console.log(file,row.id)
      this.trackOptions.details = row;
      this.trackOptions.details.useTime = data
      // 获取文件列表数据
      getFile(row.id).then((res)=>{
        this.trackOptions.details.list = res.data||[]
        this.trackOptions.dialogVisible = true
      }).catch((err)=>{
        console.log(err)
      })
    },
    // 指令时间查询
    async serchDis() {
      let serchInfo = ""
      if(this.createTime!==null&&this.createTime!==""){
        let createTime = this.createTime.replace(/-/g,"/")
        serchInfo=`createTime=${createTime}&`
      }
      if(this.planTime!==null&&this.planTime!==""){
        let planTime = this.planTime.replace(/-/g,"/")
        serchInfo=`${serchInfo}planTime=${planTime}&`
      }
      serchInfo = `${serchInfo}state=2`
      let {data} = await getTimeCommon(serchInfo)
      if(data){
        this.tableData = data.data
        this.pageParams.total = data.data.length
      }
    },
    // 初始化已完成指令数据
    async getDoneCommons(page,size){
      page = page||1;
      size = size||10;
      let {data} = await getStateCommon(`/2/${this.executeDept}/${page}/${size}`)
      if(data){
        data = data.data
        this.tableData = data.records||this.tableData
        this.pageParams.total = Number(data.total)||this.pageParams.total
      }else{
        this.tableData = []
      }
    },
  },
  created(){
    this.executeDept = JSON.parse(sessionStorage.userinfo).ssdwmc,
    this.getDoneCommons()
  },

};
</script>

<style lang="scss" scoped>
.container {
  padding: 10px 20px;
  .serch_bar {
    margin-bottom: 10px;
    .el-input {
      margin-right: 10px;
    }
    .el-select {
      margin-right: 10px;
      width: 200px;
    }
  }
}
</style>
