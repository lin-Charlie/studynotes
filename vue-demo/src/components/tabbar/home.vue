<template>
  <div>
    <!-- 通过属性绑定父子组件传递参数 -->
    <swiper :imageInfo="imageInfo" :imgName="'url'"></swiper>
    <router-view></router-view>
    <link
      rel="stylesheet"
      href="//at.alicdn.com/t/font_2059638_62wtfjp05tc.css"
    />
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
        <router-link to="/home/shop">
          <span class="mui-icon mui-icon-gear"></span>
          <div class="mui-media-body">Setting</div>
        </router-link>
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
import swiper from "../sub-component/swiper.vue";
export default {
  data() {
    return {
      imageInfo: [], //请求得到的数据
    };
  },
  // 注册子组件
  components: {
    swiper,
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
      if (data) this.imageInfo = data.img;
      console.log(this.imageInfo);
    },
  },
};
</script>

<style lang="scss" scoped>
.mui-grid-view {
  li {
    img {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
