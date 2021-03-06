import Vue from 'vue'
import App from './App.vue'
import ElmenntUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElmenntUI,{ locale })

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
