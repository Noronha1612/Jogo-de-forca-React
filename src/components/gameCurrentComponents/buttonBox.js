import React from "react";
import $ from "jquery";
import "../../css/BtnsPalp.css";
import BtnLine from "./buttonLine";

export default function buttonsLetter(props) {

    const line1 = [ "A", "B", "C", "D", "E", "F", "G", "H", "I" ]

    const line2 = [ "J", "K", "L", "M", "N", "O", "P", "Q", "R" ]

    const line3 = [ "S", "T", "U", "V", "W", "X", "Y", "Z", "Ç" ]

    function handleClick(palp) {
        props.palpitar(palp.l);
        $(`#${palp.l}`).addClass("hidden");
    }
    
    return (
        <div className="btns-box">

            <BtnLine handleClick={ handleClick } letters={ line1 } />
            
            <BtnLine handleClick={ handleClick } letters={ line2 } />
            
            <BtnLine handleClick={ handleClick } letters={ line3 } />
            
        </div>
    )
}
