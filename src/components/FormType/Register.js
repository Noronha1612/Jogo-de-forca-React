import React, { useState } from 'react';
import "../../css/Formularios/Register.css";

export default function Register(props) {

    const [ status, setStatus ] = useState( <span className="default" >Preencha os dados</span> )

    function verifyRegData() {

        const verify = {

            user: () => {

                const user = document.getElementById('userReg').value.trim();

                if ( user.length >= 3 && user.length < 19 ) return true;

                else {
                    if ( user.length <= 3 ) setStatus(<span className="red" >O usuário não pode ter menos que 3 letras</span>);
                    
                    if ( user.length >= 19 ) setStatus(<span className="red" >O usuário não pode ter mais que 18 letras</span>);

                    return false
                }

            },

            cell: () => {

                const cell = document.getElementById("cellReg").value.trim();

                let letterFound = false;

                cell.split("").forEach( item => { if ( "1234567890".indexOf(item) === -1 ) letterFound = true } )

                if ( !letterFound ) if( cell.length === 11 || cell.length === 10 ) return true

                setStatus(<><div className="red" >Digite o número como o exemplo:</div><div className="red" > 83987654321(para celulares) ou<div> 5133325824(para telefones fixos)</div></div></>)
                
                return false
            },

            pass: () => {
                
                const pass = document.getElementById("passReg").value;

                if ( pass.trim().length < 6 ) {
                    setStatus(<span className="red" >Senha muito curta</span>);
                    return false
                }

                const confPass = document.getElementById("confPassReg").value;

                if ( pass !== confPass ) {
                    setStatus(<span className="red" >A confirmação da senha está incorreta</span>)
                    return false
                }
                else return true;

            },

            email: () => {
                
                const email = document.getElementById("emailReg").value;

                const subStrsEmail = email.split("@");

                const erro = <span className="red" >Email inválido</span>

                if ( subStrsEmail.length !== 2 || subStrsEmail[0].length < 3 ) {
                    setStatus(erro);
                    return false;
                }

                const dotSeparator = subStrsEmail[1].split(".");

                if ( dotSeparator.length !== 2 && dotSeparator.length !== 3 && dotSeparator.length !== 4 ) {
                    setStatus(erro);
                    return false;
                }

                let errorFound = false;

                dotSeparator.forEach( (str, i) => {
                    if ( i === 0 && str.length === 0 ) errorFound = true;
                    if( i !== 0 && str.length !== 2 && str.length !== 3 ) errorFound = true;
                } );

                if ( errorFound ) {
                    setStatus(erro);
                    return false
                }

                return true

            }

        }
        
        if ( verify.user() && verify.cell() && verify.pass() && verify.email() ) setStatus(<span className="red" >Dados Válidos!</span>);

    }

    return (
        <>
            <div className="inputDataReg">

                <header>Registrar</header>

                <div className="status">{status}</div>

                <div className="form" >

                    <div className="line line1">
                        <input type="text" id="userReg" placeholder="Usuário*" autoComplete="off" />
                        <input type="tel" id="cellReg" placeholder="Número de celular*" autoComplete="off" />
                    </div>

                    <div className="line line2">
                        <input type="password" id="passReg" autoComplete="off" placeholder="Senha*" />
                        <input type="password" id="confPassReg" autoComplete="off" placeholder="Confirmar senha*" />
                    </div>

                    <div className="line line3">
                        <input type="text" id="emailReg" autoComplete="off" placeholder="Email*" />
                    </div>

                    <input type="submit" value="Registrar" onClick={ verifyRegData } />

                </div>

                <button onClick={ () => props.switchForm(1) }>Já possui conta?</button>

            </div>
        </>
    )
}