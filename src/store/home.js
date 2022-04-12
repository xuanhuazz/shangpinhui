//引入请求数据的函数
import {reqCategoryList,reqBannerList,reqFloorList,reqGetUserInfo,reqLoginOut} from  '@/api'
//创建action,mutation,state,getter对象
const state = {
    categoryList:[],
    bannerList:[],
    floorList:[],
    userInfo:{}
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
    async getUserInfo({commit}){
        let result =  await reqGetUserInfo()
        if(result.code == 200){
            commit('USERINFO',result.data || {})
        }
    },
    async loginOut({commit}){
        let result =  await reqLoginOut()
        if(result.code == 200){
            commit('CLEAR')
            return 'success'
        } else {
            return Promise.reject('faile')
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
    USERINFO(state,userInfo) {
        state.userInfo = userInfo
    },
    CLEAR(state){
        state.userInfo = {}
        state.token = ''
    }
}
const getters = {
    
}


export default {
    actions,
    mutations,
    state,
    getters
}