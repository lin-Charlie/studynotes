<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <span
            @click="getPhoto"
            v-for="(item, i) in navlist"
            :key="i"
            :class="['mui-control-item', i === 0 ? 'mui-active' : '']"
          >{{ item.name }}</span>
        </div>
      </div>
    </div>
    <ul>
      <li v-for="item in photolist2" :key="item.id">
        <img v-lazy="item.url" />
        <div class="info">
          <h1 class="info-tittle">{{item.title}}</h1>
          <span class="info-message">{{item.message}}</span>
        </div>
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
          title: "《鬼刀》讲述了诺拉大陆各方势力的恩怨纠葛。",
          message:
            "很久很久以前，诺拉大陆上，为了表示对诺拉女神最崇高的敬意，虔诚的人类筑起了一座宏伟的高塔。诺拉女神为人们的虔诚所动，便在高塔的顶端打开一扇通往异世的大门—天堂之眼。",
        },
        {
          id: "2",
          url: "http://127.0.0.1:3000/src/img/2.jpg",
          title: "《鬼刀》讲述了诺拉大陆各方势力的恩怨纠葛。",
          message:
            "很快来自异世界的种族——羽族造访了这个世界。羽族的人们很快融入人类社会，他们带来了很多珍贵物料并教会了人类冶炼钢铁、发展农业，甚至教会人类说通用语等等。",
        },
        {
          id: "3",
          url: "http://127.0.0.1:3000/src/img/8.jpg",
          title: "故事介绍",
          message:
            "正是因为这些来自天堂的朋友，人类社会飞速发展，于是人类为这些友善的朋友起了一个美丽的名字——‘‘天使’’",
        },
        {
          id: "4",
          url: "http://127.0.0.1:3000/src/img/3.jpg",
          title: "鬼刀",
          message:
            "诺拉大陆最恐怖的杀手。曾在黑山之战中斩杀上将魁七，十万铁甲拖不住他一步。也曾以一己之力瓦解了大陆上最大的杀手联盟，当时名震江湖的杀手西凌斯在他手下没能撑过三招。",
        },
        {
          id: "5",
          url: "http://127.0.0.1:3000/src/img/4.jpg",
          title: "小绿",
          message:
            "南风身边的一名剑侍，同时也是南风心爱之人——雨儿的妹妹，现居于南山，武功高强，身世成谜。",
        },
        {
          id: "6",
          url: "http://127.0.0.1:3000/src/img/5.jpg",
          title: "天剑-南风",
          message:
            "来自遥远南方大陆的神秘高人，其独创的南门功可以在数米之外震碎敌人的五脏六腑。居于南山之上，每日饮酒作诗，不问世事。",
        },
        {
          id: "7",
          url: "http://127.0.0.1:3000/src/img/6.jpg",
          title: "海琴烟（冰公主）",
          message:
            "海琴国国王在冰川里捡到的女孩，非常受国王疼爱，但国民认为她是会带来不幸的怪物，因此非常讨厌她。",
        },
      ],
      photolist2: [],
    };
  },
  //要操作的DOM元素的组件需要在mouted中初始化
  //关闭后还要在钩子函数中初始化，不然元素还没挂载到页面上，mouted时才挂载的
  methods: {
    getPhoto() {
      this.photolist2 = [];
      console.log(this.photolist2);
      this.photolist2 = this.photolist;
      console.log(this.photolist2);
    },
  },
  created() {
    this.getPhoto();
  },
  mounted() {
    // 初始化组件才能实现滚动--（还需要关闭webpack的严格模式）
    mui(".mui-scroll-wrapper").scroll({
      scrollX: true,
      bounce: true,
      deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
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
.mui-control-item {
  touch-action: none;
}
img[lazy="loading"] {
  width: 40px;
  height: 200px;
  margin: auto;
}
ul {
  list-style: none;
  margin: 0;
  padding: 5px;
  padding-top: 0;
  li {
    width: 100%;
    height: 200px;
    margin-top: 10px;
    box-shadow: 0 0 7px gray;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .info {
      opacity: 0.5;
      background-color: black;
      color: white;
      z-index: 66;
      position: absolute;
      bottom: 0;
      .info-tittle {
        font-size: 14px;
      }
      .info-message {
        font-size: 12px;
      }
    }
  }
}
</style>
