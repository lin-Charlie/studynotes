<template>
  <div>
    <h3>购买界面</h3>
    <!-- 商品区域 -->
    <div class="mui-card" v-for="(item,i) in shopInfo" :key="i">
      <div class="mui-card-content">
        <div class="mui-card-content-inner goods-item">
          <mt-switch v-model="getSelectFlag[item.id]" @change="changeFlag(item.id)"></mt-switch>
          <img :src="item.url" alt />
          <div class="info">
            <h1>{{item.name}}</h1>
            <div class="goods-info">
              <span class="price">{{item.value}}</span>
              <!-- getNumber[item.id]表示选择商品的数量 -->
              <setbox class="selectbox" :selectNum="getNumber[item.id]" :id="item.id"></setbox>
              <a @click="del(item.id)">删除</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <shopInfo class="tuijian"></shopInfo>
    <!-- 结算区域 -->
    <div class="mui-card zongji">
      <div class="mui-card-content">
        <div class="mui-card-content-inner settle">
          <div class="jisuan">
            <p>总计</p>
            <p>
              一共：
              <span>{{selectNum}}</span>件
              总价：
              <span>{{amoutGoods}}</span>元
            </p>
          </div>
          <mt-button type="danger" class="settle-btn">结算</mt-button>
        </div>
      </div>
      <!-- {{JSON.stringify(getSelectFlag)}} -->
    </div>
  </div>
</template>
<script>
import setbox from "../sub-component/setbox.vue";
import { mapGetters, mapMutations } from "vuex";
import shopInfo from "../shop/shop.vue";
export default {
  data() {
    return {
      shopInfo: [],
    };
  },
  components: {
    setbox,
    shopInfo,
  },
  computed: {
    ...mapGetters([
      "getId",
      "getNumber",
      "getSelectFlag",
      "selectNum",
      "amoutGoods",
    ]),
  },
  created() {
    this.getShopInfo();
  },
  methods: {
    async getShopInfo() {
      const { data } = await this.$axios({
        url: "/src/data/data.json",
        method: "get",
      });
      if (data) {
        for (let i = 0; i < data.shop.length; i++) {
          for (let j = 0; j < this.getId.length; j++) {
            // console.log(this.getId[j]);
            if (data.shop[i].id == this.getId[j]) {
              this.shopInfo.push(data.shop[i]);
            }
          }
        }
        console.log(this.shopInfo);
      }
    },
    // 删除页面上的商品信息
    del(id) {
      this.shopInfo.some((item, i) => {
        if (item.id == id) {
          this.shopInfo.splice(i, 1);
        }
      });
      // 删除内存中的数据
      this.delGoods(id);
      return false;
    },
    //切换按钮的事件，改变商品是否被选中的信息
    changeFlag(id) {
      this.changeFlag(id);
      console.log(this.selectNum);
    },
    ...mapMutations(["delGoods", "changeFlag"]),
  },
};
</script>
<style lang="scss" scoped>
.mui-card-content-inner {
  padding: 10px;
}
.goods-item {
  display: flex;
  img {
    width: 65px;
    margin: 0 5px;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
      font-size: 13px;
    }
    .goods-info {
      display: flex;
      justify-content: space-between;
      .price {
        color: red;
        font-weight: bold;
      }
      .selectbox {
        margin: 0 3px;
      }
    }
  }
}
// 解决被结算卡片挡住的部分显示
.tuijian {
  padding-bottom: 82px;
}
.zongji {
  position: fixed;
  bottom: 50px;
  width: 100%;
  margin: 0;
  .settle {
    display: flex;
    justify-content: space-between;
  }
  .jisuan {
    span {
      color: red;
      font-weight: bold;
    }
  }
}
</style>
