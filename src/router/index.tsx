import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// 页面
import Home from '@/views/home'
import Test from '@/views/test'

const Router = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/test" element={<Test/>}/>
            </Routes>
        </BrowserRouter>
  )
}
export default Router
