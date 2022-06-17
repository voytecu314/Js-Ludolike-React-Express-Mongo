import { useState } from "react";
import Game from "./components/Game/Game.jsx";
import HomeLoginModal from "./components/HomeLoginModal/HomeLoginModal.jsx";

function App() {

  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="App">
      {authenticated?<Game />:<HomeLoginModal />}
    </div>
  );
}

export default App;
