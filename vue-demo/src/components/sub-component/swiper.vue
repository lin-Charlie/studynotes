<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, i) in imageInfo" :key="i">
        <!-- 访问对象中的属性的两种方法：. [] 不同在于[]可以写变量，常量加"" -->
        <img :src="item[imgName]" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  // 获得传递的轮播图数据和路径名称
  props: ["imageInfo", "imgName"],
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 250px;
  .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
    &:nth-child(1) {
      background-color: aqua;
      // background: url("../../../src/img/1.jpg");
      // background-size: cover;
    }
    &:nth-child(2) {
      background-color: rgb(47, 168, 132);
      // background: url("../../../src/img/2.jpg");
      // background-size: cover;
    }
    &:nth-child(3) {
      background-color: rgb(151, 170, 46);
      // background: url("../../../src/img/8.jpg");
      // background-size: cover;
    }
  }
}
</style>
