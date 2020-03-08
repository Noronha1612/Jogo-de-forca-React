import React from 'react';

export default function BtnLine(props) {

    return (
    <ul className="btn-line">
        {props.letters.map(l => <li key={l} id={l} className="btnPalp" onClick={ () => props.handleClick({l}) }>{l}</li>)}
    </ul>)
}
