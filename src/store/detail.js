//引入请求数据的函数
import { reqDetailList, reqAddToCart } from '@/api'
//创建action,mutation,state,getter对象
const state = {
    detailList: [],
    code:''
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
        if (result.code == 200) {
            console.log(result.code);
        }
    }
}
const mutations = {
    DETAILLIST(state, detailList) {
        state.detailList = detailList
    },
    ADDTOCART(state, code) {
        state.code = code
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