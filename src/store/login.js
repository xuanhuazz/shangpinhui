//引入请求数据的函数
import {reqLogin} from  '@/api'
//创建action,mutation,state,getter对象
const state = {
    token:'',
}
const actions = {
    async login({commit},params){
        let result =  await reqLogin(params)
        if(result.code == 200){
            commit('LOGIN',result.data.token)
            return 'success'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
}
const mutations = {
    LOGIN(state,token) {
        state.token = token
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