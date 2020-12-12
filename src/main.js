import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import { Button, Select } from 'element-ui';

Vue.config.productionTip = false
Vue.use(Router)
Vue.use(Button,{ size: 'small', zIndex: 3000 })
Vue.use(Select,{ size: 'small', zIndex: 3000 })
new Vue({
  render: h => h(App),
}).$mount('#app')
