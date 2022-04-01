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
