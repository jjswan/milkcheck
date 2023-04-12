import React from "react";
import styled from "styled-components"
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import {useSetRecoilState, useRecoilValue} from "recoil";
import { eatensAtom, isDarkAtom, namesAtom } from "../atoms";


const Btn = styled.button`
  background-color:${props=>props.theme.bgColor};
  color:white;
  margin: 10px;
  border-radius: 5px;
  border:1px solid ${props=>props.theme.bgColor};
  height: 30px;
  width: 80px;
  &:hover{
    background-color:${props=>props.theme.accentBgColor};
    border:1px solid ${props=>props.theme.accentBgColor};
  }
  `;

function Check(){
  const setNamesAtom =useSetRecoilState(namesAtom); 
  const names = useRecoilValue(namesAtom);
  const setEatensAtom=useSetRecoilState(eatensAtom);
  const eatens = useRecoilValue(eatensAtom);
  // const [eatens, setEatens] = useState<string[]>([]);

  function AddName(event:React.MouseEvent<HTMLButtonElement>){
    const eaten_name = event.currentTarget.textContent;
    if(eaten_name){
      setEatensAtom(prev => [...prev, eaten_name]);
      setNamesAtom(prev=>prev.filter(name=>name!==eaten_name));
    }
  }

  function DeleteName(event:React.MouseEvent<HTMLButtonElement>){
    const uneaten_name = event.currentTarget.textContent;
    if(uneaten_name){
      setEatensAtom(eatens=>eatens.filter(name=>name !== uneaten_name));
      setNamesAtom(prev=>[...prev, uneaten_name]);
    }
  }
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const setDarkTheme =()=>setDarkAtom(prev=>!prev);

  return (
    <div >
      <Helmet>
        <title>Milk Check</title>
      </Helmet>
      <h3>얘들아 우유 먹자!</h3>
      <button onClick={setDarkTheme}>Change Theme</button>
      <div>
        <h4>우유 먹을 사람</h4>
        {names.map((name)=> <Btn key={name} onClick={AddName}>{name}</Btn>)}
      </div>
      <div>
        <h4>우유 먹은 사람</h4>
        {eatens.map((name)=> <Btn key={name} onClick={DeleteName}>{name}</Btn>)}
      </div>
      <div>
        <Link to="/change">학생 목록 수정하기</Link>
        <Outlet/>
      </div>
      
        
    </div>
  )
}

export default Check;