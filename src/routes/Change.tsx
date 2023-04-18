import React from "react";
import { useState } from "react";
import {useSetRecoilState} from "recoil";
import { namesAtom } from "../atoms";
import styled from "styled-components";

const Form = styled.form`
margin-top: 20px;
`;

const Button = styled.button`
margin-top: 10px;
`;


function Change(){
  const setNames = useSetRecoilState(namesAtom);
  const [deletedname, setDeletedName] = useState("");
  const PrintDeletedName=(event:React.FormEvent<HTMLInputElement>)=>{
    setDeletedName(event.currentTarget.value);
  };

  const onSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
    event?.preventDefault();
    setDeletedName("");
    setNames(prev=>prev.filter(name=>name.text!==deletedname));
  }

  const onClick=()=>{
    setNames([]);
  }

  return(
    <div>
      <Form onSubmit={onSubmit}>
        <input onChange={PrintDeletedName} value={deletedname} type="text" placeholder="삭제할 학생 이름을 쓰세요." />
      </Form>
      <Button onClick={onClick}>전체 삭제</Button>
    </div>
  )
}

export default Change;