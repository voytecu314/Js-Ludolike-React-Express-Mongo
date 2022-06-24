import './starting_base.css';
import Players from '../../Players/Players';
import { useContext } from 'react';
import MyContext from '../../../../Context/MyContext';

const StartingBase = () => {

  const { gameState } = useContext(MyContext);
  const players = gameState.players;

  return (
    <div id="starting-base" className='one-third-of-board'>
      
      <div id="starting-grid">
        {players && players.map((player, i)=><Players key={i+765} player_no={i} avatar={player.avatar} name={player.name}/>)}
      </div>

    </div>
  )
}

export default StartingBase;