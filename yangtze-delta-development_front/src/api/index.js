// 请求响应拦截器
import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api', // 环境变量配置
  timeout: 10000 // 超时时间
})

// ✅ 请求拦截器
service.interceptors.request.use(
  () => {

  },
  (error) => {
    console.error('请求错误：', error)
    return Promise.reject(error)
  }
)

// ✅ 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    // 统一处理后端响应格式
    if (res.code !== 200) {
      ElMessage.error(res.message || '请求失败')
      return Promise.reject(res)
    }
    return res.data // 直接返回真正的数据
  },
  (error) => {
    if (error.response) {
      ElMessage.error(error.response.data.message || '请求错误')
    } else {
      ElMessage.error('网络连接异常')
    }
    return Promise.reject(error)
  }
)

// get请求
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    service
      .get(url, {
        params: params,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

//post请求
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    service.post(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
}