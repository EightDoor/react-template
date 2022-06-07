import { LogUtil, StoreUtil, dateUtil } from 'zhoukai_utils'

const isProd = import.meta.env.PROD

// 日志
const log = new LogUtil({
  logStatus: !isProd,
})

// localstorage存储
const store = new StoreUtil({
  prefixKey: 'react-template', // 统一前缀
  defaultCacheTime: 2592000, // 缓存时间 单位为秒，默认30天
})
export { log, dateUtil, store }

