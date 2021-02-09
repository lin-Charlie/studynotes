<template>
  <div class="header-container">
    <div class="title">
      <img src="@/assets/logo.png" />
      <div class="text">惠民农业采集系统</div>
    </div>
    <div class="navs">
      <div
        class="item"
        :key="item.id"
        @click="toggleActive(item.route, index, true)"
        :class="{ 'router-link-active': index == currentIndex }"
        v-for="(item, index) in navs"
      >
        <img :src="navImags[item.route]" />
        <span class="header_name" v-text="item.pathname"></span>
      </div>
    </div>
    <div class="info">
      <div class="avator">
        <img
          class="user-img"
          src="@/assets/images/svg/user.svg"
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
export default {
  name: "GislifeHeader",
  data() {
    return {
      navImags: {
        [`/commanage`]: require("@/assets/images/svg/baseInfo.svg"),
        [`/monitor`]: require("@/assets/images/svg/programme.svg"),
        [`/emergency`]: require("@/assets/images/svg/runMaintain.svg"),
        [`/informationserve`]: require("@/assets/images/svg/environment.svg"),
        [`/produceplan`]: require("@/assets/images/svg/baseInfo.svg"),
      },
      currentIndex: 0,
      name: "",
      deptName: "",
      navs: [],
    };
  },
  created() {},
  mounted() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo(){
      let userinfo = JSON.parse(sessionStorage.userInfo)
      this.name = userinfo.name
      this.deptName = userinfo.user_name;
      this.navs = JSON.parse(sessionStorage.navs)
      this.toggleActive(this.$route.path, 0);
    },
    toggleActive(str, index, isRoute) {
      let path = str.split("/")[1],
        len = str.split("/").length,
        active = str;
      // 动态切换当前topbar
      this.navs.forEach((n, i) => {
        let nav = n.route.split("/")[1];
        if (nav == path) {
          index = i;
        }
      });

      // 设置对应index
      this.currentIndex = index;
      let childLen = this.navs[this.currentIndex].child.length;

      // 头部菜单点击默认展示第一个
      if (len === 2 && childLen) {
        active = this.navs[this.currentIndex].child[0].route;
        
      }
      // 左侧菜单存储本
        let asides = {
          parent: this.navs[this.currentIndex].route,
          children: this.navs[this.currentIndex].child,
          title: this.navs[this.currentIndex].pathname,
        };
        sessionStorage.asides = JSON.stringify(asides)

      // 路由跳转
      if (isRoute) {
        this.$router.push(active);
      }
    },
    logout() {
      this.$confirm("此操作将退出当前系统, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
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
    .header_name{
      align-items: center;
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