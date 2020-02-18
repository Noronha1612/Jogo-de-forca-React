import React, { useState } from "react";
import $ from 'jquery';
import "../css/selectOp.css";
import MainSelectInterface from "./interfaceComponents/MainSelectInterface";
import SelectCateg from "./interfaceComponents/SelectCateg";
import InputPersoWord from "./interfaceComponents/InputPersoWord";
import generateRandomWord from "../randomWords"

export default function SelectOp(props) {

  function confirmOption(option) {

    function formatWord(RawWord) {

      const charArrayRaw = RawWord.split(" ");

      const charArrayFormat = charArrayRaw.filter( char => (char? true: false));

      const FormatWord = charArrayFormat.join("-");

      return FormatWord 
    }
    
    if ( option === 1 ) { 

      const categs = {

        1: "animais",
        2: "cidades",
        3: "comidas",
        4: "eletro",
        5: "esportes",
        6: "jogos",
        7: "pokemons",
        8: "geral"

      }

      let categ;

      for ( let key = 1; key <= 8; key++ ) {
        if ( $(`#categ${key}`).hasClass("categ-selected") ) categ = categs[key]
      }

      const randomWord = generateRandomWord(categ).toUpperCase();

      const formatRandomWord = formatWord(randomWord)

      props.runGame(1, formatRandomWord)

    }

    else if (option === 2) {

      const RawWord = document.getElementById("input-word").value.toUpperCase();

      const FormatWord = formatWord(RawWord)

      const verifys = {

        checkLength: word => { 
          if ( word.length < 3 || word.length > 15 ) {
            if ( word.length < 3 ) alert("Erro ao digitar a palavra: A palavra não pode conter menos que 3 caracteres válidos");
            if ( word.length > 15 ) alert("Erro ao digitar a palavra: A palavra não pode conter mais que 15 caracteres válidos");
            return false
          }

          else return true

        },

        checkCharacters: word => {

          const characters = "abcdefghijklmnopqrstuvwxyzç ".toUpperCase();
          
          let validate = true

          word.split("").forEach(letra => { if (characters.indexOf(letra) === -1) validate = false })

          if ( !validate ) alert("Erro ao digitar a palavra: Caractere inválido encontrado, por favor, reescreva a palavra")

          return validate
        }

      }

      if ( verifys.checkLength(FormatWord) && verifys.checkCharacters(RawWord) ) {

        props.runGame(2, FormatWord)

      }
      
    }

  }

  function transition(btn) { 

    $("section").fadeOut(300);
    setTimeout(() => { 
      setContent(interfaces[btn]) 
      $("section").fadeIn(300)
    }, 300)
  }

  const interfaces = {

    // Interface Principal
    0: <MainSelectInterface transition={ transition } />,

    // Interface De Selecionar categoria
    1: <SelectCateg transition={ transition } confirmOption={ confirmOption } />,

    // Interface de Digitar uma palavra
    2: <InputPersoWord transition={ transition } confirmOption={ confirmOption } />

  }

  const [ content, setContent ] = useState(interfaces[0])

  return(
    <div id="mainPage">
      {content}
    </div>

  );
}
