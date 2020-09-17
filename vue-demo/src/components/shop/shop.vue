<template>
  <div>
    <div class="shop">
      <router-link
        tag="div"
        :to="'/home/shopinfo/' + item.id"
        class="shop-item"
        v-for="item in shoplist"
        :key="item.id"
      >
        <div class="shop-pic">
          <img :src="item.url" />
        </div>
        <h2 class="shop-value">{{ item.value }}</h2>
        <div class="shop-info">
          <h1 class="shop-name">{{ item.name }}</h1>
          <span class="shop-deal">{{ item.deal }}</span>
        </div>
      </router-link>
    </div>
    <mt-button type="danger" size="large" style="margin-top:7px"
      >加载更多</mt-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      shoplist: [],
    };
  },
  created() {
    this.getShopInfo();
  },
  methods: {
    async getShopInfo() {
      const { data } = await this.$axios({
        url: "http://127.0.0.1:3000/src/data/data.json",
        method: "get",
      });
      //加载更多，且数据不覆盖
      if (data) this.shoplist = this.shoplist.concat(data.shop);
      console.log(this.shoplist);
    },
  },
};
</script>

<style lang="scss" scoped>
.shop {
  display: flex;
  //两列布局，自动换行
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1% 7px;
  .shop-item {
    border: 1px solid white;
    box-shadow: 0 0 4px grey;
    width: 49%;
    margin-top: 1%;
    padding: 2px;
    // 解决商品介绍行数不够导致下面留白
    display: flex;
    // 切换主轴方向
    flex-direction: column;
    justify-content: space-between;
    .shop-pic {
      width: 100%;
      height: 150px;
    }
    .shop-value {
      font-size: 20px;
      color: red;
    }
    .shop-info {
      background-color: #ddd;
      padding: 3px;
      .shop-name {
        font-size: 14px;
      }
      .shop-deal {
        font-size: 10px;
        opacity: 0.6;
      }
    }
  }
}
img {
  width: 100%;
  height: 100%;
}
</style>
