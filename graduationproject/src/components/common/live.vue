<template>
  <div :id="`video${info.id}`" class="video-container"></div>
</template>

<script>
import EZUIKit from "ezuikit-js";
export default {
  data() {
    return {
      player: null,
    };
  },
  props: {
    info: {
      type: Object,
      default: {},
    },
    type: {
      type: String,
      default: "live",
    },
    startTime: {
      type: String,
      default: "",
    },
    endTime: {
      type: String,
      default: "",
    },
    width: {
      // type: Number,
      // default: 100,
    },
    height: {
      //   type: Number,
      //   default: 300,
    },
  },
  created() {},
  mounted() {
    this.playerEZOPEN();
  },
  methods: {
    handleLive() {
      // 监控
      let that = this;

      this.player = new EZUIKit.EZUIKitPlayer({
        autoplay: true,
        id: `video${that.info.id}`,
        accessToken: that.info.accessToken,
        url: `ezopen://open.ys7.com/${
          that.info.deviceSerial || that.info.deviceSerialNumber
        }/1.hd.${that.type}`,
        // accessToken:
        //   "at.csxgz4448c0a36b777l9a2ke3h7a0nhy-26jzhxl3v3-1eaosdm-ew5gnmqcv",
        // url: "ezopen://open.ys7.com/203751922/1.hd.live",
        width: that.width,
        height: that.height,
      });
    },
    handleRec() {
      // 回放
      let that = this;

      this.player = new EZUIKit.EZUIKitPlayer({
        autoplay: true,
        id: `video${that.info.id}`,
        accessToken: that.info.accessToken,
        url: `ezopen://open.ys7.com/${
          that.info.deviceSerial || that.info.deviceSerialNumber
        }/1.hd.${that.type}?begin=${that.startTime}&begin=${that.endTime}`,
        width: that.width,
        height: that.height,
      });
    },
    playerEZOPEN() {
      if (this.type === "live") {
        this.handleLive();
      } else {
        this.handleRec();
      }
    },
  },
  watch: {
    info(newVal, oldVal) {
      //   console.log(this.player);
      //   this.playerEZOPEN();
    },
  },
};
</script>

<style lang="scss" scoped>
.video-container {
  width: 100%;
  height: 100%;
}
// /deep/#EZUIKitPlayer-video-container {
//   height: 100% !important;
//   width: 100% !important;
// }
</style>