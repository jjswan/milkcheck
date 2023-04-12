import React from "react";
import { useState } from "react";
import {useSetRecoilState, useRecoilValue} from "recoil";
import { namesAtom, eatensAtom } from "../atoms";
import styled from "styled-components";

const Form = styled.form`
margin-top: 20px;
`;

function Change(){
  const names = useRecoilValue(namesAtom);
  const setNamesAtom =useSetRecoilState(namesAtom); 
  const [newname, setNewname] = useState("");

  const setEatensAtom = useSetRecoilState(eatensAtom);
  const [deletedname, setDeletedName] = useState("");

  const PrintNewName=(event:React.FormEvent<HTMLInputElement>)=>{
    setNewname(event.currentTarget.value);
  }

  const AddName=()=>{
    setNamesAtom([...names, newname]);
    setNewname("");
  }
  
  const PrintDeletedName=(event:React.FormEvent<HTMLInputElement>)=>{
    setDeletedName(event.currentTarget.value);
  }
  const DeleteName=()=>{
    setNamesAtom(prev=>prev.filter(name=>name!==deletedname));
    setEatensAtom(prev=>prev.filter(name=>name!==deletedname));
    setDeletedName("");
  }

  const onSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
    event?.preventDefault();
  }

  return(
    <div>
      <Form onSubmit={onSubmit}>
        <input onChange={PrintNewName} value={newname} type="text" placeholder="추가할 학생 이름을 쓰세요." />
        <button onClick={AddName}>Click</button>
      </Form>
      <Form onSubmit={onSubmit}>
        <input onChange={PrintDeletedName} value={deletedname} type="text" placeholder="삭제할 학생 이름을 쓰세요." />
        <button onClick={DeleteName}>Click</button>
      </Form>
    </div>
  )
}

export default Change;