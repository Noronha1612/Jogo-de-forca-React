import React from "react";
import $ from "jquery";

export default function Temas() {

    function trocar(cod) {
      const cores =  {
        1: "red",
        2: "blue",
        3: "green",
        4: "yellow",
      }
  
      const cor = cores[cod]
  
      document.getElementById("Display").className = cor
  
      for (let btn = 1; btn <= 4; btn++) {
        if ( $(`#btn${btn}`).hasClass("selected") ) $(`#btn${btn}`).removeClass("selected")
      }
  
      if ( !$(`#btn${cod}`).hasClass("selected") ) $(`#btn${cod}`).addClass("selected")
  
    }
  
    return (
      <div className="temas">
        <ul className="theme-box">
          <li id="btn1" className="btn red selected" onClick={() => { trocar(1) }}></li>
          <li id="btn2" className="btn blue" onClick={() => { trocar(2) }}></li>
          <li id="btn3" className="btn green" onClick={() => { trocar(3) }}></li>
          <li id="btn4" className="btn yellow" onClick={() => { trocar(4) }}></li>
        </ul>
      </div>
    );
}
