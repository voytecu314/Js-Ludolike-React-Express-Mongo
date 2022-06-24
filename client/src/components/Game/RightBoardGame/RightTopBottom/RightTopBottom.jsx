import AllTheBoardTracksTwoRows from "./AllTheBoardTracksTwoRows/AllTheBoardTracksTwoRows";
const RightTopBottom = ({pos}) => {
  return (
    <div className='one-third-of-board flex-tracks'>
      <AllTheBoardTracksTwoRows fields_no={10} order_no={[1,11]} pos={pos} />
      <AllTheBoardTracksTwoRows fields_no={10} order_no={[21,31]} pos={pos} />
    </div>
  )
}

export default RightTopBottom;