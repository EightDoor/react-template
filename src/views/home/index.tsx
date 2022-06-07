import React from 'react'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()
  return (
      <>
          {t('title')}
        首页
      </>
  )
}

export default Home
