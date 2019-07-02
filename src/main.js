import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
// Vue.use(asyncValidator)
new Vue({
  render: h => h(App),
}).$mount('#app')
