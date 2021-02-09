import Layout from '@/layout'
import dailyreport from "@/views/produceplan/dailyreport.vue";
import issued from "@/views/produceplan/issued.vue";
import reportlog from "@/views/produceplan/reportlog.vue";
export default [
  {
    path: "/produceplan",
    name: "produceplan",
    component: Layout,
    redirect:"/produceplan/dailyreport",
    children:[
      {
        path:"/produceplan/dailyreport",
        name:"dailyreport",
        component:dailyreport,
        meta:{
            activePath:'/produceplan/dailyreport'
        }
      },{
        path:"/produceplan/issued",
        name:"issued",
        component:issued,
        meta:{
            activePath:'/produceplan/issued'
        }
      },{
        path:"/produceplan/reportlog",
        name:"reportlog",
        component:reportlog,
        meta:{
            activePath:'/produceplan/reportlog'
        }
      },
    ]
  },
];