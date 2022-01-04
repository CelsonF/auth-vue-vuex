import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import provedor from './provedor'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import http from '@/http'

Vue.config.productionTip = false

Vue.prototype.$http = http

Vue.use(Vuex)


new Vue({
  router,
  store:provedor,
  render: h => h(App)
}).$mount('#app')
