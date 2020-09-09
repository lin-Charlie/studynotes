<template>
  <!-- template中只能有一个根元素 -->
  <div class="app-content">
    <!-- 头部区域 MintUI -->
    <mt-header fixed title="Vue项目-MintUI">
      <span to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>
    <router-view></router-view>
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
  methods: {},
};
</script>

// scoped为这个组件样式设置作用域,会给子元素添加一个自定义属性data-xxx
<style scoped>
h3 {
  color: aqua;
}
.app-content {
  padding-top: 40px;
}
</style>
