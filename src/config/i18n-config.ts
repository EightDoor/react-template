import type { InitOptions } from 'i18next'
import translationEn from '@/translations/locales/en.json'
import translationZh from '@/translations/locales/zh.json'

const i18nConfig: InitOptions = {
  resources: {
    en: translationEn,
    zh: translationZh,
  },
  lng: 'zh', // 默认中文
  interpolation: {
    escapeValue: false,
  },
  debug: true,
}

export default i18nConfig
