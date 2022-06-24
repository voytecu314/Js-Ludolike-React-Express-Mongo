import './players.css';

const Players = ({ player_no, avatar, name }) => {


  return (
    <div id="players-div">
        <span>{name}</span>
        {avatar==='default'?
        <span style={{color: `rgb(${player_no*10},${player_no*10},${player_no*10})`}}>&#9817;</span>:
        <img src="avatar" alt={`avatar for ${name}`} />}
    </div>
  )
}

export default Players;