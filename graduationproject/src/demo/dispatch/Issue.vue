<template>
  <div class="container">
    <addDialog :options="addOptions"></addDialog>
    <trackDialog :options="trackOptions"></trackDialog>
    <endDialog :options="endOptions"></endDialog>
    <div class="serch_bar">
      <div class="serch_box">
        <el-date-picker
          v-model="createTime"
          value-format="yyyy-MM-dd HH:mm"
          format="yyyy-MM-dd HH:mm"
          type="datetime"
          placeholder="创建时间"
          clearable
        >
        </el-date-picker>
        <el-date-picker
          v-model="planTime"
          type="datetime"
          value-format="yyyy-MM-dd HH:mm"
          format="yyyy-MM-dd HH:mm"
          placeholder="有效时间"
          clearable
        >
        </el-date-picker>
        <el-select v-model="selectVal" placeholder="状态" clearable>
          <el-option
            v-for="(item, index) in selectList"
            :key="index"
            :label="item"
            :value="index"
          >
            <span style="color: rgba(0,0,0,0.3); font-size: 10px">{{
              item
            }}</span>
          </el-option>
        </el-select>
        <el-button
          type="primary"
          icon="el-icon-search"
          @click="serchDis"
        ></el-button>
      </div>
      <el-button type="primary" plain @click="isDialog">添加指令+</el-button>
    </div>
    <div class="table_box">
      <commonTable :init="tableInit" :tableData="tableData">
        <template slot="operate" slot-scope="scope">
          <el-button type="primary" @click="trackIssue(scope.row)"
            >跟踪</el-button
          >
          <el-button
            type="info"
            v-if="scope.row.state == 0"
            @click="endIssue(scope.row)"
            >终止</el-button
          >
        </template>
      </commonTable>
    </div>
    <pagination :pageParams="pageParams" :total="pageParams.total"></pagination>
  </div>
</template>

