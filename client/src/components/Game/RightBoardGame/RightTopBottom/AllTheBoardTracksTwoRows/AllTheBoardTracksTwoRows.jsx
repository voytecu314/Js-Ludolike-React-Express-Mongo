import Field from "./Field/Field";
import { useId } from "react";

const AllTheBoardTracksTwoRows = ({fields_no, order_no, pos}) => {

  const id=useId();

  const fields_amount=new Array(fields_no);
  fields_amount.fill(0);

  return (<>
    <div className='go-right'>
      {fields_amount.map((field,i)=><Field key ={`${id}+${i}`} fields_no={fields_no} field_no={pos==='top'?i+order_no[0]:i+order_no[0]+60} />)}
    </div>
    <div className='go-left'>
      {fields_amount.map((field,i)=><Field key ={`${id}+${i}`} fields_no={fields_no} field_no={pos==='top'?i+order_no[1]:i+order_no[1]+60} />)}    
    </div>
  </>)
}

export default AllTheBoardTracksTwoRows;