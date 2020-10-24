<template>
  <div id="app">
    <router-view></router-view>
    <mt-tabbar :fixed=true>
      <mt-tab-item id="zhuye" @click.native="toHome">
        <img slot="icon" src="./assets/zhuye.png">
        主页
      </mt-tab-item>
      <mt-tab-item id="wode" @click.native="toPerson">
        <img slot="icon" src="./assets/wode.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
    <!-- <nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-item" href="#tabbar">
				<span class="mui-icon iconfont icon-zhuye"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/person" class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>-->
  </div> 
</template>

<script>


export default {
  data(){
    return{
      selected:"fixed"
    }
  },
  methods: {
    toHome(){
      this.$router.push('/home')
    },
    toPerson(){
      this.$router.push('/person')
    }
  },
}
</script>

<style lang="less" scoped>
// /deep/ .mint-tabbar{
//   height:1.4rem;
//   /deep/ .mint-tab-item{
//     /deep/.mint-tab-item-icon{
//       width: 0.6rem;
//       height: 0.6rem ;
//     }
//     /deep/.mint-tab-item-label{
//         font-size: 13px;
//     }
//   }
// }
</style>
