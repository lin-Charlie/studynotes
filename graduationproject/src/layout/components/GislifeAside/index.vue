<template>
  <div
    class="aside-container"
    :style="{ width: (!isCollapse && '237px') || 'auto' }"
  >
    <el-menu
      :router="true"
      class="menu-container"
      :collapse="isCollapse"
      :default-active="$route.path"
      :collapse-transition="false"
    >
      <div class="switch-menu">
        <span slot="title" v-show="!isCollapse">{{ title }}</span>
        <i class="el-icon-menu" @click="isCollapse = !isCollapse"></i>
      </div>
      <div
        v-for="(item, index) in asides.children"
        :key="index"
      >
        <!-- <el-submenu
        v-if="item.children.length > 0"
        :index="item.route"
        :key="index"
        >
          <template slot="title">
            <img
            :src="item.icon"
            class="menu-icon"
            :class="{ 'is-active': $route.meta.activePath == item.ljdz }"
          />
            <span>{{item.pathname}}</span>
          </template>
          <el-menu-item
            :index="item.route"
            v-for="(item, index) in item.children"
            :key="index"
            :class="{ 'is-active': $route.path == item.route }"
          >
            <span slot="title">{{ item.pathname }}</span>
          </el-menu-item>
        </el-submenu> -->
        <el-menu-item
          :index="item.route"
          :key="index"
          :class="{ 'is-active': $route.path == item.route }"
        >
          <img
            :src="MENUS[item.route]"
            class="menu-icon"
            :class="{ 'is-active': $route.meta.activePath == item.ljdz }"
          />
          <span slot="title">{{ item.pathname }}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
const BASEPATH = "produceOperatManage";
export default {
  name: "GislifeAside",
  data() {
    return {
      isCollapse: false,
      MENUS: {
        [`/monitor/landinfo`]: require("@/assets/images/svg/baseInfo/deviceTypeManage.svg"),
        [`/monitor/soildata`]: require("@/assets/images/svg/baseInfo/deviceLedgerManage.svg"),
        [`/monitor/sensorinfo`]: require("@/assets/images/svg/runMaintain/dayManage.svg"),
        [`/emergency/sensorfault`]: require("@/assets/images/svg/baseInfo/dataDictionary.svg"),
        [`/emergency/soilcondition`]: require("@/assets/images/svg/programme/overhaulManage.svg"),
        [`/informationserve/datareport`]: require("@/assets/images/svg/programme/definiteCheckOrder.svg"),
        [`/informationserve/trainplan`]: require("@/assets/images/svg/programme/dayOrder.svg"),
        [`/produceplan/dailyreport`]: require("@/assets/images/svg/programme/planOrder.svg"),
        [`/produceplan/reportlog`]: require("@/assets/images/svg/programme/faultOrder.svg"),
        [`/produceplan/issued`]: require("@/assets/images/svg/runMaintain/initialManage.svg"),

        [`/runMaintain/monthManage`]: require("@/assets/images/svg/runMaintain/monthManage.svg"),
        [`/runMaintain/faultManage`]: require("@/assets/images/svg/runMaintain/faultManage.svg"),
        [`/monitor/deviceCount`]: require("@/assets/images/svg/monitor/deviceCount.svg"),
        [`/monitor/deviceAge`]: require("@/assets/images/svg/monitor/deviceAge.svg"),
        [`/monitor/deviceFrequency`]: require("@/assets/images/svg/monitor/deviceFrequency.svg"),
        [`/monitor/deviceIntact`]: require("@/assets/images/svg/monitor/deviceIntact.svg"),
      },
      asides: [],
      isShow: false,
      activePath: "",
      title: "",
      asideList:[]
    };
  },
  created() {
    this.init();
  },
  methods: {
    init(){
      this.asides = JSON.parse(sessionStorage.asides);
      this.title = this.asides.title
    }
  },
  computed: {
    // asides(){
    //   let nav = this.asideList
    //   let permission = nav.children;
    //   if(!permission || !Array.isArray(permission)){
    //     return []
    //   }
    //   this.title = nav.title;
      // for (let [index, elem] of permission.entries()) {
      //   permission[index].icon = this.MENUS[elem.route] || require("@/assets/images/svg/runMaintain/initialManage.svg");
      //   if(elem.children.length>0){
      //     for (let [idx, item] of elem.children.entries()) {
      //       elem.children[idx].icon = this.MENUS[item.route] || require("@/assets/images/svg/runMaintain/initialManage.svg");
      //     }
      //   }
      // }
      // return permission
    // },
    // ...mapState({
    //   asideList: state => state.auth.asides
    // })
  },
  watch: {
    $route:{
      handler(newVal){
        this.init()
      },
      deep:true
    }
  },
};
</script>

<style lang="scss" scoped>
.aside-container {
  // height: 100%;
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
    /deep/.el-submenu__title{
      font-size: 18px;
      padding-left: 30px !important;
      .el-submenu__icon-arrow{
        font-size: 20px;
      }
    }
    .el-menu-item {
      padding-left: 30px !important;
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
    .el-submenu{
      .el-submenu__title{
        padding-left: 20px !important;
      }
      .el-menu-item{
        padding-left: 40px !important;
      }
    }
  }
}
</style>