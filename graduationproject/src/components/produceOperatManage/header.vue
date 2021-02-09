<template>
  <div class="header-container">
    <div class="title">
      <img src="@/assets/images/logo.png" />
      <div class="text">生产运行管理系统</div>
    </div>
    <div class="navs">
      <div
        class="item"
        :key="item.cdmc"
        @click="toggleActive(item.ljdz, index)"
        :class="{ 'router-link-active': index == currentIndex }"
        v-for="(item, index) in navs"
      >
        <img
          :src="
            navImags[item.ljdz].path == item.ljdz && navImags[item.ljdz].icon
          "
        />
        <span v-text="item.cdmc"></span>
      </div>
    </div>
    <div class="info">
      <div class="avator">
        <img
          class="user-img"
          src="@/assets/images/svg/user.svg"
          @click="$store.dispatch('aside/getVisible', true)"
        />
      </div>

      <div class="user">
        <div class="name">{{ name }}</div>
        <div class="name">{{ deptName }}</div>
      </div>
      <div class="avator">
        <img
          src="@/assets/images/svg/logout.svg"
          class="logout-img"
          @click="logout"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "pomHeader",
  data() {
    return {
      navImags: {
        "/produceOperatManage/complex": {
          name: "综合展示",
          icon: require("@/assets/images/header/complex.png"),
          path: "/produceOperatManage/complex",
        },
        "/produceOperatManage/produce": {
          name: "生产管理",
          icon: require("@/assets/images/header/produce.png"),
          path: "/produceOperatManage/produce",
        },
        "/index/dispatch": {
          name: "协同调度",
          icon: require("@/assets/images/header/dispatch.png"),
          path: "/index/dispatch",
        },
        "/index/setting": {
          name: "参数设置",
          icon: require("@/assets/images/header/setting.png"),
          path: "/index/setting",
        },      
      },
      navs:[],
      currentIndex: 0,
      name: "",
      deptName: "",
    };
  },
  created() {
    const info = JSON.parse(sessionStorage.userinfo);
    const navInfo = JSON.parse(sessionStorage.navs);
    this.name = info.xm;
    this.deptName = info.ssdwmc;
    this.navs = navInfo.navs;
    // 根据路径切换当前选中导航样式
    this.toggleActive(this.$route.path, 0);
  },
  methods: {
    toggleActive(str, index) {
      let path = str.split("/")[2],
        len = str.split("/").length,
        active = str;
        // console.log(this.navImags[item.ljdz].path == item.ljdz)
      this.navs.forEach((n, i) => {
        let nav = n.ljdz.split("/")[2];
        if (nav == path) {
          index = i;
        }
      });

      this.currentIndex = index;
        

      if (len <= 3) {
        // 非综合展示，默认打开下级第一个
        if (path === "complex") {
          active = str;
        } else {
          active = this.navs[this.currentIndex].child[0].ljdz;
        }
      }

      // 左侧菜单存储本地
      sessionStorage.asides = JSON.stringify({
        parent: this.navs[this.currentIndex].ljdz,
        child: this.navs[this.currentIndex].child,
      });

      // 路由跳转
      this.$router.push(active);
    },
    navClick(nav, index) {
      // 根据路径切换当前选中导航样式
      this.toggleActive(nav.ljdz, index);
    },
    logout() {
      this.$confirm("此操作将退出当前系统, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        // sessionStorage.clear();
        this.$router.replace("/login");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  height: 80px;
  color: #fff;
  padding: 0 20px;
  display: flex;
  // background-image: url("~@/assets/images/bg/blue-bg.jpg");

  .title {
    display: flex;
    justify-items: center;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
    .text {
      font-size: 30px;
    }
  }

  .navs {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    width: 480px;
    font-size: 20px;
    margin-right: 160px;
    .item {
      display: flex;
      flex-direction: column;
      justify-items: center;
      align-items: center;
      width: 120px;
      height: 80px;
      cursor: pointer;
      &.router-link-active {
        background: #568ddf;
      }
      img {
        max-width: 45px;
        height: 38px;
        margin-top: 7px;
      }
    }
  }

  .info {
    display: flex;
    align-items: center;
    font-size: 16px;
    .avator {
      margin: 0 20px;
      cursor: pointer;

      .user-img {
        width: 30px;
        height: 30px;
      }
      .logout-img {
        width: 36px;
        height: 36px;
      }
    }
  }
}
</style>