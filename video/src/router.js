import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location){
    return originalPush.call(this,location).catch(err => err)
}

// Router.afterEach(() => {
// 	document.body.scrollTop =0;
// 	document.documentElement.scrollTop = 0;
// });

Vue.use(Router)
import Person from './components/tabbar/person.vue'
import Home from './components/tabbar/home.vue'
import Login from './components/tabbar/login.vue'
import Register from './components/security/register.vue'
import Video from './components/video/video.vue'
import Category from './components/category/category.vue'
import Serch from './components/category/serch.vue'
import Setting from './components/setting/setting.vue'
import Personinfo from './components/setting/pesoninfo.vue'
import Agreement from './components/setting/agreement.vue'
import Account from './components/setting/zhaohao.vue'
import Changepwd from './components/security/changepwd.vue'
import Bind from './components/security/bind.vue'

// 共享组价测试路由
import Sidebar from './components/sub-components/serchbar.vue'
const router = new Router({
    routes:[
        {path:'/',redirect:'/home'},//默认路由
        {path:'/home',component:Home},
        {path:'/login',component:Login},
        {path:'/register',component:Register},
        {path:'/person',component:Person},
        {path:"/home/video/:id",component:Video,props:true},
        {path:"/home/category/:info",component:Category,props:true},
        {path:"/home/serch",component:Serch},
        {path:"/home/person/setting",component:Setting},
        {path:"/home/setting/personinfo",component:Personinfo},
        {path:"/home/setting/agreement",component:Agreement},
        {path:"/home/setting/account",component:Account},
        {path:"/home/security/changepwd",component:Changepwd},
        {path:"/home/security/bind",component:Bind},


        // 共享组价测试路由
        {path:'/sidebar',component:Sidebar},
    ],
    linkActiveClass:'mui-active'
})
export default router