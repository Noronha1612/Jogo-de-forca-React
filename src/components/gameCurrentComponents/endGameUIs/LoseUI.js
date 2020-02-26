import React from "react";
import "../../../css/endGameUI.css"

export default function LoseUI(props) {

    const icon = <i className="fas fa-skull"></i>

    return (
        <>

            <div className="message-box">

            <h1><strong>{icon}{icon}Iiih... Deu ruim!!{icon}{icon}</strong></h1> 
                <h2>Você perdeu!</h2>
                <p>A palavra escondida era <strong>"{ props.MainWord.replace("-", " ") }"</strong></p>

            </div>

            <button className="returnBtn" onClick={ props.returnGame }>Tentar Novamente</button>

        </>
    )
}
