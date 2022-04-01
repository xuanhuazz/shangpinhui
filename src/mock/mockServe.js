import Mock from 'mockjs'
//引入banner和floor的json文件
//因为webpack对于图片是默认暴露的。
import banner from './banner.json'
import floor from './floor.json'
//使用mock来模拟接口，第一个参数是请求的接口，第二个参数是请求的数据。
Mock.mock('/mock/banner',{code:200,data:banner})
Mock.mock('/mock/floor',{code:200,data:floor})
