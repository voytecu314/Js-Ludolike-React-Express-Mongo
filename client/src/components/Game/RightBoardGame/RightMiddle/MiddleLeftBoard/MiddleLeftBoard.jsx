import HalfTheBoardTracksTwoRows from "../HalfTheBoardTracksTwoRows/HalfTheBoardTracksTwoRows";

const MiddleLeftBoard = () => {
  return (
    <div id="middle-left-board" className="half-of-middle flex-tracks">
      <HalfTheBoardTracksTwoRows fields_no={5}/>
      <HalfTheBoardTracksTwoRows fields_no={5}/>
    </div>
  )
}

export default MiddleLeftBoard;
