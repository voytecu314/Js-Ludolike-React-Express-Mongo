import { useState, useContext } from 'react';
import MyContext from '../../Context/MyContext.js';
import Passphrase from './PassPhrase/Passphrase.jsx';
import CreateNewGame from './CreateNewGame/CreateNewGame.jsx';
import ConnectWithPassphrase from './ConnectWithPassphrase/ConnectWithPassphrase.jsx';
import './home_login_modal.css';

const HomeLoginModal = () => {

  const { passphrase } = useContext(MyContext);

  const [btnClicked, setBtnClicked] = useState(false);

  const clickOnBtn = (e) => {
    setBtnClicked(e.target.innerText);
  }

  return (
    <div id="home-login-modal">
      <h1>JS Board Game</h1>
      {passphrase && <Passphrase passphrase={passphrase}/>}
      <div id="modal-buttons">
      { btnClicked ? 
        btnClicked === 'Create new game' ?
        <CreateNewGame setBtnClicked={setBtnClicked}/>: <ConnectWithPassphrase setBtnClicked={setBtnClicked} /> :
        <>
        <button onClick={clickOnBtn}>Create new game</button>
        <button onClick={clickOnBtn}>Connect with passphrase</button>
        </>}
      </div>
      
    </div>
  )
}

export default HomeLoginModal;