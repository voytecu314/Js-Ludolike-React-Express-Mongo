import HalfTheBoardTracksTwoRows from "../HalfTheBoardTracksTwoRows/HalfTheBoardTracksTwoRows";

const MiddleLeftBoard = () => {
  return (
    <div id="middle-left-board" className="half-of-middle flex-tracks">
      <HalfTheBoardTracksTwoRows fields_no={5} order_no={[41,46]}/>
      <HalfTheBoardTracksTwoRows fields_no={5} order_no={[51,56]}/>
    </div>
  )
}

export default MiddleLeftBoard;
