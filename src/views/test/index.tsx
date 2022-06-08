import React from 'react'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'
import { useRecoilState } from 'recoil'
import { textState } from '@/recoil/test_recoil'

const Test = () => {
  const { t } = useTranslation()
  const [testData, setTestData] = useRecoilState(textState)

  const settingData = () => {
    const val = Date.now()
    setTestData(val)
  }
  return (
        <>
            <Button type="primary">测试</Button>
            {t('title')}
            首页

            <br/>
            <h2>状态管理</h2>
            <Button type="primary" onClick={() => settingData()}>设置值</Button>
            <br/>
            值: {testData}
        </>
  )
}

export default Test
