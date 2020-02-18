import React from "react";
import $ from "jquery";
import "../../css/BtnsPalp.css"

export default function buttonsLetter(props) {

    function handleClick(palp) {
        props.palpitar(palp);
        $(`#${palp}`).addClass("hidden");
    }
    
    return (
        <div className="btns-box">
            <ul className="btn-line">
                <li id="A" className="btn" onClick={ () => handleClick("A") }>A</li>
                <li id="B" className="btn" onClick={ () => handleClick("B") }>B</li>
                <li id="C" className="btn" onClick={ () => handleClick("C") }>C</li>
                <li id="D" className="btn" onClick={ () => handleClick("D") }>D</li>
                <li id="E" className="btn" onClick={ () => handleClick("E") }>E</li>
                <li id="F" className="btn" onClick={ () => handleClick("F") }>F</li>
                <li id="G" className="btn" onClick={ () => handleClick("G") }>G</li>
                <li id="H" className="btn" onClick={ () => handleClick("H") }>H</li>
                <li id="I" className="btn" onClick={ () => handleClick("I") }>I</li>
            </ul>
            <ul className="btn-line">
                <li id="J" className="btn" onClick={ () => handleClick("J") }>J</li>
                <li id="K" className="btn" onClick={ () => handleClick("K") }>K</li>
                <li id="L" className="btn" onClick={ () => handleClick("L") }>L</li>
                <li id="M" className="btn" onClick={ () => handleClick("M") }>M</li>
                <li id="N" className="btn" onClick={ () => handleClick("N") }>N</li>
                <li id="O" className="btn" onClick={ () => handleClick("O") }>O</li>
                <li id="P" className="btn" onClick={ () => handleClick("P") }>P</li>
                <li id="Q" className="btn" onClick={ () => handleClick("Q") }>Q</li>
                <li id="R" className="btn" onClick={ () => handleClick("R") }>R</li>
            </ul>
            <ul className="btn-line">
                <li id="S" className="btn" onClick={ () => handleClick("S") }>S</li>
                <li id="T" className="btn" onClick={ () => handleClick("T") }>T</li>
                <li id="U" className="btn" onClick={ () => handleClick("U") }>U</li>
                <li id="V" className="btn" onClick={ () => handleClick("V") }>V</li>
                <li id="W" className="btn" onClick={ () => handleClick("W") }>W</li>
                <li id="X" className="btn" onClick={ () => handleClick("X") }>X</li>
                <li id="Y" className="btn" onClick={ () => handleClick("Y") }>Y</li>
                <li id="Z" className="btn" onClick={ () => handleClick("Z") }>Z</li>
                <li id="Ç" className="btn" onClick={ () => handleClick("Ç") }>Ç</li>
            </ul>
        </div>
    )
}
