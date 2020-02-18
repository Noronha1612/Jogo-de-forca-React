import React from "react";
import "../../../css/endGameUI.css"

export default function LoseUI(props) {

    return (
        <>

            <div className="message-box">

                <h1><strong>☠️☠️Iiih... Deu ruim!!☠️☠️</strong></h1>
                <h2>Você perdeu!</h2>
                <p>A palavra escondida era <strong>"{ props.MainWord.replace("-", " ") }"</strong></p>

            </div>

            <button className="returnBtn" onClick={ props.returnGame }>Tentar Novamente</button>

        </>
    )
}
