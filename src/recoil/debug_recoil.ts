import { useRecoilSnapshot } from 'recoil'
import { useEffect } from 'react'
import { log } from '@/utils/business'

function DebugObserver() {
  const snapshot = useRecoilSnapshot()
  useEffect(() => {
    log.d('The following atoms were modified:')
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true }))
      log.s(snapshot.getLoadable(node), node.key)
  }, [snapshot])

  return null
}

export { DebugObserver }
