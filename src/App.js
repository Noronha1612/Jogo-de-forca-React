import React, { useState } from 'react';
import usePersistedTheme from "./usePersistedState";
import $ from 'jquery';
import "./css/Main.css";
import "./css/temas.css";
import "./css/Formularios/Form.css";
import Temas from "./components/themes";
import SelectOp from "./components/SelectOp";
import Game from "./components/Game";
import Form from "./components/Form";



function App() {

  // Função para animar a transição de um display para outro
  function transition(displayBox, newDisplay, functionToChange) {

    $(displayBox).fadeOut(300);

    setTimeout(() => {

      functionToChange( newDisplay ); 

      $(displayBox).fadeIn(300);

    }, 300);

  }

  // Função para ativar o jogo após a seleção de uma categoria ou inserção de uma palavra no componente "SelectOp"
  function activeGame(type, word, categKey) {

    if (type === 1) {

      const categNames = {
        1: "Animais",
        2: "Cidades",
        3: "Comidas",
        4: "Eletrônicos",
        5: "Esportes",
        6: "Video Games",
        7: "Pokémons",
        8: "Todas as categorias"
      }

      const categ = categNames[categKey]

      transition("#MainDisplay", Displays[2](word, categ), setDisplayGame)

    }

    else if (type === 2) {

      transition("#MainDisplay", Displays[3](word), setDisplayGame)

    }

  }

  // Função para voltar ao inicio do jogo ao acabar (Independente de o resultado ser vitória ou derrota)
  function returnGame() {

    transition("#MainDisplay", Displays[1], setDisplayGame)

  }

  // Função para mostrar o formulário ao clicar no icone no canto inferior esquerdo enquanto o componente "SelectOp" estiver ativo
  function showForm() {

    transition("#MainDisplay", Displays[4], setDisplayGame)

  }

  const [ displayGame, setDisplayGame ] = useState( <SelectOp runGame={ activeGame } showForm={ showForm } /> )

  // Diferentes Displays para cada estado da aplicação (Provavelmente isso pode ser substituido por ReactRoutes... Mas ainda não tenho conhecimento para isso :D )
  const Displays = {

    1: <SelectOp runGame={ activeGame } showForm={ showForm } />,

    2: (word, categ) => <Game word={ word.toUpperCase() } returnGame={ returnGame } categoria={ categ } />,

    3: word => <Game word={ word.toUpperCase() } returnGame={ returnGame } />,

    4: <Form transition={ transition } Display={ <SelectOp runGame={ activeGame } showForm={ showForm } /> } returnToMainPage={ setDisplayGame } />

  }

  const [ theme, setTheme ] = usePersistedTheme("tema", "#e55039")

  return (
    <div id="Display" style={ {background: theme} }>

      <header id="mainHeader">Jogo de forca</header>

      <div id="MainDisplay"> {displayGame} </div>
      
      <Temas changeTheme={ setTheme } />

      <footer>&copy;NoronhaProductions</footer>
    </div>
  );
}

export default App;
