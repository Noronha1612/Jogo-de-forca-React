import React from "react";
import BtnsLetter from "./buttonsLetter"

export default function gameInProgress(props) {

    return (
        <>
            <header>Selecione uma letra</header>

            <div id="word-box">
                <span id="word">{ props.wordInGame }</span>
            </div>

            <BtnsLetter palpitar={ props.palpitar } />
        </>
    )
}
