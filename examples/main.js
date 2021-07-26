import Vue from 'vue'
import App from './App.vue'
import jgTextarea from '../packages/index'

Vue.use(jgTextarea)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
