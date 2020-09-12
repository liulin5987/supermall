import axios from 'axios'

export function request(config){
    //1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/z8',
        timeout: 5000
    })
    //2.请求拦截，对发送出去的请求做一个检测，如config信息中是否包含token信息等，拦截成功要return config，不然服务器接收不到请求
    instance.interceptors.request.use(config =>{
        return config
    },err =>{
        console.log(err);
    })
    //3.响应拦截，通常会在res处取出res.data信息
    instance.interceptors.response.use(res => {
        return res.data
    },err => {
        console.log(err)
    })
    //4.发送真正的网络请求,这里返回的是一个promise，可以在页面中用then直接调用promise的resolve和reject方法
    return instance(config)
}