<script>
import commonTable from "@/components/table/commonTable.vue";
import pagination from "@/components/table/pagination.vue";
import addDialog from "@/components/Dialog/addDialog.vue";
import trackDialog from "@/components/Dialog/trackDialog.vue";
import endDialog from "@/components/Dialog/endDialog.vue";
import {getCommon,getTimeCommon,getUseTime} from "@/api/dispatch/index.js"
import {getFile} from "@/api/dispatch/dialog.js"
export default {
  data() {
    return {
      selectList: ["指令下达", "指令终止", "已完成"],
      selectVal: "",
      createTime: "",
      planTime: "",
      // 弹窗配置
      addOptions: {
        dialogVisible: false,
        tittle: "新增指令",
        ruleForm: {
          name: "",
          note: "",
          planTime: "",
          completeTime: "",
          createTime: "",
          creator: "",
          deleteStatus: 0,
          executeDept:"" ,
          executePerson:"" ,
          explain: "",
          id: "",
          orderUnit: "",
          state: 0
        },
        rules: {
          name: [
            { required: true, message: "指令名称不能为空", trigger: "blur" },
          ],
          note: [
            { required: true, message: "指令描述不能为空", trigger: "blur" },
          ],
          planTime: [
            { required: true, message: "请选择完成时间", trigger: "change" },
          ],
          executeDept: [
            { required: true, message: "执行场站不能为空", trigger: "change" },
          ],
        },
      },
      trackOptions: {
        dialogVisible: false,
        title: "指令跟踪",
        details: {
          name: "",
          creatorNote: "",
          createTime: "",
          planTime: "",
          note: "",
          completeTime: "2020-12-04 18:39",
          //完成/终止人
          executePersonNote: "",
          //完成/终止说明
          explain: "",
          state: "",
          //预览数据
          list:[]
        },
      },
      endOptions: {
        dialogVisible: false,
        title: "指令终止",
        details: {
          name: "123",
          id:"",
          creatorNote: "生产测试用户",
          createTime: "2020-12-04 17:39",
          planTime: "2020-12-04 17:39",
          note: "12315",
          state: 0,
        },
        ruleForm: {
          explain: "",
        },
        rules: {
          explain: [
            {
              required: true,
              message: "请输入终止描述",
              trigger: "blur",
            },
          ],
        },
      },
      //表格配置
      tableInit: {
        options: [
          { label: "指令名称", prop: "name" },
          { label: "执行场站", prop: "executeDept" },
          { label: "创建时间", prop: "createTime" },
          { label: "创建人", prop: "creator" },
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
      tableData: [
        {
          completeTime: "2020-12-04 17:40",
          createTime: "2020-12-04 17:39",
          creator: "生产测试用户1",
          executePerson: "95452db3-3765-4fc6-8d70-fc8db3d887e8",
          executePersonNote: "中江首站班长",
          explain: "123213",
          id: "7fb27c740e2ceeba2f3108e58fe53098",
          list: "",
          name: "123",
          note: "213",
          orderUnit: "",
          planTime: "2020-12-04 17:39",
          state: 2,
          stationId: "58ca0d19-34ca-43e4-941e-8b60b9d4e319",
          executeDept: "中江首站",
        },
        {
          completeTime: "2020-12-04 17:40",
          createTime: "2020-12-04 17:39",
          creator: "生产用户",
          executePerson: "95452db3-3765-4fc6-8d70-fc8db3d887e8",
          executePersonNote: "班长11",
          explain: "123213",
          id: "7fb27c740e2ceeba2f3108e58fe53098",
          list: "",
          name: "123",
          note: "213",
          orderUnit: "",
          planTime: "2020-12-04 17:39",
          state: 1,
          stationId: "58ca0d19-34ca-43e4-941e-8b60b9d4e319",
          executeDept: "中江首站",
        },
        {
          completeTime: "2020-12-04 17:40",
          createTime: "2020-12-04 17:39",
          creator: "生产测试用户2",
          executePerson: "95452db3-3765-4fc6-8d70-fc8db3d887e8",
          executePersonNote: "中江首站班长",
          explain: "123213",
          id: "7fb27c740e2ceeba2f3108e58fe53098",
          list: "",
          name: "123",
          note: "21321",
          orderUnit: "",
          planTime: "2020-12-04 17:39",
          state: 0,
          stationId: "58ca0d19-34ca-43e4-941e-8b60b9d4e319",
          executeDept: "中江首站",
        },
      ],
      pageParams: {
        pageNum: 1,
        pageSize: 10,
        total: 60,
      },
    };
  },
  components: {
    commonTable,
    pagination,
    addDialog,
    trackDialog,
    endDialog,
  },
  created() {
    this.getInstructData();
  },
  methods: {
    isDialog() {
      this.addOptions.dialogVisible = true;
    },
    // 初始化弹窗数据
    async trackIssue(row) {
      let {data} = await getUseTime(row.id)
      this.trackOptions.details = row;
      this.trackOptions.details.useTime = data
      // 文件或图片列表数据
      getFile(row.id).then((res)=>{
        this.trackOptions.details.list = res.data||[]
        this.trackOptions.dialogVisible = true
      }).catch((err)=>{
        console.log(err)
      })
    },
    endIssue(row) {
      this.endOptions.dialogVisible = !this.endOptions.dialogVisible;
      console.log(row)
      this.endOptions.details = row;
    },
    // 分类指令查询
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
      serchInfo = `${serchInfo}state=${this.selectVal}`
      let {data} = await getTimeCommon(serchInfo)
      if(data){
        this.tableData = data.data
        this.pageParams.total = data.data.length
      }
    },
    // 获取指令信息,初始化数据
    async getInstructData(page, size) {
      // 获取全部
      page = page||1;
      size = size||10;
      let {data} = await getCommon(`${page}/${size}`)
      if(data.data.records){
        data = data.data
        this.tableData = data.records||this.tableData
        this.pageParams.total = Number(data.total)||this.pageParams.total
      }else{
        this.tableData = []
      }
    },
  },
  watch: {
    "pageParams.pageNum": {
      handler(newVal, oldVal) {
        this.getInstructData(newVal, this.pageParams.pageSize);
      },
    },
    "pageParams.pageSize": {
      handler(newVal, oldVal) {
        this.getInstructData(this.pageParams.pageNum, newVal);
      },
    },
    // 监听弹窗刷新数据
    "addOptions.dialogVisible":{
      handler(newVal, oldVal) {
        if(newVal==false){
          this.getInstructData()
        }
      },
    },
    "endOptions.dialogVisible":{
      handler(newVal, oldVal) {
        if(newVal==false){
          console.log(newVal)
          this.getInstructData()
        }
      },
    }
  },
};
</script>

<style lang="scss" scoped>
/deep/ .el-button--primary.is-plain:hover {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
}
.container {
  padding: 10px 20px;
  .serch_bar {
    display: flex;
    justify-content: space-between;
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
