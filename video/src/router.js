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
import Video from './components/video/video.vue'
import Category from './components/category/category.vue'
import Serch from './components/category/serch.vue'


// 共享组价测试路由
import Sidebar from './components/sub-components/serchbar.vue'
const router = new Router({
    routes:[
        {path:'/',redirect:'/home'},//默认路由
        {path:'/home',component:Home},
        {path:'/person',component:Person},
        {path:"/home/video/:id",component:Video,props:true},
        {path:"/home/category/:info",component:Category,props:true},
        {path:"/home/serch",component:Serch},


        // 共享组价测试路由
        {path:'/sidebar',component:Sidebar},
    ],
    linkActiveClass:'mui-active'
})
export default router