//引入请求数据的函数
import { reqDetailList, reqAddToCart } from '@/api'
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
    //添加到购物车的请求
    async addToCart({ commit }, { skuId, skuNum }) {
        let result = await reqAddToCart(skuId,skuNum)
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