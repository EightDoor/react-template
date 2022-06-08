import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'antd'

const Home = () => {
  const { t } = useTranslation()
  return (
      <>
          <Button type="primary">测试</Button>
          {t('title')}
        首页
      </>
  )
}

export default Home
