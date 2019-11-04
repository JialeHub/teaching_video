import Vue from 'vue';
import ElementUI from 'element-ui';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;
import App from './App.vue';
import router from './router/index';




//路由：
//1.创建/引入组件
//2.配置路由
//3.实例化路由对象
//4.挂载路由
//5.放置内容

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
//1
