import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import Toast from 'components/common/toast'

//安装toast插件，安装插件时，不需要带引号，插件是以对象形式引入
Vue.use(Toast)

//添加事件总线对象
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
