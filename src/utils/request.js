import axios from "axios";

const http =  axios.create({
    //通用的请求的地址前缀，访问的接口路径
    baseURL: '/api',
    //设置超时时间
    timeout: 10000
});

//请求拦截器
http.interceptors.request.use(response=>{
    return response;
},error =>{
    //对请求错误做些什么
    return Promise.reject(error);
})

//响应拦截器
http.interceptors.response.use(response =>{
    return response;
},error =>{
    //对请求错误做些什么
    return Promise.reject(error);
})

export default http;
