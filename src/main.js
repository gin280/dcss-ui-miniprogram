import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import http from './api/request'
import { Button } from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false
Vue.prototype.$http = http

Vue.use(Button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
