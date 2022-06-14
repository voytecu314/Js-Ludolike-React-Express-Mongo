import Field from "./Field/Field";

const AllTheBoardTracksTwoRows = () => {
  return (<>
    <div className='go-right'>
      <Field /><Field /><Field /><Field /><Field /><Field /><Field /><Field /><Field /><Field />
    </div>
    <div className='go-left'>
      <Field /><Field /><Field /><Field /><Field /><Field /><Field /><Field /><Field /><Field />
    </div>
  </>)
}

export default AllTheBoardTracksTwoRows;