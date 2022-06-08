import { RecoilRoot } from 'recoil'
import Router from '@/router'
import { DebugObserver } from '@/recoil/debug_recoil'

const App = () => {
  return (
      <RecoilRoot>
          <DebugObserver/>
          <Router/>
      </RecoilRoot>
  )
}

export default App
