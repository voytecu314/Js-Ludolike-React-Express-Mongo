import { useEffect, useContext } from 'react';
import MyContext from '../../../Context/MyContext';

const ConnectWithPassphrase = ({setBtnClicked}) => {

  const { passphrase, setPassphrase } = useContext(MyContext);

  useEffect(()=>{
    passphrase && setPassphrase(null);
  });
  

  return (<>
  
    <button onClick={()=>setBtnClicked(false)}>&#x2190; Go back</button>
    <div>
     <input type="text" placeholder="Input passphrase" />
     <button>Connect</button> 
    </div>
    
  </>)
}

export default ConnectWithPassphrase;