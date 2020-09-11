<template>
  <div>
    <!-- 使用props的传参 -->
    <h3>下载详情---{{id}}</h3>
    <!-- 不用props的传参 -->
    <!-- <h3>下载详情---{{$route.params.id}}</h3> -->

    <!-- 引用评论子组件 -->
    <!-- 父组件给子组件通过数据绑定传值 -->
    <Comment :NewsId="id"></Comment>
  </div>
</template>
<script>
// 导入评论子组件
import Comment from "../sub-component/comment.vue";

export default {
  data() {
    return {};
  },
  props: ["id"],
  // 注册子组件
  components: {
    Comment,
  },
};
</script>

<style lang="scss" scoped>
</style>