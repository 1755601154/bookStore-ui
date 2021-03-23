import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin)) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})