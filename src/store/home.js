//引入请求数据的函数
import {reqCategoryList,reqBannerList,reqFloorList} from  '@/api'
//创建action,mutation,state,getter对象
const state = {
    categoryList:[],
    bannerList:[],
    floorList:[],
}
const actions = {
    async categoryList({commit}){
       let result =  await reqCategoryList()
       if(result.code == 200){
           commit('CATEGORYLIST',result.data)
       }
    },
    async getBannerList({commit}){
        let result =  await reqBannerList()
        if(result.code == 200){
            commit('BANNERLIST',result.data)
        }
    },
    async getFloorList({commit}){
        let result =  await reqFloorList()
        if(result.code == 200){
            commit('FLOORLIST',result.data)
        }
    },
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    BANNERLIST(state,bannerList) {
        state.bannerList = bannerList
    },
    FLOORLIST(state,floorList) {
        state.floorList = floorList
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