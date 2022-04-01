import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
//重写push方法
let originPush = VueRouter.prototype.push
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    } else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{show:true}
        },
        {
            path:'/login',
            component:Login,
            meta:{show:false}
        },
        {
            path:'/register',
            component:Register,
            meta:{show:false}
        },
        {
            name:'search',
            path:'/search/:keyword?',
            component:Search,
            meta:{show:true},
            props:true
        },
        {
            name:'detail',
            path:'/detail/:skuId?',
            component:Detail,
            meta:{show:true},
            props:true
        },
        {
            path:'*',
            redirect:'/home'
        }
    ],
    scrollBehavior(to,from,savedPosition){
        return {y:0}
    }
})