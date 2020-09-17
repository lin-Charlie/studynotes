<template>
  <!-- template中只能有一个根元素 -->
  <div class="app-content">
    <!-- 头部区域 MintUI -->
    <mt-header fixed title="Vue项目-MintUI" class="appheader">
      <span to="/" slot="left" v-show="flag">
        <mt-button icon="back" @click="prev">返回</mt-button>
      </span>
    </mt-header>
    <transition>
      <router-view></router-view>
    </transition>

    <!-- 底部区域 Mui-->
    <nav class="mui-bar mui-bar-tab bottom">
      <router-link class="my-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="my-tab-item" to="/message">
        <span class="mui-icon mui-icon-email">
          <span class="mui-badge" id="numball">0</span>
        </span>
        <span class="mui-tab-label">消息</span>
      </router-link>
      <router-link class="my-tab-item" to="/content">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">空间</span>
      </router-link>
      <router-link class="my-tab-item" to="/ger">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
    };
  },
  methods: {
    prev() {
      // 回退上次路由
      this.$router.go(-1);
    },
  },
  created() {
    if (this.$route.path == "/home") {
      this.flag = false;
    } else {
      this.flag = true;
    }
  },
  // 当在首页时隐藏返回按钮
  watch: {
    "$route.path": function(newval, oldval) {
      if (newval === "/home") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    },
  },
};
</script>

// scoped为这个组件样式设置作用域,会给子元素添加一个自定义属性data-xxx
<style scoped>
.appheader {
  z-index: 99;
}
.bottom {
  z-index: 99;
}
.app-content {
  padding-top: 40px;
  padding-bottom: 50px;
  /* 组件切换时会有两个组件导致页面扩大，需要设置超出部分的隐藏 */
  overflow: hidden;
}
.mui-bar-tab .my-tab-item.mui-active {
  color: #007aff;
}
.mui-bar-tab .my-tab-item {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .my-tab-item .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .my-tab-item .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.my-tab-item {
  touch-action: none;
}
/* 设置动画效果 */
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
/* 离开时方向 */
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  /* 防止页面跳动 */
  position: absolute;
}
/* 启动动画 */
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
