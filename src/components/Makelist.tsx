import { useRecoilState } from "recoil";
import { namesAtom } from "../atoms";
import { useState } from "react";
import {useForm} from 'react-hook-form'

interface InameForm {
  name: string;
}

function Makelist(){
  const [names, setNamesAtom] = useRecoilState(namesAtom);
  // const [newname, setNewname] = useState("");
  // const onChange=(event:React.FormEvent<HTMLInputElement>)=>{
  //   setNewname(event.currentTarget.value);
  // }

  const { register, handleSubmit, setValue } = useForm<InameForm>();
  const handleValid = ({ name }: InameForm) => {
    const names_list = names.map(name=>name.text);
    if(names_list.includes(name)){
      setValue("name", "");
      return; 
    }
    setNamesAtom(names=>[...names, { text: name, id: Date.now(), category: "EAT" }])
    setValue("name", "");
  };

  // const onSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
  //   event?.preventDefault();
  //   setNamesAtom(names=>[...names, { name: , id: Date.now(), category: "TO_DO" }]);
  //   setNewname("");
  // }
  return (
    <div>
      <h3>아동 명단 만들기</h3>
      <form onSubmit={handleSubmit(handleValid)}>
      <input
          {...register("name", {
            required: "Please write a name",
          })}
          placeholder="Write student name"
        />
        <button>Add</button>
        {/* <input value={newname} onChange={onChange} type="text" placeholder="학생 이름을 입력하세요"/> */}
      </form>
    </div>
  )

}
export default Makelist;