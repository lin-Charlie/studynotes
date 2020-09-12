<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            v-for="(item, i) in navlist"
            :key="i"
            :class="['mui-control-item', i === 0 ? 'mui-active' : '']"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
            >{{ item.name }}</a
          >
        </div>
      </div>
    </div>
    <ul>
      <li v-for="item in photolist" :key="item.id">
        <img v-lazy="item.url" />
      </li>
    </ul>
  </div>
</template>

<script>
// 导入js文件
import mui from "../../../lib/mui/js/mui.js";

export default {
  data() {
    return {
      navlist: [
        { name: "全部" },
        { name: "珊瑚" },
        { name: "男孩" },
        { name: "飞机" },
        { name: "达到" },
        { name: "算法" },
        { name: "安防" },
      ],
      photolist: [
        {
          id: "1",
          url: "http://127.0.0.1:3000/src/img/1.jpg",
        },
        {
          id: "2",
          url: "http://127.0.0.1:3000/src/img/2.jpg",
        },
        {
          id: "3",
          url: "http://127.0.0.1:3000/src/img/8.jpg",
        },
      ],
    };
  },
  //要操作的DOM元素的组件需要在mouted中初始化
  //关闭后还要在钩子函数中初始化，不然元素还没挂载到页面上，mouted时才挂载的

  mounted() {
    // 初始化组件才能实现滚动--（还需要关闭webpack的严格模式）
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005,
      //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    /*关闭严格模式
    cnpm i @babel/plugin-transform-modules-commonjs 
    @babel/plugin-transform-strict-mode -D
    配置
    "plugins": [
      ["@babel/plugin-transform-modules-commonjs", { "strictMode": false }]
    ]*/
  },
};
</script>

<style lang="scss" scoped>
img[lazy="loading"] {
  width: 40px;
  height: 150px;
  margin: auto;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    width: 100%;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
