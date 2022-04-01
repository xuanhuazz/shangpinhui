//引入请求数据的函数
import { reqDetailList, reqAddToCart,reqCartList } from '@/api'
//引入uuid
import { getUUID } from '@/utils/uuid'
//创建action,mutation,state,getter对象
const state = {
    detailList: [],
    cartList:[],
    // uuid_token:getUUID()
}
const actions = {
    async detailList({ commit }, skuId) {
        let result = await reqDetailList(skuId)
        if (result.code == 200) {
            commit('DETAILLIST', result.data)
        }
    },
    async addToCart({ commit }, { skuId, skuNum }) {
        let result = await reqAddToCart(skuId,skuNum)
        if(result.code == 200){
            return 'success'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async cartList({ commit }, skuId) {
        let result = await reqCartList(skuId)
        if (result.code == 200) {
            commit('CARTLIST', result.data)
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
    categoryView(state) {
        return state.detailList.categoryView
    },
    skuInfo(state) {
        return state.detailList.skuInfo
    },
    spuSaleAttrList(state) {
        return state.detailList.spuSaleAttrList
    },
}


export default {
    actions,
    mutations,
    state,
    getters
}