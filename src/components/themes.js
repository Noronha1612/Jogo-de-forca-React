import React, { useEffect } from "react";
import $ from "jquery";

// Props esperada: iden, ClassName, trocar(função), colorTheme
function BtnTheme(props) {

  return (
    <li id={ props.iden } className={ props.ClassName } onClick={ props.trocar } style={{background: props.colorTheme}} ></li>
  )
}

export default function Temas(props) {

    function trocar(cod, cor) {
      
      props.changeTheme([cor, cod])
  
      for (let btn = 1; btn <= 5; btn++) {
        if ( $(`#btn${btn}`).hasClass("selected") ) $(`#btn${btn}`).removeClass("selected")
      }
  
      if ( !$(`#btn${cod}`).hasClass("selected") ) $(`#btn${cod}`).addClass("selected")
  
    };

    useEffect( () => {
      const theme = localStorage.getItem("tema");

      if (!theme) {

        $(".theme-box #btn1").addClass("selected");

        return;
      };

      const newTheme = theme.split(",");

      $(`.theme-box #btn${newTheme[1]}`).addClass("selected");

    }, [] );
  
    return (
      <div className="temas">
        <ul className="theme-box">
          <span><i className="fas fa-arrow-left"></i>Temas</span>
          <BtnTheme iden="btn1" ClassName="btnTheme" trocar={ () => trocar(1, "#e55039") } colorTheme="#e55039" />
          <BtnTheme iden="btn2" ClassName="btnTheme" trocar={ () => trocar(2, "#4a69bd") } colorTheme="#4a69bd" />
          <BtnTheme iden="btn3" ClassName="btnTheme" trocar={ () => trocar(3, "#78e08f") } colorTheme="#78e08f" />
          <BtnTheme iden="btn4" ClassName="btnTheme" trocar={ () => trocar(4, "#fa983a") } colorTheme="#fa983a" />
          <BtnTheme iden="btn5" ClassName="btnTheme" trocar={ () => trocar(5, "#D980FA") } colorTheme="#D980FA" />
        </ul>
      </div>
    );
}
