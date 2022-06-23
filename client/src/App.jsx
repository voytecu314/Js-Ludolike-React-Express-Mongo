import { useContext } from "react";
import MyContext from "./Context/MyContext.js";
import Game from "./components/Game/Game.jsx";
import HomeLoginModal from "./components/HomeLoginModal/HomeLoginModal.jsx";

function App() {

  const { authenticated } = useContext(MyContext);

  return (
    <div className="App">
      {authenticated?<Game />:<HomeLoginModal />}
    </div>
  );
}

export default App;
