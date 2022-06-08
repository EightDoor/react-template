import { atom } from 'recoil'

const textState = atom({
  key: 'textState',
  default: 0,
})

export { textState }
