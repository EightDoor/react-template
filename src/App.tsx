import { BrowserRouter, Route, Routes } from 'react-router-dom'

// 页面
import Home from '@/views/home/index'

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
