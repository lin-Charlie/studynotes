<template>
  <div>
    <h3>这是商品描述界面--{{ id }}</h3>
    <h1>{{ shopList.tittle }}</h1>
    <hr />
    <div class="content">
      <p>{{ shopList.message }}</p>
      <img :src="shopList.url" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopList: [],
    };
  },
  props: ["id"],
  created() {
    this.getShopList();
  },
  methods: {
    async getShopList() {
      const { data } = await this.$axios({
        url: "/src/data/data.json",
        method: "get",
      });
      if (data) {
        for (let i = 0; i < data.photolist.length; i++) {
          if (data.photolist[i].id == this.id) {
            // console.log(data.photolist[i]);
            this.shopList = data.photolist[i];
          }
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  img {
    width: 100%;
  }
}
</style>
