import MyContext from './MyContext.js';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5555/');

socket.on('connect', ()=>{
    console.log('Connection with id:', socket.id);
  });

const MyProvider = ({children}) => {

    console.log(socket.id);

  return (
    <MyContext.Provider>
        {children}
    </MyContext.Provider>
  )
}

export default MyProvider;