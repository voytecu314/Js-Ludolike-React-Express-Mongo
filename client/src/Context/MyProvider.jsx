import MyContext from './MyContext.js';
import { useState, useEffect } from "react";
import { io } from 'socket.io-client';

const socket = io('http://localhost:5001/');

const MyProvider = ({children}) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [response, setResponse] = useState("");
    const [passphrase, setPassphrase] = useState(null);

    useEffect(() => {
      
      socket.on("FromAPI", data => {
        setResponse(data);
        console.log(data);
      });
    }, []);

  return (
    <MyContext.Provider value={{response,
                               passphrase,
                               setPassphrase,
                               authenticated,
                               setAuthenticated}}>
        {children}
    </MyContext.Provider>
  )
}

export default MyProvider;