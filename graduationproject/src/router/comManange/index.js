import Layout from '@/layout'
import commanage from "@/views/commanage";
export default [
  {
    path: "/commanage",
    name: "commanage",
    component: Layout,
    redirect:"/commanage/index",
    children:[
        {
            path:"/commanage/index",
            name:"index",
            component:commanage,
            meta:{
              activePath:'/commanage/index'
            }
        }
    ]
  },
];