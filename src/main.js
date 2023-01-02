import Vue from 'vue'
import App from './App.vue'
//引入Element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//关闭生产提示
Vue.config.productionTip = false
//使用element-ui
Vue.use(ElementUI)


new Vue({
  render: h => h(App),
}).$mount('#app')
