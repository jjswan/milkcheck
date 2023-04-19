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
  default: JSON.parse(localStorage.getItem("names") as string)
})

