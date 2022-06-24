
const Field = ({fields_no, field_no}) => {
  return (
    <div className={`field field-${fields_no}`}>{field_no}</div>
  )
}

export default Field;