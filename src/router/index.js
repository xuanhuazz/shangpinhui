import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCar from '@/pages/ShopCar'
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
let router =  new VueRouter({
    routes:[
        {
            name:'home',
            path:'/home',
            component:Home,
            meta:{show:true}
        },
        {
            path:'/login',
            name:'login',
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
            name:'addCartSuccess',
            path:'/addCartSuccess',
            component:AddCartSuccess,
            meta:{show:true},
            props:true
        },
        {
            name:'shopCar',
            path:'/shopCar',
            component:ShopCar,
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
//设置全局前置路由守卫
router.beforeEach((to,from,next)=>{
    let token = localStorage.getItem('TOKEN')
    console.log(token);
    if(!token){
        if(to.path == '/shopCar'){
            console.log('我去了购物车');
            alert('errrr')
        }else {
            next()
            console.log('我没登录去了别的地');
        }
    } else {
        if(to.path == '/login'){

            alert('你已经登陆过啦！')
        }else {
            console.log(1234);
            next()
        }
    }
})
export default router