import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/config/i18n_config'
import App from './App'

import './index.less'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
