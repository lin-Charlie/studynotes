<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, i) in imgInfo" :key="i">
        <img :src="item.url" alt />
      </mt-swipe-item>
    </mt-swipe>
    <router-view></router-view>
    <link rel="stylesheet" href="//at.alicdn.com/t/font_2059638_62wtfjp05tc.css" />
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <i class="iconfont icon-download"></i>
          <div class="mui-media-body">下载</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/download">
          <img src="/src/img/download.png" alt />
          <div class="mui-media-body">location</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/search">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">Search</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-gear"></span>
          <div class="mui-media-body">Setting</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-info"></span>
          <div class="mui-media-body">about</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-more"></span>
          <div class="mui-media-body">more</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgInfo: [], //请求得到的数据
    };
  },
  created() {
    this.getImg();
  },
  methods: {
    async getImg() {
      const { data } = await this.$axios({
        //设置请求信息
        url: "/src/data/data.json",
        method: "get",
        // params: {},
      });
      console.log(data);
      if (data) this.imgInfo = data.img;
      console.log(this.imgInfo);
    },
  },
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
.mui-grid-view {
  li {
    img {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
