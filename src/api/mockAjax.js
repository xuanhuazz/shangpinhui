import axios from "axios";
//引入nprogress,这是加载条
import nprogress from "nprogress";
//引入nprogress样式
import 'nprogress/nprogress.css'
const mockAjax = axios.create({
    baseURL:'/mock',
    timeout:5000    //访问大于5s取消
})

//设置请求拦截器
mockAjax.interceptors.request.use(function (config) {
    nprogress.start()
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 设置响应拦截器
mockAjax.interceptors.response.use(function (response) {
    nprogress.done()
    return response.data;
    // return response;
}, function (error) {
    return Promise.reject(error);
});

export default mockAjax