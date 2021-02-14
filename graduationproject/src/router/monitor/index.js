import Layout from '@/layout'
import landinfo from "@/views/monitor/landinfo.vue";
import soildata from "@/views/monitor/soildata.vue";
import sensorinfo from "@/views/monitor/sensorinfo.vue";

export default [
  {
    path: "/monitor",
    name: "monitor",
    component: Layout,
    redirect:"/monitor/soilcondition",
    children:[
        {
            path:"/monitor/landinfo",
            name:"landinfo",
            component:landinfo,
            meta:{
                activePath:'/monitor/landinfo'
            }
        },{
            path:"/monitor/sensorinfo",
            name:"sensorinfo",
            component:sensorinfo,
            meta:{
                activePath:'/monitor/sensorinfo'
            }
        },{
            path:"/monitor/soildata",
            name:"soildata",
            component:soildata,
            meta:{
                activePath:'/monitor/soildata'
            }
        }
    ]
  },
];