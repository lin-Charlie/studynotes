<template>
  <div
    class="aside-container"
    :style="{ width: (!isCollapse && '237px') || 'auto' }"
  >
    <el-menu
      :router="true"
      class="menu-container"
      :collapse="isCollapse"
      :default-active="$route.meta.activePath"
      :collapse-transition="false"
    >
      <div class="switch-menu">
        <span slot="title" v-show="!isCollapse">生产管理</span>
        <i class="el-icon-menu" @click="isCollapse = !isCollapse"></i>
      </div>
      <el-menu-item
        :index="item.ljdz"
        v-for="(item,index) in asides"
        :key="index"
      >
        <img
          :src="item.icon"
          class="menu-icon"
          :class="{ 'is-active': $route.meta.activePath == item.ljdz }"
        />
        <span slot="title">{{ item.cdjc }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";

const BASEPATH = "produceOperatManage";
export default {
  data() {
    return {
      isCollapse: false,
      MENUS: {
        [`/${BASEPATH}/produce/producePlan`]: require("@/assets/images/svg/producePlan.svg"),
        [`/${BASEPATH}/produce/dataGather`]: require("@/assets/images/svg/dataGather.svg"),
        [`/${BASEPATH}/produce/dataGatherMonitor`]: require("@/assets/images/svg/dataGatherMonitor.svg"),
        [`/${BASEPATH}/produce/produceReport`]: require("@/assets/images/svg/produceReport.svg"),
        [`/${BASEPATH}/produce/complexView`]: require("@/assets/images/svg/complexView.svg"),
        [`/${BASEPATH}/produce/ondutyManage`]: require("@/assets/images/svg/ondutyManage.svg"),
        [`/${BASEPATH}/produce/materialManage`]: require("@/assets/images/svg/materialManage.svg"),
        [`/index/dispatch/send`]: require("@/assets/images/svg/send.svg"),
        [`/index/dispatch/todo`]: require("@/assets/images/svg/todo.svg"),
        [`/index/dispatch/done`]: require("@/assets/images/svg/done.svg"),
        [`/${BASEPATH}/setting/alarm`]: require("@/assets/images/svg/alarmSetting.svg"),
        [`/${BASEPATH}/setting/reportTime`]: require("@/assets/images/svg/reportTime.svg"),
        [`/${BASEPATH}/setting/report`]: require("@/assets/images/svg/report.svg"),
        [`/${BASEPATH}/setting/affair`]: require("@/assets/images/svg/affair.svg"),
        [`/index/setting/dataDictionary`]: require("@/assets/images/svg/dataDictionary.svg"),
      },
      asides: [],
      isShow: false,
      activePath: "",
    };
  },
  created() {
    this.getAsides();
  },
  methods: {
    getAsides() {
      let nav = JSON.parse(sessionStorage.asides);
      let permission = nav.child;

      // for (let [index, elem] of permission.entries()) {
      //   permission[index].icon = this.MENUS[elem.ljdz];
      // }
      for (let [index, elem] of permission.entries()) {
        permission[index].icon = this.MENUS[elem.ljdz];
      }

      this.asides = permission;
    },
  },
  computed: {},
  watch: {
    $route: {
      handler(newVal) {
        this.isShow = false;
        if (newVal.path == "/produceOperatManage/complex") {
          return;
        }

        this.getAsides();
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.aside-container {
  .menu-container {
    height: 100%;
    color: #343434;
    font-size: 18px;

    .switch-menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      height: 56px;
      font-size: 18px;
      background: #fff;
      color: #187ece;
      i {
        cursor: pointer;
      }
    }

    .el-menu-item {
      padding-left: 40px !important;
      font-size: 18px;
      &.is-active {
        color: #187ece;
        background: #dff1ff;
      }

      img {
        &.menu-icon {
          width: 20px;
          height: 20px;
          margin-right: 5px;
        }
        &.is-active {
          filter: invert(39%) sepia(34%) saturate(1859%) hue-rotate(173deg)
            brightness(100%) contrast(93%);
        }
      }
    }
  }
}
</style>