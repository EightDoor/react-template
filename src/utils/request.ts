import axios from 'axios'
import Config from '../config'

const instant = axios.create({
  baseURL: Config.baseUrl,
})

// 请求拦截
instant.interceptors.request.use((config) => {
  // 在发送之前
  return config
}, (error) => {
  // 请求错误
  return Promise.reject(error)
})

// 响应拦截
instant.interceptors.response.use((response) => {
  // 响应
  return response.data
}, (error) => {
  // 响应错误
  return Promise.reject(error)
})
export { instant as http }
