import React from 'react';
import "../../css/Formularios/Login.css";

function BtnThird(props) {
    return (
        <div className="BtnThird"><span className={ props.classe }>{props.icon}{props.children}</span></div>
    )
}

export default function Login(props) {

    return (
        <>
            <div className="inputDataLog">

                <header><i className="fas fa-user"></i>Login</header>


                <div> <input type="text" id="user" className="OrdInput" placeholder="Usuário" autoComplete="off" /> </div>
                <div> <input type="password" id="pass" className="OrdInput" placeholder="Senha" autoComplete="off" /> </div>
                <input type="submit" value="Logar" id="submitBtn" />
                

                <div className="hLink-box">

                    <div><span onClick={ () => props.switchForm(3) } className="hLink">Esqueceu sua senha?</span></div>

                    <div><span onClick={ () => props.switchForm(2) } className="hLink">Não possui conta?</span></div>

                </div>

            </div>

            <div className="lgnThirds">

                <header>Login por terceiros</header>

                <div className="btnsThird">

                    <BtnThird icon={ <i className="fab fa-google"></i> } classe="goo" >Fazer login com Google +</BtnThird>
                    <BtnThird icon={ <i className="fab fa-facebook-f"></i> } classe="face" >Fazer login com Facebook</BtnThird>
                    <BtnThird icon={ <i className="fas fa-envelope"></i> } classe="out" >Fazer login com Outlook</BtnThird>

                </div>

            </div>
        </>
    )
}
