import Vue from 'vue'
import App from './App.vue'
//引入Element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from "@/router";

//关闭生产提示
Vue.config.productionTip = false
//使用element-ui
Vue.use(ElementUI)
//使用VueRouter
Vue.use(VueRouter);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
