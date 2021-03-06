import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/router'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
	routes
})

new Vue({
  router,  // 注入到根实例中
  render: h => h(App)
}).$mount('#app')


//components: { App }  vue1.0的写法
//render: h => h(App)    vue2.0的写法