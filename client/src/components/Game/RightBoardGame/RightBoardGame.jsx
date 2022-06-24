import RightMiddle from "./RightMiddle/RightMiddle.jsx";
import RightTopBottom from "./RightTopBottom/RightTopBottom.jsx";

const RightBoardGame = () => {
  return (
    <section id="right-board-game">
      
      <RightTopBottom pos={'top'}/>
      <RightMiddle />
      <RightTopBottom pos={'bottom'}/>

    </section>
  )
}

export default RightBoardGame;