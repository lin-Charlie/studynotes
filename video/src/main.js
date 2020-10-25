import Vue from 'vue'
import App from './App.vue'
import './gobalConfig.js'
import router from './router.js'
Vue.config.productionTip = false
//路由跳转后定位到顶部
router.afterEach(() => {
  document.body.scrollTop =0;
  document.documentElement.scrollTop = 0;
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
