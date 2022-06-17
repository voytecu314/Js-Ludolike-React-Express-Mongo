import StartingBase from "./StartingBase/StartingBase.jsx";
import Dice from "./Dice/Dice.jsx";
import PlayerStats from "./PlayerStats/PlayerStats.jsx";

const LeftInfoBoard = () => {
  return (
    <section id="left-info-board">
      
      <StartingBase />
      <Dice />
      <PlayerStats />

    </section>
  )
}

export default LeftInfoBoard;