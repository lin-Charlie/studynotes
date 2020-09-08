<template>
  <!-- template中只能有一个根元素 -->
  <div>
    <h3>这是vue方式创建的组件</h3>

    <router-link to="/login">登录</router-link>
    <router-link to="/reg">注册</router-link>
    <!-- 路由组件占位符 -->
    <router-view></router-view>
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
</style>
