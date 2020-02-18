import React, { useState, useEffect } from 'react';
import "../css/Game.css";
import Fase1 from "../phases/fase1.png";
import Fase2 from "../phases/fase2.png";
import Fase3 from "../phases/fase3.png";
import Fase4 from "../phases/fase4.png";
import Fase5 from "../phases/fase5.png";
import Fase6 from "../phases/fase6.png";
import Fase7 from "../phases/fase7.png";
import GIP from "./gameCurrentComponents/gameInProgress";
import WinUI from "./gameCurrentComponents/endGameUIs/WinUI";


// Props esperada: word(Palavra gerada a partir do tipo de seleção)

export default function Game(props) {

    const Fases = {
        1: Fase1,
        2: Fase2,
        3: Fase3,
        4: Fase4,
        5: Fase5,
        6: Fase6,
        7: Fase7,
    }

    const MainWord = props.word;

    const CharsMainWord = MainWord.split("")

    const WordArray = []

    CharsMainWord.forEach( char => {
        if (char !== "-" ) WordArray.push("_");
        else WordArray.push("-") 
    } )

    const InitialWord = WordArray.join("")

    const [ wordInGame, changeWordInGame ] = useState(InitialWord)

    const [ phase, setPhase ] = useState(1)

    const [ phaseSource, setPhaseSource ] = useState(Fases[phase])

    useEffect(() => { setPhaseSource(Fases[phase]) }, [ phase, Fases ])

    useEffect(() => { if ( wordInGame.indexOf("_") === -1 ) { setIsGameInProgress([false, 2]) } }, [ wordInGame ])

    function palpitar(letra) {

        if ( CharsMainWord.indexOf(letra.toUpperCase()) === -1 ) {
            
            setPhase(phase + 1)

            if (phase === 6) { setIsGameInProgress([false, 1]) }

        }

        else {

            CharsMainWord.forEach( (l, i) => {

                if ( l === letra.toUpperCase() ) changeWordInGame( palavra => {
                    const palavraLetras = palavra.split("");
                    palavraLetras[i] = l
                    return palavraLetras.join("")
                    
                } )

            })

        }

    }

    function endGame(final) {
        if ( final === 1 ) return endGameUIs.end1
        else if ( final === 2 ) return endGameUIs.end2
    }

    const endGameUIs = {

        returnToMainPage: () => { props.returnGame },

        end1: <div>Perdeu!</div>,

        end2: <WinUI returnGame={ this.returnToMainPage } />

    }

    const [ isGameInProgress, setIsGameInProgress ] = useState( [false, 2] )

    return (
            <div id="Game-box">

                <div className="img-box"><img src={phaseSource} alt="" /></div>

                

                <div className="userInterface">
                    {isGameInProgress[0]? <GIP wordInGame={ wordInGame } palpitar={ palpitar } /> : endGame(isGameInProgress[1]) }
                </div>



            </div>
    )
}
