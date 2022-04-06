//引入请求数据的函数
import {reqCartList,reqDeleteCart,reqCheckCart } from '@/api'
//创建action,mutation,state,getter对象
const state = {
    cartList:[],

}
const actions = {
    //获取购物车列表
    async cartList({ commit }, skuId) {
        let result = await reqCartList(skuId)
        if (result.code == 200) {
            commit('CARTLIST', result.data)
        }
    },
    //删除购物车商品
    async deleteList({ commit }, skuId) {
        let result = await reqDeleteCart(skuId)
        if(result.code == 200){
            return 'success'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    //改变选中状态
    async checkCart({ commit }, {skuId,isChecked}) {
        let result = await reqCheckCart(skuId,isChecked)
        if(result.code == 200){
            return 'success'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
}
const mutations = {
    DETAILLIST(state, detailList) {
        state.detailList = detailList
    },
    CARTLIST(state, cartList) {
        state.cartList = cartList
    },
}
const getters = {
}


export default {
    actions,
    mutations,
    state,
    getters
}