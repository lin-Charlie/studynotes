import Layout from '@/layout'
import datareport from "@/views/informationserve/datareport.vue";
import trainplan from "@/views/informationserve/trainplan.vue";
export default [
  {
    path: "/informationserve",
    name: "informationserve",
    component: Layout,
    redirect:"/informationserve/soilcondition",
    children:[
        {
            path:"/informationserve/datareport",
            name:"datareport",
            component:datareport,
            meta:{
                activePath:'/informationserve/datareport'
            }
        },{
            path:"/informationserve/trainplan",
            name:"trainplan",
            component:trainplan,
            meta:{
                activePath:'/informationserve/trainplan'
            }
        }
    ]
  },
];