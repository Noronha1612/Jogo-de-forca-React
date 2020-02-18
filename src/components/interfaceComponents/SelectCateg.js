import React from "react";
import $ from "jquery";


export default function SelectCateg(props) {

    function selectCateg(categ) {
  
      for (let key = 1; key <= 8; key++) {
        if ( $(`#categ${key}`).hasClass("categ-selected") ) $(`#categ${key}`).removeClass("categ-selected")
      }
  
      $(`#categ${categ}`).addClass("categ-selected")
  
      if ( $("#confBtn-Box").hasClass("hidden") ) $("#confBtn-Box").removeClass("hidden")
    }

    return (
        <section>

            <i className="fas fa-arrow-left" onClick={() => { props.transition(0) }} ></i>

            <div className="header type1">Selecione sua categoria</div>

            <div className="categs-box">
              <ul className="categ-line">
                <li id="categ1" className="categ" onClick={() => { selectCateg(1) }}>Animais</li>
                <li id="categ2" className="categ" onClick={() => { selectCateg(2) }}>Cidades</li>
                <li id="categ3" className="categ" onClick={() => { selectCateg(3) }}>Comidas</li>
                <li id="categ4" className="categ" onClick={() => { selectCateg(4) }}>Eletrônicos</li>
              </ul>

              <ul className="categ-line">
                <li id="categ5" className="categ" onClick={() => { selectCateg(5) }}>Esportes</li>
                <li id="categ6" className="categ" onClick={() => { selectCateg(6) }}>Video-games</li>
                <li id="categ7" className="categ" onClick={() => { selectCateg(7) }}>Pokémons</li>
                <li id="categ8" className="categ" onClick={() => { selectCateg(8) }}>Todas as categorias</li>
              </ul>
            </div>

            <div id="confBtn-Box" className="hidden"><button className="confBtn2" onClick={ () => { props.confirmOption(1) } }>Confirmar</button></div>

        </section>
    )
}
