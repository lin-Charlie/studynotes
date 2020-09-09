<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <h3>主界面</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 250px;
  .mint-swipe-item {
    &:nth-child(1) {
      background: url("../../../src/img/1.jpg");
      background-size: cover;
    }
    &:nth-child(2) {
      background: url("../../../src/img/2.jpg");
      background-size: cover;
    }
    &:nth-child(3) {
      background: url("../../../src/img/8.jpg");
      background-size: cover;
    }
  }
}
</style>
