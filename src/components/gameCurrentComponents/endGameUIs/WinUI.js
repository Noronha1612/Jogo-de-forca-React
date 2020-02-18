import React from "react";
import "../../../css/endGameUI.css"

export default function WinUI(props) {

    return(
        <>

            <div className="message-box">

                <h1><strong>🎉🎉Parabéns!!🎉🎉</strong></h1>
                <h2>Você venceu!</h2>
                <p>Você achou com sucesso a palavra escondida <strong>"{ props.MainWord.replace("-", " ") }"</strong></p>

            </div>

            <button className="returnBtn" onClick={ props.returnGame }>Jogar novamente</button>

        </>
    )
}
