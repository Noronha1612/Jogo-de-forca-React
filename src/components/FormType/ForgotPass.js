import React from 'react';
import "../../css/Formularios/ForgotPass.css";

export default function ForgotPass() {

    const verifyEmail = email => {

        const subStrsEmail = email.split("@");

        if ( subStrsEmail.length !== 2 || subStrsEmail[0].length < 3 ) {
            return false;
        }

        const dotSeparator = subStrsEmail[1].split(".");

        if ( dotSeparator.length !== 2 && dotSeparator.length !== 3 && dotSeparator.length !== 4 ) {
            return false;
        }

        let errorFound = false;

        dotSeparator.forEach( (str, i) => {
            if ( i === 0 && str.length === 0 ) errorFound = true;
            if( i !== 0 && str.length !== 2 && str.length !== 3 ) errorFound = true;
        } );

        if ( errorFound ) {
            return false
        }

        return true

    }

    function sendEmail() {
        const email = document.getElementById("emailForgPass").value;

        const isValid = verifyEmail(email);

        if (isValid) alert(`Sending an email to "${email}"...`)
        else alert("Invalid email")
    }

    return (
        <div className="forgotPass">
            <header>Digite seu email</header>

            <div className="inputEmail"><input type="text" id="emailForgPass" placeholder="Digite o email aqui" /></div>

            <button className="submitBtn" onClick={ sendEmail } >Mandar um email</button>
        </div>
    )
}
