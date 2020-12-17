<template>
  <div class="pom-container">
    <div class="pom-header-container">
      <pom-header></pom-header>
    </div>

    <div class="pom-main-container" :class="{ 'bg-color': isComplex }">
      <pom-aside v-if="isComplex"></pom-aside>

      <div class="pom-layout-main" :class="{ 'bg-img': !isComplex }">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import pomHeader from "@/components/produceOperatManage/header.vue";
import pomAside from "@/components/produceOperatManage/aside.vue";
export default {
  data() {
    return {
      isShow: false,
    };
  },
  components: { pomHeader, pomAside },
  computed: {
    isComplex() {
      return this.$route.path != "/produceOperatManage/complex";
    },
  },
};
</script>

<style lang="scss">
.pom-container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  background-image: url("~@/assets/images/bg/blue-bg.jpg");
  background-size: 100% 100%;
  overflow: hidden;
  .pom-header-container {
  }

  .pom-main-container {
    display: flex;
    flex: 1;
    height: calc(100% - 80px);

    &.bg-color {
      background-color: #eff4f8;
    }
  }

  .pom-layout-main {
    // &.bg-img {
    //   background-image: url("~@/assets/images/bg/mian-bg.png");
    //   background-size: 100% 100%;
    // }
  }
}
</style>