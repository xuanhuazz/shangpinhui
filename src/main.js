import Vue from 'vue'
import App from './App.vue'

//全局注册组建
import TypeNav from '@/components/TypeNav'
import Pagination from '@/components/Pagination'
//  传递两个参数（组件的名字，哪一个组件）
Vue.component(TypeNav.name,TypeNav)
Vue.component(Pagination.name,Pagination)

//    引入router
import router from './router'

//引入mockServe,不然模拟的数据传不过去啊
import '@/mock/mockServe'
//引入swiper样式
import 'swiper/css/swiper.css'
import 'swiper/js/swiper.js'
//  引入Vuex
import store from '@/store'
Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线
	},
  router,
  store
})
