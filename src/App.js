import React, { useState } from 'react';
import "./css/Main.css";
import "./css/temas.css";
import Temas from "./components/themes";
import SelectOp from "./components/SelectOp";
import Game from "./components/Game"

function App() {

  function activeGame(type, word) {

    if (type === 1) {

      setDisplayGame(Displays[2](word))

    }

    else if (type === 2) {

      setDisplayGame(Displays[2](word))

    }

  }

  function returnGame() { setDisplayGame( Displays[1] ) }

  const Displays = {

    1: <SelectOp runGame={ activeGame } />,

    2: word => <Game word={ word.toUpperCase() } returnGame={ returnGame } />

  }

  const [ displayGame, setDisplayGame ] = useState(Displays[2]("Teste-jogo"))

  return (
    <div id="Display" className="red">

      <header id="mainHeader">Jogo de forca</header>

      {displayGame}
      
      <Temas />

      <footer>&copy;NoronhaProductions</footer>
    </div>
  );
}

export default App;
