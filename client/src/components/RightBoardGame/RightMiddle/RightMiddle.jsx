import MiddleLeftBoard from "./MiddleLeftBoard/MiddleLeftBoard";
import InfoBoard from "./InfoBoard/InfoBoard";

const RightMiddle = () => {
  return (
    <div id="right-middle" className='one-third-of-board'>
      <MiddleLeftBoard />
      <InfoBoard />
    </div>
  )
}

export default RightMiddle;