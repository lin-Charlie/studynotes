<template>
  <div class="gislife-container">
    <div class="gislife-header-container">
      <gislife-header></gislife-header>
    </div>

    <div class="gislife-main-container">
      <gislife-aside v-if="key"></gislife-aside>

      <div class="gislife-layout-main" :class="{ 'layout-main-padding': key }">
        <router-view :key="key" />
      </div>
    </div>
  </div>
</template>

<script>
import GislifeAside from "./components/GislifeAside";
import GislifeHeader from "./components/GislifeHeader";

const HIDE_ASIDES = ["/commanage/index"];
export default {
  name: "Layout",
  components: {
    GislifeAside,
    GislifeHeader,
  },
  data() {
    return {};
  },
  computed: {
    key() {
      return !HIDE_ASIDES.includes(this.$route.path);
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.gislife-container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  background-image: url("~@/assets/images/bg/blue-bg.jpg");
  background-size: 100% 100%;
  overflow: hidden;
  .gislife-header-container {
  }

  .gislife-main-container {
    display: flex;
    flex: 1;
    height: calc(100% - 80px);
    &.bg-color {
      background-color: #eff4f8;
    }
  }

  .gislife-layout-main {
    background: #e8e9ea;
    box-sizing: border-box;
    &.layout-main-padding {
      padding: 10px;
    }
  }
}
</style>