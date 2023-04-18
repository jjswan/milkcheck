import { InamesAtom, namesAtom } from "../atoms";
import { useRecoilState } from "recoil";
import styled from "styled-components"

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
function EatenToEat({text, id, category}:InamesAtom){
  const [names, setNames] = useRecoilState(namesAtom);
  // const setNamesAtom =useSetRecoilState(namesAtom); 
  // const names = useRecoilValue(namesAtom);

  const onClick=(event:React.MouseEvent<HTMLButtonElement>)=>{
    setNames(names=>{
      const targetIndex = names.findIndex(name=>name.id === id);
      const eatenname = {text, id, category:"EAT" as any};
      return [...names.slice(0, targetIndex), eatenname, ...names.slice(targetIndex+1)]
    });
  }
  return (
    <span>
      {category ==="EATEN" && <Btn name="EATEN" onClick={onClick}>{text}</Btn>} 
    </span>
  )
}

export default EatenToEat;