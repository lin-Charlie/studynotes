import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
// 在初始化前先从本地浏览器中取出数据
let shop = window.JSON.parse(localStorage.getItem("shopcar") || "[]");

//创建一个公共的状态对象
const store = new Vuex.Store({
  // state可以看做Vue中的data
  state: {
    // 商品应该存为一个对象{id,number，select，price}
    shopCar: shop,
  },
  mutations: {
    addToCar(state, goods) {
      let flag = false;
      state.shopCar.some((item) => {
        const num1 = Number(item.num);
        const num2 = Number(goods.num);
        // 如果已经存在商品就只添加数量
        if (item.id == goods.id) {
          item.num = num1 + num2;
          flag = true;
        }
      });
      if (!flag) {
        // 没有就直接push整个商品
        state.shopCar.push(goods);
      }
      // 将数据存入本地浏览器中而不是内存中，防止刷新浏览器导致数据丢失
      localStorage.setItem("shopcar", window.JSON.stringify(state.shopCar));
    },
    // 根据组件传来的对象更新商品数量，购物车页面上改变商品数量同时改变store中的数量
    updatedGoodsNum(state, goods) {
      state.shopCar.some((item) => {
        if (item.id == goods.id) {
          item.num = goods.num;
        }
      });
      localStorage.setItem("shopcar", window.JSON.stringify(state.shopCar));
    },
    // 根据id删除商品信息
    delGoods(state, id) {
      state.shopCar.some((item, i) => {
        console.log(id);
        console.log(item.id);
        if (item.id == id) {
          state.shopCar.splice(i, 1);
          return true;
        }
      });
      console.log(state.shopCar);
      localStorage.setItem("shopcar", window.JSON.stringify(state.shopCar));
    },
    // 改变商品是否选中
    changeFlag(state, id) {
      state.shopCar.forEach((item) => {
        if (item.id == id) {
          item.select = !item.select;
        }
      });
      localStorage.setItem("shopcar", window.JSON.stringify(state.shopCar));
    },
  },

  getters: {
    // 购物车的图标
    totalCount(state) {
      let total = 0;
      state.shopCar.forEach((item) => {
        const num1 = Number(item.num);
        total += num1;
        // console.log(total);
      });
      return total;
    },
    // 购物车页面通过这个方法传出的id查询数据显示商品
    getId(state) {
      // console.log(state.shopCar.id);
      let arr = [];
      state.shopCar.forEach((item) => {
        arr.push(item.id);
      });
      return arr;
    },
    // 将商品数量传递给组件显示
    getNumber(state) {
      let num = {};
      state.shopCar.forEach((item) => {
        const num1 = Number(item.num);
        num[item.id] = num1;
      });
      return num;
    },
    // 商品是否被选中
    getSelectFlag(state) {
      let obj = [];
      state.shopCar.forEach((item) => {
        obj[item.id] = item.select;
      });
      return obj;
    },
    // 商品选中的数量
    selectNum(state) {
      let c = 0;
      state.shopCar.forEach((item) => {
        if (item.select) {
          const num = Number(item.num);
          c += num;
        }
      });
      return c;
    },
    // 计算商品总价
    amoutGoods(state) {
      let price = 0;
      state.shopCar.forEach((item) => {
        if (item.select) {
          // 切割字符串去掉￥符号 slice(start,end) end可选
          const value = item.price.slice(1);
          const num = Number(item.num);
          price += num * value;
        }
      });
      return price;
    },
  },
});
export default store;
