import Field from "./Field/Field";
import { useId } from "react";

const AllTheBoardTracksTwoRows = ({fields_no}) => {

  const id=useId();

  const fields_amount=new Array(fields_no);
  fields_amount.fill(0);
  const fields_list=fields_amount.map((field,i)=><Field key ={`${id}+${i}`} fields_no={fields_no}/>);

  return (<>
    <div className='go-right'>
      {fields_list}
    </div>
    <div className='go-left'>
      {fields_list}    
    </div>
  </>)
}

export default AllTheBoardTracksTwoRows;