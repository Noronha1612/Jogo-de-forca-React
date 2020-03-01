import React, { useState } from 'react';
import Login from "./FormType/Login";
import Register from "./FormType/Register";
import ForgotPass from "./FormType/ForgotPass";


export default function Form(props) {

    function switchForm( display ) { props.transition( ".formItens", display , setForm ) }

    const formularios = {

        1: <Login switchForm={ switchForm } />,

        2: <Register switchForm={ switchForm } />,

        3: <ForgotPass />

    }

    const [ form, setForm ] = useState(1)

    return(
        <>
            <div className="formBox">  
                <i className="fas fa-arrow-left" onClick={ () => { props.transition("#MainDisplay", props.Display, props.returnToMainPage ) } } ></i>
                <div className="formItens">{formularios[form]}</div>
            </div>
        </>
    )
}
