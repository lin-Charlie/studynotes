<template>
  <gislife-dialog
    ref="Dialog"
    :config="dialogConfig"
    @save="saveForm"
    @closed="closed"
  >
    <div class="container" slot="container">
      <el-form
        :inline="true"
        :model="searchParams"
        ref="FormItem"
        class="demo-form-inline"
      >
        <el-form-item label="人员编号：">
          <el-input
            v-model="searchParams.userCode"
            placeholder="人员编号"
          ></el-input>
        </el-form-item>

        <el-form-item label="组织机构：">
          <el-cascader
          v-model="searchParams.unit"
          clearable
          :options="orgList"
          :style="{
            width:'100%'
          }"
          :props="{ checkStrictly: true,value:'wybzm',label:'jgmc',children:'child',emitPath:false}"
        ></el-cascader>
          <!-- <el-select 
            v-model="searchParams.unit" 
            :style="{
                width:'100%'
            }">
                <el-option
                    v-for="item in orgList"
                    :key="item.wybzm"
                    :label="item.jgmc"
                    :value="item.wybzm">
                </el-option>
          </el-select> -->
        </el-form-item>

        <el-form-item>
          <el-button class="common_btn" icon="el-icon-search" @click="search" />
        </el-form-item>
      </el-form>
      <div class="table_wrapper">
        <gislife-table
        :tableData="tableData"
        :init="tableInit"
        v-loading="loading"
        @handleSelectionChange="handleSelectionChange"
        @rowClick="handleCurrentChange"
      ></gislife-table>
      </div>
      <!-- <gislife-table
        :tableData="tableData"
        :init="tableInit"
        v-loading="loading"
        @handleSelectionChange="handleSelectionChange"
        @rowClick="handleCurrentChange"
      ></gislife-table> -->

      <gislife-pagination
        :page-params="pageParams"
        :total="pageParams.total"
        :config="configPage"
      >
      </gislife-pagination>
    </div>

  </gislife-dialog>
</template>

<script>
import {
  getOrgTree
} from "@/api/system.js"
import GislifeTable from "@/components/GislifeTable";
import GislifePagination from "@/components/GislifePagination";
import GislifeForm from "@/components/GislifeForm";
import GislifeDialog from "@/components/GislifeDialog";
export default {
  components: {
    GislifeForm,
    GislifeDialog,
    GislifeTable,
    GislifePagination,
  },
  props: {
    params: {
      type: Object,
    },
  },
  data() {
    return {
      orgList:[],
      dialogConfig: {
        title: "选择人员",
        createDialog: false,
        width: "80%",
      },
      initFormItem: {
        itemList: [
          {
            label: "人员编号",
            key: "userCode",
            placeholder: "人员编号",
            prop: "userCode",
            width: "calc(100% / 2)",
          },
          {
            label: "组织机构",
            key: "unit",
            placeholder: "组织机构",
            prop: "unit",
            width: "calc(100% / 2)",
          },
        ],
        ruleForm: {
          userCode: "",
          unit: "",
        },
      },
      unitData: [],
      searchParams: {
        userCode: "",
        unit: "",
      },
      tableData: [],
      tableInit: {
        options: [
          { label: "姓名", prop: "userName" },
          { label: "组织机构", prop: "unit" },
          { label: "人员编号", prop: "userCode" },
          { label: "身份", prop: "productionIdentity"},
          { label: "性别", prop: "sex",
          format:(row)=>{
            return row.sex=="0"?"男":"女"
          }},
          { label: "身份证号", prop: "idCard" },
        ],
        config: {
          height:300
          // selection: {},
          // reserveSelect: true,
          // rowKey: "id",
          // buttons: {
          //   list: [
          //     {
          //       key: "edit",
          //       label: "编辑",
          //       class: "common_btn",
          //       icon: "el-icon-edit",
          //     },
          //     {
          //       key: "detail",
          //       label: "详情",
          //       class: "orange_btn",
          //       icon: "el-icon-view",
          //     },
          //   ],
          // },
        },
      },
      loading: false,
      pageParams: {
        pageSize: 5,
        pageNum: 1,
        total: 0,
      }, //分页参数
      configPage: {
        pageSizes: [5, 10, 15],
      },
      ids: [],
    };
  },
  methods: {
    closed() {
      // this.tableData = [];
      // this.pageParams.total = 0;
    },
    search() {
      this.getTableList();
    },
    saveForm() {
      this.$emit("save", this.tableInit.config.selection ? this.ids : this.row);
      this.dialogConfig.createDialog = false;
    },
    openDialog(obj) {
      this.dialogConfig.createDialog = true;

      // 获取组织机构
      this.getUnit();

      this.getTableList();
    },
    handleSelectionChange(val) {
      this.ids = val.map((item) => item.id);
    },
    handleCurrentChange(val) {
      this.row = val;
      this.$emit("save", this.row);
    },
    async getUnit() {
      try{
          const {code,data} = await getOrgTree()
          if(code==0){
            this.orgList = [data];
          }
      }catch(error){
          console.log(error)
      }
    },
    async getTableList() {
      try {
        this.loading = true;
        let serch = {}
        serch.pageNo = this.pageParams.pageNum || 1;
        serch.pageSize = this.pageParams.pageSize || 10;
        serch.userCode = this.searchParams.userCode || "";
        serch.orgId = this.searchParams.unit ||"";
        
        const { code, data } = await this.params.api(serch);
        if (code === 0) {
          this.tableData = data.list;
          this.pageParams.total = data.total;
        }
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.warn(error);
      }
    },
  },
  created() {
    // // 设备类型tree
    // this.getTypeTree();
    // // 获取场站
    // this.getUnit();
    // this.getSpecial();
    // this.getTableList();
  },
  watch: {
    pageParams: {
      handler() {
        this.getTableList();
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>