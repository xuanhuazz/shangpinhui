import requests from './request'
//三级联动axios发请求
export const reqCategoryList = () =>requests({url:'product/getBaseCategoryList',method:'get'})
//mock数据的axios发请求
import mockAjax from './mockAjax'
//获取bannerList和FloorList的数据
export const reqBannerList = () => mockAjax({url:'/banner'})
export const reqFloorList = () => mockAjax({url:'/floor'})
//获取search数据
export const reqSearchList = (params) => requests({url:'/list',method:'post',data:params})
//获取商品详情数据
export const reqDetailList = (skuId) => requests({url:`/item/${skuId}`,method:'get'})
//加入购物车数据
export const reqAddToCart = (skuId,skuNum) => requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})
//获取购物车列表数据
export const reqCartList = () => requests({url:`/cart/cartList`,method:'get'})
//删除购物车内商品
export const reqDeleteCart = (skuId) => requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})
//修改购物车选中状态
export const reqCheckCart = (skuId,isChecked) => requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
//获取验证码
export const reqsendCode = (phone) => requests({url:`/user/passport/sendCode/${phone}`,method:'get'})
//注册
export const reqRegister = (data) => requests({url:`/user/passport/register`,data,method:'post'})
//登录（可以得到token）
export const reqLogin = (data) => requests({url:`/user/passport/login`,data,method:'post'})
//携带token获取用户数据
export const reqGetUserInfo = () => requests({url:`/user/passport/auth/getUserInfo`,method:'get'})
//退出
export const reqLoginOut = () => requests({url:`/user/passport/logout`,method:'get'})

