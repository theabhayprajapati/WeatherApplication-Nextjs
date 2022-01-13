import { atom } from 'recoil'

export const weatherdata = atom({
  key: 'Mumbai',
  default: {},
})
export const thememodelive = atom({
  key: 'currentheme',
  default: 'light',
})
