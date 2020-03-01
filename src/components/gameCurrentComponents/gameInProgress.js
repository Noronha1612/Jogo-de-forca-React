import React from "react";
import BtnBox from "./buttonBox";

export default function gameInProgress(props) {

    const { categoria } = props

    return (
        <>
            <header>Selecione uma letra</header>

            <div id="word-box">
                <span id="word">{ props.wordInGame }</span>
            </div>
            
            {!!categoria && <div className="categText" >Categoria: { categoria }</div>}

            <BtnBox palpitar={ props.palpitar } />
        </>
    )
}
