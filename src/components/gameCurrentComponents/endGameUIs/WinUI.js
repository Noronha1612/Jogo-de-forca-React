import React from "react";
import "../../../css/endGameUI.css"

export default function WinUI(props) {

    const icon = <i class="far fa-laugh-beam"></i>

    return(
        <>

            <div className="message-box">

            <h1><strong>{icon}{icon}Parabéns!!{icon}{icon}</strong></h1>
                <h2>Você venceu!</h2>
                <p>Você achou com sucesso a palavra escondida <strong>"{ props.MainWord.replace("-", " ") }"</strong></p>

            </div>

            <button className="returnBtn" onClick={ props.returnGame }>Jogar novamente</button>

        </>
    )
}
