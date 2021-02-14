<template>
  <div class="container">
    <div class="search-wrapper">
      <div class="params">
        <el-input
        class="marginRight"
        v-model="landName"
        clearable
        placeholder="土地名称"
        >
        </el-input>
        <el-date-picker
        class="marginRight"
        type="daterange"
        v-model="date"
        value-format="yyyy-MM-dd"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"></el-date-picker>
        <el-button @click="search" class="common_btn"> 搜索 </el-button>
      </div>
      <div class="btns">
        <el-button @click="openDialog('add', '新增记录')" class="common_btn"
          >新增记录</el-button
        >
        <el-button @click="deleteConfirm" class="gray_btn">删除</el-button>
      </div>
    </div>
    <div class="tab-wrapper">
      <gislife-table
      :tableData="tableData"
      :init="tableInit"
      v-loading="loading"
      @handleCommand="handleCommand"
      @handleSelectionChange="handleSelectionChange"
    >
    </gislife-table>
    </div>
    <div class="page-wrapper">
      <gislife-pagination
      :page-params="pageParams"
      :total="pageParams.total"
    ></gislife-pagination>
    </div>
    <div class="dialog">
      <land-info-dialog @save="getTableData" ref="landInfoDialog"></land-info-dialog>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import { landInfoTable } from "@/config/table/monitor";
import GislifePagination from "@/components/GislifePagination";
import GislifeTable from "@/components/GislifeTable";
import landInfoDialog from "./dialog/landinfoDialog.vue"
export default {
  components: {
    GislifeTable,
    GislifePagination,
    landInfoDialog,
  },
  data() {
    return {
      date:'',
      landName:'',
      tableData: [],
      deleteList: [],
      tableInit: landInfoTable,
      loading: false,
      pageParams: {
        pageSize: 10,
        pageNum: 1,
        total:0
      },
    };
  },
  created() {
    // this.getTableData();
  },
  methods: {
    search() {
      this.pageParams.pageNum = 1;
      this.pageParams.pageSize = 10;
      this.getTableData();
    },
    handleSelectionChange(val) {
      this.selectIds = val.map((item) => item.id);
    },
    handleCommand(type, row, index) {
      switch (type) {
        case "edit":
          this.openDialog(type, "修改", row, index);
          break;
        case "detail":
          this.openDialog(type, "详情", row, index);
          break;
      }
    },
    handleSelectionChange(val) {
      this.deleteList = val.map((item) => item.id);
    },
    openDialog(type, title, row, index) {
      let obj = { type, title, row, index };
      this.$refs.landInfoDialog.openDialog(obj);
    },
    deleteConfirm(row, index) {
      if (!this.deleteList.length) {
        return this.$message.warning("请选择要删除的数据!");
      }

      this.$confirm("确认删除数据？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.delete(row);
      });
    },
    async getTableData() {
      try {
        this.loading = true;

        // const { pageNum: pageNo, pageSize } = this.pageParams;
        // this.searchParams.happendTimeStart = (this.date&&this.date[0])||""
        // this.searchParams.happendTimeEnd = (this.date&&this.date[1])||""
        // const { code, data } = await polluteAccidentPage({
        //   pageNo,
        //   pageSize,
        //   ...this.searchParams,
        // });
        if (code === 0) {
          this.tableData = data.list;
          this.pageParams.total = data.total;
        }
        this.loading = false;
      } catch (error) {
        this.loading = false;
      }
    },
    async delete() {
      console.log(this.deleteList)
      try {
        const { code, data } = await polluteAccidentdelete(this.deleteList);
        if (code === 0) {
          this.$message.success("删除成功");
          this.getTableData();
        }
      } catch (error) {
        this.$message.warning("删除失败！");
        console.warn(error);
      }
    },
  },
  watch: {
    pageParams: {
      handler() {
        // this.getTableData();
      },
      deep: true,
    },
  },
};
</script>

<style lang='scss' scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}
</style>
