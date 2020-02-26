import React from "react";
import BtnBox from "./buttonBox"

export default function gameInProgress(props) {

    return (
        <>
            <header>Selecione uma letra</header>

            <div id="word-box">
                <span id="word">{ props.wordInGame }</span>
            </div>

            <BtnBox palpitar={ props.palpitar } />
        </>
    )
}
