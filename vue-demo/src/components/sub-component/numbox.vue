<template>
  <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      value="1"
      ref="nubox"
      @change="countChange"
    />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../../lib/mui/js/mui.js";
export default {
  data() {
    return {};
  },
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    countChange() {
      const val = this.$refs.nubox.value;
      // 向父组件传递参数
      this.$emit("func", val);
      console.log(val);
    },
  },
};
</script>

<style lang="scss" scoped></style>
