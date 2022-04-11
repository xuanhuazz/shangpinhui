//引入请求数据的函数
import {reqsendCode,reqRegister} from  '@/api'
//创建action,mutation,state,getter对象
const state = {
    code:'',
}
const actions = {
    async getCode({commit},params){
        let result =  await reqsendCode(params)
        if(result.code == 200){
            commit('SENDCODE',result.data)
        }
    },
    async register({commit},user){
        let result =  await reqRegister(user)
        if(result.code == 200){
            return 'success'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
}
const mutations = {
    SENDCODE(state,code) {
        state.code = code
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