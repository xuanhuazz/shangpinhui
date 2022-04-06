import Vue from 'vue'
import Vuex from 'vuex'
//创建action,mutation,getter对象
const actions = {

}
const mutations = {

}
const getters = {

}
//引入小仓库
import home from './home'
import search from './search'
import detail from './detail'
import shopcart from './shopcart'
Vue.use(Vuex)
export default new Vuex.Store({
    actions,
    mutations,
    modules: {
        home,
        search,
        detail,
        shopcart
    },
    getters
})