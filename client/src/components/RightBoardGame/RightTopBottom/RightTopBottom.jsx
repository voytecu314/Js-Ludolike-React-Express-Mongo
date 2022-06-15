import AllTheBoardTracksTwoRows from "./AllTheBoardTracksTwoRows/AllTheBoardTracksTwoRows";
const RightTopBottom = () => {
  return (
    <div className='one-third-of-board flex-tracks'>
      <AllTheBoardTracksTwoRows fields_no={10}/>
      <AllTheBoardTracksTwoRows fields_no={10}/>
    </div>
  )
}

export default RightTopBottom;