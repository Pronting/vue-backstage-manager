import VueRouter from "vue-router";
import Home from "@/views/Home";
import User from "@/views/User";
import Main from "@/views/Main";
//路由和组件进行映射
const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:Main,
            children:[
                {path:'home', component: Home},
                {path:'user',component:User},
            ]
        }
    ]
})
export default router