import { useContext } from 'react'
import MyContext from '../../../Context/MyContext';

const CreateNewGame = ({setBtnClicked}) => {

  const { setPassphrase } = useContext(MyContext);

  const getPassphrase = () => {
    fetch('http://localhost:5001/getPass')
    .then(res=>res.json())
    .then(answer=>setPassphrase(answer.passphrase))
    .catch(err=>setPassphrase(err.message + ' - please try again later'));
  }
//please fix error -> do error modal
  const togglePassphrase = () => {
    setBtnClicked(false);
    setPassphrase(null);
  }

  return (<>
    <button onClick={togglePassphrase}>&#x2190; Go back</button>
    <button onClick={getPassphrase}>Generate new Passphrase</button>
  </>)

}

export default CreateNewGame;