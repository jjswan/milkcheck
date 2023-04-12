import {atom} from "recoil";

export const isDarkAtom = atom({
  key:"isDark",
  default:false
})

export const namesAtom = atom({
  key:"names",
  default: ['김하니', '이하니', '장하니', '오하니', '유하니', '신하니', '한하니', '고하니', '임하니', '최하니', '주하니', '전하니', '박하니']
})

export const eatensAtom = atom<string[]>({
  key:"eatens",
  default: []
})