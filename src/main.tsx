import React from 'react'
import ReactDOM from 'react-dom/client'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import App from './App'
import i18nConfig from '@/config/i18n-config'

import './index.less'

i18n.use(initReactI18next)
  .init(i18nConfig)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
