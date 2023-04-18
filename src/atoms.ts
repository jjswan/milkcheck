import {atom, selector} from "recoil";

export const isDarkAtom = atom({
  key:"isDark",
  default:false
})

export interface InamesAtom{
  text:string,
  id:number,
  category: "EAT"|"EATEN"
}

export const namesAtom = atom<InamesAtom[]>({
  key:"names",
  default:[]
})

// export const eatensAtom = atom<string[]>({
//   key:"eatens",
//   default: []
// })
