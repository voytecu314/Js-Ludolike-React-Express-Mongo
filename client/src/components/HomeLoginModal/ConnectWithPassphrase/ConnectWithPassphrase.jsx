import { useEffect, useContext } from 'react';
import MyContext from '../../../Context/MyContext';
import hashFunction from '../../../helpers/digestCrypto.js';

const ConnectWithPassphrase = ({setBtnClicked}) => {

  const { passphrase, setPassphrase } = useContext(MyContext);

  useEffect(()=>{
    passphrase && setPassphrase(null);
  });

  const joinGame = async (e) => {
    let passphrase = e.target.previousSibling.value;
    let hash = await hashFunction(passphrase);
    console.log(hash);
    let name;
    while(!name){
      name=prompt('Please input your name');
    }
    fetch('http://localhost:5001/joinGame',{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({hash, name})
    })
    .then(res=>res.json())
    .then(ans=>console.log('response',ans))
    .catch(err=>console.log('errorrr',err));
  }
  

  return (<>
  
    <button onClick={()=>setBtnClicked(false)}>&#x2190; Go back</button>
    <div>
     <input type="text" placeholder="Input passphrase" />
     <button onClick={joinGame}>Connect</button> 
    </div>
    
  </>)
}

export default ConnectWithPassphrase;