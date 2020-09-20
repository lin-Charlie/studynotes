<template>
  <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9" style="height:25px;">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      :value="selectNum"
      ref="nubox"
      @change="countChange"
    />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../../lib/mui/js/mui.js";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      shopInfo: {},
    };
  },
  props: ["selectNum", "id"],
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    countChange() {
      // 监听事件，获取最新的数量，并更新到store中的shopCar
      const val = this.$refs.nubox.value;
      this.shopInfo = { id: this.id, num: val };
      this.updatedGoodsNum(this.shopInfo);
    },
    ...mapMutations(["updatedGoodsNum"]),
  },
};
</script>

<style lang="scss" scoped></style>
