import React from "react";
import $ from "jquery";

function CategSelBtn(props) {

  function selectCateg(categ) {

    for (let key = 1; key <= 8; key++) {
      if ( $(`#categ${key}`).hasClass("categ-selected") ) $(`#categ${key}`).removeClass("categ-selected")
    }

    $(`#categ${categ}`).addClass("categ-selected")

    if ( $("#confBtn-Box").hasClass("hidden") ) $("#confBtn-Box").removeClass("hidden")
  }

  return <li id={ `categ${props.Iden}` } className="categ" onClick={ () => { selectCateg(props.Iden) } } >{props.children}</li>
}


export default function SelectCateg(props) {
    return (
        <section>

            <i className="fas fa-arrow-left" onClick={() => { props.transitionSelectOp(0) }} ></i>

            <div className="header type1">Selecione sua categoria</div>

            <div className="categs-box">
              <ul className="categ-line">
                <CategSelBtn Iden={1}>Animais</CategSelBtn>
                <CategSelBtn Iden={2} >Cidades</CategSelBtn>
                <CategSelBtn Iden={3}>Comidas</CategSelBtn>
                <CategSelBtn Iden={4}>Eletrônicos</CategSelBtn>
              </ul>

              <ul className="categ-line">
                <CategSelBtn Iden={5}>Esportes</CategSelBtn>
                <CategSelBtn Iden={6}>Video-games</CategSelBtn>
                <CategSelBtn Iden={7}>Pokémons</CategSelBtn>
                <CategSelBtn Iden={8}>Todas as categorias</CategSelBtn>
              </ul>
            </div>

            <div id="confBtn-Box" className="hidden"><button className="confBtn2" onClick={ () => { props.confirmOption(1) } }>Confirmar</button></div>

        </section>
    )
}
