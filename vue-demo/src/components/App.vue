<template>
  <!-- template中只能有一个根元素 -->
  <div class="app-content">
    <!-- 头部区域 MintUI -->
    <mt-header fixed title="Vue项目-MintUI">
      <span to="/" slot="left">
        <mt-button icon="back" @click="prev">返回</mt-button>
      </span>
    </mt-header>
    <transition>
      <router-view></router-view>
    </transition>

    <!-- 底部区域 Mui-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/message">
        <span class="mui-icon mui-icon-email">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">消息</span>
      </router-link>
      <router-link class="mui-tab-item" to="/content">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">空间</span>
      </router-link>
      <router-link class="mui-tab-item" to="/ger">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    prev() {
      // 回退上次路由
      this.$router.go(-1);
    },
  },
};
</script>

// scoped为这个组件样式设置作用域,会给子元素添加一个自定义属性data-xxx
<style scoped>
h3 {
  color: aqua;
}
.app-content {
  padding-top: 40px;
  /* 组件切换时会有两个组件导致页面扩大，需要设置超出部分的隐藏 */
  overflow: hidden;
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
