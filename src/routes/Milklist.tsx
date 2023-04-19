import React from "react";
import styled from "styled-components"
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import {useSetRecoilState, useRecoilValue, useRecoilState} from "recoil";
import { InamesAtom, isDarkAtom, namesAtom } from "../atoms";
import Makelist from "../components/Makelist";
import EatToEaten from "../components/EatToEaten";
import EatenToEat from "../components/EatenToEat";


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

function Milklist(){
  const [names, setNames] = useRecoilState(namesAtom);

  localStorage.setItem("names", JSON.stringify(names));
  // const localNames:InamesAtom[] = JSON.parse(localStorage.getItem("names") as string);
  
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const setDarkTheme =()=>setDarkAtom(prev=>!prev);

  return (
    <div >
      <Helmet>
        <title>Milk Check</title>
      </Helmet>
      <Makelist/>
      <button onClick={setDarkTheme}>Change Theme</button>
      <div>
        <h4>우유 목록</h4>
        {names?.map((name)=><EatToEaten key={name.id} {...name}/>)}
        {/* {names.map((name)=> <Btn key={name.name} onClick={AddName}>{name.name}</Btn>)} */}
      </div>
      <div>
        <h4>우유 먹은 사람</h4>
        {names?.map((name)=><EatenToEat key={name.id} {...name}/>)}
        {/* {eatens.map((name)=> <Btn key={name} onClick={DeleteName}>{name}</Btn>)} */}
      </div>
      <div>
        <Link to="/change">학생 목록 수정하기</Link>
        <Outlet/>
      </div>
      
        
    </div>
  )
}

export default Milklist;