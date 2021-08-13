import Vue from 'vue'
import App from './App.vue'
import store from "@/store";
import * as echarts from 'echarts';
import 'echarts/lib/component/visualMap'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import axios from "axios";
// axios.defaults.baseURL = 'url'



Vue.use(ElementUI)


Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')



