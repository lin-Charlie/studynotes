import Vue from "vue";
import Router from "vue-router";

/* Layout */
// import Layout from '@/layout'

Vue.use(Router);

// 处理重复点击路由报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};


// {
//     path: "/",
//     redirect: "/baseInfo",
// },
let routes = [];

const routerContext = require.context("./", true, /index\.js$/);

routerContext.keys().forEach((route) => {
    // 如果是根目录的 index.js、 不做任何处理
    if (route.startsWith("./index")) {
        return;
    }
    const routerModule = routerContext(route);
    // 兼容 import export 和 require module.export 两种规范  Es modules  commonjs
    routes = [...routes, ...(routerModule.default || routerModule)];
});


const router = new Router({
    mode: "hash",
    base: process.env.BASE_URL,
    routes,
});
//路由守卫
// 登录判断
router.beforeEach((to,from,next)=>{
    if(to.name == 'login'){
        sessionStorage.clear()
        next()
    }else{
        if(sessionStorage.userInfo){
            next()
        }else{
            // alert("111")
            // to.name = 'login'
            next(`/login`)
        }
    }
    
})
export default router;


// import Vue from "vue"
// import Router from "vue-router"
// Vue.use(Router)

// const originalPush = Router.prototype.push
//    Router.prototype.push = function push(location) {
//    return originalPush.call(this, location).catch(err => err)
// }
// const router = new Router({
//     routes:[
//     {
//         path:'/',redirect:"/login"
//     },{
//         path:'/login',
//         name:"login",
//         component:()=>import("@/views/login/index.vue"),
//     },{
//         path:'/index', 
//         component:()=>import("@/views"),
//         children:[
//         {
//             path:"index/dispatch",
//             name:"dispatch",
//             component: { render: h => h("router-view") },
//             meta:{
//                 tittle:"协同调度",
//                 type:"协同调度",
//                 icon: require("@/assets/images/svg/dispatch.svg"),
//                 activePath: `/index/dispatch`,
//             },
//             children:[{
//                 path:'/index/dispatch/send',
//                 name:"send",
//                 component:()=>import("@/views/dispatch/Issue.vue"),
//                 meta:{
//                     tittle:"下发指令",
//                     type:"协同调度",
//                     icon: require("@/assets/images/svg/send.svg"),
//                     activePath:"/index/dispatch/send"
//                 }
//             },{
//                 path:'/index/dispatch/todo',
//                 name:'todo',
//                 component:()=>import("@/views/dispatch/daiban.vue"),
//                 meta:{
//                     tittle:"待办指令",
//                     type:'协同调度',
//                     icon: require("@/assets/images/svg/todo.svg"),
//                     activePath:"/index/dispatch/todo"
//                 }
//             },{
//                 path:'/index/dispatch/done',
//                 name:'done',
//                 component:()=>import("@/views/dispatch/done.vue"),
//                 meta:{
//                     tittle:"已完成",
//                     type:'协同调度',
//                     icon: require("@/assets/images/svg/done.svg"),
//                     activePath:"/index/dispatch/done"
//                 }
//             }]
//         },{
//             path:"/index/setting",
//             name:"参数设置",
//             component: { render: h => h("router-view") },
//             meta:{
//                 tittle:"参数设置",
//                 type: "参数设置",
//                 icon: require("@/assets/images/svg/setting.svg"),
//                 activePath: `/index/setting`,
//             },
//             children:[{
//                 path:'/index/setting/dataDictionary',
//                 name:"dataDir",
//                 component:()=>import("@/views/data/dataDir.vue"),
//                 meta:{
//                     tittle:"数据字典",
//                     type:'参数设置',
//                     icon: require("@/assets/images/svg/dataDictionary.svg"),
//                     activePath:"/index/setting/dataDictionary"
//                 }
//             }]
//         }
//         ],
//     },{
//         path:"/demo",
//         name:"echarts",
//         component:()=>import('@/views/echarts/index.vue'),
//     }]
// })
// // 登录判断
// router.beforeEach((to,from,next)=>{
//     if(to.name == 'login'){
//         sessionStorage.clear()
//         next()
//     }else{
//         if(sessionStorage.userinfo){
//             next()
//         }else{
//             // alert("111")
//             // to.name = 'login'
//             next(`/login`)
//         }
//     }
    
// })

// export default router







