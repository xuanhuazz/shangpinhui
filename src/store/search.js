//引入请求数据的函数
import {reqSearchList} from  '@/api'
//创建action,mutation,state,getter对象
const state = {
    searchList:[],
}
const actions = {
    async getSearchList({commit},params = {}){
        let result =  await reqSearchList(params)
        if(result.code == 200){
            commit('SEARCHLIST',result.data)
        }
    },
}
const mutations = {
    SEARCHLIST(state,searchList) {
        state.searchList = searchList
    },
}
const getters = {
    goodsList(state){
        return state.searchList.goodsList || [] //如果没有访问成功，择返回空数组
    },
    attrsList(state){
        return state.searchList.attrsList || []
    },
    trademarkList(state){
        return state.searchList.trademarkList || []
    },
    total(state){
        return state.searchList.total || []
    },
}


export default {
    actions,
    mutations,
    state,
    getters
}