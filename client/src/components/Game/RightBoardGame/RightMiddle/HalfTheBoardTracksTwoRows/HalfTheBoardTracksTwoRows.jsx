import Field from "../../RightTopBottom/AllTheBoardTracksTwoRows/Field/Field";
import { useId } from "react";

const HalfTheBoardTracksTwoRows = ({fields_no,order_no}) => {
  
  const id=useId();

  const fields_amount=new Array(fields_no);
  fields_amount.fill(0);

  return (<>
    <div className='go-right'>
      {fields_amount.map((field,i)=><Field key={`${id}+${i}x`} fields_no={fields_no} field_no={i+order_no[0]}/>)}
    </div>
    <div className='go-left'>
      {fields_amount.map((field,i)=><Field key={`${id}+${i}x`} fields_no={fields_no} field_no={i+order_no[1]}/>)}    
    </div>
  </>)
}

export default HalfTheBoardTracksTwoRows;
