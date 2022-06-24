import { useContext } from 'react';
import MyContext from '../../../Context/MyContext';
import hashFunction from '../../../helpers/bcrypt';

const Passphrase = ({passphrase}) => {

  const { setAuthenticated, setGameState } = useContext(MyContext);

  const promptName = (notEmpty) => {
    while(!notEmpty){
      notEmpty = prompt('Please enter your name');
    }
    const name = notEmpty;
    return name;
  }

  const takePassphrase = (e) => {
    
    setAuthenticated(true);
    localStorage.setItem('JSBoardGame', JSON.stringify({passphrase}));
    const hash = hashFunction(passphrase);
    
    const name = !e.target.previousSibling.value?
    promptName(e.target.previousSibling.value):
    e.target.previousSibling.value;
    
    fetch('http://localhost:5001/createGame',{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({hash, name})
    })
    .then(res=>res.json())
    .then(data=>setGameState(data))
    .catch(console.log);
  }

  return (
        <div id="passphrase-div">
        <p>Copy passphrase shown below and share with your friends <br /> (dot included) </p>
        <br /><br /><br />
        <p id="passphrase">{passphrase}</p>
        <br />
       
          <input type="text" name="" placeholder='Input your name' />
          <button onClick={takePassphrase}>GO!</button>
        
        
      </div>
  )
}

export default Passphrase;