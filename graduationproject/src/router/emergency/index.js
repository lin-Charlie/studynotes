import Layout from '@/layout'
import soilcondition from "@/views/emergency/soilcondition.vue";
import sensorfault from "@/views/emergency/sensorfault.vue";
export default [
  {
    path: "/emergency",
    name: "emergency",
    component: Layout,
    redirect:"/emergency/soilcondition",
    children:[
        {
            path:"/emergency/soilcondition",
            name:"soilcondition",
            component:soilcondition,
            meta:{
                activePath:'/emergency/soilcondition'
            }
        },{
            path:"/emergency/sensorfault",
            name:"sensorfault",
            component:sensorfault,
            meta:{
                activePath:'/emergency/sensorfault'
            }
        }
    ]
  },
];