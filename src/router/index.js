import VueRouter from "vue-router";
import Home from "@/views/Home";
import User from "@/views/User";
import Main from "@/views/Main";
import Mall from "@/views/Mall";
import PageOne from "@/views/PageOne";
import PageTwo from "@/views/PageTwo";
//路由和组件进行映射
const router = new VueRouter({
    //主路由
    routes:[
        {
            path:'/',
            component:Main,
            redirect:'/home',  //重定向
            children:[
                {path:'home', component: Home},  // 首页
                {path:'user',component:User},   // 用户管理
                {path:'mall',component:Mall},   //商品管理
                {path:'page1',component:PageOne},  //页面一
                {path:'page2',component:PageTwo},   //页面二
            ]
        }
    ]
})
export default router