<template>
  <div>
    <h3>商品详情---{{ id }}</h3>
    <!-- 钩子函数动画都是通过事件绑定机制绑定到transtion上 -->
    <transition
      @before-enter="beforeEnter"
      @enter="Enter"
      @after-enter="afterEnter"
    >
      <div class="ball" v-show="flag"></div>
    </transition>

    <!-- 轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :imageInfo="imageInfo" :imgName="'url'"></swiper>
        </div>
      </div>
    </div>
    <!-- 购买界面 -->
    <div class="mui-card">
      <div class="mui-card-header">
        {{ shopInfo.name }}
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            市场价<span style="margin-right:10px;text-decoration: line-through;"
              >￥6666</span
            >
            销售价<span style="font-size:16px;color:red;font-weight:bold">
              {{ shopInfo.value }}</span
            >
          </p>
          <p>购买数量：<numbox @func="getSelectNum"></numbox></p>
          <mt-button type="primary" size="small">立即购买</mt-button>
          <mt-button type="danger" size="small" @click="addShop"
            >加入购物车</mt-button
          >
        </div>
      </div>
    </div>
    <!-- 商品介绍 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:</p>
          <p>库存情况:</p>
          <p>上线时间:</p>
        </div>
      </div>
      <div class="mui-card-footer introduce">
        <!-- 编程式导航：使用JS代码实现跳转 -->
        <mt-button type="primary" size="large" plain @click="goDec"
          >图文详情</mt-button
        >
        <mt-button type="danger" size="large" plain>商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "../sub-component/swiper.vue";
import numbox from "../sub-component/numbox.vue";
export default {
  data() {
    return {
      imageInfo: [],
      shopInfo: [],
      flag: false,
      selectNum: 0,
    };
  },
  components: {
    swiper,
    numbox,
  },
  props: ["id"],
  created() {
    this.getImg();
    this.getInfo();
  },
  methods: {
    async getImg() {
      const { data } = await this.$axios({
        //设置请求信息
        url: "/src/data/data.json",
        method: "get",
        // params: {},
      });
      if (data) this.imageInfo = data.img;
    },
    async getInfo() {
      const { data } = await this.$axios({
        //设置请求信息
        url: "/src/data/data.json",
        method: "get",
        // params: {},
      });
      if (data)
        for (let i = 0; i < data.shop.length; i++) {
          if (data.shop[i].id == this.id) {
            this.shopInfo = data.shop[i];
          }
        }
    },
    goDec() {
      // 编程式导航
      this.$router.push("/home/shopdec/" + this.id);
    },
    addShop() {
      this.flag = !this.flag;
    },
    beforeEnter(el) {
      // 入场动画之前小球的初始状态
      el.style.transform = "translate(0,0)";
    },
    Enter(el, done) {
      // 入场动画结束后小球的终止状态
      el.offsetWidth;
      const ballPosi = el.getBoundingClientRect();
      const numPosi = document
        .getElementById("numball")
        .getBoundingClientRect();
      const left = numPosi.left - ballPosi.left;
      const top = numPosi.top - ballPosi.top;
      el.style.transform = "translate(" + left + "px," + top + "px)";
      el.style.transition = "all 1s ease";
      done();
    },
    afterEnter(el) {
      // 入场动画结束后的回调函数
      this.flag = !this.flag;
    },
    // 子组件定义的方法
    getSelectNum(num) {
      // console.log(num);
      this.selectNum = num;
    },
  },
};
</script>

<style lang="scss" scoped>
.ball {
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  left: 146px;
  top: 468px;
  z-index: 99;
  // 通过动画位移
  // transform: translate(146px, 857px);
}
.introduce {
  display: flex;
  flex-direction: column;
  //+排除第一个选择后面所有
  button + button {
    margin-top: 15px;
  }
}
</style>
