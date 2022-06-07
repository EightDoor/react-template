import type { InitOptions } from 'i18next'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEn from '@/translations/locales/en.json'
import translationZh from '@/translations/locales/zh.json'

const i18n_config: InitOptions = {
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

i18n.use(initReactI18next)
  .init(i18n_config)

export default i18n
