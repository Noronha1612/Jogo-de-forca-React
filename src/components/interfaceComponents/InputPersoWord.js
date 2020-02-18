import React from "react";


export default function InputPersoWord(props) {

    return (
        <section>

            <i className="fas fa-arrow-left" onClick={() => { props.transition(0) }} ></i>

            <div className="header type1">Digite sua palavra</div>
            
            <input type="password" id="input-word" placeholder="Palavra" />

            <button onClick={() => { props.confirmOption(2) }} className="confBtn1">Confirmar</button>

        </section>
    )
}
